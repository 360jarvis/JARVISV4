import type { EntityId, TenantOwned } from './schema';

export type InventoryItemType = 'Supply' | 'Product' | 'Equipment' | 'Asset' | 'Serialized Item';
export type InventoryLocationType = 'Warehouse' | 'Office' | 'Vehicle' | 'Employee' | 'Team' | 'Franchise' | 'Closet' | 'Custom';

export type InventoryItem = TenantOwned & {
  itemNumber: string;
  name: string;
  type: InventoryItemType;
  category: string;
  unitOfMeasure: string;
  quantityOnHand: number;
  reorderPoint: number;
  averageCostCents: number;
  locationId?: EntityId;
  vendorId?: EntityId;
  active: boolean;
};

export type InventoryLocation = TenantOwned & {
  name: string;
  type: InventoryLocationType;
  active: boolean;
};

export const demoInventoryItems: InventoryItem[] = [
  {
    id: 'INV-8001',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    itemNumber: 'INV-8001',
    name: 'All Purpose Cleaner',
    type: 'Supply',
    category: 'Cleaning Supplies',
    unitOfMeasure: 'Bottle',
    quantityOnHand: 24,
    reorderPoint: 10,
    averageCostCents: 499,
    active: true
  },
  {
    id: 'INV-8002',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    itemNumber: 'INV-8002',
    name: 'Vacuum Unit',
    type: 'Equipment',
    category: 'Equipment',
    unitOfMeasure: 'Each',
    quantityOnHand: 4,
    reorderPoint: 1,
    averageCostCents: 18900,
    active: true
  }
];
