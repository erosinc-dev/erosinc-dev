import { Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Leadership() {
  const teamMembers = [
    { name: "Jeevan Munde", role: "Founder & MD, Eros Inc.", img: "/team/jeevan_munde.jpg", color: "text-eros-cyan", borderColor: "group-hover:border-eros-cyan" },
    { name: "Sukhada Dalvi", role: "Executive Crew Leader", img: "/team/sukhada_dalvi.jpg", color: "text-eros-gold", borderColor: "group-hover:border-eros-gold" },
    { name: "Vishakh Satyan", role: "Trainer", img: "/team/vishakh_satyan.jpg", color: "text-eros-pink", borderColor: "group-hover:border-eros-pink" },
    { name: "Ashish Mane", role: "Trainer", img: "/team/ashish_mane.jpg", color: "text-eros-bright", borderColor: "group-hover:border-eros-bright" },
    { name: "Sairaj Jopale", role: "Crew Leader", img: "/team/sairaj_jopale.jpg", color: "text-eros-cyan", borderColor: "group-hover:border-eros-cyan" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-xs font-bold uppercase tracking-widest text-eros-pink mb-2">Leadership Lab</h2>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Meet Our Executive Team</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    Driven by passion, integrity, and a commitment to excellence. At Eros Inc., every executive moves up based purely on output, leadership capability, and emotional intelligence.
                </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="text-center group bg-white dark:bg-eros-card/50 p-6 rounded-2xl border border-slate-200 dark:border-eros-border/50 bento-glow transition">
                        <div className={`w-40 h-40 rounded-full bg-slate-200 dark:bg-eros-card mb-4 overflow-hidden mx-auto border-4 border-white dark:border-eros-bg shadow-lg ${member.borderColor} transition-colors`}>
                            <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                        </div>
                        <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
                        <p className={`text-xs font-semibold uppercase tracking-wider mt-1 ${member.color}`}>{member.role}</p>
                    </div>
                ))}
            </div>

            {/* Merit-Based Growth Program */}
            <div className="max-w-4xl mx-auto bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-10 rounded-3xl bento-glow shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-eros-pink/10 border border-eros-pink/30 text-eros-pink flex items-center justify-center mb-8">
                    <Award className="w-8 h-8"/>
                </div>
                <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4">Internal Promotion & Trajectory</h2>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                    No seniority shortcuts. Every leader at Eros Inc. began their trajectory from entry-level roles and developed into management through hands-on coaching and proven results.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    Our management training program provides intensive mentoring in direct sales, client relationship management, team building, public speaking, and business administration.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-eros-pink hover:bg-eros-pink/90 text-white transition font-bold shadow-lg shadow-eros-pink/20">
                    Apply for the Program <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    </section>
  )
}
