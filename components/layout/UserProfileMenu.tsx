export default function UserProfileMenu() {
  return (
    <button
      type="button"
      aria-label="Open user profile menu"
      style={{
        width: 44,
        height: 44,
        borderRadius: 999,
        border: '1px solid var(--jarvixx-border)',
        background: 'var(--jarvixx-black)',
        color: 'var(--jarvixx-gold)',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.08em'
      }}
    >
      FT
    </button>
  );
}
