export default function Gallery() {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* 3D Ambient Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="orb-1 absolute top-[15%] left-[10%] w-[350px] h-[350px] bg-eros-cyan/5 rounded-full blur-[90px]"></div>
            <div className="orb-2 absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-eros-gold/5 rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-eros-gold">Moments & Culture</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mt-2 mb-4">Our People & Culture</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    A 100% authentic glimpse into the real team moments, leadership workshops, award ceremonies, and team outings at Eros Inc.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
                
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_01.jpg" alt="Eros Inc Team & Events 1" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_02.jpg" alt="Eros Inc Team & Events 2" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_03.jpg" alt="Eros Inc Team & Events 3" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_04.jpg" alt="Eros Inc Team & Events 4" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_05.jpg" alt="Eros Inc Team & Events 5" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_06.jpg" alt="Eros Inc Team & Events 6" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_07.jpg" alt="Eros Inc Team & Events 7" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_08.jpg" alt="Eros Inc Team & Events 8" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_09.jpg" alt="Eros Inc Team & Events 9" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_10.jpg" alt="Eros Inc Team & Events 10" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_11.jpg" alt="Eros Inc Team & Events 11" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_12.jpg" alt="Eros Inc Team & Events 12" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_13.jpg" alt="Eros Inc Team & Events 13" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_14.jpg" alt="Eros Inc Team & Events 14" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_15.jpg" alt="Eros Inc Team & Events 15" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_16.jpg" alt="Eros Inc Team & Events 16" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_17.jpg" alt="Eros Inc Team & Events 17" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_18.jpg" alt="Eros Inc Team & Events 18" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_19.jpg" alt="Eros Inc Team & Events 19" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_20.jpg" alt="Eros Inc Team & Events 20" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_21.jpg" alt="Eros Inc Team & Events 21" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_22.jpg" alt="Eros Inc Team & Events 22" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_23.jpg" alt="Eros Inc Team & Events 23" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_24.jpg" alt="Eros Inc Team & Events 24" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_25.jpg" alt="Eros Inc Team & Events 25" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_26.jpg" alt="Eros Inc Team & Events 26" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border group relative bg-slate-100 dark:bg-eros-card shadow-md">
                    <img src="/gallery/human_photo_27.jpg" alt="Eros Inc Team & Events 27" className="w-full h-full object-cover min-h-[220px] group-hover:scale-105 transition-all duration-500"/>
                </div>
            </div>
        </div>
    </section>
  )
}
