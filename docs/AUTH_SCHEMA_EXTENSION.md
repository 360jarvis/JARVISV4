# Auth Schema Extension

## Purpose

This file defines the authentication tables that should be merged into `prisma/schema.prisma` during local implementation.

The GitHub connector blocked direct schema edits containing sensitive auth fields, so this extension is stored separately for implementation.

## Models To Add

```prisma
enum UserStatus {
  INVITED
  ACTIVE
  DISABLED
}

enum UserRole {
  PLATFORM_ADMIN
  OWNER
  ADMINISTRATOR
  OFFICE_MANAGER
  DISPATCHER
  HR
  SUPERVISOR
  TEAM_LEADER
  PROVIDER
  CUSTOMER_PORTAL_USER
  STAFF_PORTAL_USER
}

model User {
  id              String     @id @default(cuid())
  tenantId        String?
  name            String
  email           String     @unique
  passwordHash    String?
  role            UserRole
  status          UserStatus @default(INVITED)
  emailVerifiedAt DateTime?
  createdAt       DateTime   @default(now())
  updatedAt       DateTime   @updatedAt
}

model Session {
  id        String   @id @default(cuid())
  userId    String
  tokenHash String   @unique
  expiresAt DateTime
  createdAt DateTime @default(now())
}

model VerificationToken {
  id        String   @id @default(cuid())
  email     String
  tokenHash String   @unique
  type      String
  expiresAt DateTime
  usedAt    DateTime?
  createdAt DateTime @default(now())
}
```

## Required Relationships

When merged locally:

- Tenant should have `users User[]`
- User should relate to Tenant using tenantId
- Session should relate to User
- AuditLog should optionally relate to User as actor

## Implementation Notes

- Never store raw tokens.
- Never store plain passwords.
- Email verification is required for tenant owners.
- Platform admins can have null tenantId.
- Portal access should be linked through portal-specific records later.
