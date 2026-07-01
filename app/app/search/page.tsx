import AppShell from '../../../components/AppShell';

const modules = [
  ['Customers', '/app/customers'],
  ['Bookings', '/app/bookings'],
  ['Quotes', '/app/quotes'],
  ['Reports', '/app/reports'],
  ['Payments', '/app/payments'],
  ['Dispatch', '/app/dispatch'],
  ['Workforce', '/app/workforce'],
  ['Quality', '/app/quality'],
  ['Growth', '/app/growth']
];

export default function SearchPage(props: { searchParams?: { q?: string } }) {
  const query = (props.searchParams?.q || '').trim();
  const suffix = query ? `?q=${encodeURIComponent(query)}` : '';

  return (
    <AppShell title="Search" subtitle="Open the right Jarvixx module for this search.">
      <section className="lux-card" style={{ padding: 18, display: 'grid', gap: 16 }}>
        <form action="/app/search" method="get" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 10 }}>
          <input name="q" defaultValue={query} placeholder="Search customers, bookings, quotes, reports..." style={{ minWidth: 0, height: 42, border: '1px solid var(--jarvixx-border)', borderRadius: 12, padding: '0 12px' }} />
          <button type="submit" className="lux-button" style={{ borderRadius: 12, fontWeight: 800 }}>Search</button>
        </form>
        <div style={{ color: 'var(--jarvixx-muted)', fontSize: 13 }}>
          {query ? `Search "${query}" in a connected command center.` : 'Choose a command center to search.'}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 10 }}>
          {modules.map(([label, href]) => (
            <a key={href} href={`${href}${suffix}`} className="lux-card" style={{ padding: 14, fontWeight: 800 }}>
              {label}
            </a>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
