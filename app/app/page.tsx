import DashboardCommandCenter from '../../components/DashboardCommandCenter';
import { getDashboardCommandCenterData } from '../../lib/dashboard';
import { getDashboardLiveSources } from '../../lib/dashboardLiveSources';
import { headers } from 'next/headers';

export default async function AppDashboardPage() {
  const requestHeaders = headers();
  const tenantId = requestHeaders.get('x-tenant-id') || undefined;
  const liveDashboard = await getDashboardLiveSources(tenantId);
  const dashboard = getDashboardCommandCenterData({
    tenantId,
    userName: requestHeaders.get('x-user-name') || undefined,
    role: requestHeaders.get('x-user-role') || undefined,
    sources: liveDashboard.sources,
    connectionStatus: liveDashboard.connectionStatus
  });

  return (
    <DashboardCommandCenter data={dashboard} />
  );
}
