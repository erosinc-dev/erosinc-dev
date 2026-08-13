import React from 'react';
import Link from 'next/link';
import { View, Eye, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Camera, Sparkles, Smartphone, BarChart3 } from 'lucide-react';

export default function Google360Business() {
  const features = [
    { title: "HDR 360° Panoramic Capture", desc: "Ultra-high definition panoramic photography capturing indoor and outdoor spaces with crisp clarity." },
    { title: "Google Street View Publishing", desc: "Direct integration into Google Maps and Google Search listings, verified by Street View standards." },
    { title: "VR & Interactive Walkthroughs", desc: "Immersive virtual reality tours compatible with web, mobile, and VR headsets for prospective buyers." },
    { title: "Google My Business Optimization", desc: "Enhance local SEO visibility, increase customer walk-in traffic, and double engagement on Google Maps." }
  ];

  const industries = [
    "Commercial Real Estate & Corporate Offices",
    "Luxury Residential & Housing Projects",
    "Retail Stores, Showrooms & Shopping Outlets",
    "Hotels, Resorts & Event Venues",
    "Educational Institutions & Campus Tours",
    "Healthcare Facilities & Fitness Centers"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-eros-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-eros-gold/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eros-cyan/10 border border-eros-cyan/30 text-xs font-bold uppercase tracking-widest text-eros-cyan mb-6">
            <View className="w-4 h-4 text-eros-cyan" />
            Digital & Spatial Technology Division
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Google 360° Property <span className="dynamic-title">Publishing</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
            Transform how customers discover your physical location. We specialize in capturing, processing, and publishing high-resolution 360° virtual tours directly to Google Street View and digital channels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright text-slate-950 font-bold transition shadow-xl shadow-eros-cyan/20 flex items-center gap-2 text-sm uppercase tracking-wider">
              Book a 360° Shoot <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:partnership@erosinc.in" className="px-8 py-4 rounded-xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border text-slate-900 dark:text-white font-semibold transition text-sm flex items-center gap-2">
              Email Sales: partnership@erosinc.in
            </a>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 bento-glow shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-eros-cyan/10 border border-eros-cyan/30 text-eros-cyan flex items-center justify-center mb-6">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">{feat.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 md:p-12 shadow-xl mb-20 relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-eros-gold mb-2 block">Market Verticals</span>
            <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white">Industries We Transform</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Our spatial publishing technology boosts customer confidence and search rankings across key business sectors.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-eros-border/60 text-slate-800 dark:text-slate-200 font-semibold text-sm">
                <CheckCircle2 className="w-5 h-5 text-eros-cyan shrink-0" />
                <span>{ind}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Google 360 Matters Card */}
        <div className="rounded-3xl bg-gradient-to-r from-eros-cyan/20 via-eros-gold/20 to-eros-pink/20 p-1 border border-slate-200 dark:border-eros-border shadow-2xl">
          <div className="bg-white dark:bg-eros-bg rounded-[22px] p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Increase Search Visibility by 200%
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
              Listings with virtual tours are twice as likely to generate interest and in-person visits. Give your customers the transparency they demand before they even step through your doors.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright text-slate-950 font-bold uppercase tracking-wider text-sm transition shadow-lg">
              Get Started with Google 360° Today
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
