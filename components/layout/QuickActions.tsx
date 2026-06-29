const actions = ['Booking', 'Customer', 'Quote'];

export default function QuickActions() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <a className="lux-button" href="/app/bookings/new" style={{ minHeight: 44, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0 16px' }}>
        <span aria-hidden="true">+</span>
        New
      </a>
      <div aria-label="Quick action preview" style={{ display: 'none' }}>
        {actions.join(', ')}
      </div>
    </div>
  );
}
