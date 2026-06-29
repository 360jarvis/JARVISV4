import type { ReactNode } from 'react';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';

export default function AppShell(props: { title: string; subtitle: string; children?: ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '304px 1fr', minHeight: '100vh', background: 'var(--jarvixx-ivory)' }}>
      <Sidebar />
      <main style={{ padding: 28, minWidth: 0 }}>
        <Header title={props.title} subtitle={props.subtitle} />
        {props.children}
      </main>
    </div>
  );
}
