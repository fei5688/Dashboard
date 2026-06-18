Underline tab bar for switching views within a page. Controlled or uncontrolled.

```jsx
<Tabs value={tab} onChange={setTab} tabs={[
  { value: 'overview', label: 'Overview' },
  { value: 'sources', label: 'Sources', count: 12 },
  { value: 'events', label: 'Events', icon: 'activity' },
]} />
```

Active tab gets a cobalt underline + semibold weight. Optional per-tab `icon` and `count`.
