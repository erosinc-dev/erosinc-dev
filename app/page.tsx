import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';
import { ArrowUpRight, Zap } from 'lucide-react';
import ThreeDBackground from '@/components/ThreeDBackground';

export default function Home() {
  const allPostsData = getSortedPostsData().slice(0, 3);

  const galleryPreview = [
    '/scraped/image_15.jpg', '/scraped/image_19.jpg', '/scraped/image_08.jpg',
    '/scraped/image_41.jpg', '/scraped/image_11.jpg', '/scraped/image_17.jpg',
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <ThreeDBackground />
        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border text-xs text-eros-cyan dark:text-eros-bright mb-8 shadow-sm dark:shadow-inner">
                <span className="w-2 h-2 rounded-full bg-eros-pink animate-ping"></span>
                <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-600 dark:text-slate-300">Operational Excellence • 100+ Members Strong</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl leading-[1.1] mb-6">
                Ethical Sales Scale. <br/>
                <span className="dynamic-title">Compete With Compassion.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
                Eros Inc. is a dynamic, growth-driven company dedicated to helping businesses build meaningful connections with their customers. Driven by innovation, data-backed insights, and a customer-first approach, we create impactful campaigns that enhance brand visibility, foster trust, and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-20">
                <Link href="/contact" className="px-8 py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright text-slate-950 font-bold flex items-center justify-center gap-2 transition shadow-xl shadow-eros-cyan/20">
                    Scale Your Brand
                    <ArrowUpRight className="w-5 h-5" />
                </Link>
                <Link href="/leadership" className="px-8 py-4 rounded-xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-eros-border/60 font-semibold flex items-center justify-center gap-2 transition">
                    Explore Career Trajectory
                    <Zap className="w-5 h-5 text-eros-gold" />
                </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-200 dark:border-eros-border">
                <div className="bg-white dark:bg-eros-card/50 p-5 rounded-2xl border border-slate-200 dark:border-eros-border/50 shadow-sm">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-eros-cyan mb-1">100+</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Dedicated Team Members</p>
                </div>
                <div className="bg-white dark:bg-eros-card/50 p-5 rounded-2xl border border-slate-200 dark:border-eros-border/50 shadow-sm">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-eros-gold mb-1">100%</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Internal Promotion</p>
                </div>
                <div className="bg-white dark:bg-eros-card/50 p-5 rounded-2xl border border-slate-200 dark:border-eros-border/50 shadow-sm">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-1">4+</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Core Industry Sectors</p>
                </div>
                <div className="bg-white dark:bg-eros-card/50 p-5 rounded-2xl border border-slate-200 dark:border-eros-border/50 shadow-sm">
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-eros-bright mb-1">Zero</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Ad-Blocker Friction</p>
                </div>
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 border-t border-slate-200 dark:border-eros-border relative overflow-hidden">
          <div className="orb-3 absolute top-0 right-0 w-[300px] h-[300px] bg-eros-cyan/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
              <div className="text-center mb-16">
                  <h2 className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2">Leadership</h2>
                  <p className="font-heading text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Meet The Team</p>
                  <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                      We don&apos;t just build campaigns — we build lasting relationships, create opportunities, and inspire growth with passion and integrity.
                  </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                  {/* Jeevan Munde */}
                  <div className="text-center group bg-white dark:bg-eros-card/50 p-6 rounded-2xl border border-slate-200 dark:border-eros-border/50 bento-glow transition">
                      <div className="w-36 h-36 rounded-full bg-slate-200 dark:bg-eros-card mb-4 overflow-hidden mx-auto border-4 border-white dark:border-eros-bg shadow-lg group-hover:border-eros-cyan transition-colors">
                          <img src="/team/jeevan_munde.jpg" alt="Jeevan Munde" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">Jeevan Munde</h3>
                      <p className="text-xs font-semibold text-eros-cyan uppercase tracking-wider mt-1">Founder & MD</p>
                  </div>
                  {/* Sukhada Dalvi */}
                  <div className="text-center group bg-white dark:bg-eros-card/50 p-6 rounded-2xl border border-slate-200 dark:border-eros-border/50 bento-glow transition">
                      <div className="w-36 h-36 rounded-full bg-slate-200 dark:bg-eros-card mb-4 overflow-hidden mx-auto border-4 border-white dark:border-eros-bg shadow-lg group-hover:border-eros-gold transition-colors">
                          <img src="/team/sukhada_dalvi.jpg" alt="Sukhada Dalvi" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">Sukhada Dalvi</h3>
                      <p className="text-xs font-semibold text-eros-gold uppercase tracking-wider mt-1">Executive Crew Leader</p>
                  </div>
                  {/* Vishakh Satyan */}
                  <div className="text-center group bg-white dark:bg-eros-card/50 p-6 rounded-2xl border border-slate-200 dark:border-eros-border/50 bento-glow transition">
                      <div className="w-36 h-36 rounded-full bg-slate-200 dark:bg-eros-card mb-4 overflow-hidden mx-auto border-4 border-white dark:border-eros-bg shadow-lg group-hover:border-eros-pink transition-colors">
                          <img src="/team/vishakh_satyan.jpg" alt="Vishakh Satyan" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">Vishakh Satyan</h3>
                      <p className="text-xs font-semibold text-eros-pink uppercase tracking-wider mt-1">Trainer</p>
                  </div>
                  {/* Ashish Mane */}
                  <div className="text-center group bg-white dark:bg-eros-card/50 p-6 rounded-2xl border border-slate-200 dark:border-eros-border/50 bento-glow transition">
                      <div className="w-36 h-36 rounded-full bg-slate-200 dark:bg-eros-card mb-4 overflow-hidden mx-auto border-4 border-white dark:border-eros-bg shadow-lg group-hover:border-eros-bright transition-colors">
                          <img src="/team/ashish_mane.jpg" alt="Ashish Mane" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">Ashish Mane</h3>
                      <p className="text-xs font-semibold text-eros-bright uppercase tracking-wider mt-1">Trainer</p>
                  </div>
                  {/* Sairaj Jopale */}
                  <div className="text-center group bg-white dark:bg-eros-card/50 p-6 rounded-2xl border border-slate-200 dark:border-eros-border/50 bento-glow transition">
                      <div className="w-36 h-36 rounded-full bg-slate-200 dark:bg-eros-card mb-4 overflow-hidden mx-auto border-4 border-white dark:border-eros-bg shadow-lg group-hover:border-eros-cyan transition-colors">
                          <img src="/team/sairaj_jopale.jpg" alt="Sairaj Jopale" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">Sairaj Jopale</h3>
                      <p className="text-xs font-semibold text-eros-cyan uppercase tracking-wider mt-1">Crew Leader</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-slate-100 dark:bg-black/40 border-t border-slate-200 dark:border-eros-border">
          <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-end mb-12">
                  <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest text-eros-gold mb-2">Moments</h2>
                      <p className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Gallery</p>
                  </div>
                  <Link href="/gallery" className="text-eros-cyan dark:text-eros-bright hover:text-eros-cyan/80 dark:hover:text-white transition font-medium flex items-center gap-1">
                      View all <ArrowUpRight className="w-4 h-4" />
                  </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {galleryPreview.map((src, idx) => (
                      <Link href="/gallery" key={idx} className="gallery-item rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 dark:border-eros-border">
                          <img src={src} alt={`Gallery ${idx+1}`} className="w-full h-full object-cover"/>
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      {/* News Section */}
      <section className="py-24 border-t border-slate-200 dark:border-eros-border">
          <div className="max-w-7xl mx-auto px-6">
              <div className="flex justify-between items-end mb-12">
                  <div>
                      <h2 className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2">Updates</h2>
                      <p className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Latest News</p>
                  </div>
                  <Link href="/news" className="text-eros-cyan dark:text-eros-bright hover:text-eros-cyan/80 dark:hover:text-white transition font-medium flex items-center gap-1">
                      View all <ArrowUpRight className="w-4 h-4" />
                  </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {allPostsData.map(({ slug, date, title, excerpt, image }) => (
                      <Link href={`/news/${slug}`} key={slug} className="group bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl overflow-hidden bento-glow shadow-md transition">
                          <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"/>
                          <div className="p-6">
                              <div className="text-xs text-eros-cyan font-semibold mb-2">{date}</div>
                              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-eros-cyan dark:group-hover:text-eros-bright transition">{title}</h3>
                              <p className="text-slate-600 dark:text-slate-400 text-sm">{excerpt}</p>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </section>
    </>
  );
}
