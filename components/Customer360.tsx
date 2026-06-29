import { demoCustomers } from '../lib/customers';
import { EmptyState, StatusBadge } from './ui';

const sections = [
  'Profile',
  'Contact Information',
  'Properties',
  'Bookings',
  'Quotes',
  'Payments',
  'Timeline',
  'Documents',
  'Reviews',
  'AI Insights',
  'Communication Center',
  'Smart Actions'
];

export default function Customer360(props: { customerId: string }) {
  const customer = demoCustomers.find((item) => item.id === props.customerId);

  if (!customer) {
    return <EmptyState title="Customer not found" body="This customer record does not exist in the current foundation dataset." />;
  }

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section className="lux-card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
          <div>
            <p className="kicker">Customer 360</p>
            <h2 style={{ margin: '8px 0', fontSize: 30 }}>{customer.name}</h2>
            <p style={{ color: 'var(--jarvixx-muted)' }}>{customer.phone} - {customer.email}</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
              <StatusBadge>{customer.status}</StatusBadge>
              <StatusBadge>{customer.propertyType}</StatusBadge>
              {customer.tags.map((tag) => <StatusBadge key={tag}>{tag}</StatusBadge>)}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'start' }}>
            <button className="lux-button">New Booking</button>
            <button className="lux-button secondary">New Quote</button>
            <button className="lux-button secondary">Add Note</button>
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
        <article className="lux-card" style={{ padding: 18 }}>
          <p className="kicker">Next Service</p>
          <h3>{customer.nextService}</h3>
          <p style={{ color: 'var(--jarvixx-muted)' }}>{customer.frequency}</p>
        </article>
        <article className="lux-card" style={{ padding: 18 }}>
          <p className="kicker">Lifetime Value</p>
          <h3>{customer.lifetimeValue}</h3>
          <p style={{ color: 'var(--jarvixx-muted)' }}>Revenue connected to this customer.</p>
        </article>
        <article className="lux-card" style={{ padding: 18 }}>
          <p className="kicker">Open Balance</p>
          <h3>{customer.outstandingBalance}</h3>
          <p style={{ color: 'var(--jarvixx-muted)' }}>Payment visibility will connect to billing.</p>
        </article>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 14 }}>
        {sections.map((section) => (
          <article className="lux-card" key={section} style={{ padding: 18, minHeight: 132 }}>
            <p className="kicker">Customer 360 Section</p>
            <h3>{section}</h3>
            <p style={{ color: 'var(--jarvixx-muted)' }}>Reserved for the approved Customer Command Center buildout.</p>
          </article>
        ))}
      </section>
    </div>
  );
}
