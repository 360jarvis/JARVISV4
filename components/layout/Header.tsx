export default function Header(props: { title: string; subtitle: string }) {
  return (
    <header className="lux-card" style={{ padding: 24, marginBottom: 24, display: 'flex', justifyContent: 'space-between', gap: 18, alignItems: 'center' }}>
      <div>
        <p className="kicker">Jarvixx 2.0 Clean Build</p>
        <h1 style={{ margin: '8px 0', fontSize: 34 }}>{props.title}</h1>
        <p style={{ margin: 0, color: 'var(--jarvixx-muted)' }}>{props.subtitle}</p>
      </div>
      <a className="lux-button secondary" href="/app/setup">Setup</a>
    </header>
  );
}
