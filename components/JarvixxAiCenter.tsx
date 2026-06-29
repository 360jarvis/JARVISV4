import { aiCapabilityMap, sensitiveAiActions } from '../lib/ai';
import { KpiCard, StatusBadge } from './ui';

export default function JarvixxAiCenter() {
  return (
    <div style={{ display: 'grid', gap: 18 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 14 }}>
        <KpiCard label="AI Core" value="Ready" detail="Foundation layer" />
        <KpiCard label="Capabilities" value={String(aiCapabilityMap.length)} detail="Connected modules" />
        <KpiCard label="Approvals" value={String(sensitiveAiActions.length)} detail="Sensitive actions" />
        <KpiCard label="Channels" value="Multi" detail="App, portal, widget, voice" />
      </section>

      <section className="lux-card" style={{ padding: 22 }}>
        <p className="kicker">Jarvixx AI</p>
        <h2 style={{ margin: '8px 0' }}>Permission-aware operating assistant</h2>
        <p style={{ color: 'var(--jarvixx-muted)' }}>
          Jarvixx AI will answer questions, summarize records, suggest actions, and guide users through workflows while respecting tenant permissions and audit rules.
        </p>
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <p className="kicker">Capabilities</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
          {aiCapabilityMap.map((item) => <StatusBadge key={item}>{item}</StatusBadge>)}
        </div>
      </section>

      <section className="lux-card" style={{ padding: 18 }}>
        <p className="kicker">Approval Required</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
          {sensitiveAiActions.map((item) => <StatusBadge key={item}>{item}</StatusBadge>)}
        </div>
      </section>
    </div>
  );
}
