import { calculateFoundationPrice, formatCurrency, type PricingInput } from '../lib/pricing';

const foundationInput: PricingInput = {
  tenantId: 'tenant-demo',
  source: 'Smart Booking Terminal',
  serviceCategory: 'Residential',
  serviceType: 'Deep Cleaning',
  zip: '77007',
  marketType: 'Premium',
  bedrooms: 3,
  bathrooms: 2,
  squareFeet: 1750,
  condition: 'Average',
  extras: ['Inside oven'],
  addOns: [],
  frequency: 'Bi-Weekly',
  teamSize: 2,
  estimatedDurationMinutes: 255,
  taxable: true
};

export default function PricingSummary() {
  const result = calculateFoundationPrice(foundationInput);

  return (
    <section className="lux-card" style={{ padding: 22 }}>
      <p className="kicker">Shared Pricing Engine</p>
      <h2 style={{ margin: '8px 0' }}>Foundation Pricing Summary</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 12, marginTop: 16 }}>
        <div><p className="kicker">Low</p><strong>{formatCurrency(result.lowCents)}</strong></div>
        <div><p className="kicker">Recommended</p><strong>{formatCurrency(result.recommendedCents)}</strong></div>
        <div><p className="kicker">Premium</p><strong>{formatCurrency(result.premiumCents)}</strong></div>
        <div><p className="kicker">Final Total</p><strong>{formatCurrency(result.finalTotalCents)}</strong></div>
      </div>
      <p style={{ color: 'var(--jarvixx-muted)', marginTop: 16 }}>{result.customerSummary}</p>
    </section>
  );
}
