// EventsScreen — event stream stats + volume table.
function EventsScreen() {
  const { StatCard, Card, Table, Badge, Button, IconButton } = window.QuantaDesignSystem_e41436;
  const D = window.QDATA;
  const maxCount = Math.max(...D.events.map((e) => e.count));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        <StatCard label="Events tracked" value="1.36M" delta={8.2} deltaLabel="vs prev." spark={[40,42,44,43,47,52,58]} icon="activity" />
        <StatCard label="Unique events" value="42" delta={2} deltaLabel="new this mo." spark={[36,37,38,38,40,41,42]} icon="list" />
        <StatCard label="Avg / user" value="10.6" delta={-1.1} deltaLabel="vs prev." spark={[12,11.5,11,11,10.8,10.7,10.6]} icon="gauge" />
      </div>

      <Card title="Event volume" subtitle={D.rangeLabel} padding="sm"
        actions={<><IconButton icon="search" label="Search" /><Button size="sm" variant="secondary" iconLeft="plus">Define event</Button></>}>
        <div style={{ marginTop: 8 }}>
          <Table
            columns={[
              { key: 'name', header: 'Event', width: '34%', render: (v) => (
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text-primary)' }}>{v}</span>) },
              { key: 'count', header: 'Volume', align: 'right', width: '24%', render: (v) => (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'flex-end' }}>
                  <div style={{ width: 80, height: 6, background: 'var(--surface-sunken)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                    <div style={{ width: (v / maxCount * 100) + '%', height: '100%', background: 'var(--chart-1)', borderRadius: 'var(--radius-full)' }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontVariantNumeric: 'tabular-nums', minWidth: 64, textAlign: 'right' }}>{v.toLocaleString()}</span>
                </div>) },
              { key: 'users', header: 'Users', align: 'right', render: (v) => v.toLocaleString() },
              { key: 'change', header: 'Change', align: 'right', render: (v) => (
                <Badge tone={v >= 0 ? 'success' : 'danger'}>{v >= 0 ? '+' : ''}{v}%</Badge>) },
            ]}
            data={D.events}
            rowKey={(r) => r.name}
            onRowClick={() => {}}
          />
        </div>
      </Card>
    </div>
  );
}
window.EventsScreen = EventsScreen;
