'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBusinessesOpen, setIsBusinessesOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Philosophy', href: '/philosophy' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Impact', href: '/impact' },
    { name: 'Careers', href: '/careers', highlight: true },
    { name: 'News', href: '/news' },
  ];

  const businessLinks = [
    { name: 'Google 360', href: '/businesses/google-360' },
    { name: 'Financial Services', href: '/businesses/financial-services' },
    { name: 'Sales NGO', href: '/businesses/sales-ngo' },
    { name: 'B2B Commercial', href: '/businesses/b2b-commercial' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-slate-200 dark:border-eros-border/70 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-22 md:h-24 flex items-center justify-between">
            {/* Logo Link */}
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group py-1">
                <img 
                    src="/logo.png" 
                    alt="Eros Inc Logo" 
                    className="h-12 sm:h-14 md:h-16 w-auto object-contain logo-blend transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md" 
                />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                {navLinks.slice(0, 3).map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`hover:text-eros-cyan transition font-semibold`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Dropdown for Businesses */}
                <div className="relative group">
                    <button 
                        className="flex items-center gap-1 hover:text-eros-cyan transition font-semibold"
                        onClick={() => setIsBusinessesOpen(!isBusinessesOpen)}
                    >
                        Our Businesses <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                        {businessLinks.map((biz) => (
                            <Link 
                                key={biz.name}
                                href={biz.href}
                                className="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-eros-cyan transition text-sm"
                            >
                                {biz.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {navLinks.slice(3).map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`hover:text-eros-cyan transition font-semibold ${link.highlight ? 'text-eros-gold' : ''}`}
                  >
                    {link.name}
                  </Link>
                ))}
            </nav>

            <div className="flex items-center gap-3">
                <ThemeToggle />
                
                <Link href="/contact" className="hidden sm:block px-6 py-3 rounded-full bg-eros-cyan hover:bg-eros-bright text-slate-950 font-extrabold text-sm transition-all transform hover:scale-105 shadow-lg shadow-eros-cyan/25 uppercase tracking-wider">
                    Partner With Us
                </Link>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Navigation Menu"
                    className="md:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border text-slate-900 dark:text-white hover:text-eros-cyan transition-colors"
                >
                    {isOpen ? <X className="w-6 h-6 text-eros-cyan" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
        </div>

        {/* Mobile Slide-Down Menu Overlay */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-eros-bg/95 backdrop-blur-xl border-b border-slate-200 dark:border-eros-border shadow-2xl transition-all duration-300 animate-in slide-in-from-top duration-300 max-h-[80vh] overflow-y-auto">
              <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
                  <nav className="flex flex-col space-y-2">
                      {navLinks.slice(0, 3).map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg font-semibold px-4 py-2.5 rounded-xl transition-colors text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-eros-card hover:text-eros-cyan`}
                        >
                          {link.name}
                        </Link>
                      ))}

                      {/* Mobile Businesses Section */}
                      <div className="px-4 py-2.5">
                          <span className="text-sm font-bold text-eros-gold uppercase tracking-widest mb-2 block">Our Businesses</span>
                          <div className="flex flex-col space-y-2 pl-4 border-l-2 border-slate-200 dark:border-eros-border">
                              {businessLinks.map((biz) => (
                                  <Link
                                      key={biz.name}
                                      href={biz.href}
                                      onClick={() => setIsOpen(false)}
                                      className="text-md font-semibold text-slate-600 dark:text-slate-400 hover:text-eros-cyan py-1"
                                  >
                                      {biz.name}
                                  </Link>
                              ))}
                          </div>
                      </div>

                      {navLinks.slice(3).map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-lg font-semibold px-4 py-2.5 rounded-xl transition-colors ${
                            link.highlight 
                              ? 'text-eros-gold bg-eros-gold/10 border border-eros-gold/20' 
                              : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-eros-card hover:text-eros-cyan'
                          }`}
                        >
                          {link.name}
                        </Link>
                      ))}
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
