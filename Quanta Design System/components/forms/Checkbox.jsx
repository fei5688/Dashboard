import React from 'react';

/**
 * Checkbox with label. Controlled via `checked` / `onChange`.
 */
export function Checkbox({
  label, checked = false, indeterminate = false, disabled = false,
  onChange, style, id, ...rest
}) {
  const cbId = id || React.useId();
  const on = checked || indeterminate;

  return (
    <label
      htmlFor={cbId}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        userSelect: 'none', ...style,
      }}
    >
      <span style={{
        position: 'relative', width: 16, height: 16, flex: 'none',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: on ? 'var(--accent)' : 'var(--surface-card)',
        border: `1px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
        borderRadius: 'var(--radius-xs)',
        transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      }}>
        <input
          id={cbId} type="checkbox" checked={checked} disabled={disabled} onChange={onChange}
          style={{ position: 'absolute', opacity: 0, inset: 0, margin: 0, cursor: 'inherit' }}
          {...rest}
        />
        {indeterminate
          ? <span style={{ width: 8, height: 2, background: 'var(--on-accent)', borderRadius: 1 }} />
          : on && <i data-lucide="check" style={{ width: 12, height: 12, color: 'var(--on-accent)', strokeWidth: 3 }} />}
      </span>
      {label && <span style={{ fontSize: 13, color: 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
