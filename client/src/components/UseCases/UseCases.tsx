const useCases = [
  { sector: 'Retail',     quote: 'Unified 9 fragmented sources into a single daily revenue view the whole leadership team trusts.', author: 'Head of Ops, Northwind',    metrics: [{ v: '9', l: 'sources unified' }, { v: '1', l: 'daily view' }, { v: '40%', l: 'faster' }] },
  { sector: 'SaaS',       quote: 'An early-warning churn model now surfaces at-risk accounts weeks before they would have left.',    author: 'VP Growth, Vexar',         metrics: [{ v: '22%', l: 'churn ↓' }, { v: '3 wks', l: 'earlier' }, { v: '3×', l: 'signal' }] },
  { sector: 'Operations', quote: 'Automated the manual reporting that used to eat an analyst every single Monday morning.',          author: 'COO, Lumio',               metrics: [{ v: '10h', l: 'saved / wk' }, { v: '0', l: 'manual reports' }, { v: '1', l: 'Monday back' }] },
];

export default function UseCases() {
  return (
    <section id="cases" style={{ maxWidth: 1280, margin: '0 auto', padding: '84px 40px 56px' }}>
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: '0.12em', color: '#0f766e', textTransform: 'uppercase', marginBottom: 14 }}>Use cases &amp; results</div>
        <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0, lineHeight: 1.05 }}>Real teams. Real pipelines. Measurable outcomes.</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
        {useCases.map(u => (
          <div key={u.sector} style={{ background: '#fff', border: '1px solid rgba(12,16,36,0.08)', borderRadius: 18, padding: 30, display: 'flex', flexDirection: 'column', transition: 'transform 0.25s, box-shadow 0.25s', cursor: 'default' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 24px 50px -28px rgba(15,40,40,0.28)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}>
            <span style={{ display: 'inline-block', alignSelf: 'flex-start', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.08em', color: '#0f766e', background: 'rgba(13,148,136,0.10)', padding: '5px 12px', borderRadius: 999, textTransform: 'uppercase' }}>{u.sector}</span>
            <p style={{ fontSize: 16, lineHeight: 1.55, color: '#1f2540', fontWeight: 500, margin: '18px 0 20px', flex: 1 }}>"{u.quote}"</p>
            <div style={{ display: 'flex', gap: 10, borderTop: '1px solid rgba(12,16,36,0.08)', paddingTop: 18 }}>
              {u.metrics.map(m => (
                <div key={m.l} style={{ flex: 1 }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: '#0f766e', letterSpacing: '-0.02em' }}>{m.v}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#9aa0b3', textTransform: 'uppercase', marginTop: 3, lineHeight: 1.3 }}>{m.l}</div>
                </div>
              ))}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#9aa0b3', marginTop: 16 }}>— {u.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
