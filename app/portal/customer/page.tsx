import PortalShell from '../../../components/PortalShell';
import PortalHome from '../../../components/PortalHome';

export default function CustomerPortalPage() {
  return <PortalShell portalType="Customer" title="Customer Portal" subtitle="Bookings, quotes, invoices, cards, reviews, and allowed service requests."><PortalHome portalType="Customer" /></PortalShell>;
}
