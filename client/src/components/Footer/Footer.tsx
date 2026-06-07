import { motion } from 'framer-motion';

const cols = [
  { heading: 'Services', links: ['Data Analytics', 'Data Visualization', 'Data Engineering', 'Business Intelligence'] },
  { heading: 'Company',  links: ['About Us', 'Our Process', 'Careers', 'Contact'] },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t px-6 pt-14 pb-10" style={{ borderColor: 'rgba(255,255,255,0.055)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Contact CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border p-8 lg:p-12 mb-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
          style={{ backgroundColor: '#08101a', borderColor: 'rgba(255,255,255,0.055)' }}
        >
          <div>
            <p className="font-body text-[11px] font-mono text-teal-400 uppercase tracking-[0.18em] mb-3">Get in touch</p>
            <h2 className="font-display text-[28px] lg:text-[36px] font-bold text-white leading-[1.1] tracking-tight">
              Ready to make your data<br />
              <span className="font-light text-[#4e6878]">work harder?</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="mailto:hello@datareino.com"
              className="font-body text-[13px] font-medium bg-teal-600 hover:bg-teal-500 text-white px-6 py-2.5 transition-colors duration-150 text-center"
            >
              Email us
            </a>
            <a
              href="#services"
              className="font-body text-[13px] text-[#4e6878] hover:text-white border border-white/[0.1] px-6 py-2.5 transition-colors duration-150 text-center"
            >
              View services
            </a>
          </div>
        </motion.div>

        {/* Footer links */}
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-teal-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs tracking-tight">DR</span>
              </div>
              <span className="font-display text-white font-bold text-[15px] tracking-tight">DataReino</span>
            </div>
            <p className="font-body text-[13px] text-[#4e6878] leading-[1.7] max-w-[260px]">
              End-to-end data analytics and intelligence services for businesses that run on insight.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <p className="font-display text-[11px] font-bold text-[#253040] uppercase tracking-wider mb-4">{col.heading}</p>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-body text-[13px] text-[#4e6878] hover:text-white transition-colors duration-150">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.04)' }}
        >
          <p className="font-body text-[12px] text-[#253040]">© 2026 DataReino. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy', 'Terms'].map((l) => (
              <a key={l} href="#" className="font-body text-[12px] text-[#253040] hover:text-[#4e6878] transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
