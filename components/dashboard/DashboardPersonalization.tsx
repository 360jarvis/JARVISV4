export default function DashboardPersonalization() {
  const roles = ['Owner', 'Manager', 'Dispatcher', 'Quality', 'Finance', 'Growth'];

  return (
    <section className="lux-card" style={{ padding: 18, display: 'grid', gap: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <div>
          <p className="kicker" style={{ margin: 0 }}>Dashboard Personalization</p>
          <h2 style={{ margin: '6px 0 0', fontSize: 18 }}>Role-based workspace foundation</h2>
          <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>
            The dashboard is prepared to adapt by user role, permissions, timezone, language, and tenant settings.
          </p>
        </div>
        <span style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 999, background: 'var(--jarvixx-gold-soft)', padding: '8px 12px', fontSize: 12, fontWeight: 800 }}>
          Foundation
        </span>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {roles.map((role) => (
          <span key={role} style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 999, background: '#fff', padding: '8px 11px', fontSize: 12, fontWeight: 800 }}>
            {role}
          </span>
        ))}
      </div>
    </section>
  );
}
