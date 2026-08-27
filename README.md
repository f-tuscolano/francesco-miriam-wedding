# Francesco & Miriam — 30 · 08 · 2027

Sito del matrimonio di Francesco e Miriam, alla Commenda di San Calogero,
Augusta (SR), Sicilia.

Sito statico: HTML + CSS + un po' di JavaScript. Nessuna dipendenza, nessuna
build, nessun framework — si apre il file e funziona.

## Com'è fatto

| File | Cosa contiene |
| --- | --- |
| `index.html` | tutta la pagina, con i testi italiani direttamente nel markup |
| `styles.css` | lo stile (palette, timeline a serpentina, intro, responsive) |
| `i18n.js` | i testi nelle tre lingue: 82 chiavi × italiano, inglese, romeno |
| `script.js` | countdown, cambio lingua, mappa, intro, RSVP, comparsa allo scroll |
| `guests.json` | registro invitati di riserva, usato solo se il foglio Google non è collegato |
| `server/apps-script.gs` | il codice da incollare in Apps Script: riceve le risposte e le scrive nel foglio |
| `fm-wedding.ics` | il file «Aggiungi al calendario» |
| `img/` | le 11 immagini della pagina + `og-image.jpg` (anteprima dei link) |
| `files/` | la lista delle strutture alberghiere in PDF |
| `_source/` | artwork originale e immagini vecchie — solo in locale, fuori dal repo |

## Provarlo in locale

```sh
python3 -m http.server 8000
```

poi apri <http://localhost:8000>. Serve un server (anche minimo) perché la
pagina legge `guests.json` via `fetch`: aprendo `index.html` con doppio clic
il login degli ospiti non funziona.

L'intro compare una volta per sessione. Per rivederla: nuova finestra anonima,
oppure cancella la chiave `fm-entered` da `sessionStorage`.

## Modificare i testi

Ogni testo tradotto ha un attributo `data-i18n="chiave"` in `index.html`
(`data-i18n-ph` per i placeholder dei campi, `data-i18n-aria` per le etichette
di accessibilità) e la chiave corrispondente nei tre dizionari di `i18n.js`,
nello stesso ordine in cui appare nella pagina.

Per cambiare una frase va aggiornata **sia** in `index.html` (versione italiana,
quella che si vede prima che il JavaScript intervenga) **sia** in `i18n.js`.
Le tre lingue devono avere sempre le stesse chiavi.

Per aggiungere una lingua: un nuovo blocco in `i18n.js` con le stesse chiavi e
un pulsante `.lang-btn` nella nav.

## Invitati e RSVP

Gli ospiti accedono con il codice stampato sull'invito. Le risposte finiscono in
un foglio Google: gratuito, senza limiti di invii, e il risultato è una tabella
da ordinare, contare o mandare al catering.

Il collegamento è **già fatto**: l'URL della distribuzione è in `RSVP_ENDPOINT`,
in cima alla sezione RSVP di `script.js`. I passaggi qui sotto servono solo se
un giorno il foglio va rifatto da zero.

### Come si collega (una volta sola)

1. Crea un foglio nuovo su <https://sheets.new> e chiamalo p.es. «Matrimonio RSVP».
2. **Estensioni › Apps Script**, cancella il contenuto di esempio e incolla tutto
   `server/apps-script.gs`.
3. Se vuoi un avviso via email a ogni risposta, metti l'indirizzo in
   `NOTIFICA_EMAIL` (in cima al file, dentro l'editor Apps Script). Più
   indirizzi si separano con una virgola:
   `const NOTIFICA_EMAIL = "francesco@esempio.it, miriam@esempio.it";`
4. Esegui una volta la funzione **`setup`** dal menù a tendina delle funzioni:
   Google chiederà l'autorizzazione (è tuo codice sul tuo foglio, accetta), e
   verranno creati i tre fogli `Invitati`, `Risposte`, `Storico`.
5. **Distribuisci › Nuova distribuzione › Applicazione web**, con
   *Esegui come:* **me** e *Chi ha accesso:* **Tutti**. Copia l'URL che finisce
   con `/exec`.
6. Incolla quell'URL in `RSVP_ENDPOINT`, in cima alla sezione RSVP di `script.js`.
7. Compila il foglio `Invitati` — una riga per invito: `codice · nome · posti`.

Dopo **ogni** modifica a `apps-script.gs` serve una *nuova* distribuzione
(o *Gestisci distribuzioni › modifica › Versione: nuova*), altrimenti online
resta la versione precedente: è l'errore più comune.

### Come funziona

- **Login**: il sito chiede al foglio se il codice esiste e riceve solo nome e
  numero di posti di quell'invito. L'elenco completo resta nel foglio, non nel
  repo pubblico.
- **Invio**: la risposta va nel foglio `Risposte`, una riga per invito
  (se cambiano idea la riga si aggiorna e un contatore segna le modifiche),
  mentre `Storico` conserva ogni singolo invio.
- **In due sul foglio**: oltre agli avvisi via email, conviene condividere il
  foglio (pulsante *Condividi*, in alto a destra) così si vede la tabella
  aggiornata invece di ricostruirla dalle email.
- Se il foglio non risponde, l'ospite vede «problema di connessione» e non un
  falso «grazie»: la risposta non viene mai data per registrata se non lo è.
- Con `RSVP_ENDPOINT` vuoto il sito ripiega su `guests.json` e salva solo sul
  dispositivo dell'ospite: utile per provare, inutile per raccogliere davvero.

Le richieste non hanno header personalizzati di proposito: così restano
richieste «semplici» e non scatta il preflight CORS, che Apps Script non gestisce.

### Note

Il codice invito non è una password: chi lo ha, entra. Va bene per un
matrimonio, non è una misura di sicurezza. L'indirizzo del foglio è comunque
visibile nel codice del sito, ma accetta solo codici presenti fra gli invitati,
e le note vengono neutralizzate se iniziano con `=` (altrimenti il foglio le
interpreterebbe come formule).

## Sostituire un'immagine

Le immagini pubblicate stanno in `img/`; gli originali a piena risoluzione in
`_source/artwork/` (cartella locale, non versionata).

**Usa sempre un nome file nuovo.** Se sovrascrivi `img/foo.webp` tenendo lo
stesso nome, browser e CDN continuano a servire la versione vecchia e sembra
che la modifica non sia andata a buon fine. Nuovo nome = aggiornamento visibile
subito.

Le immagini sono WebP con trasparenza, dimensionate al doppio di come vengono
mostrate (per gli schermi retina): non serve caricarle più grandi.

## Pubblicazione

GitHub Pages, dal branch `main`, cartella `/ (root)`. Ogni push su `main`
ripubblica il sito:

```sh
git add -A && git commit -m "..." && git push
```

Online: <https://f-tuscolano.github.io/francesco-miriam-wedding/>

## Note tecniche

- La timeline è una griglia a tre colonne (`1fr | corridoio | 1fr`) con i lati
  che si alternano; la serpentina è un SVG dietro, e la sua ampiezza dipende
  dalla larghezza del corridoio centrale — restringerlo appiattisce l'onda.
- L'intro si chiude con un tocco qualunque sul foglio e sfuma sul sito; il
  timeout in `leaveIntro()` combacia con la transizione CSS di `.inv`.
- Le immagini hanno `width`/`height` nel markup per non far ballare il layout
  durante il caricamento: se ne sostituisci una, aggiorna anche quei numeri.
- Sotto i 700px i link di sezione stanno in un menù che scende dalla barra
  (`.nav.open`); si chiude scegliendo una voce, toccando fuori o con Esc.
