import { apiNotReady, apiOk } from '../../../lib/apiResponse';
import { getRequestContext } from '../../../lib/requestContext';

export async function GET(request: Request) {
  const context = getRequestContext(request);

  if (!context.tenantId) {
    return apiNotReady('Bookings');
  }

  return apiOk([], {
    tenantId: context.tenantId,
    message: 'Booking API contract established. Live database integration is the next implementation step.'
  });
}
