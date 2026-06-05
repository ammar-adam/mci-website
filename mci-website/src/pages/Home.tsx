import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Marquee from '../components/Marquee';
import WorldMap from '../components/WorldMap';
import Reveal from '../components/motion/Reveal';
import Counter from '../components/motion/Counter';
import { commodityGroups } from '../data/commodities';
import { team } from '../data/team';
import { img, groupImages, gpcBadge } from '../data/assets';

const steps = [
  { n: '01', t: 'Originate', d: 'Direct from prairie growers and processors across Western Canada and Australia.' },
  { n: '02', t: 'Grade', d: 'Inspected to the buyer\'s exact specification, fully documented.' },
  { n: '03', t: 'Ship', d: 'Container and bulk freight coordinated across global ports.' },
  { n: '04', t: 'Clear', d: 'Phytosanitary and trade documentation handled end to end.' },
];

const lentilsGroup = commodityGroups.find((g) => g.flagship)!;
const otherGroups = commodityGroups.filter((g) => !g.flagship);

export default function Home() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
  }, [hash]);

  return (
    <>
      <Helmet>
        <title>Marina Commodities | Canadian Pulse &amp; Grain Exporter, 20+ Markets</title>
        <meta name="description" content="Marina Commodities sources, grades and ships lentils, peas, chickpeas, beans and specialty crops from Canada and Australia to buyers across 20+ markets. CGC licensed and bonded. Est. 1995." />
        <meta name="keywords" content="Canadian pulse exporter, bulk lentils Canada, chickpea exporter Mississauga, grain trading house Canada, CGC licensed grain dealer, Global Pulses Confederation" />
        <meta property="og:title" content="Marina Commodities | Canadian Pulse & Grain Exporter" />
        <meta property="og:description" content="Pulses and grains, sourced direct, graded to spec, shipped to 20+ markets." />
        <meta property="og:image" content={img.heroHarvest} />
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
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <motion.img
          src={img.heroHarvest}
          alt="Combine harvester working a prairie field at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080A0F]/30 via-[#080A0F]/40 to-[#080A0F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0F]/85 via-[#080A0F]/20 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-white/55"
          >
            Est. 1995 · Mississauga · Brisbane
          </motion.p>
          <h1 className="max-w-4xl text-[2.75rem] font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }}
            >
              Pulses &amp; grains,
            </motion.span>
            <motion.span
              className="block italic font-light text-white/70"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.9 }}
            >
              moved with intent.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.7 }}
            className="mt-7 max-w-md text-base leading-relaxed text-white/70 lg:text-lg"
          >
            We source direct from prairie growers, grade to the buyer's exact spec, and ship to 20+ markets across six continents.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-5"
          >
            <Link to="/contact" className="rounded-full bg-[#EE353D] px-7 py-3.5 font-semibold text-white shadow-[0_8px_30px_rgba(238,53,61,0.35)] transition-transform hover:scale-[1.03]">
              Talk to the desk →
            </Link>
            <a href="#commodities" className="group flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white">
              Browse the book
              <span className="transition-transform group-hover:translate-x-1">↓</span>
            </a>
          </motion.div>
        </div>

        {/* live scroll hint */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-6 right-6 hidden text-[10px] uppercase tracking-[0.3em] text-white/40 lg:block"
        >
          ↓ scroll
        </motion.div>
      </section>

      <Marquee />

      {/* ============ EDITORIAL INTRO ============ */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 lg:pt-32">
        <Reveal>
          <p className="font-serif text-2xl leading-relaxed text-white/85 sm:text-3xl lg:text-4xl">
            Marina Commodities is one of Canada's leading exporters and trading houses of pulses and grains.
            <span className="text-white/40"> A member of </span>
            <span className="text-white">Marina Group of Canada</span>
            <span className="text-white/40">, operating from Mississauga and Brisbane since 1995.</span>
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
            {[
              { to: 20, suffix: '+', label: 'Export markets' },
              { to: 40, suffix: '+', label: 'Years trading' },
              { to: 100, suffix: 'K+', label: 'Tonnes / year' },
              { to: 6, suffix: '', label: 'Commodity groups' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-white sm:text-4xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-xs uppercase tracking-wider text-white/45">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ============ COMMODITIES ============ */}
      <section id="commodities" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24">
        <Reveal>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[#EE353D]">The Book</p>
              <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                A full book,
                <span className="block italic font-light text-white/70">graded to spec.</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Editorial: large lentil feature + 5 small */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal delay={0.05} className="lg:col-span-3">
            <article className="group relative h-full min-h-[460px] overflow-hidden rounded-3xl">
              <img src={groupImages[lentilsGroup.name]} alt="Red lentils close up" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0d14] via-[#0a0d14]/40 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8 lg:p-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#EE353D]">01 · Flagship</span>
                <h3 className="mt-3 text-5xl font-black text-white lg:text-6xl">{lentilsGroup.name}</h3>
                <p className="mt-3 max-w-md text-white/80">{lentilsGroup.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {lentilsGroup.varieties.map((v) => (
                    <span key={v} className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">{v}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          {/* small list, no card chrome */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02]">
              {otherGroups.map((g) => (
                <div key={g.id} className="group flex items-start gap-4 p-5 transition-colors hover:bg-white/[0.03]">
                  <img src={groupImages[g.name]} alt={g.name} className="h-14 w-14 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-bold text-white">{g.name}</h3>
                      <span className="font-mono text-[10px] text-white/30">0{g.id}</span>
                    </div>
                    <p className="mt-0.5 text-sm text-white/55">{g.varieties.join(' · ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ NETWORK ============ */}
      <section id="network" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-end">
          <Reveal className="lg:col-span-2">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[#EE353D]">The Network</p>
            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl">
              From two desks,
              <span className="block italic font-light text-white/70">to six continents.</span>
            </h2>
            <p className="mt-5 max-w-md text-white/65">
              Toronto and Brisbane keep the desk open around the harvest cycle. Active lanes into Europe, the Americas, Africa, Asia-Pacific and the Middle East.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-3"><WorldMap /></Reveal>
        </div>
      </section>

      {/* ============ HOW WE WORK — timeline ============ */}
      <section id="how-we-work" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28">
        <Reveal>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[#EE353D]">How We Work</p>
          <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl">
            Prairie to port,
            <span className="block italic font-light text-white/70">handled end to end.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="flex items-start gap-6 border-t border-white/10 py-7">
                <span className="font-mono text-sm text-[#EE353D] pt-1">{s.n}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white">{s.t}</h3>
                  <p className="mt-2 max-w-sm text-white/60">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ STANDARDS / GPC — single feature ============ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#11151f] via-[#0d1119] to-[#080A0F]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(238,53,61,0.12),transparent_60%)]" />
            <div className="relative grid grid-cols-1 gap-10 p-10 sm:p-14 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[#EE353D]">At the table</p>
                <h2 className="text-3xl font-black leading-[0.95] tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Licensed, bonded,
                  <span className="block italic font-light text-white/70">on the board.</span>
                </h2>
                <p className="mt-5 text-white/70 leading-relaxed">
                  Marina holds a seat on the executive board of the Global Pulses Confederation, the apex body of the world's pulse industry, alongside the Canadian Grain Commission Grain Dealer's Licence and full CFIA phytosanitary compliance.
                </p>
                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
                  <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[#EE353D]" /> CGC Licensed &amp; Bonded</span>
                  <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[#EE353D]" /> CFIA Phytosanitary Compliant</span>
                  <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[#EE353D]" /> GPC Executive Board</span>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img src={gpcBadge} alt="Global Pulses Confederation President's Club" className="max-h-72 w-auto" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ ABOUT / STORY ============ */}
      <section id="about" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[#EE353D]">About</p>
            <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl">
              A continued
              <span className="block italic font-light text-white/70">growth story.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-5 text-lg leading-relaxed text-white/70">
              <p>
                Marina Commodities was established in <span className="font-semibold text-white">1995</span> as a member of <span className="font-semibold text-white">Marina Group of Canada</span>, one of the country's most established privately held groups.
              </p>
              <p>
                Our success comes from an unrelenting emphasis on service and quality. Product graded to the buyer's exact specification, contracts honoured without exception, and shipments delivered on time. We've built relationships across Europe, Asia, Africa and the Americas, and operate two trading desks that keep the desk open around the global harvest cycle.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Team — masthead strip, no cards */}
        <div className="mt-24 border-t border-white/10 pt-12">
          <Reveal>
            <div className="mb-10 flex items-baseline justify-between gap-6">
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[#EE353D]">Leadership</p>
                <h3 className="text-2xl font-black text-white sm:text-3xl">The desk.</h3>
              </div>
              <p className="hidden max-w-xs text-sm leading-relaxed text-white/55 sm:block">
                Three principals running origination, trading and operations across the Mississauga and Brisbane desks.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
              {team.map((m) => (
                <figure key={m.name} className="group bg-[#0a0d14]">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="h-full w-full object-cover transition-transform duration-[1.4s] group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="border-t border-white/10 p-4 sm:p-5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">{m.title}</p>
                    <p className="mt-1 text-base font-semibold text-white sm:text-lg">{m.name}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <img src={img.cargoPort} alt="Cargo port" className="absolute inset-0 h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080A0F] via-[#080A0F]/80 to-[#080A0F]/55" />
            <div className="relative flex flex-col items-start justify-between gap-8 p-10 sm:flex-row sm:items-end sm:p-14">
              <div className="max-w-xl">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[#EE353D]">Trading desk</p>
                <h2 className="text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl">
                  Ready to move your next cargo?
                </h2>
              </div>
              <Link to="/contact" className="whitespace-nowrap rounded-full bg-[#EE353D] px-7 py-3.5 font-semibold text-white shadow-[0_8px_30px_rgba(238,53,61,0.35)] transition-transform hover:scale-[1.03]">
                Talk to the desk →
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
