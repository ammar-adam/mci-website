import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { commodityGroups, allCommodities } from '../data/commodities';

export default function Commodities() {
  return (
    <>
      <Helmet>
        <title>Pulses &amp; Grains for Export | Lentils, Chickpeas, Peas, Beans — Marina Commodities</title>
        <meta name="description" content="Full commodity book: red and green lentils, kabuli & desi chickpeas, yellow & green peas, kidney beans, canary seed, sunflower, and specialty crops. Graded to specification." />
        <meta name="keywords" content="red lentils export Canada, chickpea supplier, yellow peas exporter, pulse commodities Canada, grain exporter Mississauga, bulk beans supplier" />
        <meta property="og:title" content="Pulses & Grains for Export | Marina Commodities" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://marinacommodities.com/commodities" />
      </Helmet>

      <div className="pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="py-16">
          <p className="text-[#EE353D] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D]" />
            The Book
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#F4F7FB] leading-[0.95] tracking-tight">
            A full book,<br />graded to spec.
          </h1>
          <p className="mt-6 text-[#8A8FA8] text-lg leading-relaxed max-w-2xl">
            Our commodity book spans lentils, peas, chickpeas, beans, grains and specialty crops — sourced from prairie growers across Western Canada and Australia, graded to the buyer's exact specification.
          </p>
        </section>

        {/* 6 Groups */}
        <section className="py-8 border-t border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commodityGroups.map((group) => (
              <div
                key={group.id}
                className={`bg-[#111318] border border-white/5 rounded-2xl p-6 ${group.flagship ? 'border-[#EE353D]/20' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[#EE353D] text-xs font-bold tracking-wider">
                    {String(group.id).padStart(2, '0')}
                    {group.flagship && <span className="ml-2 text-[#8A8FA8]">· FLAGSHIP</span>}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-[#F4F7FB] mb-2">{group.name}</h2>
                <p className="text-[#8A8FA8] text-sm leading-relaxed mb-4">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.varieties.map((v) => (
                    <span key={v} className="bg-[#080A0F] border border-white/5 text-[#8A8FA8] text-xs px-2.5 py-1 rounded-full">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grading standards */}
        <section className="py-16 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#EE353D] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D]" />
                Quality Assurance
              </p>
              <h2 className="text-3xl font-black text-[#F4F7FB] mb-6">
                Every lot graded before it ships.
              </h2>
              <div className="space-y-4 text-[#8A8FA8] text-sm leading-relaxed">
                <p>
                  All product is inspected and graded to the agreed specification — screen size, moisture, admixture, colour — with full documentation provided before shipment. We work with licensed third-party inspection bodies and comply with all Canadian Food Inspection Agency (CFIA) phytosanitary requirements.
                </p>
                <p>
                  Our CGC Grain Dealer's Licence and bonding provides counterparty security. Every contract is backed by our standing with the Canadian Grain Commission.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                {['CGC Licensed', 'CFIA Compliant', 'Third-party inspected', 'Full documentation'].map((b) => (
                  <span key={b} className="bg-[#111318] border border-white/5 text-[#F4F7FB] text-xs font-medium px-3 py-1.5 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: '01', t: 'Originate', d: 'Sourced direct from prairie growers and processors across Western Canada.' },
                { n: '02', t: 'Grade', d: 'Inspected to the buyer\'s exact specification, fully documented.' },
                { n: '03', t: 'Ship', d: 'Container and bulk freight coordinated across global ports.' },
                { n: '04', t: 'Clear', d: 'Phytosanitary and trade documentation handled end-to-end.' },
              ].map((s) => (
                <div key={s.n} className="bg-[#111318] border border-white/5 rounded-2xl p-5">
                  <p className="text-[#EE353D] text-xs font-bold mb-3">{s.n}</p>
                  <h3 className="text-base font-bold text-[#F4F7FB] mb-1">{s.t}</h3>
                  <p className="text-[#8A8FA8] text-xs leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Full product list */}
        <section className="py-16 border-t border-white/5">
          <h2 className="text-2xl font-black text-[#F4F7FB] mb-8">Full product list</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {allCommodities.map((item) => (
              <div key={item} className="bg-[#111318] border border-white/5 rounded-xl px-4 py-3 text-sm text-[#8A8FA8]">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-8">
          <div className="bg-[#111318] border border-white/5 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-black text-[#F4F7FB]">Need a specific grade or origin?</h2>
              <p className="text-[#8A8FA8] mt-1">Talk to our desk — we'll find what you need.</p>
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
