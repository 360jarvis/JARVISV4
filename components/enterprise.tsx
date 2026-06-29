export function EnterprisePageHeader(props: { eyebrow?: string; title: string; subtitle?: string; actions?: React.ReactNode }) {
  return (
    <section className="lux-card" style={{ padding: 22, display: 'flex', justifyContent: 'space-between', gap: 18, alignItems: 'center' }}>
      <div>
        {props.eyebrow ? <p className="kicker">{props.eyebrow}</p> : null}
        <h1 style={{ margin: '6px 0', fontSize: 32 }}>{props.title}</h1>
        {props.subtitle ? <p style={{ color: 'var(--jarvixx-muted)', margin: 0 }}>{props.subtitle}</p> : null}
      </div>
      {props.actions ? <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>{props.actions}</div> : null}
    </section>
  );
}

export function EnterpriseSectionCard(props: { title?: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section className="lux-card" style={{ padding: 18 }}>
      {props.eyebrow ? <p className="kicker">{props.eyebrow}</p> : null}
      {props.title ? <h2 style={{ margin: '6px 0 14px' }}>{props.title}</h2> : null}
      {props.children}
    </section>
  );
}

export function EnterpriseActionButton(props: { children: React.ReactNode; href?: string; variant?: 'primary' | 'secondary' }) {
  const className = props.variant === 'secondary' ? 'lux-button secondary' : 'lux-button';
  if (props.href) {
    return <a className={className} href={props.href}>{props.children}</a>;
  }
  return <button className={className}>{props.children}</button>;
}

export function EnterpriseMetricGrid(props: { children: React.ReactNode }) {
  return <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>{props.children}</section>;
}

export function EnterpriseEmptyState(props: { title: string; body: string; actionHref?: string; actionLabel?: string }) {
  return (
    <section className="lux-card" style={{ padding: 32, textAlign: 'center' }}>
      <p className="kicker">Empty State</p>
      <h2>{props.title}</h2>
      <p style={{ color: 'var(--jarvixx-muted)', maxWidth: 560, margin: '0 auto 18px' }}>{props.body}</p>
      {props.actionHref && props.actionLabel ? <a className="lux-button" href={props.actionHref}>{props.actionLabel}</a> : null}
    </section>
  );
}
