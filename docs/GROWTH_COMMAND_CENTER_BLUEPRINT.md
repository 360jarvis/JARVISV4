# Growth Command Center Blueprint

## Purpose

The Growth Command Center turns leads, quotes, campaigns, abandoned booking attempts, review requests, referrals, and lost customers into one connected growth system.

## Core Rule

Growth must connect to real customer, quote, booking, review, campaign, and attribution records. It should not be a standalone marketing page with disconnected metrics.

## Required Capabilities

- Lead capture
- Lead pipeline
- Abandoned quote tracking
- Abandoned booking tracking
- Lost customer tracking
- Win-back campaigns
- Review request campaigns
- Referral tracking
- Campaign attribution
- Website chat lead capture
- AI follow-up suggestions
- Email and SMS campaign hooks
- Booking conversion tracking

## Lead Sources

- Website form
- Website chat widget
- Public calculator
- Customer portal
- Office entry
- Referral
- Google Business Profile
- Paid ad
- Social media
- Imported lead
- Jarvixx AI

## Growth Workflows

### Lead Capture

1. Capture contact details.
2. Detect duplicate customer or lead.
3. Attach source and campaign.
4. Create lead timeline event.
5. Suggest next action.

### Quote Follow Up

1. Detect quote sent but not converted.
2. Track viewed status.
3. Trigger reminder sequence according to tenant settings.
4. Stop reminders when booked, declined, or expired.

### Lost Customer Win Back

1. Identify customers with no booking after tenant-defined days.
2. Segment by value, frequency, and service type.
3. Suggest campaign.
4. Track message delivery and booking conversion.

### Review Growth

1. Capture internal rating.
2. For 4 to 5 stars, request public review when tenant settings allow.
3. For 1 to 3 stars, create quality follow-up instead of public review routing.
4. Track review request status.

## Connected Modules

- Customers
- Customer 360
- Quotes
- Bookings
- Communications
- Quality
- Jarvixx AI
- Reports
- Public website
- Portals

## Beta Acceptance Criteria

- Leads have source attribution.
- Abandoned quotes can be followed up.
- Lost customers can be identified.
- Review routing respects rating rules.
- Campaign actions write communication records.
- Conversions link back to campaign and source.

## Status

Approved for foundation implementation.
