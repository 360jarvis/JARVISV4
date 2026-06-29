import { demoPaymentIssues } from '../lib/financial';
import { formatCurrency } from '../lib/pricing';
import { KpiCard, StatusBadge } from './ui';

export default function PaymentCommandCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Open Issues" value="2" detail="Foundation payment queue" />
        <KpiCard label="Failed" value="$175" detail="Needs action" />
        <KpiCard label="Active Holds" value="$320" detail="Pre-service protection" />
        <KpiCard label="Processor" value="Ready" detail="Stripe or Square per tenant" />
        <KpiCard label="Alerts" value="2" detail="Timeline-ready events" />
      </section>

      <section className="lux-card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead style={{ background: 'var(--jarvixx-gold-soft)' }}>
            <tr>
              {['Payment', 'Customer', 'Booking', 'Processor', 'State', 'Amount', 'Reason', 'Actions'].map((header) => (
                <th key={header} style={{ textAlign: 'left', padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {demoPaymentIssues.map((payment) => (
              <tr key={payment.id}>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><strong>{payment.id}</strong></td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{payment.customerId}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{payment.bookingId}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{payment.processor}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><StatusBadge>{payment.state}</StatusBadge></td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{formatCurrency(payment.amountCents)}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{payment.failureReason || 'No issue'}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>
                  <button className="lux-button secondary">Card Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
