'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, Compass, Film, Briefcase, Mail, ArrowRight, AlertCircle } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState<number>(8);
  const [autoRedirect, setAutoRedirect] = useState<boolean>(true);

  useEffect(() => {
    if (!autoRedirect) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [autoRedirect, router]);

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 relative overflow-hidden">
      {/* 3D Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-eros-pink/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-eros-cyan/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eros-pink/10 border border-eros-pink/30 text-eros-pink text-xs font-bold uppercase tracking-widest mb-6">
          <AlertCircle className="w-4 h-4" /> 404 — Page Not Found
        </div>

        {/* 404 Heading */}
        <h1 className="font-heading text-6xl sm:text-8xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
          4<span className="dynamic-title">0</span>4
        </h1>

        <p className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
          The page you are looking for has been moved or does not exist.
        </p>

        <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
          If you arrived from a legacy link or an outdated bookmark, don't worry! We've automatically upgraded our platform.
        </p>

        {/* Countdown Box */}
        {autoRedirect && (
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-sm mb-10 text-xs font-medium text-slate-600 dark:text-slate-400">
            <span>Redirecting to Homepage in <strong className="text-eros-cyan font-bold text-sm">{countdown}s</strong>...</span>
            <button 
              onClick={() => setAutoRedirect(false)}
              className="text-xs font-bold text-eros-pink hover:underline ml-2"
            >
              Stay here
            </button>
          </div>
        )}

        {/* Quick Jump Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 text-left">
          <Link
            href="/"
            className="p-5 rounded-2xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border hover:border-eros-cyan/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-eros-cyan/10 text-eros-cyan group-hover:scale-110 transition">
                <Home className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-slate-900 dark:text-white group-hover:text-eros-cyan transition">
                Homepage
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Return to the main overview and latest updates.</p>
          </Link>

          <Link
            href="/businesses/film-promotions"
            className="p-5 rounded-2xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border hover:border-eros-pink/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-eros-pink/10 text-eros-pink group-hover:scale-110 transition">
                <Film className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-slate-900 dark:text-white group-hover:text-eros-pink transition">
                Film Promotion & PR
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Celebrity PR, movie launches, and red carpet events.</p>
          </Link>

          <Link
            href="/capabilities"
            className="p-5 rounded-2xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border hover:border-eros-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-eros-gold/10 text-eros-gold group-hover:scale-110 transition">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-slate-900 dark:text-white group-hover:text-eros-gold transition">
                All Businesses
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Google 360°, Financial Services, B2B Commercial Sales.</p>
          </Link>

          <Link
            href="/careers"
            className="p-5 rounded-2xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border hover:border-eros-cyan/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-eros-cyan/10 text-eros-cyan group-hover:scale-110 transition">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-slate-900 dark:text-white group-hover:text-eros-cyan transition">
                Careers & Openings
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Explore active management and sales opportunities.</p>
          </Link>

          <Link
            href="/contact"
            className="p-5 rounded-2xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border hover:border-eros-pink/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-eros-pink/10 text-eros-pink group-hover:scale-110 transition">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-slate-900 dark:text-white group-hover:text-eros-pink transition">
                Contact & Support
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Reach out directly to our leadership or support team.</p>
          </Link>

          <Link
            href="/gallery"
            className="p-5 rounded-2xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border hover:border-eros-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-eros-gold/10 text-eros-gold group-hover:scale-110 transition">
                <Film className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-slate-900 dark:text-white group-hover:text-eros-gold transition">
                Company Gallery
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">View team milestones, summits, and certified achievers.</p>
          </Link>
        </div>

        {/* Primary CTA */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-eros-cyan hover:bg-cyan-500 text-slate-950 font-extrabold text-sm uppercase tracking-wider transition-all transform hover:scale-105 shadow-lg shadow-eros-cyan/25"
          >
            Back to Homepage <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
