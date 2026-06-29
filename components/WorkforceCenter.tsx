import { KpiCard, StatusBadge } from './ui';

const workers = [
  { id: 'EMP-101', name: 'Sofia Martinez', type: 'Employee', role: 'Team Leader', skills: ['Deep Cleaning', 'Move Out', 'Team Leader'], status: 'Active' },
  { id: 'EMP-102', name: 'Lina Perez', type: 'Employee', role: 'Cleaner', skills: ['Standard Cleaning', 'Airbnb'], status: 'Active' },
  { id: 'CON-201', name: 'Team Gold', type: 'Provider', role: 'Crew', skills: ['Deep Cleaning', 'Post Construction'], status: 'Active' }
];

export default function WorkforceCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Workers" value="3" detail="Foundation records" />
        <KpiCard label="Active" value="3" detail="Available workforce" />
        <KpiCard label="Teams" value="1" detail="Team builder ready" />
        <KpiCard label="Documents" value="0" detail="Connect document engine" />
        <KpiCard label="Payroll" value="Ready" detail="Foundation profile layer" />
      </section>

      <section className="lux-card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead style={{ background: 'var(--jarvixx-gold-soft)' }}>
            <tr>
              {['Worker', 'Type', 'Role', 'Skills', 'Status', 'Actions'].map((header) => (
                <th key={header} style={{ textAlign: 'left', padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {workers.map((worker) => (
              <tr key={worker.id}>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>
                  <strong>{worker.name}</strong>
                  <div style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{worker.id}</div>
                </td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{worker.type}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{worker.role}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{worker.skills.join(', ')}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><StatusBadge>{worker.status}</StatusBadge></td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><button className="lux-button secondary">View Profile</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
