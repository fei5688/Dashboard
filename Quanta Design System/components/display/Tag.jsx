import React from 'react';

/**
 * Removable filter/keyword tag. Square-ish, hairline.
 */
export function Tag({ children, onRemove, icon, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        height: 24, padding: onRemove ? '0 5px 0 9px' : '0 9px', fontSize: 12,
        color: 'var(--text-secondary)', background: 'var(--surface-card)',
        border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)',
        whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {icon && <i data-lucide={icon} style={{ width: 13, height: 13, color: 'var(--text-tertiary)' }} />}
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          aria-label="Remove"
          style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 16, height: 16, padding: 0, border: 'none', background: 'transparent',
            color: 'var(--text-tertiary)', cursor: 'pointer', borderRadius: 'var(--radius-xs)',
          }}
        >
          <i data-lucide="x" style={{ width: 12, height: 12 }} />
        </button>
      )}
    </span>
  );
}
