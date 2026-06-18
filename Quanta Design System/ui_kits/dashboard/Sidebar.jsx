// Sidebar — workspace switcher, primary nav, user footer.
function Sidebar({ active, onNavigate }) {
  const { Avatar, Badge } = window.QuantaDesignSystem_e41436;
  const nav = [
    { key: 'overview', label: 'Overview', icon: 'layout-dashboard' },
    { key: 'explore', label: 'Explore', icon: 'table-2' },
    { key: 'events', label: 'Events', icon: 'activity' },
    { key: 'funnels', label: 'Funnels', icon: 'filter' },
    { key: 'cohorts', label: 'Cohorts', icon: 'users-round' },
    { key: 'reports', label: 'Reports', icon: 'file-bar-chart' },
  ];
  return (
    <aside style={{
      width: 'var(--sidebar-w)', flex: 'none', height: '100%',
      background: 'var(--surface-card)', borderRight: '1px solid var(--border-default)',
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Workspace switcher */}
      <div style={{ padding: '14px 14px 10px' }}>
        <button style={{
          display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: '7px 8px',
          background: 'transparent', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
        }}>
          <img src="../../assets/logo-mark.svg" width="26" height="26" alt="Quanta" />
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.2, flex: 1, minWidth: 0 }}>
            <span style={{ fontSize: 13, fontWeight: 'var(--weight-semibold)', color: 'var(--text-primary)' }}>Northwind</span>
            <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>Pro workspace</span>
          </span>
          <i data-lucide="chevrons-up-down" style={{ width: 15, height: 15, color: 'var(--text-tertiary)' }}></i>
        </button>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '6px 10px', flex: 1 }}>
        <div className="q-overline" style={{ padding: '6px 8px 4px' }}>Analyze</div>
        {nav.map((n) => {
          const on = active === n.key;
          return (
            <button key={n.key} onClick={() => onNavigate(n.key)} style={{
              display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px', height: 34,
              background: on ? 'var(--accent-subtle)' : 'transparent', border: 'none',
              borderRadius: 'var(--radius-md)', cursor: 'pointer', textAlign: 'left',
              color: on ? 'var(--accent-active)' : 'var(--text-secondary)',
              fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-medium)', fontSize: 13,
              fontFamily: 'var(--font-sans)', transition: 'background var(--dur-fast)',
            }}>
              <i data-lucide={n.icon} style={{ width: 16, height: 16 }}></i>
              {n.label}
            </button>
          );
        })}
      </nav>

      <div style={{ padding: 10, borderTop: '1px solid var(--border-subtle)' }}>
        <button onClick={() => onNavigate('settings')} style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px', height: 34, width: '100%',
          background: active === 'settings' ? 'var(--surface-hover)' : 'transparent', border: 'none', borderRadius: 'var(--radius-md)',
          cursor: 'pointer', color: 'var(--text-secondary)', fontSize: 13, fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)',
        }}>
          <i data-lucide="settings" style={{ width: 16, height: 16 }}></i> Settings
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '8px', marginTop: 2 }}>
          <Avatar name="Mara Voss" size="sm" />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2, flex: 1, minWidth: 0 }}>
            <span style={{ fontSize: 12, fontWeight: 'var(--weight-medium)', color: 'var(--text-primary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Mara Voss</span>
            <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>mara@northwind.co</span>
          </span>
          <i data-lucide="log-out" style={{ width: 15, height: 15, color: 'var(--text-tertiary)' }}></i>
        </div>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
