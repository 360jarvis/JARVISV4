import { KpiCard, StatusBadge } from './ui';

const supportItems = [
  { title: 'Help Requests', detail: 'Workspace help and setup assistance.', status: 'Ready' },
  { title: 'Guides', detail: 'Setup guides and workflow instructions.', status: 'Planned' },
  { title: 'System Notices', detail: 'Important platform notices.', status: 'Ready' }
];

export default function SupportCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Requests" value="0" detail="Foundation queue" />
        <KpiCard label="Guides" value="Planned" detail="Knowledge base later" />
        <KpiCard label="Notices" value="Ready" detail="System messages" />
        <KpiCard label="Status" value="Ready" detail="Support foundation" />
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <p className="kicker">Support</p>
        <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
          {supportItems.map((item) => (
            <article key={item.title} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center', padding: 14, border: '1px solid var(--jarvixx-border)', borderRadius: 14 }}>
              <div>
                <strong>{item.title}</strong>
                <p style={{ color: 'var(--jarvixx-muted)', margin: '6px 0 0' }}>{item.detail}</p>
              </div>
              <StatusBadge>{item.status}</StatusBadge>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
