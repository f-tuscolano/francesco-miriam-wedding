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
