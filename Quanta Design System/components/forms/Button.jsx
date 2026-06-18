import React from 'react';

const sizes = {
  sm: { height: 28, padding: '0 10px', fontSize: 12, gap: 6, icon: 14 },
  md: { height: 34, padding: '0 14px', fontSize: 13, gap: 7, icon: 16 },
  lg: { height: 42, padding: '0 20px', fontSize: 14, gap: 8, icon: 18 },
};

const variants = {
  primary: {
    background: 'var(--accent)', color: 'var(--on-accent)', border: '1px solid var(--accent)',
    '--hover-bg': 'var(--accent-hover)', '--active-bg': 'var(--accent-active)',
  },
  secondary: {
    background: 'var(--surface-card)', color: 'var(--text-primary)', border: '1px solid var(--border-strong)',
    '--hover-bg': 'var(--surface-hover)', '--active-bg': 'var(--surface-active)',
  },
  ghost: {
    background: 'transparent', color: 'var(--text-secondary)', border: '1px solid transparent',
    '--hover-bg': 'var(--surface-hover)', '--active-bg': 'var(--surface-active)',
  },
  danger: {
    background: 'var(--danger)', color: 'var(--on-accent)', border: '1px solid var(--danger)',
    '--hover-bg': 'var(--red-600)', '--active-bg': 'var(--red-600)',
  },
};

/**
 * Quanta primary action control.
 */
export function Button({
  children, variant = 'primary', size = 'md', iconLeft, iconRight,
  disabled = false, loading = false, fullWidth = false, style, ...rest
}) {
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const bg = disabled ? undefined
    : active ? v['--active-bg']
    : hover ? v['--hover-bg']
    : v.background;

  return (
    <button
      disabled={disabled || loading}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined,
        alignItems: 'center', justifyContent: 'center', gap: s.gap,
        height: s.height, padding: s.padding, fontSize: s.fontSize,
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
        letterSpacing: '0.005em', lineHeight: 1, whiteSpace: 'nowrap',
        background: bg, color: v.color, border: v.border,
        borderRadius: 'var(--radius-md)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1, transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast)',
        transform: active && !disabled ? 'translateY(0.5px)' : 'none',
        outline: 'none', userSelect: 'none', ...style,
      }}
      {...rest}
    >
      {loading && <Spinner size={s.icon} />}
      {!loading && iconLeft && <Icon name={iconLeft} size={s.icon} />}
      {children}
      {!loading && iconRight && <Icon name={iconRight} size={s.icon} />}
    </button>
  );
}

function Icon({ name, size }) {
  return <i data-lucide={name} style={{ width: size, height: size, display: 'inline-block' }} />;
}

function Spinner({ size }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: '50%',
      border: '2px solid currentColor', borderTopColor: 'transparent',
      display: 'inline-block', animation: 'q-spin 0.7s linear infinite',
    }} />
  );
}
