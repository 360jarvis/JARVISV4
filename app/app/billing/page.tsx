import AppShell from '../../../components/AppShell';
import BillingCenter from '../../../components/BillingCenter';

export default function BillingPage() {
  return <AppShell title="Billing" subtitle="Plans, trial status, tenant billing access, invoices, and billing controls."><BillingCenter /></AppShell>;
}
