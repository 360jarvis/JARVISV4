# Settings and Setup Engine Blueprint

## Purpose

The Settings and Setup Engine controls tenant onboarding, company configuration, branding, service areas, business hours, arrival windows, services, pricing defaults, payment setup, notifications, users, and permissions.

## Core Rule

No tenant should go live until the required setup sections are complete. Setup controls the behavior of bookings, pricing, dispatch, payments, notifications, portals, and AI.

## Required Setup Sections

- Company profile
- Branding and logo
- Business hours
- Service areas
- Arrival windows
- Services
- Pricing defaults
- Payment processor
- Notification settings
- User invitations
- Portal settings
- AI settings

## Company Profile

Stores:

- Legal company name
- Display company name
- Phone
- Email
- Website
- Address
- Time zone
- Tax settings
- Default language

## Branding

Stores:

- Logo
- Brand colors
- Public website display name
- Email footer
- Invoice branding
- Customer portal branding

## Business Hours

Stores:

- Open days
- Open hours
- Holidays
- Closed dates
- Emergency override

## Service Areas

Stores:

- ZIP codes
- Cities
- Counties
- Not serviceable zones
- Route zones
- Travel fees
- Area adjustments

## Arrival Windows

Default arrival windows should be dropdown-based, not free text. Examples: 8-10, 10-1, 1-3, 3-5.

## Services

Stores:

- Residential services
- Commercial services
- Airbnb services
- Add-ons
- Extras
- Production rates
- Checklists

## Payment Settings

Stores:

- Default processor
- Pre-authorization rules
- Cancellation fee rules
- Reschedule fee rules
- Failed payment rules
- Refund permissions

## Notification Settings

Stores:

- Booking confirmations
- Reminders
- Review requests
- Payment alerts
- Internal alerts
- Email templates
- SMS templates

## Beta Acceptance Criteria

- Setup checklist shows completion status.
- Required setup blocks production use until completed.
- Settings feed bookings, pricing, payments, notifications, dispatch, portals, and AI.
- Changes create audit events.

## Status

Approved for foundation implementation.
