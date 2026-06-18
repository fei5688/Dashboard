Generic surface for grouping content. Optional `title`/`subtitle`/`actions` header; set `interactive` for clickable cards (adds hover lift).

```jsx
<Card title="Traffic sources" subtitle="Last 30 days" actions={<IconButton icon="more-horizontal" label="More" />}>
  …chart…
</Card>
<Card interactive padding="sm">Compact clickable tile</Card>
```

Padding `sm | md | lg`. Hairline border + `--shadow-xs` at rest.
