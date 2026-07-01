import type { DashboardAlert, DashboardData, DashboardKpi, DashboardMetric } from '../lib/dashboard';

const card = {
  background: '#fff',
  border: '1px solid #eadfce',
  borderRadius: 14,
  boxShadow: '0 10px 30px rgba(22, 18, 11, 0.04)'
};

const iconTones = ['#dbe7ff', '#dff3e5', '#fff0cb', '#eee0ff', '#dbe8ff', '#ffe1e1'];

function findKpi(data: DashboardData, label: string) {
  return data.topKpis.find((item) => item.label.toLowerCase() === label.toLowerCase());
}

function findMetric(metrics: DashboardMetric[], label: string) {
  return metrics.find((item) => item.label.toLowerCase() === label.toLowerCase());
}

function metricValue(data: DashboardData, label: string, fallback = '0') {
  return findKpi(data, label)?.value || fallback;
}

function metricDetail(data: DashboardData, label: string, fallback = 'From connected data') {
  return findKpi(data, label)?.detail || fallback;
}

function displayMoney(value?: string) {
  return value && value !== 'Restricted' ? value : '$0.00';
}

function KpiCard(props: { label: string; value: string; detail: string; delta: string; href: string; icon: string; tone: string }) {
  return (
    <a href={props.href} style={{ ...card, minHeight: 96, padding: 14, display: 'grid', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center' }}>
        <div>
          <div style={{ color: '#5d564b', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 6 }}>{props.label}</div>
          <strong style={{ display: 'block', fontSize: 22, lineHeight: 1 }}>{props.value}</strong>
        </div>
        <span style={{ width: 36, height: 36, borderRadius: 10, background: props.tone, display: 'grid', placeItems: 'center', fontSize: 18 }}>{props.icon}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6d655a', fontSize: 12 }}>
        <span>{props.detail}</span>
        <strong style={{ color: props.delta.startsWith('-') ? '#e03838' : '#12883f' }}>{props.delta}</strong>
      </div>
    </a>
  );
}

function PriorityRow(props: { title: string; body: string; count: string; icon: string; tone: string; href: string }) {
  return (
    <a href={props.href} style={{ display: 'grid', gridTemplateColumns: '34px 1fr auto', gap: 10, alignItems: 'center', padding: '8px 10px', border: '1px solid #eadfce', borderRadius: 10, color: '#17130d' }}>
      <span style={{ width: 26, height: 26, borderRadius: 999, background: props.tone, display: 'grid', placeItems: 'center', fontSize: 13 }}>{props.icon}</span>
      <span>
        <strong style={{ display: 'block', fontSize: 13 }}>{props.title}</strong>
        <span style={{ color: '#6d655a', fontSize: 12 }}>{props.body}</span>
      </span>
      <span style={{ minWidth: 24, height: 24, borderRadius: 999, background: '#fff7ed', border: '1px solid #efd6ab', display: 'grid', placeItems: 'center', color: '#b06f00', fontSize: 12 }}>{props.count}</span>
    </a>
  );
}

function OperationStat(props: { label: string; value: string; body: string }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.055)', borderRadius: 9, padding: 12 }}>
      <div style={{ color: '#d6d0c4', fontSize: 13 }}>{props.label}</div>
      <strong style={{ display: 'block', margin: '6px 0 5px', color: '#d8bd7f', fontSize: 23 }}>{props.value}</strong>
      <span style={{ color: '#f1eadc', fontSize: 12 }}>{props.body}</span>
    </div>
  );
}

function QuickAction(props: { label: string; href: string; icon: string }) {
  return (
    <a href={props.href} style={{ minHeight: 82, display: 'grid', placeItems: 'center', gap: 6, border: '1px solid #eadfce', borderRadius: 12, color: '#17130d', textAlign: 'center', fontWeight: 700, fontSize: 12 }}>
      <span style={{ fontSize: 21, lineHeight: 1 }}>{props.icon}</span>
      {props.label}
    </a>
  );
}

function ActivityRow(props: { title: string; body: string; time: string; icon: string; tone: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '34px 1fr auto', gap: 10, alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #eadfce' }}>
      <span style={{ width: 30, height: 30, borderRadius: 9, background: props.tone, display: 'grid', placeItems: 'center' }}>{props.icon}</span>
      <span>
        <strong style={{ display: 'block', fontSize: 13 }}>{props.title}</strong>
        <span style={{ color: '#6d655a', fontSize: 12 }}>{props.body}</span>
      </span>
      <span style={{ color: '#6d655a', fontSize: 12 }}>{props.time}</span>
    </div>
  );
}

function MiniLineChart() {
  return (
    <div style={{ height: 112, display: 'grid', gridTemplateRows: '1fr auto', gap: 5, marginTop: 6 }}>
      <svg viewBox="0 0 520 130" role="img" aria-label="Revenue trend" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="revenueFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#d8bd7f" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#d8bd7f" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <path d="M20 104 C80 76 105 61 150 64 C205 65 223 48 268 43 C320 36 345 44 392 31 C438 22 470 29 500 18 L500 126 L20 126 Z" fill="url(#revenueFill)" />
        <path d="M20 104 C80 76 105 61 150 64 C205 65 223 48 268 43 C320 36 345 44 392 31 C438 22 470 29 500 18" fill="none" stroke="#c99c35" strokeWidth="3" />
        <path d="M20 112 C80 89 116 82 156 86 C206 91 225 69 270 70 C320 69 346 58 392 57 C438 72 466 53 500 49" fill="none" stroke="#d7a747" strokeDasharray="5 5" strokeWidth="2" />
        {[20, 100, 180, 260, 340, 420, 500].map((x) => <circle key={x} cx={x} cy={x === 20 ? 104 : x === 100 ? 68 : x === 180 ? 61 : x === 260 ? 44 : x === 340 ? 42 : x === 420 ? 27 : 18} r="4" fill="#c99c35" />)}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-around', color: '#6d655a', fontSize: 12 }}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => <span key={day}>{day}</span>)}
      </div>
    </div>
  );
}

function GrowthDonut(props: { total: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '132px 1fr', gap: 14, alignItems: 'center', minHeight: 148 }}>
      <div style={{ position: 'relative', width: 124, height: 124, borderRadius: '50%', background: 'conic-gradient(#64c7a1 0 49%, #7ea5e8 49% 73%, #8a66d6 73% 89%, #c59a35 89% 100%)' }}>
        <div style={{ position: 'absolute', inset: 25, borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
          <span style={{ color: '#6d655a', fontSize: 12 }}>Total<br /><strong style={{ color: '#17130d', fontSize: 23 }}>{props.total}</strong><br />Leads</span>
        </div>
      </div>
      <div style={{ display: 'grid', gap: 8, fontSize: 12 }}>
        {[
          ['#64c7a1', 'New Leads', '48.6%'],
          ['#7ea5e8', 'Contacted', '24.3%'],
          ['#8a66d6', 'Quoted', '16.2%'],
          ['#c59a35', 'Booked', '10.8%']
        ].map(([color, label, pct], index) => (
          <div key={label} style={{ display: 'grid', gridTemplateColumns: '12px 1fr auto auto', gap: 10, alignItems: 'center' }}>
            <span style={{ width: 9, height: 9, borderRadius: 999, background: color }} />
            <span>{label}</span>
            <strong>{index === 0 ? props.total : '0'}</strong>
            <span style={{ color: '#6d655a' }}>{pct}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function firstAction(alerts: DashboardAlert[], fallbackHref: string) {
  return alerts[0]?.action.href || fallbackHref;
}

export default function DashboardCommandCenter(props: { data: DashboardData }) {
  const data = props.data;
  const todayBookings = findKpi(data, "Today's bookings");
  const openRevenue = findKpi(data, 'Open balances');
  const growth = findKpi(data, 'New leads');
  const activeCustomers = data.sourceStates.find((source) => source.key === 'customers')?.records || 0;
  const failedPaymentValue = findKpi(data, 'Failed/declined payments')?.value || '0';
  const failedPayments = failedPaymentValue === 'Restricted' ? '0' : failedPaymentValue;
  const qualityIssues = findKpi(data, 'Customer issues')?.value || '0';
  const unassigned = findKpi(data, 'Unassigned bookings')?.value || '0';
  const lateJobs = findKpi(data, 'Jobs running late')?.value || '0';
  const staffClock = findKpi(data, 'Staff clocked in / not')?.value || '0/0';
  const revenueToday = displayMoney(findKpi(data, 'Revenue today')?.value);
  const activeQuotes = findKpi(data, 'Active quotes')?.value || '0';
  const paidTodayValue = findMetric(data.revenueMetrics, 'Paid today')?.value || revenueToday;
  const paidToday = paidTodayValue === 'Restricted' ? '$0.00' : paidTodayValue;
  const connectedCount = data.sourceStates.filter((source) => source.connected).length;

  const kpis = [
    { label: "Today's Bookings", value: todayBookings?.value || '0', detail: 'vs yesterday', delta: todayBookings?.empty ? '0%' : '+', href: todayBookings?.href || '/app/bookings?date=today', icon: '□', tone: iconTones[0] },
    { label: 'Open Revenue', value: displayMoney(openRevenue?.value), detail: 'vs yesterday', delta: openRevenue?.empty ? '0%' : '+', href: openRevenue?.href || '/app/financial?filter=open-balances', icon: '$', tone: iconTones[1] },
    { label: 'Quality Score', value: qualityIssues === '0' ? 'Clear' : qualityIssues, detail: 'customer issues', delta: qualityIssues === '0' ? '+0' : 'Review', href: '/app/quality?filter=customer-issues', icon: '☆', tone: iconTones[2] },
    { label: 'Growth Pipeline', value: activeQuotes, detail: 'active quotes', delta: growth?.empty ? '0%' : '+', href: '/app/growth?filter=new-leads', icon: '↗', tone: iconTones[3] },
    { label: 'Active Customers', value: String(activeCustomers), detail: 'connected records', delta: activeCustomers ? '+' : '0%', href: '/app/customers', icon: '♙', tone: iconTones[4] },
    { label: 'Outstanding Balance', value: displayMoney(openRevenue?.value), detail: 'open balances', delta: failedPayments === '0' ? '0%' : `-${failedPayments}`, href: '/app/financial?filter=open-balances', icon: '▣', tone: iconTones[5] }
  ];

  const priorityRows = [
    { title: 'Unassigned bookings', body: 'Bookings awaiting assignment', count: unassigned, icon: '□', tone: '#ffe1e1', href: '/app/dispatch?filter=unassigned' },
    { title: 'Provider running late', body: 'Providers behind schedule', count: lateJobs, icon: '♙', tone: '#fff1cf', href: '/app/dispatch?filter=late' },
    { title: 'Payment issues', body: 'Declined or failed payments', count: failedPayments, icon: '▣', tone: '#ffe1e1', href: '/app/payments?filter=failed' },
    { title: 'Quality alerts', body: 'Re-clean or inspection required', count: qualityIssues, icon: '♣', tone: '#dff3e5', href: '/app/quality?filter=customer-issues' },
    { title: 'New leads', body: 'Leads awaiting contact', count: growth?.value || '0', icon: '♟', tone: '#fff1cf', href: '/app/growth?filter=new-leads' }
  ];

  return (
    <main style={{ minHeight: '100vh', background: '#fbfaf7', padding: 16, color: '#12100c' }}>
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 540px 320px', gap: 16, alignItems: 'start', marginBottom: 12 }}>
        <div style={{ paddingTop: 20 }}>
          <h1 style={{ margin: '0 0 7px', fontSize: 28, lineHeight: 1.05 }}>Good afternoon, Camili Pro <span style={{ fontSize: 22 }}>👋</span></h1>
          <p style={{ margin: 0, color: '#6d655a', fontSize: 15 }}>Welcome back to your Executive Command Center.</p>
        </div>
        <div style={{ ...card, height: 42, display: 'flex', alignItems: 'center', gap: 12, padding: '0 16px', color: '#6d655a', alignSelf: 'start' }}>
          <span>⌕</span>
          <span style={{ flex: 1, fontSize: 14 }}>Search customers, bookings, quotes, reports...</span>
          <span style={{ background: '#f4f1ec', borderRadius: 8, padding: '4px 8px', fontSize: 12 }}>⌘K</span>
        </div>
        <div style={{ display: 'grid', gap: 10, justifyItems: 'end' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <span style={{ position: 'relative', fontSize: 20 }}>♙<b style={{ position: 'absolute', top: -12, right: -10, width: 18, height: 18, borderRadius: 999, background: '#d8bd7f', display: 'grid', placeItems: 'center', fontSize: 10 }}>0</b></span>
            <span style={{ fontSize: 20 }}>▱</span>
            <span style={{ width: 38, height: 38, borderRadius: 999, background: '#090806', color: '#d8bd7f', display: 'grid', placeItems: 'center', fontWeight: 700 }}>CP</span>
            <span><strong style={{ display: 'block' }}>Camili Pro</strong><span style={{ color: '#6d655a', fontSize: 12 }}>Administrator</span></span>
            <span>⌄</span>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <a href="/app/bookings/new" style={{ borderRadius: 10, background: 'linear-gradient(180deg,#d8bd7f,#b58b32)', color: '#17130d', minWidth: 132, height: 44, display: 'grid', placeItems: 'center', fontWeight: 700 }}>＋ New⌄</a>
            <span style={{ ...card, height: 36, padding: '0 14px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>□ Today: {data.dateLabel}</span>
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: 10, marginBottom: 10 }}>
        {kpis.map((item, index) => <KpiCard key={item.label} {...item} tone={item.tone || iconTones[index]} />)}
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.1fr 1.05fr', gap: 10, marginBottom: 10 }}>
        <article style={{ ...card, padding: 12 }}>
          <h2 style={{ margin: '0 0 8px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Today's Operations Priorities</h2>
          <div style={{ display: 'grid', gap: 0 }}>
            {priorityRows.map((row) => <PriorityRow key={row.title} {...row} />)}
          </div>
          <a href={firstAction(data.alerts, '/app/dispatch')} style={{ marginTop: 8, height: 32, border: '1px solid #eadfce', borderRadius: 9, display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13 }}>View All Priorities ›</a>
        </article>

        <article style={{ borderRadius: 14, padding: 12, background: 'linear-gradient(135deg,#060606,#171717)', color: '#fff', boxShadow: '0 16px 38px rgba(0,0,0,0.18)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 9 }}>
            <h2 style={{ margin: 0, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Today's Operations Board</h2>
            <span style={{ border: '1px solid rgba(216,189,127,0.45)', borderRadius: 999, padding: '3px 9px', color: '#dff3e5', fontSize: 12 }}>● Live</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5 }}>
            <OperationStat label="Arrivals" value={todayBookings?.value || '0'} body="On the way" />
            <OperationStat label="On the way" value={staffClock.split('/')[0] || '0'} body="Providers traveling" />
            <OperationStat label="Running late" value={lateJobs} body="Require attention" />
            <OperationStat label="Clocked in" value={staffClock.split('/')[0] || '0'} body="In progress" />
            <OperationStat label="Completed" value={paidToday === '$0.00' ? '0' : paidToday} body="Today" />
            <OperationStat label="Needs review" value={qualityIssues} body="Quality checks" />
          </div>
          <a href="/app/dispatch" style={{ marginTop: 8, height: 32, borderRadius: 9, background: 'linear-gradient(180deg,#d8bd7f,#a87e2d)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 13 }}>Open Dispatch Command Center ›</a>
        </article>

        <article style={{ ...card, padding: 12 }}>
          <h2 style={{ margin: '0 0 8px', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Quick Actions</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            <QuickAction label="New Booking" href="/app/bookings/new" icon="□" />
            <QuickAction label="New Customer" href="/app/customers?action=new" icon="♙+" />
            <QuickAction label="Create Quote" href="/app/quotes?action=new" icon="▱+" />
            <QuickAction label="Open Dispatch" href="/app/dispatch" icon="◇" />
            <QuickAction label="Payments" href="/app/payments" icon="▭" />
            <QuickAction label="Reports" href="/app/reports" icon="∥" />
          </div>
          <a href="/app/settings?section=actions" style={{ marginTop: 9, height: 32, border: '1px solid #eadfce', borderRadius: 9, display: 'grid', placeItems: 'center', fontWeight: 700, background: '#fbfaf7', fontSize: 13 }}>↔ Customize Actions</a>
        </article>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr 1.08fr', gap: 10, marginBottom: 12 }}>
        <article style={{ ...card, padding: 12 }}>
          <h2 style={{ margin: '0 0 8px', fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Executive Activity Feed</h2>
          {data.alerts.length ? data.alerts.slice(0, 4).map((alert, index) => (
            <ActivityRow key={alert.id} title={alert.title} body={`${alert.module} - ${alert.related}`} time="Now" icon={index === 0 ? '□' : index === 1 ? '$' : index === 2 ? '⌖' : '♣'} tone={index === 0 ? '#f4ead2' : index === 1 ? '#dff3e5' : index === 2 ? '#ffe1e1' : '#dff3e5'} />
          )) : (
            <>
              <ActivityRow title="No urgent activity" body={data.connectionStatus.message} time="Now" icon="✓" tone="#dff3e5" />
              <ActivityRow title="Dashboard ready" body="Connect live modules to populate activity." time="Now" icon="□" tone="#f4ead2" />
            </>
          )}
          <a href="/app/reports" style={{ marginTop: 8, height: 32, border: '1px solid #eadfce', borderRadius: 9, display: 'grid', placeItems: 'center', fontWeight: 700 }}>View All Activity ›</a>
        </article>

        <article style={{ ...card, padding: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h2 style={{ margin: 0, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Revenue Snapshot</h2>
            <span style={{ border: '1px solid #eadfce', borderRadius: 8, padding: '6px 10px', fontSize: 12 }}>This Week⌄</span>
          </div>
          <div style={{ marginTop: 11 }}>
            <strong style={{ fontSize: 27 }}>{revenueToday}</strong>
            <span style={{ float: 'right', color: '#12883f', fontSize: 13, fontWeight: 700 }}>+0% <span style={{ color: '#6d655a', fontWeight: 400 }}>vs last week</span></span>
            <div style={{ color: '#6d655a', fontSize: 13, marginTop: 2 }}>Total Revenue</div>
          </div>
          <MiniLineChart />
        </article>

        <article style={{ ...card, padding: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 9 }}>
            <h2 style={{ margin: 0, fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Growth Snapshot</h2>
            <span style={{ border: '1px solid #eadfce', borderRadius: 8, padding: '6px 10px', fontSize: 12 }}>This Month⌄</span>
          </div>
          <GrowthDonut total={growth?.value || '0'} />
          <a href="/app/growth" style={{ marginTop: 8, height: 32, border: '1px solid #eadfce', borderRadius: 9, display: 'grid', placeItems: 'center', fontWeight: 700 }}>Open Growth Command Center ›</a>
        </article>
      </section>

      <section style={{ borderRadius: 16, background: 'linear-gradient(135deg,#080808,#171717)', color: '#fff', padding: 12, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr auto', gap: 12, alignItems: 'center' }}>
        {[
          ['●', 'System Status', data.tenantReady ? 'All Systems Operational' : 'Tenant Context Needed'],
          ['▰', 'Database', data.connectionStatus.state === 'connected' ? 'Connected' : data.connectionStatus.state.replace('-', ' ')],
          ['●', 'Payments', failedPayments === '0' ? 'All Systems Go' : `${failedPayments} Issues`],
          ['✣', 'AI Services', 'Active'],
          ['☁', 'Last Backup', 'Live status pending']
        ].map(([icon, label, body]) => (
          <div key={label} style={{ display: 'flex', gap: 12, alignItems: 'center', borderRight: label === 'Last Backup' ? '0' : '1px solid rgba(255,255,255,0.12)' }}>
            <span style={{ color: label === 'AI Services' ? '#d8bd7f' : '#35c75a', fontSize: 22 }}>{icon}</span>
            <span><strong style={{ display: 'block', fontSize: 12 }}>{label}</strong><span style={{ color: '#e5dccb', fontSize: 12 }}>{body}</span></span>
          </div>
        ))}
        <a href="/api/health" style={{ border: '1px solid #d8bd7f', borderRadius: 9, minWidth: 210, height: 38, display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700 }}>View System Health</a>
      </section>
    </main>
  );
}
