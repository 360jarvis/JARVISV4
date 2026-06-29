export default function PublicHomePage() {
  return (
    <main className="jarvixx-page" style={{ padding: '48px' }}>
      <section className="lux-card" style={{ maxWidth: 1120, margin: '0 auto', padding: '48px' }}>
        <p className="kicker">Jarvixx 2.0</p>
        <h1 style={{ fontSize: 56, lineHeight: 1, margin: '16px 0' }}>
          Luxury AI command center for cleaning businesses.
        </h1>
        <p style={{ maxWidth: 720, color: 'var(--jarvixx-muted)', fontSize: 18 }}>
          Jarvixx brings bookings, customers, dispatch, workforce, payments, quality, growth, reports, and AI into one clean multi-tenant SaaS platform.
        </p>
        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <a className="lux-button" href="/signup">Start Free Trial</a>
          <a className="lux-button secondary" href="/login">Login</a>
        </div>
      </section>
    </main>
  );
}
