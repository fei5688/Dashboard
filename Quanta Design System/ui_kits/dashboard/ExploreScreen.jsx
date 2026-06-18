// ExploreScreen — filter bar + sortable, selectable data table.
function ExploreScreen() {
  const { Table, Tag, Badge, Button, Sparkline, Checkbox, Input, Select } = window.QuantaDesignSystem_e41436;
  const D = window.QDATA;
  const tones = { up: 'success', down: 'danger', flat: 'neutral' };
  const [filters, setFilters] = React.useState([
    { id: 'region', label: 'Region: EMEA' },
    { id: 'device', label: 'Device: Desktop' },
  ]);
  const [sortBy, setSortBy] = React.useState('views');
  const [dir, setDir] = React.useState('desc');
  const [selected, setSelected] = React.useState({});

  const onSort = (k) => { if (k === sortBy) setDir((d) => d === 'asc' ? 'desc' : 'asc'); else { setSortBy(k); setDir('desc'); } };
  const rows = [...D.pages].sort((a, b) => (dir === 'asc' ? 1 : -1) * (a[sortBy] > b[sortBy] ? 1 : -1));
  const allOn = rows.every((r) => selected[r.page]);
  const someOn = !allOn && rows.some((r) => selected[r.page]);
  const toggleAll = () => { const v = !allOn; const next = {}; rows.forEach((r) => next[r.page] = v); setSelected(next); };
  const selCount = Object.values(selected).filter(Boolean).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Filter bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <Select size="sm" value="Pages" options={['Pages', 'Events', 'Users', 'Sources']} style={{ width: 130 }} />
        <div style={{ width: 1, height: 22, background: 'var(--border-default)' }} />
        {filters.map((f) => (
          <Tag key={f.id} icon="filter" onRemove={() => setFilters((s) => s.filter((x) => x.id !== f.id))}>{f.label}</Tag>
        ))}
        <Button size="sm" variant="ghost" iconLeft="plus"
          onClick={() => setFilters((s) => s.some((x) => x.id === 'new') ? s : [...s, { id: 'new', label: 'Source: Organic' }])}>
          Add filter
        </Button>
        <div style={{ flex: 1 }} />
        <Input size="sm" iconLeft="search" placeholder="Filter rows…" style={{ width: 180 }} />
        <Button size="sm" variant="secondary" iconLeft="download">Export</Button>
      </div>

      {/* Selection toolbar */}
      {selCount > 0 && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '8px 14px',
          background: 'var(--accent-subtle)', border: '1px solid var(--accent-border)', borderRadius: 'var(--radius-md)',
        }}>
          <span style={{ fontSize: 13, fontWeight: 'var(--weight-medium)', color: 'var(--accent-active)' }}>{selCount} selected</span>
          <Button size="sm" variant="ghost" iconLeft="bookmark">Save segment</Button>
          <Button size="sm" variant="ghost" iconLeft="bar-chart-2">Compare</Button>
        </div>
      )}

      <Table
        sortBy={sortBy} sortDir={dir} onSort={onSort}
        columns={[
          { key: '_sel', header: <Checkbox checked={allOn} indeterminate={someOn} onChange={toggleAll} />, width: '44px',
            render: (_, row) => <Checkbox checked={!!selected[row.page]} onChange={() => setSelected((s) => ({ ...s, [row.page]: !s[row.page] }))} /> },
          { key: 'page', header: 'Page', width: '28%' },
          { key: 'views', header: 'Views', align: 'right', sortable: true, render: (v) => v.toLocaleString() },
          { key: 'users', header: 'Users', align: 'right', sortable: true, render: (v) => v.toLocaleString() },
          { key: 'conv', header: 'Conv. rate', align: 'right', sortable: true },
          { key: 'trend', header: '7-day trend', align: 'right', width: '130px', render: (v) => (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Sparkline data={v} width={100} height={26} color={v[0] > v[v.length - 1] ? 'var(--neg)' : 'var(--accent)'} />
            </div>) },
          { key: 'status', header: 'Status', width: '90px', render: (v) => <Badge tone={tones[v]} dot>{v}</Badge> },
        ]}
        data={rows}
        rowKey={(r) => r.page}
      />
    </div>
  );
}
window.ExploreScreen = ExploreScreen;
