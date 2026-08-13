export default function Gallery() {
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
                    A 100% authentic glimpse into real team moments, leadership workshops, award ceremonies, and group outings at Eros Inc.
                </p>
            </div>

            {/* Symmetrical 3-Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_01.jpg" alt="Eros Inc Team Moment 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #1
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_02.jpg" alt="Eros Inc Team Moment 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #2
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_03.jpg" alt="Eros Inc Team Moment 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #3
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_04.jpg" alt="Eros Inc Team Moment 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #4
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_05.jpg" alt="Eros Inc Team Moment 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #5
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_06.jpg" alt="Eros Inc Team Moment 6" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #6
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_07.jpg" alt="Eros Inc Team Moment 7" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #7
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_08.jpg" alt="Eros Inc Team Moment 8" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #8
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_09.jpg" alt="Eros Inc Team Moment 9" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #9
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_10.jpg" alt="Eros Inc Team Moment 10" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #10
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_11.jpg" alt="Eros Inc Team Moment 11" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #11
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_12.jpg" alt="Eros Inc Team Moment 12" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #12
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_13.jpg" alt="Eros Inc Team Moment 13" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #13
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_14.jpg" alt="Eros Inc Team Moment 14" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #14
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_15.jpg" alt="Eros Inc Team Moment 15" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #15
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_16.jpg" alt="Eros Inc Team Moment 16" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #16
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_17.jpg" alt="Eros Inc Team Moment 17" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #17
                    </span>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 dark:bg-eros-card border border-slate-200 dark:border-eros-border shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img src="/gallery/group_photo_18.jpg" alt="Eros Inc Team Moment 18" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-xs tracking-wider uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                        Team Event #18
                    </span>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
