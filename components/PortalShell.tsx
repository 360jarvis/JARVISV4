export default function PortalShell(props: { title: string; subtitle: string; portalType: string; children?: any }) {
  return (
    <main className="jarvixx-page" style={{ padding: 28 }}>
      <section className="lux-card" style={{ maxWidth: 1180, margin: '0 auto', padding: 24 }}>
        <p className="kicker">{props.portalType} Portal</p>
        <h1 style={{ margin: '8px 0', fontSize: 34 }}>{props.title}</h1>
        <p style={{ margin: 0, color: 'var(--jarvixx-muted)' }}>{props.subtitle}</p>
      </section>
      <section style={{ maxWidth: 1180, margin: '18px auto 0' }}>{props.children}</section>
    </main>
  );
}
