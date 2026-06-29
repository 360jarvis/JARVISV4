import { setupSections } from '../lib/settings';
import { KpiCard, StatusBadge } from './ui';

export default function SettingsCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Sections" value={String(setupSections.length)} detail="Settings categories" />
        <KpiCard label="Required" value="8" detail="Before production use" />
        <KpiCard label="Audit" value="Ready" detail="Changes tracked later" />
        <KpiCard label="Tenant" value="Ready" detail="Workspace settings" />
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <p className="kicker">Settings</p>
        <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
          {setupSections.map((section) => (
            <article key={section.key} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center', padding: 14, border: '1px solid var(--jarvixx-border)', borderRadius: 14 }}>
              <div>
                <strong>{section.title}</strong>
                <p style={{ color: 'var(--jarvixx-muted)', margin: '6px 0 0' }}>{section.description}</p>
              </div>
              <StatusBadge>{section.status}</StatusBadge>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
