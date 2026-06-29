# Authentication and Identity Platform Core

## Purpose

This milestone turns Jarvixx from architecture into a working SaaS foundation. Authentication, tenant detection, roles, sessions, onboarding, and setup must be correct before customer, booking, payment, and AI workflows become live.

## Core Rules

- Users should never see tenant_default_001.
- Login must resolve the correct access type from the account.
- Tenant owners, staff, providers, customers, and platform admins must have different access rules.
- Every authenticated app request must resolve tenant context.
- Every protected action must check permissions.
- New tenant signup must verify email before full access.
- Trial and billing status must control access.

## Login Resolution

When a user enters email and password, the system must determine:

1. Is this a platform admin?
2. Is this a tenant owner or staff user?
3. Is this a provider or contractor?
4. Is this a customer portal user?
5. Is this a staff portal user?
6. Which tenant or workspace does the account belong to?
7. What role and permissions apply?
8. Which route should open after login?

## Signup Flow

1. Company name
2. Owner name
3. Owner email
4. Phone
5. Password
6. Plan selection or trial
7. Create tenant shell
8. Send verification email
9. Start setup wizard
10. Require core company setup before production use

## Required Setup Wizard Sections

- Company profile
- Logo and branding
- Business hours
- Service areas
- Arrival windows
- Services
- Pricing defaults
- Payment processor
- Notification settings
- User invitation

## Session Requirements

Session context must include:

- user_id
- tenant_id
- role
- access_type
- plan
- tenant_status
- permissions

## Access Types

- Platform Admin
- Tenant Owner
- Tenant Staff
- Provider Portal
- Customer Portal
- Staff Portal

## Beta Acceptance Criteria

- Signup creates tenant and owner user.
- Login routes users by access type.
- Email verification state is tracked.
- Password reset route exists.
- Protected app routes require tenant context.
- Portal routes use portal context.
- Billing lock status can block tenant access later.

## Status

Approved for Milestone 1 implementation.
