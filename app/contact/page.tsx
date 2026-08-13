'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Hiring Eros Inc. for Brand / Sales Growth');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:hr@erosinc.in?subject=${encodeURIComponent(interest)} - ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-eros-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 relative">
            <div className="text-center mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-eros-gold">Get In Touch</span>
                <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4">Start Your Growth Journey</h1>
                <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                    Partner with Eros Inc. to expand your market presence or submit your CV to join our team via <strong className="text-eros-cyan font-bold">hr@erosinc.in</strong>.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-eros-card p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-eros-border shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Name</label>
                            <input 
                                type="text" 
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your full name" 
                                className="w-full bg-slate-50 dark:bg-eros-bg border border-slate-200 dark:border-eros-border rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-eros-cyan transition"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Email</label>
                            <input 
                                type="email" 
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@domain.com" 
                                className="w-full bg-slate-50 dark:bg-eros-bg border border-slate-200 dark:border-eros-border rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-eros-cyan transition"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">I am interested in</label>
                        <select 
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-eros-bg border border-slate-200 dark:border-eros-border rounded-xl px-4 py-3.5 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-eros-cyan transition"
                        >
                            <option value="Hiring Eros Inc. for Brand / Sales Growth">Hiring Eros Inc. for Brand / Sales Growth</option>
                            <option value="Joining the Trainee Leadership Program">Joining the Trainee Leadership Program (Careers)</option>
                            <option value="General Partnership & Media">General Partnership & Media</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Message</label>
                        <textarea 
                            rows={4} 
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="How can we help you?" 
                            className="w-full bg-slate-50 dark:bg-eros-bg border border-slate-200 dark:border-eros-border rounded-xl px-4 py-3.5 text-slate-900 dark:text-white focus:outline-none focus:border-eros-cyan transition"
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-4 rounded-xl bg-eros-cyan hover:bg-eros-bright font-extrabold text-slate-950 transition shadow-lg shadow-eros-cyan/20 uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                    >
                        <Send className="w-4 h-4" />
                        Send Inquiry to hr@erosinc.in
                    </button>

                    {submitted && (
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Email client opened! Inquiry directed to hr@erosinc.in.
                        </div>
                    )}
                </form>
                
                <div className="flex flex-col gap-6">
                    {/* Official Email Card */}
                    <div className="bg-white dark:bg-eros-card p-8 rounded-3xl border border-slate-200 dark:border-eros-border shadow-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-2xl bg-eros-cyan/10 border border-eros-cyan/30 text-eros-cyan flex items-center justify-center">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">Official Email Address</h3>
                                <a href="mailto:hr@erosinc.in" className="text-eros-cyan dark:text-eros-bright font-semibold hover:underline">
                                    hr@erosinc.in
                                </a>
                            </div>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                            For business growth inquiries, leadership program applications, or partnership proposals, send your message directly to our HR team.
                        </p>
                    </div>

                    {/* Office Address & Map */}
                    <div className="bg-white dark:bg-eros-card p-8 rounded-3xl border border-slate-200 dark:border-eros-border shadow-2xl flex-1">
                        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-eros-gold" />
                            Visit Our Office
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
                            <strong>EROS INC.</strong><br/>
                            2nd Floor, 227-228, Wardhaman Industrial Estate,<br/>
                            Gokul Nagar, Thane West - 400601, Maharashtra, India
                        </p>
                        <div className="w-full h-52 rounded-xl overflow-hidden border border-slate-200 dark:border-eros-border">
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
