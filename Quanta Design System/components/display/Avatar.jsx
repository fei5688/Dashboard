import React from 'react';

const sizes = { xs: 22, sm: 28, md: 36, lg: 44 };
const palette = ['var(--chart-1)','var(--chart-2)','var(--chart-3)','var(--chart-4)','var(--chart-5)','var(--chart-6)'];

function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase() || '?';
}
function hashIndex(str, mod) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % mod;
}

/**
 * Round avatar — image, or color-derived initials fallback.
 */
export function Avatar({ name = '', src, size = 'md', style, ...rest }) {
  const dim = sizes[size] || sizes.md;
  const bg = palette[hashIndex(name || 'x', palette.length)];
  const fontSize = Math.round(dim * 0.4);

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, borderRadius: '50%', overflow: 'hidden',
        background: src ? 'var(--surface-sunken)' : bg, color: 'var(--gray-0)',
        fontSize, fontWeight: 'var(--weight-semibold)', flex: 'none',
        boxShadow: 'inset 0 0 0 1px rgba(11,14,15,0.08)', userSelect: 'none', ...style,
      }}
      {...rest}
    >
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : initials(name)}
    </span>
  );
}
