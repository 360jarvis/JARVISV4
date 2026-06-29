import PricingSummary from './PricingSummary';
import { quoteStatuses } from '../lib/quotes';
import { StatusBadge } from './ui';

export default function QuoteBuilder() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section className="lux-card" style={{ padding: 22 }}>
        <p className="kicker">Quote Builder</p>
        <h2 style={{ margin: '8px 0' }}>Create a quote using the shared pricing engine</h2>
        <p style={{ color: 'var(--jarvixx-muted)' }}>
          This foundation screen will preload customer, property, service scope, pricing, expiration, and conversion rules.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <article className="lux-card" style={{ padding: 22 }}>
          <p className="kicker">Customer and Scope</p>
          <div style={{ display: 'grid', gap: 12, marginTop: 12 }}>
            <input aria-label="Customer" placeholder="Search or create customer" style={{ padding: 13, borderRadius: 12, border: '1px solid var(--jarvixx-border)' }} />
            <select aria-label="Service type" style={{ padding: 13, borderRadius: 12, border: '1px solid var(--jarvixx-border)' }}>
              <option>Standard Cleaning</option>
              <option>Deep Cleaning</option>
              <option>Move In Out Cleaning</option>
              <option>Office Cleaning</option>
              <option>Airbnb Turnover</option>
            </select>
            <textarea aria-label="Scope notes" placeholder="Scope notes, add-ons, access details, customer requests" rows={6} style={{ padding: 13, borderRadius: 12, border: '1px solid var(--jarvixx-border)' }} />
          </div>
        </article>

        <article className="lux-card" style={{ padding: 22 }}>
          <p className="kicker">Quote Lifecycle</p>
          <h3>Statuses</h3>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {quoteStatuses.map((status) => <StatusBadge key={status}>{status}</StatusBadge>)}
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
            <button className="lux-button secondary">Save Draft</button>
            <button className="lux-button secondary">Send Quote</button>
            <button className="lux-button">Convert to Booking</button>
          </div>
        </article>
      </section>

      <PricingSummary />
    </div>
  );
}
