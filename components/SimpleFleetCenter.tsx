import { demoFleetVehicles } from '../lib/fleet';
import { KpiCard, StatusBadge } from './ui';

export default function SimpleFleetCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Vehicles" value={String(demoFleetVehicles.length)} detail="Foundation records" />
        <KpiCard label="Active" value="1" detail="Available route vehicle" />
        <KpiCard label="Maintenance" value="Ready" detail="Ticket workflow planned" />
        <KpiCard label="Routes" value="Ready" detail="Dispatch link planned" />
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <p className="kicker">Fleet</p>
        <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
          {demoFleetVehicles.map((vehicle) => (
            <article key={vehicle.id} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 12, alignItems: 'center', padding: 14, border: '1px solid var(--jarvixx-border)', borderRadius: 14 }}>
              <div>
                <strong>{vehicle.name}</strong>
                <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)' }}>{vehicle.vehicleNumber} - {vehicle.year} {vehicle.make} {vehicle.model}</p>
              </div>
              <span>{vehicle.nextMaintenanceDate}</span>
              <StatusBadge>{vehicle.status}</StatusBadge>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
