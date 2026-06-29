export function PageGrid(props: { children: any }) {
  return <section style={{ display: 'grid', gap: 16 }}>{props.children}</section>;
}

export function KpiCard(props: { label: string; value: string; detail?: string }) {
  return (
    <article className="lux-card" style={{ padding: 20 }}>
      <p className="kicker">{props.label}</p>
      <div style={{ fontSize: 30, marginTop: 8 }}>{props.value}</div>
      {props.detail ? <p style={{ color: 'var(--jarvixx-muted)' }}>{props.detail}</p> : null}
    </article>
  );
}

export function StatusBadge(props: { children: any }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', borderRadius: 999, padding: '6px 10px', background: 'var(--jarvixx-gold-soft)', border: '1px solid var(--jarvixx-border)', fontSize: 12 }}>
      {props.children}
    </span>
  );
}

export function EmptyState(props: { title: string; body: string }) {
  return (
    <section className="lux-card" style={{ padding: 28, textAlign: 'center' }}>
      <p className="kicker">Empty State</p>
      <h2>{props.title}</h2>
      <p style={{ color: 'var(--jarvixx-muted)', maxWidth: 560, margin: '0 auto' }}>{props.body}</p>
    </section>
  );
}
