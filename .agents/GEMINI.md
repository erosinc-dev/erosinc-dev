# Eros Inc. Project Memory & Context Guide (Gemini / Antigravity Agent Memory)

## 📌 Project Summary & Brand Identity
* **Company Name:** Eros Inc.
* **Motto:** *"Ethical Sales Scale. Compete With Compassion."*
* **Core Positioning:** Omnichannel Sales Execution, Multi-Channel Brand Activation, Strategic Customer Acquisition.
* **Head Office Address:** 2nd Floor, 227-228, Wardhaman Industrial Estate, Gokul Nagar, Thane West - 400601, Maharashtra, India.
* **Primary Phone / WhatsApp:** +91 93244 83283
* **Official Repository:** `https://github.com/erosinc-dev/erosinc-dev` (Private GitHub)
* **Production Hosting:** Vercel Global Edge CDN (`erosinc.in` / `erosinc.vercel.app`)

---

## 🏢 Business Divisions (3 Primary Catalogues)
1. **Google 360° VR Property Publishing (`/businesses/google-360`):** HDR 360° virtual tours, Google Street View integration, and local SEO boosting.
2. **Financial Services Distribution (`/businesses/financial-services`):** Retail banking growth, credit card acquisitions, and verified KYC compliance.
3. **Film Promotion & Celebrity PR (`/businesses/film-promotions`):** Film launch campaigns, celebrity PR, media press relations, red carpet events, and brand endorsements.
4. **B2B Commercial Sales (`/businesses/b2b-commercial`):** Enterprise account acceleration, B2B sales negotiation, and channel partner expansion.

---

## 📩 Official Departmental Contact Routing
* General Inquiries: `contact@erosinc.in`
* Partnerships & Alliances: `partnership@erosinc.in`
* Careers & HR: `hr@erosinc.in`
* Training & Management: `hello@erosinc.in`
* Information: `info@erosinc.in`
* Support & Client Service: `support@erosinc.in`

---

## 🎓 Practical Management Programme
* **Motto:** *"Learn. Work. Grow."*
* **30-Day Foundation Program:** Smart Selling, Business Communication, Market Analysis, Confidence Building, Client Representation, Public Speaking.
* **Certified Achievers Grid:** Displays official certificate photos (`/certificates/cert_01.jpg` to `cert_05.jpg`) in a centered 3+2 presentation layout.

---

## 🛠️ CMS & Content Management
* **CMS Engine:** Sveltia CMS running at `/admin` (`public/admin/index.html` & `public/admin/config.yml`).
* **Authentication:** GitHub PAT (Personal Access Token) or GitHub OAuth.
* **Auto-Sync:** Publishing any news article in `content/news/*.md` automatically updates the Homepage Latest News section, `/news`, and prepends the article image to the `/gallery` grid.

---

## 🎨 Design & Aesthetic Guidelines
* **Primary Theme:** Dark Mode default (`#0B0E14` card `#141A24`) with clean Light Mode toggle.
* **Logo Colors:** Electric Cyan (`#00A0D2`), Bright Blue (`#00C3FF`), Warm Gold (`#FFB800`), Compassion Pink (`#FF3366`).
* **Dynamic Page Colors:** Every page menu link dynamically transitions to a distinct logo-aligned pastel tint in Light Mode and glowing ambient orb in Dark Mode via `PageThemeWrapper.tsx`.
* **Face Alignment Rule:** All team portraits MUST use `object-cover object-top` to guarantee 100% face framing without clipping.

---

## 📚 Project Documentation Files Location
All client handover guides and PDF manuals are safely stored inside `.agents/docs/`:
- `.agents/docs/client_handover_document.md` / `.pdf`
- `.agents/docs/executive_client_guide.md` / `.pdf`
- `.agents/docs/cms_token_guide.md` / `.pdf`
- `.agents/rules/awesome-agent-skills.md` (Linked to `https://github.com/mayurrathi/awesome-agent-skills`)
