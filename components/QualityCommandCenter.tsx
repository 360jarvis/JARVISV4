import { demoQualityRecords } from '../lib/quality';
import { formatCurrency } from '../lib/pricing';
import { KpiCard, StatusBadge } from './ui';

export default function QualityCommandCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Open Quality" value="2" detail="Active records" />
        <KpiCard label="Complaints" value="1" detail="Needs review" />
        <KpiCard label="Inspections" value="1" detail="Assigned" />
        <KpiCard label="Re-cleans" value="0" detail="Connected workflow" />
        <KpiCard label="Risk" value="High" detail="Demo quality signal" />
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="lux-button">New Complaint</button>
          <button className="lux-button secondary">Schedule Re-clean</button>
          <button className="lux-button secondary">Assign Inspection</button>
          <button className="lux-button secondary">Damage Claim</button>
        </div>
      </section>

      <section className="lux-card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead style={{ background: 'var(--jarvixx-gold-soft)' }}>
            <tr>
              {['Record', 'Type', 'Customer', 'Booking', 'Severity', 'Status', 'Impact', 'Actions'].map((header) => (
                <th key={header} style={{ textAlign: 'left', padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {demoQualityRecords.map((record) => (
              <tr key={record.id}>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>
                  <strong>{record.recordNumber}</strong>
                  <div style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{record.title}</div>
                </td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{record.type}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{record.customerId}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{record.bookingId || 'Not linked'}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><StatusBadge>{record.severity}</StatusBadge></td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><StatusBadge>{record.status}</StatusBadge></td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{formatCurrency(record.financialImpactCents || 0)}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>
                  <button className="lux-button secondary">Open</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
