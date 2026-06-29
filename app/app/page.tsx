import AppShell from '../../components/AppShell';
import { ActivityFeed, Badge, Button, Card, KpiCard, MetricGrid, StatCard } from '../../components/ui/index';

const todayPriorities = [
  { label: 'Unassigned bookings', value: '0', supportingText: 'Dispatch queue clear', href: '/app/dispatch' },
  { label: 'Payment issues', value: '0', supportingText: 'No failed card actions', href: '/app/payments' },
  { label: 'Quality alerts', value: '0', supportingText: 'No open re-clean alerts', href: '/app/quality' },
  { label: 'New leads', value: '0', supportingText: 'Growth queue ready', href: '/app/growth' }
];

const quickActions = [
  { label: 'New Booking', href: '/app/bookings/new' },
  { label: 'New Customer', href: '/app/customers' },
  { label: 'Create Quote', href: '/app/quotes' },
  { label: 'Open Dispatch', href: '/app/dispatch' },
  { label: 'Payments', href: '/app/payments' },
  { label: 'Reports', href: '/app/reports' }
];

const activity = [
  { id: '1', title: 'Dashboard command center upgraded', detail: 'Executive dashboard layout is now ready for connected module data.', time: 'Now', type: 'system' as const },
  { id: '2', title: 'Navigation polish deployed', detail: 'Sidebar supports collapse behavior, active route state, and single page scrolling.', time: 'Today', type: 'system' as const },
  { id: '3', title: 'Business logic remains protected', detail: 'Booking engine, payments, Prisma, auth, and AI backend were not changed.', time: 'Stable', type: 'system' as const }
];

export default function AppDashboardPage() {
  return (
    <AppShell title="Dashboard" subtitle="Executive operating home for every Jarvixx tenant.">
      <div style={{ display: 'grid', gap: 22 }}>
        <section
          className="lux-card"
          style={{
            padding: 28,
            display: 'grid',
            gridTemplateColumns: '1.25fr 0.75fr',
            gap: 24,
            alignItems: 'stretch',
            background: 'radial-gradient(circle at top right, rgba(216,189,127,0.24), transparent 32%), linear-gradient(135deg, #ffffff 0%, #fbfaf7 58%, #f4ead1 100%)',
            overflow: 'hidden',
            boxShadow: '0 26px 70px rgba(23,19,13,0.08)'
          }}
        >
          <div style={{ display: 'grid', alignContent: 'center' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
              <Badge tone="gold">Production Stable</Badge>
              <Badge tone="neutral">UI Only</Badge>
              <Badge tone="gold">Luxury Workspace</Badge>
            </div>
            <p className="kicker">Jarvixx Executive Command Center</p>
            <h2 style={{ margin: '8px 0 10px', fontSize: 38, letterSpacing: '-0.045em', lineHeight: 1 }}>Run today with clarity.</h2>
            <p style={{ margin: 0, color: 'var(--jarvixx-muted)', fontSize: 15, lineHeight: 1.58, maxWidth: 760 }}>
              Your daily operating cockpit for bookings, dispatch, payments, quality, growth, workforce, and AI visibility. Live data will connect as each protected module is rebuilt on the shared Jarvixx design system.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 20 }}>
              <Button href="/app/bookings/new">New Booking</Button>
              <Button href="/app/customers" variant="secondary">Open Customers</Button>
              <Button href="/app/dispatch" variant="secondary">Review Dispatch</Button>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 12 }}>
            <StatCard label="System status" value="Stable" supportingText="Production foundation active" />
            <StatCard label="Protected areas" value="Locked" supportingText="Payments, auth, booking logic, Prisma, and AI untouched" />
            <StatCard label="Next module" value="Customers" supportingText="Customer Command Center is next" />
          </div>
        </section>

        <MetricGrid>
          <KpiCard label="Today’s Bookings" value="0" detail="Ready for Booking Command Center data" trend={{ label: 'No live records connected yet', direction: 'flat' }} icon="BK" />
          <KpiCard label="Open Revenue" value="$0" detail="Prepared for Financial Command Center totals" trend={{ label: 'Payment logic protected', direction: 'flat' }} icon="RV" />
          <KpiCard label="Quality Queue" value="0" detail="Prepared for inspections, claims, and re-cleans" trend={{ label: 'No alerts connected yet', direction: 'flat' }} icon="QL" />
          <KpiCard label="Growth Pipeline" value="0" detail="Prepared for leads, campaigns, and abandoned carts" trend={{ label: 'Pipeline shell ready', direction: 'flat' }} icon="GR" />
        </MetricGrid>

        <section style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 18, alignItems: 'start' }}>
          <Card title="Today’s Operating Priorities" subtitle="Fast access to the work that needs attention first.">
            <div style={{ display: 'grid', gap: 12 }}>
              {todayPriorities.map((item) => (
                <a key={item.label} href={item.href} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center', padding: 14, border: '1px solid var(--jarvixx-border)', borderRadius: 18, background: '#fff', color: 'inherit', boxShadow: '0 14px 36px rgba(23,19,13,0.035)' }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{item.label}</div>
                    <div style={{ color: 'var(--jarvixx-muted)', fontSize: 12, marginTop: 4 }}>{item.supportingText}</div>
                  </div>
                  <Badge tone="gold">{item.value}</Badge>
                </a>
              ))}
            </div>
          </Card>

          <Card title="Quick Actions" subtitle="Common command center shortcuts.">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
              {quickActions.map((action) => (
                <a key={action.label} href={action.href} style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 16, background: '#fff', padding: 13, color: 'var(--jarvixx-ink)', fontSize: 13, fontWeight: 700, boxShadow: '0 12px 30px rgba(23,19,13,0.03)' }}>
                  {action.label}
                </a>
              ))}
            </div>
          </Card>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 18, alignItems: 'start' }}>
          <ActivityFeed title="Executive Activity Feed" items={activity} />
          <Card title="Today’s Operations Board" subtitle="Prepared for live cleaning operations data.">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10 }}>
              <StatCard label="Arrivals" value="0" supportingText="Window tracking pending" />
              <StatCard label="On the way" value="0" supportingText="Provider app pending" />
              <StatCard label="Running late" value="0" supportingText="Dispatch alerts pending" />
              <StatCard label="Clocked in" value="0" supportingText="Workforce app pending" />
              <StatCard label="Completed" value="0" supportingText="Booking lifecycle pending" />
              <StatCard label="Needs review" value="0" supportingText="Quality workflow pending" />
            </div>
          </Card>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 18 }}>
          <Card title="Revenue Snapshot" subtitle="Prepared for Financial Command Center data.">
            <div style={{ display: 'grid', gap: 10 }}>
              <StatCard label="Open balances" value="$0" supportingText="Payment Command Center will feed this" />
              <StatCard label="Failed payments" value="0" supportingText="Declines and retries will appear here" />
            </div>
          </Card>
          <Card title="Quality Snapshot" subtitle="Prepared for customer experience signals.">
            <div style={{ display: 'grid', gap: 10 }}>
              <StatCard label="Complaints" value="0" supportingText="Complaint tickets pending module rebuild" />
              <StatCard label="Re-clean queue" value="0" supportingText="Quality Command Center source" />
            </div>
          </Card>
          <Card title="Growth Snapshot" subtitle="Prepared for leads and campaigns.">
            <div style={{ display: 'grid', gap: 10 }}>
              <StatCard label="Open leads" value="0" supportingText="Growth Command Center source" />
              <StatCard label="Abandoned carts" value="0" supportingText="Website and booking funnel source" />
            </div>
          </Card>
        </section>
      </div>
    </AppShell>
  );
}
