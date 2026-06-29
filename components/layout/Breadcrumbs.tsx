export default function Breadcrumbs(props: { items?: string[] }) {
  const items = props.items && props.items.length > 0 ? props.items : ['Workspace'];

  return (
    <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--jarvixx-muted)', fontSize: 12 }}>
      {items.map((item, index) => (
        <span key={`${item}-${index}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: index === items.length - 1 ? 'var(--jarvixx-ink)' : 'var(--jarvixx-muted)' }}>{item}</span>
          {index < items.length - 1 ? <span aria-hidden="true" style={{ color: '#b7aa92' }}>/</span> : null}
        </span>
      ))}
    </nav>
  );
}
