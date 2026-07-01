import type { EntityId } from './schema';
import { formatCurrency } from './pricing';

type TenantRow = {
  tenantId: EntityId;
};

export type DashboardBookingSourceRecord = TenantRow & {
  id: EntityId;
  bookingNumber: string;
  customerId: EntityId;
  serviceType: string;
  status: string;
  totalCents: number;
  paymentStatus: string;
  serviceDate?: string;
  arrivalWindow?: string;
  exactTime?: string;
  assignedProviderIds?: EntityId[];
};

export type DashboardCustomerSourceRecord = TenantRow & {
  id: EntityId;
  name: string;
  phone?: string;
  email?: string;
  city?: string;
  zip?: string;
};

export type DashboardQuoteSourceRecord = TenantRow & {
  id: EntityId;
  quoteNumber: string;
  customerId: EntityId;
  status: string;
  expirationDate?: string;
  createdAt?: string;
  selectedPriceCents?: number;
};

export type DashboardPaymentSourceRecord = TenantRow & {
  id: EntityId;
  customerId?: EntityId;
  bookingId?: EntityId;
  processor: string;
  state: string;
  amountCents: number;
  createdAt?: string;
};

export type DashboardInvoiceSourceRecord = TenantRow & {
  id: EntityId;
  balanceCents: number;
};

export type DashboardWorkforceSourceRecord = TenantRow & {
  id: EntityId;
  name: string;
  payType?: string;
};

export type DashboardClockEventSourceRecord = TenantRow & {
  workerId: EntityId;
  bookingId?: EntityId;
  eventType: string;
  eventTime: string;
};

export type DashboardQualitySourceRecord = TenantRow & {
  id: EntityId;
  recordNumber: string;
  type: string;
  status: string;
  severity: string;
  customerId: EntityId;
  bookingId?: EntityId;
};

export type DashboardReviewSourceRecord = TenantRow & {
  rating: number;
};

export type DashboardLeadSourceRecord = TenantRow & {
  status: string;
  createdAt?: string;
};

export type DashboardCampaignSourceRecord = TenantRow & {
  revenueCents: number;
};

export type DashboardRecurringSourceRecord = TenantRow & {
  id: EntityId;
  customerId: EntityId;
  status: string;
  nextServiceDate?: string;
};

export type DashboardAuditLogSourceRecord = {
  tenantId?: EntityId;
};

export type DashboardTenantSourceRecord = {
  id: EntityId;
  timezone?: string;
};

export type DashboardSettingsRecord = TenantRow & {
  key: string;
  value: string;
};

export type DashboardSources = {
  bookings?: DashboardBookingSourceRecord[];
  customers?: DashboardCustomerSourceRecord[];
  quotes?: DashboardQuoteSourceRecord[];
  payments?: DashboardPaymentSourceRecord[];
  invoices?: DashboardInvoiceSourceRecord[];
  providers?: DashboardWorkforceSourceRecord[];
  clockEvents?: DashboardClockEventSourceRecord[];
  qualityTickets?: DashboardQualitySourceRecord[];
  reviews?: DashboardReviewSourceRecord[];
  leads?: DashboardLeadSourceRecord[];
  campaigns?: DashboardCampaignSourceRecord[];
  recurringSeries?: DashboardRecurringSourceRecord[];
  settings?: DashboardSettingsRecord[];
  auditLogs?: DashboardAuditLogSourceRecord[];
  tenantProfile?: DashboardTenantSourceRecord;
};

export type DashboardConnectionStatus = {
  state: 'tenant-required' | 'not-configured' | 'unavailable' | 'connected' | 'error';
  message: string;
};

export type DashboardKpi = {
  label: string;
  value: string;
  detail: string;
  href: string;
  empty: boolean;
  restricted?: boolean;
};

export type DashboardMetric = {
  label: string;
  value: string;
  detail: string;
  href: string;
  empty: boolean;
  restricted?: boolean;
};

export type DashboardAction = {
  label: string;
  href: string;
};

export type DashboardOperationRow = {
  id: string;
  bookingNumber: string;
  customerName: string;
  customerPhone?: string;
  serviceType: string;
  addressArea: string;
  arrivalWindow: string;
  assignedTeam: string;
  status: string;
  paymentStatus: string;
  routeWarning?: string;
  actions: DashboardAction[];
};

export type DashboardAlert = {
  id: string;
  priority: 'High' | 'Medium' | 'Low';
  module: string;
  title: string;
  related: string;
  action: DashboardAction;
  dismissPolicy: string;
};

export type DashboardSourceState = {
  key: keyof DashboardSources;
  label: string;
  connected: boolean;
  records: number;
};

export type DashboardAiSummary = {
  greeting: string;
  permissionScope: string;
  attention: string[];
  revenueRisks: string[];
  staffingProblems: string[];
  customerIssues: string[];
  followUpOpportunities: string[];
  suggestedActions: string[];
};

export type DashboardData = {
  dateLabel: string;
  tenantReady: boolean;
  hasFinancialAccess: boolean;
  topKpis: DashboardKpi[];
  operations: {
    rows: DashboardOperationRow[];
    emptyTitle: string;
    emptyBody: string;
  };
  revenueMetrics: DashboardMetric[];
  qualityMetrics: DashboardMetric[];
  growthMetrics: DashboardMetric[];
  workforceMetrics: DashboardMetric[];
  alerts: DashboardAlert[];
  aiSummary: DashboardAiSummary;
  sourceStates: DashboardSourceState[];
  connectionStatus: DashboardConnectionStatus;
};

type DashboardInput = {
  tenantId?: string;
  userName?: string;
  role?: string;
  now?: Date;
  sources?: DashboardSources;
  connectionStatus?: DashboardConnectionStatus;
};

const sourceLabels: Array<[keyof DashboardSources, string]> = [
  ['bookings', 'Bookings'],
  ['customers', 'Customers'],
  ['quotes', 'Quotes'],
  ['payments', 'Payments'],
  ['invoices', 'Invoices'],
  ['providers', 'Workforce'],
  ['clockEvents', 'Dispatch statuses'],
  ['qualityTickets', 'Quality tickets'],
  ['reviews', 'Reviews'],
  ['leads', 'Leads'],
  ['campaigns', 'Campaigns'],
  ['recurringSeries', 'Recurring series'],
  ['settings', 'Settings'],
  ['auditLogs', 'Audit logs'],
  ['tenantProfile', 'Tenant profile']
];

const financialRoles = new Set(['Owner', 'Administrator', 'Office Manager', 'Platform Admin']);
const activeQuoteStatuses = new Set(['draft', 'sent', 'viewed', 'follow up', 'negotiating']);
const openQualityStatuses = new Set(['new', 'in review', 'assigned', 'waiting customer', 'reclean scheduled', 'escalated']);
const incompleteBookingStatuses = new Set(['draft', 'scheduled', 'assigned', 'confirmed', 'on the way', 'arrived', 'in progress', 'payment failed', 'needs review']);

function normalize(value?: string) {
  return (value || '').replace(/_/g, ' ').toLowerCase();
}

function isConnected<T>(rows: T[] | undefined): rows is T[] {
  return Array.isArray(rows);
}

function tenantRows<T extends TenantRow>(rows: T[] | undefined, tenantId?: string): T[] {
  if (!tenantId || !rows) {
    return [];
  }

  return rows.filter((row) => row.tenantId === tenantId);
}

function sourceConnected(sources: DashboardSources | undefined, key: keyof DashboardSources) {
  if (!sources) {
    return false;
  }

  return sources[key] !== undefined;
}

function dateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseDate(value?: string) {
  if (!value) {
    return undefined;
  }

  const mmddyyyy = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (mmddyyyy) {
    return new Date(Number(mmddyyyy[3]), Number(mmddyyyy[1]) - 1, Number(mmddyyyy[2]));
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

function rowDateKey(value?: string) {
  const parsed = parseDate(value);
  return parsed ? dateKey(parsed) : '';
}

function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function startOfWeek(date: Date) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - start.getDay());
  return start;
}

function endOfWeek(date: Date) {
  const end = startOfWeek(date);
  end.setDate(end.getDate() + 6);
  end.setHours(23, 59, 59, 999);
  return end;
}

function isWithinRange(value: string | undefined, start: Date, end: Date) {
  const parsed = parseDate(value);
  return Boolean(parsed && parsed >= start && parsed <= end);
}

function formatDateWithDay(date: Date, timeZone?: string) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
    timeZone
  });
  const parts = formatter.formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.month}/${values.day}/${values.year}, ${values.weekday}`;
}

function formatPhone(phone?: string) {
  const digits = (phone || '').replace(/\D/g, '');
  const normalized = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;

  if (normalized.length !== 10) {
    return phone;
  }

  return `(${normalized.slice(0, 3)}) ${normalized.slice(3, 6)}-${normalized.slice(6)}`;
}

function sumCents<T>(rows: T[], selector: (row: T) => number | undefined) {
  return rows.reduce((sum, row) => sum + (selector(row) || 0), 0);
}

function isPaidBooking(booking: DashboardBookingSourceRecord) {
  return normalize(booking.paymentStatus) === 'paid' || normalize(booking.status) === 'completed';
}

function paymentIsCaptured(payment: DashboardPaymentSourceRecord) {
  return normalize(payment.state) === 'captured';
}

function paymentIsFailed(payment: DashboardPaymentSourceRecord) {
  const state = normalize(payment.state);
  return state === 'failed' || state === 'declined';
}

function paymentIsHold(payment: DashboardPaymentSourceRecord) {
  const state = normalize(payment.state);
  return state === 'hold active' || state === 'pre charge' || state === 'pending';
}

function paymentIsRefund(payment: DashboardPaymentSourceRecord) {
  const state = normalize(payment.state);
  return state === 'refunded' || state === 'partially refunded';
}

function hasAssignmentSource(booking: DashboardBookingSourceRecord) {
  return Array.isArray(booking.assignedProviderIds);
}

function isUnassigned(booking: DashboardBookingSourceRecord) {
  return incompleteBookingStatuses.has(normalize(booking.status)) && hasAssignmentSource(booking) && booking.assignedProviderIds?.length === 0;
}

function arrivalWindowEndHour(window?: string) {
  if (!window || window === 'Exact Time') {
    return undefined;
  }

  const match = /^(\d{1,2})-(\d{1,2})$/.exec(window);
  if (!match) {
    return undefined;
  }

  const start = Number(match[1]);
  let end = Number(match[2]);

  if (end <= start) {
    end += 12;
  }

  if (end < 8) {
    end += 12;
  }

  return end;
}

function isLateBooking(booking: DashboardBookingSourceRecord, now: Date) {
  if (rowDateKey(booking.serviceDate) !== dateKey(now)) {
    return false;
  }

  if (!incompleteBookingStatuses.has(normalize(booking.status))) {
    return false;
  }

  const endHour = booking.exactTime ? Number(booking.exactTime.split(':')[0]) : arrivalWindowEndHour(booking.arrivalWindow);
  if (endHour === undefined || Number.isNaN(endHour)) {
    return false;
  }

  const threshold = new Date(now);
  threshold.setHours(endHour, 30, 0, 0);
  return now > threshold;
}

function metric(label: string, value: string, detail: string, href: string, empty: boolean, restricted = false): DashboardMetric {
  return { label, value, detail, href, empty, restricted };
}

function kpi(label: string, value: string, detail: string, href: string, empty: boolean, restricted = false): DashboardKpi {
  return { label, value, detail, href, empty, restricted };
}

function detailForSource(count: number, connected: boolean, noun: string, tenantReady: boolean) {
  if (!tenantReady) {
    return 'Tenant context required';
  }

  if (!connected) {
    return `No live ${noun} source connected`;
  }

  return count === 1 ? '1 live record' : `${count} live records`;
}

function moneyOrRestricted(cents: number, hasAccess: boolean) {
  return hasAccess ? formatCurrency(cents) : 'Restricted';
}

function countOrRestricted(count: number, hasAccess: boolean) {
  return hasAccess ? String(count) : 'Restricted';
}

function buildOperationRows(
  bookings: DashboardBookingSourceRecord[],
  customers: DashboardCustomerSourceRecord[],
  providers: DashboardWorkforceSourceRecord[],
  now: Date
): DashboardOperationRow[] {
  const customerById = new Map(customers.map((customer) => [customer.id, customer]));
  const providerById = new Map(providers.map((provider) => [provider.id, provider]));

  return bookings
    .filter((booking) => rowDateKey(booking.serviceDate) === dateKey(now))
    .sort((a, b) => (a.arrivalWindow || '').localeCompare(b.arrivalWindow || ''))
    .map((booking) => {
      const customer = customerById.get(booking.customerId);
      const team = (booking.assignedProviderIds || [])
        .map((providerId) => providerById.get(providerId)?.name || providerId)
        .filter(Boolean)
        .join(', ');
      const late = isLateBooking(booking, now);
      const unassigned = isUnassigned(booking);

      return {
        id: booking.id,
        bookingNumber: booking.bookingNumber,
        customerName: customer?.name || 'Customer record needed',
        customerPhone: formatPhone(customer?.phone),
        serviceType: booking.serviceType,
        addressArea: customer ? [customer.city, customer.zip].filter(Boolean).join(' ') : 'Address source needed',
        arrivalWindow: booking.exactTime || booking.arrivalWindow || 'Arrival window needed',
        assignedTeam: team || (hasAssignmentSource(booking) ? 'Unassigned' : 'Assignment source needed'),
        status: booking.status,
        paymentStatus: booking.paymentStatus,
        routeWarning: late ? 'Running late' : unassigned ? 'Dispatch assignment needed' : undefined,
        actions: [
          { label: 'View booking', href: `/app/bookings?booking=${encodeURIComponent(booking.id)}` },
          { label: 'Assign team', href: `/app/workforce?action=assign&booking=${encodeURIComponent(booking.id)}` },
          { label: 'Reschedule', href: `/app/bookings?action=reschedule&booking=${encodeURIComponent(booking.id)}` },
          { label: 'Message customer', href: `/app/internal-chat?customer=${encodeURIComponent(booking.customerId)}&booking=${encodeURIComponent(booking.id)}` },
          { label: 'Open dispatch', href: `/app/dispatch?booking=${encodeURIComponent(booking.id)}` }
        ]
      };
    });
}

function buildAlerts(input: {
  todayBookings: DashboardBookingSourceRecord[];
  customers: DashboardCustomerSourceRecord[];
  quotes: DashboardQuoteSourceRecord[];
  payments: DashboardPaymentSourceRecord[];
  qualityTickets: DashboardQualitySourceRecord[];
  recurringSeries: DashboardRecurringSourceRecord[];
  providers: DashboardWorkforceSourceRecord[];
  clockEvents: DashboardClockEventSourceRecord[];
  now: Date;
  auditLogsConnected: boolean;
}) {
  const alerts: DashboardAlert[] = [];
  const customerById = new Map(input.customers.map((customer) => [customer.id, customer]));
  const todayClockedIn = new Set(
    input.clockEvents
      .filter((event) => rowDateKey(event.eventTime) === dateKey(input.now) && normalize(event.eventType) === 'clock in')
      .map((event) => event.workerId)
  );
  const assignedProviderIds = new Set(input.todayBookings.flatMap((booking) => booking.assignedProviderIds || []));

  input.todayBookings.filter(isUnassigned).forEach((booking) => {
    alerts.push({
      id: `unassigned-${booking.id}`,
      priority: 'High',
      module: 'Dispatch Command Center',
      title: 'Booking unassigned',
      related: `${booking.bookingNumber} - ${customerById.get(booking.customerId)?.name || booking.customerId}`,
      action: { label: 'Assign team', href: `/app/dispatch?filter=unassigned&booking=${encodeURIComponent(booking.id)}` },
      dismissPolicy: input.auditLogsConnected ? 'Dismiss records to audit log' : 'Dismiss locked until audit logs are connected'
    });
  });

  input.todayBookings.filter((booking) => normalize(booking.status) === 'scheduled').forEach((booking) => {
    alerts.push({
      id: `confirmation-${booking.id}`,
      priority: 'Medium',
      module: 'Booking Command Center',
      title: 'Customer waiting for confirmation',
      related: `${booking.bookingNumber} - ${customerById.get(booking.customerId)?.name || booking.customerId}`,
      action: { label: 'Confirm booking', href: `/app/bookings?action=confirm&booking=${encodeURIComponent(booking.id)}` },
      dismissPolicy: input.auditLogsConnected ? 'Dismiss records to audit log' : 'Dismiss locked until audit logs are connected'
    });
  });

  input.todayBookings.filter((booking) => isLateBooking(booking, input.now)).forEach((booking) => {
    alerts.push({
      id: `late-${booking.id}`,
      priority: 'High',
      module: 'Dispatch Command Center',
      title: 'Job running late',
      related: `${booking.bookingNumber} - ${customerById.get(booking.customerId)?.name || booking.customerId}`,
      action: { label: 'Open dispatch', href: `/app/dispatch?filter=late&booking=${encodeURIComponent(booking.id)}` },
      dismissPolicy: input.auditLogsConnected ? 'Dismiss records to audit log' : 'Dismiss locked until audit logs are connected'
    });
  });

  input.payments.filter(paymentIsFailed).forEach((payment) => {
    alerts.push({
      id: `payment-failed-${payment.id}`,
      priority: 'High',
      module: 'Payment Command Center',
      title: 'Failed card/pre-auth',
      related: payment.bookingId || payment.customerId || payment.id,
      action: { label: 'Retry payment', href: `/app/payments?filter=failed&payment=${encodeURIComponent(payment.id)}` },
      dismissPolicy: input.auditLogsConnected ? 'Dismiss records to audit log' : 'Dismiss locked until audit logs are connected'
    });
  });

  input.payments.filter(paymentIsHold).forEach((payment) => {
    alerts.push({
      id: `payment-hold-${payment.id}`,
      priority: 'Medium',
      module: 'Payment Command Center',
      title: 'Payment not captured',
      related: payment.bookingId || payment.customerId || payment.id,
      action: { label: 'Capture payment', href: `/app/payments?filter=pending-capture&payment=${encodeURIComponent(payment.id)}` },
      dismissPolicy: input.auditLogsConnected ? 'Dismiss records to audit log' : 'Dismiss locked until audit logs are connected'
    });
  });

  input.qualityTickets
    .filter((ticket) => openQualityStatuses.has(normalize(ticket.status)) && (ticket.type === 'Complaint' || ticket.severity === 'High' || ticket.severity === 'Critical'))
    .forEach((ticket) => {
      alerts.push({
        id: `quality-${ticket.id}`,
        priority: ticket.severity === 'Critical' || ticket.severity === 'High' ? 'High' : 'Medium',
        module: 'Quality Command Center',
        title: 'Complaint not resolved',
        related: `${ticket.recordNumber} - ${customerById.get(ticket.customerId)?.name || ticket.customerId}`,
        action: { label: 'Open quality ticket', href: `/app/quality?ticket=${encodeURIComponent(ticket.id)}` },
        dismissPolicy: input.auditLogsConnected ? 'Dismiss records to audit log' : 'Dismiss locked until audit logs are connected'
      });
    });

  input.quotes
    .filter((quote) => activeQuoteStatuses.has(normalize(quote.status)) && isWithinRange(quote.expirationDate, input.now, addDays(input.now, 2)))
    .forEach((quote) => {
      alerts.push({
        id: `quote-expiring-${quote.id}`,
        priority: 'Medium',
        module: 'Growth Command Center',
        title: 'Quote expiring soon',
        related: `${quote.quoteNumber} - ${customerById.get(quote.customerId)?.name || quote.customerId}`,
        action: { label: 'Follow up quote', href: `/app/quotes?filter=expiring&quote=${encodeURIComponent(quote.id)}` },
        dismissPolicy: input.auditLogsConnected ? 'Dismiss records to audit log' : 'Dismiss locked until audit logs are connected'
      });
    });

  input.recurringSeries
    .filter((series) => series.status === 'Active' && !series.nextServiceDate)
    .forEach((series) => {
      alerts.push({
        id: `recurring-${series.id}`,
        priority: 'Medium',
        module: 'Booking Command Center',
        title: 'Recurring booking issue',
        related: series.customerId,
        action: { label: 'Open recurring series', href: `/app/bookings?filter=recurring&series=${encodeURIComponent(series.id)}` },
        dismissPolicy: input.auditLogsConnected ? 'Dismiss records to audit log' : 'Dismiss locked until audit logs are connected'
      });
    });

  input.todayBookings.forEach((booking) => {
    const customer = customerById.get(booking.customerId);
    if (customer && (!customer.phone || !customer.email)) {
      alerts.push({
        id: `missing-contact-${booking.id}`,
        priority: 'Low',
        module: 'Customer 360',
        title: 'Missing customer phone/email',
        related: `${booking.bookingNumber} - ${customer.name}`,
        action: { label: 'Update customer', href: `/app/customers?customer=${encodeURIComponent(customer.id)}&action=contact` },
        dismissPolicy: input.auditLogsConnected ? 'Dismiss records to audit log' : 'Dismiss locked until audit logs are connected'
      });
    }
  });

  Array.from(assignedProviderIds).forEach((providerId) => {
    if (!todayClockedIn.has(providerId)) {
      const provider = input.providers.find((worker) => worker.id === providerId);
      alerts.push({
        id: `clock-in-${providerId}`,
        priority: 'High',
        module: 'Workforce Command Center',
        title: 'Cleaner not clocked in',
        related: provider?.name || providerId,
        action: { label: 'Open time clock', href: `/app/workforce?filter=missing-clock-in&worker=${encodeURIComponent(providerId)}` },
        dismissPolicy: input.auditLogsConnected ? 'Dismiss records to audit log' : 'Dismiss locked until audit logs are connected'
      });
    }
  });

  return alerts.slice(0, 12);
}

function buildAiSummary(input: {
  userName?: string;
  role?: string;
  alerts: DashboardAlert[];
  failedPayments: number;
  openBalanceCents: number;
  unassigned: number;
  missingClockIns: number;
  openQuality: number;
  activeQuotes: number;
  newLeads: number;
  hasFinancialAccess: boolean;
}): DashboardAiSummary {
  const displayName = input.userName?.trim() || 'Operator';
  const permissionScope = input.role ? `${input.role} permissions` : 'Workspace permissions';
  const topAlerts = input.alerts.slice(0, 4).map((alert) => `${alert.priority}: ${alert.title}`);

  return {
    greeting: `Good day, ${displayName}.`,
    permissionScope,
    attention: topAlerts.length ? topAlerts : ['No urgent items found in connected sources.'],
    revenueRisks: input.hasFinancialAccess
      ? [
          input.failedPayments ? `${input.failedPayments} failed or declined payment issue${input.failedPayments === 1 ? '' : 's'}.` : 'No failed payment records in connected sources.',
          input.openBalanceCents ? `${formatCurrency(input.openBalanceCents)} in open balances.` : 'No open balances in connected sources.'
        ]
      : ['Financial risk details are restricted for this permission scope.'],
    staffingProblems: [
      input.unassigned ? `${input.unassigned} booking${input.unassigned === 1 ? '' : 's'} need assignment.` : 'No unassigned bookings in connected sources.',
      input.missingClockIns ? `${input.missingClockIns} assigned worker${input.missingClockIns === 1 ? '' : 's'} missing clock-in.` : 'No missing clock-ins in connected sources.'
    ],
    customerIssues: [input.openQuality ? `${input.openQuality} open quality or customer issue${input.openQuality === 1 ? '' : 's'}.` : 'No open quality issues in connected sources.'],
    followUpOpportunities: [
      input.activeQuotes ? `${input.activeQuotes} active quote${input.activeQuotes === 1 ? '' : 's'} to follow up.` : 'No active quotes in connected sources.',
      input.newLeads ? `${input.newLeads} new lead${input.newLeads === 1 ? '' : 's'} today.` : 'No new leads in connected sources.'
    ],
    suggestedActions: input.alerts.length
      ? input.alerts.slice(0, 3).map((alert) => alert.action.label)
      : ['Review connected command centers after live sources are attached.']
  };
}

export function getDashboardCommandCenterData(input: DashboardInput): DashboardData {
  const now = input.now || new Date();
  const sources = input.sources || {};
  const tenantId = input.tenantId;
  const tenantReady = Boolean(tenantId);
  const timezone = sources.tenantProfile?.timezone || 'America/Chicago';
  const hasFinancialAccess = input.role ? financialRoles.has(input.role) : false;
  const connectionStatus =
    input.connectionStatus ||
    ({
      state: tenantReady ? 'not-configured' : 'tenant-required',
      message: tenantReady ? 'No live dashboard source adapter returned data.' : 'Tenant context required before dashboard data can load.'
    } satisfies DashboardConnectionStatus);

  const bookings = tenantRows(sources.bookings, tenantId);
  const customers = tenantRows(sources.customers, tenantId);
  const quotes = tenantRows(sources.quotes, tenantId);
  const payments = tenantRows(sources.payments, tenantId);
  const invoices = tenantRows(sources.invoices, tenantId);
  const providers = tenantRows(sources.providers, tenantId);
  const clockEvents = tenantRows(sources.clockEvents, tenantId);
  const qualityTickets = tenantRows(sources.qualityTickets, tenantId);
  const reviews = tenantRows(sources.reviews, tenantId);
  const leads = tenantRows(sources.leads, tenantId);
  const campaigns = tenantRows(sources.campaigns, tenantId);
  const recurringSeries = tenantRows(sources.recurringSeries, tenantId);

  const today = dateKey(now);
  const tomorrow = dateKey(addDays(now, 1));
  const weekStart = startOfWeek(now);
  const weekEnd = endOfWeek(now);

  const todayBookings = bookings.filter((booking) => rowDateKey(booking.serviceDate) === today);
  const tomorrowBookings = bookings.filter((booking) => rowDateKey(booking.serviceDate) === tomorrow);
  const unassignedBookings = bookings.filter(isUnassigned);
  const lateBookings = bookings.filter((booking) => isLateBooking(booking, now));
  const completedToday = todayBookings.filter(isPaidBooking);
  const capturedToday = payments.filter((payment) => paymentIsCaptured(payment) && rowDateKey(payment.createdAt) === today);
  const capturedThisWeek = payments.filter((payment) => paymentIsCaptured(payment) && isWithinRange(payment.createdAt, weekStart, weekEnd));
  const revenueTodayCents = isConnected(sources.payments)
    ? sumCents(capturedToday, (payment) => payment.amountCents)
    : sumCents(completedToday, (booking) => booking.totalCents);
  const revenueWeekCents = isConnected(sources.payments)
    ? sumCents(capturedThisWeek, (payment) => payment.amountCents)
    : sumCents(bookings.filter((booking) => isPaidBooking(booking) && isWithinRange(booking.serviceDate, weekStart, weekEnd)), (booking) => booking.totalCents);
  const openBalanceCents = invoices.length
    ? sumCents(invoices.filter((invoice) => invoice.balanceCents > 0), (invoice) => invoice.balanceCents)
    : sumCents(bookings.filter((booking) => ['pending', 'failed'].includes(normalize(booking.paymentStatus))), (booking) => booking.totalCents);
  const openBalancesCount = invoices.length
    ? invoices.filter((invoice) => invoice.balanceCents > 0).length
    : bookings.filter((booking) => ['pending', 'failed'].includes(normalize(booking.paymentStatus))).length;
  const failedPayments = payments.filter(paymentIsFailed);
  const holdPayments = payments.filter(paymentIsHold);
  const refunds = payments.filter(paymentIsRefund);
  const activeQuotes = quotes.filter((quote) => activeQuoteStatuses.has(normalize(quote.status)));
  const newLeadsToday = leads.filter((lead) => normalize(lead.status) === 'new' && rowDateKey(lead.createdAt) === today);
  const openQualityTickets = qualityTickets.filter((ticket) => openQualityStatuses.has(normalize(ticket.status)));
  const lowRatings = reviews.filter((review) => review.rating <= 3);
  const recleanTickets = qualityTickets.filter((ticket) => ticket.type === 'Reclean' && openQualityStatuses.has(normalize(ticket.status)));
  const upcomingRecurring = recurringSeries.filter((series) => series.status === 'Active' && isWithinRange(series.nextServiceDate, now, addDays(now, 7)));
  const todayClockedIn = new Set(
    clockEvents
      .filter((event) => rowDateKey(event.eventTime) === today && normalize(event.eventType) === 'clock in')
      .map((event) => event.workerId)
  );
  const scheduledProviderIds = new Set(todayBookings.flatMap((booking) => booking.assignedProviderIds || []));
  const missingClockIns = Array.from(scheduledProviderIds).filter((providerId) => !todayClockedIn.has(providerId));
  const workersInMotion = clockEvents.filter((event) => rowDateKey(event.eventTime) === today && ['driving', 'arrived', 'start cleaning'].includes(normalize(event.eventType)));
  const payrollWarnings = providers.filter((provider) => provider.payType === undefined);
  const sourceRecordsByKey: Partial<Record<keyof DashboardSources, number>> = {
    bookings: bookings.length,
    customers: customers.length,
    quotes: quotes.length,
    payments: payments.length,
    invoices: invoices.length,
    providers: providers.length,
    clockEvents: clockEvents.length,
    qualityTickets: qualityTickets.length,
    reviews: reviews.length,
    leads: leads.length,
    campaigns: campaigns.length,
    recurringSeries: recurringSeries.length,
    settings: tenantRows(sources.settings, tenantId).length,
    auditLogs: tenantId ? (sources.auditLogs || []).filter((log) => log.tenantId === tenantId).length : 0,
    tenantProfile: tenantId && sources.tenantProfile?.id === tenantId ? 1 : 0
  };

  const sourceStates: DashboardSourceState[] = sourceLabels.map(([key, label]) => {
    const source = sources[key];
    return {
      key,
      label,
      connected: source !== undefined,
      records: sourceRecordsByKey[key] || 0
    };
  });

  const topKpis: DashboardKpi[] = [
    kpi('Today\'s bookings', String(todayBookings.length), detailForSource(todayBookings.length, sourceConnected(sources, 'bookings'), 'booking', tenantReady), '/app/bookings?date=today', todayBookings.length === 0),
    kpi('Tomorrow\'s bookings', String(tomorrowBookings.length), detailForSource(tomorrowBookings.length, sourceConnected(sources, 'bookings'), 'booking', tenantReady), '/app/bookings?date=tomorrow', tomorrowBookings.length === 0),
    kpi('Unassigned bookings', String(unassignedBookings.length), detailForSource(unassignedBookings.length, bookings.some(hasAssignmentSource), 'assignment', tenantReady), '/app/dispatch?filter=unassigned', unassignedBookings.length === 0),
    kpi('Revenue today', moneyOrRestricted(revenueTodayCents, hasFinancialAccess), detailForSource(capturedToday.length || completedToday.length, sourceConnected(sources, 'payments') || sourceConnected(sources, 'bookings'), 'revenue', tenantReady), '/app/financial?range=today', revenueTodayCents === 0, !hasFinancialAccess),
    kpi('Revenue this week', moneyOrRestricted(revenueWeekCents, hasFinancialAccess), detailForSource(capturedThisWeek.length, sourceConnected(sources, 'payments') || sourceConnected(sources, 'bookings'), 'revenue', tenantReady), '/app/financial?range=this-week', revenueWeekCents === 0, !hasFinancialAccess),
    kpi('Open balances', moneyOrRestricted(openBalanceCents, hasFinancialAccess), detailForSource(openBalancesCount, sourceConnected(sources, 'invoices') || sourceConnected(sources, 'bookings'), 'balance', tenantReady), '/app/financial?filter=open-balances', openBalanceCents === 0, !hasFinancialAccess),
    kpi('Failed/declined payments', countOrRestricted(failedPayments.length, hasFinancialAccess), detailForSource(failedPayments.length, sourceConnected(sources, 'payments'), 'payment', tenantReady), '/app/payments?filter=failed', failedPayments.length === 0, !hasFinancialAccess),
    kpi('Active quotes', String(activeQuotes.length), detailForSource(activeQuotes.length, sourceConnected(sources, 'quotes'), 'quote', tenantReady), '/app/quotes?filter=active', activeQuotes.length === 0),
    kpi('New leads', String(newLeadsToday.length), detailForSource(newLeadsToday.length, sourceConnected(sources, 'leads'), 'lead', tenantReady), '/app/growth?filter=new-leads', newLeadsToday.length === 0),
    kpi('Customer issues', String(openQualityTickets.length + lowRatings.length), detailForSource(openQualityTickets.length + lowRatings.length, sourceConnected(sources, 'qualityTickets') || sourceConnected(sources, 'reviews'), 'issue', tenantReady), '/app/quality?filter=customer-issues', openQualityTickets.length + lowRatings.length === 0),
    kpi('Reclean/quality tickets', String(recleanTickets.length), detailForSource(recleanTickets.length, sourceConnected(sources, 'qualityTickets'), 'quality ticket', tenantReady), '/app/quality?filter=reclean', recleanTickets.length === 0),
    kpi('Staff clocked in / not', `${todayClockedIn.size}/${missingClockIns.length}`, detailForSource(todayClockedIn.size + missingClockIns.length, sourceConnected(sources, 'clockEvents') || bookings.some(hasAssignmentSource), 'time clock', tenantReady), '/app/workforce?filter=time-clock', todayClockedIn.size + missingClockIns.length === 0),
    kpi('Jobs running late', String(lateBookings.length), detailForSource(lateBookings.length, sourceConnected(sources, 'bookings'), 'dispatch warning', tenantReady), '/app/dispatch?filter=late', lateBookings.length === 0),
    kpi('Upcoming recurring services', String(upcomingRecurring.length), detailForSource(upcomingRecurring.length, sourceConnected(sources, 'recurringSeries'), 'recurring service', tenantReady), '/app/bookings?filter=recurring', upcomingRecurring.length === 0)
  ];

  const revenueMetrics: DashboardMetric[] = [
    metric('Paid today', moneyOrRestricted(revenueTodayCents, hasFinancialAccess), `${capturedToday.length || completedToday.length} captured or paid item${capturedToday.length + completedToday.length === 1 ? '' : 's'}`, '/app/financial?range=today', revenueTodayCents === 0, !hasFinancialAccess),
    metric('Pending holds', countOrRestricted(holdPayments.length, hasFinancialAccess), detailForSource(holdPayments.length, sourceConnected(sources, 'payments'), 'hold', tenantReady), '/app/payments?filter=pending-holds', holdPayments.length === 0, !hasFinancialAccess),
    metric('Failed pre-auths', countOrRestricted(failedPayments.length, hasFinancialAccess), detailForSource(failedPayments.length, sourceConnected(sources, 'payments'), 'pre-auth', tenantReady), '/app/payments?filter=failed-preauth', failedPayments.length === 0, !hasFinancialAccess),
    metric('Declined cards', countOrRestricted(failedPayments.length, hasFinancialAccess), detailForSource(failedPayments.length, sourceConnected(sources, 'payments'), 'decline', tenantReady), '/app/payments?filter=declined', failedPayments.length === 0, !hasFinancialAccess),
    metric('Open balances', moneyOrRestricted(openBalanceCents, hasFinancialAccess), `${openBalancesCount} open item${openBalancesCount === 1 ? '' : 's'}`, '/app/financial?filter=open-balances', openBalanceCents === 0, !hasFinancialAccess),
    metric('Refunds/credits', moneyOrRestricted(sumCents(refunds, (payment) => payment.amountCents), hasFinancialAccess), detailForSource(refunds.length, sourceConnected(sources, 'payments'), 'refund', tenantReady), '/app/financial?filter=refunds-credits', refunds.length === 0, !hasFinancialAccess),
    metric('Cancellation/reschedule fees', moneyOrRestricted(0, hasFinancialAccess), 'Awaiting fee ledger source', '/app/financial?filter=fees', true, !hasFinancialAccess),
    metric('Cash/manual verification', countOrRestricted(payments.filter((payment) => payment.processor === 'Manual' && normalize(payment.state) === 'pending').length, hasFinancialAccess), detailForSource(payments.filter((payment) => payment.processor === 'Manual' && normalize(payment.state) === 'pending').length, sourceConnected(sources, 'payments'), 'manual payment', tenantReady), '/app/payments?filter=manual-verification', payments.filter((payment) => payment.processor === 'Manual' && normalize(payment.state) === 'pending').length === 0, !hasFinancialAccess)
  ];

  const qualityMetrics: DashboardMetric[] = [
    metric('Low ratings', String(lowRatings.length), detailForSource(lowRatings.length, sourceConnected(sources, 'reviews'), 'review', tenantReady), '/app/quality?filter=low-ratings', lowRatings.length === 0),
    metric('Complaints', String(qualityTickets.filter((ticket) => ticket.type === 'Complaint' && openQualityStatuses.has(normalize(ticket.status))).length), detailForSource(qualityTickets.filter((ticket) => ticket.type === 'Complaint' && openQualityStatuses.has(normalize(ticket.status))).length, sourceConnected(sources, 'qualityTickets'), 'complaint', tenantReady), '/app/quality?filter=complaints', qualityTickets.filter((ticket) => ticket.type === 'Complaint' && openQualityStatuses.has(normalize(ticket.status))).length === 0),
    metric('Reclean requests', String(recleanTickets.length), detailForSource(recleanTickets.length, sourceConnected(sources, 'qualityTickets'), 'reclean', tenantReady), '/app/quality?filter=reclean', recleanTickets.length === 0),
    metric('Damage claims', String(qualityTickets.filter((ticket) => ticket.type === 'Damage Claim' && openQualityStatuses.has(normalize(ticket.status))).length), detailForSource(qualityTickets.filter((ticket) => ticket.type === 'Damage Claim' && openQualityStatuses.has(normalize(ticket.status))).length, sourceConnected(sources, 'qualityTickets'), 'damage claim', tenantReady), '/app/quality?filter=damage-claims', qualityTickets.filter((ticket) => ticket.type === 'Damage Claim' && openQualityStatuses.has(normalize(ticket.status))).length === 0),
    metric('Pending inspections', String(qualityTickets.filter((ticket) => ticket.type === 'Inspection' && openQualityStatuses.has(normalize(ticket.status))).length), detailForSource(qualityTickets.filter((ticket) => ticket.type === 'Inspection' && openQualityStatuses.has(normalize(ticket.status))).length, sourceConnected(sources, 'qualityTickets'), 'inspection', tenantReady), '/app/quality?filter=inspections', qualityTickets.filter((ticket) => ticket.type === 'Inspection' && openQualityStatuses.has(normalize(ticket.status))).length === 0),
    metric('Needs follow-up', String(openQualityTickets.length), detailForSource(openQualityTickets.length, sourceConnected(sources, 'qualityTickets'), 'follow-up', tenantReady), '/app/quality?filter=follow-up', openQualityTickets.length === 0)
  ];

  const growthMetrics: DashboardMetric[] = [
    metric('New leads today', String(newLeadsToday.length), detailForSource(newLeadsToday.length, sourceConnected(sources, 'leads'), 'lead', tenantReady), '/app/growth?filter=new-leads', newLeadsToday.length === 0),
    metric('Active quotes', String(activeQuotes.length), detailForSource(activeQuotes.length, sourceConnected(sources, 'quotes'), 'quote', tenantReady), '/app/quotes?filter=active', activeQuotes.length === 0),
    metric('Quotes needing follow-up', String(quotes.filter((quote) => normalize(quote.status) === 'follow up').length), detailForSource(quotes.filter((quote) => normalize(quote.status) === 'follow up').length, sourceConnected(sources, 'quotes'), 'quote', tenantReady), '/app/quotes?filter=follow-up', quotes.filter((quote) => normalize(quote.status) === 'follow up').length === 0),
    metric('Abandoned bookings', '0', 'Awaiting abandoned booking source', '/app/growth?filter=abandoned-bookings', true),
    metric('Lost opportunities', String(leads.filter((lead) => normalize(lead.status) === 'lost').length + quotes.filter((quote) => normalize(quote.status) === 'lost').length), detailForSource(leads.filter((lead) => normalize(lead.status) === 'lost').length + quotes.filter((quote) => normalize(quote.status) === 'lost').length, sourceConnected(sources, 'leads') || sourceConnected(sources, 'quotes'), 'opportunity', tenantReady), '/app/growth?filter=lost-opportunities', leads.filter((lead) => normalize(lead.status) === 'lost').length + quotes.filter((quote) => normalize(quote.status) === 'lost').length === 0),
    metric('Campaign performance', campaigns.length ? formatCurrency(sumCents(campaigns, (campaign) => campaign.revenueCents)) : '$0.00', campaigns.length ? `${campaigns.length} program${campaigns.length === 1 ? '' : 's'} connected` : detailForSource(0, sourceConnected(sources, 'campaigns'), 'campaign', tenantReady), '/app/growth?filter=campaigns', campaigns.length === 0),
    metric('Review requests pending', '0', 'Awaiting review request source', '/app/growth?filter=review-requests', true)
  ];

  const workforceMetrics: DashboardMetric[] = [
    metric('Staff scheduled today', String(scheduledProviderIds.size), detailForSource(scheduledProviderIds.size, sourceConnected(sources, 'bookings'), 'schedule', tenantReady), '/app/workforce?filter=scheduled-today', scheduledProviderIds.size === 0),
    metric('Clocked in', String(todayClockedIn.size), detailForSource(todayClockedIn.size, sourceConnected(sources, 'clockEvents'), 'clock-in', tenantReady), '/app/workforce?filter=clocked-in', todayClockedIn.size === 0),
    metric('Missing clock-in', String(missingClockIns.length), detailForSource(missingClockIns.length, sourceConnected(sources, 'clockEvents') || bookings.some(hasAssignmentSource), 'missing clock-in', tenantReady), '/app/workforce?filter=missing-clock-in', missingClockIns.length === 0),
    metric('OTW/Arrived/In-progress', String(workersInMotion.length), detailForSource(workersInMotion.length, sourceConnected(sources, 'clockEvents'), 'dispatch status', tenantReady), '/app/dispatch?filter=in-motion', workersInMotion.length === 0),
    metric('Contractor/employee type', String(providers.length), detailForSource(providers.length, sourceConnected(sources, 'providers'), 'worker profile', tenantReady), '/app/workforce?filter=worker-type', providers.length === 0),
    metric('Payroll warnings', String(payrollWarnings.length), detailForSource(payrollWarnings.length, sourceConnected(sources, 'providers'), 'payroll warning', tenantReady), '/app/workforce?filter=payroll-warnings', payrollWarnings.length === 0),
    metric('Missing documents', '0', 'Awaiting document compliance source', '/app/workforce?filter=missing-documents', true),
    metric('Expired compliance', '0', 'Awaiting compliance source', '/app/workforce?filter=expired-compliance', true)
  ];

  const alerts = buildAlerts({
    todayBookings,
    customers,
    quotes,
    payments,
    qualityTickets,
    recurringSeries,
    providers,
    clockEvents,
    now,
    auditLogsConnected: sourceConnected(sources, 'auditLogs')
  });

  return {
    dateLabel: formatDateWithDay(now, timezone),
    tenantReady,
    hasFinancialAccess,
    topKpis,
    operations: {
      rows: buildOperationRows(bookings, customers, providers, now),
      emptyTitle: tenantReady ? 'No scheduled operations for this tenant today' : 'Tenant context required',
      emptyBody: tenantReady
        ? 'Bookings, dispatch status, workforce assignments, and route warnings will appear here when live tenant records exist.'
        : 'Open the dashboard from an authenticated tenant workspace to load business health.'
    },
    revenueMetrics,
    qualityMetrics,
    growthMetrics,
    workforceMetrics,
    alerts,
    connectionStatus,
    aiSummary: buildAiSummary({
      userName: input.userName,
      role: input.role,
      alerts,
      failedPayments: failedPayments.length,
      openBalanceCents,
      unassigned: unassignedBookings.length,
      missingClockIns: missingClockIns.length,
      openQuality: openQualityTickets.length + lowRatings.length,
      activeQuotes: activeQuotes.length,
      newLeads: newLeadsToday.length,
      hasFinancialAccess
    }),
    sourceStates
  };
}
