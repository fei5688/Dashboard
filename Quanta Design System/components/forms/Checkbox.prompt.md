Square checkbox with label. Use `indeterminate` for "some selected" header rows in tables.

```jsx
<Checkbox label="Include archived" checked={v} onChange={e => setV(e.target.checked)} />
<Checkbox indeterminate label="Select all" />
<Checkbox label="Disabled" disabled />
```

Cobalt fill when checked. Needs `lucide.createIcons()` for the check glyph.
