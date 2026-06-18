Bordered tag for active filters and keywords. Pass `onRemove` to make it dismissible.

```jsx
<Tag icon="filter">Region: EMEA</Tag>
<Tag onRemove={() => drop('mobile')}>Platform: Mobile</Tag>
```

Hairline border, square `radius-sm` to distinguish from the pill `Badge`. Needs `lucide.createIcons()`.
