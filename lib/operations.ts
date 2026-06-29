import type { EntityId, TenantOwned } from './schema';
import type { BookingStatus } from './bookings';

export type WorkerStatus = 'Active' | 'Inactive' | 'On Leave' | 'Suspended';
export type WorkerType = 'Employee' | 'Contractor' | 'Provider';
export type SkillName = 'Standard Cleaning' | 'Deep Cleaning' | 'Move Out' | 'Office' | 'Airbnb' | 'Post Construction' | 'Windows' | 'Team Leader';
export type PayType = 'Hourly' | 'Salary' | 'Per House' | 'Percentage' | 'Flat Per Job';

export type WorkforceMember = TenantOwned & {
  employeeNumber: string;
  name: string;
  workerType: WorkerType;
  status: WorkerStatus;
  position: string;
  office?: string;
  teamId?: EntityId;
  languages: string[];
  skills: SkillName[];
  hireDate?: string;
  payType: PayType;
};

export type TeamRecord = TenantOwned & {
  name: string;
  leaderId: EntityId;
  memberIds: EntityId[];
  vehicleId?: EntityId;
  capacityMinutesPerDay: number;
  preferredServiceTypes: SkillName[];
};

export type AssignmentRecord = TenantOwned & {
  bookingId: EntityId;
  teamId?: EntityId;
  workerIds: EntityId[];
  assignedByUserId: EntityId;
  assignmentReason?: string;
  status: 'Suggested' | 'Assigned' | 'Accepted' | 'Declined' | 'Reassigned';
};

export type DispatchCard = {
  bookingId: EntityId;
  bookingNumber: string;
  customerName: string;
  address: string;
  phone: string;
  service: string;
  durationMinutes: number;
  priceCents: number;
  arrivalWindow: string;
  assignedTeam?: string;
  status: BookingStatus;
  paymentStatus: string;
  qualityFlag?: string;
};

export type ClockEventType = 'Clock In' | 'Driving' | 'Arrived' | 'Start Cleaning' | 'Break' | 'Resume' | 'Complete' | 'Clock Out';

export type ClockEvent = TenantOwned & {
  workerId: EntityId;
  bookingId?: EntityId;
  eventType: ClockEventType;
  eventTime: string;
  latitude?: number;
  longitude?: number;
};

export const demoDispatchCards: DispatchCard[] = [
  {
    bookingId: 'BKG-2001',
    bookingNumber: 'BKG-2001',
    customerName: 'Maria Gonzalez',
    address: 'Houston, TX 77007',
    phone: '(713) 555-0148',
    service: 'Deep Cleaning',
    durationMinutes: 255,
    priceCents: 32000,
    arrivalWindow: '8-10',
    assignedTeam: 'Team Gold',
    status: 'Assigned',
    paymentStatus: 'Hold Active'
  },
  {
    bookingId: 'BKG-2002',
    bookingNumber: 'BKG-2002',
    customerName: 'Angela Reed',
    address: 'Katy, TX 77494',
    phone: '(832) 555-0122',
    service: 'Airbnb Turnover',
    durationMinutes: 180,
    priceCents: 22000,
    arrivalWindow: '10-1',
    assignedTeam: 'Unassigned',
    status: 'Scheduled',
    paymentStatus: 'Pending',
    qualityFlag: 'Photo checklist required'
  }
];
