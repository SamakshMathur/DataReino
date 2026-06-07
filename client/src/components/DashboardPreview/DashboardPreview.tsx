import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Step {
  num: string;
  title: string;
  body: string;
  duration: string;
}

const process: Step[] = [
  {
    num: '01',
    title: 'Discovery',
    body: 'We learn your business, your data sources, and the decisions you need to make. We define scope, KPIs, and success criteria together.',
    duration: 'Week 1',
  },
  {
    num: '02',
    title: 'Data Audit & Engineering',
    body: 'We assess data quality, build or clean your pipelines, and establish a reliable foundation before any analysis or visualisation begins.',
    duration: 'Weeks 1–2',
  },
  {
    num: '03',
    title: 'Analysis & Visualisation',
    body: 'We run the analytics, build your dashboards, and iterate with your team until the outputs answer the right questions in the right format.',
    duration: 'Weeks 2–4',
  },
  {
    num: '04',
    title: 'Handover & Support',
    body: 'We document everything, train your team, and stay on as an ongoing partner for maintenance, updates, and new analytical needs.',
    duration: 'Ongoing',
  },
];

const deliverableExamples = [
  { label: 'Sales performance dashboard',    tool: 'Power BI',   type: 'Visualization' },
  { label: 'Monthly revenue analysis report', tool: 'Excel',      type: 'Analytics' },
  { label: 'Customer churn model',            tool: 'Python/SQL', type: 'Analytics' },
  { label: 'Executive KPI scorecard',         tool: 'Tableau',    type: 'BI' },
  { label: 'Data quality audit report',       tool: 'dbt',        type: 'Maintenance' },
  { label: 'Marketing attribution model',     tool: 'BigQuery',   type: 'Engineering' },
];

const BADGE = { bg: 'rgba(255,255,255,0.05)', color: '#4e6878' };

export default function DashboardPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const tableRef = useRef<HTMLDivElement>(null);
  const tableInView = useInView(tableRef, { once: true, margin: '-60px' });

  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref} className="grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-16 mb-12 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="font-body text-[11px] font-mono text-teal-400 uppercase tracking-[0.18em] mb-4"
            >
              How We Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[38px] lg:text-[48px] font-bold text-white leading-[1.05] tracking-tight"
            >
              A clear process.<br />Measurable results.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18 }}
            className="font-body text-[#4e6878] text-[16px] leading-[1.7] lg:pb-1"
          >
            Every engagement follows a structured process so you always know what is happening,
            what comes next, and what you will receive at the end.
          </motion.p>
        </div>

        {/* Process steps */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px border border-white/[0.055] overflow-hidden mb-12"
          style={{ backgroundColor: 'rgba(255,255,255,0.055)' }}
        >
          {process.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col p-5"
              style={{ backgroundColor: '#08101a' }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] text-[#253040]">{step.num}</span>
                <span
                  className="font-body text-[10px] px-2 py-0.5"
                  style={{ backgroundColor: 'rgba(45,212,191,0.08)', color: '#2dd4bf' }}
                >
                  {step.duration}
                </span>
              </div>
              <p className="font-display text-[14px] font-bold text-white mb-2">{step.title}</p>
              <p className="font-body text-[12px] text-[#4e6878] leading-[1.6]">{step.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sample deliverables table */}
        <div ref={tableRef}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={tableInView ? { opacity: 1 } : {}}
            className="font-body text-[11px] font-mono text-[#253040] uppercase tracking-widest mb-4"
          >
            Sample deliverables
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="border overflow-hidden"
            style={{ backgroundColor: '#08101a', borderColor: 'rgba(255,255,255,0.07)' }}
          >
            {/* Col headers */}
            <div
              className="grid px-5 py-2 border-b"
              style={{
                gridTemplateColumns: '1fr 100px 90px',
                borderColor: 'rgba(255,255,255,0.04)',
                backgroundColor: '#060c14',
              }}
            >
              {['Deliverable', 'Tool used', 'Service type'].map((h, i) => (
                <span
                  key={h}
                  className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#253040]"
                  style={{ textAlign: i === 0 ? 'left' : 'right' }}
                >
                  {h}
                </span>
              ))}
            </div>

            {deliverableExamples.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, x: -6 }}
                animate={tableInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.05 }}
                whileHover={{ backgroundColor: 'rgba(45,212,191,0.02)' }}
                className="grid px-5 py-3 border-b items-center transition-colors cursor-default"
                style={{
                  gridTemplateColumns: '1fr 100px 90px',
                  borderColor: 'rgba(255,255,255,0.035)',
                }}
              >
                <span className="font-body text-[13px] text-[#a0b8c8]">{row.label}</span>
                <span className="font-mono text-[11px] text-[#4e6878] text-right">{row.tool}</span>
                <div className="flex justify-end">
                  <span
                    className="font-body text-[10px] px-2 py-0.5"
                    style={{ backgroundColor: BADGE.bg, color: BADGE.color }}
                  >
                    {row.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={tableInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-body flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-medium px-5 py-2.5 transition-colors duration-150"
          >
            Start a conversation <ArrowRight size={14} />
          </motion.a>
          <p className="font-body text-[12px] text-[#253040]">No obligation · Free initial consultation</p>
        </motion.div>
      </div>
    </section>
  );
}
