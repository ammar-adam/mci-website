import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Reveal from '../components/motion/Reveal';
import { commodityGroups, allCommodities } from '../data/commodities';
import { img, groupImages } from '../data/assets';

const qaSteps = [
  { n: '01', t: 'Originate', d: 'Sourced direct from prairie growers and processors across Western Canada.' },
  { n: '02', t: 'Grade', d: 'Inspected to the buyer\'s exact specification, fully documented.' },
  { n: '03', t: 'Ship', d: 'Container and bulk freight coordinated across global ports.' },
  { n: '04', t: 'Clear', d: 'Phytosanitary and trade documentation handled end-to-end.' },
];

export default function Commodities() {
  return (
    <>
      <Helmet>
        <title>Pulses &amp; Grains for Export | Lentils, Chickpeas, Peas, Beans, Marina Commodities</title>
        <meta name="description" content="Full commodity book: red and green lentils, kabuli & desi chickpeas, yellow & green peas, kidney beans, canary seed, sunflower, and specialty crops. Graded to specification." />
        <meta name="keywords" content="red lentils export Canada, chickpea supplier, yellow peas exporter, pulse commodities Canada, grain exporter Mississauga, bulk beans supplier" />
        <meta property="og:title" content="Pulses & Grains for Export | Marina Commodities" />
        <meta property="og:image" content={img.grainBags} />
        <link rel="canonical" href="https://marinacommodities.com/commodities" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <img src={img.grainBags} alt="Bags of assorted pulses and grains" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080A0F]/80 via-[#080A0F]/75 to-[#080A0F]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE353D]" /> The Book
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">A full book,<br />graded to spec.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Our commodity book spans lentils, peas, chickpeas, beans, grains and specialty crops, sourced from prairie growers across Western Canada and Australia, graded to the buyer's exact specification.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Groups */}
        <section className="border-t border-white/10 py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commodityGroups.map((group, i) => (
              <Reveal key={group.id} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10">
                  <img src={groupImages[group.name]} alt={group.name} className="absolute inset-0 h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/90 to-[#0a0d14]/55" />
                  <div className="relative flex h-full min-h-[230px] flex-col p-6">
                    <span className="mb-4 text-xs font-bold tracking-wider text-[#EE353D]">
                      {String(group.id).padStart(2, '0')}{group.flagship && <span className="ml-2 text-white/40">· FLAGSHIP</span>}
                    </span>
                    <h2 className="mb-2 text-2xl font-bold text-white">{group.name}</h2>
                    <p className="mb-4 text-sm leading-relaxed text-white/60">{group.description}</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {group.varieties.map((v) => (
                        <span key={v} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">{v}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* QA */}
        <section className="border-t border-white/10 py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EE353D]" /> Quality Assurance
              </p>
              <h2 className="mb-6 text-3xl font-black text-white">Every lot graded before it ships.</h2>
              <div className="space-y-4 text-sm leading-relaxed text-white/65">
                <p>All product is inspected and graded to the agreed specification (screen size, moisture, admixture, colour) with full documentation provided before shipment. We work with licensed third-party inspection bodies and comply with all Canadian Food Inspection Agency (CFIA) phytosanitary requirements.</p>
                <p>Our CGC Grain Dealer's Licence and bonding provides counterparty security. Every contract is backed by our standing with the Canadian Grain Commission.</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {['CGC Licensed', 'CFIA Compliant', 'Third-party inspected', 'Full documentation'].map((b) => (
                  <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white">{b}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {qaSteps.map((s) => (
                  <div key={s.n} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="mb-3 text-xs font-bold text-[#EE353D]">{s.n}</p>
                    <h3 className="mb-1 text-base font-bold text-white">{s.t}</h3>
                    <p className="text-xs leading-relaxed text-white/55">{s.d}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Full list */}
        <section className="border-t border-white/10 py-20">
          <Reveal>
            <h2 className="mb-8 text-2xl font-black text-white">Full product list</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {allCommodities.map((item, i) => (
              <Reveal key={item} delay={Math.min(i * 0.02, 0.3)}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70 transition-colors hover:border-white/20 hover:text-white">{item}</div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 p-10">
              <img src={img.containerShip} alt="Container ship" className="absolute inset-0 h-full w-full object-cover opacity-25" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#080A0F] via-[#080A0F]/90 to-[#080A0F]/60" />
              <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-2xl font-black text-white">Need a specific grade or origin?</h2>
                  <p className="mt-1 text-white/65">Talk to our desk and we'll find what you need.</p>
                </div>
                <Link to="/contact" className="whitespace-nowrap rounded-full bg-[#EE353D] px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.03]">Talk to the Desk →</Link>
              </div>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
