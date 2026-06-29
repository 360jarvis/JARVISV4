import { reportCatalog } from '../lib/reports';
import { KpiCard, StatusBadge } from './ui';

export default function SimpleReportsCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="Reports" value={String(reportCatalog.length)} detail="Foundation catalog" />
        <KpiCard label="Financial" value="Ready" detail="Revenue reports" />
        <KpiCard label="Operations" value="Ready" detail="Team reports" />
        <KpiCard label="Exports" value="Planned" detail="PDF and CSV" />
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <p className="kicker">Reports Catalog</p>
        <div style={{ display: 'grid', gap: 10, marginTop: 12 }}>
          {reportCatalog.map((report) => (
            <article key={report.key} style={{ padding: 14, border: '1px solid var(--jarvixx-border)', borderRadius: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <div>
                  <strong>{report.title}</strong>
                  <p style={{ color: 'var(--jarvixx-muted)', margin: '6px 0 0' }}>{report.description}</p>
                </div>
                <StatusBadge>{report.group}</StatusBadge>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
