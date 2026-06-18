Styled native `<select>` matching Input metrics, with a Lucide chevron.

```jsx
<Select label="Date range" value={range} onChange={e => setRange(e.target.value)}
  options={['Last 7 days', 'Last 30 days', 'Last quarter']} />
<Select placeholder="Choose metric…" options={[{value:'mrr',label:'MRR'},{value:'dau',label:'DAU'}]} />
```

Pass `options` as strings or `{value,label}`. Same sizes/error model as Input. Needs `lucide.createIcons()`.
