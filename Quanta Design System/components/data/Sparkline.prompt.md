Compact trend line for KPI cards and table cells. Pass raw numbers; it auto-scales.

```jsx
<Sparkline data={[4,6,5,8,7,9,12]} />
<Sparkline data={series} color="var(--chart-2)" width={120} height={32} />
<Sparkline data={series} color="var(--danger)" fill={false} />
```

Use a `--chart-*` token for the color. Set `fill={false}` for a bare line.
