import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Commodities', to: '/commodities' },
  { label: 'Network', to: '/#network' },
  { label: 'How We Work', to: '/#how-we-work' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080A0F]/90 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-[#F4F7FB] font-bold text-lg tracking-tight leading-none">
              marina
              <span className="block text-[9px] font-medium tracking-[0.2em] text-[#8A8FA8] uppercase mt-0.5">
                commodities inc
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === l.to
                    ? 'text-[#F4F7FB]'
                    : 'text-[#F4F7FB]/60 hover:text-[#F4F7FB]'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-xs text-[#8A8FA8]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Desk open · 20+ markets
            </span>
            <Link
              to="/contact"
              className="bg-[#EE353D] hover:bg-[#D42E35] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              Talk to the Desk →
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#F4F7FB] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-white/5 space-y-3">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block text-[#F4F7FB]/70 hover:text-[#F4F7FB] text-sm font-medium py-2 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block bg-[#EE353D] hover:bg-[#D42E35] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors text-center mt-4"
            >
              Talk to the Desk →
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
