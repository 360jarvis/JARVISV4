export default function LegacySettingsPage() {
  return (
    <main className="jarvixx-page" style={{ padding: 48 }}>
      <section className="lux-card" style={{ maxWidth: 760, margin: '0 auto', padding: 36 }}>
        <p className="kicker">Legacy Route</p>
        <h1>Settings moved</h1>
        <p style={{ color: 'var(--jarvixx-muted)' }}>Settings are now available in the clean Jarvixx Command Center.</p>
        <a className="lux-button" href="/app/settings">Open Settings Command Center</a>
      </section>
    </main>
  );
}
