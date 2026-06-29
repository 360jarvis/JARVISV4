# Reports Engine Blueprint

## Purpose

The Reports Engine gives Jarvixx tenants clean, exportable, QuickBooks-style visibility across customers, bookings, payments, operations, workforce, quality, growth, inventory, and fleet.

## Core Rule

Reports must read from shared source-of-truth modules. Reports should not calculate from disconnected fake data.

## Required Report Groups

- Executive Summary
- Customer Reports
- Booking Reports
- Revenue Reports
- Payment Reports
- Open Balance Reports
- Payroll and Workforce Reports
- Dispatch and Operations Reports
- Quality Reports
- Growth Reports
- Inventory Reports
- Fleet Reports
- Audit Reports

## Financial Report Style

Financial reports should follow a professional accounting format:

- Company name
- Report name
- Date range
- Basis
- Type
- Date
- Number
- Name
- Memo
- Account
- Split
- Amount
- Balance

## Export Requirements

- PDF export
- CSV export
- Print view
- Scheduled reports later

## Report Rules

- Date ranges must be consistent.
- Currency must display in USD unless tenant settings change it.
- Reports must respect role permissions.
- Portal users cannot access internal reports.
- Payroll reports require protected workforce permissions.
- Financial reports require protected financial permissions.
- Audit reports require owner or administrator access.

## Connected Modules

- Customers
- Bookings
- Quotes
- Payments and Financial
- Dispatch
- Workforce
- Quality
- Growth
- Inventory
- Fleet
- Communications
- AI
- Audit Logs

## Beta Acceptance Criteria

- Reports route loads.
- Report catalog is grouped by module.
- Financial report format is defined.
- Exports are planned.
- Role visibility rules are defined.
- Report source module is explicit.

## Status

Approved for foundation implementation.
