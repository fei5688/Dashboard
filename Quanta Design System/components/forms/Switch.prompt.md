Binary on/off toggle for settings and instant-apply preferences (use Checkbox inside forms that submit).

```jsx
<Switch checked={live} onChange={e => setLive(e.target.checked)} label="Live updates" />
<Switch size="sm" checked disabled />
```

Cobalt when on, grey when off. Sizes `sm | md`.
