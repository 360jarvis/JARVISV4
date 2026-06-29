export default function LegacyReportsPage() {
  return (
    <main className="jarvixx-page" style={{ padding: 48 }}>
      <section className="lux-card" style={{ maxWidth: 760, margin: '0 auto', padding: 36 }}>
        <p className="kicker">Legacy Route</p>
        <h1>Reports moved</h1>
        <p style={{ color: 'var(--jarvixx-muted)' }}>Reports are now available in the clean Jarvixx Command Center.</p>
        <a className="lux-button" href="/app/reports">Open Reports Command Center</a>
      </section>
    </main>
  );
}
