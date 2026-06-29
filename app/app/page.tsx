'use client';

import { useEffect, useState } from 'react';
import AppShell from '../../components/AppShell';

const kpis = [
  { label: "Today's Bookings", value: '18', detail: 'vs yesterday', trend: '+12%', icon: '▣' },
  { label: 'Open Revenue', value: '$8,547.00', detail: 'vs yesterday', trend: '+8.3%', icon: '$' },
  { label: 'Quality Score', value: '4.8', detail: 'vs last 7 days', trend: '+0.2', icon: '☆' },
  { label: 'Growth Pipeline', value: '37', detail: 'vs last 7 days', trend: '+15%', icon: '↗' },
  { label: 'Active Customers', value: '642', detail: 'vs last 30 days', trend: '+9%', icon: '👥' },
  { label: 'Outstanding Balance', value: '$2,314.50', detail: 'vs last 30 days', trend: '-4%', icon: '▤' }
];

const priorities = [
  { label: 'Unassigned bookings', detail: 'Bookings awaiting assignment', count: 6, tone: '#fee2e2', icon: '□' },
  { label: 'Provider running late', detail: 'Providers behind schedule', count: 3, tone: '#fef3c7', icon: '△' },
  { label: 'Payment issues', detail: 'Declined or failed payments', count: 4, tone: '#fee2e2', icon: '$' },
  { label: 'Quality alerts', detail: 'Re-clean or inspection required', count: 2, tone: '#dcfce7', icon: '◇' },
  { label: 'New leads', detail: 'Leads awaiting contact', count: 7, tone: '#fef3c7', icon: '◌' }
];

const board = [
  { label: 'Arrivals', value: '12', detail: 'On the way' },
  { label: 'On the way', value: '23', detail: 'Providers traveling' },
  { label: 'Running late', value: '4', detail: 'Require attention' },
  { label: 'Clocked in', value: '54', detail: 'In progress' },
  { label: 'Completed', value: '18', detail: 'Today' },
  { label: 'Needs review', value: '6', detail: 'Quality checks' }
];

const quickActions = [
  { label: 'New Booking', href: '/app/bookings/new', icon: '▣' },
  { label: 'New Customer', href: '/app/customers', icon: '＋' },
  { label: 'Create Quote', href: '/app/quotes', icon: '□' },
  { label: 'Open Dispatch', href: '/app/dispatch', icon: '◇' },
  { label: 'Payments', href: '/app/payments', icon: '▤' },
  { label: 'Reports', href: '/app/reports', icon: '▥' }
];

const activity = [
  { label: 'New booking created', detail: 'Residential Deep Clean · $296.00', time: '2m ago', color: '#fef3c7' },
  { label: 'Payment received', detail: '$180.00 from Jennifer Martinez', time: '8m ago', color: '#dcfce7' },
  { label: 'Provider checked in', detail: 'Maria S. at 123 Maple St', time: '15m ago', color: '#fee2e2' },
  { label: 'Quality inspection completed', detail: 'Passed · 456 Oak Dr', time: '28m ago', color: '#dcfce7' }
];

function greetingForTimezone(timeZone: string) {
  const hourText = new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: false, timeZone }).format(new Date());
  const hour = Number(hourText);
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function todayForTimezone(timeZone: string) {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone }).format(new Date());
}

export default function AppDashboardPage() {
  const [greeting, setGreeting] = useState('Welcome back');
  const [today, setToday] = useState('Today');

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Chicago';
    setGreeting(greetingForTimezone(timeZone));
    setToday(todayForTimezone(timeZone));
  }, []);

  return (
    <AppShell title="Dashboard" subtitle="Executive operating home for every Jarvixx tenant.">
      <div style={{ display: 'grid', gap: 22 }}>
        <section style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 18, alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: 30, letterSpacing: '-0.04em' }}>{greeting}, Camili Pro 👋</h1>
            <p style={{ margin: '8px 0 0', color: 'var(--jarvixx-muted)', fontSize: 15 }}>Welcome back to your Executive Command Center.</p>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <div style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 999, padding: '10px 14px', background: '#fff', fontSize: 13 }}>Today: {today}</div>
            <a href="/app/bookings/new" className="lux-button">+ New</a>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(6, minmax(0, 1fr))', gap: 14 }}>
          {kpis.map((kpi) => (
            <article key={kpi.label} className="lux-card" style={{ padding: 18, minHeight: 126, display: 'grid', alignContent: 'space-between', boxShadow: '0 16px 46px rgba(23,19,13,0.045)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <div style={{ color: 'var(--jarvixx-muted)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>{kpi.label}</div>
                <div style={{ width: 38, height: 38, borderRadius: 13, display: 'grid', placeItems: 'center', background: 'var(--jarvixx-gold-soft)', color: 'var(--jarvixx-ink)', fontWeight: 800 }}>{kpi.icon}</div>
              </div>
              <div>
                <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.04em' }}>{kpi.value}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, marginTop: 10, fontSize: 12, color: 'var(--jarvixx-muted)' }}>
                  <span>{kpi.detail}</span><strong style={{ color: kpi.trend.startsWith('-') ? '#dc2626' : '#16a34a' }}>{kpi.trend}</strong>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr 0.72fr', gap: 18, alignItems: 'stretch' }}>
          <article className="lux-card" style={{ padding: 18 }}>
            <div style={{ marginBottom: 14 }}><h2 style={{ margin: 0, fontSize: 16 }}>Today’s Operations Priorities</h2><p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 12 }}>Fast access to urgent operational work.</p></div>
            <div style={{ display: 'grid', gap: 9 }}>
              {priorities.map((item) => (
                <a key={item.label} href="/app/dispatch" style={{ display: 'grid', gridTemplateColumns: '34px 1fr auto', gap: 12, alignItems: 'center', padding: 12, border: '1px solid var(--jarvixx-border)', borderRadius: 14, color: 'inherit', background: '#fff' }}>
                  <span style={{ width: 32, height: 32, borderRadius: 12, display: 'grid', placeItems: 'center', background: item.tone, fontWeight: 800 }}>{item.icon}</span>
                  <span><strong style={{ display: 'block', fontSize: 13 }}>{item.label}</strong><span style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{item.detail}</span></span>
                  <span style={{ border: '1px solid var(--jarvixx-border)', background: 'var(--jarvixx-gold-soft)', borderRadius: 999, minWidth: 28, height: 24, display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 12 }}>{item.count}</span>
                </a>
              ))}
            </div>
            <a href="/app/dispatch" style={{ marginTop: 12, display: 'flex', justifyContent: 'center', padding: 12, border: '1px solid var(--jarvixx-border)', borderRadius: 14, color: 'var(--jarvixx-ink)', fontWeight: 800 }}>View All Priorities ›</a>
          </article>

          <article style={{ borderRadius: 22, padding: 18, background: 'linear-gradient(180deg, #090806 0%, #15130f 100%)', color: '#fff', boxShadow: '0 24px 70px rgba(0,0,0,0.18)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 15 }}><div><h2 style={{ margin: 0, fontSize: 16 }}>Today’s Operations Board</h2><p style={{ margin: '6px 0 0', color: '#b9ae98', fontSize: 12 }}>Live command view</p></div><span style={{ border: '1px solid rgba(34,197,94,0.35)', color: '#86efac', borderRadius: 999, padding: '6px 10px', height: 28, fontSize: 12 }}>● Live</span></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 8 }}>
              {board.map((item) => (
                <div key={item.label} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 13, padding: 14 }}>
                  <div style={{ color: '#b9ae98', fontSize: 12 }}>{item.label}</div><div style={{ marginTop: 10, fontSize: 28, color: 'var(--jarvixx-gold)', fontWeight: 800 }}>{item.value}</div><div style={{ marginTop: 6, color: '#e8deca', fontSize: 12 }}>{item.detail}</div>
                </div>
              ))}
            </div>
            <a href="/app/dispatch" style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', padding: 13, borderRadius: 12, background: 'linear-gradient(135deg, #d8bd7f, #a9822b)', color: '#111', fontWeight: 800 }}>Open Dispatch Command Center <span>›</span></a>
          </article>

          <article className="lux-card" style={{ padding: 18 }}>
            <h2 style={{ margin: 0, fontSize: 16 }}>Quick Actions</h2><p style={{ margin: '6px 0 14px', color: 'var(--jarvixx-muted)', fontSize: 12 }}>Common command center shortcuts.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
              {quickActions.map((action) => (
                <a key={action.label} href={action.href} style={{ minHeight: 86, border: '1px solid var(--jarvixx-border)', borderRadius: 15, background: '#fff', color: 'var(--jarvixx-ink)', display: 'grid', placeItems: 'center', textAlign: 'center', fontWeight: 800, fontSize: 12 }}><span style={{ fontSize: 23 }}>{action.icon}</span><span>{action.label}</span></a>
              ))}
            </div>
            <button style={{ width: '100%', marginTop: 12, border: '1px solid var(--jarvixx-border)', borderRadius: 14, background: '#fbfaf7', padding: 12, fontWeight: 800 }}>Customize Actions</button>
          </article>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '0.88fr 0.88fr 1fr', gap: 18, alignItems: 'stretch' }}>
          <article className="lux-card" style={{ padding: 18 }}>
            <h2 style={{ margin: 0, fontSize: 16 }}>Executive Activity Feed</h2>
            <div style={{ display: 'grid', gap: 9, marginTop: 14 }}>
              {activity.map((item) => (
                <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '34px 1fr auto', gap: 10, padding: 11, border: '1px solid var(--jarvixx-border)', borderRadius: 14, alignItems: 'center' }}><span style={{ width: 31, height: 31, borderRadius: 12, display: 'grid', placeItems: 'center', background: item.color, fontWeight: 800 }}>JX</span><span><strong style={{ display: 'block', fontSize: 13 }}>{item.label}</strong><span style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{item.detail}</span></span><span style={{ color: 'var(--jarvixx-muted)', fontSize: 11 }}>{item.time}</span></div>
              ))}
            </div>
            <a href="/app/reports" style={{ marginTop: 12, display: 'flex', justifyContent: 'center', padding: 12, border: '1px solid var(--jarvixx-border)', borderRadius: 14, color: 'var(--jarvixx-ink)', fontWeight: 800 }}>View All Activity ›</a>
          </article>

          <article className="lux-card" style={{ padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><div><h2 style={{ margin: 0, fontSize: 16 }}>Revenue Snapshot</h2><p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 12 }}>This week</p></div><strong style={{ color: '#16a34a' }}>+18.6%</strong></div>
            <div style={{ fontSize: 28, fontWeight: 800, marginTop: 16 }}>$12,547.00</div>
            <div style={{ marginTop: 20, height: 150, borderRadius: 16, background: 'linear-gradient(180deg, rgba(216,189,127,0.24), rgba(216,189,127,0.04))', border: '1px solid var(--jarvixx-border)', display: 'grid', placeItems: 'center', color: 'var(--jarvixx-muted)', fontWeight: 700 }}>Revenue chart placeholder</div>
          </article>

          <article className="lux-card" style={{ padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><div><h2 style={{ margin: 0, fontSize: 16 }}>Growth Snapshot</h2><p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 12 }}>This month</p></div><strong>37 Leads</strong></div>
            <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, alignItems: 'center', marginTop: 18 }}>
              <div style={{ width: 150, height: 150, borderRadius: '50%', background: 'conic-gradient(#5abf90 0 49%, #80a7e8 49% 73%, #8b6ee8 73% 89%, #d8bd7f 89% 100%)', display: 'grid', placeItems: 'center' }}><div style={{ width: 92, height: 92, borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center', textAlign: 'center', fontWeight: 800 }}>Total<br />37</div></div>
              <div style={{ display: 'grid', gap: 10, fontSize: 13 }}>{['New Leads 18', 'Contacted 9', 'Quoted 6', 'Booked 4'].map((row) => <div key={row} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--jarvixx-border)', paddingBottom: 8 }}><span>{row}</span><strong>●</strong></div>)}</div>
            </div>
          </article>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr)) auto', gap: 14, alignItems: 'center', background: 'linear-gradient(180deg, #090806, #15130f)', color: '#fff', borderRadius: 22, padding: 18, boxShadow: '0 24px 70px rgba(0,0,0,0.18)' }}>
          {['System Status All Systems Operational', 'Database Connected', 'Payments All Systems Go', 'Services Active', 'Last Backup 2h ago'].map((item) => <div key={item} style={{ color: '#e8deca', fontSize: 13 }}>● {item}</div>)}
          <a href="/app/settings" style={{ border: '1px solid var(--jarvixx-gold)', color: '#fff', borderRadius: 12, padding: '12px 18px', fontWeight: 800 }}>View System Health</a>
        </section>
      </div>
    </AppShell>
  );
}
