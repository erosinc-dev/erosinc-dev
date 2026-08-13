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
                    At Eros Inc., we champion causes that matter. Our direct face-to-face campaigns connect non-profits directly with long-term donors, driving sustainable funding and community awareness.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-10 rounded-3xl bento-glow shadow-xl">
                    <div className="w-16 h-16 rounded-2xl bg-eros-cyan/10 border border-eros-cyan/30 text-eros-cyan flex items-center justify-center mb-8">
                        <Globe className="w-8 h-8"/>
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4">Amplifying Non-Profit Reach</h2>
                    <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                        We actively partner with leading global charities and local NGOs to amplify their humanitarian missions. By giving these organizations a human, face-to-face voice, we build trust and long-term commitment.
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
                    <img src="/scraped/image_15.jpg" alt="NGO Campaign Outreach" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </section>
  )
}
