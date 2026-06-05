const U = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const img = {
  // Cinematic hero — combine harvester at golden hour
  heroHarvest: U('1565647952915-9644fcd446a4', 2200, 85),
  // Editorial / section imagery
  pulsesBowls: U('1612257416648-ee7a6c533b4f'),
  lentilsScoop: U('1552585960-0e1069ce7405'),
  grainBags: U('1599579085809-4edbc35cee01'),
  wheatField: U('1529511582893-2d7e684dd128'),
  wheatClose: U('1564493031643-4be2c4347a17'),
  combine: U('1635174815612-fd9636f70146'),
  cargoPort: U('1606185540834-d6e7483ee1a4'),
  containerShip: U('1613690399151-65ea69478674'),
  prairie: U('1646684662890-a5076aef9010'),
};

export const groupImages: Record<string, string> = {
  Lentils: img.lentilsScoop,
  Peas: img.wheatField,
  Chickpeas: img.grainBags,
  Beans: img.pulsesBowls,
  Grains: img.wheatClose,
  Specialty: img.prairie,
};

// NOTE: These are professional-portrait placeholders from Unsplash.
// Swap each `photo` URL for an actual headshot of the team member.
export const portrait = (id: string, w = 600) => U(id, w, 80);

export const logo = '/brand/marina-logo-white.png';
export const gpcBadge = '/brand/gpc-presidents-club.png';
