# Jarvixx Enterprise Design System Plan

## Mission
Build one premium reusable design system that every Jarvixx module uses. No isolated page-specific UI. No random styles. No dummy buttons without a clear future action.

## Brand Direction

- Premium SaaS
- Champagne gold and black
- Clean white work areas
- Compact enterprise spacing
- Light typography, not overly bold
- Professional command-center feel
- Responsive across desktop, tablet, and mobile

## Core Tokens

- Background: black shell with white canvas
- Primary accent: champagne gold
- Secondary accent: soft gold tint
- Text: near-black
- Muted text: warm gray
- Borders: soft champagne-gray
- Radius: 14 to 22px
- Shadows: subtle only

## Required Shared Components

- AppShell
- Sidebar
- TopBar
- PageHeader
- KpiCard
- StatusBadge
- ActionButton
- DataTable
- FilterBar
- SearchInput
- FormField
- ModalShell
- Tabs
- Timeline
- EmptyState
- LoadingState
- ErrorState
- SectionCard
- CommandPalette foundation

## Refactor Rule

Every existing module must gradually move to shared components. Do not rewrite all modules at once. Refactor in safe passes:

1. Design tokens
2. Sidebar and layout
3. Page headers
4. Cards and KPI widgets
5. Tables and filters
6. Forms and modals
7. Empty/loading/error states
8. Responsive polish

## Route Stability Rule

No feature work should break deployment. Each pass must keep these routes working:

- /
- /app
- /login
- /signup
- /app/setup
- /app/customers
- /app/bookings
- /app/payments
- /app/reports
- /app/settings

## Status
Approved for Phase 2.1 implementation.
