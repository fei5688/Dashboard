// Topbar — page title, breadcrumb, search, date range, actions.
function Topbar({ title, range, onRange }) {
  const { Button, IconButton, Select } = window.QuantaDesignSystem_e41436;
  return (
    <header style={{
      height: 'var(--topbar-h)', flex: 'none', display: 'flex', alignItems: 'center', gap: 12,
      padding: '0 20px', borderBottom: '1px solid var(--border-default)', background: 'var(--surface-card)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flex: 1, minWidth: 0 }}>
        <h1 style={{ margin: 0, fontSize: 18, fontWeight: 'var(--weight-semibold)', letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>{title}</h1>
        <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>· Northwind</span>
      </div>

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <i data-lucide="search" style={{ position: 'absolute', left: 9, width: 15, height: 15, color: 'var(--text-tertiary)', pointerEvents: 'none' }}></i>
        <input placeholder="Search metrics, events…" style={{
          height: 32, width: 220, padding: '0 10px 0 30px', fontFamily: 'var(--font-sans)', fontSize: 12,
          color: 'var(--text-primary)', background: 'var(--surface-sunken)', border: '1px solid transparent',
          borderRadius: 'var(--radius-md)', outline: 'none',
        }} />
      </div>

      <Select size="sm" value={range} onChange={(e) => onRange(e.target.value)}
        options={['Last 7 days', 'Last 30 days', 'Last quarter', 'Year to date']} style={{ width: 150 }} />
      <IconButton icon="bell" label="Notifications" variant="outline" />
      <Button size="sm" variant="secondary" iconLeft="share-2">Share</Button>
      <Button size="sm" variant="primary" iconLeft="plus">New report</Button>
    </header>
  );
}
window.Topbar = Topbar;
