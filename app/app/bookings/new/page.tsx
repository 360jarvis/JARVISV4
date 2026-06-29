import AppShell from '../../../../components/AppShell';
import ModulePlaceholder from '../../../../components/ModulePlaceholder';
import PricingSummary from '../../../../components/PricingSummary';
import { DEFAULT_ARRIVAL_WINDOWS } from '../../../../components/scheduling/ArrivalWindows';

export default function SmartBookingPage() {
  return (
    <AppShell title="Smart Booking Terminal" subtitle="ZIP check, customer matching, smart calendar, pricing, payment, assignment, and recurring setup.">
      <div style={{ display: 'grid', gap: 18 }}>
        <section className="lux-card" style={{ padding: 22, display: 'grid', gap: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div>
              <p className="kicker">Scheduling Standard</p>
              <h2 style={{ margin: '8px 0 8px', fontSize: 24, letterSpacing: '-0.035em' }}>Arrival Window is the default booking time.</h2>
              <p style={{ margin: 0, color: 'var(--jarvixx-muted)', maxWidth: 760, lineHeight: 1.55 }}>
                Residential cleaning should show an arrival window unless the tenant enables exact appointment scheduling. This protects dispatch flexibility while keeping customers informed.
              </p>
            </div>
            <div style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 999, padding: '9px 12px', background: 'var(--jarvixx-gold-soft)', fontSize: 12, fontWeight: 800 }}>
              Exact Appointment Time: Optional Later
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 12 }}>
            {DEFAULT_ARRIVAL_WINDOWS.map((window) => (
              <div key={window.id} style={{ border: '1px solid var(--jarvixx-border)', borderRadius: 18, background: '#fff', padding: 16, boxShadow: '0 12px 30px rgba(23,19,13,0.035)' }}>
                <div style={{ color: 'var(--jarvixx-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 800 }}>Arrival Window</div>
                <div style={{ marginTop: 8, fontSize: 18, fontWeight: 900, letterSpacing: '-0.02em' }}>{window.label}</div>
                <div style={{ marginTop: 10, color: 'var(--jarvixx-muted)', fontSize: 12 }}>Customer-facing booking time</div>
              </div>
            ))}
          </div>
        </section>
        <ModulePlaceholder name="Smart Booking Terminal Workflow" status="Foundation workflow shell" />
        <PricingSummary />
      </div>
    </AppShell>
  );
}
