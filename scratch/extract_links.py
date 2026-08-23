import re

content_file = r"C:\Users\Samsung\.gemini\antigravity-ide\brain\bf0ad7ec-db3b-4f93-a07e-4fc68ce0d32d\.system_generated\steps\171\content.md"
with open(content_file, "r", encoding="utf-8") as f:
    text = f.read()

hrefs = re.findall(r'href=["\']([^"\']+)["\']', text)
print("=== FOUND HREFS ===")
for h in sorted(set(hrefs)):
    if not h.startswith("https://fonts") and not h.startswith("https://www.gstatic"):
        print(h)

# Search for any page names / navigation text in the content
nav_matches = re.findall(r'>([^<]{3,30})<', text)
print("=== POSSIBLE NAV ITEMS ===")
for n in sorted(set(nav_matches)):
    n_clean = n.strip()
    if len(n_clean) > 2 and any(k in n_clean.lower() for k in ['home', 'about', 'service', 'program', 'contact', 'career', 'business', 'gallery', 'leadership', 'team']):
        print(n_clean)
