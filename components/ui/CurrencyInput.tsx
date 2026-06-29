import Field from './Field';

export default function CurrencyInput(props: { label: string; note?: string; placeholder?: string }) {
  return (
    <Field label={props.label} note={props.note}>
      <div style={{ display: 'grid', gridTemplateColumns: '34px 1fr', alignItems: 'center', border: '1px solid var(--jarvixx-border)', borderRadius: 14, background: '#fff', overflow: 'hidden' }}>
        <span style={{ color: 'var(--jarvixx-muted)', textAlign: 'center', borderRight: '1px solid var(--jarvixx-border)' }}>$</span>
        <input
          placeholder={props.placeholder ?? '0.00'}
          inputMode="decimal"
          style={{ minHeight: 40, border: 0, outline: 0, padding: '0 13px', color: 'var(--jarvixx-ink)' }}
        />
      </div>
    </Field>
  );
}
