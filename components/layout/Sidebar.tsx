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

function SidebarBrand() {
  return (
    <div
      style={{
        marginBottom: 14,
        padding: '16px 14px',
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
            width: 36,
            height: 36,
            borderRadius: 14,
            border: '1px solid rgba(216,189,127,0.35)',
            background: 'rgba(216,189,127,0.12)',
            display: 'grid',
            placeItems: 'center',
            color: 'var(--jarvixx-gold)',
            fontSize: 12,
            letterSpacing: '0.08em'
          }}
        >
          JX
        </div>
      </div>
      <div style={{ color: '#cfc2a9', fontSize: 12, marginTop: 10, lineHeight: 1.35 }}>Enterprise clean build</div>
      <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8, color: '#e9dcc1', fontSize: 12 }}>
        <span style={{ width: 8, height: 8, borderRadius: 99, background: 'var(--jarvixx-gold)', display: 'inline-block' }} />
        Stable foundation active
      </div>
    </div>
  );
}

function SidebarItem({ item }: { item: NavItem }) {
  return (
    <a
      href={item.href}
      style={{
        display: 'grid',
        gridTemplateColumns: '32px 1fr',
        gap: 10,
        alignItems: 'center',
        padding: '8px 8px',
        borderRadius: 15,
        color: '#f8f3e8',
        border: '1px solid transparent',
        transition: 'background 160ms ease, border-color 160ms ease, transform 160ms ease'
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 32,
          height: 32,
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
        <span style={{ display: 'block', fontSize: 13, lineHeight: 1.15 }}>{item.label}</span>
        <span style={{ display: 'block', color: '#b9ae98', fontSize: 11, marginTop: 2, lineHeight: 1.2 }}>{item.description}</span>
      </span>
    </a>
  );
}

function SidebarSection({ group }: { group: NavGroup }) {
  return (
    <section aria-label={group.title}>
      <div style={{ color: '#b7aa92', fontSize: 10.5, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 8px 6px' }}>{group.title}</div>
      <div style={{ display: 'grid', gap: 3 }}>
        {group.items.map((item) => (
          <SidebarItem key={item.href} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function Sidebar() {
  return (
    <aside
      aria-label="Jarvixx enterprise navigation"
      style={{
        background: 'linear-gradient(180deg, #090806 0%, #11100d 54%, #090806 100%)',
        color: 'white',
        padding: '18px 18px 28px',
        borderRight: '1px solid rgba(216,189,127,0.24)',
        minHeight: '100vh',
        alignSelf: 'start'
      }}
    >
      <SidebarBrand />
      <nav style={{ display: 'grid', gap: 14 }}>
        {navGroups.map((group) => (
          <SidebarSection key={group.title} group={group} />
        ))}
      </nav>
    </aside>
  );
}
