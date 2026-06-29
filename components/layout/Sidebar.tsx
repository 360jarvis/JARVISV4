'use client';

import { usePathname } from 'next/navigation';

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

function SidebarBrand({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  return (
    <div
      style={{
        marginBottom: 12,
        padding: collapsed ? 10 : '14px 14px',
        border: '1px solid rgba(216,189,127,0.22)',
        borderRadius: 20,
        background: 'rgba(255,255,255,0.04)',
        boxShadow: '0 18px 50px rgba(0,0,0,0.22)',
        display: 'grid',
        gap: 10,
        justifyItems: collapsed ? 'center' : 'stretch'
      }}
    >
      <div style={{ display: 'flex', justifyContent: collapsed ? 'center' : 'space-between', alignItems: 'center', gap: 12 }}>
        {!collapsed ? (
          <div>
            <div style={{ color: 'var(--jarvixx-gold)', letterSpacing: '0.2em', fontSize: 10.5, fontWeight: 700 }}>JARVIXX</div>
            <div style={{ fontSize: 20, marginTop: 6, lineHeight: 1 }}>Command Center</div>
          </div>
        ) : null}
        <div aria-hidden="true" style={{ width: 36, height: 36, borderRadius: 14, border: '1px solid rgba(216,189,127,0.35)', background: 'rgba(216,189,127,0.12)', display: 'grid', placeItems: 'center', color: 'var(--jarvixx-gold)', fontSize: 12, letterSpacing: '0.08em' }}>
          JX
        </div>
      </div>
      {!collapsed ? <div style={{ color: '#cfc2a9', fontSize: 11.5, lineHeight: 1.35 }}>Enterprise clean build</div> : null}
      <button type="button" onClick={onToggle} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} style={{ minHeight: 30, borderRadius: 999, border: '1px solid rgba(216,189,127,0.22)', background: 'rgba(216,189,127,0.08)', color: '#e9dcc1', cursor: 'pointer', fontSize: 11, width: collapsed ? 36 : '100%' }}>
        {collapsed ? '>' : 'Collapse'}
      </button>
    </div>
  );
}

function isActivePath(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === '/app') return pathname === '/app';
  return pathname === href || pathname.startsWith(href + '/');
}

function SidebarItem({ item, collapsed, active }: { item: NavItem; collapsed: boolean; active: boolean }) {
  return (
    <a href={item.href} title={collapsed ? item.label : undefined} aria-current={active ? 'page' : undefined} style={{ display: 'grid', gridTemplateColumns: collapsed ? '1fr' : '32px 1fr', gap: 10, alignItems: 'center', justifyItems: collapsed ? 'center' : 'stretch', padding: collapsed ? '8px 0' : '8px 8px', borderRadius: 15, color: active ? '#fff8e8' : '#f8f3e8', border: active ? '1px solid rgba(216,189,127,0.34)' : '1px solid transparent', borderLeft: active ? '3px solid var(--jarvixx-gold)' : '1px solid transparent', background: active ? 'rgba(216,189,127,0.12)' : 'transparent', boxShadow: active ? '0 10px 30px rgba(216,189,127,0.08)' : 'none', transition: 'background 160ms ease, border-color 160ms ease, transform 160ms ease' }}>
      <span aria-hidden="true" style={{ width: 32, height: 32, borderRadius: 12, display: 'grid', placeItems: 'center', background: active ? 'rgba(216,189,127,0.18)' : 'rgba(255,255,255,0.06)', border: active ? '1px solid rgba(216,189,127,0.34)' : '1px solid rgba(255,255,255,0.08)', color: 'var(--jarvixx-gold)', fontSize: 10, letterSpacing: '0.08em' }}>
        {item.initials}
      </span>
      {!collapsed ? (
        <span style={{ minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 13, lineHeight: 1.15, fontWeight: active ? 700 : 600 }}>{item.label}</span>
          <span style={{ display: 'block', color: active ? '#d9caad' : '#b9ae98', fontSize: 10.8, marginTop: 2, lineHeight: 1.2 }}>{item.description}</span>
        </span>
      ) : null}
    </a>
  );
}

function SidebarSection({ group, collapsed, pathname }: { group: NavGroup; collapsed: boolean; pathname: string | null }) {
  return (
    <section aria-label={group.title}>
      {!collapsed ? <div style={{ color: '#b7aa92', fontSize: 10.2, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 8px 6px' }}>{group.title}</div> : null}
      <div style={{ display: 'grid', gap: 3 }}>
        {group.items.map((item) => (
          <SidebarItem key={item.href} item={item} collapsed={collapsed} active={isActivePath(pathname, item.href)} />
        ))}
      </div>
    </section>
  );
}

export default function Sidebar({ collapsed, onToggle }: { collapsed: boolean; onToggle: () => void }) {
  const pathname = usePathname();

  return (
    <aside aria-label="Jarvixx enterprise navigation" style={{ background: 'linear-gradient(180deg, #090806 0%, #11100d 54%, #090806 100%)', color: 'white', padding: collapsed ? '14px 12px 24px' : '18px 18px 28px', borderRight: '1px solid rgba(216,189,127,0.24)', minHeight: '100vh', alignSelf: 'start', transition: 'padding 220ms ease' }}>
      <SidebarBrand collapsed={collapsed} onToggle={onToggle} />
      <nav style={{ display: 'grid', gap: collapsed ? 10 : 14 }}>
        {navGroups.map((group) => (
          <SidebarSection key={group.title} group={group} collapsed={collapsed} pathname={pathname} />
        ))}
      </nav>
    </aside>
  );
}
