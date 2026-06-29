'use client';

import { useState } from 'react';

const notifications = [
  { title: 'Payment failed', detail: 'Card declined for Jennifer Martinez · $180.00', time: '3m ago', tone: '#fee2e2', group: 'Payments' },
  { title: 'Provider running late', detail: 'Team Bravo may miss the 10:00 AM - 1:00 PM arrival window', time: '9m ago', tone: '#fef3c7', group: 'Dispatch' },
  { title: 'New booking created', detail: 'Deep Cleaning · Arrival Window 8:00 AM - 10:00 AM', time: '14m ago', tone: '#dcfce7', group: 'Bookings' },
  { title: 'Quality issue opened', detail: 'Customer requested follow-up after move-out cleaning', time: '22m ago', tone: '#fee2e2', group: 'Quality' },
  { title: 'Lead needs response', detail: 'New quote request from website chat', time: '31m ago', tone: '#fef3c7', group: 'Growth' }
];

export default function NotificationCenter() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <button
        type="button"
        aria-label="Open notifications"
        onClick={() => setOpen((current) => !current)}
        style={{
          position: 'relative',
          width: 44,
          height: 44,
          borderRadius: 999,
          border: '1px solid var(--jarvixx-border)',
          background: '#fff',
          color: 'var(--jarvixx-ink)',
          cursor: 'pointer',
          boxShadow: '0 10px 26px rgba(23,19,13,0.035)',
          fontWeight: 900
        }}
      >
        <span aria-hidden="true">◦</span>
        <span
          aria-label="5 unread notifications"
          style={{
            position: 'absolute',
            top: -5,
            right: -3,
            minWidth: 20,
            height: 20,
            borderRadius: 999,
            display: 'grid',
            placeItems: 'center',
            background: 'var(--jarvixx-gold)',
            color: 'var(--jarvixx-ink)',
            border: '2px solid #fff',
            fontSize: 10,
            fontWeight: 800
          }}
        >
          {notifications.length}
        </span>
      </button>

      {open ? (
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 54,
            width: 420,
            maxWidth: 'calc(100vw - 32px)',
            borderRadius: 22,
            background: '#fff',
            border: '1px solid rgba(216,189,127,0.28)',
            boxShadow: '0 28px 90px rgba(0,0,0,0.18)',
            overflow: 'hidden',
            zIndex: 80
          }}
        >
          <div style={{ padding: 16, borderBottom: '1px solid var(--jarvixx-border)', background: 'linear-gradient(135deg, #ffffff 0%, #fbfaf7 70%, #f5ecd7 100%)' }}>
            <p className="kicker" style={{ margin: 0 }}>Notification Center</p>
            <h3 style={{ margin: '6px 0 0', fontSize: 18 }}>Operational alerts</h3>
            <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 12 }}>Bookings, payments, dispatch, quality, growth, and customer activity.</p>
          </div>

          <div style={{ display: 'grid', gap: 8, padding: 10, maxHeight: 420, overflowY: 'auto' }}>
            {notifications.map((item) => (
              <a
                key={item.title}
                href="/app/dashboard"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '34px 1fr auto',
                  gap: 10,
                  alignItems: 'center',
                  border: '1px solid var(--jarvixx-border)',
                  borderRadius: 16,
                  background: '#fff',
                  padding: 12,
                  color: 'var(--jarvixx-ink)'
                }}
              >
                <span style={{ width: 32, height: 32, borderRadius: 12, background: item.tone, display: 'grid', placeItems: 'center', fontWeight: 900 }}>JX</span>
                <span>
                  <strong style={{ display: 'block', fontSize: 13 }}>{item.title}</strong>
                  <span style={{ display: 'block', marginTop: 4, color: 'var(--jarvixx-muted)', fontSize: 12 }}>{item.group} · {item.detail}</span>
                </span>
                <span style={{ color: 'var(--jarvixx-muted)', fontSize: 11 }}>{item.time}</span>
              </a>
            ))}
          </div>

          <div style={{ padding: 12, borderTop: '1px solid var(--jarvixx-border)', display: 'flex', justifyContent: 'space-between', gap: 8 }}>
            <button className="lux-button secondary" type="button">Mark all read</button>
            <a className="lux-button" href="/app/reports">View activity</a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
