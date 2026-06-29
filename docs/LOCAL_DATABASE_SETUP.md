# Local Database Setup

## Purpose

This file explains how to activate the database layer after the Prisma dependencies are installed locally.

## Required Dependencies

Install these locally when ready:

- prisma
- @prisma/client
- tsx

## Environment

Copy `env.example` to `.env` and set `DATABASE_URL`.

## Commands

Generate Prisma client:

`npx prisma generate`

Create migration:

`npx prisma migrate dev --name platform_core`

Open Prisma Studio:

`npx prisma studio`

## Current Schema Includes

- Tenant
- Customer
- Property
- Booking
- Quote
- PaymentTransaction
- TimelineEvent
- AuditLog

## Auth Layer Note

Authentication tables should be added after package updates are possible in the local development environment. The connector blocked some security-related file updates, so auth should be layered in during local implementation.
