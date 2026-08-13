import { Heart } from 'lucide-react';
export default function Philosophy() {
  return (
    <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-eros-gold mb-2">Our Philosophy</h2>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10">Compassionate Competition</h1>
            <div className="bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border p-10 rounded-3xl bento-glow relative shadow-lg">
                <div className="w-16 h-16 rounded-2xl bg-eros-gold/10 border border-eros-gold/30 text-eros-gold flex items-center justify-center mb-8">
                    <Heart className="w-8 h-8" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6 font-medium">
                    We believe winning should never come at the expense of ethics. We train teams to compete fiercely while serving customers and colleagues with empathy.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    At Eros Inc., true leadership is defined by how many people you lift up along the way. Our internal culture fosters high performance without the toxic cutthroat mentality often found in sales. We celebrate collective wins and provide unwavering support during challenges.
                </p>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Powered by an agile team of over 100 dedicated professionals, our collaborative environment ensures that every campaign we run is infused with diverse perspectives, deep industry knowledge, and an unwavering commitment to our clients' success.
                </p>
            </div>
        </div>
    </section>
  )
}
