import type { ReactNode } from 'react';

export default function Field(props: { label: string; note?: string; children: ReactNode }) {
  return (
    <label style={{ display: 'grid', gap: 7 }}>
      <span style={{ color: 'var(--jarvixx-ink)', fontSize: 13, fontWeight: 600 }}>{props.label}</span>
      {props.note ? <span style={{ color: 'var(--jarvixx-muted)', fontSize: 12, lineHeight: 1.4 }}>{props.note}</span> : null}
      {props.children}
    </label>
  );
}
