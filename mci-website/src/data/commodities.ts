export interface CommodityGroup {
  id: number;
  name: string;
  description: string;
  varieties: string[];
  flagship?: boolean;
}

export const commodityGroups: CommodityGroup[] = [
  {
    id: 1,
    name: 'Lentils',
    description: 'Red, green and French — sourced from prairie growers and graded for colour, size and cook. The core of our book.',
    varieties: ['Red Split', 'Football', 'Laird', 'Eston', 'French Green'],
    flagship: true,
  },
  {
    id: 2,
    name: 'Peas',
    description: 'Yellow & green, whole and split.',
    varieties: ['Yellow', 'Green', 'Maple', 'Splits'],
  },
  {
    id: 3,
    name: 'Chickpeas',
    description: 'Calibrated kabuli & desi.',
    varieties: ['Kabuli 7–10mm', 'Desi'],
  },
  {
    id: 4,
    name: 'Beans',
    description: 'A wide range of kidney, navy and specialty beans for global food manufacturers.',
    varieties: ['Pinto', 'Navy', 'Black', 'Kidney'],
  },
  {
    id: 5,
    name: 'Grains',
    description: 'Prairie-origin grains graded to export specification.',
    varieties: ['Durum', 'Wheat', 'Oats'],
  },
  {
    id: 6,
    name: 'Specialty',
    description: 'Niche crops for specific regional demand.',
    varieties: ['Canary', 'Mustard', 'Flax', 'Sunflower'],
  },
];

export const allCommodities = [
  'Red Lentil (Crimson)',
  'Green Lentil (Laird)',
  'Chickpeas (Kabuli)',
  'Whole Green Peas',
  'Whole Yellow Peas',
  'Sunflower Seeds',
  'Chickpeas (Desi)',
  'Red Lentil (Football)',
  'Red Split Lentil',
  'Dark Red Kidney Beans',
  'Canary Seeds',
  'Black Eye Beans',
  'Light Red Kidney Beans',
  'Cranberry Beans',
  'Soya Beans',
  'Azuki Beans',
  'Pinto Beans',
  'Green Split Peas',
  'Yellow Split Peas',
  'Marrowfat Peas',
  'Green Lentil (Richlea)',
  'Green Lentil (Eston)',
  'Red Lentil (Robin)',
];

export const tickerItems = [
  'DESI CHICKPEAS',
  'PINTO BEANS',
  'NAVY BEANS',
  'DURUM CWAD',
  'CANARY SEED',
  'YELLOW MUSTARD',
  'RED LENTILS No.2 CDN',
  'LAIRD GREEN LENTILS',
  'YELLOW PEAS No.1',
  'KABULI CHICKPEAS 7–10MM',
  'RED SPLIT LENTILS',
  'WHOLE GREEN PEAS',
  'MARROWFAT PEAS',
  'KIDNEY BEANS',
  'SUNFLOWER SEEDS',
];
