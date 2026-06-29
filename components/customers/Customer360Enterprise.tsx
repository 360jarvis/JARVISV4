import type { CustomerRecord } from '../../lib/customers';

const quickActions = ['Call', 'Text', 'Email', 'Book', 'Quote', 'Note'];

const timeline = [
  { type: 'Booking', title: 'Deep Cleaning completed', detail: 'Arrival Window 8:00 AM - 10:00 AM · Team assigned', date: '06/18/2026' },
  { type: 'Payment', title: 'Payment recorded', detail: 'Card payment matched to latest cleaning', date: '06/18/2026' },
  { type: 'Quote', title: 'Recurring service offer sent', detail: 'Bi-weekly service recommendation prepared', date: '06/12/2026' },
  { type: 'Note', title: 'Customer preference updated', detail: 'Prefers same team and morning arrival window', date: '06/10/2026' }
];

const records = [
  { title: 'Documents', value: '3', detail: 'Service agreement, access notes, signed authorization' },
  { title: 'Reviews', value: '4.8', detail: 'Latest rating and customer experience history' },
  { title: 'Payments', value: '$0.00', detail: 'Open balance, card status, receipts, and refunds' }
];

export default function Customer360Enterprise({ customer }: { customer: CustomerRecord }) {
  const isPastDue = customer.status === 'Past Due';
  const isVip = customer.status === 'VIP' || customer.tags.includes('High Value');

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section
        className="lux-card"
        style={{
          padding: 24,
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 22,
          alignItems: 'stretch',
          background: 'radial-gradient(circle at top right, rgba(216,189,127,0.22), transparent 32%), linear-gradient(135deg, #ffffff 0%, #fbfaf7 62%, #f5ecd7 100%)',
          boxShadow: '0 24px 70px rgba(23,19,13,0.08)'
        }}
      >
        <div style={{ display: 'grid', gap: 16 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Tag tone="gold">Customer 360</Tag>
            <Tag tone={isPastDue ? 'neutral' : 'gold'}>{customer.status}</Tag>
            {isVip ? <Tag tone="gold">VIP / High Value</Tag> : null}
            <Tag tone="neutral">{customer.propertyType}</Tag>
          </div>

          <div>
            <p className="kicker" style={{ margin: 0 }}>{customer.id}</p>
            <h1 style={{ margin: '8px 0 8px', fontSize: 36, letterSpacing: '-0.05em', lineHeight: 1 }}>{customer.name}</h1>
            <p style={{ margin: 0, color: 'var(--jarvixx-muted)', fontSize: 14 }}>{customer.phone} · {customer.email}</p>
          </div>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {quickActions.map((action, index) => (
              <button key={action} className={index < 3 ? 'lux-button secondary' : 'lux-button'} type="button">
                {action}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
          <Metric label="Lifetime Value" value={customer.lifetimeValue} />
          <Metric label="Open Balance" value={customer.outstandingBalance} alert={isPastDue} />
          <Metric label="Frequency" value={customer.frequency} />
          <Metric label="Last Cleaning" value={customer.lastBooking} />
          <Metric label="Next Arrival" value={customer.nextService === 'Needs Quote' ? 'Needs Quote' : '8:00 AM - 10:00 AM'} />
          <Metric label="Quality Score" value="4.8" />
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
        <Panel title="Customer Health" value={isPastDue ? 'Needs Attention' : 'Healthy'} detail="Payment, service, quality, and recurring status summarized here." />
        <Panel title="Property Intelligence" value={`${customer.propertyType} · ${customer.city} ${customer.zip}`} detail="Property details, access notes, supplies, pets, parking, and preferred team come next." />
        <Panel title="Communication Preference" value="Text + Email" detail="Future communication history and consent tracking will live here." />
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 14 }}>
        {records.map((record) => (
          <Panel key={record.title} title={record.title} value={record.value} detail={record.detail} />
        ))}
      </section>

      <section className="lux-card" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <p className="kicker" style={{ margin: 0 }}>Customer Timeline</p>
            <h2 style={{ margin: '8px 0 0', fontSize: 22, letterSpacing: '-0.035em' }}>Unified customer activity</h2>
            <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>Bookings, quotes, payments, notes, reviews, documents, calls, SMS, and emails will live here.</p>
          </div>
          <button className="lux-button secondary" type="button">Add Note</button>
        </div>

        <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
          {timeline.map((item) => (
            <article key={item.title} style={{ display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 14, alignItems: 'center', border: '1px solid var(--jarvixx-border)', borderRadius: 16, padding: 14, background: '#fff' }}>
              <Tag tone="gold">{item.type}</Tag>
              <div>
                <strong style={{ display: 'block', fontSize: 14 }}>{item.title}</strong>
                <span style={{ display: 'block', marginTop: 5, color: 'var(--jarvixx-muted)', fontSize: 13 }}>{item.detail}</span>
              </div>
              <span style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{item.date}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function Tag({ children, tone }: { children: string; tone: 'gold' | 'neutral' }) {
  return (
    <span style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 999, background: tone === 'gold' ? 'var(--jarvixx-gold-soft)' : '#fff', padding: '7px 10px', fontSize: 11, fontWeight: 800 }}>
      {children}
    </span>
  );
}

function Metric({ label, value, alert }: { label: string; value: string; alert?: boolean }) {
  return (
    <div style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 16, padding: 14, background: alert ? '#fff7ed' : '#fff' }}>
      <div style={{ color: 'var(--jarvixx-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.11em', fontWeight: 800 }}>{label}</div>
      <div style={{ marginTop: 8, fontSize: 18, fontWeight: 900, letterSpacing: '-0.02em' }}>{value}</div>
    </div>
  );
}

function Panel({ title, value, detail }: { title: string; value: string; detail: string }) {
  return (
    <article className="lux-card" style={{ padding: 18 }}>
      <p className="kicker" style={{ margin: 0 }}>{title}</p>
      <h2 style={{ margin: '8px 0 8px', fontSize: 20, letterSpacing: '-0.03em' }}>{value}</h2>
      <p style={{ margin: 0, color: 'var(--jarvixx-muted)', fontSize: 13, lineHeight: 1.5 }}>{detail}</p>
    </article>
  );
}
