import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import AnalyticsTools from './AnalyticsTools';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const wordVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-[60px] overflow-hidden">
      {/* Subtle radial glow behind the panel */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(45,212,191,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-center w-full py-14 lg:py-20">

        {/* ── Left: copy ── */}
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <motion.p
            variants={wordVariants}
            className="font-body text-[11px] font-mono text-teal-400 uppercase tracking-[0.18em] mb-7"
          >
            Data Analytics &amp; Intelligence Services
          </motion.p>

          <div className="overflow-hidden mb-1">
            <motion.h1
              variants={wordVariants}
              className="font-display text-[52px] lg:text-[68px] leading-[1.02] tracking-[-0.02em]"
            >
              <span className="font-bold text-white">We turn data</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.div variants={wordVariants}>
              <span className="font-display text-[52px] lg:text-[68px] leading-[1.02] tracking-[-0.02em] font-light text-[#4e6878]">
                into decisions.
              </span>
            </motion.div>
          </div>

          <motion.p
            variants={wordVariants}
            className="font-body text-[#4e6878] text-[17px] leading-[1.65] max-w-[440px] mb-9"
          >
            DataReino delivers end-to-end data analytics, visualization, and maintenance
            services — so your team always has the clarity to move forward with confidence.
          </motion.p>

          <motion.div variants={wordVariants} className="flex items-center gap-5">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="font-body bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium px-5 py-2.5 transition-colors duration-150 flex items-center gap-2"
            >
              Book a Consultation <ArrowRight size={13} />
            </motion.a>
            <a
              href="#services"
              className="font-body text-sm text-[#4e6878] hover:text-white flex items-center gap-1.5 transition-colors duration-150 group"
            >
              Explore services
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            variants={wordVariants}
            className="mt-9 pt-8 border-t border-white/[0.055] flex items-center gap-4 flex-wrap"
          >
            {[
              { label: '50+ clients served' },
              { label: '5+ years experience' },
              { label: 'Certified analysts' },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#253040] text-xs">·</span>}
                <span className="font-body text-xs text-[#4e6878]">{item.label}</span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: floating tools table ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
          style={{ y: panelY }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <AnalyticsTools />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
