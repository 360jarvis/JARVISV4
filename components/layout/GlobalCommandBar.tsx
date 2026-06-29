'use client';

import { useEffect, useMemo, useState } from 'react';

const commands = [
  { label: 'New Booking', description: 'Open Smart Booking Terminal', href: '/app/bookings/new', group: 'Create', shortcut: 'B' },
  { label: 'New Customer', description: 'Open Customer Command Center', href: '/app/customers', group: 'Create', shortcut: 'C' },
  { label: 'Create Quote', description: 'Start a new customer quote', href: '/app/quotes', group: 'Create', shortcut: 'Q' },
  { label: 'Dispatch Command Center', description: 'Manage arrival windows and routes', href: '/app/dispatch', group: 'Operations', shortcut: 'D' },
  { label: 'Booking Command Center', description: 'View bookings and scheduling work', href: '/app/bookings', group: 'Operations', shortcut: 'K' },
  { label: 'Customer Command Center', description: 'Search customers and open profiles', href: '/app/customers', group: 'Customers', shortcut: 'U' },
  { label: 'Financial Command Center', description: 'Open revenue and finance workspace', href: '/app/financial', group: 'Financial', shortcut: 'F' },
  { label: 'Payment Command Center', description: 'Review payments and issues', href: '/app/payments', group: 'Financial', shortcut: 'P' },
  { label: 'Quality Command Center', description: 'Inspections, re-cleans, and claims', href: '/app/quality', group: 'Quality', shortcut: 'Y' },
  { label: 'Growth Command Center', description: 'Leads, campaigns, and follow-up', href: '/app/growth', group: 'Growth', shortcut: 'G' },
  { label: 'Reports', description: 'Open reports workspace', href: '/app/reports', group: 'Insights', shortcut: 'R' },
  { label: 'Jarvixx AI', description: 'Open AI operations assistant', href: '/app/jarvixx-ai', group: 'AI', shortcut: 'A' },
  { label: 'Settings', description: 'Company, scheduling, and platform setup', href: '/app/settings', group: 'Admin', shortcut: 'S' }
];

export default function GlobalCommandBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const isCommand = event.ctrlKey || event.metaKey;
      if (isCommand && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((current) => !current);
      }
      if (event.key === 'Escape') setOpen(false);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return commands;
    return commands.filter((command) => `${command.label} ${command.description} ${command.group}`.toLowerCase().includes(term));
  }, [query]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          border: '1px solid var(--jarvixx-border)',
          borderRadius: 999,
          background: '#fff',
          minHeight: 38,
          padding: '0 14px',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          color: 'var(--jarvixx-muted)',
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 10px 26px rgba(23,19,13,0.035)'
        }}
      >
        <span>Search or run command</span>
        <kbd style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 8, padding: '3px 7px', background: '#fbfaf7', color: 'var(--jarvixx-ink)' }}>Ctrl K</kbd>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(9,8,6,0.46)',
            display: 'grid',
            placeItems: 'start center',
            paddingTop: 90
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <div style={{ width: 'min(760px, calc(100vw - 40px))', borderRadius: 24, background: '#fff', boxShadow: '0 40px 120px rgba(0,0,0,0.28)', overflow: 'hidden', border: '1px solid rgba(216,189,127,0.28)' }}>
            <div style={{ padding: 18, borderBottom: '1px solid var(--jarvixx-border)', background: 'linear-gradient(135deg, #ffffff 0%, #fbfaf7 70%, #f5ecd7 100%)' }}>
              <p className="kicker" style={{ margin: 0 }}>Jarvixx Command Bar</p>
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search customers, bookings, reports, dispatch, payments..."
                style={{ width: '100%', marginTop: 10, minHeight: 52, border: '1px solid var(--jarvixx-border)', borderRadius: 16, padding: '0 16px', fontSize: 16, outline: 0 }}
              />
            </div>
            <div style={{ maxHeight: 460, overflowY: 'auto', padding: 12, display: 'grid', gap: 8 }}>
              {filtered.map((command) => (
                <a
                  key={command.label}
                  href={command.href}
                  onClick={() => setOpen(false)}
                  style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 14, alignItems: 'center', padding: 14, border: '1px solid var(--jarvixx-border)', borderRadius: 16, color: 'var(--jarvixx-ink)', background: '#fff' }}
                >
                  <span>
                    <strong style={{ display: 'block' }}>{command.label}</strong>
                    <span style={{ display: 'block', marginTop: 4, color: 'var(--jarvixx-muted)', fontSize: 12 }}>{command.group} · {command.description}</span>
                  </span>
                  <kbd style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 10, padding: '5px 9px', background: 'var(--jarvixx-gold-soft)', fontWeight: 900 }}>{command.shortcut}</kbd>
                </a>
              ))}
              {filtered.length === 0 ? <div style={{ padding: 24, textAlign: 'center', color: 'var(--jarvixx-muted)' }}>No commands found.</div> : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
