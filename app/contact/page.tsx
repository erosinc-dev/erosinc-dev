export default function Contact() {
  return (
    <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-eros-gold">Get In Touch</span>
                <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white mt-2 mb-4">Start Your Growth Journey</h2>
                <p className="text-slate-400">Partner with Eros Inc. to expand your market presence or accelerate your career.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Contact Form */}
                <form className="space-y-6 bg-eros-card p-8 md:p-10 rounded-3xl border border-eros-border shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Name</label>
                        <input type="text" placeholder="Your full name" className="w-full bg-eros-bg border border-eros-border rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-eros-cyan transition"/>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Email</label>
                        <input type="email" placeholder="you@domain.com" className="w-full bg-eros-bg border border-eros-border rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-eros-cyan transition"/>
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">I am interested in</label>
                    <select className="w-full bg-eros-bg border border-eros-border rounded-xl px-4 py-3.5 text-slate-300 focus:outline-none focus:border-eros-cyan transition">
                        <option>Hiring Eros Inc. for Brand / Sales Growth</option>
                        <option>Joining the Trainee Leadership Program</option>
                        <option>General Partnership</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Message</label>
                    <textarea rows={4} placeholder="How can we help you?" className="w-full bg-eros-bg border border-eros-border rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-eros-cyan transition"></textarea>
                </div>
                <button type="button" className="w-full py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright font-extrabold text-slate-950 transition shadow-lg shadow-eros-cyan/20 uppercase tracking-wider text-sm">
                    Submit Inquiry
                </button>
                </form>
                
                {/* Contact Info & Map */}
                <div className="flex flex-col gap-6">
                    <div className="bg-eros-card p-8 rounded-3xl border border-eros-border shadow-2xl flex-1">
                        <h3 className="font-heading text-2xl font-bold text-white mb-4">Visit Our Office</h3>
                        <p className="text-slate-300 leading-relaxed mb-6">
                            <strong>Eros Inc.</strong><br/>
                            2nd Floor, 227-228<br/>
                            Wardhaman Industrial Estate, Gokul Nagar<br/>
                            Thane West - 400601<br/>
                            Maharashtra, India
                        </p>
                        <div className="w-full h-64 rounded-xl overflow-hidden border border-eros-border">
                            <iframe 
                                src="https://maps.google.com/maps?q=Wardhaman+Industrial+Estate,+Gokul+Nagar,+Thane+West&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                width="100%" 
                                height="100%" 
                                style={{border: 0}} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
