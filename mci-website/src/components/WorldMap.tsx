import { exportMarkets, ORIGIN, regionCounts } from '../data/exportMarkets';

function toSVG(px: number, py: number) {
  return { x: (px / 100) * 900, y: (py / 100) * 500 };
}

export default function WorldMap() {
  const origin = toSVG(ORIGIN.x, ORIGIN.y);

  return (
    <div className="relative bg-[#0D1117] rounded-2xl border border-white/5 overflow-hidden">
      {/* Origin badge */}
      <div className="absolute top-4 left-4 z-10 bg-[#111318] border border-white/5 rounded-xl p-3">
        <p className="text-[10px] text-green-400 font-medium tracking-wider uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Origin · Toronto
        </p>
        <p className="text-white font-bold text-base mt-0.5">43.6°N, 79.7°W</p>
      </div>
      {/* Active lanes badge */}
      <div className="absolute top-24 left-4 z-10 bg-[#111318] border border-white/5 rounded-xl p-3">
        <p className="text-[10px] text-[#8A8FA8] font-medium tracking-wider uppercase flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D] animate-pulse" />
          Active Lanes
        </p>
        <p className="text-white font-bold text-2xl mt-0.5">20+</p>
      </div>

      {/* SVG Map */}
      <svg viewBox="0 0 900 500" className="w-full" style={{ background: 'transparent' }}>
        {/* Simplified world outline paths */}
        <g fill="#1a2030" stroke="#2a3347" strokeWidth="0.5">
          {/* North America */}
          <path d="M 30 60 L 60 50 L 100 55 L 130 70 L 180 80 L 200 100 L 210 140 L 190 160 L 170 180 L 140 190 L 120 210 L 100 240 L 80 250 L 50 240 L 30 210 L 20 180 L 15 150 L 20 110 Z" />
          {/* Greenland */}
          <path d="M 160 20 L 200 15 L 220 30 L 210 55 L 180 60 L 155 45 Z" />
          {/* South America */}
          <path d="M 150 270 L 180 260 L 220 270 L 240 300 L 250 350 L 240 400 L 210 430 L 180 440 L 160 420 L 140 380 L 130 340 L 130 300 Z" />
          {/* Europe */}
          <path d="M 380 60 L 430 55 L 470 60 L 490 80 L 480 100 L 450 110 L 420 105 L 390 95 L 370 80 Z" />
          {/* Africa */}
          <path d="M 400 180 L 450 170 L 490 180 L 520 220 L 530 280 L 520 340 L 490 380 L 460 400 L 430 390 L 400 360 L 380 310 L 375 260 L 385 210 Z" />
          {/* Russia/Asia north */}
          <path d="M 480 30 L 600 20 L 720 30 L 800 50 L 820 80 L 780 100 L 700 90 L 620 85 L 540 90 L 490 80 L 470 60 Z" />
          {/* Middle East */}
          <path d="M 490 130 L 540 120 L 580 130 L 600 160 L 580 180 L 540 185 L 500 175 L 480 155 Z" />
          {/* South Asia */}
          <path d="M 600 160 L 660 150 L 700 165 L 710 200 L 690 230 L 650 240 L 620 225 L 600 195 Z" />
          {/* Southeast Asia */}
          <path d="M 710 180 L 760 170 L 800 185 L 810 210 L 790 230 L 750 235 L 715 220 Z" />
          {/* Australia */}
          <path d="M 700 350 L 760 340 L 820 355 L 850 390 L 840 430 L 800 450 L 740 445 L 700 420 L 685 385 Z" />
        </g>

        {/* Trade route lines */}
        {exportMarkets.map((market, i) => {
          const dest = toSVG(market.x, market.y);
          const cx = (origin.x + dest.x) / 2;
          const cy = Math.min(origin.y, dest.y) - 60;
          return (
            <path
              key={i}
              d={`M ${origin.x} ${origin.y} Q ${cx} ${cy} ${dest.x} ${dest.y}`}
              fill="none"
              stroke="#EE353D"
              strokeWidth="0.8"
              opacity="0.5"
            />
          );
        })}

        {/* Destination dots */}
        {exportMarkets.map((market, i) => {
          const dest = toSVG(market.x, market.y);
          return (
            <circle key={i} cx={dest.x} cy={dest.y} r="3" fill="white" opacity="0.9" />
          );
        })}

        {/* Origin dot */}
        <circle cx={origin.x} cy={origin.y} r="5" fill="#EE353D" />
        <circle cx={origin.x} cy={origin.y} r="10" fill="#EE353D" opacity="0.15" />
      </svg>

      {/* Region counts */}
      <div className="absolute bottom-4 right-4 flex flex-wrap gap-2 justify-end">
        {Object.entries(regionCounts).map(([region, count]) => (
          <div key={region} className="bg-[#111318]/90 border border-white/5 rounded-full px-3 py-1 flex items-center gap-1.5">
            <span className="text-[#EE353D] text-xs font-bold">{String(count).padStart(2, '0')}</span>
            <span className="text-[#F4F7FB] text-xs font-medium">{region}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
