// ===== Francesco & Miriam — 30 agosto 2027 =====

// ---------- Countdown ----------
const WEDDING_DATE = new Date("2027-08-30T16:00:00+02:00");

function updateCountdown() {
  const diff = WEDDING_DATE - new Date();
  if (diff <= 0) return;
  document.getElementById("cd-days").textContent = Math.floor(diff / 86400000);
  document.getElementById("cd-hours").textContent = Math.floor((diff % 86400000) / 3600000);
  document.getElementById("cd-mins").textContent = Math.floor((diff % 3600000) / 60000);
}

updateCountdown();
setInterval(updateCountdown, 30000);

// ---------- i18n (italiano prima, poi inglese) ----------
const I18N = {
  it: {
    "intro.invite": "Siamo lieti di invitarvi<br />al nostro matrimonio",
    "intro.letter": "Vi aspettiamo!",
    "intro.hint": "Tocca la busta per aprire l'invito",
    "intro.enter": "Entra",
    "intro.skip": "Salta",
    "rsvp.eyebrow": "Area ospiti",
    "rsvp.title": "Confermate la vostra presenza",
    "rsvp.loginLead": "Inserite il codice che trovate sul vostro invito.",
    "rsvp.codePlaceholder": "Codice invito",
    "rsvp.login": "Accedi",
    "rsvp.error": "Codice non valido — riprovate.",
    "rsvp.welcome": "Benvenuti",
    "rsvp.attending": "Ci sarete?",
    "rsvp.yes": "Ci saremo!",
    "rsvp.no": "Purtroppo no",
    "rsvp.guests": "In quanti sarete?",
    "rsvp.notes": "Allergie, intolleranze o note",
    "rsvp.send": "Invia conferma",
    "rsvp.thanks": "Grazie! La vostra risposta è stata registrata.",
    "rsvp.logout": "Esci",
    "nav.details": "Programma",
    "nav.location": "Come arrivare",
    "nav.stay": "Dove alloggiare",
    "hero.eyebrow": "Ci sposiamo",
    "hero.venue": "Commenda di San Calogero — Sicilia",
    "count.days": "giorni",
    "count.hours": "ore",
    "count.mins": "minuti",
    "details.eyebrow": "Programma",
    "details.title": "Lunedì 30 Agosto 2027",
    "details.ceremony": "Cerimonia",
    "details.ceremonyText": "Commenda di San Calogero<br />Contrada San Calogero, Augusta (SR)",
    "details.reception": "Ricevimento",
    "details.receptionText": "A seguire, nei giardini della Commenda — cena, brindisi e musica sotto le stelle.",
    "details.info": "Da sapere",
    "details.dress": "Dress code",
    "details.parking": "Parcheggio",
    "details.parkingText": "disponibile in loco",
    "location.eyebrow": "Come arrivare",
    "location.title": "La Commenda di San Calogero",
    "location.lead":
      "Un'antica dimora storica immersa nel verde della Sicilia orientale, " +
      "tra Catania e Siracusa, a pochi minuti dal mare di Brucoli.",
    "location.plane": "✈ In aereo",
    "location.planeText":
      "L'aeroporto più vicino è Catania–Fontanarossa (CTA), a circa 40 minuti d'auto. " +
      "Voli diretti dalle principali città italiane ed europee.",
    "location.car": "⛍ In auto",
    "location.carText":
      "Autostrada A18 Catania–Siracusa, uscita Villasmundo, poi seguire le indicazioni " +
      "per Brucoli / Contrada San Calogero. Parcheggio disponibile alla tenuta.",
    "location.train": "🚆 In treno",
    "location.trainText":
      "Stazione di Catania Centrale o Augusta, poi taxi o transfer (20–40 minuti).",
    "location.tip": "☀ Il nostro consiglio",
    "location.tipText":
      "Noleggiate un'auto: la zona è ricca di posti meravigliosi — Ortigia, Noto e le " +
      "spiagge della costa — e sarete liberi di esplorarla.",
    "location.open": "Apri in Google Maps",
    "map.fromAirport": "Dall'aeroporto di Catania",
    "map.fromStation": "Da Catania Centrale",
    "map.fromSiracusa": "Da Siracusa",
    "map.venueOnly": "Solo la tenuta",
    "stay.eyebrow": "Dove alloggiare",
    "stay.title": "Per chi viene da lontano",
    "stay.p1":
      "Nei dintorni ci sono ottime soluzioni: i borghi di mare di Brucoli e Augusta " +
      "sono i più vicini, mentre Siracusa e l'isola di Ortigia (circa 30 minuti) " +
      "offrono hotel, B&B e un centro storico indimenticabile.",
    "stay.todo": "[Aggiungeremo qui gli hotel consigliati e le eventuali convenzioni.]",
    "footer.made": "fatto con amore",
  },
  en: {
    "intro.invite": "We are delighted to invite you<br />to our wedding",
    "intro.letter": "See you there!",
    "intro.hint": "Tap the envelope to open the invitation",
    "intro.enter": "Enter",
    "intro.skip": "Skip",
    "rsvp.eyebrow": "Guest area",
    "rsvp.title": "Please confirm your attendance",
    "rsvp.loginLead": "Enter the code printed on your invitation.",
    "rsvp.codePlaceholder": "Invitation code",
    "rsvp.login": "Log in",
    "rsvp.error": "Invalid code — please try again.",
    "rsvp.welcome": "Welcome",
    "rsvp.attending": "Will you be there?",
    "rsvp.yes": "We'll be there!",
    "rsvp.no": "Sadly not",
    "rsvp.guests": "How many of you?",
    "rsvp.notes": "Allergies, dietary needs or notes",
    "rsvp.send": "Send RSVP",
    "rsvp.thanks": "Thank you! Your response has been recorded.",
    "rsvp.logout": "Log out",
    "nav.details": "Schedule",
    "nav.location": "Getting there",
    "nav.stay": "Where to stay",
    "hero.eyebrow": "We're getting married",
    "hero.venue": "Commenda di San Calogero — Sicily, Italy",
    "count.days": "days",
    "count.hours": "hours",
    "count.mins": "minutes",
    "details.eyebrow": "Schedule",
    "details.title": "Monday, 30 August 2027",
    "details.ceremony": "Ceremony",
    "details.ceremonyText": "Commenda di San Calogero<br />Contrada San Calogero, Augusta (SR), Sicily",
    "details.reception": "Reception",
    "details.receptionText": "To follow, in the gardens of the Commenda — dinner, toasts and music under the stars.",
    "details.info": "Good to know",
    "details.dress": "Dress code",
    "details.parking": "Parking",
    "details.parkingText": "available on site",
    "location.eyebrow": "Getting there",
    "location.title": "Commenda di San Calogero",
    "location.lead":
      "A historic country estate in the green of eastern Sicily, " +
      "between Catania and Syracuse, minutes from the sea at Brucoli.",
    "location.plane": "✈ By plane",
    "location.planeText":
      "The nearest airport is Catania–Fontanarossa (CTA), about a 40-minute drive away, " +
      "with direct flights from major Italian and European cities.",
    "location.car": "⛍ By car",
    "location.carText":
      "Take the A18 Catania–Siracusa motorway, exit at Villasmundo, then follow signs " +
      "for Brucoli / Contrada San Calogero. Parking is available at the estate.",
    "location.train": "🚆 By train",
    "location.trainText":
      "Catania Centrale or Augusta station, then a taxi or transfer (20–40 minutes).",
    "location.tip": "☀ Our tip",
    "location.tipText":
      "Rent a car: the area is full of wonderful places — Ortigia, Noto and the " +
      "beaches along the coast — and you'll be free to explore.",
    "location.open": "Open in Google Maps",
    "map.fromAirport": "From Catania Airport",
    "map.fromStation": "From Catania Centrale",
    "map.fromSiracusa": "From Syracuse",
    "map.venueOnly": "Venue only",
    "stay.eyebrow": "Where to stay",
    "stay.title": "For those coming from afar",
    "stay.p1":
      "There are great options nearby: the seaside villages of Brucoli and Augusta " +
      "are the closest, while Syracuse and the island of Ortigia (about 30 minutes) " +
      "offer hotels, B&Bs and an unforgettable old town.",
    "stay.todo": "[We'll list recommended hotels and any group rates here.]",
    "footer.made": "made with love",
  },
};

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

// ---------- Map: choose starting point ----------
const MAP_DEST = "Commenda di San Calogero, Augusta, Sicilia";
const MAP_ORIGINS = {
  airport: "Aeroporto di Catania Fontanarossa",
  station: "Stazione Catania Centrale",
  siracusa: "Siracusa, Sicilia",
  venue: null, // just show the venue on the map
};

function setMapOrigin(key) {
  const origin = MAP_ORIGINS[key];
  const dest = encodeURIComponent(MAP_DEST);
  const frame = document.getElementById("map-frame");
  const openLink = document.getElementById("map-open");
  if (origin) {
    const from = encodeURIComponent(origin);
    frame.src = `https://www.google.com/maps?saddr=${from}&daddr=${dest}&output=embed`;
    openLink.href = `https://www.google.com/maps/dir/?api=1&origin=${from}&destination=${dest}`;
  } else {
    frame.src = `https://www.google.com/maps?q=${dest}&output=embed`;
    openLink.href = `https://www.google.com/maps/search/?api=1&query=${dest}`;
  }
  document.querySelectorAll("#map-chips .chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.origin === key);
  });
}

document.querySelectorAll("#map-chips .chip").forEach((chip) => {
  chip.addEventListener("click", () => setMapOrigin(chip.dataset.origin));
});

// ---------- Envelope intro ----------
const intro = document.getElementById("intro");
const envelope = document.getElementById("envelope");

let alreadyEntered = false;
try {
  alreadyEntered = sessionStorage.getItem("fm-entered") === "1";
} catch (_) {}

if (alreadyEntered) {
  intro.classList.add("hidden");
} else {
  document.body.classList.add("locked");
}

function openEnvelope() {
  envelope.classList.add("open");
  intro.classList.add("opened");
}

function enterSite() {
  intro.classList.add("hidden");
  document.body.classList.remove("locked");
  try {
    sessionStorage.setItem("fm-entered", "1");
  } catch (_) {}
}

envelope.addEventListener("click", openEnvelope);
envelope.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openEnvelope();
  }
});
document.getElementById("env-enter").addEventListener("click", (e) => {
  e.stopPropagation();
  enterSite();
});
document.getElementById("intro-skip").addEventListener("click", enterSite);

// Dock icons: enter the site, then let the anchor scroll to its section
document.querySelectorAll(".dock-link").forEach((link) => {
  link.addEventListener("click", enterSite);
});

// ---------- Scalloped frame around the invitation card ----------
function drawScallop() {
  const card = document.getElementById("invite-card");
  const svg = card.querySelector(".scallop-svg");
  const path = document.getElementById("scallop-path");
  const r = 15; // scallop radius
  const pad = r + 3;
  const w = card.offsetWidth;
  const h = card.offsetHeight;
  if (!w || !h) return;

  svg.setAttribute("viewBox", `0 0 ${w + 2 * pad} ${h + 2 * pad}`);
  svg.style.width = w + 2 * pad + "px";
  svg.style.height = h + 2 * pad + "px";
  svg.style.left = -pad + "px";
  svg.style.top = -pad + "px";

  const nx = Math.max(4, Math.round(w / (2.1 * r)));
  const ny = Math.max(4, Math.round(h / (2.1 * r)));
  const sx = w / nx;
  const sy = h / ny;

  let d = `M ${pad} ${pad} `;
  for (let i = 0; i < nx; i++) d += `a ${sx / 2} ${r} 0 0 1 ${sx} 0 `;
  for (let i = 0; i < ny; i++) d += `a ${r} ${sy / 2} 0 0 1 0 ${sy} `;
  for (let i = 0; i < nx; i++) d += `a ${sx / 2} ${r} 0 0 1 ${-sx} 0 `;
  for (let i = 0; i < ny; i++) d += `a ${r} ${sy / 2} 0 0 1 0 ${-sy} `;
  d += "Z";
  path.setAttribute("d", d);
}

drawScallop();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawScallop);
if (typeof ResizeObserver !== "undefined") {
  new ResizeObserver(drawScallop).observe(document.getElementById("invite-card"));
} else {
  window.addEventListener("resize", drawScallop);
}

// ---------- Guest registry & RSVP ----------
// Guests live in guests.json (code, name, seats). Add/remove families there.
// Optional: set RSVP_ENDPOINT to a form service URL (e.g. Formspree) to
// receive responses; until then they are only stored on the guest's device.
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
  document.getElementById("rsvp-login").hidden = true;
  document.getElementById("rsvp-panel").hidden = false;
  document.getElementById("guest-name").textContent = guest.name;

  const select = document.getElementById("guest-count");
  select.innerHTML = "";
  for (let i = 1; i <= guest.seats; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    select.appendChild(opt);
  }
  select.value = guest.seats;

  // Prefill a previously saved answer, if any
  try {
    const saved = JSON.parse(localStorage.getItem("fm-rsvp-" + guest.code));
    if (saved) {
      document.querySelector(`input[name="attending"][value="${saved.attending}"]`).checked = true;
      select.value = saved.count;
      document.getElementById("rsvp-notes").value = saved.notes || "";
      document.getElementById("rsvp-thanks").hidden = false;
    }
  } catch (_) {}
}

document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const code = document.getElementById("code-input").value.trim().toUpperCase();
  const errorEl = document.getElementById("login-error");
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

document.getElementById("rsvp-form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!currentGuest) return;
  const data = {
    code: currentGuest.code,
    name: currentGuest.name,
    attending: document.querySelector('input[name="attending"]:checked').value,
    count: document.getElementById("guest-count").value,
    notes: document.getElementById("rsvp-notes").value.trim(),
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
  document.getElementById("rsvp-thanks").hidden = false;
});

document.getElementById("rsvp-logout").addEventListener("click", () => {
  currentGuest = null;
  try {
    sessionStorage.removeItem("fm-guest");
  } catch (_) {}
  document.getElementById("rsvp-panel").hidden = true;
  document.getElementById("rsvp-thanks").hidden = true;
  document.getElementById("rsvp-login").hidden = false;
  document.getElementById("code-input").value = "";
});

// Restore guest session on reload
try {
  const savedCode = sessionStorage.getItem("fm-guest");
  if (savedCode) {
    loadGuests().then((guests) => {
      const guest = guests.find((g) => g.code === savedCode);
      if (guest) showGuestPanel(guest);
    });
  }
} catch (_) {}

// ---------- Reveal on scroll ----------
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
