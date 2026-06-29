export async function GET() {
  return Response.json({
    ok: true,
    service: 'Jarvixx',
    status: 'healthy',
    build: '2.0.0-foundation'
  });
}
