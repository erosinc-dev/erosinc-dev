'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const aboutLinks = [
    { name: 'Our Philosophy', href: '/philosophy' },
    { name: 'Executive Leadership', href: '/leadership' },
    { name: 'Practical Management Programme', href: '/management-programme' },
    { name: 'Social Impact', href: '/impact' },
  ];

  const businessLinks = [
    { name: 'Capabilities Overview', href: '/capabilities' },
    { name: 'Google 360° Publishing', href: '/businesses/google-360' },
    { name: 'Financial Services', href: '/businesses/financial-services' },
    { name: 'Film Promotion & Celebrity PR', href: '/businesses/film-promotions' },
    { name: 'B2B Commercial Sales', href: '/businesses/b2b-commercial' },
    { name: 'Brand Partners', href: '/brand-partners' },
  ];

  const workLinks = [
    { name: 'Projects & Portfolio', href: '/projects' },
    { name: 'Culture & Gallery', href: '/gallery' },
    { name: 'Latest News', href: '/news' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-slate-200 dark:border-eros-border/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-22 md:h-24 flex items-center justify-between">
            {/* Logo Link */}
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group py-1">
                <img 
                    src="/logo.png" 
                    alt="Eros Inc Logo" 
                    width={242}
                    height={84}
                    className="h-12 sm:h-14 md:h-16 w-auto object-contain logo-blend transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md" 
                />
            </Link>
            
            {/* Desktop Navigation (Streamlined to 4 Dropdowns/Links + Careers + CTA) */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700 dark:text-slate-200">
                <Link href="/" className="hover:text-eros-cyan transition">
                  Home
                </Link>

                {/* About Dropdown */}
                <div className="relative group">
                    <button className="flex items-center gap-1.5 hover:text-eros-cyan transition py-2">
                        About Us <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-eros-cyan transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-60 bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 px-1 space-y-1">
                        {aboutLinks.map((item) => (
                            <Link 
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-eros-cyan transition text-xs font-semibold"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Our Businesses Dropdown */}
                <div className="relative group">
                    <button className="flex items-center gap-1.5 hover:text-eros-cyan transition py-2">
                        Our Businesses <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-eros-cyan transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 px-1 space-y-1">
                        {businessLinks.map((biz) => (
                            <Link 
                                key={biz.name}
                                href={biz.href}
                                className="block px-4 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-eros-cyan transition text-xs font-semibold"
                            >
                                {biz.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Work & Culture Dropdown */}
                <div className="relative group">
                    <button className="flex items-center gap-1.5 hover:text-eros-cyan transition py-2">
                        Work & Media <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-eros-cyan transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 px-1 space-y-1">
                        {workLinks.map((work) => (
                            <Link 
                                key={work.name}
                                href={work.href}
                                className="block px-4 py-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-eros-cyan transition text-xs font-semibold"
                            >
                                {work.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <Link href="/careers" className="text-eros-gold hover:text-eros-bright transition">
                  Careers
                </Link>
            </nav>

            <div className="flex items-center gap-3">
                <ThemeToggle />
                
                <Link href="/contact" className="hidden sm:block px-6 py-3 rounded-full bg-eros-cyan hover:bg-eros-bright text-slate-950 font-extrabold text-xs transition-all transform hover:scale-105 shadow-lg shadow-eros-cyan/25 uppercase tracking-wider">
                    Partner With Us
                </Link>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Navigation Menu"
                    className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border text-slate-900 dark:text-white hover:text-eros-cyan transition-colors"
                >
                    {isOpen ? <X className="w-6 h-6 text-eros-cyan" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
        </div>

        {/* Mobile Slide-Down Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-eros-bg/95 backdrop-blur-xl border-b border-slate-200 dark:border-eros-border shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto">
              <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
                  <nav className="flex flex-col space-y-4">
                      <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white hover:text-eros-cyan">
                        Home
                      </Link>

                      {/* Mobile About Us */}
                      <div>
                          <span className="text-xs font-extrabold text-eros-cyan uppercase tracking-widest block mb-2">About Us</span>
                          <div className="pl-3 border-l-2 border-slate-200 dark:border-eros-border space-y-2">
                              {aboutLinks.map((item) => (
                                  <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block text-slate-700 dark:text-slate-300 hover:text-eros-cyan text-sm font-medium">
                                      {item.name}
                                  </Link>
                              ))}
                          </div>
                      </div>

                      {/* Mobile Businesses */}
                      <div>
                          <span className="text-xs font-extrabold text-eros-gold uppercase tracking-widest block mb-2">Our Businesses</span>
                          <div className="pl-3 border-l-2 border-slate-200 dark:border-eros-border space-y-2">
                              {businessLinks.map((biz) => (
                                  <Link key={biz.name} href={biz.href} onClick={() => setIsOpen(false)} className="block text-slate-700 dark:text-slate-300 hover:text-eros-cyan text-sm font-medium">
                                      {biz.name}
                                  </Link>
                              ))}
                          </div>
                      </div>

                      {/* Mobile Work & Media */}
                      <div>
                          <span className="text-xs font-extrabold text-eros-pink uppercase tracking-widest block mb-2">Work & Media</span>
                          <div className="pl-3 border-l-2 border-slate-200 dark:border-eros-border space-y-2">
                              {workLinks.map((work) => (
                                  <Link key={work.name} href={work.href} onClick={() => setIsOpen(false)} className="block text-slate-700 dark:text-slate-300 hover:text-eros-cyan text-sm font-medium">
                                      {work.name}
                                  </Link>
                              ))}
                          </div>
                      </div>

                      <Link href="/careers" onClick={() => setIsOpen(false)} className="text-lg font-bold text-eros-gold hover:text-eros-bright">
                        Careers & Trainee Program
                      </Link>
                  </nav>

                  <div className="pt-4 border-t border-slate-200 dark:border-eros-border/60">
                      <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="w-full py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright text-slate-950 font-extrabold text-center block uppercase tracking-wider text-sm shadow-lg shadow-eros-cyan/25 flex items-center justify-center gap-2"
                      >
                        Partner With Us <ArrowUpRight className="w-4 h-4" />
                      </Link>
                  </div>
              </div>
          </div>
        )}
    </header>
  );
}
