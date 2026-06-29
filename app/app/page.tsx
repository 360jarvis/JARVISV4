import AppShell from '../../components/AppShell';

export default function AppDashboardPage() {
  return (
    <AppShell title="Dashboard" subtitle="The clean Jarvixx operating home for every tenant.">
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 16 }}>
        <article className="lux-card" style={{ padding: 20 }}>
          <p className="kicker">Foundation</p>
          <h2>Today</h2>
          <p style={{ color: 'var(--jarvixx-muted)' }}>Bookings, alerts, and operational priorities will live here.</p>
        </article>
        <article className="lux-card" style={{ padding: 20 }}>
          <p className="kicker">Foundation</p>
          <h2>Revenue</h2>
          <p style={{ color: 'var(--jarvixx-muted)' }}>Financial snapshots will connect after payment architecture approval.</p>
        </article>
        <article className="lux-card" style={{ padding: 20 }}>
          <p className="kicker">Foundation</p>
          <h2>Quality</h2>
          <p style={{ color: 'var(--jarvixx-muted)' }}>Complaints, reviews, inspections, and re-cleans will surface here.</p>
        </article>
        <article className="lux-card" style={{ padding: 20 }}>
          <p className="kicker">Foundation</p>
          <h2>Growth</h2>
          <p style={{ color: 'var(--jarvixx-muted)' }}>Leads, campaigns, lost customers, and abandoned carts will surface here.</p>
        </article>
      </section>
    </AppShell>
  );
}
