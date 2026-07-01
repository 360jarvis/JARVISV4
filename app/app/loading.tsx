import AppShell from '../../components/AppShell';

export default function AppDashboardLoading() {
  return (
    <AppShell title="Dashboard" subtitle="Loading tenant operations, revenue, workforce, quality, growth, and alerts.">
      <section className="lux-card" style={{ padding: 24 }}>
        <p className="kicker" style={{ marginTop: 0 }}>Loading</p>
        <h2 style={{ margin: '8px 0' }}>Preparing command center</h2>
        <p style={{ color: 'var(--jarvixx-muted)', margin: 0 }}>Tenant-scoped dashboard data is loading.</p>
      </section>
    </AppShell>
  );
}
