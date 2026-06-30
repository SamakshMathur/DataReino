import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 200, suffix: '+', label: 'dashboards delivered to leadership teams' },
  { value: 40,  suffix: '%', label: 'faster reporting on average' },
  { value: 15,  suffix: '+', label: 'industries served end to end' },
  { value: 98,  suffix: '%', label: 'client retention rate' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const dur = 1300;
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * e));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return <div ref={ref}>{display}{suffix}</div>;
}

export default function Stats() {
  return (
    <section style={{ maxWidth: 1280, margin: '0 auto', padding: '84px 40px 56px', textAlign: 'center' }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: '0.12em', color: '#0f766e', textTransform: 'uppercase', marginBottom: 14 }}>Real results</div>
      <h2 style={{ fontSize: 'clamp(32px,4vw,50px)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 48px', lineHeight: 1.05 }}>The numbers speak for themselves.</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
        {stats.map(s => (
          <div key={s.label} style={{ borderTop: '2px solid rgba(13,148,136,0.35)', paddingTop: 22, textAlign: 'left' }}>
            <div style={{ fontSize: 'clamp(36px,4vw,52px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0c1024', lineHeight: 1, marginBottom: 10 }}>
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div style={{ fontSize: 15, color: '#4a5169', lineHeight: 1.5 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
