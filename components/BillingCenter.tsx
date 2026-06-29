import { KpiCard, StatusBadge } from './ui';

const plans = [
  { name: 'Starter', price: '$97/mo', detail: 'Core CRM and booking foundation' },
  { name: 'Growth', price: '$197/mo', detail: 'Growth tools and automation' },
  { name: 'Premium', price: '$397/mo', detail: 'Advanced operations and AI' }
];

export default function BillingCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Plan" value="Trial" detail="14 day trial foundation" />
        <KpiCard label="Billing" value="Ready" detail="Stripe billing later" />
        <KpiCard label="Access" value="Active" detail="Lock rules planned" />
        <KpiCard label="Invoices" value="0" detail="No demo invoices" />
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <p className="kicker">Plans</p>
        <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
          {plans.map((plan) => (
            <article key={plan.name} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center', padding: 14, border: '1px solid var(--jarvixx-border)', borderRadius: 14 }}>
              <div>
                <strong>{plan.name}</strong>
                <p style={{ color: 'var(--jarvixx-muted)', margin: '6px 0 0' }}>{plan.detail}</p>
              </div>
              <StatusBadge>{plan.price}</StatusBadge>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
