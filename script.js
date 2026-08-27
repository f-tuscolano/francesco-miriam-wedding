// ===== Francesco & Miriam — 30 agosto 2027 =====
//
// Sito statico: nessuna dipendenza, nessuna build. I testi delle tre lingue
// stanno in i18n.js, che va caricato prima di questo file.

const $ = (id) => document.getElementById(id);

// ---------- Countdown ----------
const WEDDING_DATE = new Date("2027-08-30T17:00:00+02:00");

function updateCountdown() {
  const diff = Math.max(0, WEDDING_DATE - new Date());
  $("cd-days").textContent = Math.floor(diff / 86400000);
  $("cd-hours").textContent = Math.floor((diff % 86400000) / 3600000);
  $("cd-mins").textContent = Math.floor((diff % 3600000) / 60000);
  if (diff === 0) clearInterval(countdownTimer);
}

updateCountdown();
const countdownTimer = setInterval(updateCountdown, 30000);

// ---------- Lingua: italiano di default, con EN e RO ----------
// L'HTML è già in italiano, quindi all'avvio si traduce solo se la lingua
// salvata è un'altra.
let currentLang = "it";
const t = (key) => (I18N[currentLang] || I18N.it)[key] || "";

function setLang(lang) {
  const dict = I18N[lang] || I18N.it;
  currentLang = I18N[lang] ? lang : "it";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.innerHTML = text;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const text = dict[el.dataset.i18nPh];
    if (text !== undefined) el.placeholder = text;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const text = dict[el.dataset.i18nAria];
    if (text !== undefined) el.setAttribute("aria-label", text);
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  try {
    localStorage.setItem("fm-lang", lang);
  } catch (_) {}
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

let savedLang = "it";
try {
  savedLang = localStorage.getItem("fm-lang") || "it";
} catch (_) {}
if (savedLang !== "it") setLang(savedLang);

// ---------- Menù su schermi piccoli ----------
// Sotto i 700px i link di sezione stanno in un pannello che scende dalla barra.
const nav = $("nav");
const navToggle = $("nav-toggle");

function closeNav() {
  if (!nav.classList.contains("open")) return;
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

// si chiude scegliendo una voce, toccando fuori dalla barra o con Esc
nav.querySelectorAll(".nav-links a").forEach((a) => a.addEventListener("click", closeNav));
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target)) closeNav();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeNav();
});

// ---------- Mappa: scelta del punto di partenza ----------
const MAP_DEST = "Commenda di San Calogero, Augusta, Sicilia";
const MAP_ORIGINS = {
  airport: "Aeroporto di Catania Fontanarossa",
  station: "Stazione Catania Centrale",
  siracusa: "Siracusa, Sicilia",
  venue: null, // nessun percorso: solo la tenuta sulla mappa
};

function setMapOrigin(key) {
  const origin = MAP_ORIGINS[key];
  const dest = encodeURIComponent(MAP_DEST);
  const frame = $("map-frame");
  frame.src = origin
    ? `https://www.google.com/maps?saddr=${encodeURIComponent(origin)}&daddr=${dest}&output=embed`
    : `https://www.google.com/maps?q=${dest}&output=embed`;
  document.querySelectorAll("#map-chips .chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.origin === key);
  });
}

document.querySelectorAll("#map-chips .chip").forEach((chip) => {
  chip.addEventListener("click", () => setMapOrigin(chip.dataset.origin));
});

// ---------- Intro ----------
// Un tocco — sul pulsante o in qualunque punto del foglio — e l'intro sfuma
// sul sito. La scelta vale per la sessione: al reload non ricompare.
const intro = $("intro");

let alreadyEntered = false;
try {
  alreadyEntered = sessionStorage.getItem("fm-entered") === "1";
} catch (_) {}

if (alreadyEntered) {
  intro.classList.add("hidden");
} else {
  document.body.classList.add("locked");
}

function enterSite() {
  intro.classList.add("hidden");
  document.body.classList.remove("locked");
  risvegliaFoglio();
  try {
    sessionStorage.setItem("fm-entered", "1");
  } catch (_) {}
}

function leaveIntro() {
  if (intro.classList.contains("leaving")) return;
  intro.classList.add("leaving");
  setTimeout(enterSite, 620); // combacia con la transizione di .inv nel CSS
}

$("inv").addEventListener("click", leaveIntro);

// ---------- Registro ospiti e RSVP ----------
// Le risposte finiscono in un foglio Google tramite Apps Script: il codice del
// foglio sta in server/apps-script.gs, qui va l'URL della distribuzione
// (quello che finisce con /exec).
//
// Finché RSVP_ENDPOINT è vuoto il sito ripiega su guests.json e la risposta
// resta solo sul dispositivo dell'ospite.
const RSVP_ENDPOINT =
  "https://script.google.com/macros/s/AKfycby5PqzCNfUDJLCwokuMqpxEvxGPPfdeowh0QGFCC8tEaKUz6P6ul4UBGxq7J7DKR5Y7/exec";

// Apps Script a freddo può metterci dieci secondi, da caldo due o tre. Si
// sveglia con una richiesta a vuoto appena l'ospite entra nel sito, e di nuovo
// quando tocca il campo del codice: quando serve davvero è già in piedi.
let ultimoRisveglio = 0;

function risvegliaFoglio() {
  if (!RSVP_ENDPOINT) return;
  const ora = Date.now();
  if (ora - ultimoRisveglio < 60000) return;   // non più di uno al minuto
  ultimoRisveglio = ora;
  fetch(`${RSVP_ENDPOINT}?ping=1`).catch(() => {});
}

let guestList = null;
let currentGuest = null;

// Apps Script risponde in due o tre secondi quando è caldo, ma a freddo può
// metterne dieci o non rispondere affatto. Quindi: attesa massima, un
// ritentativo, e solo dopo si dichiara il guasto all'ospite.
const FOGLIO_ATTESA_MS = 12000;

async function fetchFoglio(url, opts = {}, ritentativi = 1) {
  let ultimo;
  for (let i = 0; i <= ritentativi; i++) {
    const ctrl = new AbortController();
    const scade = setTimeout(() => ctrl.abort(), FOGLIO_ATTESA_MS);
    try {
      const res = await fetch(url, Object.assign({}, opts, { signal: ctrl.signal }));
      if (!res.ok) throw new Error("http " + res.status);
      return await res.json();
    } catch (err) {
      ultimo = err;
    } finally {
      clearTimeout(scade);
    }
    if (i < ritentativi) await new Promise((r) => setTimeout(r, 900));
  }
  throw ultimo;
}

async function loadGuests() {
  if (!guestList) {
    const res = await fetch("guests.json");
    guestList = await res.json();
  }
  return guestList;
}

// Restituisce l'ospite, oppure null se il codice non esiste. Un problema di
// rete viene propagato come errore, così la schermata lo distingue da un
// codice sbagliato invece di dire "codice non valido" a chi non c'entra.
async function findGuest(code) {
  if (RSVP_ENDPOINT) {
    const data = await fetchFoglio(`${RSVP_ENDPOINT}?code=${encodeURIComponent(code)}`);
    return data.ok ? { code: data.code, name: data.name, seats: data.seats } : null;
  }
  const guests = await loadGuests();
  return guests.find((g) => g.code.toUpperCase() === code) || null;
}

function showGuestPanel(guest) {
  currentGuest = guest;
  $("rsvp-login").hidden = true;
  $("rsvp-panel").hidden = false;
  $("guest-name").textContent = guest.name;

  const select = $("guest-count");
  select.innerHTML = "";
  for (let i = 1; i <= guest.seats; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    select.appendChild(opt);
  }
  select.value = guest.seats;

  // con un posto solo la domanda "in quanti sarete?" non ha senso: il campo
  // resta nel DOM (così il valore 1 viene comunque inviato) ma sparisce
  const campoQuanti = select.closest(".rsvp-field");
  if (campoQuanti) campoQuanti.hidden = guest.seats < 2;

  // se avevano già risposto da questo dispositivo, si riparte da lì
  try {
    const saved = JSON.parse(localStorage.getItem("fm-rsvp-" + guest.code));
    if (saved) {
      document.querySelector(`input[name="attending"][value="${saved.attending}"]`).checked = true;
      select.value = saved.count;
      $("rsvp-notes").value = saved.notes || "";
      $("rsvp-thanks").hidden = false;
    }
  } catch (_) {}
}

$("code-input").addEventListener("focus", risvegliaFoglio);

$("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const code = $("code-input").value.trim().toUpperCase();
  const btn = $("login-form").querySelector("button");
  $("login-error").hidden = true;
  $("login-net-error").hidden = true;
  btn.disabled = true;
  btn.textContent = t("rsvp.checking");
  try {
    const guest = await findGuest(code);
    if (!guest) {
      $("login-error").hidden = false;
      return;
    }
    try {
      sessionStorage.setItem("fm-guest", guest.code);
    } catch (_) {}
    showGuestPanel(guest);
  } catch (_) {
    $("login-net-error").hidden = false;
  } finally {
    btn.disabled = false;
    btn.textContent = t("rsvp.login");
  }
});

$("rsvp-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!currentGuest) return;
  const data = {
    code: currentGuest.code,
    name: currentGuest.name,
    attending: document.querySelector('input[name="attending"]:checked').value,
    count: $("guest-count").value,
    notes: $("rsvp-notes").value.trim(),
    lang: document.documentElement.lang,
    at: new Date().toISOString(),
  };
  const btn = $("rsvp-form").querySelector('button[type="submit"]');
  $("rsvp-send-error").hidden = true;

  if (RSVP_ENDPOINT) {
    btn.disabled = true;
    btn.textContent = t("rsvp.sending");
    try {
      // nessun header: la richiesta resta "semplice" e non scatta il
      // preflight CORS, che Apps Script non gestisce.
      // Il ritentativo è sicuro: il foglio riconosce lo stesso invio dal
      // campo "at" e non duplica né riconta nulla.
      const out = await fetchFoglio(RSVP_ENDPOINT, { method: "POST", body: JSON.stringify(data) });
      if (!out.ok) throw new Error(out.error || "errore");
    } catch (_) {
      // meglio un errore onesto che un "grazie" con la risposta persa
      $("rsvp-send-error").hidden = false;
      return;
    } finally {
      btn.disabled = false;
      btn.textContent = t("rsvp.send");
    }
  }

  try {
    localStorage.setItem("fm-rsvp-" + currentGuest.code, JSON.stringify(data));
  } catch (_) {}
  $("rsvp-thanks").hidden = false;
});

$("rsvp-logout").addEventListener("click", () => {
  currentGuest = null;
  try {
    sessionStorage.removeItem("fm-guest");
  } catch (_) {}
  $("rsvp-panel").hidden = true;
  $("rsvp-thanks").hidden = true;
  $("rsvp-send-error").hidden = true;
  $("rsvp-login").hidden = false;
  $("code-input").value = "";
});

// ospite già entrato in questa sessione: si ritrova il pannello aperto
try {
  const savedCode = sessionStorage.getItem("fm-guest");
  if (savedCode) {
    findGuest(savedCode)
      .then((guest) => { if (guest) showGuestPanel(guest); })
      .catch(() => {});
  }
} catch (_) {}

// ---------- Comparsa delle schede allo scroll ----------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Chi ha già superato l'intro in questa sessione (un ricaricamento) non passa
// da enterSite: il foglio va svegliato qui. Sta in fondo al file perché
// risvegliaFoglio() usa RSVP_ENDPOINT, dichiarato più sopra con const.
if (alreadyEntered) risvegliaFoglio();
