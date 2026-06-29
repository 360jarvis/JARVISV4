import type { ReactNode } from 'react';
import Button from './Button';

export default function EmptyState(props: { title: string; message: string; actionLabel?: string; actionHref?: string; icon?: ReactNode }) {
  return (
    <div
      style={{
        border: '1px dashed var(--jarvixx-border)',
        borderRadius: 22,
        background: '#fff',
        padding: 28,
        textAlign: 'center',
        display: 'grid',
        justifyItems: 'center',
        gap: 10
      }}
    >
      <div aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 16, display: 'grid', placeItems: 'center', background: 'var(--jarvixx-gold-soft)', color: 'var(--jarvixx-ink)' }}>
        {props.icon ?? 'JX'}
      </div>
      <h3 style={{ margin: 0, fontSize: 18 }}>{props.title}</h3>
      <p style={{ margin: 0, color: 'var(--jarvixx-muted)', maxWidth: 460, lineHeight: 1.5 }}>{props.message}</p>
      {props.actionLabel && props.actionHref ? <Button href={props.actionHref}>{props.actionLabel}</Button> : null}
    </div>
  );
}
