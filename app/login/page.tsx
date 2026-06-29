export default function LoginPage() {
  return (
    <main className="jarvixx-page" style={{ display: 'grid', placeItems: 'center', padding: 24 }}>
      <section className="lux-card" style={{ width: '100%', maxWidth: 460, padding: 36 }}>
        <p className="kicker">Secure Access</p>
        <h1>Login to Jarvixx</h1>
        <p style={{ color: 'var(--jarvixx-muted)' }}>
          Tenant, employee, provider, customer, and admin access will be detected by account and role.
        </p>
        <form style={{ display: 'grid', gap: 14, marginTop: 24 }}>
          <input aria-label="Email" placeholder="Email address" style={{ padding: 14, borderRadius: 12, border: '1px solid var(--jarvixx-border)' }} />
          <input aria-label="Password" placeholder="Password" type="password" style={{ padding: 14, borderRadius: 12, border: '1px solid var(--jarvixx-border)' }} />
          <a className="lux-button" href="/app" style={{ textAlign: 'center' }}>Continue</a>
        </form>
      </section>
    </main>
  );
}
