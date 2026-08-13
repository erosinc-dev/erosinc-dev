import { getPostData, getSortedPostsData } from '@/lib/markdown';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  return (
    <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
            <Link href="/news" className="inline-flex items-center gap-2 text-eros-cyan hover:text-eros-bright mb-8 transition font-semibold">
                <ArrowLeft className="w-4 h-4"/> Back to News
            </Link>
            <div className="text-eros-gold font-semibold text-sm mb-4">{postData.date}</div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8">{postData.title}</h1>
            <img src={postData.image} alt={postData.title} className="w-full rounded-3xl mb-10 object-cover h-[400px]" />
            <div className="prose prose-invert prose-cyan max-w-none text-slate-300" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
    </section>
  );
}
