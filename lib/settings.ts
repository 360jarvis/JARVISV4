import type { EntityId, TenantOwned } from './schema';

export type SetupSectionStatus = 'Not Started' | 'In Progress' | 'Complete' | 'Blocked';

export type SetupSection = {
  key: string;
  title: string;
  description: string;
  required: boolean;
  status: SetupSectionStatus;
};

export type CompanyProfileSettings = TenantOwned & {
  legalName: string;
  displayName: string;
  phone?: string;
  email?: string;
  website?: string;
  timezone: string;
  defaultLanguage: 'en' | 'es';
};

export type ServiceAreaRule = TenantOwned & {
  type: 'ZIP' | 'City' | 'County' | 'Blocked Zone' | 'Route Zone';
  value: string;
  active: boolean;
  travelFeeCents?: number;
  areaAdjustmentPercent?: number;
};

export type ArrivalWindowSetting = TenantOwned & {
  label: string;
  startTime: string;
  endTime: string;
  active: boolean;
  sortOrder: number;
};

export type PaymentSettings = TenantOwned & {
  defaultProcessor: 'Stripe' | 'Square' | 'None';
  preAuthorizationHours: number;
  cancellationWindowHours: number;
  cancellationFeePercent: number;
  rescheduleFeePercent: number;
  failedPaymentGraceHours: number;
};

export const setupSections: SetupSection[] = [
  { key: 'company', title: 'Company Profile', description: 'Company name, contact details, timezone, and default language.', required: true, status: 'In Progress' },
  { key: 'branding', title: 'Branding', description: 'Logo, colors, customer-facing display, and document branding.', required: true, status: 'Not Started' },
  { key: 'hours', title: 'Business Hours', description: 'Open days, hours, holidays, and closed dates.', required: true, status: 'Not Started' },
  { key: 'areas', title: 'Service Areas', description: 'ZIP codes, cities, counties, blocked areas, and route zones.', required: true, status: 'Not Started' },
  { key: 'arrival_windows', title: 'Arrival Windows', description: 'Tenant-approved booking windows.', required: true, status: 'Not Started' },
  { key: 'payments', title: 'Payment Settings', description: 'Processor, holds, fees, failed payments, and refunds.', required: true, status: 'Not Started' },
  { key: 'notifications', title: 'Notifications', description: 'Email, SMS, reminders, alerts, and templates.', required: true, status: 'Not Started' },
  { key: 'users', title: 'Users', description: 'Owner, office staff, dispatch, workforce, and portal access.', required: true, status: 'Not Started' }
];
