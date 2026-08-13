'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Building2, UserCheck, HelpCircle, Sparkles } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('contact@erosinc.in');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const emailOptions = [
    { value: 'contact@erosinc.in', label: 'General Business & Contact (contact@erosinc.in)' },
    { value: 'partnership@erosinc.in', label: 'Brand Partnerships & Commercial Sales (partnership@erosinc.in)' },
    { value: 'hr@erosinc.in', label: 'Careers & Resume Submission (hr@erosinc.in)' },
    { value: 'hello@erosinc.in', label: 'Practical Training & Management (hello@erosinc.in)' },
    { value: 'info@erosinc.in', label: 'Information & Inquiries (info@erosinc.in)' },
    { value: 'support@erosinc.in', label: 'Client Support & Help Desk (support@erosinc.in)' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${interest}?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
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
                    Reach out to the specific department at Eros Inc. directly or submit your inquiry below.
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
                        <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2">Department / Email Destination</label>
                        <select 
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            className="w-full bg-slate-50 dark:bg-eros-bg border border-slate-200 dark:border-eros-border rounded-xl px-4 py-3.5 text-slate-900 dark:text-slate-200 focus:outline-none focus:border-eros-cyan transition font-medium"
                        >
                            {emailOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
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
                        Send Inquiry to {interest}
                    </button>

                    {submitted && (
                        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Email client opened! Inquiry directed to {interest}.
                        </div>
                    )}
                </form>
                
                <div className="flex flex-col gap-6">
                    {/* Official Email Directory */}
                    <div className="bg-white dark:bg-eros-card p-8 rounded-3xl border border-slate-200 dark:border-eros-border shadow-2xl space-y-4">
                        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <Mail className="w-5 h-5 text-eros-cyan" />
                            Department Contacts
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-eros-bg border border-slate-200 dark:border-eros-border">
                                <span className="text-slate-500 font-medium block">General Inquiries</span>
                                <a href="mailto:contact@erosinc.in" className="text-eros-cyan font-bold hover:underline text-sm">contact@erosinc.in</a>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-eros-bg border border-slate-200 dark:border-eros-border">
                                <span className="text-slate-500 font-medium block">Brand Partnerships</span>
                                <a href="mailto:partnership@erosinc.in" className="text-eros-gold font-bold hover:underline text-sm">partnership@erosinc.in</a>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-eros-bg border border-slate-200 dark:border-eros-border">
                                <span className="text-slate-500 font-medium block">Careers & Resume</span>
                                <a href="mailto:hr@erosinc.in" className="text-eros-bright font-bold hover:underline text-sm">hr@erosinc.in</a>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-eros-bg border border-slate-200 dark:border-eros-border">
                                <span className="text-slate-500 font-medium block">Training & Management</span>
                                <a href="mailto:hello@erosinc.in" className="text-eros-pink font-bold hover:underline text-sm">hello@erosinc.in</a>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-eros-bg border border-slate-200 dark:border-eros-border">
                                <span className="text-slate-500 font-medium block">Information Desk</span>
                                <a href="mailto:info@erosinc.in" className="text-eros-cyan font-bold hover:underline text-sm">info@erosinc.in</a>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-50 dark:bg-eros-bg border border-slate-200 dark:border-eros-border">
                                <span className="text-slate-500 font-medium block">Client Support</span>
                                <a href="mailto:support@erosinc.in" className="text-slate-900 dark:text-white font-bold hover:underline text-sm">support@erosinc.in</a>
                            </div>
                        </div>
                    </div>

                    {/* Office Address & Map */}
                    <div className="bg-white dark:bg-eros-card p-8 rounded-3xl border border-slate-200 dark:border-eros-border shadow-2xl flex-1">
                        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-eros-gold" />
                            Visit Our Office
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                            <strong>EROS INC.</strong><br/>
                            2nd Floor, 227-228, Wardhaman Industrial Estate,<br/>
                            Gokul Nagar, Thane West - 400601, Maharashtra, India
                        </p>
                        <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-200 dark:border-eros-border">
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
