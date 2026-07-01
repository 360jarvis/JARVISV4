import { createRequire } from 'module';
import type {
  DashboardBookingSourceRecord,
  DashboardConnectionStatus,
  DashboardCustomerSourceRecord,
  DashboardPaymentSourceRecord,
  DashboardQuoteSourceRecord,
  DashboardSources
} from './dashboard';

type LiveDashboardLoad = {
  sources: DashboardSources;
  connectionStatus: DashboardConnectionStatus;
};

type PrismaClientLike = {
  tenant: {
    findUnique(args: unknown): Promise<any>;
  };
  customer: {
    findMany(args: unknown): Promise<any[]>;
  };
  booking: {
    findMany(args: unknown): Promise<any[]>;
  };
  quote: {
    findMany(args: unknown): Promise<any[]>;
  };
  paymentTransaction: {
    findMany(args: unknown): Promise<any[]>;
  };
  auditLog: {
    findMany(args: unknown): Promise<any[]>;
  };
};

const globalWithPrisma = globalThis as typeof globalThis & {
  __jarvixxDashboardPrisma?: PrismaClientLike;
};

const LIVE_SOURCE_TIMEOUT_MS = 2500;

function withLiveSourceTimeout<T>(load: Promise<T>, timeoutMs = LIVE_SOURCE_TIMEOUT_MS): Promise<T> {
  return Promise.race([
    load,
    new Promise<T>((_, reject) => {
      setTimeout(() => reject(new Error('Dashboard live data request timed out. Showing empty states only.')), timeoutMs);
    })
  ]);
}

function getOptionalPrismaConstructor() {
  try {
    const optionalRequire = createRequire(import.meta.url);
    const packageName = '@prisma/client';
    return optionalRequire(packageName).PrismaClient as new () => PrismaClientLike;
  } catch {
    return undefined;
  }
}

function getOptionalPrismaClient() {
  const PrismaClient = getOptionalPrismaConstructor();

  if (!PrismaClient) {
    return undefined;
  }

  if (!globalWithPrisma.__jarvixxDashboardPrisma) {
    globalWithPrisma.__jarvixxDashboardPrisma = new PrismaClient();
  }

  return globalWithPrisma.__jarvixxDashboardPrisma;
}

function toIsoString(value: unknown) {
  if (!value) {
    return undefined;
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  const parsed = new Date(String(value));
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
}

function titleFromEnum(value: unknown) {
  return String(value || '')
    .toLowerCase()
    .split('_')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function mapCustomer(row: any): DashboardCustomerSourceRecord {
  const property = Array.isArray(row.properties) ? row.properties[0] : undefined;

  return {
    id: row.id,
    tenantId: row.tenantId,
    name: row.name || row.company || 'Customer record needed',
    phone: row.phone || undefined,
    email: row.email || undefined,
    city: property?.city || undefined,
    zip: property?.zip || undefined
  };
}

function mapBooking(row: any): DashboardBookingSourceRecord {
  return {
    id: row.id,
    tenantId: row.tenantId,
    bookingNumber: row.bookingNumber,
    customerId: row.customerId,
    serviceType: row.serviceType || 'Service type needed',
    status: titleFromEnum(row.status),
    totalCents: row.totalCents || 0,
    paymentStatus: titleFromEnum(row.paymentState),
    serviceDate: toIsoString(row.serviceDate),
    arrivalWindow: row.arrivalWindow || undefined
  };
}

function mapQuote(row: any): DashboardQuoteSourceRecord {
  return {
    id: row.id,
    tenantId: row.tenantId,
    quoteNumber: row.quoteNumber,
    customerId: row.customerId,
    status: titleFromEnum(row.status),
    expirationDate: toIsoString(row.expiresAt),
    createdAt: toIsoString(row.createdAt),
    selectedPriceCents: row.selectedCents || 0
  };
}

function mapPayment(row: any): DashboardPaymentSourceRecord {
  return {
    id: row.id,
    tenantId: row.tenantId,
    customerId: row.customerId || undefined,
    bookingId: row.bookingId || undefined,
    processor: row.processor || 'Unknown',
    state: titleFromEnum(row.state),
    amountCents: row.amountCents || 0,
    createdAt: toIsoString(row.createdAt)
  };
}

export async function getDashboardLiveSources(tenantId?: string): Promise<LiveDashboardLoad> {
  if (!tenantId) {
    return {
      sources: {},
      connectionStatus: {
        state: 'tenant-required',
        message: 'Tenant context required before dashboard data can load.'
      }
    };
  }

  if (!process.env.DATABASE_URL) {
    return {
      sources: {},
      connectionStatus: {
        state: 'not-configured',
        message: 'DATABASE_URL is not configured. Dashboard is showing empty states only.'
      }
    };
  }

  const prisma = getOptionalPrismaClient();

  if (!prisma) {
    return {
      sources: {},
      connectionStatus: {
        state: 'unavailable',
        message: '@prisma/client is not installed or generated. Dashboard live data is not available.'
      }
    };
  }

  try {
    const [tenant, customers, bookings, quotes, payments, auditLogs] = await withLiveSourceTimeout(Promise.all([
      prisma.tenant.findUnique({ where: { id: tenantId } }),
      prisma.customer.findMany({
        where: { tenantId, deletedAt: null },
        include: { properties: { take: 1 } },
        take: 500
      }),
      prisma.booking.findMany({ where: { tenantId }, take: 500 }),
      prisma.quote.findMany({ where: { tenantId }, take: 500 }),
      prisma.paymentTransaction.findMany({ where: { tenantId }, take: 500 }),
      prisma.auditLog.findMany({ where: { tenantId }, take: 50, orderBy: { createdAt: 'desc' } })
    ]));

    return {
      sources: {
        tenantProfile: tenant ? { id: tenant.id, timezone: tenant.timezone || undefined } : undefined,
        customers: customers.map(mapCustomer),
        bookings: bookings.map(mapBooking),
        quotes: quotes.map(mapQuote),
        payments: payments.map(mapPayment),
        auditLogs: auditLogs.map((row) => ({ tenantId: row.tenantId || undefined }))
      },
      connectionStatus: tenant
        ? {
            state: 'connected',
            message: 'Dashboard is reading tenant-scoped live database records.'
          }
        : {
            state: 'error',
            message: 'Tenant was not found in the live database.'
          }
    };
  } catch (error) {
    return {
      sources: {},
      connectionStatus: {
        state: 'error',
        message: error instanceof Error ? error.message : 'Dashboard live data failed to load.'
      }
    };
  }
}
