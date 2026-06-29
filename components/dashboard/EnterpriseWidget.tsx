import type { ReactNode } from 'react';

type EnterpriseWidgetProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  tone?: 'light' | 'dark';
};

export default function EnterpriseWidget({ title, subtitle, children, size = 'medium', tone = 'light' }: EnterpriseWidgetProps) {
  const isDark = tone === 'dark';
  const minHeight = size === 'large' ? 360 : size === 'small' ? 180 : 260;

  return (
    <section
      style={{
        minHeight,
        borderRadius: 22,
        border: isDark ? '1px solid rgba(216,189,127,0.22)' : '1px solid var(--jarvixx-border)',
        background: isDark ? 'linear-gradient(180deg, #090806 0%, #15130f 100%)' : '#fff',
        color: isDark ? '#fff' : 'var(--jarvixx-ink)',
        boxShadow: isDark ? '0 24px 70px rgba(0,0,0,0.18)' : '0 20px 58px rgba(23,19,13,0.05)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateRows: 'auto 1fr'
      }}
    >
      <header
        style={{
          padding: '16px 18px',
          borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid var(--jarvixx-border)',
          display: 'flex',
          justifyContent: 'space-between',
          gap: 12,
          alignItems: 'flex-start'
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: 16, letterSpacing: '-0.02em' }}>{title}</h2>
          {subtitle ? <p style={{ margin: '6px 0 0', color: isDark ? '#b9ae98' : 'var(--jarvixx-muted)', fontSize: 12 }}>{subtitle}</p> : null}
        </div>
        <div style={{ display: 'flex', gap: 6 }} aria-label="Widget controls">
          {['Refresh', 'Expand', 'More'].map((control) => (
            <button
              key={control}
              title={control}
              type="button"
              style={{
                width: 28,
                height: 28,
                borderRadius: 10,
                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid var(--jarvixx-border)',
                background: isDark ? 'rgba(255,255,255,0.06)' : '#fbfaf7',
                color: isDark ? '#e8deca' : 'var(--jarvixx-ink)',
                fontWeight: 900,
                cursor: 'pointer'
              }}
            >
              {control === 'Refresh' ? '↻' : control === 'Expand' ? '⛶' : '⋯'}
            </button>
          ))}
        </div>
      </header>
      <div style={{ padding: 18 }}>{children}</div>
    </section>
  );
}
