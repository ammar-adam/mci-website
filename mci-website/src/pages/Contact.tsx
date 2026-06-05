import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Reveal from '../components/motion/Reveal';
import { img } from '../data/assets';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${form.firstName} ${form.lastName}\nPhone: ${form.phone}\n\n${form.message}`);
    window.location.href = `mailto:info@marinacommodities.com?subject=Trading Desk Inquiry&body=${body}`;
    setSent(true);
  }

  const inputCls = 'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/30 transition-colors focus:border-[#EE353D]/50 focus:outline-none';

  return (
    <>
      <Helmet>
        <title>Contact Marina Commodities | Talk to the Trading Desk</title>
        <meta name="description" content="Reach our trading desk in Mississauga, Ontario or Eight Mile Plains, Australia. +1 905.828.0777 · info@marinacommodities.com" />
        <meta name="keywords" content="contact Marina Commodities, pulse trading desk Canada, grain exporter contact" />
        <meta property="og:title" content="Contact Marina Commodities | Talk to the Trading Desk" />
        <link rel="canonical" href="https://marinacommodities.com/contact" />
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0">
          <img src={img.cargoPort} alt="Cargo port" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080A0F]/80 via-[#080A0F]/75 to-[#080A0F]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Desk open · 20+ markets
            </p>
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">Talk to<br />the Desk.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Whether you're sourcing a specific grade, need pricing on a volume, or want to set up a supply relationship, get in touch with our trading team directly.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 border-t border-white/10 py-16 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <h2 className="mb-6 text-2xl font-black text-white">Send us a message</h2>
            {sent ? (
              <div className="rounded-3xl border border-[#EE353D]/20 bg-white/[0.03] p-8 text-center">
                <p className="mb-2 text-lg font-bold text-[#EE353D]">Message opened in your email client.</p>
                <p className="text-sm text-white/60">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-xs text-white/55">First Name</label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required className={inputCls} placeholder="First" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs text-white/55">Last Name</label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required className={inputCls} placeholder="Last" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-white/55">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputCls} placeholder="you@company.com" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-white/55">Phone <span className="text-white/30">(optional)</span></label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputCls} placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs text-white/55">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className={`${inputCls} resize-none`} placeholder="Tell us what you're looking for: commodity, grade, volume, destination…" />
                </div>
                <button type="submit" className="w-full rounded-full bg-[#EE353D] px-6 py-3.5 font-semibold text-white transition-transform hover:scale-[1.02]">Send Message →</button>
              </form>
            )}
          </Reveal>

          {/* Offices */}
          <Reveal delay={0.1}>
            <h2 className="mb-6 text-2xl font-black text-white">Our offices</h2>
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="mb-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Canada · Primary Desk
                </p>
                <h3 className="mb-3 text-lg font-bold text-white">Mississauga, Ontario</h3>
                <address className="space-y-1.5 not-italic text-sm leading-relaxed text-white/60">
                  <p>403–4080 Confederation Parkway</p>
                  <p>Mississauga, ON L5B 0G1</p>
                  <a href="tel:+19058280777" className="mt-3 flex items-center gap-2 transition-colors hover:text-white">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    +1 905.828.0777
                  </a>
                  <a href="mailto:info@marinacommodities.com" className="flex items-center gap-2 transition-colors hover:text-white">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    info@marinacommodities.com
                  </a>
                </address>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="mb-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#EE353D]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Australia · Secondary Desk
                </p>
                <h3 className="mb-3 text-lg font-bold text-white">Eight Mile Plains, QLD</h3>
                <address className="not-italic text-sm leading-relaxed text-white/60">
                  <p>3 Clunies Ross Court</p>
                  <p>Eight Mile Plains, QLD 4113</p>
                </address>
              </div>
              <div className="rounded-3xl border border-[#EE353D]/10 bg-white/[0.03] p-6">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#EE353D]">Credentials</p>
                <ul className="space-y-2 text-sm text-white/60">
                  {['CGC Licensed & Bonded, Grain Dealer\'s Licence', 'Global Pulses Confederation, EVP & Treasurer', 'CFIA phytosanitary compliant'].map((c) => (
                    <li key={c} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-[#EE353D]" />{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
