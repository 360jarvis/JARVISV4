export default function StatCard(props: { label: string; value: string; supportingText?: string }) {
  return (
    <div
      style={{
        border: '1px solid var(--jarvixx-border)',
        borderRadius: 18,
        background: '#fff',
        padding: 16,
        display: 'grid',
        gap: 8
      }}
    >
      <span style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{props.label}</span>
      <strong style={{ fontSize: 24, lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 600 }}>{props.value}</strong>
      {props.supportingText ? <span style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{props.supportingText}</span> : null}
    </div>
  );
}
