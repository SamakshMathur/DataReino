const sources = [
  { t: 'SF',  n: 'Salesforce' }, { t: 'STR', n: 'Stripe' },
  { t: 'HS',  n: 'HubSpot' },   { t: 'NS',  n: 'NetSuite' },
  { t: 'GA4', n: 'Analytics' }, { t: 'PG',  n: 'Postgres' },
];
const outputs = ['Dashboards', 'Reports', 'Alerts', 'Forecasts'];
const certs = ['Power BI', 'Tableau', 'Looker', 'Snowflake', 'BigQuery', 'dbt', 'Excel', 'Sheets'];

export default function Integrations() {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '84px 40px', textAlign: 'center' }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: '0.12em', color: '#0f766e', textTransform: 'uppercase', marginBottom: 14 }}>Integrations</div>
      <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 14px', lineHeight: 1.05 }}>Plugs into your entire stack.</h2>
      <p style={{ color: '#4a5169', fontSize: 17, lineHeight: 1.6, maxWidth: 560, margin: '0 auto 48px' }}>
        We connect every system where your data lives, transform it into one source of truth, and pipe it into the tools your team already uses.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 36, alignItems: 'center', maxWidth: 1000, margin: '0 auto' }}>
        {/* Sources */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
          {sources.map(src => (
            <div key={src.n} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid rgba(12,16,36,0.08)', borderRadius: 12, padding: '12px 14px', textAlign: 'left' }}>
              <span style={{ width: 30, height: 30, borderRadius: 8, background: '#f0f3f4', color: '#475569', display: 'grid', placeItems: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 10, fontWeight: 500, flexShrink: 0 }}>{src.t}</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#1f2540' }}>{src.n}</span>
            </div>
          ))}
        </div>

        {/* Center engine */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#9aa0b3' }}>→</div>
          <div style={{ width: 96, height: 96, borderRadius: 24, background: 'linear-gradient(135deg,#0d9488,#0891b2)', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 24, boxShadow: '0 22px 44px -18px #0d9488' }}>DR</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#0c1024' }}>DataReino engine</div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#9aa0b3' }}>→</div>
        </div>

        {/* Outputs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12 }}>
          {outputs.map(o => (
            <div key={o} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid rgba(12,16,36,0.08)', borderRadius: 12, padding: '12px 14px', textAlign: 'left' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#0d9488', flexShrink: 0 }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: '#1f2540' }}>{o}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
        <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#9aa0b3', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: 6 }}>Certified in</span>
        {certs.map(c => (
          <span key={c} style={{ fontSize: 13, fontWeight: 700, color: '#374151', background: '#f0f3f4', borderRadius: 999, padding: '6px 14px' }}>{c}</span>
        ))}
      </div>
    </section>
  );
}
