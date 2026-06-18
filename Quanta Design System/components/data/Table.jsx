import React from 'react';

/**
 * Config-driven data table. Columns describe header, alignment, width,
 * and an optional cell renderer. Numeric columns get tabular figures.
 */
export function Table({
  columns = [], data = [], rowKey, onRowClick, dense = false,
  sortBy, sortDir = 'asc', onSort, style, ...rest
}) {
  const rowH = dense ? 36 : 44;
  const cellPad = dense ? '0 12px' : '0 14px';
  const [hoverRow, setHoverRow] = React.useState(null);

  const alignToFlex = { left: 'flex-start', center: 'center', right: 'flex-end' };

  return (
    <div style={{
      border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)',
      overflow: 'hidden', background: 'var(--surface-card)', ...style,
    }} {...rest}>
      <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
        <colgroup>
          {columns.map((c) => <col key={c.key} style={{ width: c.width }} />)}
        </colgroup>
        <thead>
          <tr style={{ background: 'var(--surface-sunken)' }}>
            {columns.map((c) => {
              const sortable = c.sortable && onSort;
              const isSorted = sortBy === c.key;
              return (
                <th
                  key={c.key}
                  onClick={sortable ? () => onSort(c.key) : undefined}
                  style={{
                    padding: cellPad, height: 38, textAlign: c.align || 'left',
                    borderBottom: '1px solid var(--border-default)',
                    cursor: sortable ? 'pointer' : 'default', userSelect: 'none',
                    fontSize: 11, fontWeight: 'var(--weight-semibold)', letterSpacing: '0.04em',
                    textTransform: 'uppercase', color: 'var(--text-tertiary)', whiteSpace: 'nowrap',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, justifyContent: alignToFlex[c.align || 'left'], width: '100%' }}>
                    {c.header}
                    {isSorted && <i data-lucide={sortDir === 'asc' ? 'arrow-up' : 'arrow-down'} style={{ width: 12, height: 12 }} />}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => {
            const key = rowKey ? rowKey(row, i) : i;
            const hovered = hoverRow === key;
            return (
              <tr
                key={key}
                onClick={onRowClick ? () => onRowClick(row, i) : undefined}
                onMouseEnter={() => setHoverRow(key)}
                onMouseLeave={() => setHoverRow(null)}
                style={{
                  height: rowH, background: hovered ? 'var(--surface-hover)' : 'transparent',
                  cursor: onRowClick ? 'pointer' : 'default',
                  transition: 'background var(--dur-fast)',
                }}
              >
                {columns.map((c) => {
                  const raw = row[c.key];
                  const content = c.render ? c.render(raw, row, i) : raw;
                  const numeric = c.numeric || c.align === 'right';
                  return (
                    <td
                      key={c.key}
                      style={{
                        padding: cellPad, textAlign: c.align || 'left',
                        borderBottom: i === data.length - 1 ? 'none' : '1px solid var(--border-subtle)',
                        fontSize: 13, color: 'var(--text-primary)',
                        fontFamily: numeric ? 'var(--font-mono)' : 'var(--font-sans)',
                        fontVariantNumeric: numeric ? 'tabular-nums' : 'normal',
                        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                      }}
                    >
                      {content}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
