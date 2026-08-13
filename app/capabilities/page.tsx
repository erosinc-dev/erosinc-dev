import { Users, Target, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Capabilities() {
  const capabilitiesList = [
    {
      title: "Direct Face-to-Face Marketing",
      desc: "In an automated digital world, human trust is the ultimate differentiator. Our team connects directly with target audiences to build lasting brand relationships.",
      icon: Users,
      color: "text-eros-cyan",
      bgColor: "bg-eros-cyan/10",
      borderColor: "border-eros-cyan/30"
    },
    {
      title: "Brand Acquisition & Client Servicing",
      desc: "We specialize in acquiring high-value customers for leading institutions across financial services, healthcare, digital marketing, and social media.",
      icon: Target,
      color: "text-eros-gold",
      bgColor: "bg-eros-gold/10",
      borderColor: "border-eros-gold/30"
    },
    {
      title: "Sales & Marketing Execution",
      desc: "Combining creativity, data-backed insights, and cutting-edge tools to design direct marketing solutions that deliver measurable revenue growth.",
      icon: TrendingUp,
      color: "text-eros-pink",
      bgColor: "bg-eros-pink/10",
      borderColor: "border-eros-pink/30"
    },
    {
      title: "Service & Management Development",
      desc: "Empowering our 100+ member team with structured mentorship, leadership training, and operational management skills.",
      icon: Award,
      color: "text-eros-bright",
      bgColor: "bg-eros-bright/10",
      borderColor: "border-eros-bright/30"
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
                <h2 className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2">What We Offer</h2>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Our Core Capabilities</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    Eros Inc. provides end-to-end direct marketing, brand acquisition, and leadership training programs designed to drive tangible business expansion.
                </p>
            </div>

            {/* Grid of Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {capabilitiesList.map((cap, idx) => {
                  const IconComp = cap.icon;
                  return (
                    <div key={idx} className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-8 rounded-3xl bento-glow shadow-lg transition">
                        <div className={`w-14 h-14 rounded-2xl ${cap.bgColor} ${cap.borderColor} border ${cap.color} flex items-center justify-center mb-6`}>
                            <IconComp className="w-7 h-7"/>
                        </div>
                        <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-3">{cap.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            {cap.desc}
                        </p>
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
                    <Link href="/contact" className="inline-block px-8 py-3.5 rounded-full bg-eros-cyan text-slate-950 font-bold text-sm hover:bg-eros-bright transition">
                        Partner With Us
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}
