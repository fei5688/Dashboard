import React from 'react';

const sizes = {
  sm: { height: 30, fontSize: 12, padding: '0 30px 0 9px' },
  md: { height: 36, fontSize: 13, padding: '0 32px 0 11px' },
  lg: { height: 42, fontSize: 14, padding: '0 36px 0 13px' },
};

/**
 * Native select styled to match Quanta inputs.
 */
export function Select({
  label, hint, error, size = 'md', options = [], placeholder,
  disabled = false, style, id, value, ...rest
}) {
  const s = sizes[size] || sizes.md;
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  const borderColor = error ? 'var(--danger)'
    : focus ? 'var(--border-focus)' : 'var(--border-default)';

  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5, ...style }}>
      {label && (
        <label htmlFor={selectId} style={{
          fontSize: 12, fontWeight: 'var(--weight-medium)', color: 'var(--text-secondary)',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative', display: 'flex' }}>
        <select
          id={selectId}
          disabled={disabled}
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            appearance: 'none', WebkitAppearance: 'none', width: '100%',
            height: s.height, padding: s.padding, fontSize: s.fontSize,
            fontFamily: 'var(--font-sans)', color: value === '' && placeholder ? 'var(--text-tertiary)' : 'var(--text-primary)',
            background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
            border: `1px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
            boxShadow: focus && !error ? 'var(--ring)' : 'none',
            transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
            cursor: disabled ? 'not-allowed' : 'pointer', outline: 'none',
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {norm.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <i data-lucide="chevron-down" style={{
          position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
          width: 15, height: 15, color: 'var(--text-tertiary)', pointerEvents: 'none',
        }} />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 11, color: error ? 'var(--danger)' : 'var(--text-tertiary)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
