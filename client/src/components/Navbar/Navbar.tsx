import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services',  href: '#services' },
  { label: 'Use Cases', href: '#use-case' },
  { label: 'About Us',  href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#04080d]/90 backdrop-blur-xl border-b border-white/[0.055]' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[60px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-teal-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-xs tracking-tight">DR</span>
          </div>
          <span className="font-display text-white font-bold text-[15px] tracking-tight">DataReino</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-body text-[13px] text-[#4e6878] hover:text-white transition-colors duration-150">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a href="#contact" className="font-body text-[13px] text-[#4e6878] hover:text-white px-4 py-1.5 transition-colors">
            Contact
          </a>
          <a
            href="#contact"
            className="font-body text-[13px] font-medium bg-teal-600 hover:bg-teal-500 text-white px-4 py-1.5 transition-colors duration-150"
          >
            Book Consultation
          </a>
        </div>

        <button className="md:hidden text-[#4e6878] hover:text-white" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#04080d] border-b border-white/[0.055] overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {navLinks.map(link => (
                <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="font-body text-sm text-[#4e6878]">
                  {link.label}
                </a>
              ))}
              <hr className="border-white/[0.055]" />
              <a href="#contact" className="font-body text-sm font-medium bg-teal-600 text-white px-4 py-2 text-center">
                Book Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
