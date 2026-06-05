import { tickerItems } from '../data/commodities';

export default function Marquee() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-[#0a0d14] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0d14] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0d14] to-transparent" />
      <div className="ticker-track gap-0">
        {items.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-3 pr-8">
            <span className="whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.15em] text-white/70">
              {item}
            </span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-[#EE353D]" />
          </span>
        ))}
      </div>
    </div>
  );
}
