import { Briefcase, Film, CreditCard, View } from 'lucide-react';
export default function Projects() {
  return (
    <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2">Portfolio</h2>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10">Featured Projects</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mb-16">
                Our 100+ member team has successfully executed massive outreach campaigns across diverse sectors. From entertainment to high-finance, our direct engagement strategies deliver measurable results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Project 1: Bollywood */}
                <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 shadow-lg bento-glow group transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-eros-pink/10 border border-eros-pink/30 text-eros-pink flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Film className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">Bollywood Movie Outreach & Promotions</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                        We spearheaded on-ground promotional campaigns for major Bollywood releases. By engaging directly with target demographics in high-footfall areas, our ambassadors significantly boosted opening weekend awareness and ticket pre-sales through interactive, high-energy marketing.
                    </p>
                    <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-eros-border/50 text-xs text-slate-500 dark:text-slate-300 rounded-md">Entertainment</div>
                </div>

                {/* Project 2: Banking */}
                <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 shadow-lg bento-glow group transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-eros-gold/10 border border-eros-gold/30 text-eros-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <CreditCard className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">Banking Network Credit Card Acquisitions</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                        Partnering with top-tier financial institutions, we deployed our team to secure high-value credit card acquisitions. Through ethical, face-to-face consultations, we educated consumers on financial products, building trust and driving a massive surge in verified card approvals.
                    </p>
                    <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-eros-border/50 text-xs text-slate-500 dark:text-slate-300 rounded-md">Financial Services</div>
                </div>

                {/* Project 3: Google 360 */}
                <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl p-8 shadow-lg bento-glow group transition-all">
                    <div className="w-14 h-14 rounded-2xl bg-eros-cyan/10 border border-eros-cyan/30 text-eros-cyan flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <View className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3">Google 360° Property Publishing</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                        We revolutionized real estate and commercial property visibility by leveraging the Google 360° platform. Our team managed the outreach and onboarding of commercial properties, publishing immersive 360-degree virtual tours that exponentially increased their online engagement and physical foot traffic.
                    </p>
                    <div className="inline-block px-3 py-1 bg-slate-100 dark:bg-eros-border/50 text-xs text-slate-500 dark:text-slate-300 rounded-md">Technology & Real Estate</div>
                </div>
            </div>
        </div>
    </section>
  )
}
