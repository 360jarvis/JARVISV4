# Jarvixx 2.0 Clean Build

Jarvixx is a luxury multi-tenant SaaS command center for cleaning businesses.

This repository is the clean rebuild foundation. The goal is to remove all legacy-route conflicts, dummy UI, fake data, and uncontrolled changes.

## Foundation Rules

- No legacy pages.
- No fake production data.
- No dummy buttons unless clearly marked Coming Soon.
- Every route must be registered in `docs/ROUTE_LOCK.md` before buildout.
- Every approved module gets locked after approval.
- Global UI must follow the Jarvixx luxury design system: champagne gold, black, clean white SaaS, compact professional layouts.
- Dates must display as MM/DD/YYYY with day of week where useful.
- Phone numbers must display as (XXX) XXX-XXXX.
- Multi-tenant isolation is mandatory.
- Tenant/customer/provider/admin access must be role-based.

## First Build Order

1. App shell
2. Authentication and tenant detection
3. Dashboard shell
4. Sidebar navigation
5. Empty approved module routes
6. Health/version endpoints
7. Module-by-module buildout

## Locked Product Name

Use `Jarvixx` and `Jarvixx AI`.
Do not use legacy `Jarvis` user-facing labels unless explicitly approved.
