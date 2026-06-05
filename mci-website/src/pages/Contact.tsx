import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Opens default mail client with pre-filled email as a lightweight contact mechanism
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:info@marinacommodities.com?subject=Trading Desk Inquiry&body=${body}`;
    setSent(true);
  }

  return (
    <>
      <Helmet>
        <title>Contact Marina Commodities | Talk to the Trading Desk</title>
        <meta name="description" content="Reach our trading desk in Mississauga, Ontario or Eight Mile Plains, Australia. +1 905.828.0777 · info@marinacommodities.com" />
        <meta name="keywords" content="contact Marina Commodities, pulse trading desk Canada, grain exporter contact" />
        <meta property="og:title" content="Contact Marina Commodities | Talk to the Trading Desk" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://marinacommodities.com/contact" />
      </Helmet>

      <div className="pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="py-16">
          <p className="text-[#EE353D] text-xs font-semibold tracking-[0.15em] uppercase flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EE353D] animate-pulse" />
            Desk open · 20+ markets
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#F4F7FB] leading-[0.95] tracking-tight">
            Talk to<br />the Desk.
          </h1>
          <p className="mt-6 text-[#8A8FA8] text-lg leading-relaxed max-w-xl">
            Whether you're sourcing a specific grade, need pricing on a volume, or want to set up a supply relationship — get in touch with our trading team directly.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-8 border-t border-white/5">
          {/* Contact form */}
          <div>
            <h2 className="text-2xl font-black text-[#F4F7FB] mb-6">Send us a message</h2>
            {sent ? (
              <div className="bg-[#111318] border border-[#EE353D]/20 rounded-2xl p-8 text-center">
                <p className="text-[#EE353D] text-lg font-bold mb-2">Message opened in your email client.</p>
                <p className="text-[#8A8FA8] text-sm">We'll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#8A8FA8] mb-1.5">First Name</label>
                    <input
                      type="text" name="firstName" value={form.firstName} onChange={handleChange} required
                      className="w-full bg-[#111318] border border-white/10 rounded-xl px-4 py-3 text-[#F4F7FB] text-sm placeholder-[#8A8FA8]/40 focus:outline-none focus:border-[#EE353D]/50 transition-colors"
                      placeholder="First"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#8A8FA8] mb-1.5">Last Name</label>
                    <input
                      type="text" name="lastName" value={form.lastName} onChange={handleChange} required
                      className="w-full bg-[#111318] border border-white/10 rounded-xl px-4 py-3 text-[#F4F7FB] text-sm placeholder-[#8A8FA8]/40 focus:outline-none focus:border-[#EE353D]/50 transition-colors"
                      placeholder="Last"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-[#8A8FA8] mb-1.5">Email</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full bg-[#111318] border border-white/10 rounded-xl px-4 py-3 text-[#F4F7FB] text-sm placeholder-[#8A8FA8]/40 focus:outline-none focus:border-[#EE353D]/50 transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#8A8FA8] mb-1.5">Phone <span className="text-[#8A8FA8]/50">(optional)</span></label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full bg-[#111318] border border-white/10 rounded-xl px-4 py-3 text-[#F4F7FB] text-sm placeholder-[#8A8FA8]/40 focus:outline-none focus:border-[#EE353D]/50 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#8A8FA8] mb-1.5">Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} required rows={5}
                    className="w-full bg-[#111318] border border-white/10 rounded-xl px-4 py-3 text-[#F4F7FB] text-sm placeholder-[#8A8FA8]/40 focus:outline-none focus:border-[#EE353D]/50 transition-colors resize-none"
                    placeholder="Tell us what you're looking for — commodity, grade, volume, destination…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#EE353D] hover:bg-[#D42E35] text-white font-semibold px-6 py-3.5 rounded-full transition-colors duration-200"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-[#F4F7FB] mb-6">Our offices</h2>

            {/* Canada */}
            <div className="bg-[#111318] border border-white/5 rounded-2xl p-6">
              <p className="text-[#EE353D] text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Canada · Primary Desk
              </p>
              <h3 className="text-lg font-bold text-[#F4F7FB] mb-3">Mississauga, Ontario</h3>
              <address className="not-italic text-[#8A8FA8] text-sm leading-relaxed space-y-1.5">
                <p>403–4080 Confederation Parkway</p>
                <p>Mississauga, ON L5B 0G1</p>
                <a href="tel:+19058280777" className="flex items-center gap-2 mt-3 hover:text-[#F4F7FB] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  +1 905.828.0777
                </a>
                <a href="mailto:info@marinacommodities.com" className="flex items-center gap-2 hover:text-[#F4F7FB] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  info@marinacommodities.com
                </a>
              </address>
            </div>

            {/* Australia */}
            <div className="bg-[#111318] border border-white/5 rounded-2xl p-6">
              <p className="text-[#EE353D] text-[10px] font-semibold tracking-[0.15em] uppercase mb-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Australia · Secondary Desk
              </p>
              <h3 className="text-lg font-bold text-[#F4F7FB] mb-3">Eight Mile Plains, QLD</h3>
              <address className="not-italic text-[#8A8FA8] text-sm leading-relaxed">
                <p>3 Clunies Ross Court</p>
                <p>Eight Mile Plains, QLD 4113</p>
              </address>
            </div>

            {/* Credentials */}
            <div className="bg-[#111318] border border-[#EE353D]/10 rounded-2xl p-6">
              <p className="text-[#EE353D] text-[10px] font-semibold tracking-[0.15em] uppercase mb-3">Credentials</p>
              <ul className="space-y-2 text-sm text-[#8A8FA8]">
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#EE353D]" />
                  CGC Licensed & Bonded — Grain Dealer's Licence
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#EE353D]" />
                  Global Pulses Confederation — President's Club
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#EE353D]" />
                  CFIA phytosanitary compliant
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
