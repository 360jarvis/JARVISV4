const navGroups = [
  {
    title: 'Core',
    items: [
      ['Dashboard', '/app'],
      ['Jarvixx AI', '/app/jarvixx-ai'],
      ['Quality Command Center', '/app/quality']
    ]
  },
  {
    title: 'Customers',
    items: [['Customer Command Center', '/app/customers']]
  },
  {
    title: 'Operations',
    items: [
      ['Booking Command Center', '/app/bookings'],
      ['Smart Booking Terminal', '/app/bookings/new'],
      ['Quotes', '/app/quotes'],
      ['Dispatch Command Center', '/app/dispatch'],
      ['Workforce Command Center', '/app/workforce'],
      ['Internal Chat', '/app/internal-chat']
    ]
  },
  {
    title: 'Financial',
    items: [
      ['Financial Command Center', '/app/financial'],
      ['Payment Command Center', '/app/payments'],
      ['Reports', '/app/reports']
    ]
  },
  {
    title: 'Growth',
    items: [['Growth Command Center', '/app/growth']]
  },
  {
    title: 'Tools',
    items: [
      ['Inventory', '/app/inventory'],
      ['Fleet', '/app/fleet']
    ]
  },
  {
    title: 'Admin',
    items: [
      ['Settings', '/app/settings'],
      ['Setup', '/app/setup'],
      ['Billing', '/app/billing'],
      ['Support', '/app/support']
    ]
  }
];

export default function AppShell(props: { title: string; subtitle: string; children?: any }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '292px 1fr', minHeight: '100vh', background: 'var(--jarvixx-ivory)' }}>
      <aside style={{ background: 'var(--jarvixx-black)', color: 'white', padding: 24, borderRight: '1px solid rgba(216,189,127,0.22)' }}>
        <div style={{ marginBottom: 22, paddingBottom: 18, borderBottom: '1px solid rgba(216,189,127,0.22)' }}>
          <div style={{ color: 'var(--jarvixx-gold)', letterSpacing: '0.18em', fontSize: 12 }}>JARVIXX</div>
          <div style={{ fontSize: 22, marginTop: 8 }}>Command Center</div>
          <div style={{ color: '#cfc2a9', fontSize: 12, marginTop: 8 }}>Enterprise clean build</div>
        </div>
        <nav style={{ display: 'grid', gap: 20 }}>
          {navGroups.map((group) => (
            <div key={group.title}>
              <div style={{ color: '#b7aa92', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 8 }}>{group.title}</div>
              <div style={{ display: 'grid', gap: 6 }}>
                {group.items.map(([label, href]) => (
                  <a key={href} href={href} style={{ display: 'block', padding: '9px 10px', borderRadius: 12, color: '#f8f3e8' }}>{label}</a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
      <main style={{ padding: 28, minWidth: 0 }}>
        <header className="lux-card" style={{ padding: 24, marginBottom: 24, display: 'flex', justifyContent: 'space-between', gap: 18, alignItems: 'center' }}>
          <div>
            <p className="kicker">Jarvixx 2.0 Clean Build</p>
            <h1 style={{ margin: '8px 0', fontSize: 34 }}>{props.title}</h1>
            <p style={{ margin: 0, color: 'var(--jarvixx-muted)' }}>{props.subtitle}</p>
          </div>
          <a className="lux-button secondary" href="/app/setup">Setup</a>
        </header>
        {props.children}
      </main>
    </div>
  );
}
