import { apiFail, apiNotReady, apiOk } from '../../../lib/apiResponse';
import { mockCustomerRepository } from '../../../lib/mockRepositories';
import { getRequestContext } from '../../../lib/requestContext';

export async function GET(request: Request) {
  const context = getRequestContext(request);

  if (!context.tenantId) {
    return apiNotReady('Customers');
  }

  const result = await mockCustomerRepository.list({ tenantId: context.tenantId, limit: 25, offset: 0 });

  if (!result.ok) {
    return apiFail('CUSTOMERS_LIST_FAILED', result.error || 'Unable to load customers.', 500);
  }

  return apiOk(result.data || [], {
    tenantId: context.tenantId,
    source: 'mock-repository',
    message: 'Repository contract wired. Replace mock repository with Prisma implementation when database is ready.'
  });
}
