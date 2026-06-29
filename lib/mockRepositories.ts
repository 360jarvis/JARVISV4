import type { BookingRepository, BookingRepositoryRecord, CustomerRepository, CustomerRepositoryRecord, ListOptions, QuoteRepository, QuoteRepositoryRecord, RepositoryResult } from './repositories';

const customers: CustomerRepositoryRecord[] = [
  { id: 'CUS-1001', tenantId: 'tenant-demo', name: 'Maria Gonzalez', email: 'maria@example.com', phone: '(713) 555-0148', status: 'ACTIVE' },
  { id: 'CUS-1002', tenantId: 'tenant-demo', name: 'Angela Reed', email: 'angela@example.com', phone: '(832) 555-0122', status: 'LEAD' }
];

const bookings: BookingRepositoryRecord[] = [
  { id: 'BKG-2001', tenantId: 'tenant-demo', bookingNumber: 'BKG-2001', customerId: 'CUS-1001', serviceType: 'Deep Cleaning', status: 'ASSIGNED', totalCents: 32000 },
  { id: 'BKG-2002', tenantId: 'tenant-demo', bookingNumber: 'BKG-2002', customerId: 'CUS-1002', serviceType: 'Airbnb Turnover', status: 'SCHEDULED', totalCents: 22000 }
];

const quotes: QuoteRepositoryRecord[] = [
  { id: 'QTE-3001', tenantId: 'tenant-demo', quoteNumber: 'QTE-3001', customerId: 'CUS-1002', serviceType: 'Move In Out Cleaning', status: 'SENT', selectedCents: 34000 }
];

function filterByTenant<T extends { tenantId: string }>(rows: T[], options: ListOptions): RepositoryResult<T[]> {
  const limit = options.limit || 25;
  const offset = options.offset || 0;
  return { ok: true, data: rows.filter((row) => row.tenantId === options.tenantId).slice(offset, offset + limit) };
}

export const mockCustomerRepository: CustomerRepository = {
  async list(options: ListOptions) {
    return filterByTenant(customers, options);
  }
};

export const mockBookingRepository: BookingRepository = {
  async list(options: ListOptions) {
    return filterByTenant(bookings, options);
  }
};

export const mockQuoteRepository: QuoteRepository = {
  async list(options: ListOptions) {
    return filterByTenant(quotes, options);
  }
};
