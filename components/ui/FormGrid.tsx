import type { ReactNode } from 'react';

export default function FormGrid(props: { children: ReactNode; columns?: 1 | 2 | 3 }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${props.columns ?? 2}, minmax(0, 1fr))`,
        gap: 14
      }}
    >
      {props.children}
    </div>
  );
}
