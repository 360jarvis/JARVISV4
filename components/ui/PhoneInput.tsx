import Field from './Field';

export default function PhoneInput(props: { label?: string; note?: string }) {
  return (
    <Field label={props.label ?? 'Phone'} note={props.note ?? 'Format: (XXX) XXX-XXXX'}>
      <input
        placeholder="(555) 555-5555"
        inputMode="tel"
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
