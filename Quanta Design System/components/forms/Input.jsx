import React from 'react';

const sizes = {
  sm: { height: 30, fontSize: 12, padding: '0 9px' },
  md: { height: 36, fontSize: 13, padding: '0 11px' },
  lg: { height: 42, fontSize: 14, padding: '0 13px' },
};

/**
 * Text input with optional label, leading icon, and error state.
 */
export function Input({
  label, hint, error, size = 'md', iconLeft, prefix, suffix,
  disabled = false, style, id, ...rest
}) {
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();

  const borderColor = error ? 'var(--danger)'
    : focus ? 'var(--border-focus)' : 'var(--border-default)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontSize: 12, fontWeight: 'var(--weight-medium)', color: 'var(--text-secondary)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 7,
        height: s.height, padding: s.padding,
        background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
        border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
        boxShadow: focus && !error ? 'var(--ring)' : 'none',
        transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
        cursor: disabled ? 'not-allowed' : 'text',
      }}>
        {iconLeft && <i data-lucide={iconLeft} style={{ width: 16, height: 16, color: 'var(--text-tertiary)', flex: 'none' }} />}
        {prefix && <span style={{ fontSize: s.fontSize, color: 'var(--text-tertiary)' }}>{prefix}</span>}
        <input
          id={inputId}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-sans)', fontSize: s.fontSize, color: 'var(--text-primary)',
            cursor: disabled ? 'not-allowed' : 'text',
          }}
          {...rest}
        />
        {suffix && <span style={{ fontSize: s.fontSize, color: 'var(--text-tertiary)' }}>{suffix}</span>}
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 11, color: error ? 'var(--danger)' : 'var(--text-tertiary)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
