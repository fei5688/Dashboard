// OverviewScreen — KPI row, sessions chart, sources breakdown, top pages.
function OverviewScreen() {
  const { StatCard, Card, Tabs, Table, Sparkline, Badge, Button } = window.QuantaDesignSystem_e41436;
  const D = window.QDATA;
  const [metric, setMetric] = React.useState('sessions');
  const tones = { up: 'success', down: 'danger', flat: 'neutral' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {D.kpis.map((k) => (
          <StatCard key={k.label} label={k.label} value={k.value} delta={k.delta}
            deltaLabel="vs prev." spark={k.spark} icon={k.icon} />
        ))}
      </div>

      {/* Main chart */}
      <Card padding="lg" style={{ paddingBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14, gap: 12 }}>
          <div>
            <div className="q-overline">Sessions over time</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 30, fontWeight: 'var(--weight-semibold)', letterSpacing: '-0.01em', color: 'var(--text-primary)', marginTop: 4 }}>486,204</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 8 }}>
              <Legend color="var(--chart-1)" label="This period" />
              <Legend color="var(--gray-300)" label="Previous" />
            </div>
          </div>
          <div style={{ width: 280 }}>
            <Tabs value={metric} onChange={setMetric} tabs={[
              { value: 'sessions', label: 'Sessions' },
              { value: 'users', label: 'Users' },
              { value: 'events', label: 'Events' },
            ]} />
          </div>
        </div>
        <AreaChart series={D.chartSeries} labels={D.chartLabels} height={250}
          format={(v) => v >= 1000 ? (v / 1000) + 'k' : v} />
      </Card>

      {/* Lower row */}
      <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 16, alignItems: 'start' }}>
        <Card title="Traffic sources" subtitle={D.rangeLabel}
          actions={<Button size="sm" variant="ghost" iconRight="arrow-right">Details</Button>}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
            {D.sources.map((s) => (
              <div key={s.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 5 }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', fontWeight: 'var(--weight-medium)' }}>{s.value}%</span>
                </div>
                <div style={{ height: 6, borderRadius: 'var(--radius-full)', background: 'var(--surface-sunken)', overflow: 'hidden' }}>
                  <div style={{ width: s.value + '%', height: '100%', background: s.color, borderRadius: 'var(--radius-full)' }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Top pages" subtitle="By views" padding="sm"
          actions={<Button size="sm" variant="ghost" iconRight="arrow-right">View all</Button>}>
          <div style={{ marginTop: 8 }}>
            <Table dense
              columns={[
                { key: 'page', header: 'Page', width: '34%' },
                { key: 'views', header: 'Views', align: 'right', render: (v) => v.toLocaleString() },
                { key: 'conv', header: 'Conv.', align: 'right' },
                { key: 'trend', header: 'Trend', align: 'right', width: '110px', render: (v) => (
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Sparkline data={v} width={84} height={22} color={v[0] > v[v.length - 1] ? 'var(--neg)' : 'var(--accent)'} />
                  </div>) },
                { key: 'status', header: '', width: '70px', render: (v) => <Badge tone={tones[v]} dot>{v}</Badge> },
              ]}
              data={D.pages}
              rowKey={(r) => r.page}
              onRowClick={() => {}}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-secondary)' }}>
      <span style={{ width: 10, height: 3, borderRadius: 2, background: color }} />{label}
    </span>
  );
}
window.OverviewScreen = OverviewScreen;
