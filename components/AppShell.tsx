import type { ReactNode } from 'react';

type NavItem = {
  label: string;
  href: string;
  initials: string;
  description: string;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    title: 'Core',
    items: [
      { label: 'Dashboard', href: '/app', initials: 'DB', description: 'Operating home' },
      { label: 'Jarvixx AI', href: '/app/jarvixx-ai', initials: 'AI', description: 'Business brain' },
      { label: 'Quality Command Center', href: '/app/quality', initials: 'QC', description: 'Inspections and claims' }
    ]
  },
  {
    title: 'Customers',
    items: [
      { label: 'Customer Command Center', href: '/app/customers', initials: 'CC', description: 'Profiles and timelines' }
    ]
  },
  {
    title: 'Operations',
    items: [
      { label: 'Booking Command Center', href: '/app/bookings', initials: 'BC', description: 'Bookings pipeline' },
      { label: 'Smart Booking Terminal', href: '/app/bookings/new', initials: 'SB', description: 'Create booking' },
      { label: 'Quotes', href: '/app/quotes', initials: 'QT', description: 'Active estimates' },
      { label: 'Dispatch Command Center', href: '/app/dispatch', initials: 'DC', description: 'Routes and capacity' },
      { label: 'Workforce Command Center', href: '/app/workforce', initials: 'WC', description: 'Teams and payroll' },
      { label: 'Internal Chat', href: '/app/internal-chat', initials: 'IC', description: 'Team communication' }
    ]
  },
  {
    title: 'Financial',
    items: [
      { label: 'Financial Command Center', href: '/app/financial', initials: 'FC', description: 'Revenue and margins' },
      { label: 'Payment Command Center', href: '/app/payments', initials: 'PC', description: 'Cards and balances' },
      { label: 'Reports', href: '/app/reports', initials: 'RP', description: 'Exports and insights' }
    ]
  },
  {
    title: 'Growth',
    items: [
      { label: 'Growth Command Center', href: '/app/growth', initials: 'GC', description: 'Campaigns and leads' }
    ]
  },
  {
    title: 'Tools',
    items: [
      { label: 'Inventory', href: '/app/inventory', initials: 'IN', description: 'Supplies and assets' },
      { label: 'Fleet', href: '/app/fleet', initials: 'FL', description: 'Vehicles and service' }
    ]
  },
  {
    title: 'Admin',
    items: [
      { label: 'Settings', href: '/app/settings', initials: 'ST', description: 'Company controls' },
      { label: 'Setup', href: '/app/setup', initials: 'SU', description: 'Configuration' },
      { label: 'Billing', href: '/app/billing', initials: 'BL', description: 'Plan and invoices' },
      { label: 'Support', href: '/app/support', initials: 'SP', description: 'Help center' }
    ]
  }
];

export default function AppShell(props: { title: string; subtitle: string; children?: ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '304px 1fr', minHeight: '100vh', background: 'var(--jarvixx-ivory)' }}>
      <aside
        aria-label="Jarvixx enterprise navigation"
        style={{
          background: 'linear-gradient(180deg, #090806 0%, #11100d 54%, #090806 100%)',
          color: 'white',
          padding: '22px 18px',
          borderRight: '1px solid rgba(216,189,127,0.24)',
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflowY: 'auto'
        }}
      >
        <div
          style={{
            marginBottom: 18,
            padding: '18px 16px',
            border: '1px solid rgba(216,189,127,0.22)',
            borderRadius: 22,
            background: 'rgba(255,255,255,0.04)',
            boxShadow: '0 18px 50px rgba(0,0,0,0.22)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
            <div>
              <div style={{ color: 'var(--jarvixx-gold)', letterSpacing: '0.2em', fontSize: 11, fontWeight: 700 }}>JARVIXX</div>
              <div style={{ fontSize: 22, marginTop: 8, lineHeight: 1 }}>Command Center</div>
            </div>
            <div
              aria-hidden="true"
              style={{
                width: 38,
                height: 38,
                borderRadius: 14,
                border: '1px solid rgba(216,189,127,0.35)',
                background: 'rgba(216,189,127,0.12)',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--jarvixx-gold)',
                fontSize: 13,
                letterSpacing: '0.08em'
              }}
            >
              JX
            </div>
          </div>
          <div style={{ color: '#cfc2a9', fontSize: 12, marginTop: 12, lineHeight: 1.45 }}>Enterprise clean build</div>
          <div
            style={{
              marginTop: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: '#e9dcc1',
              fontSize: 12
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--jarvixx-gold)', display: 'inline-block' }} />
            Stable foundation active
          </div>
        </div>

        <nav style={{ display: 'grid', gap: 18 }}>
          {navGroups.map((group) => (
            <section key={group.title} aria-label={group.title}>
              <div style={{ color: '#b7aa92', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', margin: '0 8px 8px' }}>{group.title}</div>
              <div style={{ display: 'grid', gap: 5 }}>
                {group.items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '34px 1fr',
                      gap: 10,
                      alignItems: 'center',
                      padding: '10px 10px',
                      borderRadius: 16,
                      color: '#f8f3e8',
                      border: '1px solid transparent',
                      transition: 'background 160ms ease, border-color 160ms ease, transform 160ms ease'
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 12,
                        display: 'grid',
                        placeItems: 'center',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'var(--jarvixx-gold)',
                        fontSize: 10,
                        letterSpacing: '0.08em'
                      }}
                    >
                      {item.initials}
                    </span>
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: 'block', fontSize: 13.5, lineHeight: 1.2 }}>{item.label}</span>
                      <span style={{ display: 'block', color: '#b9ae98', fontSize: 11.5, marginTop: 3, lineHeight: 1.25 }}>{item.description}</span>
                    </span>
                  </a>
                ))}
              </div>
            </section>
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
