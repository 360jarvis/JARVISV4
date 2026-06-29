import AppShell from '../../../components/AppShell';
import Customer360Enterprise from '../../../components/customers/Customer360Enterprise';
import { demoCustomers } from '../../../lib/customers';

export default function Customer360Page() {
  return (
    <AppShell title="Customer 360" subtitle="Enterprise customer profile, service history, property intelligence, and timeline foundation.">
      <Customer360Enterprise customer={demoCustomers[0]} />
    </AppShell>
  );
}
