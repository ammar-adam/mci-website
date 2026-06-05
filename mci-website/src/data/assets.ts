const U = (id: string, w = 1600, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const img = {
  pulsesBowls: U('1612257416648-ee7a6c533b4f'),   // assorted pulses in bowls, dark
  lentilsScoop: U('1552585960-0e1069ce7405'),       // red lentils in burlap scoop
  grainBags: U('1599579085809-4edbc35cee01'),       // bags of assorted grains/pulses
  wheatField: U('1529511582893-2d7e684dd128'),      // golden wheat, blue sky
  wheatClose: U('1564493031643-4be2c4347a17'),      // wheat heads close-up
  combine: U('1635174815612-fd9636f70146'),         // combine harvester
  cargoPort: U('1606185540834-d6e7483ee1a4'),       // cargo ship at port
  containerShip: U('1613690399151-65ea69478674'),   // container ship aerial
  prairie: U('1646684662890-a5076aef9010'),         // prairie field tracks
};

export const groupImages: Record<string, string> = {
  Lentils: img.lentilsScoop,
  Peas: img.wheatField,
  Chickpeas: img.grainBags,
  Beans: img.pulsesBowls,
  Grains: img.wheatClose,
  Specialty: img.prairie,
};

export const logo = '/brand/marina-logo-white.png';
export const gpcBadge = '/brand/gpc-presidents-club.png';
