import PortalShell from '../../../components/PortalShell';
import PortalHome from '../../../components/PortalHome';

export default function StaffPortalPage() {
  return <PortalShell portalType="Employee" title="Staff Portal" subtitle="Schedule, assigned work, documents, time records, and office communication."><PortalHome portalType="Employee" /></PortalShell>;
}
