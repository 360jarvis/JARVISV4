import Field from './Field';

export default function DateTimeInput(props: { label: string; type?: 'date' | 'time'; note?: string }) {
  return (
    <Field label={props.label} note={props.note}>
      <input
        type={props.type ?? 'date'}
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
    </Field>
  );
}
