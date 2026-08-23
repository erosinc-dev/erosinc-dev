import os
from datetime import datetime

base_url = 'https://erosinc.in'
now = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%S+00:00')

routes = [
    ('', 1.0, 'weekly'),
    ('/philosophy', 0.8, 'weekly'),
    ('/capabilities', 0.8, 'weekly'),
    ('/businesses/google-360', 0.8, 'weekly'),
    ('/businesses/financial-services', 0.8, 'weekly'),
    ('/businesses/film-promotions', 0.9, 'weekly'),
    ('/businesses/b2b-commercial', 0.8, 'weekly'),
    ('/management-programme', 0.8, 'weekly'),
    ('/leadership', 0.8, 'weekly'),
    ('/brand-partners', 0.7, 'weekly'),
    ('/projects', 0.7, 'weekly'),
    ('/gallery', 0.8, 'weekly'),
    ('/impact', 0.7, 'weekly'),
    ('/careers', 0.8, 'weekly'),
    ('/news', 0.8, 'weekly'),
    ('/contact', 0.8, 'weekly'),
]

# Check news articles
news_dir = r"c:\Users\Samsung\Documents\Erosinc\erosinc-dev\content\news"
news_entries = []
if os.path.exists(news_dir):
    for fn in os.listdir(news_dir):
        if fn.endswith('.md'):
            slug = fn[:-3]
            news_entries.append((f'/news/{slug}', 0.6, 'monthly'))

xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
]

for route, priority, changefreq in routes + news_entries:
    xml_lines.append('  <url>')
    xml_lines.append(f'    <loc>{base_url}{route}</loc>')
    xml_lines.append(f'    <lastmod>{now}</lastmod>')
    xml_lines.append(f'    <changefreq>{changefreq}</changefreq>')
    xml_lines.append(f'    <priority>{priority:.1f}</priority>')
    xml_lines.append('  </url>')

xml_lines.append('</urlset>')

out_path = r"c:\Users\Samsung\Documents\Erosinc\erosinc-dev\public\sitemap.xml"
with open(out_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(xml_lines) + '\n')

print(f"Generated {out_path} with {len(routes) + len(news_entries)} URLs")
