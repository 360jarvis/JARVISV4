import Breadcrumbs from './Breadcrumbs';
import CompanySwitcher from './CompanySwitcher';
import GlobalCommandBar from './GlobalCommandBar';
import NotificationCenter from './NotificationCenter';
import QuickActions from './QuickActions';
import UserProfileMenu from './UserProfileMenu';

export default function TopNavigation(props: { title: string; subtitle: string }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        padding: '18px 28px',
        borderBottom: '1px solid var(--jarvixx-border)',
        background: 'rgba(251,250,247,0.92)',
        backdropFilter: 'blur(18px)'
      }}
    >
      <div style={{ display: 'grid', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 18, alignItems: 'center' }}>
          <div style={{ minWidth: 0 }}>
            <Breadcrumbs items={['Jarvixx', props.title]} />
            <h1 style={{ margin: '7px 0 4px', fontSize: 30, lineHeight: 1.05, letterSpacing: '-0.03em' }}>{props.title}</h1>
            <p style={{ margin: 0, color: 'var(--jarvixx-muted)', fontSize: 14 }}>{props.subtitle}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <CompanySwitcher />
            <NotificationCenter />
            <UserProfileMenu />
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14 }}>
          <GlobalCommandBar />
          <QuickActions />
        </div>
      </div>
    </header>
  );
}
