import { Heart, Target, Eye, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-eros-pink/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-eros-gold">About Us & Philosophy</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-6">Compete With Compassion</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    Eros Inc. is a dynamic growth-driven company dedicated to helping businesses build meaningful connections with their customers through innovative marketing solutions and strategic brand engagement.
                </p>
            </div>

            {/* Content & Scraped Image Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-8 rounded-3xl bento-glow shadow-lg">
                        <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                            <Heart className="w-6 h-6 text-eros-pink" />
                            Ethical Sales Scale
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Driven by innovation, data-backed insights, and a customer-first approach, we create impactful campaigns that enhance brand visibility, foster trust, and deliver measurable results. We believe every brand has a unique story, and our mission is to bring that story to life with creativity, precision, and purpose.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-6 rounded-2xl bento-glow">
                            <Target className="w-8 h-8 text-eros-cyan mb-4" />
                            <h4 className="font-heading font-bold text-slate-900 dark:text-white mb-2">Our Mission</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                To empower businesses with tailored marketing solutions that drive results and enhance customer engagement.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-6 rounded-2xl bento-glow">
                            <Eye className="w-8 h-8 text-eros-gold mb-4" />
                            <h4 className="font-heading font-bold text-slate-900 dark:text-white mb-2">Our Vision</h4>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                To be the leading choice for direct marketing, known for innovation, integrity, and impact across India.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-eros-border shadow-2xl group aspect-[4/3]">
                    <img src="/scraped/image_30.jpg" alt="Eros Inc Team & Culture" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-eros-cyan/20 backdrop-blur-md rounded-full text-eros-cyan text-xs font-semibold w-fit mb-2 border border-eros-cyan/30">
                            <Sparkles className="w-3.5 h-3.5" /> 100+ Team Members Strong
                        </div>
                        <h3 className="text-white font-heading font-bold text-xl">Operational Excellence in Direct Marketing</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
