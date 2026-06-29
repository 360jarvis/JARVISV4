'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';

export default function AppShell(props: { title: string; subtitle: string; children?: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('jarvixx-sidebar-collapsed');
    if (saved === 'true') setCollapsed(true);
  }, []);

  function toggleSidebar() {
    setCollapsed((current) => {
      const next = !current;
      window.localStorage.setItem('jarvixx-sidebar-collapsed', String(next));
      return next;
    });
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: collapsed ? '86px 1fr' : '320px 1fr',
        minHeight: '100vh',
        background: 'var(--jarvixx-ivory)',
        transition: 'grid-template-columns 220ms ease'
      }}
    >
      <Sidebar collapsed={collapsed} onToggle={toggleSidebar} />
      <main style={{ minWidth: 0 }}>
        <TopNavigation title={props.title} subtitle={props.subtitle} />
        <div style={{ padding: 28 }}>{props.children}</div>
      </main>
    </div>
  );
}
