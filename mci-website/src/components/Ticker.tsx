import { tickerItems } from '../data/commodities';

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems]; // doubled for seamless loop

  return (
    <div className="overflow-hidden border-y border-white/5 py-4 bg-[#080A0F]">
      <div className="ticker-track gap-0">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-3 shrink-0 pr-8">
            <span className="text-xs font-semibold tracking-[0.15em] text-[#F4F7FB]/80 uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#EE353D] shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
