import { Mail, Briefcase, Award, CheckCircle2, ArrowRight, UploadCloud } from 'lucide-react';
import Link from 'next/link';

export default function Careers() {
  const roles = [
    { title: "Business Associate", desc: "Learn multichannel sales strategies, digital brand representation, and client engagement fundamentals." },
    { title: "Crew Leader", desc: "Lead on-ground team operations, mentor new associates, and drive sales targets." },
    { title: "Executive Crew Leader", desc: "Oversee campaign strategies, team expansion, and operational quality control." },
    { title: "Assistant Business Head", desc: "Manage client acquisitions, team administration, and leadership development." },
    { title: "Business Head", desc: "Run independent branch operations, manage enterprise brand relationships, and lead business growth." }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-eros-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-eros-gold">Career Opportunities</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-4">Join The Leadership Program</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    At Eros Inc., we believe in 100% merit-based growth. We don't hire managers from outside — every single leader starts from the ground up and builds their career with support and mentorship.
                </p>
            </div>

            {/* Email Dropbox Card */}
            <div className="bg-gradient-to-r from-eros-cyan/10 via-eros-gold/10 to-eros-pink/10 border border-eros-cyan/30 rounded-3xl p-8 md:p-12 mb-16 shadow-2xl backdrop-blur-md">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-eros-cyan/20 rounded-full text-eros-cyan text-xs font-bold uppercase tracking-wider">
                            <UploadCloud className="w-4 h-4" /> Direct Resume Dropbox
                        </div>
                        <h2 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">Ready to Accelerate Your Career?</h2>
                        <p className="text-slate-600 dark:text-slate-300 text-base max-w-xl">
                            Send your updated resume / CV directly to our HR team at <strong className="text-eros-cyan dark:text-eros-bright font-bold">hr@erosinc.in</strong>. Our recruitment team reviews applications within 24 hours.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <a 
                            href="mailto:hr@erosinc.in?subject=Application%20for%20Trainee%20Leadership%20Program%20-%20Eros%20Inc&body=Hi%20HR%20Team%2C%0A%0AI%20am%20interested%20in%20joining%20Eros%20Inc.%20Please%20find%20my%20resume%20attached.%0A%0AFull%20Name%3A%20%0APhone%20Number%3A%20%0AState%2FCity%3A%20" 
                            className="px-8 py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright text-slate-950 font-bold flex items-center justify-center gap-3 transition shadow-xl shadow-eros-cyan/20 whitespace-nowrap"
                        >
                            <Mail className="w-5 h-5" />
                            Email Resume to hr@erosinc.in
                        </a>
                    </div>
                </div>
            </div>

            {/* Career Stages Grid */}
            <div className="mb-16">
                <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">5-Stage Merit Growth Trajectory</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {roles.map((role, idx) => (
                        <div key={idx} className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-6 rounded-2xl bento-glow shadow-md flex flex-col justify-between">
                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2">Stage 0{idx + 1}</div>
                                <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-3">{role.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-4">{role.desc}</p>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-eros-gold pt-3 border-t border-slate-100 dark:border-eros-border/40">
                                <CheckCircle2 className="w-4 h-4" /> 100% Internal Promotion
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
