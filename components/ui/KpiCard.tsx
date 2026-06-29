import type { ReactNode } from 'react';
import Skeleton from './Skeleton';

type KpiTrend = {
  label: string;
  direction?: 'up' | 'down' | 'flat';
};

type KpiCardProps = {
  label: string;
  value: string;
  detail?: string;
  trend?: KpiTrend;
  icon?: ReactNode;
  loading?: boolean;
};

const trendSymbol = {
  up: '↑',
  down: '↓',
  flat: '→'
};

export default function KpiCard({ label, value, detail, trend, icon, loading = false }: KpiCardProps) {
  return (
    <section
      className="lux-card"
      style={{
        padding: 18,
        minHeight: 142,
        display: 'grid',
        gap: 14,
        boxShadow: '0 18px 50px rgba(23,19,13,0.04)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <p style={{ margin: 0, color: 'var(--jarvixx-muted)', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{label}</p>
        <div aria-hidden="true" style={{ width: 34, height: 34, borderRadius: 13, display: 'grid', placeItems: 'center', background: 'var(--jarvixx-gold-soft)', color: 'var(--jarvixx-ink)', fontSize: 13 }}>
          {icon ?? 'JX'}
        </div>
      </div>

      {loading ? (
        <div style={{ display: 'grid', gap: 8 }}>
          <Skeleton height={28} width="65%" />
          <Skeleton height={14} width="88%" />
        </div>
      ) : (
        <div>
          <div style={{ fontSize: 30, lineHeight: 1, letterSpacing: '-0.04em' }}>{value}</div>
          {detail ? <p style={{ margin: '8px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13, lineHeight: 1.4 }}>{detail}</p> : null}
        </div>
      )}

      {trend ? (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--jarvixx-muted)', fontSize: 12 }}>
          <span aria-hidden="true" style={{ color: 'var(--jarvixx-gold)', fontWeight: 800 }}>{trendSymbol[trend.direction ?? 'flat']}</span>
          {trend.label}
        </div>
      ) : null}
    </section>
  );
}
