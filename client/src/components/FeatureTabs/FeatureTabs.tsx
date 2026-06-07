import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { BarChart2, LineChart, Database, Settings, PieChart, BookOpen } from 'lucide-react';

interface Service {
  id: number; tag: string; label: string; icon: React.ReactNode;
  headline: string; description: string; deliverables: string[];
}

const services: Service[] = [
  { id: 1, tag: '01', label: 'Data Analytics',    icon: <BarChart2 size={15} />,
    headline: 'Uncover what your data is really saying.',
    description: 'We analyse your business data — descriptive, diagnostic, predictive, and prescriptive — to give you a clear picture of what happened, why it happened, and what to do next.',
    deliverables: ['Exploratory data analysis (EDA) reports', 'Predictive models and trend forecasting', 'KPI measurement frameworks'] },
  { id: 2, tag: '02', label: 'Data Visualization', icon: <LineChart size={15} />,
    headline: 'Dashboards your team will actually use.',
    description: "We design and build interactive dashboards in Power BI, Tableau, and Looker — tailored to your audience, whether that's the boardroom or the operations floor.",
    deliverables: ['Custom Power BI & Tableau dashboards', 'Executive-level summary reports', 'Drill-through and self-service BI views'] },
  { id: 3, tag: '03', label: 'Data Engineering',   icon: <Database size={15} />,
    headline: 'Reliable pipelines for reliable decisions.',
    description: 'We design and implement the data infrastructure your analytics depend on — ETL pipelines, warehouse architecture, and integration across your tool stack.',
    deliverables: ['ETL/ELT pipeline design and build', 'Cloud data warehouse setup (Snowflake, BigQuery)', 'API integrations and data ingestion'] },
  { id: 4, tag: '04', label: 'Data Maintenance',   icon: <Settings size={15} />,
    headline: 'Keep your data clean, consistent, and current.',
    description: 'Bad data leads to bad decisions. We run ongoing data quality programs — monitoring, cleansing, deduplication, and governance — so your reports always reflect ground truth.',
    deliverables: ['Automated data quality monitoring', 'Deduplication and standardisation', 'Data governance policies and documentation'] },
  { id: 5, tag: '05', label: 'Business Intelligence', icon: <PieChart size={15} />,
    headline: 'Turn metrics into a management advantage.',
    description: 'We build the BI layer that connects raw data to strategic decisions — KPI scorecards, operational reports, and self-service analytics your entire organisation can use.',
    deliverables: ['KPI scorecards and performance reporting', 'Operational and financial reports', 'Self-service analytics enablement'] },
  { id: 6, tag: '06', label: 'Data Consulting',    icon: <BookOpen size={15} />,
    headline: 'Expert guidance for your data journey.',
    description: "Not sure where to start — or how to scale? We provide strategic advisory, capability assessments, and hands-on training to help your team build a lasting data culture.",
    deliverables: ['Data strategy and roadmap design', 'Technology selection and stack advisory', 'Team training and capability workshops'] },
];

export default function FeatureTabs() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-16 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body text-[11px] font-mono text-teal-400 uppercase tracking-[0.18em] mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[38px] lg:text-[50px] font-bold text-white leading-[1.05] tracking-tight max-w-xl"
          >
            Our services.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="font-body text-[#4e6878] text-[16px] mt-3 max-w-lg"
          >
            From raw data to boardroom-ready insight — we handle every layer of the data lifecycle.
          </motion.p>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex gap-1 mb-10 border-b overflow-x-auto scrollbar-none"
          style={{ borderColor: 'rgba(255,255,255,0.055)' }}
        >
          {services.map((svc, i) => (
            <button
              key={svc.id} onClick={() => setActive(i)}
              className={`relative flex items-center gap-2 px-4 py-3 text-[13px] font-medium whitespace-nowrap transition-colors duration-150 flex-shrink-0 ${
                active === i ? 'text-white' : 'text-[#4e6878] hover:text-[#7a9aaa]'
              }`}
            >
              <span className={active === i ? 'text-teal-400' : 'text-[#253040]'}>{svc.icon}</span>
              <span className="font-mono text-[10px] text-[#253040]">{svc.tag}</span>
              {svc.label}
              {active === i && (
                <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal-500" />
              )}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16"
          >
            {/* Text */}
            <div className="py-2">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-teal-400">{current.icon}</span>
                <span className="font-mono text-[11px] text-[#253040] uppercase tracking-widest">{current.tag}</span>
              </div>
              <h3 className="font-display text-[28px] lg:text-[32px] font-bold text-white leading-[1.15] tracking-tight mb-4">{current.headline}</h3>
              <p className="font-body text-[#4e6878] text-[15px] leading-[1.7] mb-7">{current.description}</p>
              <p className="font-body text-[11px] font-semibold text-[#253040] uppercase tracking-widest mb-4">What you get</p>
              <ul className="space-y-3">
                {current.deliverables.map((d, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.35 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-500 mt-2.5 flex-shrink-0" />
                    <span className="font-body text-[14px] text-[#7a9aaa]">{d}</span>
                  </motion.li>
                ))}
              </ul>
              <a href="#contact" className="font-body inline-flex items-center gap-1.5 mt-8 text-[13px] text-teal-400 hover:text-teal-300 transition-colors">
                Talk to us about {current.label} →
              </a>
            </div>

            {/* Right panel */}
            <div className="border p-6 flex flex-col justify-between min-h-[260px]" style={{ backgroundColor: '#08101a', borderColor: 'rgba(255,255,255,0.055)' }}>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-teal-400">{current.icon}</span>
                    <span className="font-body text-[12px] text-[#4e6878]">{current.label}</span>
                  </div>
                  <span className="font-body text-[10px] px-2 py-0.5" style={{ backgroundColor: 'rgba(45,212,191,0.08)', color: '#2dd4bf' }}>
                    Service
                  </span>
                </div>
                <div className="space-y-3">
                  {current.deliverables.map((d, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.09, duration: 0.35 }}
                      className="flex items-center gap-3 px-3 py-2.5 border"
                      style={{ borderColor: 'rgba(255,255,255,0.055)', backgroundColor: '#04080d' }}
                    >
                      <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 text-[9px] font-bold" style={{ color: '#2dd4bf' }}>✓</span>
                      <span className="font-body text-[12px] text-[#7a9aaa]">{d}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-4 border-t flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.055)' }}>
                <span className="font-body text-[11px] text-[#253040]">Engagement from 2 weeks</span>
                <a href="#contact" className="font-body text-[11px] text-teal-400 hover:text-teal-300 transition-colors">Get a quote →</a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
