// AreaChart — lightweight multi-series area/line chart for the dashboard.
// Pure SVG, no deps. Exports to window for the UI kit's babel scripts.
function AreaChart({ series, labels, height = 240, yTicks = 4, format = (v) => v }) {
  const pad = { top: 12, right: 8, bottom: 26, left: 44 };
  const [w, setW] = React.useState(720);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const ro = new ResizeObserver(() => setW(el.clientWidth));
    ro.observe(el); setW(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const innerW = Math.max(10, w - pad.left - pad.right);
  const innerH = height - pad.top - pad.bottom;
  const all = series.flatMap((s) => s.data);
  const max = Math.max(...all) * 1.1;
  const min = 0;
  const n = labels.length;
  const x = (i) => pad.left + (i / (n - 1 || 1)) * innerW;
  const y = (v) => pad.top + innerH - ((v - min) / (max - min || 1)) * innerH;

  const linePath = (d) => d.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
  const areaPath = (d) => `${linePath(d)} L${x(n - 1)},${pad.top + innerH} L${pad.left},${pad.top + innerH} Z`;

  const ticks = Array.from({ length: yTicks + 1 }, (_, i) => (max / yTicks) * i);

  return (
    <div ref={ref} style={{ width: '100%' }}>
      <svg width={w} height={height} style={{ display: 'block', overflow: 'visible' }}>
        <defs>
          {series.map((s, si) => (
            <linearGradient key={si} id={`qac-${si}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity="0.16" />
              <stop offset="100%" stopColor={s.color} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
        {ticks.map((t, i) => (
          <g key={i}>
            <line x1={pad.left} x2={w - pad.right} y1={y(t)} y2={y(t)} stroke="var(--border-subtle)" strokeWidth="1" />
            <text x={pad.left - 10} y={y(t) + 3} textAnchor="end" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-tertiary)">{format(Math.round(t))}</text>
          </g>
        ))}
        {series.map((s, si) => (
          <g key={si}>
            <path d={areaPath(s.data)} fill={`url(#qac-${si})`} />
            <path d={linePath(s.data)} fill="none" stroke={s.color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          </g>
        ))}
        {labels.map((l, i) => (
          (i % Math.ceil(n / 7) === 0 || i === n - 1) && (
            <text key={i} x={x(i)} y={height - 8} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-tertiary)">{l}</text>
          )
        ))}
      </svg>
    </div>
  );
}

window.AreaChart = AreaChart;
