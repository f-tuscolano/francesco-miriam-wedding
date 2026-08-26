// ===== Francesco & Miriam — testi del sito in italiano, inglese e romeno =====
//
// Ogni chiave corrisponde a un attributo data-i18n (o data-i18n-ph per i
// placeholder) in index.html, nello stesso ordine in cui appare nella pagina.
// Per aggiungere una lingua: nuovo blocco qui con le stesse 81 chiavi,
// più un pulsante .lang-btn nella nav.

const I18N = {
  it: {
    /* Intro */
    "intro.enter": "Entra",

    /* Nav */
    "nav.details": "Programma",
    "nav.location": "La location",
    "nav.stay": "Alloggi",
    "nav.gift": "Viaggio di nozze",

    /* Hero */
    "hero.invite": "Con gioia vi invitiamo<br />al nostro matrimonio",
    "hero.date": "30 Agosto 2027",

    /* Countdown */
    "count.days": "giorni",
    "count.hours": "ore",
    "count.mins": "minuti",

    /* Timeline */
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

    /* Location */
    "loc.title": "La nostra location",
    "loc.site": "Visita il sito ufficiale ↗",

    /* Come raggiungerci */
    "arr.title": "Come raggiungerci",
    "arr.plane": "In aereo",
    "arr.planeText": "Aeroporto di Catania Fontanarossa, poi proseguire in auto per circa 30 minuti.",
    "arr.car": "In auto",
    "arr.carText": "Dall'autostrada A18, uscita Augusta e seguire le indicazioni per Brucoli.",
    "arr.tip": "Cosa consigliamo",
    "arr.tipText": "Noleggiare un'auto per vivere al meglio la meravigliosa Sicilia.",
    "arr.transfer": "Noleggio autovetture",
    "arr.transferT": "Per il noleggio autovetture vi consigliamo:",
    "arr.h24": "(attivo 24 ore)",
    "arr.choose": "Scegli il tuo percorso",

    /* Mappa */
    "map.fromAirport": "Dall'aeroporto",
    "map.fromStation": "Da Catania Centrale",
    "map.fromSiracusa": "Da Siracusa",
    "map.venueOnly": "Solo la tenuta",
    "map.hint": "Nella mappa tocca «More options» per aprire il percorso in Google Maps.",

    /* Dove alloggiare */
    "stay.title": "Dove alloggiare",
    "stay.lead": "Il nostro consiglio è di arrivare il venerdì e concedervi qualche giorno: la Sicilia orientale merita almeno un lungo weekend.",
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

    /* RSVP */
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

    /* Viaggio di nozze */
    "gift.title": "Viaggio di nozze",
    "gift.lead": "Se desiderate contribuire a rendere indimenticabile il nostro viaggio di nozze, potete farlo qui.",
    "gift.iban": "IBAN",
    "gift.bank": "Banca",
    "gift.holder": "Intestatario",
    "gift.reason": "Causale",

    /* Action bar */
    "actions.calendar": "Aggiungi al calendario",
    "actions.map": "Vedi la location",

    /* Footer */
    "footer.date": "30 Agosto 2027 · Sicilia",
  },

  en: {
    /* Intro */
    "intro.enter": "Enter",

    /* Nav */
    "nav.details": "Programme",
    "nav.location": "The venue",
    "nav.stay": "Stay",
    "nav.gift": "Honeymoon",

    /* Hero */
    "hero.invite": "With joy we invite you<br />to our wedding",
    "hero.date": "30 August 2027",

    /* Countdown */
    "count.days": "days",
    "count.hours": "hours",
    "count.mins": "minutes",

    /* Timeline */
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

    /* Location */
    "loc.title": "Our venue",
    "loc.site": "Visit the official website ↗",

    /* Come raggiungerci */
    "arr.title": "Getting here",
    "arr.plane": "By plane",
    "arr.planeText": "Catania Fontanarossa airport, then about a 30-minute drive.",
    "arr.car": "By car",
    "arr.carText": "From the A18 motorway, exit at Augusta and follow signs for Brucoli.",
    "arr.tip": "What we recommend",
    "arr.tipText": "Rent a car to enjoy the wonders of Sicily at their best.",
    "arr.transfer": "Car hire",
    "arr.transferT": "For car hire we recommend:",
    "arr.h24": "(24 hours)",
    "arr.choose": "Choose your route",

    /* Mappa */
    "map.fromAirport": "From the airport",
    "map.fromStation": "From Catania Centrale",
    "map.fromSiracusa": "From Syracuse",
    "map.venueOnly": "Venue only",
    "map.hint": "On the map, tap “More options” to open the route in Google Maps.",

    /* Dove alloggiare */
    "stay.title": "Where to stay",
    "stay.lead": "Our advice is to arrive on the Friday and give yourselves a few days: eastern Sicily deserves at least a long weekend.",
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

    /* RSVP */
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

    /* Viaggio di nozze */
    "gift.title": "Honeymoon fund",
    "gift.lead": "If you wish to help make our honeymoon unforgettable, you can contribute here.",
    "gift.iban": "IBAN",
    "gift.bank": "Bank",
    "gift.holder": "Account holder",
    "gift.reason": "Reference",

    /* Action bar */
    "actions.calendar": "Add to calendar",
    "actions.map": "View the venue",

    /* Footer */
    "footer.date": "30 August 2027 · Sicily",
  },

  ro: {
    /* Intro */
    "intro.enter": "Intră",

    /* Nav */
    "nav.details": "Programul",
    "nav.location": "Locația",
    "nav.stay": "Cazare",
    "nav.gift": "Luna de miere",

    /* Hero */
    "hero.invite": "Cu bucurie vă invităm<br />la nunta noastră",
    "hero.date": "30 August 2027",

    /* Countdown */
    "count.days": "zile",
    "count.hours": "ore",
    "count.mins": "minute",

    /* Timeline */
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

    /* Location */
    "loc.title": "Locația noastră",
    "loc.site": "Vizitați site-ul oficial ↗",

    /* Come raggiungerci */
    "arr.title": "Cum ajungeți",
    "arr.plane": "Cu avionul",
    "arr.planeText": "Aeroportul Catania Fontanarossa, apoi aproximativ 30 de minute cu mașina.",
    "arr.car": "Cu mașina",
    "arr.carText": "De pe autostrada A18, ieșirea Augusta, apoi urmați indicatoarele spre Brucoli.",
    "arr.tip": "Ce vă recomandăm",
    "arr.tipText": "Închiriați o mașină pentru a descoperi în tihnă minunata Sicilie.",
    "arr.transfer": "Închiriere auto",
    "arr.transferT": "Pentru închirierea de mașini vă recomandăm:",
    "arr.h24": "(non-stop)",
    "arr.choose": "Alegeți traseul",

    /* Mappa */
    "map.fromAirport": "De la aeroport",
    "map.fromStation": "De la Catania Centrale",
    "map.fromSiracusa": "De la Siracusa",
    "map.venueOnly": "Doar locația",
    "map.hint": "Pe hartă atingeți «More options» pentru a deschide traseul în Google Maps.",

    /* Dove alloggiare */
    "stay.title": "Unde să stați",
    "stay.lead": "Vă sfătuim să ajungeți vineri și să vă acordați câteva zile: Sicilia orientală merită cel puțin un weekend lung.",
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

    /* RSVP */
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

    /* Viaggio di nozze */
    "gift.title": "Luna de miere",
    "gift.lead": "Dacă doriți să contribuiți ca luna noastră de miere să fie de neuitat, puteți face acest lucru aici.",
    "gift.iban": "IBAN",
    "gift.bank": "Banca",
    "gift.holder": "Titular",
    "gift.reason": "Detalii plată",

    /* Action bar */
    "actions.calendar": "Adaugă în calendar",
    "actions.map": "Vezi locația",

    /* Footer */
    "footer.date": "30 August 2027 · Sicilia",
  },
};
