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
| `i18n.js` | i testi nelle tre lingue: 81 chiavi × italiano, inglese, romeno |
| `script.js` | countdown, cambio lingua, mappa, intro, RSVP, comparsa allo scroll |
| `guests.json` | il registro degli invitati (codice, nome, numero di posti) |
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
(o `data-i18n-ph` per i placeholder dei campi) e la chiave corrispondente nei
tre dizionari di `i18n.js`, nello stesso ordine in cui appare nella pagina.

Per cambiare una frase va aggiornata **sia** in `index.html` (versione italiana,
quella che si vede prima che il JavaScript intervenga) **sia** in `i18n.js`.
Le tre lingue devono avere sempre le stesse chiavi.

Per aggiungere una lingua: un nuovo blocco in `i18n.js` con le stesse chiavi e
un pulsante `.lang-btn` nella nav.

## Invitati e RSVP

Gli ospiti accedono alla sezione RSVP con il codice stampato sull'invito. Il
registro è `guests.json`, una voce per invito:

```json
{ "code": "ROSSI27", "name": "Famiglia Rossi", "seats": 4 }
```

⚠️ **Da fare prima di mandare gli inviti:**

1. sostituire i codici di prova (`DEMO2027`, `ROSSI27`, `BIANCHI27`) con quelli veri;
2. impostare `RSVP_ENDPOINT` in `script.js` con l'URL di un servizio di form
   (es. Formspree). Finché è vuoto, **le risposte restano solo sul telefono
   dell'ospite** e non arrivano a nessuno.

Il codice non è una password: chiunque lo abbia entra. Va bene per un matrimonio,
non è una misura di sicurezza.

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
- Sotto i 700px la nav nasconde i link di sezione: su telefono si naviga
  scorrendo.
