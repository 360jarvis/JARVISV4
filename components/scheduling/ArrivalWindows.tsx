export type ArrivalWindowStatus = {
  scheduled: number;
  assigned: number;
  unassigned: number;
  runningLate: number;
  completed: number;
};

export type ArrivalWindow = {
  id: string;
  label: string;
  shortLabel: string;
  status: ArrivalWindowStatus;
};

export const DEFAULT_ARRIVAL_WINDOWS: ArrivalWindow[] = [
  {
    id: 'window-8-10',
    label: '8:00 AM - 10:00 AM',
    shortLabel: '8:00 - 10:00',
    status: { scheduled: 12, assigned: 10, unassigned: 2, runningLate: 1, completed: 4 }
  },
  {
    id: 'window-10-1',
    label: '10:00 AM - 1:00 PM',
    shortLabel: '10:00 - 1:00',
    status: { scheduled: 18, assigned: 15, unassigned: 3, runningLate: 2, completed: 6 }
  },
  {
    id: 'window-1-3',
    label: '1:00 PM - 3:00 PM',
    shortLabel: '1:00 - 3:00',
    status: { scheduled: 14, assigned: 13, unassigned: 1, runningLate: 0, completed: 2 }
  },
  {
    id: 'window-3-5',
    label: '3:00 PM - 5:00 PM',
    shortLabel: '3:00 - 5:00',
    status: { scheduled: 9, assigned: 8, unassigned: 1, runningLate: 0, completed: 0 }
  }
];

export function ArrivalWindowCard({ window }: { window: ArrivalWindow }) {
  return (
    <a
      href={`/app/dispatch?arrivalWindow=${window.id}`}
      style={{
        border: '1px solid rgba(216,189,127,0.26)',
        borderRadius: 16,
        background: 'rgba(255,255,255,0.06)',
        color: '#fff',
        padding: 14,
        display: 'grid',
        gap: 12
      }}
    >
      <div>
        <div style={{ color: 'var(--jarvixx-gold)', fontSize: 17, fontWeight: 800 }}>{window.label}</div>
        <div style={{ color: '#b9ae98', fontSize: 12, marginTop: 4 }}>Arrival window</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 8 }}>
        <Metric label="Scheduled" value={window.status.scheduled} />
        <Metric label="Assigned" value={window.status.assigned} />
        <Metric label="Unassigned" value={window.status.unassigned} />
        <Metric label="Late" value={window.status.runningLate} />
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 10, color: '#e8deca', fontSize: 12 }}>
        {window.status.completed} completed in this window
      </div>
    </a>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 9, background: 'rgba(255,255,255,0.04)' }}>
      <div style={{ color: '#b9ae98', fontSize: 11 }}>{label}</div>
      <div style={{ marginTop: 5, color: '#fff', fontSize: 18, fontWeight: 800 }}>{value}</div>
    </div>
  );
}
