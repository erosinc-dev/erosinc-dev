import React from 'react';
import Link from 'next/link';
import { Film, Sparkles, Megaphone, Star, Award, CheckCircle2, ArrowUpRight, Camera, Tv, Share2, Users } from 'lucide-react';

export default function FilmPromotionsPage() {
  const services = [
    { title: "Film Launch & Promotional Campaigns", icon: Film, desc: "High-impact pre-release buzz, theatrical trailer launches, and nationwide promotional tours." },
    { title: "Celebrity PR & Personal Branding", icon: Star, desc: "Strategic positioning, image management, and personal brand building for artists and public figures." },
    { title: "Media & Press Relations", icon: Megaphone, desc: "Press conferences, exclusive media coverage, print & digital interviews, and press releases." },
    { title: "Interviews & Media Appearances", icon: Tv, desc: "Coordinating TV interviews, podcast features, radio chats, and digital show appearances." },
    { title: "Social Media & Digital Promotions", icon: Share2, desc: "Viral digital campaigns, reel trends, social media takeovers, and audience engagement." },
    { title: "Event & Red Carpet Promotions", icon: Camera, desc: "Red carpet premieres, fan meets, music launches, and trailer premiere events." },
    { title: "Brand Collaborations & Endorsements", icon: Award, desc: "Connecting films and celebrities with top corporate brands for co-promotions and sponsorships." },
    { title: "Influencer & Entertainment Partnerships", icon: Users, desc: "High-reach influencer activations, creator meets, and entertainment platform cross-promotions." },
    { title: "Movie Release Promotions", icon: Sparkles, desc: "Targeted opening weekend buzz, box-office momentum, and audience engagement." },
    { title: "Publicity & Buzz Creation", icon: Megaphone, desc: "Creative storytelling, trending PR campaigns, and continuous public visibility." },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-eros-pink/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-eros-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-wider">
          <Link href="/" className="hover:text-eros-cyan transition">Home</Link>
          <span>/</span>
          <Link href="/capabilities" className="hover:text-eros-cyan transition">Businesses</Link>
          <span>/</span>
          <span className="text-eros-pink font-bold">Film Promotion & Celebrity PR</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-eros-pink/10 border border-eros-pink/30 text-eros-pink text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" /> Entertainment & PR Division
          </div>
          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
            Film Promotion <br/>
            <span className="dynamic-title">& Celebrity PR</span>
          </h1>
          <p className="text-xl font-medium text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            We create visibility, build buzz, and connect films and celebrities with the right audience.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Our Film Promotion & Celebrity PR services are designed to create strong public attention around movies, artists, and entertainment projects. From pre-release buzz to post-release visibility, we develop strategic promotional campaigns that help build awareness, strengthen celebrity presence, and generate meaningful audience engagement.
          </p>
        </div>

        {/* High-Resolution Team & Campaign Photo */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-slate-200 dark:border-eros-border shadow-2xl relative aspect-[16/9] group">
          <img 
            src="/gallery/new_event_03.jpg" 
            alt="Bollywood & Film Promotion Campaign" 
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-8 sm:p-12">
            <span className="text-eros-gold text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
              <Film className="w-4 h-4" /> Bollywood & Entertainment Outreach
            </span>
            <h2 className="text-white font-heading font-extrabold text-2xl sm:text-3xl max-w-2xl leading-snug">
              Creating High-Impact Visibility & Nationwide Media Engagement
            </h2>
          </div>
        </div>

        {/* Services Grid (10 Core Services) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-eros-pink block mb-2">Capabilities</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Our Promotional Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-8 rounded-3xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition duration-300 group hover:border-eros-pink/50">
                  <div className="p-3.5 rounded-2xl bg-eros-pink/10 text-eros-pink w-fit mb-5 group-hover:scale-110 transition duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-eros-pink transition">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strategic Approach Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-2xl mb-20">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-eros-gold block">Our Strategic Approach</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold leading-tight">
              Combining Storytelling, PR & Digital Innovation
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We combine creative storytelling, strategic PR, media relationships, and digital platforms to make every film and celebrity campaign more visible, engaging, and memorable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm font-semibold text-slate-200">
              <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-eros-pink" /> 360-Degree Pre-Release Buzz</div>
              <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-eros-pink" /> Nationwide Press & Media Tours</div>
              <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-eros-pink" /> High-Engagement Influencer Trends</div>
              <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-eros-pink" /> Red Carpet & Premiere Activations</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-12 rounded-3xl shadow-xl">
          <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white mb-4">Promote Your Next Film or Celebrity Campaign</h2>
          <p className="text-slate-600 dark:text-slate-400 text-base max-w-xl mx-auto mb-8">
            Connect with our Entertainment & PR division to design a high-visibility media rollout.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-eros-pink hover:bg-rose-600 text-white font-extrabold text-sm transition-all transform hover:scale-105 shadow-lg shadow-eros-pink/25 uppercase tracking-wider">
            Launch Promotion Campaign <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
