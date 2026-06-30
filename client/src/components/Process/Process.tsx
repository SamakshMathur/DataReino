import { useState } from 'react';

const steps = [
  { n: '01', label: 'Discover',   title: 'We map your data and your decisions.',        desc: 'A fast, structured audit of every data source, tool, and the calls your team actually needs to make.',            bullets: ['Audit of every data source','Decision & metric mapping','A prioritized quick-win roadmap'] },
  { n: '02', label: 'Architect',  title: 'We design a foundation built for trust.',     desc: 'A warehouse and metrics layer where every number has one definition everyone agrees on.',                          bullets: ['Warehouse & schema design','A single metrics definition layer','Governance & access model'] },
  { n: '03', label: 'Build',      title: 'We engineer clean, monitored pipelines.',     desc: 'Data flows automatically from every source into one source of truth — with alerts before anything breaks.',        bullets: ['150+ no-code connectors','Automated transformations (dbt)','Proactive monitoring & alerts'] },
  { n: '04', label: 'Visualize',  title: 'We build dashboards your team opens.',        desc: 'Tailored to the decisions you make — self-serve, mobile-ready, and refreshed in real time.',                      bullets: ['Power BI, Tableau & Looker','Self-serve & mobile-ready','Refreshed in real time'] },
  { n: '05', label: 'Optimize',   title: 'We refine the system as you grow.',           desc: 'An ongoing partnership — new metrics on demand, dependable maintenance, and quarterly strategy reviews.',           bullets: ['Ongoing maintenance & SLAs','New metrics on demand','Quarterly strategy reviews'] },
];

export default function Process() {
  const [step, setStep] = useState(0);
  const active = steps[step];

  return (
    <section id="process" style={{ background: '#0b1220', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -140, right: -100, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle,rgba(13,148,136,0.38) 0%,transparent 70%)' }} />
      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '84px 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: '0.12em', color: '#5eead4', textTransform: 'uppercase', marginBottom: 14 }}>How it works</div>
          <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0, color: '#fff', lineHeight: 1.05 }}>From messy data to confident decisions.</h2>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
          {steps.map((s, i) => (
            <button key={s.n} onClick={() => setStep(i)} style={{ display: 'flex', alignItems: 'center', gap: 10, background: i === step ? '#0d9488' : 'rgba(255,255,255,0.04)', border: `1px solid ${i === step ? '#0d9488' : 'rgba(255,255,255,0.12)'}`, cursor: 'pointer', borderRadius: 999, padding: '10px 18px', transition: 'background 0.2s, border-color 0.2s', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: i === step ? 'rgba(255,255,255,0.7)' : '#5eead4' }}>{s.n}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: i === step ? '#fff' : '#c4c9d8' }}>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 22, padding: 44, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#5eead4', marginBottom: 14 }}>{active.n} / {active.label}</div>
            <h3 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 14px', lineHeight: 1.1 }}>{active.title}</h3>
            <p style={{ color: '#aeb6c6', fontSize: 17, lineHeight: 1.65, margin: 0 }}>{active.desc}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {active.bullets.map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 13, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 13, padding: '16px 18px' }}>
                <span style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(13,148,136,0.28)', color: '#5eead4', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 13, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: '#e6eaf2' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
