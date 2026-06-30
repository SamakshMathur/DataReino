const pipelines = [
  { tag: 'SF',  name: 'Salesforce → Warehouse', meta: 'synced 1m ago' },
  { tag: 'STR', name: 'Stripe → Warehouse',     meta: 'synced 2m ago' },
  { tag: 'GA4', name: 'Analytics → Warehouse',  meta: 'synced 4m ago' },
  { tag: 'dbt', name: 'Transform models',        meta: '142 passing' },
];

export default function Platform() {
  return (
    <section id="platform" style={{ maxWidth: 1280, margin: '0 auto', padding: '84px 40px' }}>
      <div style={{ textAlign: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: '0.12em', color: '#0f766e', textTransform: 'uppercase', marginBottom: 14 }}>Platform</div>
      <h2 style={{ textAlign: 'center', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 60px', lineHeight: 1.05 }}>Everything your data team needs.</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
        {/* Feature 1: Visualization */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <span style={{ display: 'inline-block', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.08em', color: '#0d9488', textTransform: 'uppercase', marginBottom: 14 }}>Visualization</span>
            <h3 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 14px', lineHeight: 1.1 }}>Dashboards your whole team opens.</h3>
            <p style={{ color: '#4a5169', fontSize: 17, lineHeight: 1.65, margin: '0 0 20px' }}>We design and build Power BI, Tableau &amp; Looker dashboards tailored to the decisions your team actually needs to make — not generic charts nobody reads.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 22 }}>
              {['Custom Power BI, Tableau & Looker dashboards','Executive-level summaries & self-serve analytics','Refreshed in real time, mobile-ready'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 11, fontSize: 15, fontWeight: 600, color: '#1f2540' }}>
                  <span style={{ color: '#0d9488', fontWeight: 800 }}>✓</span>{t}
                </div>
              ))}
            </div>
            <blockquote style={{ borderLeft: '3px solid #0d9488', padding: '4px 0 4px 16px', color: '#374151', fontSize: 15, fontStyle: 'italic', lineHeight: 1.55, margin: 0 }}>
              "We went from exporting CSVs every Monday to having everything live in one place."
              <span style={{ display: 'block', fontStyle: 'normal', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#9aa0b3', marginTop: 6 }}>— Head of Ops, Northwind</span>
            </blockquote>
          </div>

          {/* Donut chart card */}
          <div style={{ background: '#fff', border: '1px solid rgba(12,16,36,0.08)', borderRadius: 20, padding: 28, boxShadow: '0 20px 50px -30px rgba(0,0,0,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#1f2540' }}>Revenue breakdown</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#9aa0b3' }}>Q4</span>
            </div>
            <div style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
              <div style={{ width: 104, height: 104, borderRadius: '50%', background: 'conic-gradient(#0d9488 0 62%, #0891b2 62% 84%, #fb7141 84% 100%)', position: 'relative', flexShrink: 0 }}>
                <span style={{ position: 'absolute', inset: 18, background: '#fff', borderRadius: '50%', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 18 }}>62%</span>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[['Direct','62%','#0d9488'],['Partner','22%','#0891b2'],['Organic','16%','#fb7141']].map(([label,pct,color]) => (
                  <div key={label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600, marginBottom: 5 }}>
                      <span>{label}</span><span style={{ color: '#9aa0b3' }}>{pct}</span>
                    </div>
                    <div style={{ height: 7, borderRadius: 4, background: '#eef0f6' }}>
                      <div style={{ height: '100%', width: pct, borderRadius: 4, background: color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Engineering */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          {/* Pipeline card */}
          <div style={{ background: '#0b1220', borderRadius: 20, boxShadow: '0 30px 60px -36px rgba(11,18,32,0.5)', padding: 24, color: '#eef0f7' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
              <span style={{ fontWeight: 800, fontSize: 15, color: '#fff' }}>Pipeline status</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#22c55e', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'drPulse 1.8s infinite' }} />
                all systems go
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {pipelines.map(p => (
                <div key={p.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 11, padding: '12px 14px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 600, color: '#fff' }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#5eead4', width: 34 }}>{p.tag}</span>
                    {p.name}
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#9aa0b3' }}>{p.meta}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span style={{ display: 'inline-block', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.08em', color: '#fb7141', textTransform: 'uppercase', marginBottom: 14 }}>Engineering</span>
            <h3 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', margin: '0 0 14px', lineHeight: 1.1 }}>Pipelines that never sleep.</h3>
            <p style={{ color: '#4a5169', fontSize: 17, lineHeight: 1.65, margin: '0 0 20px' }}>We build and maintain the plumbing — clean, monitored data flowing from every source into one warehouse, with alerts before anything breaks.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginBottom: 22 }}>
              {['Snowflake, BigQuery & dbt expertise','Proactive monitoring & fast fixes','Dependable uptime you can plan around'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 11, fontSize: 15, fontWeight: 600, color: '#1f2540' }}>
                  <span style={{ color: '#0d9488', fontWeight: 800 }}>✓</span>{t}
                </div>
              ))}
            </div>
            <blockquote style={{ borderLeft: '3px solid #0d9488', padding: '4px 0 4px 16px', color: '#374151', fontSize: 15, fontStyle: 'italic', lineHeight: 1.55, margin: 0 }}>
              "Tasks that used to take days now take a few hours. There's a clear before and after."
              <span style={{ display: 'block', fontStyle: 'normal', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#9aa0b3', marginTop: 6 }}>— Strategic Finance, Vexar</span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
