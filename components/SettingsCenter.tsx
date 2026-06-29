import { DEFAULT_ARRIVAL_WINDOWS } from './scheduling/ArrivalWindows';
import { setupSections } from '../lib/settings';
import { KpiCard, StatusBadge } from './ui';

export default function SettingsCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Sections" value={String(setupSections.length)} detail="Settings categories" />
        <KpiCard label="Required" value="8" detail="Before production use" />
        <KpiCard label="Scheduling" value="Windows" detail="Default residential model" />
        <KpiCard label="Tenant" value="Ready" detail="Workspace settings" />
      </section>

      <section className="lux-card" style={{ padding: 20, display: 'grid', gap: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 14, alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div>
            <p className="kicker">Scheduling Settings</p>
            <h2 style={{ margin: '8px 0 8px', fontSize: 24, letterSpacing: '-0.035em' }}>Arrival windows are the default scheduling model.</h2>
            <p style={{ margin: 0, color: 'var(--jarvixx-muted)', maxWidth: 820, lineHeight: 1.55 }}>
              Residential cleaning should use arrival windows by default. Exact appointment times should stay optional for commercial work, special customers, or tenant-approved exceptions.
            </p>
          </div>
          <StatusBadge>UI Foundation</StatusBadge>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 12 }}>
          {DEFAULT_ARRIVAL_WINDOWS.map((window) => (
            <div key={window.id} style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 18, padding: 16, background: '#fff', boxShadow: '0 12px 30px rgba(23,19,13,0.035)' }}>
              <div style={{ color: 'var(--jarvixx-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>Default Window</div>
              <div style={{ marginTop: 8, fontSize: 18, fontWeight: 900, letterSpacing: '-0.02em' }}>{window.label}</div>
              <div style={{ marginTop: 10, color: 'var(--jarvixx-muted)', fontSize: 12 }}>Tenant-customizable later</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 14, alignItems: 'center', border: '1px solid var(--jarvixx-border)', borderRadius: 18, padding: 16, background: '#fbfaf7' }}>
          <div>
            <strong>Exact Appointment Scheduling</strong>
            <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>
              Disabled by default. When enabled later, booking forms can show an optional exact time in addition to the arrival window.
            </p>
          </div>
          <button className="lux-button secondary" type="button">Disabled</button>
        </div>
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
