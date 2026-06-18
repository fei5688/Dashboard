# Quanta · Analytics Design System

A clean, **Swiss-minimal design system** for analytics products — design tokens, a React component library, and an interactive admin-dashboard template. Built data-first: a cool grey ramp does the structural work, a single cobalt accent carries action, and every number uses tabular figures so columns and KPIs line up.

**▶ Live demo:** https://fei5688.github.io/Dashboard/Quanta%20Design%20System/ui_kits/dashboard/index.html

---

## What's inside

- **Design tokens** — color (neutral ramp + cobalt accent + semantic + 8-step chart palette), typography (Archivo UI + IBM Plex Mono numerics), spacing, radii, shadows, motion. All exposed as CSS custom properties from one `styles.css`.
- **14 React components** — Button, IconButton, Input, Select, Checkbox, Switch, Card, StatCard, Badge, Tag, Avatar, Table, Sparkline, Tabs.
- **Dashboard UI template** — an interactive analytics product with three working surfaces: **Overview** (KPIs + chart + traffic sources + top pages), **Explore** (filters + sortable/selectable table), and **Events** (event-volume table).
- **Guidelines & specimen cards** — color, type, and spacing reference cards plus written design rules.

## Project structure

```
styles.css            ← link this one file to inherit all tokens + fonts
readme.md             ← full design guide (voice, visual rules, iconography)
SKILL.md              ← usable as a downloadable agent skill
tokens/               ← colors, typography, spacing, fonts, base resets
components/           ← React primitives (forms / display / data / navigation)
ui_kits/dashboard/    ← the interactive dashboard template
guidelines/cards/     ← foundation specimen cards
assets/               ← logo mark + wordmark
```

## How to use it

- **View it** — open the live demo above, or open any `ui_kits/dashboard/index.html` / `*.card.html` in a browser (needs internet — React, Babel & Lucide load from CDN).
- **Make it yours** — edit `ui_kits/dashboard/data.js` to swap in your own numbers and labels; adjust `tokens/` to retheme colors and type. Layout and components stay the same.
- **Build with it** — link `styles.css`, then use the components documented in each `components/.../*.prompt.md`. `readme.md` holds the full design rules.

## Notes

- The dashboard shows **placeholder/sample data** — it is a visual template, not connected to any live data source.
- The name **Quanta**, the cobalt accent, and the bar-glyph logo are template defaults — replace them with your real brand.
- **Fonts** load from Google Fonts (Archivo, IBM Plex Mono) as free stand-ins; **icons** use [Lucide](https://lucide.dev). Self-host / swap as needed.

> Hosted on GitHub Pages with a root `.nojekyll` file so the underscore-prefixed bundle (`_ds_bundle.js`) is served.
