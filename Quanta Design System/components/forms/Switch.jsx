import React from 'react';

const dims = {
  sm: { w: 30, h: 18, knob: 14 },
  md: { w: 36, h: 21, knob: 17 },
};

/**
 * On/off switch.
 */
export function Switch({
  checked = false, onChange, disabled = false, size = 'md', label, style, id, ...rest
}) {
  const d = dims[size] || dims.md;
  const swId = id || React.useId();

  return (
    <label
      htmlFor={swId}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 9,
        cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
        userSelect: 'none', ...style,
      }}
    >
      <span style={{
        position: 'relative', width: d.w, height: d.h, flex: 'none',
        background: checked ? 'var(--accent)' : 'var(--gray-300)',
        borderRadius: 'var(--radius-full)',
        transition: 'background var(--dur-base) var(--ease-standard)',
      }}>
        <input
          id={swId} type="checkbox" checked={checked} disabled={disabled} onChange={onChange}
          style={{ position: 'absolute', opacity: 0, inset: 0, margin: 0, cursor: 'inherit' }}
          {...rest}
        />
        <span style={{
          position: 'absolute', top: (d.h - d.knob) / 2,
          left: checked ? d.w - d.knob - 2 : 2, width: d.knob, height: d.knob,
          background: 'var(--gray-0)', borderRadius: '50%', boxShadow: 'var(--shadow-sm)',
          transition: 'left var(--dur-base) var(--ease-out)',
        }} />
      </span>
      {label && <span style={{ fontSize: 13, color: 'var(--text-primary)' }}>{label}</span>}
    </label>
  );
}
