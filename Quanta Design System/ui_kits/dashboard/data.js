// Mock analytics data for the Quanta dashboard UI kit.
const QDATA = {
  rangeLabel: 'Last 30 days',
  kpis: [
    { label: 'Sessions', value: '486,204', delta: 12.4, spark: [30,32,31,35,38,36,41,44,48], icon: 'mouse-pointer-click' },
    { label: 'Active users', value: '128,409', delta: 3.2, spark: [20,22,21,24,23,26,28,27,30], icon: 'users' },
    { label: 'Avg. session', value: '4m 12s', delta: -1.8, spark: [9,8.5,8.8,8.2,8,7.6,7.8,7.4,7.1], icon: 'timer' },
    { label: 'Conversion', value: '3.94%', delta: 0.6, spark: [3.1,3.2,3.3,3.2,3.5,3.6,3.7,3.8,3.9], icon: 'target' },
  ],
  chartLabels: ['1','3','5','7','9','11','13','15','17','19','21','23','25','27','29'],
  chartSeries: [
    { name: 'This period', color: 'var(--chart-1)', data: [12,18,15,22,20,28,26,33,30,38,35,42,40,47,52] },
    { name: 'Previous', color: 'var(--gray-300)', data: [14,15,16,17,18,19,21,22,24,25,27,28,30,31,33] },
  ],
  sources: [
    { name: 'Organic search', value: 41, color: 'var(--chart-1)' },
    { name: 'Direct', value: 24, color: 'var(--chart-2)' },
    { name: 'Referral', value: 17, color: 'var(--chart-3)' },
    { name: 'Social', value: 11, color: 'var(--chart-4)' },
    { name: 'Email', value: 7, color: 'var(--chart-5)' },
  ],
  pages: [
    { page: '/dashboard', views: 84210, users: 41200, conv: '4.8%', trend: [20,24,22,28,30,34,38], status: 'up' },
    { page: '/pricing', views: 61044, users: 38900, conv: '6.1%', trend: [40,38,36,33,30,28,25], status: 'down' },
    { page: '/blog/retention-playbook', views: 42190, users: 29100, conv: '2.3%', trend: [10,12,15,14,18,22,26], status: 'up' },
    { page: '/integrations', views: 33870, users: 21050, conv: '3.4%', trend: [18,19,20,19,21,22,24], status: 'up' },
    { page: '/changelog', views: 19821, users: 14300, conv: '1.1%', trend: [9,9,8,9,8,9,10], status: 'flat' },
    { page: '/docs/api', views: 15402, users: 9870, conv: '0.9%', trend: [12,11,10,9,8,8,7], status: 'down' },
  ],
  events: [
    { name: 'page_view', count: 1284907, users: 128409, change: 8.2 },
    { name: 'signup_started', count: 48210, users: 48210, change: 14.1 },
    { name: 'checkout_completed', count: 12044, users: 11890, change: -2.3 },
    { name: 'report_exported', count: 8932, users: 4120, change: 22.0 },
    { name: 'dashboard_shared', count: 3401, users: 2880, change: 5.6 },
  ],
};
window.QDATA = QDATA;
