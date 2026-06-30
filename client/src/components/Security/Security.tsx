const items = [
  { ic: '⚖', title: 'Full accountability',       desc: 'One partner owns your data lifecycle end to end — no hand-offs, no finger-pointing.' },
  { ic: '⌂', title: 'Your warehouse, your rules', desc: 'We work inside your Snowflake or BigQuery. Your data never leaves your control.' },
  { ic: '🔒', title: 'SOC 2-aligned practices',   desc: 'Encryption, least-privilege access, and audited workflows by default.' },
  { ic: '∅', title: 'We never train on your data', desc: 'Your data is used to serve you and answer your questions — nothing else, ever.' },
];

export default function Security() {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 40px 84px' }}>
      <div style={{ background: '#0b1220', borderRadius: 24, padding: '56px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: -120, left: -80, width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(circle,rgba(13,148,136,0.30) 0%,transparent 70%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ maxWidth: 560, marginBottom: 40 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: '0.12em', color: '#5eead4', textTransform: 'uppercase', marginBottom: 14 }}>Security &amp; trust</div>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0, color: '#fff', lineHeight: 1.08 }}>Your data. Your rules. Your control.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
            {items.map(s => (
              <div key={s.title}>
                <span style={{ display: 'grid', placeItems: 'center', width: 44, height: 44, borderRadius: 12, background: 'rgba(13,148,136,0.22)', color: '#5eead4', fontFamily: "'JetBrains Mono',monospace", fontSize: 18, marginBottom: 16 }}>{s.ic}</span>
                <h3 style={{ fontSize: 17, fontWeight: 800, color: '#fff', margin: '0 0 8px' }}>{s.title}</h3>
                <p style={{ color: '#9aa6b8', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
