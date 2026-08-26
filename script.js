// ===== Francesco & Miriam — 30 agosto 2027 =====

// ---------- Countdown ----------
const WEDDING_DATE = new Date("2027-08-30T17:00:00+02:00");

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
    "arr.transfer": "Noleggio autovetture",
    "arr.transferT": "Per il noleggio autovetture vi consigliamo:",
    "arr.h24": "(attivo 24 ore)",
    "stay.lead":
      "Il nostro consiglio è di arrivare il venerdì e concedervi qualche giorno: " +
      "la Sicilia orientale merita almeno un lungo weekend.",
    "stay.z1": "Brucoli e Augusta",
    "stay.z1T": "i borghi di mare più vicini alla Commenda, a 10–15 minuti d'auto.",
    "stay.z2": "Siracusa e Ortigia",
    "stay.z2T": "a circa 30 minuti: hotel, B&B e un centro storico indimenticabile.",
    "stay.z3": "Agriturismi nell'entroterra",
    "stay.z3T": "tra Carlentini e Agnone Bagni, immersi negli agrumeti.",
    "stay.pdf": "Scarica la lista delle strutture (PDF)",
    "stay.doTitle": "Cosa fare nei dintorni",
    "stay.d1": "l'isola di Siracusa: il Duomo, il mercato la mattina, un aperitivo al tramonto sul lungomare.",
    "stay.d2": "a un'ora, con Modica e Ragusa poco oltre, per una giornata tra chiese e cioccolato.",
    "stay.d3n": "Mare",
    "stay.d3": "il borgo di pescatori di Marzamemi, la spiaggia di San Lorenzo e la riserva di Vendicari, poco più a sud.",
    "stay.d4": "a un'ora e mezza: escursioni sui crateri e cantine sulle pendici.",
    "intro.enter": "Entra",
    "count.days": "giorni",
    "count.hours": "ore",
    "count.mins": "minuti",
    "nav.details": "Programma",
    "nav.location": "La location",
    "nav.stay": "Alloggi",
    "nav.gift": "Viaggio di nozze",
    "hero.invite": "Con gioia vi invitiamo<br />al nostro matrimonio",
    "hero.date": "30 Agosto 2027",
    "giornata.title": "La timeline",
    "tl.accoglienza": "Accoglienza",
    "tl.accoglienzaD": "Benvenuti alla Commenda",
    "tl.cerimonia": "Cerimonia",
    "tl.cerimoniaD": "Rito civile nel giardino della Commenda",
    "tl.aperitivo": "Aperitivo",
    "tl.aperitivoD": "Cocktail &amp; buffet in terrazza",
    "tl.cena": "Cena",
    "tl.cenaD": "Cena servita sotto le stelle",
    "tl.torta": "Torta",
    "tl.tortaD": "Taglio della torta e brindisi",
    "tl.party": "Party",
    "tl.partyD": "Musica e DJ Set",
    "loc.title": "La nostra location",
    "loc.site": "Visita il sito ufficiale ↗",
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
    "map.hint": "Nella mappa tocca «More options» per aprire il percorso in Google Maps.",
    "stay.title": "Dove alloggiare",
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
    "gift.bank": "Banca",
    "gift.holder": "Intestatario",
    "gift.reason": "Causale",
    "actions.calendar": "Aggiungi al calendario",
    "actions.map": "Vedi la location",
    "footer.date": "30 Agosto 2027 · Sicilia",
  },
  en: {
    "arr.transfer": "Car hire",
    "arr.transferT": "For car hire we recommend:",
    "arr.h24": "(24 hours)",
    "stay.lead":
      "Our advice is to arrive on the Friday and give yourselves a few days: " +
      "eastern Sicily deserves at least a long weekend.",
    "stay.z1": "Brucoli and Augusta",
    "stay.z1T": "the seaside villages closest to the Commenda, a 10–15 minute drive away.",
    "stay.z2": "Syracuse and Ortigia",
    "stay.z2T": "about 30 minutes away: hotels, B&Bs and an unforgettable old town.",
    "stay.z3": "Countryside farmhouses",
    "stay.z3T": "between Carlentini and Agnone Bagni, surrounded by citrus groves.",
    "stay.pdf": "Download the list of hotels (PDF)",
    "stay.doTitle": "What to do nearby",
    "stay.d1": "the island of Syracuse: the Duomo, the morning market, an aperitivo at sunset on the seafront.",
    "stay.d2": "an hour away, with Modica and Ragusa just beyond — a day of churches and chocolate.",
    "stay.d3n": "The sea",
    "stay.d3": "the fishing village of Marzamemi, San Lorenzo beach and the Vendicari reserve, a little further south.",
    "stay.d4": "an hour and a half away: hikes on the craters and wineries on its slopes.",
    "intro.enter": "Enter",
    "count.days": "days",
    "count.hours": "hours",
    "count.mins": "minutes",
    "nav.details": "Programme",
    "nav.location": "The venue",
    "nav.stay": "Stay",
    "nav.gift": "Honeymoon",
    "hero.invite": "With joy we invite you<br />to our wedding",
    "hero.date": "30 August 2027",
    "giornata.title": "Timeline",
    "tl.accoglienza": "Welcome",
    "tl.accoglienzaD": "Welcome to the Commenda",
    "tl.cerimonia": "Ceremony",
    "tl.cerimoniaD": "Civil ceremony in the Commenda gardens",
    "tl.aperitivo": "Aperitivo",
    "tl.aperitivoD": "Cocktails &amp; buffet on the terrace",
    "tl.cena": "Dinner",
    "tl.cenaD": "Dinner served under the stars",
    "tl.torta": "Cake",
    "tl.tortaD": "Cake cutting and toasts",
    "tl.party": "Party",
    "tl.partyD": "Music &amp; DJ set",
    "loc.title": "Our venue",
    "loc.site": "Visit the official website ↗",
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
    "map.hint": "On the map, tap “More options” to open the route in Google Maps.",
    "stay.title": "Where to stay",
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
    "gift.bank": "Bank",
    "gift.holder": "Account holder",
    "gift.reason": "Reference",
    "actions.calendar": "Add to calendar",
    "actions.map": "View the venue",
    "footer.date": "30 August 2027 · Sicily",
  },
  ro: {
    "arr.transfer": "Închiriere auto",
    "arr.transferT": "Pentru închirierea de mașini vă recomandăm:",
    "arr.h24": "(non-stop)",
    "stay.lead":
      "Vă sfătuim să ajungeți vineri și să vă acordați câteva zile: " +
      "Sicilia orientală merită cel puțin un weekend lung.",
    "stay.z1": "Brucoli și Augusta",
    "stay.z1T": "satele de pe malul mării cele mai apropiate de Commenda, la 10–15 minute cu mașina.",
    "stay.z2": "Siracusa și Ortigia",
    "stay.z2T": "la circa 30 de minute: hoteluri, pensiuni și un centru istoric de neuitat.",
    "stay.z3": "Pensiuni agroturistice",
    "stay.z3T": "între Carlentini și Agnone Bagni, în mijlocul plantațiilor de citrice.",
    "stay.pdf": "Descărcați lista structurilor (PDF)",
    "stay.doTitle": "Ce puteți face în zonă",
    "stay.d1": "insula Siracuzei: Domul, piața de dimineață, un aperitiv la apus pe promenadă.",
    "stay.d2": "la o oră, iar Modica și Ragusa puțin mai departe — o zi între biserici și ciocolată.",
    "stay.d3n": "Marea",
    "stay.d3": "satul pescăresc Marzamemi, plaja San Lorenzo și rezervația Vendicari, puțin mai la sud.",
    "stay.d4": "la o oră și jumătate: drumeții pe cratere și vinării pe versanți.",
    "intro.enter": "Intră",
    "count.days": "zile",
    "count.hours": "ore",
    "count.mins": "minute",
    "nav.details": "Programul",
    "nav.location": "Locația",
    "nav.stay": "Cazare",
    "nav.gift": "Luna de miere",
    "hero.invite": "Cu bucurie vă invităm<br />la nunta noastră",
    "hero.date": "30 August 2027",
    "giornata.title": "Cronologia",
    "tl.accoglienza": "Primire",
    "tl.accoglienzaD": "Bine ați venit la Commenda",
    "tl.cerimonia": "Ceremonia",
    "tl.cerimoniaD": "Cununie civilă în grădina Commendei",
    "tl.aperitivo": "Aperitiv",
    "tl.aperitivoD": "Cocktail &amp; bufet pe terasă",
    "tl.cena": "Cina",
    "tl.cenaD": "Cină servită sub stele",
    "tl.torta": "Tortul",
    "tl.tortaD": "Tăierea tortului și toast",
    "tl.party": "Petrecere",
    "tl.partyD": "Muzică și DJ set",
    "loc.title": "Locația noastră",
    "loc.site": "Vizitați site-ul oficial ↗",
    "arr.title": "Cum ajungeți",
    "arr.plane": "Cu avionul",
    "arr.planeText": "Aeroportul Catania Fontanarossa, apoi aproximativ 30 de minute cu mașina.",
    "arr.car": "Cu mașina",
    "arr.carText": "De pe autostrada A18, ieșirea Augusta, apoi urmați indicatoarele spre Brucoli.",
    "arr.tip": "Ce vă recomandăm",
    "arr.tipText": "Închiriați o mașină pentru a descoperi în tihnă minunata Sicilie.",
    "arr.choose": "Alegeți traseul",
    "map.fromAirport": "De la aeroport",
    "map.fromStation": "De la Catania Centrale",
    "map.fromSiracusa": "De la Siracusa",
    "map.venueOnly": "Doar locația",
    "map.hint": "Pe hartă atingeți «More options» pentru a deschide traseul în Google Maps.",
    "stay.title": "Unde să stați",
    "rsvp.title": "Confirmați prezența",
    "rsvp.lead1": "Prezența voastră este cel mai frumos cadou pe care îl putem primi.",
    "rsvp.lead2": "Vă rugăm să confirmați până la <strong>30 iunie 2027</strong>.",
    "rsvp.loginLead": "Introduceți codul de pe invitația voastră.",
    "rsvp.codePlaceholder": "Cod invitație",
    "rsvp.login": "Intră",
    "rsvp.error": "Cod invalid — încercați din nou.",
    "rsvp.welcome": "Bine ați venit",
    "rsvp.attending": "Veți fi prezenți?",
    "rsvp.yes": "Vom fi acolo!",
    "rsvp.no": "Din păcate, nu",
    "rsvp.guests": "Câți veți fi?",
    "rsvp.notes": "Alergii, restricții alimentare sau observații",
    "rsvp.send": "Confirmați prezența ♡",
    "rsvp.thanks": "Vă mulțumim! Răspunsul vostru a fost înregistrat.",
    "rsvp.logout": "Ieșire",
    "gift.title": "Luna de miere",
    "gift.lead":
      "Dacă doriți să contribuiți ca luna noastră de miere să fie de neuitat, " +
      "puteți face acest lucru aici.",
    "gift.iban": "IBAN",
    "gift.bank": "Banca",
    "gift.holder": "Titular",
    "gift.reason": "Detalii plată",
    "actions.calendar": "Adaugă în calendar",
    "actions.map": "Vezi locația",
    "footer.date": "30 August 2027 · Sicilia",
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
  if (origin) {
    const from = encodeURIComponent(origin);
    frame.src = `https://www.google.com/maps?saddr=${from}&daddr=${dest}&output=embed`;
  } else {
    frame.src = `https://www.google.com/maps?q=${dest}&output=embed`;
  }
  document.querySelectorAll("#map-chips .chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.origin === key);
  });
}

document.querySelectorAll("#map-chips .chip").forEach((chip) => {
  chip.addEventListener("click", () => setMapOrigin(chip.dataset.origin));
});

// ---------- Intro ----------
const intro = document.getElementById("intro");

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

// one tap — on the button or anywhere on the sheet — and the intro dissolves
function leaveIntro() {
  if (intro.classList.contains("leaving")) return;
  intro.classList.add("leaving");
  setTimeout(enterSite, 620);
}

document.getElementById("inv").addEventListener("click", leaveIntro);

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
