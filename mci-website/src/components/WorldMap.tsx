import { useMemo } from 'react';
import { geoEqualEarth, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import { motion } from 'framer-motion';
import type { FeatureCollection, Geometry } from 'geojson';
import topo from '../data/countries-110m.json';

const WIDTH = 980;
const HEIGHT = 500;

const ORIGIN: [number, number] = [-79.38, 43.65]; // Toronto

interface Dest {
  name: string;
  coords: [number, number];
}

const DESTINATIONS: Dest[] = [
  { name: 'United Kingdom', coords: [-0.13, 51.5] },
  { name: 'Germany', coords: [10.0, 53.5] },
  { name: 'Turkey', coords: [28.98, 41.0] },
  { name: 'Russia', coords: [37.6, 55.75] },
  { name: 'India', coords: [72.87, 19.07] },
  { name: 'UAE', coords: [55.27, 25.2] },
  { name: 'Bangladesh', coords: [90.4, 23.8] },
  { name: 'Sudan', coords: [32.53, 15.5] },
  { name: 'Ethiopia', coords: [38.74, 9.03] },
  { name: 'Tanzania', coords: [39.28, -6.82] },
  { name: 'Mozambique', coords: [32.58, -25.96] },
  { name: 'Mexico', coords: [-99.13, 19.43] },
  { name: 'Brazil', coords: [-46.63, -23.55] },
  { name: 'Argentina', coords: [-58.38, -34.6] },
  { name: 'Australia', coords: [153.02, -27.47] },
];

export default function WorldMap() {
  const { countries, path, projection } = useMemo(() => {
    const fc = feature(
      topo as unknown as Parameters<typeof feature>[0],
      (topo as unknown as { objects: { countries: unknown } }).objects.countries as never
    ) as unknown as FeatureCollection<Geometry>;

    const projection = geoEqualEarth().fitExtent(
      [[10, 10], [WIDTH - 10, HEIGHT - 10]],
      fc as never
    );
    const path = geoPath(projection);
    return { countries: fc.features, path, projection };
  }, []);

  const originPt = projection(ORIGIN)!;

  const arcs = DESTINATIONS.map((d) => {
    const arcPath = path({ type: 'LineString', coordinates: [ORIGIN, d.coords] } as never) || '';
    const pt = projection(d.coords)!;
    return { ...d, arcPath, pt };
  });

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#0c1018] to-[#080A0F]">
      {/* Floating info chips */}
      <div className="absolute top-5 left-5 z-10 space-y-3">
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-4 py-3">
          <p className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Origin · Toronto
          </p>
          <p className="mt-0.5 font-bold text-white">43.6°N, 79.4°W</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-4 py-3">
          <p className="text-[10px] font-medium uppercase tracking-wider text-[#8A8FA8]">Active Lanes</p>
          <p className="mt-0.5 text-2xl font-bold text-white">20+</p>
        </div>
      </div>

      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full" role="img" aria-label="Global export network map">
        <defs>
          <radialGradient id="mapGlow" cx="22%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#EE353D" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#EE353D" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EE353D" stopOpacity="0.1" />
            <stop offset="60%" stopColor="#FF6B4A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#FFB199" stopOpacity="1" />
          </linearGradient>
        </defs>

        <rect width={WIDTH} height={HEIGHT} fill="url(#mapGlow)" />

        {/* Countries */}
        <g>
          {countries.map((c, i) => (
            <path
              key={i}
              d={path(c as never) || ''}
              fill="#161c28"
              stroke="#2a3344"
              strokeWidth={0.5}
            />
          ))}
        </g>

        {/* Trade arcs */}
        <g fill="none">
          {arcs.map((a, i) => (
            <motion.path
              key={a.name}
              d={a.arcPath}
              stroke="url(#arcGrad)"
              strokeWidth={1.4}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2 + i * 0.08, ease: 'easeInOut' }}
            />
          ))}
        </g>

        {/* Destination dots */}
        <g>
          {arcs.map((a, i) => (
            <motion.g
              key={a.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.08, type: 'spring', stiffness: 200 }}
              style={{ transformOrigin: `${a.pt[0]}px ${a.pt[1]}px` }}
            >
              <circle cx={a.pt[0]} cy={a.pt[1]} r={5} fill="#FF6B4A" opacity={0.18} />
              <circle cx={a.pt[0]} cy={a.pt[1]} r={2} fill="#fff" />
            </motion.g>
          ))}
        </g>

        {/* Origin pulse */}
        <g>
          <motion.circle
            cx={originPt[0]} cy={originPt[1]} r={8} fill="#EE353D" opacity={0.25}
            animate={{ r: [8, 18, 8], opacity: [0.25, 0, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
          />
          <circle cx={originPt[0]} cy={originPt[1]} r={4.5} fill="#EE353D" stroke="#fff" strokeWidth={1.2} />
        </g>
      </svg>

      {/* Region legend */}
      <div className="flex flex-wrap gap-2 p-5 pt-0">
        {[['Europe', 7], ['Africa', 5], ['Americas', 4], ['Asia-Pacific', 2], ['Middle East', 2]].map(
          ([region, n]) => (
            <span key={region as string} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              <span className="font-bold text-[#EE353D]">{String(n).padStart(2, '0')}</span>
              <span className="text-[#F4F7FB]">{region}</span>
            </span>
          )
        )}
      </div>
    </div>
  );
}
