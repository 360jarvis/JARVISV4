export type EntityId = string;

export type TenantOwned = {
  id: EntityId;
  tenantId: EntityId;
  createdAt: string;
  updatedAt: string;
  createdByUserId?: EntityId;
  updatedByUserId?: EntityId;
  deletedAt?: string;
  sourceModule?: string;
};

export type Tenant = {
  id: EntityId;
  name: string;
  slug: string;
  plan: 'Starter' | 'Growth' | 'Premium' | 'Platform';
  status: 'Trial' | 'Active' | 'Past Due' | 'Locked' | 'Canceled';
  timezone: string;
  defaultDateFormat: 'MM/DD/YYYY';
  createdAt: string;
  updatedAt: string;
};

export type UserRole =
  | 'Owner'
  | 'Administrator'
  | 'Office Manager'
  | 'Dispatcher'
  | 'HR'
  | 'Supervisor'
  | 'Team Leader'
  | 'Provider'
  | 'Customer Portal User'
  | 'Platform Admin';

export type User = TenantOwned & {
  name: string;
  email: string;
  role: UserRole;
  status: 'Invited' | 'Active' | 'Disabled';
};

export type AuditLog = TenantOwned & {
  actorUserId?: EntityId;
  actorRole?: UserRole;
  action: string;
  entityType: string;
  entityId: EntityId;
  beforeValue?: Record<string, unknown>;
  afterValue?: Record<string, unknown>;
  ipAddress?: string;
  device?: string;
};

export type TimelineEvent = TenantOwned & {
  customerId?: EntityId;
  bookingId?: EntityId;
  quoteId?: EntityId;
  paymentId?: EntityId;
  title: string;
  body?: string;
  eventType: string;
};
