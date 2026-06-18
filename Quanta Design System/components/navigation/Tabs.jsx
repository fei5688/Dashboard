import React from 'react';

/**
 * Underline tab bar. Controlled (value/onChange) or uncontrolled.
 */
export function Tabs({ tabs = [], value, defaultValue, onChange, style, ...rest }) {
  const items = tabs.map((t) => (typeof t === 'string' ? { value: t, label: t } : t));
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value ?? internal;

  const select = (v) => { if (value === undefined) setInternal(v); onChange && onChange(v); };

  return (
    <div
      role="tablist"
      style={{ display: 'flex', gap: 2, borderBottom: '1px solid var(--border-default)', ...style }}
      {...rest}
    >
      {items.map((t) => {
        const on = t.value === active;
        return (
          <button
            key={t.value}
            role="tab"
            aria-selected={on}
            onClick={() => select(t.value)}
            style={{
              position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '0 12px', height: 36, border: 'none', background: 'transparent',
              fontFamily: 'var(--font-sans)', fontSize: 13,
              fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)',
              color: on ? 'var(--text-primary)' : 'var(--text-tertiary)',
              cursor: 'pointer', transition: 'color var(--dur-fast)',
            }}
          >
            {t.icon && <i data-lucide={t.icon} style={{ width: 15, height: 15 }} />}
            {t.label}
            {t.count != null && (
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 11,
                color: on ? 'var(--text-secondary)' : 'var(--text-disabled)',
              }}>{t.count}</span>
            )}
            <span style={{
              position: 'absolute', left: 0, right: 0, bottom: -1, height: 2,
              background: on ? 'var(--accent)' : 'transparent',
              borderRadius: '2px 2px 0 0', transition: 'background var(--dur-fast)',
            }} />
          </button>
        );
      })}
    </div>
  );
}
