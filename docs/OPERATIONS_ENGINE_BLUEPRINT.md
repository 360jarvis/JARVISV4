# Operations Engine Blueprint

## Purpose

The Operations Engine connects bookings, dispatch, workforce, routes, time events, payroll preparation, quality, and reports.

## Core Rule

A booking is operationally ready only when scheduling, assignment, route visibility, workforce notification, and timeline/audit events are connected.

## Dispatch Command Center

Required capabilities:

- Today view
- Tomorrow view
- Week view
- Month view
- Map view
- Route view
- Timeline view
- Unassigned jobs
- Capacity view
- Late status alerts
- Completed today
- Cancellations
- Recleans

## Booking Card Requirements

Each dispatch card should show:

- Booking reference
- Customer
- Address
- Phone
- Service
- Estimated duration
- Price
- Arrival window
- Assigned team
- Status
- Payment status
- Quality flag

## Assignment Rules

Assignments should consider:

- Availability
- Distance
- Drive time
- Team size
- Skills
- Language
- Customer preference
- Production rate
- Workload
- Overtime risk

Manual override is allowed with audit logging.

## Workforce Command Center

Required capabilities:

- Employee and provider profiles
- Team builder
- Availability
- Skills
- Payroll profile
- Time events
- Documents
- Expiration reminders
- Compliance visibility

## Work Time Workflow

- Clock In
- Driving
- Arrived
- Start Cleaning
- Break
- Resume
- Complete
- Clock Out

GPS and timestamp capture should be configurable by tenant settings.

## Reports

Operations reports should include route efficiency, utilization, capacity, on-time arrival percentage, travel time, job duration, completion rate, reclean rate, team productivity, revenue per team, revenue per cleaner, payroll cost vs revenue, overtime, and customer satisfaction by team.

## Status

Approved for foundation implementation.
