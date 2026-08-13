'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export default function PageThemeWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Dynamic route-to-color palette mapping based on logo theme
  const getPageThemeClasses = (path: string) => {
    if (path === '/') {
      return {
        bg: 'bg-gradient-to-b from-sky-50/60 via-slate-50 to-amber-50/30 dark:from-[#0B0E14] dark:via-[#0B0E14] dark:to-[#0E1218]',
        orb1: 'bg-eros-cyan/10 dark:bg-eros-cyan/5',
        orb2: 'bg-eros-gold/10 dark:bg-eros-gold/5',
      };
    }
    if (path === '/philosophy') {
      return {
        bg: 'bg-gradient-to-b from-rose-50/60 via-slate-50 to-pink-50/30 dark:from-[#120B0F] dark:via-[#0B0E14] dark:to-[#120B0F]',
        orb1: 'bg-eros-pink/15 dark:bg-eros-pink/10',
        orb2: 'bg-rose-400/10 dark:bg-rose-500/5',
      };
    }
    if (path === '/capabilities') {
      return {
        bg: 'bg-gradient-to-b from-cyan-50/60 via-slate-50 to-sky-50/30 dark:from-[#0B1217] dark:via-[#0B0E14] dark:to-[#0B1217]',
        orb1: 'bg-eros-cyan/15 dark:bg-eros-cyan/10',
        orb2: 'bg-sky-400/10 dark:bg-sky-500/5',
      };
    }
    if (path === '/businesses/google-360') {
      return {
        bg: 'bg-gradient-to-b from-emerald-50/60 via-slate-50 to-teal-50/30 dark:from-[#0B1512] dark:via-[#0B0E14] dark:to-[#0B1512]',
        orb1: 'bg-emerald-500/15 dark:bg-emerald-500/10',
        orb2: 'bg-teal-400/10 dark:bg-teal-500/5',
      };
    }
    if (path === '/businesses/financial-services') {
      return {
        bg: 'bg-gradient-to-b from-amber-50/60 via-slate-50 to-yellow-50/30 dark:from-[#15110B] dark:via-[#0B0E14] dark:to-[#15110B]',
        orb1: 'bg-eros-gold/15 dark:bg-eros-gold/10',
        orb2: 'bg-amber-400/10 dark:bg-amber-500/5',
      };
    }
    if (path === '/businesses/b2b-commercial') {
      return {
        bg: 'bg-gradient-to-b from-indigo-50/60 via-slate-50 to-blue-50/30 dark:from-[#0E0E18] dark:via-[#0B0E14] dark:to-[#0E0E18]',
        orb1: 'bg-indigo-500/15 dark:bg-indigo-500/10',
        orb2: 'bg-blue-400/10 dark:bg-blue-500/5',
      };
    }
    if (path === '/management-programme') {
      return {
        bg: 'bg-gradient-to-b from-yellow-50/60 via-slate-50 to-amber-50/30 dark:from-[#15130B] dark:via-[#0B0E14] dark:to-[#15130B]',
        orb1: 'bg-eros-gold/20 dark:bg-eros-gold/10',
        orb2: 'bg-yellow-400/10 dark:bg-yellow-500/5',
      };
    }
    if (path === '/leadership') {
      return {
        bg: 'bg-gradient-to-b from-fuchsia-50/60 via-slate-50 to-pink-50/30 dark:from-[#150B15] dark:via-[#0B0E14] dark:to-[#150B15]',
        orb1: 'bg-eros-pink/15 dark:bg-eros-pink/10',
        orb2: 'bg-fuchsia-400/10 dark:bg-fuchsia-500/5',
      };
    }
    if (path === '/brand-partners') {
      return {
        bg: 'bg-gradient-to-b from-sky-50/60 via-slate-50 to-cyan-50/30 dark:from-[#0B1017] dark:via-[#0B0E14] dark:to-[#0B1017]',
        orb1: 'bg-eros-bright/15 dark:bg-eros-bright/10',
        orb2: 'bg-cyan-400/10 dark:bg-cyan-500/5',
      };
    }
    if (path === '/projects') {
      return {
        bg: 'bg-gradient-to-b from-violet-50/60 via-slate-50 to-purple-50/30 dark:from-[#110B16] dark:via-[#0B0E14] dark:to-[#110B16]',
        orb1: 'bg-violet-500/15 dark:bg-violet-500/10',
        orb2: 'bg-purple-400/10 dark:bg-purple-500/5',
      };
    }
    if (path === '/gallery') {
      return {
        bg: 'bg-gradient-to-b from-stone-50/70 via-slate-50 to-orange-50/30 dark:from-[#0F0E13] dark:via-[#0B0E14] dark:to-[#0F0E13]',
        orb1: 'bg-eros-cyan/10 dark:bg-eros-cyan/5',
        orb2: 'bg-eros-pink/10 dark:bg-eros-pink/5',
      };
    }
    if (path === '/impact') {
      return {
        bg: 'bg-gradient-to-b from-teal-50/60 via-slate-50 to-emerald-50/30 dark:from-[#0B1313] dark:via-[#0B0E14] dark:to-[#0B1313]',
        orb1: 'bg-teal-500/15 dark:bg-teal-500/10',
        orb2: 'bg-emerald-400/10 dark:bg-emerald-500/5',
      };
    }
    if (path === '/careers') {
      return {
        bg: 'bg-gradient-to-b from-orange-50/60 via-slate-50 to-amber-50/30 dark:from-[#150E0B] dark:via-[#0B0E14] dark:to-[#150E0B]',
        orb1: 'bg-orange-500/15 dark:bg-orange-500/10',
        orb2: 'bg-eros-gold/10 dark:bg-eros-gold/5',
      };
    }
    if (path.startsWith('/news')) {
      return {
        bg: 'bg-gradient-to-b from-blue-50/60 via-slate-50 to-sky-50/30 dark:from-[#0B0E16] dark:via-[#0B0E14] dark:to-[#0B0E16]',
        orb1: 'bg-blue-500/15 dark:bg-blue-500/10',
        orb2: 'bg-sky-400/10 dark:bg-sky-500/5',
      };
    }
    if (path === '/contact') {
      return {
        bg: 'bg-gradient-to-b from-cyan-50/60 via-slate-50 to-teal-50/30 dark:from-[#0B1315] dark:via-[#0B0E14] dark:to-[#0B1315]',
        orb1: 'bg-eros-cyan/20 dark:bg-eros-cyan/10',
        orb2: 'bg-teal-400/10 dark:bg-teal-500/5',
      };
    }

    // Default fallback theme
    return {
      bg: 'bg-slate-50 dark:bg-[#0B0E14]',
      orb1: 'bg-eros-cyan/10 dark:bg-eros-cyan/5',
      orb2: 'bg-eros-gold/10 dark:bg-eros-gold/5',
    };
  };

  const currentTheme = getPageThemeClasses(pathname);

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out relative ${currentTheme.bg}`}>
      {/* Dynamic Ambient Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] transition-all duration-700 ${currentTheme.orb1}`} />
        <div className={`absolute top-1/3 -right-32 w-96 h-96 rounded-full blur-[120px] transition-all duration-700 ${currentTheme.orb2}`} />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
