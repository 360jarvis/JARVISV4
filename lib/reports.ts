export type ReportGroup = 'Executive' | 'Customers' | 'Bookings' | 'Financial' | 'Payments' | 'Workforce' | 'Operations' | 'Quality' | 'Growth' | 'Inventory' | 'Fleet' | 'Audit';
export type ReportExportType = 'PDF' | 'CSV' | 'Print';

export type ReportDefinition = {
  key: string;
  title: string;
  group: ReportGroup;
  description: string;
  sourceModules: string[];
  exportTypes: ReportExportType[];
};

export const reportCatalog: ReportDefinition[] = [
  {
    key: 'executive_summary',
    title: 'Executive Summary',
    group: 'Executive',
    description: 'High-level view of revenue, bookings, customers, quality, growth, and operations.',
    sourceModules: ['Customers', 'Bookings', 'Financial', 'Quality', 'Growth'],
    exportTypes: ['PDF', 'CSV', 'Print']
  },
  {
    key: 'revenue_by_service',
    title: 'Revenue by Service',
    group: 'Financial',
    description: 'Revenue grouped by service type and date range.',
    sourceModules: ['Bookings', 'Payments', 'Financial'],
    exportTypes: ['PDF', 'CSV', 'Print']
  },
  {
    key: 'open_balances',
    title: 'Open Balances',
    group: 'Payments',
    description: 'Customers and bookings with unpaid or failed payment balances.',
    sourceModules: ['Payments', 'Customers', 'Bookings'],
    exportTypes: ['PDF', 'CSV', 'Print']
  },
  {
    key: 'team_productivity',
    title: 'Team Productivity',
    group: 'Workforce',
    description: 'Revenue, hours, completion rate, and quality by team or worker.',
    sourceModules: ['Workforce', 'Dispatch', 'Bookings', 'Quality'],
    exportTypes: ['PDF', 'CSV', 'Print']
  },
  {
    key: 'quality_summary',
    title: 'Quality Summary',
    group: 'Quality',
    description: 'Complaints, re-cleans, inspections, reviews, and quality risks.',
    sourceModules: ['Quality', 'Customers', 'Bookings', 'Workforce'],
    exportTypes: ['PDF', 'CSV', 'Print']
  },
  {
    key: 'growth_attribution',
    title: 'Growth Attribution',
    group: 'Growth',
    description: 'Leads, quote follow-ups, referrals, and booked revenue by source.',
    sourceModules: ['Growth', 'Quotes', 'Bookings', 'Communications'],
    exportTypes: ['PDF', 'CSV', 'Print']
  },
  {
    key: 'audit_log',
    title: 'Audit Log',
    group: 'Audit',
    description: 'Sensitive changes and important system events.',
    sourceModules: ['Audit Logs'],
    exportTypes: ['CSV', 'Print']
  }
];
