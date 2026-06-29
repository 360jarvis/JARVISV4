import { setupSections } from '../lib/settings';
import { StatusBadge } from './ui';

export default function SetupWizard() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section className="lux-card" style={{ padding: 22 }}>
        <p className="kicker">Tenant Onboarding</p>
        <h2 style={{ margin: '8px 0' }}>Setup Checklist</h2>
        <p style={{ color: 'var(--jarvixx-muted)' }}>
          Complete required setup before using Jarvixx in production. These settings will feed bookings, pricing, payments, notifications, portals, dispatch, and AI.
        </p>
      </section>

      <section style={{ display: 'grid', gap: 12 }}>
        {setupSections.map((section) => (
          <article className="lux-card" key={section.key} style={{ padding: 18, display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 12, alignItems: 'center' }}>
            <div>
              <p className="kicker">{section.required ? 'Required' : 'Optional'}</p>
              <h3 style={{ margin: '6px 0' }}>{section.title}</h3>
              <p style={{ margin: 0, color: 'var(--jarvixx-muted)' }}>{section.description}</p>
            </div>
            <StatusBadge>{section.status}</StatusBadge>
            <button className="lux-button secondary">Configure</button>
          </article>
        ))}
      </section>
    </div>
  );
}
