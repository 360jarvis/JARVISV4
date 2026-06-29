export default function ModulePlaceholder(props: { name: string; status?: string }) {
  return (
    <section className="lux-card" style={{ padding: 24 }}>
      <p className="kicker">Approved Route</p>
      <h2 style={{ marginTop: 8 }}>{props.name}</h2>
      <p style={{ color: 'var(--jarvixx-muted)', maxWidth: 760 }}>
        This module route is reserved and protected by the Jarvixx route lock. Buildout starts only after the module blueprint is approved.
      </p>
      <div style={{ marginTop: 18, padding: 14, borderRadius: 14, background: 'var(--jarvixx-gold-soft)' }}>
        Status: {props.status || 'Foundation placeholder'}
      </div>
    </section>
  );
}
