# Jarvixx 2.0 Database Architecture

## Purpose

This document defines the first source-of-truth database architecture for the Jarvixx clean rebuild.

## Core Principle

Every operational record must belong to a tenant. Tenant isolation is mandatory.

## Primary Entities

### Platform

- tenants
- tenant_settings
- tenant_billing_accounts
- tenant_integrations
- tenant_feature_flags

### Identity and Access

- users
- roles
- permissions
- user_roles
- portal_accounts
- sessions
- login_events

### Customers

- customers
- customer_contacts
- customer_properties
- customer_tags
- customer_notes
- customer_documents
- customer_timeline_events
- customer_blacklist_entries

### Bookings

- bookings
- recurring_series
- booking_assignments
- booking_status_events
- booking_notes
- booking_checklists
- booking_files

### Quotes

- quotes
- quote_line_items
- quote_status_events
- quote_conversion_events

### Payments and Financial

- payment_methods
- payment_transactions
- payment_holds
- invoices
- invoice_line_items
- refunds
- credits
- balances
- financial_events

### Workforce

- providers
- employees
- teams
- availability
- clock_events
- payroll_profiles
- payroll_runs
- payroll_line_items
- workforce_documents

### Quality

- reviews
- complaints
- complaint_events
- inspections
- inspection_photos
- reclean_requests
- damage_claims

### Growth

- leads
- lead_events
- campaigns
- campaign_messages
- abandoned_carts
- review_requests
- referral_events

### Inventory and Fleet

- inventory_items
- inventory_locations
- inventory_movements
- vendors
- purchase_orders
- fleet_vehicles
- fleet_maintenance_tickets

### Communications

- messages
- email_events
- sms_events
- phone_call_logs
- internal_chat_threads
- internal_chat_messages
- notification_events

### AI and Automation

- ai_conversations
- ai_memory_entries
- ai_actions
- automation_rules
- automation_runs

### Audit

- audit_logs
- system_events
- data_import_jobs
- data_export_jobs

## Required Standard Columns

Most tables must include:

- id
- tenant_id
- created_at
- updated_at
- created_by_user_id
- updated_by_user_id
- deleted_at
- source_module

## Tenant Isolation Rules

- Every tenant-owned row must include tenant_id.
- API requests must resolve tenant context before reading or writing data.
- Cross-tenant reads are blocked by default.
- Platform owner tools must use explicit elevated permissions.
- Customer portal users can only access records assigned to their portal account.
- Provider and employee users can only access permitted work records.

## Audit Rules

Audit logs must capture:

- tenant_id
- actor_user_id
- actor_role
- action
- entity_type
- entity_id
- before_value
- after_value
- source_module
- created_at
- ip_address when available
- device when available

## Status

Foundation architecture approved for implementation planning.
