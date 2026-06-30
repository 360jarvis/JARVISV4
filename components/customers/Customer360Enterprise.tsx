import type { CustomerRecord } from '../../lib/customers';

const quickActions = ['New Booking', 'Create Quote', 'Collect Payment', 'Upload Document', 'Add Note', 'Send Email', 'Send SMS', 'Call Customer', 'Quality Review', 'Assistant Summary'];

const timeline = [
  { type: 'Booking', title: 'Deep Cleaning completed', detail: 'Arrival Window 8:00 AM - 10:00 AM - Team assigned', date: '06/18/2026' },
  { type: 'Payment', title: 'Payment recorded', detail: 'Payment matched to latest cleaning', date: '06/18/2026' },
  { type: 'Quote', title: 'Recurring service offer sent', detail: 'Bi-weekly service recommendation prepared', date: '06/12/2026' },
  { type: 'Note', title: 'Customer preference updated', detail: 'Prefers same team and morning arrival window', date: '06/10/2026' }
];

const records = [
  { title: 'Documents', value: '3', detail: 'Service agreement, access notes, signed authorization' },
  { title: 'Reviews', value: '4.8', detail: 'Latest rating and customer experience history' },
  { title: 'Payments', value: '$0.00', detail: 'Open balance, payment status, receipts, and refunds' }
];

const recommendations = [
  { title: 'Prepare recurring offer', detail: 'Customer may be a good fit for recurring service.', action: 'Prepare' },
  { title: 'Confirm arrival window', detail: 'Use customer-facing arrival window language.', action: 'Confirm' },
  { title: 'Review customer health', detail: 'Review service, balance, quality, and recurring status.', action: 'Review' },
  { title: 'Prepare customer summary', detail: 'Create a quick office summary before contact.', action: 'Summarize' }
];

const customerSnapshot = [
  { label: 'Customer Since', value: '03/14/2024' },
  { label: 'Total Bookings', value: '28' },
  { label: 'Completed Jobs', value: '26' },
  { label: 'Cancelled Jobs', value: '2' },
  { label: 'Average Ticket', value: '$185.00' },
  { label: 'Preferred Team', value: 'Team Maria' },
  { label: 'Preferred Arrival Window', value: '8:00 AM - 10:00 AM' },
  { label: 'Referral Source', value: 'Google' }
];

const propertyProfile = [
  { label: 'Primary Service', value: 'Deep Cleaning' },
  { label: 'Property Type', value: 'Residential' },
  { label: 'Bedrooms', value: '4' },
  { label: 'Bathrooms', value: '3' },
  { label: 'Square Feet', value: '2,350' },
  { label: 'Pets', value: 'Yes' },
  { label: 'Access Status', value: 'On File' },
  { label: 'Entry Notes', value: 'Confirmed' }
];

const serviceNotes = [
  { title: 'Parking Notes', detail: 'Use the preferred parking instructions saved for this customer before arrival.' },
  { title: 'Arrival Instructions', detail: 'Arrival and entry details should be confirmed by the office before dispatch.' },
  { title: 'Special Instructions', detail: 'Customer prefers the same team, morning service, and extra attention to kitchen and bathrooms.' }
];

const accessPreferences = [
  { label: 'Entry Method', value: 'On File' },
  { label: 'Contact Before Arrival', value: 'Text Only' },
  { label: 'Preferred Language', value: 'English' },
  { label: 'Pets Secured', value: 'Yes' },
  { label: 'Shoes Policy', value: 'Shoe Covers' },
  { label: 'Supplies', value: 'Company Provided' },
  { label: 'Photo Permission', value: 'Before / After' },
  { label: 'Reminder Preference', value: '24 Hours Before' }
];

const preferenceNotes = [
  { title: 'Communication Rule', detail: 'Customer prefers text messages for arrival updates, reminders, and schedule confirmations.' },
  { title: 'Home Preference', detail: 'Use light fragrance only and follow saved room-by-room preference notes.' },
  { title: 'Team Notes', detail: 'Customer prefers Team Maria when available and values consistent cleaners.' }
];

const serviceHistory = [
  { label: 'Last Service', value: '06/18/2026' },
  { label: 'Next Scheduled Service', value: '07/02/2026' },
  { label: 'Current Frequency', value: 'Bi-Weekly' },
  { label: 'Favorite Services', value: 'Deep + Fridge' },
  { label: 'Average Duration', value: '3h 45m' },
  { label: 'Lifetime Hours', value: '98.5 hrs' },
  { label: 'Reclean Rate', value: '0.8%' },
  { label: 'Satisfaction', value: '4.9 / 5' }
];

const serviceHistoryNotes = [
  { title: 'Recent Service Highlights', detail: 'Latest completed service was deep cleaning with strong quality feedback and no open balance.' },
  { title: 'Cleaning Preferences', detail: 'Customer prefers recurring morning service, consistent team assignment, and kitchen priority.' },
  { title: 'Service Recommendations', detail: 'Consider recurring add-ons for refrigerator, baseboards, and quarterly detail cleaning.' }
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
            <p style={{ margin: 0, color: 'var(--jarvixx-muted)', fontSize: 14 }}>{customer.phone} - {customer.email}</p>
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

      <section className="lux-card" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <p className="kicker" style={{ margin: 0 }}>Customer Snapshot</p>
            <h2 style={{ margin: '8px 0 0', fontSize: 22, letterSpacing: '-0.035em' }}>Relationship Overview</h2>
            <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>Customer tenure, booking history, preferences, and source summary.</p>
          </div>
          <Tag tone="gold">Enterprise Profile</Tag>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 10, marginTop: 16 }}>
          {customerSnapshot.map((item) => (
            <Metric key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </section>

      <section className="lux-card" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <p className="kicker" style={{ margin: 0 }}>Property & Service Profile</p>
            <h2 style={{ margin: '8px 0 0', fontSize: 22, letterSpacing: '-0.035em' }}>Cleaning requirements and access details</h2>
            <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>Static foundation for property size, service type, access notes, and customer preferences.</p>
          </div>
          <Tag tone="gold">Service Ready</Tag>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 10, marginTop: 16 }}>
          {propertyProfile.map((item) => (
            <Metric key={item.label} label={item.label} value={item.value} />
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, marginTop: 14 }}>
          {serviceNotes.map((note) => (
            <article key={note.title} style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 16, padding: 14, background: '#fff' }}>
              <strong style={{ display: 'block', fontSize: 13 }}>{note.title}</strong>
              <span style={{ display: 'block', marginTop: 6, color: 'var(--jarvixx-muted)', fontSize: 12, lineHeight: 1.5 }}>{note.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="lux-card" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <p className="kicker" style={{ margin: 0 }}>Customer Access & Preferences</p>
            <h2 style={{ margin: '8px 0 0', fontSize: 22, letterSpacing: '-0.035em' }}>Arrival, entry, communication, and home preferences</h2>
            <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>Static foundation for safe entry, customer communication rules, supplies, pets, and team preferences.</p>
          </div>
          <Tag tone="gold">Preference Ready</Tag>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 10, marginTop: 16 }}>
          {accessPreferences.map((item) => (
            <Metric key={item.label} label={item.label} value={item.value} />
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, marginTop: 14 }}>
          {preferenceNotes.map((note) => (
            <article key={note.title} style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 16, padding: 14, background: '#fff' }}>
              <strong style={{ display: 'block', fontSize: 13 }}>{note.title}</strong>
              <span style={{ display: 'block', marginTop: 6, color: 'var(--jarvixx-muted)', fontSize: 12, lineHeight: 1.5 }}>{note.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="lux-card" style={{ padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <p className="kicker" style={{ margin: 0 }}>Customer Service History</p>
            <h2 style={{ margin: '8px 0 0', fontSize: 22, letterSpacing: '-0.035em' }}>Service history summary</h2>
            <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>Static foundation for service rhythm, recent activity, preferences, satisfaction, and future service recommendations.</p>
          </div>
          <Tag tone="gold">History Ready</Tag>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 10, marginTop: 16 }}>
          {serviceHistory.map((item) => (
            <Metric key={item.label} label={item.label} value={item.value} />
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, marginTop: 14 }}>
          {serviceHistoryNotes.map((note) => (
            <article key={note.title} style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 16, padding: 14, background: '#fff' }}>
              <strong style={{ display: 'block', fontSize: 13 }}>{note.title}</strong>
              <span style={{ display: 'block', marginTop: 6, color: 'var(--jarvixx-muted)', fontSize: 12, lineHeight: 1.5 }}>{note.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
        <Panel title="Customer Health" value={isPastDue ? 'Needs Attention' : 'Healthy'} detail="Payment, service, quality, and recurring status summarized here." />
        <Panel title="Property Intelligence" value={`${customer.propertyType} - ${customer.city} ${customer.zip}`} detail="Property details, access notes, supplies, pets, parking, and preferred team come next." />
        <Panel title="Communication Preference" value="Text + Email" detail="Future communication history and consent tracking will live here." />
      </section>

      <section className="lux-card" style={{ padding: 20 }}>
        <p className="kicker" style={{ margin: 0 }}>Recommended Actions</p>
        <h2 style={{ margin: '8px 0 0', fontSize: 22, letterSpacing: '-0.035em' }}>Next best steps</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 12, marginTop: 16 }}>
          {recommendations.map((item) => (
            <article key={item.title} style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 16, padding: 14, background: '#fff', display: 'grid', gap: 10 }}>
              <Tag tone="gold">JX</Tag>
              <strong style={{ fontSize: 14 }}>{item.title}</strong>
              <span style={{ color: 'var(--jarvixx-muted)', fontSize: 12, lineHeight: 1.45 }}>{item.detail}</span>
              <button className="lux-button secondary" type="button">{item.action}</button>
            </article>
          ))}
        </div>
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
