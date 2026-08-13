import React from 'react';
import Link from 'next/link';
import { CreditCard, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight, Building, Award, Users, Lock } from 'lucide-react';

export default function FinancialServicesBusiness() {
  const coreSolutions = [
    { title: "Premium Credit Card Acquisition", desc: "End-to-end customer sourcing, qualification, and onboarding for leading banking institutions." },
    { title: "Retail & Commercial Banking Growth", desc: "Expanding merchant networks, savings accounts, and financial product adoption across target demographics." },
    { title: "Verified KYC & Compliance Onboarding", desc: "100% compliant document verification, identity checks, and fraud prevention standard operating procedures." },
    { title: "Omnichannel Acquisition Pipelines", desc: "Integrating digital lead generation with direct corporate consultations for maximum conversion rates." }
  ];

  const highlights = [
    "Zero-Friction Customer Onboarding",
    "Banking Regulatory Compliance Standards",
    "High LTV Customer Targeting",
    "Verified Identity & Document Verification",
    "Nationwide Distribution Capability",
    "Performance-Based Growth Models"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-eros-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eros-gold/10 border border-eros-gold/30 text-xs font-bold uppercase tracking-widest text-eros-gold mb-6">
            <CreditCard className="w-4 h-4 text-eros-gold" />
            Institutional Banking & Financial Distribution
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Financial Services <span className="dynamic-title">& Banking Growth</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
            Eros Inc. partners with premier banking and financial networks to accelerate customer acquisition, credit distribution, and institutional financial product adoption across diverse market segments.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright text-slate-950 font-bold transition shadow-xl shadow-eros-cyan/20 flex items-center gap-2 text-sm uppercase tracking-wider">
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:partnership@erosinc.in" className="px-8 py-4 rounded-xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border text-slate-900 dark:text-white font-semibold transition text-sm flex items-center gap-2">
              Email Desk: partnership@erosinc.in
            </a>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {coreSolutions.map((sol, idx) => (
            <div key={idx} className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 bento-glow shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-eros-gold/10 border border-eros-gold/30 text-eros-gold flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">{sol.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Quality Banner */}
        <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2 block">Institutional Trust</span>
            <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white">Why Banking Leaders Trust Eros Inc.</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">We maintain rigorous regulatory compliance, data security, and verified audit trails for all financial onboarding campaigns.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((item, i) => (
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
