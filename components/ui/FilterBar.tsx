import type { ReactNode } from 'react';
import Button from './Button';

export default function FilterBar(props: { children?: ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: 12,
        border: '1px solid var(--jarvixx-border)',
        borderRadius: 18,
        background: '#fff'
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>{props.children}</div>
      <Button variant="secondary">Filters</Button>
    </div>
  );
}
