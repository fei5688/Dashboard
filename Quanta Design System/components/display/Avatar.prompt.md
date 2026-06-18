Round user avatar. Shows the image if `src` is set, else color-hashed initials from `name`.

```jsx
<Avatar name="Mara Voss" src="/team/mara.jpg" />
<Avatar name="Devon Park" size="sm" />
```

Sizes `xs | sm | md | lg`. Fallback color is derived deterministically from the name using the chart palette.
