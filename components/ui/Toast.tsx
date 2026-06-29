export type ToastTone = 'success' | 'warning' | 'danger' | 'info';

type ToastProps = {
  title: string;
  message?: string;
  tone?: ToastTone;
};

const toneStyles: Record<ToastTone, { icon: string; border: string; background: string }> = {
  success: { icon: 'OK', border: '#cdebd5', background: '#f4fbf6' },
  warning: { icon: '!', border: '#f2dfaa', background: '#fffaf0' },
  danger: { icon: 'X', border: '#f0c7c7', background: '#fff5f5' },
  info: { icon: 'i', border: 'var(--jarvixx-border)', background: '#fff' }
};

export default function Toast({ title, message, tone = 'info' }: ToastProps) {
  const style = toneStyles[tone];

  return (
    <aside
      role="status"
      aria-live="polite"
      style={{
        width: 'min(420px, 100%)',
        border: `1px solid ${style.border}`,
        borderRadius: 18,
        background: style.background,
        padding: 14,
        boxShadow: '0 18px 50px rgba(23,19,13,0.12)',
        display: 'grid',
        gridTemplateColumns: '34px 1fr',
        gap: 12,
        alignItems: 'flex-start'
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 34,
          height: 34,
          borderRadius: 13,
          display: 'grid',
          placeItems: 'center',
          background: 'var(--jarvixx-gold-soft)',
          color: 'var(--jarvixx-ink)',
          fontWeight: 800,
          fontSize: 11
        }}
      >
        {style.icon}
      </span>
      <span>
        <strong style={{ display: 'block', fontSize: 14 }}>{title}</strong>
        {message ? <span style={{ display: 'block', color: 'var(--jarvixx-muted)', fontSize: 13, marginTop: 4, lineHeight: 1.4 }}>{message}</span> : null}
      </span>
    </aside>
  );
}
