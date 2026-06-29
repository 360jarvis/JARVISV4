import { KpiCard, StatusBadge } from './ui';

const chatItems = [
  { title: 'Office Team', detail: 'Internal operations thread', status: 'Ready' },
  { title: 'Dispatch', detail: 'Booking and route coordination', status: 'Ready' },
  { title: 'Quality', detail: 'Complaints and re-clean follow-up', status: 'Ready' },
  { title: 'Workforce', detail: 'Team communication and job updates', status: 'Ready' }
];

export default function InternalChatCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Threads" value="4" detail="Foundation channels" />
        <KpiCard label="Unread" value="0" detail="No demo messages" />
        <KpiCard label="Linked Work" value="Ready" detail="Bookings and customers" />
        <KpiCard label="Alerts" value="Ready" detail="System messages later" />
      </section>

      <section className="lux-card" style={{ padding: 22 }}>
        <p className="kicker">Internal Chat</p>
        <h2 style={{ margin: '8px 0' }}>Team communication center</h2>
        <p style={{ color: 'var(--jarvixx-muted)' }}>
          Internal Chat will support office, dispatch, quality, and workforce conversations connected to bookings, customers, and operational alerts.
        </p>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        {chatItems.map((item) => (
          <article className="lux-card" key={item.title} style={{ padding: 18, display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center' }}>
            <div>
              <strong>{item.title}</strong>
              <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)' }}>{item.detail}</p>
            </div>
            <StatusBadge>{item.status}</StatusBadge>
          </article>
        ))}
      </section>
    </div>
  );
}
