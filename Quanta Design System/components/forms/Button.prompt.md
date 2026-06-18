Primary action control — use for any committed action; one `primary` per view, `secondary`/`ghost` for the rest, `danger` for destructive.

```jsx
<Button variant="primary" iconLeft="plus">New report</Button>
<Button variant="secondary" size="sm">Export</Button>
<Button variant="ghost" iconLeft="filter">Filter</Button>
<Button variant="danger" loading>Deleting…</Button>
```

Variants: `primary` (cobalt), `secondary` (hairline outline), `ghost` (text-only, fills on hover), `danger`. Sizes `sm | md | lg`. Icons are Lucide names (`iconLeft` / `iconRight`); host must run `lucide.createIcons()` after render. Supports `loading`, `fullWidth`, `disabled`.
