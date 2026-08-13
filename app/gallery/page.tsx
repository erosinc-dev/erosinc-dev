export default function Gallery() {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="orb-1 absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-eros-cyan/5 rounded-full blur-[80px]"></div>
            <div className="orb-2 absolute bottom-[20%] right-[15%] w-[250px] h-[250px] bg-eros-gold/5 rounded-full blur-[60px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
            <h2 className="text-xs font-bold uppercase tracking-widest text-eros-gold mb-2">Moments</h2>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Gallery</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-12">
                A glimpse into the energy, passion, and camaraderie that define Eros Inc. From team outings and training sessions to client campaigns and celebrations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_15.jpg" alt="Gallery image 1" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_19.jpg" alt="Gallery image 2" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_08.jpg" alt="Gallery image 3" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_41.jpg" alt="Gallery image 4" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_11.jpg" alt="Gallery image 5" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_17.jpg" alt="Gallery image 6" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_30.jpg" alt="Gallery image 7" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_13.jpg" alt="Gallery image 8" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_34.jpg" alt="Gallery image 9" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_35.jpg" alt="Gallery image 10" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_01.jpg" alt="Gallery image 11" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_22.jpg" alt="Gallery image 12" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_04.jpg" alt="Gallery image 13" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_32.jpg" alt="Gallery image 14" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_36.jpg" alt="Gallery image 15" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_18.jpg" alt="Gallery image 16" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_10.jpg" alt="Gallery image 17" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_06.jpg" alt="Gallery image 18" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_05.jpg" alt="Gallery image 19" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_03.jpg" alt="Gallery image 20" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_12.jpg" alt="Gallery image 21" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_42.jpg" alt="Gallery image 22" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_25.jpg" alt="Gallery image 23" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_29.jpg" alt="Gallery image 24" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_02.jpg" alt="Gallery image 25" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_24.jpg" alt="Gallery image 26" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_09.jpg" alt="Gallery image 27" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_39.jpg" alt="Gallery image 28" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_00.jpg" alt="Gallery image 29" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_21.jpg" alt="Gallery image 30" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden md:col-span-2 border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_37.jpg" alt="Gallery image 31" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_26.jpg" alt="Gallery image 32" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_31.jpg" alt="Gallery image 33" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_07.jpg" alt="Gallery image 34" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
                <div className="gallery-item rounded-2xl overflow-hidden  border border-slate-200 dark:border-eros-border">
                    <img src="/scraped/image_40.jpg" alt="Gallery image 35" className="w-full h-full object-cover min-h-[200px]"/>
                </div>
            </div>
        </div>
    </section>
  )
}
