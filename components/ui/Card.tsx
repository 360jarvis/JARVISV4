import type { ReactNode } from 'react';

export default function Card(props: { children: ReactNode; title?: string; subtitle?: string }) {
  return (
    <section
      className="lux-card"
      style={{
        padding: 20,
        boxShadow: '0 18px 50px rgba(23,19,13,0.04)'
      }}
    >
      {props.title ? (
        <div style={{ marginBottom: 16 }}>
          <h2 style={{ margin: 0, fontSize: 18, letterSpacing: '-0.02em' }}>{props.title}</h2>
          {props.subtitle ? <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>{props.subtitle}</p> : null}
        </div>
      ) : null}
      {props.children}
    </section>
  );
}
