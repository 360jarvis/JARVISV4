import Field from './Field';

export default function Select(props: { label: string; options: string[]; note?: string }) {
  return (
    <Field label={props.label} note={props.note}>
      <select
        defaultValue=""
        style={{
          minHeight: 42,
          borderRadius: 14,
          border: '1px solid var(--jarvixx-border)',
          background: '#fff',
          color: 'var(--jarvixx-ink)',
          padding: '0 13px',
          outline: 0
        }}
      >
        <option value="" disabled>Select one</option>
        {props.options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </Field>
  );
}
