Config-driven data table — the workhorse of analytics views. Define columns once; pass row objects.

```jsx
<Table
  columns={[
    { key: 'page', header: 'Page', width: '40%' },
    { key: 'views', header: 'Views', align: 'right', sortable: true },
    { key: 'trend', header: 'Trend', align: 'right',
      render: v => <Sparkline data={v} width={80} height={24} /> },
    { key: 'status', header: 'Status',
      render: v => <Badge tone={v === 'up' ? 'success' : 'danger'} dot>{v}</Badge> },
  ]}
  data={rows}
  sortBy="views" sortDir="desc" onSort={setSort}
  onRowClick={r => open(r)}
/>
```

Right-aligned and `numeric` columns render mono/tabular for clean number columns. Use `render` to drop in Badge, Sparkline, Avatar. `dense` for 36px rows.
