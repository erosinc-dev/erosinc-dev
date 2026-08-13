import { Globe, Heart, ShieldCheck, Users } from 'lucide-react';

export default function Impact() {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-eros-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-eros-cyan">Social Purpose</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-6">Social Impact & NGO Outreach</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    At Eros Inc., we champion causes that matter. Our multi-channel community campaigns connect non-profits directly with long-term donors, driving sustainable funding and community awareness.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white dark:bg-eros-card p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-eros-border shadow-xl">
                    <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4">Empowering Non-Profits</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                        We actively partner with leading global charities and local NGOs to amplify their humanitarian missions. By giving these organizations an authentic, human-centered voice, we build trust and long-term commitment.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-eros-cyan flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">100% Ethical & Transparent Onboarding</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Heart className="w-5 h-5 text-eros-pink flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">Sustained Long-Term Donor Retention</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Users className="w-5 h-5 text-eros-gold flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300 font-medium">Direct On-Ground Community Representation</span>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-eros-border shadow-2xl aspect-[4/3]">
                    <img src="/gallery/new_event_03.jpg" alt="NGO Campaign Outreach" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
            </div>
        </div>
    </section>
  )
}
