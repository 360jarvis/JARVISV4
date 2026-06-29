import type { EntityId, TenantOwned, UserRole } from './schema';

export type AiChannel = 'App Chat' | 'Website Widget' | 'Customer Portal' | 'Provider Portal' | 'Voice' | 'Internal Automation';

export type AiConversation = TenantOwned & {
  channel: AiChannel;
  userId?: EntityId;
  customerId?: EntityId;
  bookingId?: EntityId;
  title: string;
  language: 'en' | 'es' | 'auto';
  status: 'Open' | 'Resolved' | 'Escalated' | 'Archived';
};

export type AiMemoryEntry = TenantOwned & {
  scope: 'Tenant' | 'User' | 'Customer' | 'Booking' | 'System';
  scopeId: EntityId;
  key: string;
  value: string;
  confidence: number;
  sourceModule: string;
};

export type AiActionStatus = 'Suggested' | 'Needs Approval' | 'Approved' | 'Executed' | 'Rejected' | 'Failed';

export type AiAction = TenantOwned & {
  conversationId?: EntityId;
  actorUserId?: EntityId;
  actorRole?: UserRole;
  actionType: string;
  sourceModule: string;
  targetEntityType?: string;
  targetEntityId?: EntityId;
  input: Record<string, unknown>;
  output?: Record<string, unknown>;
  status: AiActionStatus;
  requiresApproval: boolean;
};

export const aiCapabilityMap = [
  'Answer operational questions',
  'Summarize customer history',
  'Assist with booking creation',
  'Assist with quote creation',
  'Explain pricing',
  'Suggest dispatch assignments',
  'Identify payment issues',
  'Draft emails and SMS',
  'Generate reports',
  'Support website chat widget'
];

export const sensitiveAiActions = [
  'Charge card',
  'Refund payment',
  'Cancel booking',
  'Delete record',
  'Send campaign',
  'Change pricing rules',
  'Change payroll data',
  'Change tenant billing settings'
];
