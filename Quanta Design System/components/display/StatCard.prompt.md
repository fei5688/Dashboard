The signature analytics tile: label + big tabular value + signed delta, with an optional sparkline. Lay several in a grid as the top row of a dashboard.

```jsx
<StatCard label="MRR" value="$48,210" delta={12.4} deltaLabel="vs last month"
  spark={[30,32,31,35,38,41,48]} icon="dollar-sign" />
<StatCard label="Churn" value="2.1%" delta={-0.4} deltaLabel="vs last month" />
```

`delta` as a number auto-colors green/red with an arrow. Value stays mono/tabular so columns of cards align. Sparkline color defaults by delta sign.
