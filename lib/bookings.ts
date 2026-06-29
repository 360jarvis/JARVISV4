import type { EntityId, TenantOwned } from './schema';

export type BookingSource =
  | 'Office'
  | 'Online'
  | 'Customer Portal'
  | 'Jarvixx AI'
  | 'Website Chat'
  | 'Commercial Form'
  | 'Quote Conversion'
  | 'Import';

export type BookingStatus =
  | 'Draft'
  | 'Scheduled'
  | 'Assigned'
  | 'Confirmed'
  | 'On The Way'
  | 'Arrived'
  | 'In Progress'
  | 'Completed'
  | 'Canceled'
  | 'Rescheduled'
  | 'Payment Failed'
  | 'Needs Review';

export type ServiceCategory = 'Residential' | 'Commercial' | 'Airbnb' | 'Vacation Rental';

export type ServiceType =
  | 'Standard Cleaning'
  | 'Deep Cleaning'
  | 'Move In Out Cleaning'
  | 'Post Construction'
  | 'Office Cleaning'
  | 'Airbnb Turnover'
  | 'Custom';

export type Frequency = 'One Time' | 'Weekly' | 'Bi-Weekly' | 'Monthly' | 'Custom';

export type ArrivalWindow = '8-10' | '10-1' | '1-3' | '3-5' | 'Exact Time';

export type BookingRecord = TenantOwned & {
  bookingNumber: string;
  source: BookingSource;
  status: BookingStatus;
  customerId: EntityId;
  propertyId?: EntityId;
  quoteId?: EntityId;
  recurringSeriesId?: EntityId;
  parentBookingId?: EntityId;
  serviceCategory: ServiceCategory;
  serviceType: ServiceType;
  frequency: Frequency;
  serviceDate: string;
  arrivalWindow: ArrivalWindow;
  exactTime?: string;
  estimatedDurationMinutes: number;
  teamSize: number;
  assignedProviderIds: EntityId[];
  subtotalCents: number;
  discountCents: number;
  taxCents: number;
  totalCents: number;
  paymentStatus: 'Not Required' | 'Pending' | 'Hold Active' | 'Paid' | 'Failed' | 'Refunded';
  notes?: string;
  accessInstructions?: string;
};

export type RecurringSeries = TenantOwned & {
  customerId: EntityId;
  anchorBookingId: EntityId;
  frequency: Exclude<Frequency, 'One Time'>;
  startDate: string;
  nextServiceDate: string;
  status: 'Active' | 'Paused' | 'Canceled' | 'Completed';
  ruleJson: Record<string, unknown>;
};

export const bookingWorkflowSteps = ['Tenant', 'Customer', 'Service', 'Property', 'Schedule', 'Pricing', 'Payment', 'Assignment', 'Review', 'Save'];
