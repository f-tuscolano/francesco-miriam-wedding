/**
 * RSVP del sito di Francesco e Miriam -> foglio Google.
 *
 * Da incollare in Estensioni > Apps Script del foglio, poi:
 *   1. esegui una volta la funzione  setup  (crea i tre fogli; l'esito si legge
 *      nel registro di esecuzione, in basso nell'editor)
 *   2. Distribuisci > Nuova distribuzione > Applicazione web
 *      Esegui come: me   ·   Chi ha accesso: Tutti
 *   3. copia l'URL che finisce con /exec e mettilo in RSVP_ENDPOINT
 *      dentro script.js del sito
 *
 * Attenzione: dopo ogni modifica a questo file serve una NUOVA distribuzione
 * (o Gestisci distribuzioni > modifica > Versione: nuova), altrimenti online
 * resta la versione vecchia.
 *
 * Cosa fa:
 *   GET  ?code=ROSSI27   verifica il codice invito e restituisce nome e posti
 *                        (così l'elenco invitati non sta nel repo pubblico)
 *   POST {…}             salva la risposta: una riga per invito nel foglio
 *                        "Risposte", più lo storico completo in "Storico"
 */

// Quanto tenere in cache la lista invitati. Serve perché leggere il foglio è
// la parte lenta: un codice appena aggiunto funziona entro questo tempo.
const CACHE_SECONDI = 120;

const FOGLIO_INVITATI = "Invitati";
const FOGLIO_RISPOSTE = "Risposte";
const FOGLIO_STORICO = "Storico";

// Opzionale: email a cui arriva un avviso a ogni risposta. Se ne vogliono
// più di una, si separano con una virgola:
//   const NOTIFICA_EMAIL = "francesco@esempio.it, miriam@esempio.it";
// Lasciarla vuota per non ricevere nulla.
// (Gmail gratuito consente 100 destinatari al giorno: con due indirizzi sono
// 50 risposte al giorno, più che abbastanza.)
const NOTIFICA_EMAIL = "";

const INTESTAZIONI_RISPOSTE =
  ["Data", "Codice", "Nome", "Presenti", "Quanti", "Note", "Lingua", "Modifiche", "IdInvio"];
const INTESTAZIONI_STORICO =
  ["Data", "Codice", "Nome", "Presenti", "Quanti", "Note", "Lingua"];

// ---------------------------------------------------------------- setup

function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  crea(ss, FOGLIO_INVITATI, ["Codice", "Nome", "Posti"]);
  crea(ss, FOGLIO_RISPOSTE, INTESTAZIONI_RISPOSTE);
  crea(ss, FOGLIO_STORICO, INTESTAZIONI_STORICO);

  const inv = ss.getSheetByName(FOGLIO_INVITATI);
  if (inv.getLastRow() < 2) {
    inv.appendRow(["ROSSI27", "Famiglia Rossi", 4]);   // esempio: sostituiscilo
  }
  // Niente finestre di dialogo: SpreadsheetApp.getUi() ha bisogno del foglio
  // aperto e, lanciato dall'editor, resta in attesa fino al timeout dei 6
  // minuti. Il messaggio va nel registro di esecuzione, che si vede sempre.
  Logger.log("Fogli pronti: %s, %s, %s.", FOGLIO_INVITATI, FOGLIO_RISPOSTE, FOGLIO_STORICO);
  Logger.log("Ora compila «%s» con i codici veri, poi Distribuisci > " +
             "Nuova distribuzione > Applicazione web (Chi ha accesso: Tutti).",
             FOGLIO_INVITATI);
  return "ok";
}

function crea(ss, nome, intestazioni) {
  const sh = ss.getSheetByName(nome) || ss.insertSheet(nome);
  if (sh.getLastRow() === 0) {
    sh.appendRow(intestazioni);
    sh.getRange(1, 1, 1, intestazioni.length).setFontWeight("bold");
    sh.setFrozenRows(1);
  }
  return sh;
}

// ---------------------------------------------------------------- API

function doGet(e) {
  const p = (e && e.parameter) || {};
  // Il sito chiama ?ping=1 quando l'ospite arriva alla sezione RSVP: sveglia
  // il container e riempie la cache, così il login dopo è più rapido.
  if (p.ping) {
    listaInvitati();
    return json({ ok: true, warm: true });
  }
  const code = normalizza(p.code || "");
  if (!code) return json({ ok: false, error: "no-code" });
  const g = trovaInvitato(code);
  return json(g ? { ok: true, code: g.code, name: g.name, seats: g.seats }
                : { ok: false, error: "not-found" });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);   // due risposte simultanee non si sovrascrivono
    const body = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const code = normalizza(body.code);
    const g = trovaInvitato(code);
    if (!g) return json({ ok: false, error: "not-found" });

    const presente = String(body.attending) === "yes";
    const riga = {
      at: new Date(),
      code: g.code,
      name: g.name,
      attending: presente ? "sì" : "no",
      count: presente ? Math.min(Math.max(Number(body.count) || 1, 1), g.seats) : 0,
      notes: testoSicuro(body.notes),
      lang: normalizza(body.lang).toLowerCase().slice(0, 2) || "it",
      id: String(body.at || ""),
    };
    const esito = salva(riga);
    if (esito !== "duplicato") avvisa(riga);
    return json({ ok: true, esito: esito });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ---------------------------------------------------------------- dati

function listaInvitati() {
  const cache = CacheService.getScriptCache();
  const salvata = cache.get("invitati");
  if (salvata) {
    try { return JSON.parse(salvata); } catch (_) {}
  }
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(FOGLIO_INVITATI);
  if (!sh || sh.getLastRow() < 2) return [];
  const lista = sh.getRange(2, 1, sh.getLastRow() - 1, 3).getValues()
    .map(function (r) {
      return {
        code: normalizza(r[0]),
        name: String(r[1] || "").trim() || "Ospiti",
        seats: Math.max(1, Math.min(Number(r[2]) || 1, 20)),
      };
    })
    .filter(function (g) { return g.code; });
  try { cache.put("invitati", JSON.stringify(lista), CACHE_SECONDI); } catch (_) {}
  return lista;
}

function trovaInvitato(code) {
  const lista = listaInvitati();
  for (const g of lista) {
    if (g.code === code) return g;
  }
  return null;
}

function salva(r) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const risposte = crea(ss, FOGLIO_RISPOSTE, INTESTAZIONI_RISPOSTE);
  const storico = crea(ss, FOGLIO_STORICO, INTESTAZIONI_STORICO);
  // fogli creati prima che esistesse la nona colonna
  if (!risposte.getRange(1, 9).getValue()) {
    risposte.getRange(1, 9).setValue("IdInvio").setFontWeight("bold");
  }

  // una riga per invito: se hanno già risposto, si aggiorna quella
  let riga = 0;
  if (risposte.getLastRow() > 1) {
    const codici = risposte.getRange(2, 2, risposte.getLastRow() - 1, 1).getValues();
    for (let i = 0; i < codici.length; i++) {
      if (normalizza(codici[i][0]) === r.code) { riga = i + 2; break; }
    }
  }

  // Se il sito ha rimandato lo stesso invio (risposta persa per lentezza),
  // l'identificativo coincide: non si duplica nulla e non si conta come
  // ripensamento.
  if (riga && r.id && String(risposte.getRange(riga, 9).getValue()) === r.id) {
    return "duplicato";
  }

  storico.appendRow([r.at, r.code, r.name, r.attending, r.count, r.notes, r.lang]);

  if (riga) {
    const modifiche = Number(risposte.getRange(riga, 8).getValue()) || 0;
    risposte.getRange(riga, 1, 1, 9).setValues(
      [[r.at, r.code, r.name, r.attending, r.count, r.notes, r.lang, modifiche + 1, r.id]]);
    return "aggiornato";
  }
  risposte.appendRow([r.at, r.code, r.name, r.attending, r.count, r.notes, r.lang, 0, r.id]);
  return "nuovo";
}

function avvisa(r) {
  const destinatari = String(NOTIFICA_EMAIL || "")
    .split(",")
    .map(function (s) { return s.trim(); })
    .filter(function (s) { return s.indexOf("@") > 0; })
    .join(",");
  if (!destinatari) return;
  try {
    MailApp.sendEmail(destinatari,
      `RSVP: ${r.name} — ${r.attending === "sì" ? "ci sono" : "non ci sono"}`,
      `${r.name} (${r.code})\n` +
      `Presenti: ${r.attending}\n` +
      `Quanti: ${r.count}\n` +
      `Note: ${r.notes || "—"}\n` +
      `Lingua: ${r.lang}\n\n` +
      SpreadsheetApp.getActiveSpreadsheet().getUrl());
  } catch (_) {}   // la mail non deve mai far fallire il salvataggio
}

// ---------------------------------------------------------------- utilità

function normalizza(v) {
  return String(v == null ? "" : v).trim().toUpperCase();
}

/**
 * Le note le scrive un ospite: se iniziano con = + - @ il foglio le
 * interpreterebbe come formula, quindi le neutralizzo con un apostrofo.
 */
function testoSicuro(v) {
  const t = String(v == null ? "" : v).trim().slice(0, 500);
  return /^[=+\-@]/.test(t) ? "'" + t : t;
}
