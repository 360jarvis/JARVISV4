import type { EntityId, TenantOwned } from './schema';

export type CommunicationChannel = 'Email' | 'SMS' | 'Internal Chat' | 'Portal Message' | 'AI Chat' | 'Website Widget' | 'Phone Log' | 'System Alert';
export type MessageDirection = 'Inbound' | 'Outbound' | 'Internal' | 'System';
export type MessageStatus = 'Draft' | 'Queued' | 'Sent' | 'Delivered' | 'Opened' | 'Clicked' | 'Failed' | 'Bounced' | 'Replied' | 'Unsubscribed';

export type MessageRecord = TenantOwned & {
  channel: CommunicationChannel;
  direction: MessageDirection;
  status: MessageStatus;
  subject?: string;
  body: string;
  fromName?: string;
  fromAddress?: string;
  toName?: string;
  toAddress?: string;
  customerId?: EntityId;
  bookingId?: EntityId;
  quoteId?: EntityId;
  invoiceId?: EntityId;
  workerId?: EntityId;
  sourceModule: string;
};

export type NotificationTemplate = TenantOwned & {
  name: string;
  channel: CommunicationChannel;
  category: 'Booking' | 'Quote' | 'Payment' | 'Review' | 'Quality' | 'Dispatch' | 'Workforce' | 'Billing' | 'Marketing' | 'Support';
  subject?: string;
  body: string;
  active: boolean;
};

export type NotificationEvent = TenantOwned & {
  templateId?: EntityId;
  messageId?: EntityId;
  customerId?: EntityId;
  bookingId?: EntityId;
  eventType: MessageStatus;
  providerEventId?: string;
  metadata?: Record<string, unknown>;
};

export const demoMessages: MessageRecord[] = [
  {
    id: 'MSG-4001',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    channel: 'Email',
    direction: 'Outbound',
    status: 'Sent',
    subject: 'Booking Confirmation',
    body: 'Your cleaning has been confirmed.',
    toName: 'Maria Gonzalez',
    toAddress: 'maria@example.com',
    customerId: 'CUS-1001',
    bookingId: 'BKG-2001',
    sourceModule: 'Bookings'
  },
  {
    id: 'MSG-4002',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    channel: 'SMS',
    direction: 'Outbound',
    status: 'Failed',
    body: 'Please update your card for your upcoming service.',
    toName: 'Angela Reed',
    toAddress: '(832) 555-0122',
    customerId: 'CUS-1003',
    bookingId: 'BKG-2002',
    sourceModule: 'Payments'
  }
];
