import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';
import { ArrowUpRight, Zap, Building2, CreditCard, HeartHandshake, Compass, Award, CheckCircle2 } from 'lucide-react';
import ThreeDBackground from '@/components/ThreeDBackground';

export default function Home() {
  const allPostsData = getSortedPostsData().slice(0, 3);

  // 6 Widescreen landscape group photos with zero face cuts or side bars
  const galleryPreview = [
    '/gallery/new_event_03.jpg',
    '/gallery/new_event_04.jpg',
    '/gallery/pure_group_04.jpg',
    '/gallery/pure_group_07.jpg',
    '/gallery/pure_group_08.jpg',
    '/gallery/pure_group_10.jpg',
  ];

  const businessDivisions = [
    {
      title: 'Google 360° Publishing',
      desc: 'HDR 360° virtual tours & Google Maps property integration to boost local SEO.',
      href: '/businesses/google-360',
      icon: Compass,
      color: 'text-eros-cyan',
      border: 'hover:border-eros-cyan/50',
    },
    {
      title: 'Financial Services Distribution',
      desc: 'Direct banking network expansion, credit card acquisition, and KYC verified onboarding.',
      href: '/businesses/financial-services',
      icon: CreditCard,
      color: 'text-eros-gold',
      border: 'hover:border-eros-gold/50',
    },
    {
      title: 'Sales NGO & Donor Acquisition',
      desc: 'Sustainable monthly donor pipelines and outreach campaigns for global non-profits.',
      href: '/businesses/sales-ngo',
      icon: HeartHandshake,
      color: 'text-eros-pink',
      border: 'hover:border-eros-pink/50',
    },
    {
      title: 'B2B Commercial Sales',
      desc: 'Enterprise sales acceleration, B2B pipeline development, and channel partnership growth.',
      href: '/businesses/b2b-commercial',
      icon: Building2,
      color: 'text-eros-bright',
      border: 'hover:border-eros-bright/50',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <ThreeDBackground />
        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border text-xs text-eros-cyan dark:text-eros-bright mb-8 shadow-sm dark:shadow-inner">
                <span className="w-2 h-2 rounded-full bg-eros-pink animate-ping"></span>
                <span className="font-semibold uppercase tracking-wider text-[11px] text-slate-600 dark:text-slate-300">Operational Excellence • 50+ Members Strong</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-4xl leading-[1.1] mb-6">
                Ethical Sales Scale. <br/>
                <span className="dynamic-title">Compete With Compassion.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
                Eros Inc. is a dynamic growth-driven company dedicated to helping businesses build meaningful connections with their customers through innovative marketing solutions and strategic brand engagement. We believe every brand has a unique story, and our mission is to bring that story to life with creativity, precision, and purpose.
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
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-eros-cyan mb-1">50+</h2>
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
                    <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-eros-bright mb-1">100%</h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Direct Customer Reach</p>
                </div>
            </div>
        </div>
      </section>

      {/* NEW SECTION 1: Our Core Business Divisions */}
      <section className="py-20 bg-slate-50 dark:bg-eros-card/30 border-t border-slate-200 dark:border-eros-border">
          <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                  <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-eros-cyan block mb-2">Our Expertise</span>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Core Business Divisions</h2>
                  </div>
                  <Link href="/capabilities" className="text-eros-cyan hover:text-eros-bright transition text-sm font-semibold flex items-center gap-1">
                      View All Capabilities <ArrowUpRight className="w-4 h-4" />
                  </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {businessDivisions.map((biz) => {
                      const Icon = biz.icon;
                      return (
                          <Link 
                              key={biz.title} 
                              href={biz.href} 
                              className={`group p-8 rounded-3xl bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition duration-300 ${biz.border}`}
                          >
                              <div className={`p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 w-fit mb-6 ${biz.color}`}>
                                  <Icon className="w-7 h-7" />
                              </div>
                              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-eros-cyan transition">
                                  {biz.title}
                              </h3>
                              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                  {biz.desc}
                              </p>
                              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-eros-cyan group-hover:translate-x-1 transition">
                                  Explore Catalogue <ArrowUpRight className="w-4 h-4" />
                              </div>
                          </Link>
                      );
                  })}
              </div>
          </div>
      </section>

      {/* NEW SECTION 2: Practical Management Programme Highlight */}
      <section className="py-20 border-t border-slate-200 dark:border-eros-border relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-slate-900 to-slate-950 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl text-white">
                  <div className="space-y-6">
                      <span className="text-xs font-bold uppercase tracking-widest text-eros-gold flex items-center gap-2">
                          <Award className="w-4 h-4" /> Practical Training While You Work
                      </span>
                      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                          Learn. Work. Grow. <br/>
                          <span className="text-eros-cyan">30-Day Foundation Program</span>
                      </h2>
                      <p className="text-slate-300 text-base leading-relaxed">
                          Our training program combines practical learning with on-the-job experience, helping you develop professional skills while working with real customers, brands, and business opportunities.
                      </p>
                      <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-300 pt-2">
                          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-eros-cyan" /> Smart Selling</div>
                          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-eros-cyan" /> Market Analysis</div>
                          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-eros-cyan" /> Public Speaking</div>
                          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-eros-cyan" /> Client Representation</div>
                      </div>
                      <div className="pt-4">
                          <Link href="/management-programme" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-eros-gold hover:bg-amber-400 text-slate-950 font-bold transition shadow-lg shadow-eros-gold/20">
                              View Certified Achievers & Program Details <ArrowUpRight className="w-5 h-5" />
                          </Link>
                      </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-800 shadow-xl">
                      <img src="/certificates/cert_01.jpg" alt="Practical Training Certification" className="w-full h-full object-cover object-top" />
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
                          <img src={src} alt={`Gallery ${idx+1}`} className="w-full h-full object-cover object-top"/>
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
                          <img src={image} alt={title} className="w-full h-52 object-cover object-top group-hover:scale-105 transition duration-500"/>
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
