import type { ReactNode } from 'react';
import EmptyState from './EmptyState';

export type TimelineItem = {
  id: string;
  title: string;
  description?: string;
  timestamp: string;
  actor?: string;
  icon?: ReactNode;
};

export default function Timeline(props: { title?: string; items: TimelineItem[] }) {
  if (props.items.length === 0) {
    return <EmptyState title="No timeline activity" message="Activity will appear here as records are created, updated, assigned, paid, or reviewed." />;
  }

  return (
    <section className="lux-card" style={{ padding: 20, boxShadow: '0 18px 50px rgba(23,19,13,0.04)' }}>
      {props.title ? <h2 style={{ margin: '0 0 18px', fontSize: 18, letterSpacing: '-0.02em' }}>{props.title}</h2> : null}
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 16 }}>
        {props.items.map((item, index) => (
          <li key={item.id} style={{ display: 'grid', gridTemplateColumns: '36px 1fr', gap: 12, position: 'relative' }}>
            <div style={{ position: 'relative', display: 'grid', justifyItems: 'center' }}>
              <span
                aria-hidden="true"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 14,
                  display: 'grid',
                  placeItems: 'center',
                  background: 'var(--jarvixx-gold-soft)',
                  color: 'var(--jarvixx-ink)',
                  border: '1px solid #ead8aa',
                  fontSize: 12
                }}
              >
                {item.icon ?? 'JX'}
              </span>
              {index < props.items.length - 1 ? <span aria-hidden="true" style={{ position: 'absolute', top: 38, width: 1, height: 'calc(100% + 2px)', background: 'var(--jarvixx-border)' }} /> : null}
            </div>
            <div style={{ paddingBottom: 2 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
                <h3 style={{ margin: 0, fontSize: 14 }}>{item.title}</h3>
                <time style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{item.timestamp}</time>
              </div>
              {item.description ? <p style={{ margin: '5px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13, lineHeight: 1.45 }}>{item.description}</p> : null}
              {item.actor ? <p style={{ margin: '6px 0 0', color: '#a09480', fontSize: 12 }}>By {item.actor}</p> : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
