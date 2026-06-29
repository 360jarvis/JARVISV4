import AppShell from '../../../../components/AppShell';
import ModulePlaceholder from '../../../../components/ModulePlaceholder';
import PricingSummary from '../../../../components/PricingSummary';

export default function SmartBookingPage() {
  return (
    <AppShell title="Smart Booking Terminal" subtitle="ZIP check, customer matching, smart calendar, pricing, payment, assignment, and recurring setup.">
      <div style={{ display: 'grid', gap: 18 }}>
        <ModulePlaceholder name="Smart Booking Terminal Workflow" status="Foundation workflow shell" />
        <PricingSummary />
      </div>
    </AppShell>
  );
}
