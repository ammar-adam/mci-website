import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { logo } from '../data/assets';

const links = [
  { label: 'Commodities', to: '/commodities' },
  { label: 'Network', to: '/#network' },
  { label: 'How We Work', to: '/#how-we-work' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 sm:px-6 pt-3"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 sm:px-6 transition-all duration-300 ${
          scrolled
            ? 'h-14 border border-white/10 bg-[#0b0e15]/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
            : 'h-16 border border-white/5 bg-white/[0.02] backdrop-blur-md'
        }`}
      >
        <Link to="/" className="flex shrink-0 items-center">
          <img src={logo} alt="Marina Commodities Inc" className="h-7 w-auto sm:h-8" />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                pathname === l.to ? 'text-white' : 'text-white/55 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <span className="flex items-center gap-1.5 text-xs text-[#8A8FA8]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Desk open
          </span>
          <Link
            to="/contact"
            className="group relative overflow-hidden rounded-full bg-[#EE353D] px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <span className="relative z-10">Talk to the Desk →</span>
            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </div>

        <button
          className="p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-[#0b0e15]/95 p-5 backdrop-blur-xl md:hidden"
          >
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-base font-medium text-white/80 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-full bg-[#EE353D] py-3 text-center text-sm font-semibold text-white"
            >
              Talk to the Desk →
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
