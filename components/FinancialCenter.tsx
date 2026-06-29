import { demoPaymentIssues } from '../lib/financial';
import { formatCurrency } from '../lib/pricing';
import { KpiCard, StatusBadge } from './ui';

export default function FinancialCenter() {
  const openAmount = demoPaymentIssues.reduce((sum, item) => sum + item.amountCents, 0);

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Revenue" value="$540" detail="Demo scheduled revenue" />
        <KpiCard label="Open Items" value={String(demoPaymentIssues.length)} detail="Payments needing visibility" />
        <KpiCard label="Open Amount" value={formatCurrency(openAmount)} detail="Payment queue total" />
        <KpiCard label="Refunds" value="$0" detail="No demo refunds" />
        <KpiCard label="Reports" value="Ready" detail="QuickBooks-style planned" />
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <p className="kicker">Financial Source of Truth</p>
        <h2 style={{ margin: '8px 0' }}>Financial Command Center</h2>
        <p style={{ color: 'var(--jarvixx-muted)' }}>
          Revenue, balances, refunds, credits, payroll costs, inventory costs, and quality financial impact will connect here.
        </p>
      </section>

      <section className="lux-card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead style={{ background: 'var(--jarvixx-gold-soft)' }}>
            <tr>
              <th style={{ textAlign: 'left', padding: 14 }}>Reference</th>
              <th style={{ textAlign: 'left', padding: 14 }}>Customer</th>
              <th style={{ textAlign: 'left', padding: 14 }}>Booking</th>
              <th style={{ textAlign: 'left', padding: 14 }}>State</th>
              <th style={{ textAlign: 'left', padding: 14 }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {demoPaymentIssues.map((item) => (
              <tr key={item.id}>
                <td style={{ padding: 14, borderTop: '1px solid var(--jarvixx-border)' }}><strong>{item.id}</strong></td>
                <td style={{ padding: 14, borderTop: '1px solid var(--jarvixx-border)' }}>{item.customerId}</td>
                <td style={{ padding: 14, borderTop: '1px solid var(--jarvixx-border)' }}>{item.bookingId}</td>
                <td style={{ padding: 14, borderTop: '1px solid var(--jarvixx-border)' }}><StatusBadge>{item.state}</StatusBadge></td>
                <td style={{ padding: 14, borderTop: '1px solid var(--jarvixx-border)' }}>{formatCurrency(item.amountCents)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
