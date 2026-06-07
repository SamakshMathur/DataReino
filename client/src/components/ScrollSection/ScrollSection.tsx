import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const reasons = [
  { num: '01', title: 'End-to-end ownership',
    body: 'We handle the full data lifecycle — from raw ingestion and transformation to the final dashboard your leadership team reads every Monday morning.' },
  { num: '02', title: 'Domain expertise, not just tools',
    body: "Our analysts understand business context. We don't just build reports — we ask the right questions and ensure what we deliver actually drives decisions." },
  { num: '03', title: 'Faster time-to-insight',
    body: 'Most engagements produce working deliverables within two weeks. No six-month implementation cycles. You see value quickly and build from there.' },
  { num: '04', title: 'Ongoing partnership',
    body: 'We stay engaged. As your business evolves, your data infrastructure and dashboards evolve with it — supported by a dedicated team who knows your setup.' },
];

const stats = [
  { value: 50,  suffix: '+',   label: 'Clients served' },
  { value: 200, suffix: '+',   label: 'Dashboards delivered' },
  { value: 2,   suffix: ' wk', label: 'Average first delivery' },
  { value: 98,  suffix: '%',   label: 'Client retention rate' },
];

function Counter({ value, suffix, run }: { value: number; suffix: string; run: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!run) return;
    let current = 0;
    const duration = 1400;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setDisplay(value); clearInterval(timer); }
      else setDisplay(Math.floor(current));
    }, step);
    return () => clearInterval(timer);
  }, [run, value]);

  return <span>{display}{suffix}</span>;
}

function ReasonRow({ r, i }: { r: typeof reasons[0]; i: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const rowInView = useInView(rowRef, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 20 }}
      animate={rowInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ x: 4 }}
      className="grid lg:grid-cols-[80px_1fr_1.4fr] gap-6 lg:gap-12 py-5 border-b px-0 lg:px-2 cursor-default"
      style={{ borderColor: 'rgba(255,255,255,0.055)' }}
    >
      <span className="font-mono text-[11px] text-[#253040] pt-0.5">{r.num}</span>
      <p className="font-display text-[15px] font-bold text-white">{r.title}</p>
      <p className="font-body text-[14px] text-[#4e6878] leading-[1.65]">{r.body}</p>
    </motion.div>
  );
}

export default function ScrollSection() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: '-80px' });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });

  return (
    <section id="use-case" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div ref={headRef} className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 mb-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
              className="font-body text-[11px] font-mono text-teal-400 uppercase tracking-[0.18em] mb-4"
            >
              Why DataReino
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[38px] lg:text-[50px] font-bold text-white leading-[1.05] tracking-tight"
            >
              Data expertise,
              <br />
              <span className="font-light text-[#4e6878]">on demand.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="font-body text-[#4e6878] text-[17px] leading-[1.7] self-end lg:pb-2"
          >
            Most businesses have data. Few know how to use it effectively. DataReino closes
            that gap — bringing certified analysts, proven processes, and the right tools
            to help you compete on insight, not guesswork.
          </motion.p>
        </div>

        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.055)' }}>
          {reasons.map((r, i) => <ReasonRow key={r.num} r={r} i={i} />)}
        </div>

        <div
          ref={statsRef}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px border border-white/[0.055] overflow-hidden"
          style={{ backgroundColor: 'rgba(255,255,255,0.055)' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center py-6 px-4 text-center"
              style={{ backgroundColor: '#04080d' }}
            >
              <p className="font-display text-[36px] font-bold text-white tracking-tight leading-none mb-2">
                <Counter value={s.value} suffix={s.suffix} run={statsInView} />
              </p>
              <p className="font-body text-[12px] text-[#4e6878]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
