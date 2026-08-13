import { Users, Target, TrendingUp, Award, CheckCircle2, View, CreditCard, Heart, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Capabilities() {
  const businessDivisions = [
    {
      title: "Google 360° Property Publishing",
      desc: "Capture and publish high-resolution HDR virtual tours to Google Street View and Google Maps, boosting local search visibility and walk-in engagement.",
      icon: View,
      color: "text-eros-cyan",
      bgColor: "bg-eros-cyan/10",
      borderColor: "border-eros-cyan/30",
      href: "/businesses/google-360"
    },
    {
      title: "Financial Services & Banking Growth",
      desc: "Accelerating credit card acquisition, banking network expansion, and verified KYC compliance onboarding for premier financial institutions.",
      icon: CreditCard,
      color: "text-eros-gold",
      bgColor: "bg-eros-gold/10",
      borderColor: "border-eros-gold/30",
      href: "/businesses/financial-services"
    },
    {
      title: "Sales NGO & Donor Acquisition",
      desc: "Connecting non-profits and global charities with long-term recurring donors through passionate multi-channel public awareness campaigns.",
      icon: Heart,
      color: "text-eros-bright",
      bgColor: "bg-eros-bright/10",
      borderColor: "border-eros-bright/30",
      href: "/businesses/sales-ngo"
    },
    {
      title: "B2B Commercial Sales & Expansion",
      desc: "Empowering enterprise brands to expand their corporate sales pipelines, vendor networks, and high-value account acquisitions.",
      icon: Briefcase,
      color: "text-eros-pink",
      bgColor: "bg-eros-pink/10",
      borderColor: "border-eros-pink/30",
      href: "/businesses/b2b-commercial"
    }
  ];

  const careerLevels = [
    "Business Associate",
    "Crew Leader",
    "Executive Crew Leader",
    "Assistant Business Head",
    "Business Head"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background 3D Glow */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-eros-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-eros-cyan">What We Offer</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-6">Our 4 Core Business Divisions</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    Eros Inc. provides specialized omnichannel sales, spatial VR publishing, financial distribution, and non-profit donor acquisition solutions designed to drive tangible business expansion.
                </p>
            </div>

            {/* Grid of Business Divisions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {businessDivisions.map((bus, idx) => {
                  const IconComp = bus.icon;
                  return (
                    <div key={idx} className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-8 rounded-3xl bento-glow shadow-lg transition flex flex-col justify-between group">
                        <div>
                          <div className={`w-14 h-14 rounded-2xl ${bus.bgColor} ${bus.borderColor} border ${bus.color} flex items-center justify-center mb-6`}>
                              <IconComp className="w-7 h-7"/>
                          </div>
                          <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-eros-cyan transition">{bus.title}</h3>
                          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                              {bus.desc}
                          </p>
                        </div>
                        <div>
                          <Link href={bus.href} className="inline-flex items-center gap-2 text-sm font-bold text-eros-cyan hover:text-eros-bright transition">
                            Explore Catalogue <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                    </div>
                  );
                })}
            </div>

            {/* Career Trajectory Banner */}
            <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-10 rounded-3xl bento-glow shadow-xl">
                <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-2">Structured Career Progression</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">Every leader at Eros Inc. progresses through 5 defined leadership stages:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                    {careerLevels.map((level, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-slate-50 dark:bg-eros-bg/80 p-4 rounded-xl border border-slate-200 dark:border-eros-border/60">
                            <CheckCircle2 className="w-5 h-5 text-eros-cyan flex-shrink-0" />
                            <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">{level}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-right">
                    <Link href="/contact" className="inline-block px-8 py-3.5 rounded-full bg-eros-cyan text-slate-950 font-bold text-sm hover:bg-eros-bright transition uppercase tracking-wider">
                        Partner With Us
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
