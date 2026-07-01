'use client';

export default function AppDashboardError(props: { error: Error; reset: () => void }) {
  void props.error;

  return (
    <main style={{ minHeight: '100vh', background: 'var(--jarvixx-ivory)', padding: 28 }}>
      <section className="lux-card" style={{ maxWidth: 760, margin: '0 auto', padding: 24 }}>
        <p className="kicker" style={{ marginTop: 0 }}>Dashboard Error</p>
        <h1 style={{ margin: '8px 0', fontSize: 30 }}>Command center could not load</h1>
        <p style={{ color: 'var(--jarvixx-muted)' }}>
          The dashboard stopped before it could verify tenant-scoped data. No cross-tenant data was rendered.
        </p>
        <p style={{ color: 'var(--jarvixx-muted)', fontSize: 13 }}>Try again after the tenant data connection is available.</p>
        <button className="lux-button" type="button" onClick={props.reset}>
          Retry dashboard
        </button>
      </section>
    </main>
  );
}
