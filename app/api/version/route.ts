export async function GET() {
  return Response.json({
    app: 'Jarvixx',
    version: process.env.NEXT_PUBLIC_APP_VERSION || '2.0.0-foundation',
    railwayCommit: process.env.RAILWAY_GIT_COMMIT_SHA || process.env.RAILWAY_GIT_COMMIT || 'local',
    environment: process.env.RAILWAY_ENVIRONMENT || process.env.NODE_ENV || 'unknown'
  });
}
