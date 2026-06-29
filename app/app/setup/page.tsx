import AppShell from '../../../components/AppShell';
import SetupWizard from '../../../components/SetupWizard';

export default function SetupPage() {
  return <AppShell title="Setup" subtitle="Complete tenant onboarding before production use."><SetupWizard /></AppShell>;
}
