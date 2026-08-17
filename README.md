# Francesco & Miriam — 30 · 08 · 2027

Wedding website for Francesco & Miriam — Commenda di San Calogero, Augusta (SR), Sicily.

Simple static site: HTML + CSS + a little JavaScript. No build step.

## Features

- Bilingual: Italian (default) with an EN toggle in the nav (choice saved in `localStorage`)
- Intertwined F&M monogram logo (inline SVG, reused in nav / hero / footer)
- Live countdown to 30 August 2027
- Travel directions (plane / car / train) + embedded Google Map of the venue
- Sections: Our story · The big day · Getting there · Where to stay

## Structure

- `index.html` — the whole site (Italian text in markup; translations in `script.js`)
- `styles.css` — styling
- `script.js` — countdown, IT/EN language toggle, scroll animations
- `img/` — venue photos
- `favicon.svg` — monogram favicon

## Editing

Remaining placeholders are marked with `[brackets]` in `index.html` **and** in both
language dictionaries in `script.js` (ceremony time, dress code, hotels, your story).

## Hosting on GitHub Pages (free)

1. Push to GitHub
2. Repo → Settings → Pages → Source: "Deploy from a branch", branch `main`, folder `/ (root)`
3. Live at `https://f-tuscolano.github.io/francesco-miriam-wedding/`
