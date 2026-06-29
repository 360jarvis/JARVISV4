# Jarvixx 2.0 API Architecture

## Purpose

The API layer must protect tenant data, enforce permissions, validate input, write audit logs, and return consistent responses.

## API Principles

- Resolve tenant context first.
- Resolve authenticated user second.
- Check permission before reading or writing.
- Validate input before mutation.
- Write audit logs for important changes.
- Never fake payment, booking, import, or success states.
- Return structured errors.

## API Response Shape

Successful responses should return:

- ok: true
- data
- meta when useful

Failed responses should return:

- ok: false
- error_code
- message
- field_errors when useful

## Tenant Resolution

Tenant can be resolved by:

- authenticated account
- workspace slug
- subdomain
- portal token
- platform admin override

## Permission Guard Flow

1. Load request context.
2. Resolve tenant.
3. Resolve user.
4. Resolve role and permissions.
5. Validate action permission.
6. Execute business logic.
7. Write timeline and audit events.
8. Return response.

## Core API Groups

- auth
- tenants
- users
- customers
- properties
- bookings
- recurring
- quotes
- payments
- invoices
- workforce
- dispatch
- quality
- growth
- inventory
- fleet
- communications
- reports
- ai
- settings
- billing
- support

## Status

Foundation architecture approved for implementation planning.
