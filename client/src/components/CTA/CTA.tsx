export default function CTA() {
  return (
    <section id="contact" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 40px 96px' }}>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(120deg,#0d9488,#0891b2)', borderRadius: 28, padding: '80px 56px', textAlign: 'center', color: '#fff' }}>
        <div style={{ position: 'absolute', top: -100, right: -60, width: 380, height: 380, borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px', lineHeight: 1.05 }}>Ready to turn your data into decisions?</h2>
          <p style={{ fontSize: 18, lineHeight: 1.6, margin: '0 auto 32px', maxWidth: 520, color: 'rgba(255,255,255,0.92)' }}>
            Book a free 30-minute consultation. We'll map your data landscape and show you exactly what's possible.
          </p>
          <a href="#top" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#fff', color: '#0f766e', textDecoration: 'none', fontWeight: 800, fontSize: 17, padding: '17px 34px', borderRadius: 14, transition: 'transform 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'none')}>
            Book a Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
