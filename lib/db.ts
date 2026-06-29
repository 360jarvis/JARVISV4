// Prisma database client foundation.
// Install prisma and @prisma/client locally before enabling this file in live routes.

export type DatabaseStatus = {
  configured: boolean;
  provider: 'postgresql';
  message: string;
};

export function getDatabaseStatus(): DatabaseStatus {
  return {
    configured: Boolean(process.env.DATABASE_URL),
    provider: 'postgresql',
    message: process.env.DATABASE_URL ? 'DATABASE_URL is configured.' : 'DATABASE_URL is not configured yet.'
  };
}
