---
name: quanta-design
description: Use this skill to generate well-branded interfaces and assets for Quanta, a Swiss-minimal product analytics platform — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping data dashboards, tables, KPI views, and reports.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Key entry points:
- `styles.css` — link this one file to inherit every token and webfont.
- `tokens/` — colors, typography, spacing/radii/shadows/motion. Author against the semantic aliases (`--text-primary`, `--surface-card`, `--border-default`, `--accent`), not raw scale steps.
- `components/` — React primitives (Button, Input, Select, Checkbox, Switch, IconButton, Card, StatCard, Badge, Tag, Avatar, Table, Sparkline, Tabs). Each has a `.prompt.md` with usage.
- `ui_kits/dashboard/` — a full interactive analytics product recreation to copy patterns from.
- `assets/` — logo mark + wordmark.

House rules in one breath: Swiss/International Typographic Style; cool grey ramp + one cobalt accent; Archivo UI + IBM Plex Mono tabular numbers; small radii (2–8px); 1px hairline borders preferred over shadows; flat backgrounds, no gradient washes; Lucide icons at 1.5px stroke; sentence case copy, address the user as "you", no emoji, formatted signed numbers; quick matter-of-fact motion (120–260ms, no bounce).

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
