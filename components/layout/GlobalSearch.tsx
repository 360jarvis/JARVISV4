export default function GlobalSearch() {
  return (
    <form role="search" aria-label="Global Jarvixx search" style={{ flex: 1, maxWidth: 520 }}>
      <label htmlFor="global-search" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
        Search Jarvixx
      </label>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '18px 1fr auto',
          alignItems: 'center',
          gap: 10,
          minHeight: 44,
          padding: '0 12px',
          borderRadius: 999,
          border: '1px solid var(--jarvixx-border)',
          background: '#fff',
          boxShadow: '0 10px 30px rgba(23,19,13,0.04)'
        }}
      >
        <span aria-hidden="true" style={{ color: 'var(--jarvixx-muted)', fontSize: 15 }}>⌕</span>
        <input
          id="global-search"
          placeholder="Search customers, bookings, quotes, reports..."
          disabled
          style={{ border: 0, outline: 0, background: 'transparent', color: 'var(--jarvixx-muted)', minWidth: 0 }}
        />
        <span style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 999, padding: '4px 8px', color: 'var(--jarvixx-muted)', fontSize: 11 }}>UI</span>
      </div>
    </form>
  );
}
