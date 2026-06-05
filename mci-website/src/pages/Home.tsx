import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import StatCard from '../components/StatCard';
import Ticker from '../components/Ticker';
import WorldMap from '../components/WorldMap';
import GlobeSVG from '../components/GlobeSVG';
import { commodityGroups } from '../data/commodities';

const steps = [
  { n: '01', title: 'Originate', desc: 'Sourced direct from prairie growers and processors across Western Canada.' },
  { n: '02', title: 'Grade', desc: 'Inspected and graded to the buyer\'s exact specification, fully documented.' },
  { n: '03', title: 'Ship', desc: 'Container and bulk freight coordinated across global ports, contract to vessel.' },
  { n: '04', title: 'Clear', desc: 'Licensed, bonded trade with phytosanitary and trade documentation handled.' },
];

const standards = [
  {
    tag: 'Regulatory',
    title: 'CGC Licensed & Bonded',
    desc: 'We hold the Canadian Grain Commission Grain Dealer\'s Licence and trade on a bonded basis — security on every contract.',
  },
  {
    tag: 'Membership',
    title: 'Global Pulses Confederation',
    desc: 'Marina Commodities CEO Farhan Adam serves as EVP & Treasurer of the GPC — the apex body of the world\'s pulse industry.',
  },
  {
    tag: 'Quality',
    title: 'Graded to Specification',
    desc: 'Product is inspected and graded to the agreed specification before shipment, with full supporting documentation.',
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Marina Commodities — Canadian Pulse &amp; Grain Exporter | 20+ Markets</title>
        <meta name="description" content="Leading Canadian exporter of lentils, chickpeas, peas and beans to 20+ countries. CGC licensed & bonded. Trading desks in Mississauga and Australia. Est. 1995." />
        <meta name="keywords" content="Canadian pulse exporter, bulk lentils supplier Canada, chickpea exporter Mississauga, grain trading house Canada, CGC licensed grain dealer" />
        <meta property="og:title" content="Marina Commodities — Canadian Pulse & Grain Exporter" />
        <meta property="og:description" content="Sourcing, grading and shipping lentils, peas, chickpeas and beans to 20+ markets worldwide." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://marinacommodities.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Marina Commodities Inc",
          "url": "https://marinacommodities.com",
          "logo": "https://marinacommodities.com/logo.png",
          "contactPoint": { "@type": "ContactPoint", "telephone": "+1-905-828-0777", "contactType": "sales" },
          "address": { "@type": "PostalAddress", "streetAddress": "403-4080 Confederation Parkway", "addressLocality": "Mississauga", "addressRegion": "ON", "postalCode": "L5B 0G1", "addressCountry": "CA" },
          "foundingDate": "1995",
          "description": "Canadian pulse and grain exporter trading lentils, chickpeas, peas, beans and specialty crops to 20+ countries worldwide.",
        })}</script>
      </Helmet>

      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#111318] border border-white/5 rounded-full px-4 py-1.5 mb-8">
              <span className="bg-[#EE353D] text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider">NEW</span>
              <span className="text-[#8A8FA8] text-sm">Pulse & grain trade, brought up to date</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#F4F7FB] leading-[0.95] tracking-tight">
              Pulses &amp; grains,<br />
              moved with{' '}
              <span className="text-[#EE353D]/80">modern</span>
              <br />precision.
            </h1>
            <p className="mt-6 text-[#8A8FA8] text-lg leading-relaxed max-w-lg">
              Marina Commodities sources, grades and ships lentils, peas, chickpeas, beans and specialty crops from Canada and Australia to buyers across 20+ markets — with the speed and clarity of a modern trading desk.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/commodities"
                className="bg-[#EE353D] hover:bg-[#D42E35] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                Explore the book →
              </Link>
              <a
                href="#network"
                className="bg-[#111318] hover:bg-[#161B22] border border-white/10 text-[#F4F7FB] font-semibold px-6 py-3 rounded-full transition-colors duration-200"
              >
                See the network
              </a>
            </div>
          </div>
          <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-none">
            <GlobeSVG />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard value="20+" label="Export markets" />
          <StatCard value="40+" label="Years trading" />
          <StatCard value="100K+" label="Tonnes / year" />
          <StatCard value="6" label="Commodity groups" />
        </div>
      </section>

      {/* Ticker */}
      <div className="mt-16">
        <Ticker />
      </div>

      {/* Commodities preview */}
      <section id="commodities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[#EE353D] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D]" />
              The Book
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#F4F7FB] leading-tight">
              A full book,<br />graded to spec.
            </h2>
          </div>
          <Link to="/commodities" className="hidden sm:block text-sm text-[#8A8FA8] hover:text-[#F4F7FB] transition-colors whitespace-nowrap">
            Full specs →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {commodityGroups.map((group) => (
            <Link
              key={group.id}
              to="/commodities"
              className={`group bg-[#111318] hover:bg-[#161B22] border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-200 ${group.flagship ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[#EE353D] text-xs font-bold tracking-wider">
                  {String(group.id).padStart(2, '0')}
                  {group.flagship && <span className="ml-2 text-[#8A8FA8]">· FLAGSHIP</span>}
                </span>
                <span className="text-[#8A8FA8] group-hover:text-[#F4F7FB] text-lg transition-colors">→</span>
              </div>
              <h3 className="text-2xl font-bold text-[#F4F7FB] mb-2">{group.name}</h3>
              <p className="text-[#8A8FA8] text-sm leading-relaxed mb-4">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.varieties.map((v) => (
                  <span key={v} className="bg-[#080A0F] border border-white/5 text-[#8A8FA8] text-xs px-2.5 py-1 rounded-full">
                    {v}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Network */}
      <section id="network" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mb-12">
          <p className="text-[#EE353D] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D]" />
            Our Network
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F4F7FB] leading-tight">
            Export markets<br />on six continents.
          </h2>
        </div>
        <WorldMap />
      </section>

      {/* How We Work */}
      <section id="how-we-work" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mb-12">
          <p className="text-[#EE353D] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D]" />
            How We Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F4F7FB] leading-tight">
            Prairie to port,<br />handled end to end.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#111318] border border-white/5 rounded-2xl p-6">
              <p className="text-[#EE353D] text-sm font-bold mb-4">{s.n}</p>
              <h3 className="text-xl font-bold text-[#F4F7FB] mb-2">{s.title}</h3>
              <p className="text-[#8A8FA8] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mb-12">
          <p className="text-[#EE353D] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D]" />
            Standards & Membership
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F4F7FB] leading-tight">
            Regulated,<br />bonded, and at<br />the table.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {standards.map((s) => (
            <div key={s.title} className="bg-[#111318] border border-white/5 rounded-2xl p-6">
              <p className="text-[#EE353D] text-[10px] font-semibold tracking-[0.15em] uppercase mb-3">{s.tag}</p>
              <h3 className="text-xl font-bold text-[#F4F7FB] mb-2">{s.title}</h3>
              <p className="text-[#8A8FA8] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-8">
        <div className="bg-[#111318] border border-white/5 rounded-3xl p-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-[#F4F7FB] mb-4">Ready to trade?</h2>
          <p className="text-[#8A8FA8] text-lg mb-8 max-w-md mx-auto">
            Our desk in Mississauga and Australia is open. Talk to a trader today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#EE353D] hover:bg-[#D42E35] text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200 text-lg"
          >
            Talk to the Desk →
          </Link>
        </div>
      </section>
    </>
  );
}
