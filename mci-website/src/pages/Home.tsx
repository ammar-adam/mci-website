import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Marquee from '../components/Marquee';
import WorldMap from '../components/WorldMap';
import Reveal from '../components/motion/Reveal';
import Counter from '../components/motion/Counter';
import { commodityGroups } from '../data/commodities';
import { img, groupImages, gpcBadge } from '../data/assets';

const steps = [
  { n: '01', title: 'Originate', desc: 'Sourced direct from prairie growers and processors across Western Canada and Australia.', image: img.combine },
  { n: '02', title: 'Grade', desc: 'Inspected and graded to the buyer\'s exact specification, fully documented.', image: img.lentilsScoop },
  { n: '03', title: 'Ship', desc: 'Container and bulk freight coordinated across global ports, contract to vessel.', image: img.containerShip },
  { n: '04', title: 'Clear', desc: 'Licensed, bonded trade with phytosanitary and trade documentation handled.', image: img.grainBags },
];

const stats = [
  { to: 20, suffix: '+', label: 'Export markets' },
  { to: 40, suffix: '+', label: 'Years trading' },
  { to: 100, suffix: 'K+', label: 'Tonnes / year' },
  { to: 6, suffix: '', label: 'Commodity groups' },
];

const headline = ['Pulses', '&', 'grains,', 'moved', 'with', 'modern', 'precision.'];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Marina Commodities — Canadian Pulse &amp; Grain Exporter | 20+ Markets</title>
        <meta name="description" content="Leading Canadian exporter of lentils, chickpeas, peas and beans to 20+ countries. CGC licensed & bonded. Trading desks in Mississauga and Australia. Est. 1995." />
        <meta name="keywords" content="Canadian pulse exporter, bulk lentils supplier Canada, chickpea exporter Mississauga, grain trading house Canada, CGC licensed grain dealer" />
        <meta property="og:title" content="Marina Commodities — Canadian Pulse & Grain Exporter" />
        <meta property="og:description" content="Sourcing, grading and shipping lentils, peas, chickpeas and beans to 20+ markets worldwide." />
        <meta property="og:image" content={img.pulsesBowls} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://marinacommodities.com/" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org', '@type': 'Organization', name: 'Marina Commodities Inc',
          url: 'https://marinacommodities.com', foundingDate: '1995',
          contactPoint: { '@type': 'ContactPoint', telephone: '+1-905-828-0777', contactType: 'sales' },
          address: { '@type': 'PostalAddress', streetAddress: '403-4080 Confederation Parkway', addressLocality: 'Mississauga', addressRegion: 'ON', postalCode: 'L5B 0G1', addressCountry: 'CA' },
          description: 'Canadian pulse and grain exporter trading lentils, chickpeas, peas, beans and specialty crops to 20+ countries worldwide.',
        })}</script>
      </Helmet>

      {/* ============ HERO ============ */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image with overlays */}
        <div className="absolute inset-0">
          <motion.img
            src={img.pulsesBowls}
            alt="Assorted lentils, peas and pulses"
            className="h-full w-full object-cover"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080A0F] via-[#080A0F]/85 to-[#080A0F]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-transparent to-[#080A0F]/60" />
          <div className="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#EE353D]/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="rounded-full bg-[#EE353D] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">New</span>
            <span className="text-sm text-white/80">Pulse &amp; grain trade, brought up to date</span>
          </motion.div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[5.5rem]">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                className={`mr-[0.25em] inline-block ${word === 'modern' ? 'bg-gradient-to-r from-[#EE353D] to-[#FF8A65] bg-clip-text text-transparent' : ''}`}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Marina Commodities sources, grades and ships lentils, peas, chickpeas, beans and
            specialty crops from Canada and Australia to buyers across 20+ markets — with the
            speed and clarity of a modern trading desk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link to="/commodities" className="group relative overflow-hidden rounded-full bg-[#EE353D] px-7 py-3.5 font-semibold text-white shadow-[0_8px_30px_rgba(238,53,61,0.35)] transition-transform hover:scale-[1.03]">
              <span className="relative z-10">Explore the book →</span>
            </Link>
            <a href="#network" className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
              See the network
            </a>
          </motion.div>

          {/* Floating stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md">
                <p className="text-3xl font-black text-white sm:text-4xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-white/55">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* ============ COMMODITIES ============ */}
      <section id="commodities" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28">
        <Reveal>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EE353D]" /> The Book
              </p>
              <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">A full book,<br />graded to spec.</h2>
            </div>
            <Link to="/commodities" className="hidden whitespace-nowrap text-sm text-[#8A8FA8] transition-colors hover:text-white sm:block">Full specs →</Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {commodityGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <Link
                to="/commodities"
                className={`group relative block h-full overflow-hidden rounded-3xl border border-white/10 ${group.flagship ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <img src={groupImages[group.name]} alt={group.name} className="absolute inset-0 h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/90 to-[#0a0d14]/60" />
                <div className="relative flex h-full min-h-[230px] flex-col p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <span className="text-xs font-bold tracking-wider text-[#EE353D]">
                      {String(group.id).padStart(2, '0')}{group.flagship && <span className="ml-2 text-white/40">· FLAGSHIP</span>}
                    </span>
                    <span className="text-lg text-white/40 transition-all group-hover:translate-x-1 group-hover:text-white">→</span>
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-white">{group.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/60">{group.description}</p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {group.varieties.map((v) => (
                      <span key={v} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">{v}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ NETWORK ============ */}
      <section id="network" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28">
        <Reveal>
          <div className="mb-12">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE353D]" /> Our Network
            </p>
            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">Export markets<br />on six continents.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}><WorldMap /></Reveal>
      </section>

      {/* ============ HOW WE WORK ============ */}
      <section id="how-we-work" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28">
        <Reveal>
          <div className="mb-12">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE353D]" /> How We Work
            </p>
            <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">Prairie to port,<br />handled end to end.</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10">
                <img src={s.image} alt={s.title} className="absolute inset-0 h-full w-full object-cover opacity-25 transition-all duration-700 group-hover:scale-110 group-hover:opacity-45" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/85 to-[#0a0d14]/40" />
                <div className="relative flex min-h-[220px] flex-col p-6">
                  <p className="mb-3 text-sm font-bold text-[#EE353D]">{s.n}</p>
                  <h3 className="mb-2 text-xl font-bold text-white">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ STANDARDS ============ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div>
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EE353D]" /> Standards &amp; Membership
              </p>
              <h2 className="text-4xl font-black leading-tight text-white sm:text-5xl">Regulated, bonded, and at the table.</h2>
              <p className="mt-6 max-w-md text-[#8A8FA8] leading-relaxed">
                Our CEO Farhan Adam serves as <strong className="text-white">EVP &amp; Treasurer of the Global Pulses Confederation</strong> — the apex body of the world's pulse industry. We don't just trade the market; we help shape it.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  ['CGC Licensed & Bonded', 'Canadian Grain Commission Grain Dealer\'s Licence — security on every contract.'],
                  ['Global Pulses Confederation', 'Leadership on the board of the world\'s apex pulse-industry body.'],
                  ['Graded to Specification', 'Inspected and documented to the agreed spec before every shipment.'],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <h3 className="mb-1 font-bold text-white">{t}</h3>
                    <p className="text-sm text-white/55">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative flex items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#11151f] to-[#080A0F] p-12">
              <div className="absolute inset-0 rounded-3xl bg-[#EE353D]/5 blur-2xl" />
              <img src={gpcBadge} alt="Global Pulses Confederation President's Club" className="relative max-h-72 w-auto" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 p-12 text-center sm:p-16">
            <img src={img.cargoPort} alt="Cargo ship at port" className="absolute inset-0 h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-[#080A0F]/85 to-[#080A0F]/70" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-4xl font-black text-white sm:text-5xl">Ready to move your next cargo?</h2>
              <p className="mx-auto mt-4 max-w-md text-lg text-white/70">Our desks in Mississauga and Australia are open. Talk to a trader today.</p>
              <Link to="/contact" className="mt-8 inline-block rounded-full bg-[#EE353D] px-8 py-4 text-lg font-semibold text-white shadow-[0_8px_30px_rgba(238,53,61,0.35)] transition-transform hover:scale-[1.03]">
                Talk to the Desk →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
