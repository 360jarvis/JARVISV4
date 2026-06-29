import type { EntityId, TenantOwned } from './schema';

export type PortalType = 'Customer' | 'Provider' | 'Employee' | 'Contractor';
export type PortalStatus = 'Invited' | 'Active' | 'Disabled' | 'Locked';

export type PortalAccount = TenantOwned & {
  portalType: PortalType;
  email: string;
  displayName: string;
  status: PortalStatus;
  linkedCustomerId?: EntityId;
  linkedProviderId?: EntityId;
  linkedEmployeeId?: EntityId;
  lastLoginAt?: string;
};

export type PortalPermission =
  | 'bookings:read:self'
  | 'bookings:reschedule:self'
  | 'bookings:cancel:self'
  | 'quotes:read:self'
  | 'quotes:accept:self'
  | 'payments:update:self'
  | 'documents:read:self'
  | 'documents:upload:self'
  | 'reviews:create:self'
  | 'route:read:assigned'
  | 'time_events:create:self'
  | 'checklists:complete:assigned'
  | 'payroll:read:self';

export const portalPermissionMap: Record<PortalType, PortalPermission[]> = {
  Customer: ['bookings:read:self', 'bookings:reschedule:self', 'bookings:cancel:self', 'quotes:read:self', 'quotes:accept:self', 'payments:update:self', 'documents:read:self', 'documents:upload:self', 'reviews:create:self'],
  Provider: ['route:read:assigned', 'time_events:create:self', 'checklists:complete:assigned', 'documents:read:self', 'documents:upload:self', 'payroll:read:self'],
  Employee: ['bookings:read:self', 'time_events:create:self', 'documents:read:self', 'documents:upload:self', 'payroll:read:self'],
  Contractor: ['route:read:assigned', 'time_events:create:self', 'checklists:complete:assigned', 'documents:read:self', 'documents:upload:self', 'payroll:read:self']
};

export function portalHasPermission(portalType: PortalType, permission: PortalPermission) {
  return portalPermissionMap[portalType].includes(permission);
}
