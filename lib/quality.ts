import type { EntityId, TenantOwned } from './schema';

export type QualityRecordType = 'Inspection' | 'Complaint' | 'Reclean' | 'Damage Claim' | 'Review';
export type QualityStatus = 'New' | 'In Review' | 'Assigned' | 'Waiting Customer' | 'Reclean Scheduled' | 'Resolved' | 'Closed' | 'Escalated';
export type QualitySeverity = 'Low' | 'Medium' | 'High' | 'Critical';

export type QualityRecord = TenantOwned & {
  recordNumber: string;
  type: QualityRecordType;
  status: QualityStatus;
  severity: QualitySeverity;
  customerId: EntityId;
  bookingId?: EntityId;
  assignedUserId?: EntityId;
  title: string;
  description?: string;
  resolution?: string;
  financialImpactCents?: number;
};

export type InspectionResult = TenantOwned & {
  qualityRecordId: EntityId;
  bookingId: EntityId;
  supervisorId: EntityId;
  result: 'Pass' | 'Fail' | 'Needs Follow Up';
  checklistScore?: number;
  notes?: string;
};

export type ReviewRecord = TenantOwned & {
  customerId: EntityId;
  bookingId?: EntityId;
  rating: 1 | 2 | 3 | 4 | 5;
  source: 'Internal' | 'Google' | 'Portal' | 'SMS' | 'Email';
  feedback?: string;
  routedToGoogle: boolean;
};

export const demoQualityRecords: QualityRecord[] = [
  {
    id: 'QLT-5001',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    recordNumber: 'QLT-5001',
    type: 'Complaint',
    status: 'In Review',
    severity: 'High',
    customerId: 'CUS-1003',
    bookingId: 'BKG-2002',
    title: 'Customer reported missed areas',
    description: 'Review photos and decide re-clean or credit.',
    financialImpactCents: 0
  },
  {
    id: 'QLT-5002',
    tenantId: 'tenant-demo',
    createdAt: '2026-06-29T12:00:00Z',
    updatedAt: '2026-06-29T12:00:00Z',
    recordNumber: 'QLT-5002',
    type: 'Inspection',
    status: 'Assigned',
    severity: 'Medium',
    customerId: 'CUS-1001',
    bookingId: 'BKG-2001',
    title: 'Supervisor inspection pending',
    description: 'Post-service inspection requested for VIP customer.'
  }
];
