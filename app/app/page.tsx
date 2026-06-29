import AppShell from '../../components/AppShell';
import { ActivityFeed, Badge, Button, Card, KpiCard, MetricGrid, StatCard } from '../../components/ui';

const todayPriorities = [
  { label: 'Unassigned bookings', value: '0', supportingText: 'Ready for dispatch rules' },
  { label: 'Payment issues', value: '0', supportingText: 'Stripe and Square protected' },
  { label: 'Quality alerts', value: '0', supportingText: 'Complaints and re-cleans' },
  { label: 'New leads', value: '0', supportingText: 'Growth center pipeline' }
];

const activity = [
  { id: '1', title: 'Enterprise design system deployed', detail: 'Sidebar, top navigation, UI primitives, modal, drawer, and form framework are now live.', time: 'Today', type: 'system' as const },
  { id: '2', title: 'Dashboard v1 started', detail: 'Executive command center layout is being prepared for connected data.', time: 'Now', type: 'system' as const },
  { id: '3', title: 'Protected business logic remains locked', detail: 'Booking engine, payments, Prisma, auth, and AI backend were not changed.', time: 'Stable', type: 'system' as const }
];

export default function AppDashboardPage() {
  return (
    <AppShell title="Dashboard" subtitle="Executive operating home for every Jarvixx tenant.">
      <div style={{ display: 'grid', gap: 22 }}>
        <section
          className="lux-card"
          style={{
            padding: 26,
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: 22,
            alignItems: 'center',
            background: 'linear-gradient(135deg, #ffffff 0%, #fbfaf7 58%, #f5ecd7 100%)',
            overflow: 'hidden'
          }}
        >
          <div>
            <p className="kicker">Jarvixx Executive Command Center</p>
            <h2 style={{ margin: '8px 0 10px', fontSize: 34, letterSpacing: '-0.04em', lineHeight: 1.02 }}>Run today with clarity.</h2>
            <p style={{ margin: 0, color: 'var(--jarvixx-muted)', fontSize: 15, lineHeight: 1.55, maxWidth: 700 }}>
              A premium operations workspace for bookings, dispatch, payments, quality, growth, workforce, and AI visibility. Live tenant data will connect after each protected module is rebuilt on the shared design system.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 18 }}>
              <Button href="/app/bookings/new">New Booking</Button>
              <Button href="/app/customers" variant="secondary">Open Customers</Button>
              <Button href="/app/dispatch" variant="secondary">Review Dispatch</Button>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 10 }}>
            <StatCard label="System status" value="Stable" supportingText="Production foundation active" />
            <StatCard label="Protected areas" value="Locked" supportingText="No payment or booking logic changed" />
          </div>
        </section>

        <MetricGrid>
          <KpiCard label="Today" value="0" detail="Bookings connected after Booking Command Center rebuild" trend={{ label: 'Ready for live data', direction: 'flat' }} icon="DB" />
          <KpiCard label="Revenue" value="$0" detail="Payment snapshots remain protected until payment module phase" trend={{ label: 'No logic changed', direction: 'flat' }} icon="FC" />
          <KpiCard label="Quality" value="0" detail="Reviews, inspections, claims, and re-cleans will surface here" trend={{ label: 'Queue prepared', direction: 'flat' }} icon="QC" />
          <KpiCard label="Growth" value="0" detail="Leads, campaigns, and lost customers will connect later" trend={{ label: 'Pipeline ready', direction: 'flat' }} icon="GC" />
        </MetricGrid>

        <section style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 18, alignItems: 'start' }}>
          <Card title="Today’s Operating Priorities" subtitle="A clean command view for the most important daily actions.">
            <div style={{ display: 'grid', gap: 12 }}>
              {todayPriorities.map((item) => (
                <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12, alignItems: 'center', padding: 14, border: '1px solid var(--jarvixx-border)', borderRadius: 18, background: '#fff' }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{item.label}</div>
                    <div style={{ color: 'var(--jarvixx-muted)', fontSize: 12, marginTop: 4 }}>{item.supportingText}</div>
                  </div>
                  <Badge tone="gold">{item.value}</Badge>
                </div>
              ))}
            </div>
          </Card>

          <ActivityFeed title="Executive Activity Feed" items={activity} />
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
