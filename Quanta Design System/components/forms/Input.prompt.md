Single-line text field with optional label, hint, error, leading icon, and prefix/suffix affixes.

```jsx
<Input label="Workspace name" placeholder="Acme analytics" />
<Input iconLeft="search" placeholder="Search metrics…" size="sm" />
<Input label="Budget" prefix="$" suffix="/mo" />
<Input label="Email" error="That address is already in use." />
```

Focus shows the cobalt ring; `error` turns the border red and replaces `hint`. Sizes `sm | md | lg`. Lucide icon needs `lucide.createIcons()`.
