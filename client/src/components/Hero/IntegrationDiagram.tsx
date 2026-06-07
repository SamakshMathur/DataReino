import { motion } from 'framer-motion';

interface Platform {
  name: string;
  abbr: string;
  color: string;
  bg: string;
  side: 'source' | 'dest';
  records: string;
}

const platforms: Platform[] = [
  { name: 'Stripe', abbr: 'S', color: '#818cf8', bg: '#635BFF', side: 'source', records: '4,182' },
  { name: 'HubSpot', abbr: 'H', color: '#fb923c', bg: '#FF7A59', side: 'source', records: '6,340' },
  { name: 'Salesforce', abbr: 'SF', color: '#38bdf8', bg: '#00A1E0', side: 'source', records: '2,325' },
  { name: 'Slack', abbr: 'SL', color: '#c084fc', bg: '#4A154B', side: 'dest', records: 'alerts' },
  { name: 'Gmail', abbr: 'G', color: '#f87171', bg: '#EA4335', side: 'dest', records: 'reports' },
  { name: 'Notion', abbr: 'N', color: '#e2e8f0', bg: '#333', side: 'dest', records: 'docs' },
];

const sources = platforms.filter((p) => p.side === 'source');
const dests = platforms.filter((p) => p.side === 'dest');

function PlatformRow({
  p,
  side,
  delay,
}: {
  p: Platform;
  side: 'source' | 'dest';
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'source' ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3"
    >
      {side === 'dest' && (
        <div className="flex-1 h-px bg-gradient-to-l from-indigo-500/30 to-transparent" />
      )}
      <div
        className="flex items-center gap-2.5 px-3 py-2 rounded-md border flex-shrink-0"
        style={{
          backgroundColor: p.bg + '14',
          borderColor: p.bg + '2a',
        }}
      >
        <span
          className="w-5 h-5 rounded text-[10px] font-bold flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: p.bg + '30', color: p.color }}
        >
          {p.abbr}
        </span>
        <span className="text-[13px] text-[#c8c8d8] font-medium">{p.name}</span>
        <span className="text-[10px] text-[#44444f] ml-1">{p.records}</span>
      </div>
      {side === 'source' && (
        <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
      )}
    </motion.div>
  );
}

export default function IntegrationDiagram() {
  return (
    <div className="relative w-full">
      <div
        className="rounded-xl border overflow-hidden"
        style={{ backgroundColor: '#0d0d1a', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        {/* Header bar */}
        <div
          className="px-5 py-3.5 flex items-center justify-between border-b"
          style={{ borderColor: 'rgba(255,255,255,0.055)' }}
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
            <span className="text-[12px] text-[#7c7c8e] font-medium">Live Connections</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#44444f]">12,847 records synced</span>
            <span
              className="text-[11px] font-mono px-2 py-0.5 rounded"
              style={{ backgroundColor: 'rgba(52,211,153,0.08)', color: '#34d399' }}
            >
              &lt;500ms
            </span>
          </div>
        </div>

        {/* Diagram body */}
        <div className="p-6 grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
          {/* Sources */}
          <div className="flex flex-col gap-3">
            {sources.map((p, i) => (
              <PlatformRow key={p.name} p={p} side="source" delay={0.5 + i * 0.1} />
            ))}
          </div>

          {/* Hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.55, type: 'spring', stiffness: 200 }}
            className="flex flex-col items-center gap-2 px-2"
          >
            <div
              className="w-14 h-14 rounded-xl flex flex-col items-center justify-center border"
              style={{
                background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
                borderColor: 'rgba(99,102,241,0.4)',
                boxShadow: '0 0 24px rgba(99,102,241,0.25)',
              }}
            >
              <span className="text-white font-bold text-sm">DR</span>
            </div>
            <span className="text-[10px] text-[#44444f] font-mono">hub</span>
          </motion.div>

          {/* Destinations */}
          <div className="flex flex-col gap-3">
            {dests.map((p, i) => (
              <PlatformRow key={p.name} p={p} side="dest" delay={0.5 + i * 0.1} />
            ))}
          </div>
        </div>

        {/* Footer metrics */}
        <div
          className="px-5 py-3.5 border-t grid grid-cols-3 gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.055)', backgroundColor: '#0a0a16' }}
        >
          {[
            { label: 'Integrations', value: '50+' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Avg latency', value: '487ms' },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-white font-semibold text-[15px]">{m.value}</p>
              <p className="text-[#44444f] text-[10px] mt-0.5">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
