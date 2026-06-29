import { demoCustomers } from '../lib/customers';
import { Badge, Button, Card, KpiCard, MetricGrid, StatCard } from './ui/index';

const filters = ['Status', 'Tags', 'City', 'ZIP Code', 'Team', 'Type', 'Frequency', 'Last Service', 'Balance'];

export default function CustomerCommandCenter() {
  return (
    <div style={{ display: 'grid', gap: 22 }}>
      <section className="lux-card" style={{ padding: 24, display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 20, alignItems: 'center', background: 'linear-gradient(135deg, #ffffff 0%, #fbfaf7 58%, #f5ecd7 100%)', boxShadow: '0 22px 60px rgba(23,19,13,0.07)' }}>
        <div>
          <p className="kicker">Customer Command Center</p>
          <h2 style={{ margin: '8px 0 10px', fontSize: 32, letterSpacing: '-0.04em', lineHeight: 1.04 }}>Every customer relationship in one premium workspace.</h2>
          <p style={{ margin: 0, color: 'var(--jarvixx-muted)', fontSize: 14, lineHeight: 1.55, maxWidth: 780 }}>
            Search, segment, review, and open Customer 360 records from one enterprise command center. This shell is prepared for notes, bookings, quotes, balances, documents, reviews, and timeline integrations.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
            <Button>New Customer</Button>
            <Button variant="secondary">Import Customers</Button>
            <Button variant="secondary">Export</Button>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 10 }}>
          <StatCard label="Customer 360" value="Ready" supportingText="Profile drawer comes next" />
          <StatCard label="Source" value="Demo" supportingText="No database or API changes" />
        </div>
      </section>

      <MetricGrid>
        <KpiCard label="Total Customers" value="3" detail="Demo customer shell" trend={{ label: 'Ready for live data', direction: 'flat' }} icon="CU" />
        <KpiCard label="Active Customers" value="3" detail="Active demo records" trend={{ label: 'No API connected', direction: 'flat' }} icon="AC" />
        <KpiCard label="Recurring" value="1" detail="Recurring customer segment" trend={{ label: 'Booking logic untouched', direction: 'flat' }} icon="RC" />
        <KpiCard label="Outstanding" value="$175" detail="Demo open balance" trend={{ label: 'Balance logic untouched', direction: 'flat' }} icon="AR" />
      </MetricGrid>

      <Card title="Customer Filters" subtitle="Enterprise filter framework prepared for customer segmentation.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 14, alignItems: 'center' }}>
          <input aria-label="Search customers" placeholder="Search by name, phone, email, address, tag, or customer ID" style={{ minHeight: 44, borderRadius: 999, border: '1px solid var(--jarvixx-border)', padding: '0 16px', outline: 0 }} />
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <Button variant="secondary">Saved Views</Button>
            <Button variant="secondary">Filters</Button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>
          {filters.map((filter) => <Badge key={filter} tone="neutral">{filter}</Badge>)}
        </div>
      </Card>

      <section className="lux-card" style={{ overflow: 'hidden', boxShadow: '0 18px 50px rgba(23,19,13,0.04)' }}>
        <div style={{ padding: 18, borderBottom: '1px solid var(--jarvixx-border)', display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: 18 }}>Customer Directory</h2>
            <p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>Prepared for Customer 360, documents, notes, reviews, and history.</p>
          </div>
          <Button>New Customer</Button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 13 }}>
            <thead>
              <tr>
                {['Customer', 'Phone', 'Email', 'Property', 'Next Service', 'Frequency', 'LTV', 'Balance', 'Status', 'Actions'].map((header) => (
                  <th key={header} style={{ textAlign: 'left', padding: 14, borderBottom: '1px solid var(--jarvixx-border)', color: 'var(--jarvixx-muted)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', background: '#fff' }}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {demoCustomers.map((customer) => (
                <tr key={customer.id}>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><strong>{customer.name}</strong><div style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{customer.id} · {customer.city}</div></td>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.phone}</td>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.email}</td>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.propertyType}</td>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.nextService}</td>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.frequency}</td>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.lifetimeValue}</td>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.outstandingBalance}</td>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><Badge tone="gold">{customer.status}</Badge></td>
                  <td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><a className="lux-button secondary" href={'/app/customers/' + customer.id}>View 360</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
