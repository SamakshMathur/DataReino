import { motion } from 'framer-motion';

interface Tool {
  name: string;
  abbr: string;
  category: string;
  useCase: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
}

const tools: Tool[] = [
  { name: 'Power BI',      abbr: 'PBI', category: 'BI',          useCase: 'Dashboards & Reports',  level: 'Expert' },
  { name: 'Tableau',       abbr: 'TB',  category: 'BI',          useCase: 'Visual Analytics',      level: 'Expert' },
  { name: 'Excel',         abbr: 'XL',  category: 'Spreadsheet', useCase: 'Modelling & Reporting', level: 'Expert' },
  { name: 'Looker',        abbr: 'LK',  category: 'BI',          useCase: 'Self-service BI',       level: 'Advanced' },
  { name: 'Snowflake',     abbr: 'SF',  category: 'Warehouse',   useCase: 'Data Warehousing',      level: 'Advanced' },
  { name: 'BigQuery',      abbr: 'BQ',  category: 'Warehouse',   useCase: 'Cloud Analytics',       level: 'Advanced' },
  { name: 'Google Sheets', abbr: 'GS',  category: 'Spreadsheet', useCase: 'Collaborative Reports', level: 'Expert' },
  { name: 'dbt',           abbr: 'dbt', category: 'Transform',   useCase: 'Data Transformation',   level: 'Proficient' },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const rowVariants = {
  hidden: { opacity: 0, x: -12 },
  show:   (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: 0.5 + i * 0.07, duration: 0.4, ease: EASE },
  }),
};

const BADGE = { bg: 'rgba(255,255,255,0.05)', color: '#4e6878' };

export default function AnalyticsTools() {
  return (
    <div className="border overflow-hidden w-full" style={{ backgroundColor: '#08101a', borderColor: 'rgba(255,255,255,0.07)' }}>
      {/* Toolbar */}
      <div className="px-5 py-3 flex items-center justify-between border-b" style={{ borderColor: 'rgba(255,255,255,0.055)' }}>
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-teal-400"
          />
          <span className="font-body text-[12px] font-medium text-[#4e6878]">Tools &amp; Technologies We Work With</span>
        </div>
        <span className="font-mono text-[11px] text-[#253040]">8 tools</span>
      </div>

      {/* Column headers */}
      <div
        className="grid px-5 py-2 border-b"
        style={{ gridTemplateColumns: '1fr 90px 1fr 76px', borderColor: 'rgba(255,255,255,0.04)', backgroundColor: '#060c14' }}
      >
        {[
          { label: 'Tool',     align: 'left' },
          { label: 'Category', align: 'left' },
          { label: 'Use Case', align: 'left' },
          { label: 'Level',    align: 'right' },
        ].map(h => (
          <span key={h.label} className="font-body text-[10px] font-semibold uppercase tracking-wider text-[#253040]"
            style={{ textAlign: h.align as 'left' | 'right' }}>
            {h.label}
          </span>
        ))}
      </div>

      {/* Rows */}
      <div>
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            custom={i}
            variants={rowVariants}
            initial="hidden"
            animate="show"
            whileHover={{ backgroundColor: 'rgba(45,212,191,0.03)' }}
            className="grid px-5 py-2.5 border-b items-center transition-colors duration-100 group cursor-default"
            style={{ gridTemplateColumns: '1fr 90px 1fr 76px', borderColor: 'rgba(255,255,255,0.03)' }}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="font-mono text-[9px] font-bold w-6 flex-shrink-0 text-center text-[#4e6878]">{tool.abbr}</span>
              <span className="font-body text-[13px] text-[#a0b8c8] truncate group-hover:text-white transition-colors">{tool.name}</span>
            </div>
            <span className="font-body text-[11px] text-[#4e6878]">{tool.category}</span>
            <span className="font-body text-[11px] text-[#4e6878] truncate pr-2">{tool.useCase}</span>
            <div className="flex justify-end">
              <span className="font-body text-[10px] px-2 py-0.5" style={{ backgroundColor: BADGE.bg, color: BADGE.color }}>
                {tool.level}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-5 py-2.5 flex items-center gap-1.5" style={{ backgroundColor: '#060c14' }}>
        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
        <span className="font-body text-[10px] text-[#253040]">Proficiency level based on certified project experience</span>
      </div>
    </div>
  );
}
