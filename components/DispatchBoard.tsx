import { DEFAULT_ARRIVAL_WINDOWS } from './scheduling/ArrivalWindows';
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
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <p className="kicker">Dispatch Standard</p>
            <h2 style={{ margin: '6px 0 0', fontSize: 22 }}>Arrival Window Lanes</h2>
            <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>Residential work is organized by arrival window, not fixed appointment time.</p>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['Today', 'Tomorrow', 'Week', 'Month', 'Map', 'Route'].map((view) => <button className="lux-button secondary" key={view}>{view}</button>)}
          </div>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(260px, 1fr))', gap: 14, overflowX: 'auto' }}>
        {DEFAULT_ARRIVAL_WINDOWS.map((window) => {
          const cards = demoDispatchCards.filter((card) => card.arrivalWindow === window.label);
          return (
            <article key={window.id} className="lux-card" style={{ minHeight: 360, padding: 14, display: 'grid', alignContent: 'start', gap: 12 }}>
              <div style={{ borderBottom: '1px solid var(--jarvixx-border)', paddingBottom: 12 }}>
                <p className="kicker">Arrival Window</p>
                <h3 style={{ margin: '6px 0 0', fontSize: 18 }}>{window.label}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 8, marginTop: 12 }}>
                  <MiniMetric label="Scheduled" value={window.status.scheduled} />
                  <MiniMetric label="Assigned" value={window.status.assigned} />
                  <MiniMetric label="Late" value={window.status.runningLate} />
                </div>
              </div>

              {cards.length > 0 ? cards.map((card) => (
                <div key={card.bookingId} style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 16, padding: 12, background: '#fff', display: 'grid', gap: 10 }}>
                  <div>
                    <p className="kicker">{card.bookingNumber}</p>
                    <strong style={{ display: 'block', marginTop: 5 }}>{card.customerName}</strong>
                    <p style={{ margin: '5px 0 0', color: 'var(--jarvixx-muted)', fontSize: 12 }}>{card.address}</p>
                  </div>
                  <div style={{ display: 'grid', gap: 6, fontSize: 12 }}>
                    <div><strong>Service:</strong> {card.service}</div>
                    <div><strong>Duration:</strong> {card.durationMinutes} minutes</div>
                    <div><strong>Team:</strong> {card.assignedTeam}</div>
                    <div><strong>Total:</strong> {formatCurrency(card.priceCents)}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    <StatusBadge>{card.status}</StatusBadge>
                    <StatusBadge>{card.paymentStatus}</StatusBadge>
                  </div>
                </div>
              )) : (
                <div style={{ border: '1px dashed var(--jarvixx-border)', borderRadius: 16, padding: 18, color: 'var(--jarvixx-muted)', textAlign: 'center', background: '#fff' }}>
                  No demo jobs in this arrival window yet.
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: number }) {
  return (
    <div style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 12, padding: 9, background: '#fbfaf7' }}>
      <div style={{ color: 'var(--jarvixx-muted)', fontSize: 10 }}>{label}</div>
      <div style={{ marginTop: 4, fontSize: 16, fontWeight: 900 }}>{value}</div>
    </div>
  );
}
