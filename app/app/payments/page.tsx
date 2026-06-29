import AppShell from '../../../components/AppShell';
import PaymentCommandCenter from '../../../components/PaymentCommandCenter';

export default function PaymentsPage() {
  return <AppShell title="Payment Command Center" subtitle="Failed payments, active holds, card updates, refunds, credits, and payment alerts."><PaymentCommandCenter /></AppShell>;
}
