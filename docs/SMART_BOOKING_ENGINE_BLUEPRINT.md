# Smart Booking Engine Blueprint

## Purpose

The Smart Booking Engine is the operational heart of Jarvixx. Every booking source must feed the same booking workflow and the same source of truth.

## Booking Sources

- Office booking
- Online booking
- Customer portal
- Jarvixx AI assistant
- Website chat widget
- Commercial forms
- Quote conversion
- Imported booking

## Required Workflow

1. Resolve tenant.
2. Identify booking source.
3. Check service area by ZIP or address.
4. Search existing customer by phone, email, and address.
5. Create or select customer.
6. Select residential or commercial workflow.
7. Select service type.
8. Capture property details.
9. Capture service notes and access details.
10. Open smart calendar.
11. Select date and arrival window or exact time.
12. Calculate price using the shared pricing engine.
13. Apply coupon, gift card, adjustment, or frequency discount when allowed.
14. Choose one-time or recurring schedule.
15. Capture payment method.
16. Assign provider, team, or leave unassigned.
17. Save booking.
18. Write timeline and audit logs.
19. Send confirmation messages according to tenant settings.
20. Surface the booking across connected command centers.

## Booking Statuses

- Draft
- Quote Pending
- Scheduled
- Assigned
- Confirmed
- On The Way
- Arrived
- In Progress
- Completed
- Canceled
- Rescheduled
- No Show
- Payment Failed
- Needs Review

## Booking Rules

- A one-time booking creates exactly one booking record.
- A recurring booking creates a recurring series plus parent booking and generated occurrences.
- Duplicate booking protection is mandatory.
- Quote conversion must link quote_id and mark quote converted only after booking save succeeds.
- Canceled bookings can be reactivated by rescheduling and saving.
- Past bookings are never regenerated during recurring changes.
- Future recurring occurrences can be regenerated from the current anchor.

## Payment Rules

- Payment behavior must use the tenant default processor unless overridden by permission.
- Processor tokens cannot be mixed.
- Pre-authorization timing must follow tenant settings.
- Cancellation and reschedule fees must follow tenant settings.
- Failed card rules must create alerts and timeline events.
- No fake payment success states are allowed.

## Scheduling Rules

- Default arrival windows are selected from tenant settings.
- Exact time is allowed only if tenant settings allow it.
- The smart calendar must consider capacity, teams, providers, route zones, service duration, and blocked dates.

## Output Connections

A saved booking must connect to Customer 360, Booking Command Center, Dispatch, Workforce, Financial, Payments, Quality, Growth attribution, Timeline, and Audit logs.

## Status

Approved for foundation implementation.
