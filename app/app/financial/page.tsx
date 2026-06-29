import AppShell from '../../../components/AppShell';
import FinancialCenter from '../../../components/FinancialCenter';

export default function FinancialPage() {
  return <AppShell title="Financial Command Center" subtitle="Revenue, balances, refunds, credits, costs, and financial reporting."><FinancialCenter /></AppShell>;
}
