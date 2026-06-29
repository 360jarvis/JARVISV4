import { KpiCard } from './ui';

export default function PortalHome(props: { portalType: 'Customer' | 'Provider' | 'Employee' }) {
  const isCustomer = props.portalType === 'Customer';
  const isProvider = props.portalType === 'Provider';

  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Today" value={isCustomer ? '1' : '2'} detail={isCustomer ? 'Upcoming service' : 'Assigned work'} />
        <KpiCard label="Messages" value="0" detail="Office communication" />
        <KpiCard label="Documents" value="Ready" detail="Secure document access" />
        <KpiCard label="Status" value="Active" detail="Portal access" />
      </section>

      <section className="lux-card" style={{ padding: 22 }}>
        <p className="kicker">Allowed Actions</p>
        <h2 style={{ margin: '8px 0' }}>{props.portalType} Portal Foundation</h2>
        <p style={{ color: 'var(--jarvixx-muted)' }}>
          This portal only exposes records and actions allowed for the signed-in portal account.
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
          {isCustomer ? <button className="lux-button">View Bookings</button> : null}
          {isCustomer ? <button className="lux-button secondary">Update Card</button> : null}
          {isProvider ? <button className="lux-button">View Route</button> : null}
          {isProvider ? <button className="lux-button secondary">Record Time</button> : null}
          {!isCustomer && !isProvider ? <button className="lux-button">View Schedule</button> : null}
          {!isCustomer && !isProvider ? <button className="lux-button secondary">Upload Document</button> : null}
        </div>
      </section>
    </div>
  );
}
