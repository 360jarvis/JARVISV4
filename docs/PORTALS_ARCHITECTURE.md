# Jarvixx Portals Architecture

## Purpose

Jarvixx portals give customers, providers, and employees secure role-specific access without exposing the internal tenant app.

## Core Rules

- Portals must be separate from the internal app.
- Portal users only see records assigned to their account or relationship.
- Portal actions must respect tenant settings and permissions.
- Important portal actions must create timeline and audit events.
- Customer-facing copy must be simple, clear, and professional.

## Customer Portal

Customers should be able to:

- View upcoming bookings
- View past bookings
- Request reschedule according to tenant policy
- Request cancellation according to tenant policy
- View quotes
- Accept quotes
- View invoices and receipts
- Update card through secure processor flow
- Submit reviews
- View allowed documents
- Upload requested documents
- Send messages to the office
- View referral credits when enabled

## Provider Portal

Providers should be able to:

- View assigned jobs
- View daily route
- Navigate to next job
- View allowed customer notes
- View access instructions
- Record time events
- Upload photos
- Complete checklists
- Report damage
- Request office help
- Message dispatch
- View allowed pay summaries

## Employee Portal

Employees should be able to:

- View schedule
- View assigned work
- Record time events
- View allowed payroll summaries
- View documents
- Sign acknowledgments
- Upload required documents
- Request time off
- Message office or supervisor

## Portal Access Types

- Customer Portal User
- Provider Portal User
- Employee Portal User
- Contractor Portal User

## Portal Routes

- `/portal/customer`
- `/portal/provider`
- `/portal/employee`

## Portal Security

Portal access must resolve:

1. Portal account
2. Tenant
3. Linked customer, provider, or employee record
4. Allowed records
5. Allowed actions

## Connected Modules

- Customers
- Bookings
- Quotes
- Payments
- Documents
- Reviews
- Dispatch
- Workforce
- Notifications
- Jarvixx AI

## Status

Approved for foundation implementation.
