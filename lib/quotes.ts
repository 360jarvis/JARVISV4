import type { EntityId, TenantOwned } from './schema';
import type { PricingInput, PricingResult, PricingSource } from './pricing';
import type { ServiceCategory, ServiceType } from './bookings';

export type QuoteSource =
  | 'Office'
  | 'Website Form'
  | 'Public Calculator'
  | 'Customer Portal'
  | 'Jarvixx AI'
  | 'Website Chat'
  | 'Commercial Estimate'
  | 'Growth Campaign'
  | 'Import';

export type QuoteStatus =
  | 'Draft'
  | 'Sent'
  | 'Viewed'
  | 'Follow Up'
  | 'Negotiating'
  | 'Won'
  | 'Lost'
  | 'Expired'
  | 'Converted';

export type QuoteRecord = TenantOwned & {
  quoteNumber: string;
  source: QuoteSource;
  status: QuoteStatus;
  customerId: EntityId;
  propertyId?: EntityId;
  bookingId?: EntityId;
  serviceCategory: ServiceCategory;
  serviceType: ServiceType;
  pricingSource: PricingSource;
  pricingInput: PricingInput;
  pricingResult: PricingResult;
  selectedPriceCents: number;
  expirationDate: string;
  customerNotes?: string;
  internalNotes?: string;
};

export type QuoteConversionContext = {
  quoteId: EntityId;
  tenantId: EntityId;
  customerId: EntityId;
  selectedPriceCents: number;
  preloadSmartBookingTerminal: boolean;
};

export const quoteStatuses: QuoteStatus[] = ['Draft', 'Sent', 'Viewed', 'Follow Up', 'Negotiating', 'Won', 'Lost', 'Expired', 'Converted'];
