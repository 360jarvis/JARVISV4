export type RepositoryResult<T> = {
  ok: boolean;
  data?: T;
  error?: string;
};

export type ListOptions = {
  tenantId: string;
  limit?: number;
  offset?: number;
};

export type CustomerRepositoryRecord = {
  id: string;
  tenantId: string;
  name: string;
  email?: string;
  phone?: string;
  status: string;
};

export type BookingRepositoryRecord = {
  id: string;
  tenantId: string;
  bookingNumber: string;
  customerId: string;
  serviceType: string;
  status: string;
  totalCents: number;
};

export type QuoteRepositoryRecord = {
  id: string;
  tenantId: string;
  quoteNumber: string;
  customerId: string;
  serviceType: string;
  status: string;
  selectedCents: number;
};

export interface CustomerRepository {
  list(options: ListOptions): Promise<RepositoryResult<CustomerRepositoryRecord[]>>;
}

export interface BookingRepository {
  list(options: ListOptions): Promise<RepositoryResult<BookingRepositoryRecord[]>>;
}

export interface QuoteRepository {
  list(options: ListOptions): Promise<RepositoryResult<QuoteRepositoryRecord[]>>;
}
