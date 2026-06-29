'use client';

import { useMemo, useState } from 'react';

const results = [
  { title: 'Jennifer Martinez', type: 'Customer', detail: '(713) 555-0184 · Active recurring customer', href: '/app/customers' },
  { title: 'BK-1042 Deep Cleaning', type: 'Booking', detail: 'Arrival Window 8:00 AM - 10:00 AM · Today', href: '/app/bookings' },
  { title: 'Quote Q-2031', type: 'Quote', detail: 'Move-Out Cleaning · $375.98 · Pending', href: '/app/quotes' },
  { title: 'Team Bravo', type: 'Provider', detail: 'On route · 10:00 AM - 1:00 PM window', href: '/app/workforce' },
  { title: 'Payment Issue', type: 'Payment', detail: 'Declined card · $180.00 · Needs follow-up', href: '/app/payments' },
  { title: 'Revenue Summary', type: 'Report', detail: 'This week · Daily revenue and open balances', href: '/app/reports' },
  { title: 'Quality Claim', type: 'Quality', detail: 'Move-out cleaning follow-up requested', href: '/app/quality' },
  { title: 'Jarvixx AI Assistant', type: 'AI', detail: 'Ask about operations, customers, bookings, or growth', href: '/app/jarvixx-ai' }
];

export default function GlobalSearch() {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return results;
    return results.filter((item) => `${item.title} ${item.type} ${item.detail}`.toLowerCase().includes(term));
  }, [query]);

  return (
    <div style={{ flex: 1, maxWidth: 620, position: 'relative' }}>
      <form role="search" aria-label="Universal Jarvixx search" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="global-search" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
          Search Jarvixx
        </label>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '18px 1fr auto',
            alignItems: 'center',
            gap: 10,
            minHeight: 44,
            padding: '0 12px',
            borderRadius: 999,
            border: focused ? '1px solid var(--jarvixx-gold)' : '1px solid var(--jarvixx-border)',
            background: '#fff',
            boxShadow: focused ? '0 16px 42px rgba(216,189,127,0.18)' : '0 10px 30px rgba(23,19,13,0.04)'
          }}
        >
          <span aria-hidden="true" style={{ color: 'var(--jarvixx-muted)', fontSize: 15 }}>⌕</span>
          <input
            id="global-search"
            value={query}
            onFocus={() => setFocused(true)}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search customers, bookings, quotes, payments, reports..."
            style={{ border: 0, outline: 0, background: 'transparent', color: 'var(--jarvixx-ink)', minWidth: 0 }}
          />
          <span style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 999, padding: '4px 8px', color: 'var(--jarvixx-muted)', fontSize: 11 }}>Universal</span>
        </div>
      </form>

      {focused ? (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 54,
            borderRadius: 22,
            background: '#fff',
            border: '1px solid rgba(216,189,127,0.28)',
            boxShadow: '0 28px 90px rgba(0,0,0,0.16)',
            overflow: 'hidden',
            zIndex: 70
          }}
        >
          <div style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)', background: '#fbfaf7', display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <span style={{ fontWeight: 800 }}>Universal Search</span>
            <button type="button" onClick={() => setFocused(false)} style={{ border: 0, background: 'transparent', cursor: 'pointer', color: 'var(--jarvixx-muted)' }}>Close</button>
          </div>
          <div style={{ display: 'grid', gap: 8, padding: 10, maxHeight: 390, overflowY: 'auto' }}>
            {filtered.map((item) => (
              <a key={`${item.type}-${item.title}`} href={item.href} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 14, alignItems: 'center', padding: 12, border: '1px solid var(--jarvixx-border)', borderRadius: 16, color: 'var(--jarvixx-ink)', background: '#fff' }}>
                <span>
                  <strong style={{ display: 'block', fontSize: 13 }}>{item.title}</strong>
                  <span style={{ display: 'block', marginTop: 4, color: 'var(--jarvixx-muted)', fontSize: 12 }}>{item.detail}</span>
                </span>
                <span style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 999, padding: '5px 8px', background: 'var(--jarvixx-gold-soft)', fontSize: 11, fontWeight: 800 }}>{item.type}</span>
              </a>
            ))}
            {filtered.length === 0 ? <div style={{ padding: 22, textAlign: 'center', color: 'var(--jarvixx-muted)' }}>No matching results yet.</div> : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
