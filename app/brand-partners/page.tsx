import React from 'react';
import Link from 'next/link';
import { Building2, Film, CreditCard, View, Globe, CheckCircle2, ArrowRight, ShieldCheck, Handshake } from 'lucide-react';

export default function BrandPartners() {
  const sectors = [
    {
      title: "Entertainment & Media",
      desc: "Promotional partnerships for major Bollywood film releases, streaming platforms, and pop-up event activations.",
      icon: Film,
      color: "text-eros-pink",
      bgColor: "bg-eros-pink/10",
      borderColor: "border-eros-pink/30",
      stats: "500K+ Moviegoers Reached"
    },
    {
      title: "Banking & Financial Institutions",
      desc: "Acquiring verified credit cardholders and expanding retail banking networks with 100% regulatory compliance.",
      icon: CreditCard,
      color: "text-eros-gold",
      bgColor: "bg-eros-gold/10",
      borderColor: "border-eros-gold/30",
      stats: "10,000+ Verified Accounts"
    },
    {
      title: "Real Estate & Google 360° Tech",
      desc: "Publishing virtual reality property tours to Google Maps and Google Street View for commercial & residential developers.",
      icon: View,
      color: "text-eros-cyan",
      bgColor: "bg-eros-cyan/10",
      borderColor: "border-eros-cyan/30",
      stats: "200+ Properties Published"
    },
    {
      title: "Global Charities & NGOs",
      desc: "Driving sustainable funding pipelines and recurring donor onboarding for non-profit organizations.",
      icon: Globe,
      color: "text-eros-bright",
      bgColor: "bg-eros-bright/10",
      borderColor: "border-eros-bright/30",
      stats: "Long-term Donor Base"
    }
  ];

  const whyPartner = [
    "Omnichannel Reach (Online, Field & B2B Engagement)",
    "Dedicated 50+ Member Trained Workforce",
    "Zero Financial Risk & Performance-Based Models",
    "100% Transparent Campaign Reporting & Audit Trails",
    "Nationwide Market Penetration Capability",
    "Brand Integrity & Ethical Representation Guarantee"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-eros-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eros-gold/10 border border-eros-gold/30 text-xs font-bold uppercase tracking-widest text-eros-gold mb-6">
            <Handshake className="w-4 h-4 text-eros-gold" />
            Enterprise Alliances
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Trusted By <span className="dynamic-title">Industry Leaders</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
            Eros Inc. collaborates with premier brands across banking, real estate, entertainment, and humanitarian sectors to scale market presence with integrity and measurable impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright text-slate-950 font-bold transition shadow-xl shadow-eros-cyan/20 flex items-center gap-2 text-sm uppercase tracking-wider">
              Become a Partner <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:partnership@erosinc.in" className="px-8 py-4 rounded-xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border text-slate-900 dark:text-white font-semibold transition text-sm flex items-center gap-2">
              Email Partnerships: partnership@erosinc.in
            </a>
          </div>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {sectors.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <div key={idx} className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-8 rounded-3xl bento-glow shadow-lg transition flex flex-col justify-between">
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${sec.bgColor} ${sec.borderColor} border ${sec.color} flex items-center justify-center mb-6`}>
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-3">{sec.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{sec.desc}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-eros-border/60 text-xs font-bold text-eros-cyan uppercase tracking-wider">
                  {sec.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Partner Card */}
        <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2 block">Value Proposition</span>
            <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white">Why Leading Brands Choose Eros Inc.</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">We offer end-to-end execution, trained personnel, and performance-based marketing accountability.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {whyPartner.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-eros-border/60 text-slate-800 dark:text-slate-200 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-eros-gold shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
