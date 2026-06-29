import { demoGrowthPrograms, demoLeads } from '../lib/growth';
import { formatCurrency } from '../lib/pricing';
import { KpiCard, StatusBadge } from './ui';

export default function GrowthCommandCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="New Leads" value="2" detail="Foundation pipeline" />
        <KpiCard label="Quoted" value="1" detail="Needs follow up" />
        <KpiCard label="Booked" value="3" detail="From active programs" />
        <KpiCard label="Revenue" value="$840" detail="Attributed demo revenue" />
        <KpiCard label="Programs" value="1" detail="Running" />
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="lux-button">New Lead</button>
          <button className="lux-button secondary">Quote Follow Up</button>
          <button className="lux-button secondary">Win Back</button>
          <button className="lux-button secondary">Review Request</button>
          <button className="lux-button secondary">Referral Program</button>
        </div>
      </section>

      <section className="lux-card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead style={{ background: 'var(--jarvixx-gold-soft)' }}>
            <tr>
              {['Lead', 'Source', 'Status', 'Phone', 'Email', 'Value', 'Notes', 'Actions'].map((header) => (
                <th key={header} style={{ textAlign: 'left', padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {demoLeads.map((lead) => (
              <tr key={lead.id}>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>
                  <strong>{lead.name}</strong>
                  <div style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{lead.leadNumber}</div>
                </td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{lead.source}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><StatusBadge>{lead.status}</StatusBadge></td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{lead.phone}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{lead.email}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{formatCurrency(lead.estimatedValueCents || 0)}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{lead.notes}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><button className="lux-button secondary">Open</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <p className="kicker">Growth Programs</p>
        {demoGrowthPrograms.map((program) => (
          <div key={program.id} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: 14, alignItems: 'center', padding: '12px 0', borderTop: '1px solid var(--jarvixx-border)' }}>
            <div>
              <strong>{program.name}</strong>
              <div style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{program.audience}</div>
            </div>
            <StatusBadge>{program.status}</StatusBadge>
            <span>{program.bookedCount} booked</span>
            <strong>{formatCurrency(program.revenueCents)}</strong>
          </div>
        ))}
      </section>
    </div>
  );
}
