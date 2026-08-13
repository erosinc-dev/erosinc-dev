import { Users } from 'lucide-react';
export default function Capabilities() {
  return (
    <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2">Capabilities</h2>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-10">How We Drive Growth</h1>
            <div className="bg-eros-card border border-eros-border p-10 rounded-3xl bento-glow relative overflow-hidden">
                <div className="w-16 h-16 rounded-2xl bg-eros-cyan/10 border border-eros-cyan/30 text-eros-cyan flex items-center justify-center mb-8">
                    <Users className="w-8 h-8"/>
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Direct Face-to-Face Representation</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                    In an automated digital world, human trust is the ultimate differentiator. Our brand ambassadors represent your products with passion, ethical standards, and direct empathy, acquiring lifetime customers.
                </p>
                <h4 className="text-white font-semibold mb-4">Core Focus Areas</h4>
                <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-eros-border/60 text-sm text-eros-bright rounded-lg font-medium">Brand Acquisition</span>
                    <span className="px-4 py-2 bg-eros-border/60 text-sm text-eros-bright rounded-lg font-medium">Client Servicing</span>
                    <span className="px-4 py-2 bg-eros-border/60 text-sm text-eros-bright rounded-lg font-medium">Sales & Marketing</span>
                    <span className="px-4 py-2 bg-eros-border/60 text-sm text-eros-bright rounded-lg font-medium">Service & Management</span>
                </div>
            </div>
        </div>
    </section>
  )
}
