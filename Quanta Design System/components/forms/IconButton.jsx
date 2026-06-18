import React from 'react';

const sizes = { sm: 28, md: 34, lg: 42 };
const iconSizes = { sm: 15, md: 17, lg: 19 };

/**
 * Square icon-only button.
 */
export function IconButton({
  icon, size = 'md', variant = 'ghost', active = false,
  disabled = false, label, style, ...rest
}) {
  const dim = sizes[size] || sizes.md;
  const [hover, setHover] = React.useState(false);

  const bg = active ? 'var(--surface-active)'
    : hover && !disabled ? 'var(--surface-hover)' : 'transparent';
  const border = variant === 'outline' ? '1px solid var(--border-default)' : '1px solid transparent';
  const color = active ? 'var(--text-primary)' : 'var(--text-secondary)';

  return (
    <button
      aria-label={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, padding: 0,
        background: bg, border, borderRadius: 'var(--radius-md)',
        color, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1,
        transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast)',
        outline: 'none', ...style,
      }}
      {...rest}
    >
      <i data-lucide={icon} style={{ width: iconSizes[size], height: iconSizes[size] }} />
    </button>
  );
}
