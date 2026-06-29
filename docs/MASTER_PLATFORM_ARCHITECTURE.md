# Jarvixx 2.0 Master Platform Architecture

## Purpose

This document is the governing architecture for the Jarvixx clean rebuild. Every module, route, API, data model, AI action, integration, and portal must align with this master architecture.

## Product Vision

Jarvixx is a luxury multi-tenant SaaS operating system for cleaning businesses. It combines CRM, booking, pricing, quotes, dispatch, workforce, payments, financials, quality, growth, reports, portals, and Jarvixx AI into one unified platform.

## Platform Principles

1. Multi-tenant isolation is mandatory.
2. Every tenant-owned record must include tenant ownership.
3. Every user action must respect role permissions.
4. Every sensitive action must be audit-ready.
5. No fake success states are allowed.
6. No module should create its own separate source of truth.
7. Shared engines own shared logic.
8. Public website and internal app must remain separate.
9. Approved routes must follow the route lock.
10. Approved modules must be locked after owner approval.

## Core Shared Services

- Tenant Context Service
- Authentication Service
- Permission Service
- Audit Log Service
- Timeline Event Service
- Notification Service
- Smart Pricing Engine
- Smart Booking Engine
- Quotes Engine
- Operations Engine
- Payments and Financial Engine
- Jarvixx AI Core
- Document Service
- Reporting Service
- Integration Service

## Module Ownership

### Customers

Owns customer profiles, contact details, properties, notes, tags, blacklist entries, documents, and customer timeline visibility.

### Bookings

Owns booking lifecycle, recurring series, quote conversion result, scheduling records, assignments, service details, and booking status.

### Pricing

Owns pricing calculations, pricing inputs, pricing outputs, discounts, adjustments, and customer-facing price summaries.

### Quotes

Owns quote lifecycle, quote statuses, proposal pricing snapshot, expiration, viewed events, and conversion handoff to booking.

### Operations

Owns dispatch board, workforce profiles, teams, assignments, availability, route visibility, time events, and payroll preparation data.

### Payments and Financial

Owns payment methods, transactions, invoices, balances, refunds, credits, financial events, revenue reporting, and payment issue queues.

### Jarvixx AI

Owns AI conversations, memory, permission-aware context, suggested actions, action approvals, website widget support, and future voice workflow support.

## Event Flow

Important business actions should write timeline events and audit logs.

Examples:

- Customer created
- Quote sent
- Quote viewed
- Quote converted
- Booking scheduled
- Booking assigned
- Booking rescheduled
- Booking canceled
- Payment hold created
- Payment failed
- Payment captured
- Worker clock event recorded
- Review received
- Complaint opened
- AI action suggested
- AI action executed

## Permission Boundaries

All protected actions must resolve:

1. Tenant
2. User
3. Role
4. Permission
5. Target entity
6. Tenant ownership

Portal users, providers, employees, and customers must only see records explicitly available to their role and relationship.

## AI Integration Rules

Jarvixx AI can read context and suggest actions according to user permissions. Sensitive actions require approval. AI actions must be logged.

Sensitive actions include charging cards, refunds, cancellations, deleting records, sending campaigns, changing pricing rules, changing payroll data, and changing tenant billing settings.

## Public Website and App Separation

- Public website lives at the marketing root.
- Internal tenant app lives under protected app routes.
- Customer, provider, and employee portals live under portal routes.
- Jarvixx.com must not open the internal app by default.

## Portal Architecture

### Customer Portal

Customers can see their own bookings, invoices, cards, reviews, documents, quotes, and allowed reschedule/cancel actions.

### Provider Portal

Providers can see assigned jobs, route details, customer notes, allowed photos, checklists, time events, and communication tools.

### Employee Portal

Employees can see schedules, assigned work, payroll visibility where allowed, documents, compliance items, and time event actions.

## Integration Architecture

Integrations must be tenant-aware and permission-controlled.

Planned integrations include:

- Stripe
- Square
- Twilio
- AWS email
- Gmail
- Google Maps and Places
- Google Routes
- QuickBooks
- Calendar providers
- Future phone or voice providers

## Data Standards

- Dates: MM/DD/YYYY in UI.
- Phone numbers: (XXX) XXX-XXXX.
- Currency: USD by default.
- Tables: compact professional layout.
- Default pagination: 25 rows.
- Customer-facing documents must hide internal cost breakdowns unless explicitly allowed.

## Testing Standards

Before beta, every module must verify:

- Route loads successfully.
- Tenant isolation works.
- Permissions block unauthorized actions.
- Empty states are professional.
- No fake success states exist.
- Critical actions write audit logs.
- Connected modules receive expected events.
- Mobile layout is usable.
- Date, phone, and currency formatting follow standards.

## Deployment Standards

- Health endpoint must pass.
- Version endpoint must pass.
- Build must pass.
- Lint or type checks should pass when configured.
- No secrets committed to repository.
- Environment variables must be documented.
- Data reset and test seed strategy must exist before beta.

## Current Foundation Status

Completed foundation areas:

- Route lock
- Build lock
- Design system
- Database architecture
- API architecture
- Customer Command Center
- Customer 360
- Smart Booking Engine
- Smart Pricing Engine
- Quotes Engine
- Operations Engine
- Payments and Financial Engine
- Jarvixx AI Core

## Next Recommended Foundation Areas

- Portals architecture
- Notification and communication engine
- Quality Command Center
- Growth Command Center
- Reports engine
- Settings and setup engine
- Integration engine
- Beta testing checklist
