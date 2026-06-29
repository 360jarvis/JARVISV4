import type { EntityId, TenantOwned } from './schema';

export type LeadSource = 'Website Form' | 'Website Chat' | 'Public Calculator' | 'Customer Portal' | 'Office Entry' | 'Referral' | 'Google Business Profile' | 'Paid Ad' | 'Social Media' | 'Import' | 'Jarvixx AI';
export type LeadStatus = 'New' | 'Contacted' | 'Quoted' | 'Follow Up' | 'Won' | 'Lost' | 'Archived';
export type GrowthProgramType = 'Quote Follow Up' | 'Win Back' | 'Review Request' | 'Referral' | 'Promotion' | 'Announcement';
export type GrowthProgramStatus = 'Draft' | 'Scheduled' | 'Running' | 'Paused' | 'Completed' | 'Canceled';

export type LeadRecord = TenantOwned & {
  leadNumber: string;
  source: LeadSource;
  status: LeadStatus;
  name: string;
  phone?: string;
  email?: string;
  customerId?: EntityId;
  quoteId?: EntityId;
  bookingId?: EntityId;
  programId?: EntityId;
  estimatedValueCents?: number;
  notes?: string;
};

export type GrowthProgram = TenantOwned & {
  name: string;
  type: GrowthProgramType;
  status: GrowthProgramStatus;
  audience: string;
  channel: 'Email' | 'SMS' | 'Email and SMS' | 'Internal';
  sentCount: number;
  bookedCount: number;
  revenueCents: number;
};

export type ReferralRecord = TenantOwned & {
  referrerCustomerId: EntityId;
  referredCustomerId?: EntityId;
  status: 'Pending' | 'Booked' | 'Rewarded' | 'Canceled';
  rewardCents?: number;
};

export const demoLeads: LeadRecord[] = [
  {
    id: 'LED-6001',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    leadNumber: 'LED-6001',
    source: 'Website Chat',
    status: 'New',
    name: 'New Homeowner Lead',
    phone: '(713) 555-0191',
    email: 'lead@example.com',
    estimatedValueCents: 32000,
    notes: 'Asked for deep cleaning availability this week.'
  },
  {
    id: 'LED-6002',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    leadNumber: 'LED-6002',
    source: 'Public Calculator',
    status: 'Quoted',
    name: 'Calculator Quote Lead',
    phone: '(832) 555-0188',
    email: 'quotelead@example.com',
    quoteId: 'QTE-1001',
    estimatedValueCents: 27600,
    notes: 'Quote created but not booked.'
  }
];

export const demoGrowthPrograms: GrowthProgram[] = [
  {
    id: 'GRW-7001',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    name: 'Quote Follow Up Program',
    type: 'Quote Follow Up',
    status: 'Running',
    audience: 'Quotes sent but not booked',
    channel: 'Email and SMS',
    sentCount: 18,
    bookedCount: 3,
    revenueCents: 84000
  }
];
