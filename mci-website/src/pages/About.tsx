import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../components/motion/Reveal';
import Counter from '../components/motion/Counter';
import { team } from '../data/team';
import { img } from '../data/assets';

const values = [
  { title: 'Quality Product', desc: 'We source only from trusted growers and processors, with independent grading and full traceability from field to container.' },
  { title: 'Firm Commitment', desc: 'Every contract is honoured. Our CGC bond means counterparties have security on every transaction, no exceptions.' },
  { title: 'Timely Shipments', desc: 'Coordinated logistics across multiple origin ports ensure product arrives on schedule, every time.' },
  { title: 'Global Networks', desc: 'Four decades of relationships across Europe, Asia, Africa and the Americas means faster execution and deeper market intelligence.' },
];

const sisters = [
  { name: 'Marina Group of Canada', url: 'https://marinagroupcanada.com', desc: 'Parent holding company' },
  { name: 'Marina Textiles Inc.', url: 'https://marinatextiles.com', desc: 'Importers, distributors & exporters of textiles' },
  { name: 'Marina Homes', url: 'https://marinahomes.ca', desc: 'Residential construction & development' },
];

const stats = [
  { to: 1995, suffix: '', label: 'Year founded' },
  { to: 20, suffix: '+', label: 'Export markets' },
  { to: 2, suffix: '', label: 'Trading desks' },
  { to: 100, suffix: 'K+', label: 'Tonnes / year' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Marina Commodities | Canadian Grain Dealer Since 1995</title>
        <meta name="description" content="Founded in 1995, Marina Commodities is one of Canada's top pulse and grain trading houses, exporting to Europe, Asia, Africa and the Americas. Meet the team." />
        <meta name="keywords" content="Marina Commodities history, Canadian grain dealer, pulse trading company Canada, Global Pulses Confederation" />
        <meta property="og:title" content="About Marina Commodities | Canadian Grain Dealer Since 1995" />
        <meta property="og:image" content={img.wheatField} />
        <link rel="canonical" href="https://marinacommodities.com/about" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0">
          <img src={img.wheatField} alt="Golden wheat field at harvest" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080A0F]/80 via-[#080A0F]/70 to-[#080A0F]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE353D]" /> About Us
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              40 years moving the world's best pulses.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Marina Commodities is one of Canada's leading exporters and trading houses of pulses and grains. We source direct from prairie growers, grade to specification, and ship to buyers across 20+ countries on six continents.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Story */}
        <section className="border-t border-white/10 py-20">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <h2 className="mb-6 text-3xl font-black text-white">A continued growth story</h2>
              <div className="space-y-4 leading-relaxed text-white/65">
                <p>Marina Commodities was established in <strong className="text-white">1995</strong> as a member of <strong className="text-white">Marina Group of Canada</strong>, one of the country's most established privately held groups. From the outset, the focus was on domestic trading and exporting agricultural products: peas, chickpeas, lentils and beans to markets around the globe.</p>
                <p>In a relatively short period, Marina Commodities built strong relationships with buyers across Europe, Asia, Africa and the Americas. Today we operate two trading desks, in <strong className="text-white">Mississauga, Ontario</strong> and <strong className="text-white">Eight Mile Plains, Australia</strong>, giving us year-round origination across both the Canadian and Australian pulse harvest cycles.</p>
                <p>Our success comes from an unrelenting emphasis on <strong className="text-white">service and quality</strong>: product graded to the buyer's exact specification, contracts honoured without exception, and shipments delivered on time.</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                    <p className="text-4xl font-black text-white"><Counter to={s.to} suffix={s.suffix} /></p>
                    <p className="mt-1 text-sm text-white/55">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-white/10 py-20">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE353D]" /> Our Values
            </p>
            <h2 className="mb-10 text-3xl font-black text-white">What we stand for</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="mb-2 text-lg font-bold text-white">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="border-t border-white/10 py-20">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE353D]" /> Leadership
            </p>
            <h2 className="mb-10 text-3xl font-black text-white">Meet the team</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#EE353D]/20 bg-[#EE353D]/10">
                    <span className="text-lg font-bold text-[#EE353D]">{member.name[0]}</span>
                  </div>
                  <p className="mb-1 text-xs uppercase tracking-wider text-white/50">{member.title}</p>
                  <h3 className="mb-3 text-xl font-bold text-white">{member.name}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/60">{member.bio}</p>
                  {member.credentials && (
                    <ul className="space-y-1.5">
                      {member.credentials.map((c) => (
                        <li key={c} className="flex items-center gap-1.5 text-xs font-medium text-[#EE353D]">
                          <span className="h-1 w-1 rounded-full bg-[#EE353D]" />{c}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Sister companies */}
        <section className="border-t border-white/10 py-20">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EE353D]" /> Our Companies
            </p>
            <h2 className="mb-8 text-3xl font-black text-white">Part of the Marina Group</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {sisters.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="group block h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20">
                  <p className="mb-2 text-xs text-white/50">{s.desc}</p>
                  <h3 className="text-lg font-bold text-white transition-colors group-hover:text-[#EE353D]">{s.name} →</h3>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-4">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-10 sm:flex-row">
              <div>
                <h2 className="text-2xl font-black text-white">Ready to source from us?</h2>
                <p className="mt-1 text-white/60">Talk to our trading desk in Mississauga or Australia.</p>
              </div>
              <Link to="/contact" className="whitespace-nowrap rounded-full bg-[#EE353D] px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.03]">Talk to the Desk →</Link>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
