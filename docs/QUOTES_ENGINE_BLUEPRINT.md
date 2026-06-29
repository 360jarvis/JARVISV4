# Quotes Engine Blueprint

## Purpose

The Quotes Engine turns leads and customer requests into priced proposals that can convert cleanly into bookings.

## Core Rule

Quotes must use the shared Smart Pricing Engine. A quote should never calculate pricing independently.

## Quote Sources

- Office quote
- Website quote form
- Public calculator
- Customer portal
- Jarvixx AI
- Website chat widget
- Commercial estimate
- Growth campaign
- Imported quote

## Quote Statuses

- Draft
- Sent
- Viewed
- Follow Up
- Negotiating
- Won
- Lost
- Expired
- Converted

## Required Workflow

1. Resolve tenant.
2. Identify or create customer.
3. Select property.
4. Select service category and service type.
5. Capture scope, notes, and add-ons.
6. Calculate low, recommended, and premium pricing using Smart Pricing Engine.
7. Select quoted price.
8. Set expiration date.
9. Save quote as Draft or Sent.
10. Track viewed and follow-up events.
11. Convert to booking only after booking save succeeds.
12. Mark quote Converted and link booking_id.
13. Write customer timeline and audit logs.

## Conversion Rules

- Conversion opens the Smart Booking Terminal with quote context.
- Quote data preloads customer, property, service, notes, and selected price.
- Quote status changes to Converted only after the booking is successfully saved.
- Converted quotes remain in quote history.
- A quote cannot create duplicate customers.
- A quote cannot create duplicate bookings.

## Connected Modules

- Customer 360
- Customer Command Center
- Smart Booking Terminal
- Booking Command Center
- Growth Command Center
- Financial Command Center
- Reports
- Jarvixx AI

## Status

Approved for foundation implementation.
