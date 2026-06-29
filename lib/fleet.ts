import type { EntityId, TenantOwned } from './schema';

export type FleetVehicleStatus = 'Active' | 'Maintenance' | 'Out of Service' | 'Retired';

export type FleetVehicle = TenantOwned & {
  vehicleNumber: string;
  name: string;
  make?: string;
  model?: string;
  year?: number;
  licensePlate?: string;
  status: FleetVehicleStatus;
  assignedTeamId?: EntityId;
  assignedWorkerId?: EntityId;
  odometer?: number;
  nextMaintenanceDate?: string;
};

export type MaintenanceTicket = TenantOwned & {
  ticketNumber: string;
  vehicleId: EntityId;
  status: 'Open' | 'Scheduled' | 'In Progress' | 'Completed' | 'Canceled';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  title: string;
  description?: string;
  estimatedCostCents?: number;
  completedAt?: string;
};

export const demoFleetVehicles: FleetVehicle[] = [
  {
    id: 'FLT-9001',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    vehicleNumber: 'FLT-9001',
    name: 'Route Van 1',
    make: 'Ford',
    model: 'Transit',
    year: 2022,
    licensePlate: 'JXV-001',
    status: 'Active',
    odometer: 45210,
    nextMaintenanceDate: '07/15/2026'
  }
];
