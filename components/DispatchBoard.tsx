import { demoDispatchCards } from '../lib/operations';
import { formatCurrency } from '../lib/pricing';
import { KpiCard, StatusBadge } from './ui';

export default function DispatchBoard() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Today" value="2" detail="Foundation bookings" />
        <KpiCard label="Unassigned" value="1" detail="Needs dispatch" />
        <KpiCard label="Teams" value="1" detail="On route" />
        <KpiCard label="Capacity" value="68%" detail="Demo utilization" />
        <KpiCard label="Revenue" value="$540" detail="Scheduled today" />
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['Today', 'Tomorrow', 'Week', 'Month', 'Map', 'Route', 'Timeline'].map((view) => <button className="lux-button secondary" key={view}>{view}</button>)}
        </div>
      </section>

      <section style={{ display: 'grid', gap: 14 }}>
        {demoDispatchCards.map((card) => (
          <article className="lux-card" key={card.bookingId} style={{ padding: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr auto', gap: 16, alignItems: 'center' }}>
              <div>
                <p className="kicker">{card.bookingNumber}</p>
                <h3 style={{ margin: '8px 0' }}>{card.customerName}</h3>
                <p style={{ color: 'var(--jarvixx-muted)' }}>{card.address} - {card.phone}</p>
              </div>
              <div>
                <p className="kicker">Service</p>
                <strong>{card.service}</strong>
                <p style={{ color: 'var(--jarvixx-muted)' }}>{card.durationMinutes} minutes</p>
              </div>
              <div>
                <p className="kicker">Schedule</p>
                <strong>{card.arrivalWindow}</strong>
                <p style={{ color: 'var(--jarvixx-muted)' }}>{card.assignedTeam}</p>
              </div>
              <div style={{ display: 'grid', gap: 8, justifyItems: 'end' }}>
                <StatusBadge>{card.status}</StatusBadge>
                <StatusBadge>{card.paymentStatus}</StatusBadge>
                <strong>{formatCurrency(card.priceCents)}</strong>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
