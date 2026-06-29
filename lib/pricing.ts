import type { EntityId } from './schema';
import type { Frequency, ServiceCategory, ServiceType } from './bookings';

export type PricingSource =
  | 'Smart Booking Terminal'
  | 'Quote Builder'
  | 'Customer Portal'
  | 'Public Calculator'
  | 'Jarvixx AI'
  | 'Website Chat'
  | 'Commercial Form'
  | 'Growth Campaign';

export type PricingInput = {
  tenantId: EntityId;
  source: PricingSource;
  serviceCategory: ServiceCategory;
  serviceType: ServiceType;
  zip?: string;
  marketType?: 'Budget' | 'Standard' | 'Premium' | 'Luxury';
  bedrooms?: number;
  bathrooms?: number;
  squareFeet?: number;
  condition?: 'Light' | 'Average' | 'Heavy' | 'Move In Out' | 'Post Construction';
  extras?: string[];
  addOns?: string[];
  frequency: Frequency;
  teamSize: number;
  estimatedDurationMinutes?: number;
  manualAdjustmentCents?: number;
  couponCode?: string;
  giftCardCode?: string;
  taxable: boolean;
};

export type PricingResult = {
  lowCents: number;
  recommendedCents: number;
  premiumCents: number;
  selectedCents: number;
  discountCents: number;
  taxCents: number;
  finalTotalCents: number;
  estimatedDurationMinutes: number;
  estimatedLaborCostCents?: number;
  estimatedMarginPercent?: number;
  customerSummary: string;
  internalNotes: string[];
};

export function formatCurrency(cents: number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
}

export function calculateFoundationPrice(input: PricingInput): PricingResult {
  const baseCents = input.serviceType === 'Deep Cleaning' ? 29600 : input.serviceType === 'Move In Out Cleaning' ? 34000 : 18000;
  const frequencyDiscount = input.frequency === 'Weekly' ? 0.15 : input.frequency === 'Bi-Weekly' ? 0.1 : input.frequency === 'Monthly' ? 0.05 : 0;
  const discountCents = Math.round(baseCents * frequencyDiscount);
  const selectedCents = baseCents - discountCents + (input.manualAdjustmentCents || 0);
  const taxCents = input.taxable ? Math.round(selectedCents * 0.0825) : 0;
  const finalTotalCents = selectedCents + taxCents;

  return {
    lowCents: Math.round(baseCents * 0.93),
    recommendedCents: baseCents,
    premiumCents: Math.round(baseCents * 1.18),
    selectedCents,
    discountCents,
    taxCents,
    finalTotalCents,
    estimatedDurationMinutes: input.estimatedDurationMinutes || 240,
    customerSummary: input.serviceType + ' priced through the shared Jarvixx pricing engine.',
    internalNotes: ['Foundation calculator only', 'Replace with tenant pricing rules before beta']
  };
}
