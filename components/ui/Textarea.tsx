import Field from './Field';

export default function Textarea(props: { label: string; placeholder?: string; note?: string; rows?: number }) {
  return (
    <Field label={props.label} note={props.note}>
      <textarea
        placeholder={props.placeholder}
        rows={props.rows ?? 4}
        style={{
          borderRadius: 14,
          border: '1px solid var(--jarvixx-border)',
          background: '#fff',
          color: 'var(--jarvixx-ink)',
          padding: 13,
          outline: 0,
          resize: 'vertical',
          minHeight: 108
        }}
      />
    </Field>
  );
}
