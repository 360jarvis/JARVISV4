# Jarvixx 2.0 Route Lock

This file is the official route contract. No developer or agent should create, rename, redirect, or remove routes outside this list without owner approval.

## Public Website

- `/` - Public marketing website, not the app dashboard
- `/pricing` - Public pricing
- `/features` - Public feature overview
- `/login` - Login
- `/signup` - Signup
- `/forgot-password` - Password recovery

## App Core

- `/app` - Tenant dashboard home
- `/app/jarvixx-ai` - Jarvixx AI assistant
- `/app/internal-chat` - Internal team chat

## Customer Module

- `/app/customers` - Customer Command Center
- `/app/customers/[customerId]` - Customer 360

## Operations Module

- `/app/bookings` - Booking Command Center
- `/app/bookings/new` - Smart Booking Terminal
- `/app/bookings/[bookingId]` - Booking detail
- `/app/dispatch` - Dispatch Command Center
- `/app/workforce` - Workforce Command Center

## Financial Module

- `/app/financial` - Financial Command Center
- `/app/payments` - Payment Command Center
- `/app/reports` - Reports Center

## Growth Module

- `/app/growth` - Growth Command Center
- `/app/quality` - Quality Command Center

## Tools Module

- `/app/inventory` - Inventory Command Center
- `/app/fleet` - Fleet Command Center

## Admin Module

- `/app/settings` - Settings
- `/app/setup` - Setup Wizard
- `/app/billing` - Tenant billing
- `/app/support` - Tenant support tickets

## Portals

- `/portal/customer` - Customer portal
- `/portal/provider` - Provider portal
- `/portal/employee` - Employee portal

## API Health

- `/api/health` - Health check
- `/api/version` - Version check

## Route Rules

- Do not use old root dashboard routes.
- Do not let `jarvixx.com` open the internal app.
- Public website and app must be separate.
- All app routes must require authenticated tenant context.
- All portal routes must use portal-specific access rules.
