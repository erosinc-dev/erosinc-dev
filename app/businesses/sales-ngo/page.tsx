import React from 'react';
import Link from 'next/link';
import { Globe, Heart, Users, CheckCircle2, ArrowRight, ShieldCheck, Award, HandHeart, Sparkles } from 'lucide-react';

export default function SalesNGOBusiness() {
  const pillars = [
    { title: "Sustainable Donor Acquisition", desc: "Connecting everyday citizens with meaningful humanitarian causes to secure long-term recurring donations." },
    { title: "Multi-Channel Awareness Campaigns", desc: "Blending digital storytelling, public outreach, and event awareness to amplify non-profit missions." },
    { title: "Donor Retention & Engagement", desc: "Nurturing ongoing relationships with supporters through transparent impact reporting and regular updates." },
    { title: "Global & Local NGO Partnerships", desc: "Collaborating with internationally recognized charities and grassroots community non-profits." }
  ];

  const causeAreas = [
    "Child Healthcare & Education",
    "Environmental Protection & Reforestation",
    "Clean Water & Hygiene Infrastructure",
    "Poverty Alleviation & Disaster Relief",
    "Animal Welfare & Sanctuary Support",
    "Community Empowerment & Skill Building"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-eros-bright/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eros-bright/10 border border-eros-bright/30 text-xs font-bold uppercase tracking-widest text-eros-bright mb-6">
            <Globe className="w-4 h-4 text-eros-bright" />
            Social Impact & Non-Profit Division
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Sales NGO <span className="dynamic-title">& Donor Acquisition</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
            Empowering non-profit organizations with sustainable funding pipelines, passionate brand representation, and long-term donor engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright text-slate-950 font-bold transition shadow-xl shadow-eros-cyan/20 flex items-center gap-2 text-sm uppercase tracking-wider">
              Amplify Your Cause <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:partnership@erosinc.in" className="px-8 py-4 rounded-xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border text-slate-900 dark:text-white font-semibold transition text-sm flex items-center gap-2">
              Email Desk: partnership@erosinc.in
            </a>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pil, idx) => (
            <div key={idx} className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 bento-glow shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-eros-bright/10 border border-eros-bright/30 text-eros-bright flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">{pil.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{pil.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Cause Areas */}
        <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 md:p-12 shadow-xl mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2 block">Causes We Support</span>
            <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white">Humanitarian Impact Verticals</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Our outreach ambassadors represent causes that bring tangible positive change to communities across India and globally.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {causeAreas.map((area, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-eros-border/60 text-slate-800 dark:text-slate-200 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-eros-bright shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
