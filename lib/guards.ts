import type { EntityId, UserRole } from './schema';

export type RequestContext = {
  tenantId: EntityId;
  userId: EntityId;
  role: UserRole;
};

const rolePermissions: Record<UserRole, string[]> = {
  'Platform Admin': ['platform:*'],
  Owner: ['tenant:*', 'customers:*', 'bookings:*', 'payments:*', 'reports:*'],
  Administrator: ['customers:*', 'bookings:*', 'payments:*', 'reports:*', 'settings:read'],
  'Office Manager': ['customers:*', 'bookings:*', 'payments:read', 'reports:read'],
  Dispatcher: ['customers:read', 'bookings:*', 'dispatch:*', 'workforce:read'],
  HR: ['workforce:*', 'reports:read'],
  Supervisor: ['customers:read', 'bookings:read', 'quality:*', 'workforce:read'],
  'Team Leader': ['bookings:read', 'quality:write', 'workforce:self'],
  Provider: ['bookings:assigned', 'workforce:self'],
  'Customer Portal User': ['portal:self']
};

export function hasPermission(role: UserRole, permission: string) {
  const permissions = rolePermissions[role] || [];
  const [resource] = permission.split(':');
  return permissions.includes(permission) || permissions.includes(resource + ':*') || permissions.includes('tenant:*') || permissions.includes('platform:*');
}

export function requirePermission(context: RequestContext, permission: string) {
  if (!hasPermission(context.role, permission)) {
    throw new Error('Permission denied: ' + permission);
  }
}

export function assertTenantAccess(context: RequestContext, tenantId: EntityId) {
  if (context.role === 'Platform Admin') return;
  if (context.tenantId !== tenantId) {
    throw new Error('Tenant access denied');
  }
}
