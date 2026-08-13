import { Globe } from 'lucide-react';
export default function Impact() {
  return (
    <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2">Impact</h2>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-10">Social Impact & NGO Campaigns</h1>
            <div className="bg-eros-card border border-eros-border p-10 rounded-3xl bento-glow">
                <div className="w-16 h-16 rounded-2xl bg-eros-cyan/10 border border-eros-cyan/30 text-eros-cyan flex items-center justify-center mb-8">
                    <Globe className="w-8 h-8"/>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    We champion causes that matter. Our campaigns connect non-profits directly with long-term donors, raising crucial funds and building community awareness through authentic conversations.
                </p>
                <p className="text-slate-400 leading-relaxed">
                    We actively partner with leading global charities and local NGOs to amplify their reach. By giving these organizations a localized, face-to-face voice, we help secure the regular funding they need to execute their vital missions.
                </p>
            </div>
        </div>
    </section>
  )
}
