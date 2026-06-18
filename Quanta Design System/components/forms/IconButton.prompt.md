Icon-only square button for toolbars, table-row actions, and dense controls. Always pass `label` for accessibility.

```jsx
<IconButton icon="search" label="Search" />
<IconButton icon="sliders-horizontal" label="Settings" active />
<IconButton icon="more-horizontal" variant="outline" label="More" />
```

Variants: `ghost` (default) and `outline`. Sizes `sm | md | lg`. Use `active` for toggled state. Lucide icons require `lucide.createIcons()` after render.
