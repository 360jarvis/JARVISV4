import type { ReactNode } from 'react';
import Badge from './Badge';
import EmptyState from './EmptyState';

export type ActivityFeedItem = {
  id: string;
  title: string;
  detail?: string;
  time: string;
  type?: 'booking' | 'payment' | 'quality' | 'growth' | 'system';
  icon?: ReactNode;
};

const typeLabel = {
  booking: 'Booking',
  payment: 'Payment',
  quality: 'Quality',
  growth: 'Growth',
  system: 'System'
};

export default function ActivityFeed(props: { title?: string; items: ActivityFeedItem[] }) {
  if (props.items.length === 0) {
    return <EmptyState title="No recent activity" message="The activity feed will show operational updates from bookings, payments, quality, growth, and system events." />;
  }

  return (
    <section className="lux-card" style={{ padding: 20, boxShadow: '0 18px 50px rgba(23,19,13,0.04)' }}>
      {props.title ? <h2 style={{ margin: '0 0 16px', fontSize: 18, letterSpacing: '-0.02em' }}>{props.title}</h2> : null}
      <div style={{ display: 'grid', gap: 10 }}>
        {props.items.map((item) => (
          <article key={item.id} style={{ display: 'grid', gridTemplateColumns: '36px 1fr auto', gap: 12, alignItems: 'center', padding: 12, border: '1px solid var(--jarvixx-border)', borderRadius: 18, background: '#fff' }}>
            <div aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 14, display: 'grid', placeItems: 'center', background: 'var(--jarvixx-gold-soft)', color: 'var(--jarvixx-ink)', fontSize: 12 }}>
              {item.icon ?? 'JX'}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                <h3 style={{ margin: 0, fontSize: 14 }}>{item.title}</h3>
                {item.type ? <Badge tone="gold">{typeLabel[item.type]}</Badge> : null}
              </div>
              {item.detail ? <p style={{ margin: '5px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13, lineHeight: 1.4 }}>{item.detail}</p> : null}
            </div>
            <time style={{ color: 'var(--jarvixx-muted)', fontSize: 12, whiteSpace: 'nowrap' }}>{item.time}</time>
          </article>
        ))}
      </div>
    </section>
  );
}
