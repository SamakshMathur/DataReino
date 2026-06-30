const logos = ['NORTHWIND', 'Vexar', 'Lumio', 'Polaris', 'Greenfield', 'Acme Cap'];

export default function TrustBar() {
  return (
    <section style={{ borderTop: '1px solid rgba(12,16,36,0.06)', background: '#fcfcfe' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '28px 40px' }}>
        <div style={{ textAlign: 'center', fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: '0.12em', color: '#9aa0b3', textTransform: 'uppercase', marginBottom: 20 }}>
          Trusted by modern data &amp; operations teams
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', opacity: 0.6 }}>
          {logos.map(l => (
            <span key={l} style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-0.02em', color: '#0c1024' }}>{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
