# Payments and Financial Engine Blueprint

## Purpose

The Payments and Financial Engine is the source of truth for money movement, balances, invoices, holds, refunds, credits, fees, payroll costs, and reporting.

## Core Rule

No module should invent payment or financial states. Bookings, quotes, invoices, payroll, refunds, credits, quality, and reports must use the same financial source of truth.

## Payment Command Center

Required capabilities:

- Open balances
- Active holds
- Failed payments
- Failed pre-authorizations
- Pending invoices
- Refunds
- Credits
- Payment issues
- Card update workflow
- Payment timeline
- Processor connection status

## Supported Payment States

- Not Required
- Pending
- Hold Active
- Pre-Charge
- Captured
- Failed
- Refunded
- Partially Refunded
- Disputed
- Void

## Rules

- Tenant default processor controls booking payment behavior.
- Processor tokens cannot be mixed.
- Card update opens the secure payment collection flow.
- Failed payments create alerts and timeline events.
- Cancellation and reschedule fees follow tenant settings.
- Pre-authorization windows follow tenant settings.
- No fake payment success states are allowed.

## Financial Command Center

Required capabilities:

- Revenue summary
- Open balances
- Paid revenue
- Failed payments
- Refunds and credits
- Payroll cost visibility
- Inventory cost visibility
- Quality-related credits
- QuickBooks-style reporting
- CSV and PDF export later

## Connected Modules

- Smart Booking Terminal
- Booking Command Center
- Quotes
- Customer 360
- Dispatch
- Workforce
- Payroll
- Inventory
- Quality
- Growth
- Reports
- Tenant Billing

## Status

Approved for foundation implementation.
