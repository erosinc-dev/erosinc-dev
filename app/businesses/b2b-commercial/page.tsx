import React from 'react';
import Link from 'next/link';
import { Briefcase, Building2, TrendingUp, CheckCircle2, ArrowRight, ShieldCheck, Target, Zap, Network } from 'lucide-react';

export default function B2BCommercialBusiness() {
  const B2BSolutions = [
    { title: "Enterprise Pipeline Acceleration", desc: "Identifying, qualifying, and closing high-value commercial accounts for enterprise B2B brands." },
    { title: "Corporate Channel Expansion", desc: "Establishing strategic business partnerships and distributor networks across key commercial hubs." },
    { title: "Consultative Sales Execution", desc: "Deploying experienced corporate representatives trained in executive negotiations and solution selling." },
    { title: "Omnichannel B2B Campaign Integration", desc: "Combining digital ABM (Account-Based Marketing) with executive consultations for maximum ROI." }
  ];

  const valueProps = [
    "High-Value Account Acquisition",
    "Streamlined Sales Cycles",
    "Qualified Enterprise Lead Pipelines",
    "Executive-Level Negotiation Standards",
    "Performance-Driven Revenue Models",
    "Nationwide Market Penetration"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-eros-pink/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eros-pink/10 border border-eros-pink/30 text-xs font-bold uppercase tracking-widest text-eros-pink mb-6">
            <Briefcase className="w-4 h-4 text-eros-pink" />
            Enterprise Commercial Sales Division
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            B2B Commercial <span className="dynamic-title">Sales & Expansion</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
            Accelerating corporate growth for enterprise clients. We design and execute tailored B2B commercial sales strategies that drive sustainable account expansion and market dominance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright text-slate-950 font-bold transition shadow-xl shadow-eros-cyan/20 flex items-center gap-2 text-sm uppercase tracking-wider">
              Scale Your B2B Sales <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:partnership@erosinc.in" className="px-8 py-4 rounded-xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border text-slate-900 dark:text-white font-semibold transition text-sm flex items-center gap-2">
              Email Desk: partnership@erosinc.in
            </a>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {B2BSolutions.map((sol, idx) => (
            <div key={idx} className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 bento-glow shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-eros-pink/10 border border-eros-pink/30 text-eros-pink flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">{sol.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Props Card */}
        <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2 block">Enterprise Growth Factors</span>
            <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white">Commercial Execution Capabilities</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Our B2B sales engine empowers companies to break into competitive markets with verified business leads and streamlined conversion workflows.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {valueProps.map((vp, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-eros-border/60 text-slate-800 dark:text-slate-200 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-eros-pink shrink-0" />
                <span>{vp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
