import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';

export default function AppShell(props: { title: string; subtitle: string; children?: ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', minHeight: '100vh', background: 'var(--jarvixx-ivory)' }}>
      <Sidebar />
      <main style={{ minWidth: 0 }}>
        <TopNavigation title={props.title} subtitle={props.subtitle} />
        <div style={{ padding: 28 }}>{props.children}</div>
      </main>
    </div>
  );
}
