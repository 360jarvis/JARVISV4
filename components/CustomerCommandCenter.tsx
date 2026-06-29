import { demoCustomers } from '../lib/customers';
import { Badge, Button, Card, KpiCard, MetricGrid, StatCard } from './ui/index';

const filters = ['Status', 'City', 'ZIP', 'Team', 'Type', 'Frequency', 'Balance'];

export default function CustomerCommandCenter() {
  return (
    <div style={{ display: 'grid', gap: 22 }}>
      <section className="lux-card" style={{ padding: 26, display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 22, alignItems: 'center', background: 'radial-gradient(circle at top right, rgba(216,189,127,0.18), transparent 34%), linear-gradient(135deg, #ffffff 0%, #fbfaf7 58%, #f5ecd7 100%)', boxShadow: '0 24px 70px rgba(23,19,13,0.08)' }}>
        <div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
            <Badge tone="gold">CRM Shell</Badge>
            <Badge tone="neutral">Demo Data</Badge>
            <Badge tone="gold">Profile Ready</Badge>
          </div>
          <p className="kicker">Customer Command Center</p>
          <h2 style={{ margin: '8px 0 10px', fontSize: 34, letterSpacing: '-0.045em', lineHeight: 1.02 }}>A premium workspace for every customer relationship.</h2>
          <p style={{ margin: 0, color: 'var(--jarvixx-muted)', fontSize: 14, lineHeight: 1.58, maxWidth: 820 }}>Search, segment, review, and open customer records from one clean command center.</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
            <Button>New Customer</Button><Button variant="secondary">Import</Button><Button variant="secondary">Export</Button><Button variant="secondary">Saved Views</Button>
          </div>
        </div>
        <div style={{ display: 'grid', gap: 10 }}>
          <StatCard label="Profile View" value="Next" supportingText="Drawer and full record come next" />
          <StatCard label="Current Data" value="Demo" supportingText="Visual shell only" />
          <StatCard label="Records" value={String(demoCustomers.length)} supportingText="Sample directory loaded" />
        </div>
      </section>

      <MetricGrid>
        <KpiCard label="Total Customers" value="3" detail="Demo customer directory" trend={{ label: 'Ready for live data', direction: 'flat' }} icon="CU" />
        <KpiCard label="Active Customers" value="3" detail="Active records" trend={{ label: 'Prepared', direction: 'flat' }} icon="AC" />
        <KpiCard label="Recurring" value="1" detail="Recurring segment" trend={{ label: 'Prepared', direction: 'flat' }} icon="RC" />
        <KpiCard label="Outstanding" value="$175" detail="Demo balance" trend={{ label: 'Prepared', direction: 'flat' }} icon="AR" />
      </MetricGrid>

      <Card title="Customer Workspace Controls" subtitle="Search, saved views, filters, and future bulk actions in one clean toolbar.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 14, alignItems: 'center' }}>
          <input aria-label="Search customers" placeholder="Search by name, phone, email, address, tag, or ID" style={{ minHeight: 46, borderRadius: 999, border: '1px solid var(--jarvixx-border)', padding: '0 18px', outline: 0, boxShadow: '0 12px 30px rgba(23,19,13,0.03)' }} />
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}><Button variant="secondary">Bulk Actions</Button><Button variant="secondary">Filters</Button></div>
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 14 }}>{filters.map((filter) => <Badge key={filter} tone="neutral">{filter}</Badge>)}</div>
      </Card>

      <section className="lux-card" style={{ overflow: 'hidden', boxShadow: '0 20px 58px rgba(23,19,13,0.05)' }}>
        <div style={{ padding: 18, borderBottom: '1px solid var(--jarvixx-border)', display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center', background: '#fff' }}>
          <div><p className="kicker" style={{ margin: 0 }}>Directory</p><h2 style={{ margin: '6px 0 0', fontSize: 19 }}>Customer Directory</h2><p style={{ margin: '6px 0 0', color: 'var(--jarvixx-muted)', fontSize: 13 }}>Prepared for profiles, documents, notes, reviews, and service history.</p></div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}><Button variant="secondary">Density</Button><Button>New Customer</Button></div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 13 }}>
            <thead><tr>{['Customer', 'Phone', 'Email', 'Property', 'Next Service', 'Frequency', 'LTV', 'Balance', 'Status', 'Actions'].map((header) => <th key={header} style={{ textAlign: 'left', padding: 14, borderBottom: '1px solid var(--jarvixx-border)', color: 'var(--jarvixx-muted)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', background: '#fbfaf7' }}>{header}</th>)}</tr></thead>
            <tbody>{demoCustomers.map((customer) => <tr key={customer.id}><td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><strong>{customer.name}</strong><div style={{ color: 'var(--jarvixx-muted)', fontSize: 12 }}>{customer.id} · {customer.city}</div></td><td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.phone}</td><td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.email}</td><td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.propertyType}</td><td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.nextService}</td><td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.frequency}</td><td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.lifetimeValue}</td><td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}>{customer.outstandingBalance}</td><td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><Badge tone="gold">{customer.status}</Badge></td><td style={{ padding: 14, borderBottom: '1px solid var(--jarvixx-border)' }}><a className="lux-button secondary" href={'/app/customers/' + customer.id}>View Profile</a></td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
