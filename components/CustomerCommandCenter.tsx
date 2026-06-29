import { demoCustomers } from '../lib/customers';
import { KpiCard, StatusBadge } from './ui';

export default function CustomerCommandCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Total Customers" value="3" detail="Foundation dataset" />
        <KpiCard label="Recurring" value="1" detail="Active recurring customers" />
        <KpiCard label="Commercial" value="1" detail="Accounts and projects" />
        <KpiCard label="Outstanding" value="$175" detail="Open customer balance" />
        <KpiCard label="Lifetime Value" value="$14,250" detail="Demo total" />
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto auto', gap: 10, alignItems: 'center' }}>
          <input aria-label="Search customers" placeholder="Search customer records" style={{ padding: 13, borderRadius: 12, border: '1px solid var(--jarvixx-border)' }} />
          <button className="lux-button secondary">Filters</button>
          <button className="lux-button secondary">Saved Views</button>
          <button className="lux-button">Add Customer</button>
        </div>
      </section>

      <section className="lux-card" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead style={{ background: 'var(--jarvixx-gold-soft)' }}>
            <tr>
              {['Customer', 'Phone', 'Email', 'Property', 'Next Service', 'Frequency', 'LTV', 'Balance', 'Status', 'Actions'].map((header) => (
                <th key={header} style={{ textAlign: 'left', padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {demoCustomers.map((customer) => (
              <tr key={customer.id}>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>
                  <strong>{customer.name}</strong>
                  <div style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{customer.id} - {customer.city}</div>
                </td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.phone}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.email}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.propertyType}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.nextService}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.frequency}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.lifetimeValue}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.outstandingBalance}</td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><StatusBadge>{customer.status}</StatusBadge></td>
                <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>
                  <a className="lux-button secondary" href={'/app/customers/' + customer.id}>View 360</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
