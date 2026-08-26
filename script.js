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
function setLang(lang) {
  const dict = I18N[lang] || I18N.it;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (text !== undefined) el.innerHTML = text;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const text = dict[el.dataset.i18nPh];
    if (text !== undefined) el.placeholder = text;
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
// Gli ospiti stanno in guests.json (code, name, seats): una voce per invito.
// Per ricevere davvero le risposte, impostare RSVP_ENDPOINT con l'URL di un
// servizio di form (es. Formspree); finché è vuoto, le risposte restano solo
// sul dispositivo dell'ospite.
const RSVP_ENDPOINT = "";

let guestList = null;
let currentGuest = null;

async function loadGuests() {
  if (!guestList) {
    const res = await fetch("guests.json");
    guestList = await res.json();
  }
  return guestList;
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

$("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const code = $("code-input").value.trim().toUpperCase();
  const errorEl = $("login-error");
  try {
    const guests = await loadGuests();
    const guest = guests.find((g) => g.code.toUpperCase() === code);
    if (!guest) {
      errorEl.hidden = false;
      return;
    }
    errorEl.hidden = true;
    try {
      sessionStorage.setItem("fm-guest", guest.code);
    } catch (_) {}
    showGuestPanel(guest);
  } catch (_) {
    errorEl.hidden = false;
  }
});

$("rsvp-form").addEventListener("submit", (e) => {
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
  try {
    localStorage.setItem("fm-rsvp-" + currentGuest.code, JSON.stringify(data));
  } catch (_) {}
  if (RSVP_ENDPOINT) {
    fetch(RSVP_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});
  }
  $("rsvp-thanks").hidden = false;
});

$("rsvp-logout").addEventListener("click", () => {
  currentGuest = null;
  try {
    sessionStorage.removeItem("fm-guest");
  } catch (_) {}
  $("rsvp-panel").hidden = true;
  $("rsvp-thanks").hidden = true;
  $("rsvp-login").hidden = false;
  $("code-input").value = "";
});

// ospite già entrato in questa sessione: si ritrova il pannello aperto
try {
  const savedCode = sessionStorage.getItem("fm-guest");
  if (savedCode) {
    loadGuests().then((guests) => {
      const guest = guests.find((g) => g.code === savedCode);
      if (guest) showGuestPanel(guest);
    });
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
