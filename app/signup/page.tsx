export default function SignupPage() {
  return (
    <main className="jarvixx-page" style={{ display: 'grid', placeItems: 'center', padding: 24 }}>
      <section className="lux-card" style={{ width: '100%', maxWidth: 520, padding: 36 }}>
        <p className="kicker">Free Trial</p>
        <h1>Create your Jarvixx workspace</h1>
        <p style={{ color: 'var(--jarvixx-muted)' }}>
          Plans will connect to billing, tenant setup, email verification, and module access rules.
        </p>
        <form style={{ display: 'grid', gap: 14, marginTop: 24 }}>
          <input aria-label="Company" placeholder="Company name" style={{ padding: 14, borderRadius: 12, border: '1px solid var(--jarvixx-border)' }} />
          <input aria-label="Name" placeholder="Owner name" style={{ padding: 14, borderRadius: 12, border: '1px solid var(--jarvixx-border)' }} />
          <input aria-label="Email" placeholder="Email address" style={{ padding: 14, borderRadius: 12, border: '1px solid var(--jarvixx-border)' }} />
          <a className="lux-button" href="/app/setup" style={{ textAlign: 'center' }}>Create Workspace</a>
        </form>
      </section>
    </main>
  );
}
