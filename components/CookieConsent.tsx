'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('eros_cookie_consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('eros_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem('eros_cookie_consent', 'declined');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-in fade-in slide-in-from-bottom duration-300">
      <div className="p-5 rounded-2xl bg-white/95 dark:bg-eros-card/95 backdrop-blur-xl border border-slate-200 dark:border-eros-border shadow-2xl text-slate-800 dark:text-slate-200 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-eros-cyan text-sm font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy & Compliance</span>
          </div>
          <button 
            onClick={handleDecline}
            aria-label="Close cookie consent banner"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
          We use essential privacy-preserving cookies and security controls to ensure high-speed performance and compliance with global data protection standards.
        </p>
        <div className="flex items-center gap-2 pt-1">
          <button 
            onClick={handleAccept}
            className="flex-1 py-2 px-4 rounded-xl bg-eros-cyan hover:bg-eros-bright text-slate-950 font-bold text-xs transition shadow-sm"
          >
            Accept Essential Cookies
          </button>
          <button 
            onClick={handleDecline}
            className="py-2 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs transition"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
