export default function CompanySwitcher() {
  return (
    <button
      type="button"
      aria-label="Switch company"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        minHeight: 44,
        padding: '0 12px',
        borderRadius: 999,
        border: '1px solid var(--jarvixx-border)',
        background: '#fff',
        color: 'var(--jarvixx-ink)',
        cursor: 'pointer'
      }}
    >
      <span aria-hidden="true" style={{ width: 24, height: 24, borderRadius: 9, display: 'grid', placeItems: 'center', background: 'var(--jarvixx-gold-soft)', color: 'var(--jarvixx-ink)', fontSize: 10, fontWeight: 700 }}>CP</span>
      <span style={{ fontSize: 13 }}>Camili Pro</span>
      <span aria-hidden="true" style={{ color: 'var(--jarvixx-muted)' }}>⌄</span>
    </button>
  );
}
