# Smart Pricing Engine Blueprint

## Purpose

Jarvixx must use one shared pricing engine across bookings, quotes, public calculators, customer portal, AI assistant, commercial forms, campaigns, and future integrations.

## Core Rule

There must be one pricing source of truth. No module should calculate prices independently.

## Pricing Inputs

- Tenant
- Service category
- Service type
- Address or ZIP
- Market type
- Property type
- Bedrooms
- Bathrooms
- Square footage
- Condition
- Extras
- Add-ons
- Pets
- Frequency
- Team size
- Estimated duration
- Production rate
- Labor cost
- Payroll burden
- Supplies
- Travel
- Overhead
- Profit target
- Area adjustment
- Coupon
- Gift card
- Manual adjustment with permission
- Tax rules

## Pricing Outputs

- Low price
- Recommended price
- Premium price
- Selected price
- Estimated duration
- Estimated labor cost
- Estimated margin
- Discount total
- Tax total
- Final total
- Customer-facing summary
- Internal calculation notes

## Guardrails

- Hourly bookings calculate from purchased time, not bedrooms or bathrooms.
- Bedrooms, bathrooms, square footage, and extras may estimate time but cannot override hourly price unless tenant rules allow it.
- Recurring discounts must follow tenant settings.
- Manual adjustments require permission and audit logging.
- Customer-facing summaries must not reveal internal cost breakdowns.
- No fake pricing success states.
- All pricing calculations must record the source module.

## Connected Modules

- Smart Booking Terminal
- Booking Command Center
- Quotes
- Customer Portal
- Public Calculators
- Jarvixx AI
- Website Chat Widget
- Commercial Estimates
- Growth Campaigns
- Financial Reports

## Status

Approved for foundation implementation.
