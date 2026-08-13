import { Film, CreditCard, View, Users, Globe2, Sparkles } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Bollywood Movie Outreach & Promotions",
      category: "Entertainment",
      img: "/gallery/pure_group_04.jpg",
      icon: Film,
      color: "text-eros-pink",
      bgColor: "bg-eros-pink/10",
      borderColor: "border-eros-pink/30",
      desc: "Spearheaded on-ground promotional campaigns for major Bollywood cinematic releases. Engaging directly with moviegoers across high-footfall venues, multiplexes, and pop-up installations to maximize opening weekend box office turnout."
    },
    {
      title: "Credit Cards & Banking Network Growth",
      category: "Financial Services",
      img: "/gallery/pure_group_07.jpg",
      icon: CreditCard,
      color: "text-eros-gold",
      bgColor: "bg-eros-gold/10",
      borderColor: "border-eros-gold/30",
      desc: "Partnered with premier banking networks to drive premium credit card acquisitions. Our direct face-to-face ambassadors delivered personalized consultations, onboarding thousands of verified cardholders through direct human engagement."
    },
    {
      title: "Google 360° Property Publishing",
      category: "Real Estate & Tech",
      img: "/gallery/pure_group_08.jpg",
      icon: View,
      color: "text-eros-cyan",
      bgColor: "bg-eros-cyan/10",
      borderColor: "border-eros-cyan/30",
      desc: "Published hundreds of commercial and residential properties onto the Google 360° Street View and VR platform. Our specialized teams captured high-resolution virtual tours, boosting client search visibility and walk-in leads."
    },
    {
      title: "Social Impact & NGO Donor Onboarding",
      category: "Non-Profit",
      img: "/gallery/pure_group_09.jpg",
      icon: Globe2,
      color: "text-eros-bright",
      bgColor: "bg-eros-bright/10",
      borderColor: "border-eros-bright/30",
      desc: "Executed direct awareness campaigns for global non-profit organizations, connecting everyday citizens with meaningful humanitarian causes and securing sustained long-term donor contributions."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
        {/* Ambient 3D glow */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-eros-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2">Portfolio & Experience</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-6">Proven Client Impact</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    With over 50 dedicated team members, Eros Inc. has delivered high-impact direct marketing solutions across entertainment, finance, real estate, and social causes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((proj, idx) => {
                  const IconComp = proj.icon;
                  return (
                    <div key={idx} className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl overflow-hidden bento-glow shadow-lg transition flex flex-col group">
                        <div className="relative h-56 overflow-hidden">
                            <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
                            <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
                                {proj.category}
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-xl ${proj.bgColor} ${proj.borderColor} border ${proj.color} flex items-center justify-center`}>
                                        <IconComp className="w-5 h-5"/>
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">{proj.title}</h3>
                                </div>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                                    {proj.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                  );
                })}
            </div>
        </div>
    </section>
  )
}
