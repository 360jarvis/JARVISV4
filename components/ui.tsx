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

export function SectionCard(props: { title?: string; eyebrow?: string; children: any }) {
  return (
    <section className="lux-card" style={{ padding: 20 }}>
      {props.eyebrow ? <p className="kicker">{props.eyebrow}</p> : null}
      {props.title ? <h2 style={{ margin: '6px 0 14px' }}>{props.title}</h2> : null}
      {props.children}
    </section>
  );
}

export function FilterBar(props: { children: any }) {
  return (
    <section className="lux-card" style={{ padding: 14, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
      {props.children}
    </section>
  );
}

export function SearchInput(props: { placeholder?: string }) {
  return <input placeholder={props.placeholder || 'Search'} style={{ minWidth: 260, padding: '11px 13px', borderRadius: 999, border: '1px solid var(--jarvixx-border)', background: '#fff' }} />;
}

export function LoadingState(props: { label?: string }) {
  return (
    <section className="lux-card" style={{ padding: 24 }}>
      <p className="kicker">Loading</p>
      <p style={{ color: 'var(--jarvixx-muted)', margin: 0 }}>{props.label || 'Preparing Jarvixx data...'}</p>
    </section>
  );
}

export function ErrorState(props: { title?: string; body?: string }) {
  return (
    <section className="lux-card" style={{ padding: 24, borderColor: '#f0c7c2' }}>
      <p className="kicker">Needs Attention</p>
      <h2>{props.title || 'Something needs attention'}</h2>
      <p style={{ color: 'var(--jarvixx-muted)', margin: 0 }}>{props.body || 'Please review this section before continuing.'}</p>
    </section>
  );
}
