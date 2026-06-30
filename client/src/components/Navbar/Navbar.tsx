export default function Navbar() {

  const navLinks = [
    { label: 'Services',     href: '#services' },
    { label: 'Platform',     href: '#platform' },
    { label: 'How it works', href: '#process' },
    { label: 'Use Cases',    href: '#cases' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 60,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '15px 40px',
      background: 'rgba(10,16,24,0.78)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none' }}>
        <span style={{ display: 'grid', placeItems: 'center', width: 36, height: 36, background: '#0d9488', color: '#fff', fontWeight: 800, fontSize: 15, borderRadius: 10, boxShadow: '0 6px 16px -6px #0d9488' }}>DR</span>
        <span style={{ color: '#fff', fontWeight: 800, fontSize: 19, letterSpacing: '-0.02em' }}>DataReino</span>
      </a>

      <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {navLinks.map(l => (
          <a key={l.label} href={l.href} style={{ color: '#9aa6b8', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#9aa6b8')}>
            {l.label}
          </a>
        ))}
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <a href="#contact" style={{ color: '#9aa6b8', textDecoration: 'none', fontSize: 15, fontWeight: 600 }}
          onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
          onMouseLeave={e => (e.currentTarget.style.color = '#9aa6b8')}>Contact</a>
        <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#0d9488', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 15, padding: '11px 20px', borderRadius: 10, boxShadow: '0 10px 24px -12px #0d9488', transition: 'transform 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-1px)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'none')}>
          Book a Consultation
        </a>
      </div>
    </header>
  );
}
