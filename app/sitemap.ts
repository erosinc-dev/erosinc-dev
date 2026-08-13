import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/markdown';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://erosinc.in';

  // Static routes
  const staticRoutes = [
    '',
    '/philosophy',
    '/capabilities',
    '/businesses/google-360',
    '/businesses/financial-services',
    '/businesses/b2b-commercial',
    '/management-programme',
    '/leadership',
    '/brand-partners',
    '/projects',
    '/gallery',
    '/impact',
    '/careers',
    '/news',
    '/contact',
  ];

  const staticSitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic news routes from Markdown CMS
  const posts = getSortedPostsData();
  const newsSitemap = posts.map((post) => ({
    url: `${baseUrl}/news/${post.slug}`,
    lastModified: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticSitemap, ...newsSitemap];
}
