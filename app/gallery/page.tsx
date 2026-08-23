import { getSortedPostsData } from '@/lib/markdown';

export default function Gallery() {
  // Fetch posts from CMS/Markdown dynamically
  const posts = getSortedPostsData();
  const newsGalleryItems = posts
    .filter(post => post.image)
    .map(post => ({
      src: post.image,
      label: `News: ${post.title}`,
      isNews: true
    }));

  const staticGalleryItems = [
    { src: '/film/celeb_11.jpg', label: 'Shah Rukh Khan - Movie Promotion Tour' },
    { src: '/film/celeb_03.jpg', label: 'Sushant & Shraddha - Chhichhore Movie Launch' },
    { src: '/film/celeb_14.jpg', label: 'Hrithik Roshan - Celebrity PR Meet' },
    { src: '/film/celeb_05.jpg', label: 'Ranveer Singh - Brand Launch Campaign' },
    { src: '/film/celeb_27.jpg', label: 'Ayushmann Khurrana - Press Interaction' },
    { src: '/film/celeb_19.jpg', label: 'Kartik Aaryan - Entertainment PR' },
    { src: '/film/celeb_31.jpg', label: 'Kangana Ranaut - Rangoon Movie Premiere' },
    { src: '/film/celeb_28.jpg', label: 'Kiara Advani - Machine Movie Launch' },
    { src: '/film/celeb_22.jpg', label: 'Sunny Deol - Ghayal Once Again PR Tour' },
    { src: '/film/celeb_07.jpg', label: 'Jackie Shroff - Red Carpet Gala' },
    { src: '/film/celeb_20.jpg', label: 'Jacqueline Fernandez - Media Activation' },
    { src: '/film/celeb_25.jpg', label: 'Arjun Kapoor - Brand Campaign Event' },
    { src: '/gallery/microsoft_summit.jpg', label: 'Microsoft Tech & Leadership Summit' },
    { src: '/certificates/cert_01.jpg', label: 'Foundation Program Certificate' },
    { src: '/certificates/cert_02.jpg', label: 'Certificate of Appreciation' },
    { src: '/certificates/cert_03.jpg', label: 'Recognition of Excellence' },
    { src: '/certificates/cert_04.jpg', label: 'Leadership Advancement' },
    { src: '/certificates/cert_05.jpg', label: 'Team Building & Performance' },
    { src: '/gallery/new_event_01.jpg', label: 'Executive Mentorship & Networking' },
    { src: '/gallery/new_event_02.jpg', label: 'Global Team Synergy' },
    { src: '/gallery/new_event_03.jpg', label: 'Strategic Planning Workshop' },
    { src: '/gallery/new_event_04.jpg', label: 'Leadership Development Session' },
    { src: '/gallery/new_event_05.jpg', label: 'International Partner Meet' },
    { src: '/gallery/pure_group_04.jpg', label: 'Team Building Outing' },
    { src: '/gallery/pure_group_06.jpg', label: 'Sales Excellence Award' },
    { src: '/gallery/pure_group_07.jpg', label: 'Campaign Strategy Huddle' },
    { src: '/gallery/pure_group_08.jpg', label: 'On-Ground Execution Crew' },
    { src: '/gallery/pure_group_09.jpg', label: 'Annual Celebration Gathering' },
    { src: '/gallery/pure_group_10.jpg', label: 'Leadership Trainee Cohort' },
    { src: '/gallery/pure_group_11.jpg', label: 'High Performers Meet' },
  ];

  // De-duplicate images if a static image is also in news
  const existingSrcs = new Set(newsGalleryItems.map(item => item.src));
  const filteredStaticItems = staticGalleryItems.filter(item => !existingSrcs.has(item.src));

  const allGalleryItems = [...newsGalleryItems, ...filteredStaticItems];

  return (
    <section className="py-24 relative overflow-hidden">
        {/* 3D Ambient Background Glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="orb-1 absolute top-[15%] left-[10%] w-[350px] h-[350px] bg-eros-cyan/5 rounded-full blur-[90px]"></div>
            <div className="orb-2 absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-eros-gold/5 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-eros-gold">Team Moments & Culture</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-4">Our People & Culture</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    A 100% authentic glimpse into real team moments, certified achievers, celebrity PR campaigns, international networking, and leadership training sessions at Eros Inc.
                </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allGalleryItems.map((item, idx) => (
                  <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                      <img src={item.src} alt={item.label} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/30">
                              {item.label}
                          </span>
                      </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
  );
}
