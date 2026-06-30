import { useEffect, useRef } from 'react';

const words = ['decisions.', 'clarity.', 'confidence.', 'foresight.'];

export default function Hero() {
  const rotateRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const el = rotateRef.current;
      if (!el) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      setTimeout(() => {
        i = (i + 1) % words.length;
        el.textContent = words[i];
        el.style.opacity = '1';
        el.style.transform = 'none';
      }, 300);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" style={{ position: 'relative', background: '#0a1018', color: '#e8edf4', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -160, right: -120, width: 760, height: 760, borderRadius: '50%', background: 'radial-gradient(circle,rgba(13,148,136,0.26) 0%,transparent 64%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -200, left: -140, width: 620, height: 620, borderRadius: '50%', background: 'radial-gradient(circle,rgba(8,145,178,0.20) 0%,transparent 66%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '40px 40px 88px' }}>
        {/* Two panels */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.12fr 0.95fr', gap: 18, marginBottom: 8 }}>

          {/* Panel 1: Map Metrics */}
          <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: '18px 20px 0', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#cbd4e1' }}>Map Metrics &amp; Relationships</span>
              <span style={{ color: '#5b687d', fontSize: 18, letterSpacing: 2 }}>···</span>
            </div>
            <div style={{ position: 'relative', height: 330 }}>
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <polyline points="45,27 51,27 51,34 55,34" fill="none" stroke="#fb7141" strokeWidth="1.4" vectorEffect="non-scaling-stroke" opacity="0.85" />
                <polyline points="47,70 57,70 57,46 55,46" fill="none" stroke="#fb7141" strokeWidth="1.4" vectorEffect="non-scaling-stroke" opacity="0.85" />
              </svg>
              {([['44%','25%'],['55%','34%'],['55%','46%']] as const).map(([l,t],i) => (
                <span key={i} style={{ position: 'absolute', left: l, top: t, width: 7, height: 7, borderRadius: '50%', background: '#fb7141', transform: 'translate(-50%,-50%)', boxShadow: '0 0 0 3px rgba(251,113,65,0.18)' }} />
              ))}
              {/* Stripe */}
              <div style={{ position: 'absolute', left: 0, top: 4, width: '46%', background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Stripe</span>
                  <span style={{ width: 20, height: 20, borderRadius: 6, background: '#635bff', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 800 }}>S</span>
                </div>
                {[['Subscriptions','amount, status, customer'],['Invoices','amount_paid, period'],['Customers','id, email']].map(([name,sub],i) => (
                  <div key={name} style={{ padding: '7px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', opacity: i===2 ? 0.5 : 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#e6eaf2' }}>{name}</div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#7c8aa0', marginTop: 1 }}>{sub}</div>
                  </div>
                ))}
              </div>
              {/* HubSpot */}
              <div style={{ position: 'absolute', left: '8%', bottom: 6, width: '44%', background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>HubSpot</span>
                  <span style={{ width: 20, height: 20, borderRadius: 6, background: '#ff7a59', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 800 }}>h</span>
                </div>
                {[['Companies','domain, name, owner'],['Deals','stage, amount, close_date']].map(([name,sub],i) => (
                  <div key={name} style={{ padding: '7px 12px', borderBottom: '1px solid rgba(255,255,255,0.05)', opacity: i===1 ? 0.5 : 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 600, color: '#e6eaf2' }}>{name}</div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: '#7c8aa0', marginTop: 1 }}>{sub}</div>
                  </div>
                ))}
              </div>
              {/* ARR */}
              <div style={{ position: 'absolute', right: 0, top: 20, width: '46%', background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.45)', borderRadius: 12, overflow: 'hidden', boxShadow: '0 18px 40px -22px rgba(13,148,136,0.6)' }}>
                <div style={{ padding: '9px 13px', borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.12em', color: '#5eead4' }}>ARR</span>
                </div>
                <div style={{ padding: '11px 13px 6px', fontSize: 13, fontWeight: 700, color: '#fff' }}>Acme</div>
                {[['$99/mo','$1,188'],['$249/mo','$2,988']].map(([mo,yr]) => (
                  <div key={mo} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4px 13px' }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#cbd4e1' }}>{mo}</span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: '#5eead4', background: 'rgba(13,148,136,0.18)', borderRadius: 5, padding: '1px 6px' }}>×12 →</span>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 600, color: '#fff' }}>{yr}</span>
                  </div>
                ))}
                <div style={{ padding: '3px 13px 8px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#6b7686', textDecoration: 'line-through' }}>$49/mo</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 13px', borderTop: '1px dashed rgba(255,255,255,0.12)' }}>
                  <span style={{ fontSize: 12, color: '#9aa6b8' }}>Total</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: '#5eead4' }}>$4,176/yr</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Alerts */}
          <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: '#cbd4e1' }}>Proactively Send Alerts</span>
              <span style={{ color: '#5b687d', fontSize: 18, letterSpacing: 2 }}>···</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px 14px', marginBottom: 10 }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: '0.12em', color: '#6b7686', textTransform: 'uppercase', marginBottom: 8 }}>Set alert</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span style={{ fontSize: 13, color: '#cbd4e1' }}>When <span style={{ color: '#fb7141', fontWeight: 600 }}>MRR</span> decreases by more than 5%</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: '#5eead4', whiteSpace: 'nowrap' }}>Set Alert</span>
              </div>
            </div>
            <div style={{ textAlign: 'center', color: '#3f4a5c', fontSize: 13, margin: '2px 0 10px' }}>⌄</div>
            {[
              { icon: '💬', label: 'SLACK', body: <><span style={{ color: '#7aa7ff', fontWeight: 600 }}>@NotificationBot</span> in <span style={{ color: '#7aa7ff' }}>revenue-alerts</span>: an 8% drop in SMB MRR has been detected</> },
              { icon: '✉', label: 'GMAIL', body: <>From: <span style={{ color: '#cbd4e1' }}>alerts@datareino.io</span> · Subject: <span style={{ color: '#fff', fontWeight: 600 }}>Alert: MRR Drop Detected</span></> },
            ].map(({ icon, label, body }) => (
              <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '13px 14px', marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 8 }}>
                  <span style={{ width: 22, height: 22, borderRadius: 6, background: '#fff', display: 'grid', placeItems: 'center', fontSize: 12 }}>{icon}</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: '0.1em', color: '#9aa6b8' }}>{label}</span>
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.5, color: '#dde3ec' }}>{body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Headline */}
        <div style={{ maxWidth: 840, paddingTop: 36 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#cbd4e1', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', padding: '7px 14px', borderRadius: 999, marginBottom: 26 }}>
            <span style={{ width: 7, height: 7, background: '#fb7141', borderRadius: '50%' }} />
            Data Analytics &amp; Intelligence
          </div>
          <h1 style={{ fontSize: 'clamp(44px,6vw,84px)', lineHeight: 1.0, fontWeight: 800, letterSpacing: '-0.035em', margin: '0 0 26px', color: '#fff' }}>
            Turn raw data into<br />
            <span ref={rotateRef} style={{ display: 'inline-block', background: 'rgba(13,148,136,0.18)', border: '1px dashed rgba(13,148,136,0.6)', borderRadius: 10, padding: '0 16px', color: '#5eead4', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>decisions</span>{' '}you can trust.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: '#aeb6c6', maxWidth: 520, margin: '0 0 32px' }}>
            DataReino is your end-to-end data team — analytics, visualization, engineering, and BI, delivered as a service. The clarity of an in-house team, without the headcount.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 28 }}>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#0d9488', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 16, padding: '15px 26px', borderRadius: 12, boxShadow: '0 16px 32px -14px #0d9488', transition: 'transform 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'none')}>
              Book a free consultation →
            </a>
            <a href="#platform" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 16, padding: '15px 24px', borderRadius: 12 }}>
              See how it works
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#9aa6b8', fontSize: 14, fontWeight: 500 }}>
            <div style={{ display: 'flex' }}>
              {['#a7f3d0','#bae6fd','#fde4d3'].map((bg,i) => (
                <span key={i} style={{ width: 30, height: 30, borderRadius: '50%', background: bg, border: '2px solid #0a1018', display: 'inline-block', marginLeft: i > 0 ? -8 : 0 }} />
              ))}
            </div>
            Trusted by data &amp; ops teams at 40+ companies
          </div>
        </div>
      </div>
    </section>
  );
}
