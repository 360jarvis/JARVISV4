import type { ReactNode } from 'react';
import Button from './Button';

type DrawerProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  width?: 'sm' | 'md' | 'lg';
};

const drawerWidth = {
  sm: 420,
  md: 560,
  lg: 760
};

export default function Drawer({ title, subtitle, children, footer, open = true, width = 'md' }: DrawerProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="jarvixx-drawer-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 45,
        display: 'flex',
        justifyContent: 'flex-end',
        background: 'rgba(9,8,6,0.32)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <aside
        className="lux-card"
        style={{
          width: `min(${drawerWidth[width]}px, 100%)`,
          height: '100vh',
          borderRadius: '22px 0 0 22px',
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
          boxShadow: '-28px 0 80px rgba(9,8,6,0.24)',
          overflow: 'hidden'
        }}
      >
        <header style={{ padding: 20, borderBottom: '1px solid var(--jarvixx-border)', display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start' }}>
          <div>
            <h2 id="jarvixx-drawer-title" style={{ margin: 0, fontSize: 20, letterSpacing: '-0.03em' }}>{title}</h2>
            {subtitle ? <p style={{ margin: '7px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13, lineHeight: 1.45 }}>{subtitle}</p> : null}
          </div>
          <Button variant="ghost">Close</Button>
        </header>

        <div style={{ padding: 20, overflowY: 'auto' }}>{children}</div>

        <footer style={{ padding: 16, borderTop: '1px solid var(--jarvixx-border)', display: 'flex', justifyContent: 'flex-end', gap: 10, background: '#fbfaf7' }}>
          {footer ?? <Button variant="secondary">Close</Button>}
        </footer>
      </aside>
    </div>
  );
}
