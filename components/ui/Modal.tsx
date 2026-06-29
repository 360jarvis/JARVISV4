import type { ReactNode } from 'react';
import Button from './Button';

type ModalProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const modalWidth = {
  sm: 460,
  md: 640,
  lg: 880
};

export default function Modal({ title, subtitle, children, footer, open = true, size = 'md' }: ModalProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="jarvixx-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'grid',
        placeItems: 'center',
        padding: 24,
        background: 'rgba(9,8,6,0.42)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <section
        className="lux-card"
        style={{
          width: `min(${modalWidth[size]}px, 100%)`,
          maxHeight: 'calc(100vh - 48px)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          boxShadow: '0 30px 90px rgba(9,8,6,0.28)'
        }}
      >
        <header style={{ padding: 20, borderBottom: '1px solid var(--jarvixx-border)', display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start' }}>
          <div>
            <h2 id="jarvixx-modal-title" style={{ margin: 0, fontSize: 20, letterSpacing: '-0.03em' }}>{title}</h2>
            {subtitle ? <p style={{ margin: '7px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13, lineHeight: 1.45 }}>{subtitle}</p> : null}
          </div>
          <Button variant="ghost">Close</Button>
        </header>

        <div style={{ padding: 20, overflowY: 'auto' }}>{children}</div>

        <footer style={{ padding: 16, borderTop: '1px solid var(--jarvixx-border)', display: 'flex', justifyContent: 'flex-end', gap: 10, background: '#fbfaf7' }}>
          {footer ?? (
            <>
              <Button variant="secondary">Cancel</Button>
              <Button>Save</Button>
            </>
          )}
        </footer>
      </section>
    </div>
  );
}
