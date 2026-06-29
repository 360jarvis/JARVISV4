export type AccessType = 'Platform Admin' | 'Tenant User' | 'Customer Portal' | 'Provider Portal' | 'Staff Portal' | 'Anonymous';

export type RequestContext = {
  tenantId?: string;
  userId?: string;
  role?: string;
  accessType: AccessType;
};

export function getRequestContext(request: Request): RequestContext {
  const tenantId = request.headers.get('x-tenant-id') || undefined;
  const userId = request.headers.get('x-user-id') || undefined;
  const role = request.headers.get('x-user-role') || undefined;

  return {
    tenantId,
    userId,
    role,
    accessType: tenantId ? 'Tenant User' : 'Anonymous'
  };
}

export function requireTenantContext(context: RequestContext) {
  if (!context.tenantId) {
    throw new Error('Tenant context is required.');
  }
}
