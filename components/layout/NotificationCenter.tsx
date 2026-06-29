export default function NotificationCenter() {
  return (
    <button
      type="button"
      aria-label="Open notifications"
      style={{
        position: 'relative',
        width: 44,
        height: 44,
        borderRadius: 999,
        border: '1px solid var(--jarvixx-border)',
        background: '#fff',
        color: 'var(--jarvixx-ink)',
        cursor: 'pointer'
      }}
    >
      <span aria-hidden="true">◦</span>
      <span
        aria-label="12 unread notifications"
        style={{
          position: 'absolute',
          top: -5,
          right: -3,
          minWidth: 20,
          height: 20,
          borderRadius: 999,
          display: 'grid',
          placeItems: 'center',
          background: 'var(--jarvixx-gold)',
          color: 'var(--jarvixx-ink)',
          border: '2px solid #fff',
          fontSize: 10,
          fontWeight: 700
        }}
      >
        12
      </span>
    </button>
  );
}
