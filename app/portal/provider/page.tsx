import PortalShell from '../../../components/PortalShell';
import PortalHome from '../../../components/PortalHome';

export default function ProviderPortalPage() {
  return <PortalShell portalType="Provider" title="Provider Portal" subtitle="Assigned jobs, routes, customer notes, photos, checklists, time events, and dispatch messages."><PortalHome portalType="Provider" /></PortalShell>;
}
