const cols = [
  { head: 'Services',  items: ['Data Analytics', 'Visualization', 'Data Engineering', 'Business Intelligence'] },
  { head: 'Company',   items: ['About', 'Use Cases', 'Careers', 'Contact'] },
  { head: 'Resources', items: ['Blog', 'Guides', 'Case Studies', 'Support'] },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0b1220', color: '#c4c9d8' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 40px 28px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 18 }}>
              <span style={{ display: 'grid', placeItems: 'center', width: 36, height: 36, background: '#0d9488', color: '#fff', fontWeight: 800, fontSize: 14, borderRadius: 10 }}>DR</span>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 18 }}>DataReino</span>
            </div>
            <p style={{ color: '#8a90a6', fontSize: 15, lineHeight: 1.6, maxWidth: 300, margin: 0 }}>
              End-to-end data analytics, visualization, and engineering — delivered as a service.
            </p>
          </div>
          {cols.map(col => (
            <div key={col.head}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.08em', color: '#6b7280', textTransform: 'uppercase', marginBottom: 16 }}>{col.head}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                {col.items.map(it => (
                  <a key={it} href="#top" style={{ color: '#c4c9d8', textDecoration: 'none', fontSize: 15, transition: 'color 0.15s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#c4c9d8')}>
                    {it}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 24, flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#6b7280' }}>© 2026 DataReino. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy','Terms','Security'].map(l => (
              <a key={l} href="#top" style={{ color: '#8a90a6', textDecoration: 'none', fontSize: 13, transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#8a90a6')}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
