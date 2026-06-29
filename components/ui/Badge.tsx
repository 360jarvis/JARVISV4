type BadgeTone = 'neutral' | 'success' | 'warning' | 'danger' | 'gold';

const toneStyles: Record<BadgeTone, { background: string; color: string; border: string }> = {
  neutral: { background: '#fff', color: 'var(--jarvixx-muted)', border: 'var(--jarvixx-border)' },
  success: { background: '#edf8f0', color: '#25683a', border: '#cdebd5' },
  warning: { background: '#fff8e8', color: '#8a5c00', border: '#f2dfaa' },
  danger: { background: '#fff0f0', color: '#9f2929', border: '#f0c7c7' },
  gold: { background: 'var(--jarvixx-gold-soft)', color: 'var(--jarvixx-ink)', border: '#ead8aa' }
};

export default function Badge(props: { children: string; tone?: BadgeTone }) {
  const tone = props.tone ?? 'neutral';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        minHeight: 24,
        padding: '0 10px',
        borderRadius: 999,
        border: `1px solid ${toneStyles[tone].border}`,
        background: toneStyles[tone].background,
        color: toneStyles[tone].color,
        fontSize: 12,
        fontWeight: 600
      }}
    >
      {props.children}
    </span>
  );
}
