import React from 'react';
import Link from 'next/link';
import { Award, BookOpen, CheckCircle2, ChevronRight, GraduationCap, Rocket, Target, Users, Zap, ShieldCheck } from 'lucide-react';

export default function ManagementProgramme() {
  const certImages = [
    { src: '/certificates/cert_01.jpg', alt: 'Certificate Award Ceremony 1', title: 'Foundation Program Completion' },
    { src: '/certificates/cert_02.jpg', alt: 'Certificate Award Ceremony 2', title: 'Certificate of Appreciation' },
    { src: '/certificates/cert_03.jpg', alt: 'Certificate Award Ceremony 3', title: 'Recognition of Excellence' },
    { src: '/certificates/cert_04.jpg', alt: 'Certificate Award Ceremony 4', title: 'Leadership Advancement' },
    { src: '/certificates/cert_05.jpg', alt: 'Certificate Award Ceremony 5', title: 'Team Building & Performance' },
  ];

  const foundationSkills = [
    'Smart Selling', 'Business Communication', 'Brand Promotion', 'Confidence Building',
    'Time Management', 'Market Analysis', 'Customer Service', 'Quality Management',
    'Client Representation', 'Public Speaking'
  ];

  const appreciationSkills = [
    'Training & Development', 'Sales Analysis', 'New Customer Acquisition',
    'Facilitation Skills', 'Recruitment Skills', 'Quality & Brand Awareness'
  ];

  const excellenceSkills = [
    'Public Speaking', 'Team Management', 'Business Strategy Planning',
    'Team Profitability', 'ROI Management'
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-eros-cyan/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-eros-gold/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eros-cyan/10 border border-eros-cyan/30 text-xs font-bold uppercase tracking-widest text-eros-cyan mb-6">
            <GraduationCap className="w-4 h-4 text-eros-cyan" />
            Practical Training While You Work
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Learn. Work. <span className="dynamic-title">Grow.</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
            We believe the best way to learn is through real-world experience. That’s why our training program combines practical learning with on-the-job experience, helping you develop professional skills while working with real customers, brands, and business opportunities.
          </p>
          <div className="inline-block p-6 rounded-2xl bg-white dark:bg-eros-card/70 border border-slate-200 dark:border-eros-border shadow-xl backdrop-blur-md">
            <p className="font-semibold text-slate-800 dark:text-slate-200 text-base md:text-lg">
              Our goal is simple — to develop skilled professionals who can create amazing customer experiences and inspire the next generation of entrepreneurs.
            </p>
          </div>
        </div>

        {/* Certificate Gallery Showcase */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-eros-gold mb-2 block">Real Milestone Celebrations</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Our Certified Achievers</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">Every step of your career trajectory at Eros Inc. is recognized with official certification.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certImages.map((cert, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-lg hover:shadow-2xl transition duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={cert.src} 
                    alt={cert.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">
                  <div className="inline-flex items-center gap-2 text-eros-gold text-xs font-bold uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4" />
                    <span>Certified Milestone</span>
                  </div>
                  <h3 className="font-heading text-white text-lg font-bold">{cert.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Stages & Curriculum */}
        <div className="space-y-16 mb-24">
          
          {/* Stage 1: 30-Day Foundation Program */}
          <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden bento-glow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-eros-cyan/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eros-cyan/10 text-eros-cyan text-xs font-extrabold uppercase tracking-wider mb-4 border border-eros-cyan/20">
                  <Target className="w-4 h-4" /> Phase 01
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">30-Day Foundation Program</h2>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-base max-w-2xl leading-relaxed">
                  The first training cycle is designed to build a strong foundation in sales, marketing, communication, and professional development.
                </p>
              </div>
              <div className="px-5 py-2.5 rounded-2xl bg-slate-100 dark:bg-eros-bg text-slate-900 dark:text-white font-bold text-sm border border-slate-200 dark:border-eros-border whitespace-nowrap">
                Foundation Level
              </div>
            </div>

            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-4">Practical Training In:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {foundationSkills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-eros-border/60 text-slate-800 dark:text-slate-200 text-sm font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-eros-cyan shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stage 2: Certificate of Appreciation */}
          <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden bento-glow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-eros-gold/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eros-gold/10 text-eros-gold text-xs font-extrabold uppercase tracking-wider mb-4 border border-eros-gold/20">
                  <Award className="w-4 h-4" /> Phase 02
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Certificate of Appreciation</h2>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-base max-w-2xl leading-relaxed">
                  After successfully completing the foundation stage, you will progress towards developing recruitment and team-building skills.
                </p>
              </div>
              <div className="px-5 py-2.5 rounded-2xl bg-slate-100 dark:bg-eros-bg text-slate-900 dark:text-white font-bold text-sm border border-slate-200 dark:border-eros-border whitespace-nowrap">
                Team Builder Stage
              </div>
            </div>

            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-4">Key Skill Development Areas:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {appreciationSkills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-eros-border/60 text-slate-800 dark:text-slate-200 font-semibold">
                  <ShieldCheck className="w-5 h-5 text-eros-gold shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stage 3: Certificate of Excellence */}
          <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden bento-glow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-eros-pink/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-8 items-start justify-between mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-eros-pink/10 text-eros-pink text-xs font-extrabold uppercase tracking-wider mb-4 border border-eros-pink/20">
                  <Rocket className="w-4 h-4" /> Phase 03
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Certificate of Excellence</h2>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-base max-w-2xl leading-relaxed">
                  As you progress, the program focuses on developing leadership, management, and business strategy skills to run independent business operations.
                </p>
              </div>
              <div className="px-5 py-2.5 rounded-2xl bg-slate-100 dark:bg-eros-bg text-slate-900 dark:text-white font-bold text-sm border border-slate-200 dark:border-eros-border whitespace-nowrap">
                Executive Leadership
              </div>
            </div>

            <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-4">Advanced Management Pillars:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {excellenceSkills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-eros-border/60 text-slate-800 dark:text-slate-200 font-semibold">
                  <Zap className="w-5 h-5 text-eros-pink shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Conclusion Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-eros-cyan/20 via-eros-gold/20 to-eros-pink/20 p-1 border border-slate-200 dark:border-eros-border shadow-2xl">
          <div className="bg-white dark:bg-eros-bg rounded-[22px] p-8 md:p-14 text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2 block">Career Progression Path</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
              From Learning to Leadership
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Our training journey is designed to help you progress from learning the fundamentals to taking responsibility, managing teams, and understanding business strategy.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-3 text-slate-900 dark:text-white font-extrabold text-base md:text-xl py-3 px-6 rounded-full bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-inner">
              <span>Work.</span>
              <span className="text-eros-cyan">•</span>
              <span>Learn.</span>
              <span className="text-eros-gold">•</span>
              <span>Build Skills.</span>
              <span className="text-eros-pink">•</span>
              <span className="text-eros-bright">Grow Into Leadership.</span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/careers" 
                className="px-8 py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright text-slate-950 font-bold transition shadow-xl uppercase tracking-wider text-sm flex items-center justify-center gap-2"
              >
                Apply For Trainee Program <ChevronRight className="w-5 h-5" />
              </Link>
              <a 
                href="mailto:hello@erosinc.in" 
                className="px-8 py-4 rounded-xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border text-slate-900 dark:text-white hover:bg-slate-100 font-semibold transition text-sm flex items-center justify-center gap-2"
              >
                Questions? Email hello@erosinc.in
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
