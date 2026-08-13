import { Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
export default function Leadership() {
  return (
    <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-eros-pink mb-2">Leadership Lab</h2>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10">Merit-Based Growth</h1>
            <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-10 rounded-3xl bento-glow shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-eros-pink/10 border border-eros-pink/30 text-eros-pink flex items-center justify-center mb-8">
                    <Award className="w-8 h-8"/>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                    No seniority shortcuts. Every executive moves up based purely on output, leadership capability, and emotional intelligence.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    Our management training program is designed to take ambitious individuals from entry-level roles to executive management. We provide hands-on coaching in sales, team building, public speaking, and business administration.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-eros-pink/10 text-eros-pink border border-eros-pink/30 hover:bg-eros-pink/20 transition font-bold">
                    Apply for the Program <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    </section>
  )
}
