import { demoInventoryItems } from '../lib/inventory';
import { KpiCard, StatusBadge } from './ui';

export default function SimpleInventoryCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Items" value={String(demoInventoryItems.length)} detail="Foundation records" />
        <KpiCard label="Locations" value="Ready" detail="Warehouse, vehicle, employee" />
        <KpiCard label="Reorder" value="Ready" detail="Alerts planned" />
        <KpiCard label="Costs" value="Ready" detail="Financial link planned" />
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <p className="kicker">Inventory</p>
        <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
          {demoInventoryItems.map((item) => (
            <article key={item.id} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 12, alignItems: 'center', padding: 14, border: '1px solid var(--jarvixx-border)', borderRadius: 14 }}>
              <div>
                <strong>{item.name}</strong>
                <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)' }}>{item.itemNumber} - {item.category}</p>
              </div>
              <span>Qty {item.quantityOnHand}</span>
              <StatusBadge>{item.type}</StatusBadge>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
