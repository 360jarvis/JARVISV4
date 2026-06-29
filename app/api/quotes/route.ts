import { apiNotReady, apiOk } from '../../../lib/apiResponse';
import { getRequestContext } from '../../../lib/requestContext';

export async function GET(request: Request) {
  const context = getRequestContext(request);

  if (!context.tenantId) {
    return apiNotReady('Quotes');
  }

  return apiOk([], {
    tenantId: context.tenantId,
    message: 'Quote API contract established. Live database integration is the next implementation step.'
  });
}
