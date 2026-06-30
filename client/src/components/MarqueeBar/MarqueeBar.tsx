const items = ['Data Analytics', 'Visualization', 'Data Engineering', 'Business Intelligence', 'Pipeline Maintenance', 'Strategic Consulting'];

export default function MarqueeBar() {
  return (
    <section style={{ background: '#0b1220', overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'drMarquee 26s linear infinite' }}>
        {[0, 1].map(n => (
          <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 0, padding: '16px 0' }} aria-hidden={n === 1 ? true : undefined}>
            {items.map(m => (
              <span key={m} style={{ display: 'inline-flex', alignItems: 'center', gap: 28, padding: '0 28px', fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#cfd6e4', whiteSpace: 'nowrap' }}>
                {m}<span style={{ color: '#0d9488' }}>✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
