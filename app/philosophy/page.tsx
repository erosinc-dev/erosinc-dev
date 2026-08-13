import { Heart } from 'lucide-react';
export default function Philosophy() {
  return (
    <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-eros-gold mb-2">Our Philosophy</h2>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-10">Compassionate Competition</h1>
            <div className="bg-eros-card border border-eros-border p-10 rounded-3xl bento-glow relative">
                <div className="w-16 h-16 rounded-2xl bg-eros-gold/10 border border-eros-gold/30 text-eros-gold flex items-center justify-center mb-8">
                    <Heart className="w-8 h-8" />
                </div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                    We believe winning should never come at the expense of ethics. We train teams to compete fiercely while serving customers and colleagues with empathy.
                </p>
                <p className="text-slate-400 leading-relaxed">
                    At Eros Inc., true leadership is defined by how many people you lift up along the way. Our internal culture fosters high performance without the toxic cutthroat mentality often found in sales. We celebrate collective wins and provide unwavering support during challenges.
                </p>
            </div>
        </div>
    </section>
  )
}
