import Link from 'next/link';
import { getSortedPostsData } from '@/lib/markdown';

export default function NewsPage() {
  const allPostsData = getSortedPostsData();

  return (
    <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-eros-cyan mb-2">Eros Inc. Updates</h2>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-10">News & Updates</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {allPostsData.map(({ slug, date, title, excerpt, image }) => (
                    <Link href={`/news/${slug}`} key={slug} className="group bg-white dark:bg-eros-card border border-slate-200 dark:border-eros-border rounded-3xl overflow-hidden bento-glow shadow-md transition">
                        <img src={image} alt={title} className="w-full h-52 object-cover object-top group-hover:scale-105 transition duration-500"/>
                        <div className="p-6">
                            <div className="text-xs text-eros-cyan font-semibold mb-2">{date}</div>
                            <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-eros-cyan dark:group-hover:text-eros-bright transition">{title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">{excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  );
}
