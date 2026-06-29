import AppShell from '../../../components/AppShell';
import SimpleInventoryCenter from '../../../components/SimpleInventoryCenter';

export default function InventoryPage() {
  return <AppShell title="Inventory" subtitle="Supplies, equipment, stock locations, reorder visibility, and job costing."><SimpleInventoryCenter /></AppShell>;
}
