import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { team } from '../data/team';

const values = [
  { title: 'Quality Product', desc: 'We source only from trusted growers and processors, with independent grading and full traceability from field to container.' },
  { title: 'Firm Commitment', desc: 'Every contract is honoured. Our CGC bond means counterparties have security on every transaction — no exceptions.' },
  { title: 'Timely Shipments', desc: 'Coordinated logistics across multiple origin ports ensure product arrives on schedule, every time.' },
  { title: 'Global Networks', desc: 'Four decades of relationships across Europe, Asia, Africa and the Americas means faster execution and deeper market intelligence.' },
];

const sisters = [
  { name: 'Marina Group of Canada', url: 'https://marinagroupcanada.com', desc: 'Parent holding company' },
  { name: 'Marina Textiles Inc.', url: 'https://marinatextiles.com', desc: 'Importers, distributors & exporters of textiles' },
  { name: 'Marina Homes', url: 'https://marinahomes.ca', desc: 'Residential construction & development' },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Marina Commodities | Canadian Grain Dealer Since 1995</title>
        <meta name="description" content="Founded in 1995, Marina Commodities is one of Canada's top pulse and grain trading houses, exporting to Europe, Asia, Africa and the Americas. Meet the team." />
        <meta name="keywords" content="Marina Commodities history, Canadian grain dealer, pulse trading company Canada, Global Pulses Confederation" />
        <meta property="og:title" content="About Marina Commodities | Canadian Grain Dealer Since 1995" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://marinacommodities.com/about" />
      </Helmet>

      <div className="pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="py-16">
          <p className="text-[#EE353D] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D]" />
            About Us
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#F4F7FB] leading-[0.95] tracking-tight max-w-3xl">
            40 years moving the world's best pulses.
          </h1>
          <p className="mt-6 text-[#8A8FA8] text-lg leading-relaxed max-w-2xl">
            Marina Commodities is one of Canada's leading exporters and trading houses of pulses and grains. We source direct from prairie growers, grade to specification, and ship to buyers across 20+ countries on six continents.
          </p>
        </section>

        {/* Story */}
        <section className="py-16 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black text-[#F4F7FB] mb-6">A continued growth story</h2>
              <div className="space-y-4 text-[#8A8FA8] leading-relaxed">
                <p>
                  Marina Commodities was established in <strong className="text-[#F4F7FB]">1995</strong> as the agricultural trading arm of Marina Textiles Inc. — one of Canada's largest textile importers and distributors. From the outset, the focus was on domestic trading and exporting agricultural products: peas, chickpeas, lentils and beans to markets around the globe.
                </p>
                <p>
                  In a relatively short period, Marina Commodities built strong relationships with buyers across Europe, Asia, Africa and the Americas. Today we operate two trading desks — in <strong className="text-[#F4F7FB]">Mississauga, Ontario</strong> and <strong className="text-[#F4F7FB]">Eight Mile Plains, Australia</strong> — giving us year-round origination capability across both the Canadian and Australian pulse harvest cycles.
                </p>
                <p>
                  Our success comes from an unrelenting emphasis on <strong className="text-[#F4F7FB]">service and quality</strong>: product graded to the buyer's exact specification, contracts honoured without exception, and shipments delivered on time.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '1995', label: 'Year founded' },
                { value: '20+', label: 'Export markets' },
                { value: '2', label: 'Trading desks' },
                { value: '100K+', label: 'Tonnes / year' },
              ].map((s) => (
                <div key={s.label} className="bg-[#111318] border border-white/5 rounded-2xl p-6">
                  <p className="text-4xl font-black text-[#F4F7FB]">{s.value}</p>
                  <p className="text-sm text-[#8A8FA8] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 border-t border-white/5">
          <p className="text-[#EE353D] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D]" />
            Our Values
          </p>
          <h2 className="text-3xl font-black text-[#F4F7FB] mb-10">What we stand for</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="bg-[#111318] border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#F4F7FB] mb-2">{v.title}</h3>
                <p className="text-[#8A8FA8] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="py-16 border-t border-white/5">
          <p className="text-[#EE353D] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D]" />
            Leadership
          </p>
          <h2 className="text-3xl font-black text-[#F4F7FB] mb-10">Meet the team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[#111318] border border-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-full bg-[#EE353D]/10 border border-[#EE353D]/20 flex items-center justify-center mb-4">
                  <span className="text-[#EE353D] font-bold text-lg">{member.name[0]}</span>
                </div>
                <p className="text-[#8A8FA8] text-xs tracking-wider uppercase mb-1">{member.title}</p>
                <h3 className="text-xl font-bold text-[#F4F7FB] mb-3">{member.name}</h3>
                <p className="text-[#8A8FA8] text-sm leading-relaxed mb-4">{member.bio}</p>
                {member.credentials && (
                  <ul className="space-y-1 mt-4">
                    {member.credentials.map((c) => (
                      <li key={c} className="text-xs text-[#EE353D] font-medium flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#EE353D]" />
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[#8A8FA8] hover:text-[#F4F7FB] transition-colors mt-4">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Sister companies */}
        <section className="py-16 border-t border-white/5">
          <p className="text-[#EE353D] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D]" />
            Our Companies
          </p>
          <h2 className="text-3xl font-black text-[#F4F7FB] mb-8">Part of the Marina Group</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {sisters.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111318] hover:bg-[#161B22] border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-200 group"
              >
                <p className="text-[#8A8FA8] text-xs mb-2">{s.desc}</p>
                <h3 className="text-lg font-bold text-[#F4F7FB] group-hover:text-[#EE353D] transition-colors">{s.name} →</h3>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-8">
          <div className="bg-[#111318] border border-white/5 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-black text-[#F4F7FB]">Ready to source from us?</h2>
              <p className="text-[#8A8FA8] mt-1">Talk to our trading desk in Mississauga or Australia.</p>
            </div>
            <Link to="/contact" className="bg-[#EE353D] hover:bg-[#D42E35] text-white font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap">
              Talk to the Desk →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
