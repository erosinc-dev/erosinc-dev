import { Heart, Target, Eye, Sparkles } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-eros-pink/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-eros-gold">About Us</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-6">Compete With Compassion</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                    Eros Inc. is a dynamic growth-driven company dedicated to helping businesses build meaningful connections with their customers through innovative marketing solutions and strategic brand engagement.
                </p>
            </div>

            {/* Content & Authentic Team Photo Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6">
                    {/* Paragraph 1 */}
                    <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-8 rounded-3xl bento-glow shadow-lg">
                        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                            <Heart className="w-5 h-5 text-eros-pink" />
                            Our Purpose & Story
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                            Eros Inc. is a dynamic growth-driven company dedicated to helping businesses build meaningful connections with their customers through innovative marketing solutions and strategic brand engagement. We believe every brand has a unique story, and our mission is to bring that story to life with creativity, precision, and purpose.
                        </p>
                    </div>

                    {/* Paragraph 2 */}
                    <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-8 rounded-3xl bento-glow shadow-lg">
                        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                            <Target className="w-5 h-5 text-eros-cyan" />
                            Driven By Innovation & Insights
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                            Driven by innovation, data-backed insights, and a customer-first approach, we create impactful campaigns that enhance brand visibility, foster trust, and deliver measurable results. From market expansion to customer acquisition and brand development, we empower businesses to grow with confidence in today’s competitive marketplace.
                        </p>
                    </div>

                    {/* Paragraph 3 */}
                    <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-8 rounded-3xl bento-glow shadow-lg">
                        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-3">
                            <Eye className="w-5 h-5 text-eros-gold" />
                            Lasting Relationships & Success
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                            At Eros Inc., we don’t just build campaigns—we build lasting relationships, create opportunities, and inspire growth. With passion, integrity, and a commitment to excellence, we help businesses compete with compassion and achieve long-term success.
                        </p>
                    </div>
                </div>

                <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-eros-border shadow-2xl group aspect-[4/3]">
                    <img src="/gallery/group_photo_01.jpg" alt="Eros Inc Team & Culture" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-eros-cyan/20 backdrop-blur-md rounded-full text-eros-cyan text-xs font-semibold w-fit mb-2 border border-eros-cyan/30">
                            <Sparkles className="w-3.5 h-3.5" /> 100+ Team Members Strong
                        </div>
                        <h3 className="text-white font-heading font-bold text-xl">Operational Excellence & Strategic Brand Engagement</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
