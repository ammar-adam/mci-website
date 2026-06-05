export interface ExportMarket {
  name: string;
  region: 'Europe' | 'Africa' | 'Americas' | 'Asia-Pacific' | 'Middle East';
  x: number; // SVG percentage x
  y: number; // SVG percentage y
}

// Toronto origin
export const ORIGIN = { x: 22, y: 32, name: 'Toronto, Canada' };
export const ORIGIN_AU = { x: 80, y: 72, name: 'Brisbane, Australia' };

export const exportMarkets: ExportMarket[] = [
  { name: 'United Kingdom', region: 'Europe', x: 46, y: 22 },
  { name: 'Germany', region: 'Europe', x: 49, y: 23 },
  { name: 'France', region: 'Europe', x: 47, y: 26 },
  { name: 'Romania', region: 'Europe', x: 53, y: 25 },
  { name: 'Lithuania', region: 'Europe', x: 52, y: 21 },
  { name: 'Latvia', region: 'Europe', x: 52, y: 20 },
  { name: 'Ukraine', region: 'Europe', x: 54, y: 24 },
  { name: 'Turkey', region: 'Middle East', x: 56, y: 28 },
  { name: 'Ethiopia', region: 'Africa', x: 58, y: 48 },
  { name: 'Sudan', region: 'Africa', x: 57, y: 43 },
  { name: 'Tanzania', region: 'Africa', x: 60, y: 54 },
  { name: 'Mozambique', region: 'Africa', x: 60, y: 60 },
  { name: 'Mexico', region: 'Americas', x: 18, y: 40 },
  { name: 'Brazil', region: 'Americas', x: 28, y: 58 },
  { name: 'Argentina', region: 'Americas', x: 25, y: 68 },
  { name: 'Russia', region: 'Europe', x: 62, y: 18 },
  { name: 'India', region: 'Asia-Pacific', x: 72, y: 38 },
  { name: 'Bangladesh', region: 'Asia-Pacific', x: 75, y: 37 },
  { name: 'Australia', region: 'Asia-Pacific', x: 82, y: 70 },
];

export const regionCounts = {
  Europe: 7,
  Africa: 5,
  Americas: 4,
  'Asia-Pacific': 2,
  'Middle East': 2,
};
