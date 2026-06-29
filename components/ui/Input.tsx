export default function Input(props: { label: string; placeholder?: string; value?: string; disabled?: boolean }) {
  return (
    <label style={{ display: 'grid', gap: 7 }}>
      <span style={{ color: 'var(--jarvixx-muted)', fontSize: 12, fontWeight: 600 }}>{props.label}</span>
      <input
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.disabled}
        readOnly={props.value !== undefined}
        style={{
          minHeight: 42,
          borderRadius: 14,
          border: '1px solid var(--jarvixx-border)',
          background: '#fff',
          color: 'var(--jarvixx-ink)',
          padding: '0 13px',
          outline: 0
        }}
      />
    </label>
  );
}
