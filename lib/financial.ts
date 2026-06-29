import type { EntityId, TenantOwned } from './schema';

export type PaymentProcessor = 'Stripe' | 'Square' | 'Manual' | 'None';

export type PaymentState =
  | 'Not Required'
  | 'Pending'
  | 'Hold Active'
  | 'Pre-Charge'
  | 'Captured'
  | 'Failed'
  | 'Refunded'
  | 'Partially Refunded'
  | 'Disputed'
  | 'Void';

export type PaymentMethod = TenantOwned & {
  customerId: EntityId;
  processor: PaymentProcessor;
  processorCustomerId?: string;
  processorPaymentMethodId?: string;
  brand?: string;
  last4?: string;
  expMonth?: number;
  expYear?: number;
  status: 'Active' | 'Expired' | 'Removed' | 'Failed';
};

export type PaymentTransaction = TenantOwned & {
  customerId: EntityId;
  bookingId?: EntityId;
  quoteId?: EntityId;
  invoiceId?: EntityId;
  processor: PaymentProcessor;
  state: PaymentState;
  amountCents: number;
  currency: 'USD';
  processorTransactionId?: string;
  failureReason?: string;
};

export type InvoiceRecord = TenantOwned & {
  invoiceNumber: string;
  customerId: EntityId;
  bookingId?: EntityId;
  status: 'Draft' | 'Sent' | 'Viewed' | 'Paid' | 'Partially Paid' | 'Past Due' | 'Void';
  subtotalCents: number;
  taxCents: number;
  discountCents: number;
  totalCents: number;
  balanceCents: number;
  dueDate?: string;
};

export type FinancialEvent = TenantOwned & {
  customerId?: EntityId;
  bookingId?: EntityId;
  invoiceId?: EntityId;
  transactionId?: EntityId;
  eventType: string;
  amountCents: number;
  memo?: string;
};

export const demoPaymentIssues: PaymentTransaction[] = [
  {
    id: 'PAY-3001',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    customerId: 'CUS-1003',
    bookingId: 'BKG-2002',
    processor: 'Stripe',
    state: 'Failed',
    amountCents: 17500,
    currency: 'USD',
    failureReason: 'Card declined'
  },
  {
    id: 'PAY-3002',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    customerId: 'CUS-1001',
    bookingId: 'BKG-2001',
    processor: 'Square',
    state: 'Hold Active',
    amountCents: 32000,
    currency: 'USD'
  }
];
