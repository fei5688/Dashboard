import React from 'react';

const tones = {
  neutral: { bg: 'var(--surface-sunken)', fg: 'var(--text-secondary)', dot: 'var(--gray-400)' },
  accent:  { bg: 'var(--accent-subtle)', fg: 'var(--accent-active)', dot: 'var(--accent)' },
  success: { bg: 'var(--success-subtle)', fg: 'var(--green-600)', dot: 'var(--success)' },
  warning: { bg: 'var(--warning-subtle)', fg: 'var(--amber-600)', dot: 'var(--warning)' },
  danger:  { bg: 'var(--danger-subtle)', fg: 'var(--red-600)', dot: 'var(--danger)' },
};

/**
 * Compact status label. Optional leading status dot.
 */
export function Badge({ children, tone = 'neutral', dot = false, style, ...rest }) {
  const t = tones[tone] || tones.neutral;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        height: 20, padding: '0 8px', fontSize: 11, fontWeight: 'var(--weight-medium)',
        lineHeight: 1, color: t.fg, background: t.bg, borderRadius: 'var(--radius-full)',
        whiteSpace: 'nowrap', ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.dot, flex: 'none' }} />}
      {children}
    </span>
  );
}
