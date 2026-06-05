import { exportMarkets } from '../data/exportMarkets';

export default function GlobeSVG() {
  const cx = 250, cy = 250, r = 220;

  // Project lat/lng to SVG (simplified orthographic)
  function project(latPct: number, lonPct: number) {
    const lat = (latPct / 100) * 180 - 90; // -90..90
    const lon = (lonPct / 100) * 360 - 180; // -180..180
    const tilt = 20 * (Math.PI / 180);
    const lambda = lon * (Math.PI / 180);
    const phi = lat * (Math.PI / 180);
    const x = r * Math.cos(phi) * Math.sin(lambda);
    const y = r * (Math.sin(phi) * Math.cos(tilt) - Math.cos(phi) * Math.cos(lambda) * Math.sin(tilt));
    return { x: cx + x, y: cy - y };
  }

  const originCoord = { latPct: 55, lonPct: 29 }; // ~Toronto
  const origin = project(originCoord.latPct, originCoord.lonPct);

  return (
    <svg viewBox="0 0 500 500" className="w-full h-full" aria-hidden="true">
      {/* Globe sphere */}
      <defs>
        <radialGradient id="globeGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#1a2235" />
          <stop offset="100%" stopColor="#0a0e18" />
        </radialGradient>
        <clipPath id="globe-clip">
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="url(#globeGrad)" />

      {/* Graticule lines */}
      <g stroke="#2a3347" strokeWidth="0.5" clipPath="url(#globe-clip)" opacity="0.6">
        {/* Latitude lines */}
        {[-60, -30, 0, 30, 60].map((lat) => {
          const pts = Array.from({ length: 73 }, (_, i) => {
            const p = project(((lat + 90) / 180) * 100, (i / 72) * 100);
            return `${p.x},${p.y}`;
          });
          return <polyline key={lat} points={pts.join(' ')} fill="none" />;
        })}
        {/* Longitude lines */}
        {[-120, -60, 0, 60, 120].map((lon) => {
          const pts = Array.from({ length: 37 }, (_, i) => {
            const p = project((i / 36) * 100, ((lon + 180) / 360) * 100);
            return `${p.x},${p.y}`;
          });
          return <polyline key={lon} points={pts.join(' ')} fill="none" />;
        })}
      </g>

      {/* Export destination dots */}
      <g clipPath="url(#globe-clip)">
        {exportMarkets.slice(0, 12).map((m, i) => {
          const pt = project((1 - m.y / 100) * 100, m.x / 100 * 100);
          return (
            <circle key={i} cx={pt.x} cy={pt.y} r="4" fill="#F97316" opacity="0.8" />
          );
        })}
        {/* Origin dot */}
        <circle cx={origin.x} cy={origin.y} r="6" fill="#EE353D" />
        <circle cx={origin.x} cy={origin.y} r="12" fill="#EE353D" opacity="0.2" />
      </g>

      {/* Rim glow */}
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#2a3550" strokeWidth="1" />
    </svg>
  );
}
