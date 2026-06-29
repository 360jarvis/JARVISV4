# Jarvixx AI Core Blueprint

## Purpose

Jarvixx AI is the platform brain. It must understand the tenant, user role, customer context, bookings, quotes, dispatch, workforce, payments, reports, settings, and allowed actions.

## Core Rule

Jarvixx AI must be permission-aware. It can only show information and perform actions that the current user is allowed to access.

## Personality

Jarvixx AI should sound warm, professional, clear, and human-like. It should greet users by name, adapt to English or Spanish, and explain things simply.

## Context Sources

- Tenant settings
- User profile
- Role and permissions
- Customers
- Customer 360
- Bookings
- Quotes
- Pricing
- Dispatch
- Workforce
- Payments
- Financial records
- Quality
- Growth
- Inventory
- Fleet
- Reports
- Support tickets
- Communication history

## AI Capabilities

- Answer operational questions
- Summarize customer history
- Help create bookings
- Help create quotes
- Explain pricing
- Suggest dispatch assignments
- Identify payment issues
- Draft emails and SMS
- Generate reports
- Surface risks and opportunities
- Guide staff through workflows
- Support website chat widget
- Support future voice and phone workflows

## AI Actions

Every AI action must record:

- Tenant
- User
- Role
- Action type
- Source module
- Target entity
- Input
- Output
- Approval status
- Created time

## Approval Rules

AI can suggest actions freely, but sensitive actions require confirmation or permission.

Examples requiring approval:

- Charge card
- Refund payment
- Cancel booking
- Delete record
- Send mass campaign
- Change pricing rules
- Change payroll data
- Change tenant billing settings

## Website Chat Widget

The website chat widget must support:

- Quote help
- Availability questions
- Booking requests
- Reschedule requests
- Service questions
- Lead capture
- Hand-off to office

It must respect tenant pricing, service area, availability, and business rules.

## Status

Approved for foundation implementation.
