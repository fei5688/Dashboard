import React from 'react';
import { Sparkline } from '../data/Sparkline.jsx';

/**
 * KPI metric tile: label, big tabular value, signed delta, optional sparkline.
 */
export function StatCard({
  label, value, delta, deltaLabel, spark, sparkColor, icon, style, ...rest
}) {
  const dir = delta == null ? 0 : delta > 0 ? 1 : delta < 0 ? -1 : 0;
  const deltaColor = dir > 0 ? 'var(--pos)' : dir < 0 ? 'var(--neg)' : 'var(--text-tertiary)';
  const arrow = dir > 0 ? '▲' : dir < 0 ? '▼' : '–';
  const deltaText = typeof delta === 'number'
    ? `${arrow} ${Math.abs(delta)}%` : delta;

  return (
    <div
      style={{
        display: 'flex', flexDirection: 'column', gap: 10,
        background: 'var(--surface-card)', border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)', padding: 18, boxShadow: 'var(--shadow-xs)', ...style,
      }}
      {...rest}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <span style={{
          fontSize: 11, fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-caps)',
          textTransform: 'uppercase', color: 'var(--text-tertiary)',
        }}>{label}</span>
        {icon && <i data-lucide={icon} style={{ width: 16, height: 16, color: 'var(--text-tertiary)' }} />}
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums',
          fontSize: 28, fontWeight: 'var(--weight-semibold)', letterSpacing: '-0.01em',
          color: 'var(--text-primary)', lineHeight: 1,
        }}>{value}</span>
        {spark && <Sparkline data={spark} color={sparkColor || (dir < 0 ? 'var(--neg)' : 'var(--accent)')} width={88} height={30} />}
      </div>

      {(delta != null || deltaLabel) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12 }}>
          <span style={{ color: deltaColor, fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', fontWeight: 'var(--weight-medium)' }}>{deltaText}</span>
          {deltaLabel && <span style={{ color: 'var(--text-tertiary)' }}>{deltaLabel}</span>}
        </div>
      )}
    </div>
  );
}
