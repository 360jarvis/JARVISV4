import type { ReactNode } from 'react';

export default function MetricGrid(props: { children: ReactNode }) {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: 16
      }}
    >
      {props.children}
    </section>
  );
}
