import React from 'react';

const pads = { sm: 14, md: 18, lg: 24 };

/**
 * Surface container — hairline border, optional header.
 */
export function Card({
  children, title, subtitle, actions, padding = 'md', interactive = false, style, ...rest
}) {
  const p = pads[padding] ?? pads.md;
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base)',
        borderColor: hover ? 'var(--border-strong)' : 'var(--border-default)',
        cursor: interactive ? 'pointer' : 'default',
        overflow: 'hidden', ...style,
      }}
      {...rest}
    >
      {(title || actions) && (
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          gap: 12, padding: `${p}px ${p}px 0`,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {title && <div style={{ fontSize: 14, fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>{title}</div>}
            {subtitle && <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{subtitle}</div>}
          </div>
          {actions && <div style={{ display: 'flex', gap: 6, flex: 'none' }}>{actions}</div>}
        </div>
      )}
      <div style={{ padding: p }}>{children}</div>
    </div>
  );
}
