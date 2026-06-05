import { Link } from 'react-router-dom';
import { logo } from '../data/assets';

export default function Footer() {
  return (
    <footer className="relative mt-28 border-t border-white/10 bg-[#070910]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logo} alt="Marina Commodities Inc" className="h-9 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#8A8FA8]">
              One of Canada's leading exporters and trading houses of pulses and grains —
              licensed &amp; bonded with the Canadian Grain Commission for the Grain Dealer's Licence.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://linkedin.com/company/marina-commodities-inc" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#8A8FA8] transition-colors hover:border-white/30 hover:text-white">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://twitter.com/MarinaCommodit1" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#8A8FA8] transition-colors hover:border-white/30 hover:text-white">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-3">
              {[['/', 'Home'], ['/about', 'About'], ['/commodities', 'Commodities'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}><Link to={to} className="text-sm text-[#8A8FA8] transition-colors hover:text-white">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-3 text-sm text-[#8A8FA8]">
              <li>
                <span className="mb-1 block text-[10px] uppercase tracking-wider text-[#8A8FA8]/60">Canada</span>
                403–4080 Confederation Pkwy<br />Mississauga, ON L5B 0G1
              </li>
              <li>
                <span className="mb-1 block text-[10px] uppercase tracking-wider text-[#8A8FA8]/60">Australia</span>
                3 Clunies Ross Court<br />Eight Mile Plains, QLD
              </li>
              <li className="pt-1"><a href="mailto:info@marinacommodities.com" className="transition-colors hover:text-white">info@marinacommodities.com</a></li>
              <li><a href="tel:+19058280777" className="transition-colors hover:text-white">+1 905.828.0777</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-[#8A8FA8]">© {new Date().getFullYear()} Marina Commodities Inc. All Rights Reserved.</p>
          <p className="text-xs text-[#8A8FA8]/50">CGC Licensed &amp; Bonded · Grain Dealer's Licence</p>
        </div>
      </div>
    </footer>
  );
}
