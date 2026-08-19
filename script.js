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
    "count.days": "giorni",
    "count.hours": "ore",
    "count.mins": "minuti",
    "nav.details": "La giornata",
    "nav.location": "La location",
    "nav.stay": "Alloggi",
    "nav.gift": "Viaggio di nozze",
    "hero.invite": "Con gioia vi invitiamo<br />al nostro matrimonio",
    "hero.date": "30 Agosto 2027",
    "giornata.title": "La nostra giornata",
    "giornata.arrivo": "Arrivo ospiti e welcome",
    "giornata.cerimonia": "Cerimonia",
    "giornata.aperitivo": "Aperitivo",
    "giornata.cena": "Cena",
    "giornata.torta": "Taglio della torta",
    "giornata.party": "Party time",
    "loc.title": "La nostra location",
    "loc.maps": "Vedi su Google Maps ↗",
    "arr.title": "Come raggiungerci",
    "arr.plane": "In aereo",
    "arr.planeText": "Aeroporto di Catania Fontanarossa, poi proseguire in auto per circa 30 minuti.",
    "arr.car": "In auto",
    "arr.carText": "Dall'autostrada A18, uscita Augusta e seguire le indicazioni per Brucoli.",
    "arr.tip": "Cosa consigliamo",
    "arr.tipText": "Noleggiare un'auto per vivere al meglio la meravigliosa Sicilia.",
    "arr.choose": "Scegli il tuo percorso",
    "map.fromAirport": "Dall'aeroporto",
    "map.fromStation": "Da Catania Centrale",
    "map.fromSiracusa": "Da Siracusa",
    "map.venueOnly": "Solo la tenuta",
    "stay.title": "Dove alloggiare",
    "stay.p1":
      "Nei dintorni ci sono ottime soluzioni: i borghi di mare di Brucoli e Augusta " +
      "sono i più vicini, mentre Siracusa e l'isola di Ortigia (circa 30 minuti) " +
      "offrono hotel, B&B e un centro storico indimenticabile.",
    "stay.todo": "[Aggiungeremo qui gli hotel consigliati e le eventuali convenzioni.]",
    "rsvp.title": "Conferma la tua presenza",
    "rsvp.lead1": "La vostra presenza è il regalo più bello che possiamo ricevere.",
    "rsvp.lead2": "Vi chiediamo gentilmente di confermare entro il <strong>30 giugno 2027</strong>.",
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
    "rsvp.send": "Conferma la tua presenza ♡",
    "rsvp.thanks": "Grazie! La vostra risposta è stata registrata.",
    "rsvp.logout": "Esci",
    "gift.title": "Viaggio di nozze",
    "gift.lead":
      "Se desiderate contribuire a rendere indimenticabile il nostro viaggio di nozze, " +
      "potete farlo qui.",
    "gift.iban": "IBAN",
    "gift.holder": "Intestatario",
    "gift.reason": "Causale",
    "gift.reasonText": "Viaggio di nozze",
    "actions.calendar": "Aggiungi al calendario",
    "actions.map": "Vedi la location",
    "actions.contact": "Contattaci",
    "footer.date": "30 Agosto 2027 · Sicilia",
    "location.open": "Vedi su Google Maps ↗",
  },
  en: {
    "intro.invite": "We are delighted to invite you<br />to our wedding",
    "intro.letter": "See you there!",
    "intro.hint": "Tap the envelope to open the invitation",
    "intro.enter": "Enter",
    "intro.skip": "Skip",
    "count.days": "days",
    "count.hours": "hours",
    "count.mins": "minutes",
    "nav.details": "Our day",
    "nav.location": "The venue",
    "nav.stay": "Stay",
    "nav.gift": "Honeymoon",
    "hero.invite": "With joy we invite you<br />to our wedding",
    "hero.date": "30 August 2027",
    "giornata.title": "Our day",
    "giornata.arrivo": "Guests arrival & welcome",
    "giornata.cerimonia": "Ceremony",
    "giornata.aperitivo": "Aperitivo",
    "giornata.cena": "Dinner",
    "giornata.torta": "Cake cutting",
    "giornata.party": "Party time",
    "loc.title": "Our venue",
    "loc.maps": "View on Google Maps ↗",
    "arr.title": "Getting here",
    "arr.plane": "By plane",
    "arr.planeText": "Catania Fontanarossa airport, then about a 30-minute drive.",
    "arr.car": "By car",
    "arr.carText": "From the A18 motorway, exit at Augusta and follow signs for Brucoli.",
    "arr.tip": "What we recommend",
    "arr.tipText": "Rent a car to enjoy the wonders of Sicily at their best.",
    "arr.choose": "Choose your route",
    "map.fromAirport": "From the airport",
    "map.fromStation": "From Catania Centrale",
    "map.fromSiracusa": "From Syracuse",
    "map.venueOnly": "Venue only",
    "stay.title": "Where to stay",
    "stay.p1":
      "There are great options nearby: the seaside villages of Brucoli and Augusta " +
      "are the closest, while Syracuse and the island of Ortigia (about 30 minutes) " +
      "offer hotels, B&Bs and an unforgettable old town.",
    "stay.todo": "[We'll list recommended hotels and any group rates here.]",
    "rsvp.title": "Confirm your attendance",
    "rsvp.lead1": "Your presence is the most beautiful gift we could receive.",
    "rsvp.lead2": "We kindly ask you to confirm by <strong>30 June 2027</strong>.",
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
    "rsvp.send": "Confirm your attendance ♡",
    "rsvp.thanks": "Thank you! Your response has been recorded.",
    "rsvp.logout": "Log out",
    "gift.title": "Honeymoon fund",
    "gift.lead":
      "If you wish to help make our honeymoon unforgettable, " +
      "you can contribute here.",
    "gift.iban": "IBAN",
    "gift.holder": "Account holder",
    "gift.reason": "Reference",
    "gift.reasonText": "Honeymoon",
    "actions.calendar": "Add to calendar",
    "actions.map": "View the venue",
    "actions.contact": "Contact us",
    "footer.date": "30 August 2027 · Sicily",
    "location.open": "View on Google Maps ↗",
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

// ---------- Mixtilinear cartouche frame around the invitation card ----------
function framePath(w, h, inset, c, bump, bh) {
  // one closed outline: concave (scooped) corners + a shallow convex arc mid-side
  const x0 = inset, y0 = inset, x1 = w - inset, y1 = h - inset;
  const mx = w / 2, my = h / 2;
  const mH = Math.min(bump, (x1 - x0) / 2 - c - 8); // half-width of top/bottom arc
  const mV = Math.min(bump, (y1 - y0) / 2 - c - 8); // half-height of side arc
  return [
    `M ${x0} ${y0 + c}`,
    `A ${c} ${c} 0 0 1 ${x0 + c} ${y0}`,
    `L ${mx - mH} ${y0}`,
    `A ${mH} ${bh} 0 0 1 ${mx + mH} ${y0}`,
    `L ${x1 - c} ${y0}`,
    `A ${c} ${c} 0 0 1 ${x1} ${y0 + c}`,
    `L ${x1} ${my - mV}`,
    `A ${bh} ${mV} 0 0 1 ${x1} ${my + mV}`,
    `L ${x1} ${y1 - c}`,
    `A ${c} ${c} 0 0 1 ${x1 - c} ${y1}`,
    `L ${mx + mH} ${y1}`,
    `A ${mH} ${bh} 0 0 1 ${mx - mH} ${y1}`,
    `L ${x0 + c} ${y1}`,
    `A ${c} ${c} 0 0 1 ${x0} ${y1 - c}`,
    `L ${x0} ${my + mV}`,
    `A ${bh} ${mV} 0 0 1 ${x0} ${my - mV}`,
    "Z",
  ].join(" ");
}

function drawFrame() {
  const card = document.getElementById("invite-card");
  const svg = card.querySelector(".frame-svg");
  const w = card.offsetWidth;
  const h = card.offsetHeight;
  if (!w || !h) return;
  const pad = 12;

  svg.setAttribute("viewBox", `0 0 ${w + 2 * pad} ${h + 2 * pad}`);
  svg.style.width = w + 2 * pad + "px";
  svg.style.height = h + 2 * pad + "px";
  svg.style.left = -pad + "px";
  svg.style.top = -pad + "px";

  // paths live in the padded coordinate space
  const shift = (d) => d; // inset below already accounts for pad via +pad
  document.getElementById("frame-outer").setAttribute("d", framePath(w + 2 * pad, h + 2 * pad, pad, 22, 54, 9));
  document.getElementById("frame-inner").setAttribute("d", framePath(w + 2 * pad, h + 2 * pad, pad + 7, 17, 47, 7));
}

drawFrame();
if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawFrame);
if (typeof ResizeObserver !== "undefined") {
  new ResizeObserver(drawFrame).observe(document.getElementById("invite-card"));
} else {
  window.addEventListener("resize", drawFrame);
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
