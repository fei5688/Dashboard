# Quanta Design System

A clean, Swiss-minimal design system for **Quanta**, a product analytics platform — dashboards, exploration tables, event streams, and reporting. The system is data-first: a deep neutral grey ramp does almost all the work, a single cobalt accent carries action, and an 8-step categorical ramp carries data visualization. Numbers everywhere use tabular figures so columns and KPIs align.

> **Brand origin:** designed from scratch (June 2026). There was no existing codebase, Figma, or brand guide to import — the direction "clean & minimal / Swiss, data-analytics web app" was set by the user. If a real Quanta brand or codebase exists, re-import it and these foundations should be reconciled against it.

## Sources
- **None provided.** No Figma link, GitHub repo, or codebase was attached. Everything here is original. When source material becomes available, attach it via the Import menu and flag what should change.

## Substitutions (please confirm / replace)
- **Fonts** — no licensed binaries were available, so the system loads the closest free matches from Google Fonts:
  - **Archivo** (neo-grotesque) → stands in for a Helvetica/Neue-Haas-style UI face.
  - **IBM Plex Mono** → data, numerics, codes.
  Self-host licensed files when you have them and update `tokens/fonts.css`.
- **Icons** — **Lucide** (CDN), a 1.5px-stroke open line set, used as the system icon library. Swap for a house set if one exists.

---

## CONTENT FUNDAMENTALS

How Quanta writes copy:

- **Voice:** plain, precise, quietly confident. It states what happened and what to do — no hype, no exclamation marks. "Sessions climbed 12% week over week," not "Sessions are skyrocketing! 🚀"
- **Person:** address the user as **you** ("your workspace", "you don't have any reports yet"); the product refers to itself by name ("Quanta tracked 1.36M events") rather than "we".
- **Casing:** **Sentence case** for everything — buttons, headings, menu items, table headers (the only uppercase is the small `q-overline` eyebrow label and table column heads, which are intentionally tracked-out caps). Never Title Case UI.
- **Numbers:** always formatted — thousands separators (`486,204`), units attached (`4m 12s`, `3.94%`), signed deltas with direction (`+12.4%`, `−0.4%`). Numbers live in the mono face.
- **Buttons & actions:** verb-first and short — "New report", "Add filter", "Save segment", "Export". One primary action per view.
- **Empty / error states:** factual and helpful, never cute — "You don't have any reports yet", "That address is already in use."
- **Tone words to favor:** measure, track, explore, segment, compare, breakdown, trend. **Avoid:** magic, effortless, supercharge, unlock, delight.
- **Emoji:** not used in product UI. **Punctuation:** use real symbols — `·` for separators, `−` (minus) for negatives, `→` for navigation hints, `▲ ▼` for KPI direction.

Example copy in the wild:
> **Overview · Northwind** · "Sessions over time" · "Traffic sources — Last 30 days" · "12 selected · Save segment · Compare" · "Events tracked 1.36M · +8.2% vs prev."

---

## VISUAL FOUNDATIONS

**Overall feel.** International Typographic Style applied to dense data UI: a strict grid, generous whitespace, hairline rules instead of heavy boxes, type and number alignment doing the structural work. Restraint over decoration. No gradients as backgrounds, no glassmorphism, no drop-shadow theatrics.

**Color.**
- A 13-step **cool grey ramp** (`--gray-0…950`) is the backbone — surfaces, text, borders are all greys.
- **One accent**, cobalt `--blue-500 #2f64f0`, reserved for the primary action, active nav, focus, and the lead chart series. Used sparingly so it always means "this is the thing".
- **Semantic** hues are muted, not neon: success green `#18935a`, danger red `#d83a3f`, warning amber `#d6890a`, each with a tinted `-subtle` background.
- **Data viz**: an 8-step categorical ramp (`--chart-1…8`) starting at cobalt; deltas are green up / red down.
- Author against **semantic aliases** (`--text-primary`, `--surface-card`, `--border-default`, `--accent`), not raw scale steps.

**Typography.** Archivo for all UI; tracking tightens as size grows (`-0.03em` on display). IBM Plex Mono + `tabular-nums` for every number, KPI, axis label, and code token. Type scale is restrained (11→62px) — most UI lives at 12–14px. Weights: 400 body, 500 controls/labels, 600 headings/values, 700 display only.

**Spacing & layout.** 4px base grid. Fixed app chrome: **232px** sidebar, **56px** topbar, content capped near **1180px** and centered. Cards and rows align to the grid; gaps come from fl/grid `gap`, not ad-hoc margins.

**Shape & depth.**
- **Corner radii are small** — `2–8px`. Controls/inputs at `5px` (`--radius-md`), cards at `8px` (`--radius-lg`), pills/avatars fully round. Nothing is heavily rounded.
- **Borders** are 1px hairlines (`--border-subtle/-default/-strong`) and are the *primary* separator — Quanta prefers a hairline to a shadow.
- **Shadows** are subtle and cool-tinted, used only for genuine elevation (hover lift on interactive cards `--shadow-md`, overlays/menus `--shadow-overlay`). Resting cards sit on `--shadow-xs` + a hairline border. No colored or glow shadows.
- **Cards:** white surface, 1px `--border-default`, `8px` radius, `--shadow-xs`. Interactive cards deepen the border and lift to `--shadow-md` on hover.

**Backgrounds.** Flat. Page is `--gray-50`, surfaces are white. No imagery, textures, patterns, or gradient washes behind content. The only gradients in the system are the faint vertical area-fills *under chart lines* (color → transparent at ~16% opacity).

**Imagery.** Minimal by nature — this is a data tool. Avatars are the main "imagery"; when no photo, a deterministic initials chip colored from the chart ramp. No stock photography.

**Motion.** Quick and matter-of-fact. Durations 120/180/260ms; standard easing `cubic-bezier(0.2,0,0,1)`, a gentle `--ease-out` for the switch knob. Transitions are limited to background, color, border, box-shadow, and small transforms. **No bounce, no spring, no looping decorative animation.** Buttons nudge 0.5px down on press.

**Interaction states.**
- **Hover:** fills step up one grey (`transparent → --surface-hover`); solid buttons darken one step (`accent → accent-hover`). Interactive cards lift.
- **Press/active:** darken further (`--accent-active` / `--surface-active`) + 0.5px translate. No scale-down.
- **Focus:** cobalt border + a soft 3px `--ring` (`--blue-100`). Always visible, never removed.
- **Selected/active nav:** `--accent-subtle` fill with `--accent-active` text, semibold.
- **Disabled:** ~45% opacity, `not-allowed` cursor.

**Transparency & blur.** Used almost never. No backdrop blur in the core system. Subtle alpha only appears inside shadows and chart area-fills.

**Data-viz specifics.** Cobalt is series 1; comparison/previous series are neutral grey. Gridlines are `--border-subtle` hairlines, axis labels mono 10px tertiary. Sparklines carry a faint area fill and flip to red when trending down.

---

## ICONOGRAPHY

- **Library:** [Lucide](https://lucide.dev) (open-source, MIT), loaded from CDN. Consistent **1.5px stroke**, rounded line caps, 24px source grid — the open-line look matches Quanta's hairline aesthetic. *(Substitution: no house icon set existed; Lucide is the chosen stand-in — swap if a brand set appears.)*
- **Rendering:** icons are placed as `<i data-lucide="name">` and hydrated by `lucide.createIcons()` after React renders. In live React UIs, call it inside a render-effect so icons survive re-renders.
- **Sizing:** 15–16px inside controls (buttons, inputs, tabs), 16px in nav and stat cards, 12–13px inside tags/badges. Color inherits `currentColor` and is usually `--text-secondary` / `--text-tertiary`; active icons take `--text-primary` or `--accent`.
- **Common glyphs:** `layout-dashboard, table-2, activity, filter, users-round, file-bar-chart, settings` (nav); `plus, search, share-2, download, sliders-horizontal, more-horizontal, bell` (actions); `arrow-up/down, trending-down, dollar-sign, target, timer` (data).
- **Emoji:** never used as iconography. **Unicode** is used for compact data marks only: `▲ ▼ –` (KPI direction), `·` (separators), `−` / `→`.
- **Brand mark:** an ascending three-bar glyph in a cobalt rounded square — see `assets/logo-mark.svg` (mark) and `assets/logo-wordmark.svg` (mark + "Quanta" wordmark in Archivo 700).

---

## INDEX — what's in this system

**Root**
- `styles.css` — the one file consumers link; `@import`s everything below.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills front matter for use as a downloadable skill.

**`tokens/`** (all reachable from `styles.css`)
- `fonts.css` — `@font-face` / webfont loading (Google Fonts).
- `colors.css` — neutral ramp, cobalt accent, semantic, chart ramp + semantic aliases.
- `typography.css` — families, scale, weights, tracking, numeric settings.
- `spacing.css` — spacing, radii, borders, shadows, motion, layout, z-index.
- `base.css` — minimal resets + `.q-num` / `.q-overline` utilities + keyframes.

**`components/`** (14 components → `window.QuantaDesignSystem_e41436`)
- `forms/` — **Button, IconButton, Input, Select, Checkbox, Switch**
- `display/` — **Card, StatCard, Badge, Tag, Avatar**
- `data/` — **Table, Sparkline**
- `navigation/` — **Tabs**
- Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; each directory has a `*.card.html` specimen.

**`ui_kits/dashboard/`** — interactive Quanta analytics product recreation
- `index.html` (entry), `Sidebar`, `Topbar`, `AreaChart`, `OverviewScreen`, `ExploreScreen`, `EventsScreen`, `data.js`.
- Demonstrated surfaces: **Overview** (KPIs + chart + sources + top pages), **Explore** (filters + sortable/selectable table), **Events** (volume table). Funnels/Cohorts/Reports/Settings are intentionally stubbed.

**`guidelines/cards/`** — foundation specimen cards shown in the Design System tab (Type, Colors, Spacing).

**`assets/`** — `logo-mark.svg`, `logo-wordmark.svg`.
