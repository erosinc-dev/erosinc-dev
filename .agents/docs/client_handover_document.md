# Executive Client Handover & Website Capabilities Document

**Client Name:** Eros Inc.  
**Project Name:** Corporate Platform & CMS Infrastructure Migration  
**Tech Stack:** Next.js 14 (App Router), React, Tailwind CSS, Sveltia CMS, Vercel Global CDN  
**Repository:** `github.com/erosinc-dev/erosinc-dev`  
**Live Production URL:** `https://erosinc.in` / `https://erosinc.vercel.app`  

---

## 1. Executive Summary & Architecture Overview

The new Eros Inc. digital platform has been transformed from a static website into an enterprise-grade, high-performance **Next.js 14 Web Application**. The platform is engineered for maximum speed, seamless mobile responsiveness, automatic search engine optimization (SEO), and hassle-free content management.

### Key Technical Highlights:
* **Sub-Second Page Load Speed:** Built using Next.js Static Site Generation (SSG), serving pages instantly through Vercel’s global Edge CDN.
* **100% Mobile & Retina Optimization:** Every layout, card grid, and media player automatically scales gracefully across mobile phones, tablets, and 4K displays.
* **Dark / Light Theme Toggle:** Native theme switcher in the header for comfortable viewing in any lighting environment.
* **Modern Omnichannel Sales Positioning:** Refined terminology throughout the platform emphasizing *"Omnichannel Sales Execution"*, *"Multi-Channel Brand Activation"*, and *"Strategic Customer Acquisition"*.

---

## 2. Platform Features & Core Pages

### 🌐 1. Homepage (`/`)
* **Hero Experience:** Dynamic ambient 3D particle background canvas with high-impact value proposition (*"Ethical Sales Scale. Compete With Compassion."*).
* **Live Operational Metrics:** 4 real-time business statistics (*50+ Dedicated Team Members, 100% Internal Promotion, 4+ Core Industry Sectors, 100% Direct Customer Reach*).
* **Core Business Divisions Showcase:** Direct access cards for all 4 business verticals.
* **Practical Training & Management Program Banner:** Highlights the 30-Day Foundation Program with direct call-to-action buttons.
* **Curated Gallery Preview & News Feed:** Widescreen 6-photo group gallery preview and the 3 latest published news articles.

### 🏢 2. Four Dedicated Business Catalogue Pages (`/businesses/...`)
1. **Google 360° Property Publishing (`/businesses/google-360`):** Virtual tour captures, Google Maps integration, and local SEO boosting.
2. **Financial Services Distribution (`/businesses/financial-services`):** Credit card acquisitions, retail banking expansion, and verified KYC compliance.
3. **Sales NGO & Donor Acquisition (`/businesses/sales-ngo`):** Sustainable recurring donor pipelines and humanitarian outreach.
4. **B2B Commercial Sales (`/businesses/b2b-commercial`):** Enterprise account pipelines, corporate sales negotiation, and channel partner expansion.

### 🎓 3. Practical Management Programme (`/management-programme`)
* **Curriculum Breakdown:** *"Learn. Work. Grow."* 30-day foundation training in Smart Selling, Business Communication, Market Analysis, and Public Speaking.
* **Our Certified Achievers Grid:** Showcases certificate ceremony photos with a centered, balanced layout for milestone achievements (*Foundation Completion, Appreciation, Excellence, Leadership Advancement, Team Building*).

### 👥 4. Executive Leadership & Career Progression (`/leadership`)
* **Merit-Based Growth Model:** Highlights the 5-stage career trajectory from Business Associate to Business Head.
* **Leadership Profiles:** Authentic portrait cards framed with top object alignment to guarantee 100% face visibility.

### 🤝 5. Brand Partners & Portfolio (`/brand-partners` & `/projects`)
* Showcase of enterprise partner alliances across Entertainment, Banking, VR Technology, and Non-Profit sectors.
* Verified project case studies and team execution milestones.

### 📸 6. Dynamic Team Gallery (`/gallery`)
* Authentic high-resolution photo grid of real team moments, workshops, and international networking events.
* **Automated CMS Sync:** Any image published via a new CMS news article automatically appears at the top of the Gallery grid.

### 📩 7. Contact & Departmental Routing (`/contact`)
* **Interactive Office Map:** Embedded Google Maps location for the Thane West, Maharashtra corporate head office.
* **Dynamic Departmental Email Routing:** Direct routing selector for 6 dedicated email endpoints:
  * General Inquiries: `contact@erosinc.in`
  * Business Partnerships: `partnership@erosinc.in`
  * HR & Careers: `hr@erosinc.in`
  * Training & Management: `hello@erosinc.in`
  * Information: `info@erosinc.in`
  * Support & Client Service: `support@erosinc.in`
* **Floating WhatsApp Action:** Direct instant-messaging widget linked to `+91 93244 83283` pinned at the bottom-right of every page.

---

## 3. How to Use Sveltia CMS for Regular Posts

Your website comes equipped with **Sveltia CMS**—a modern, user-friendly Content Management System running at `/admin`. This allows non-technical team members to write articles, upload photos, and publish updates in under 1 minute.

```
┌─────────────────────────────────────────────────────────────┐
│                 SVELTIA CMS WORKFLOW                        │
│                                                             │
│ 1. Log in at /admin ──> 2. Create Post ──> 3. Hit Publish   │
│                                                   │         │
│ 4. Site Auto-Rebuilds & Updates in 30 Seconds <───┘         │
└─────────────────────────────────────────────────────────────┘
```

### 📋 Step-by-Step Guide to Publishing a News Article:

#### **Step 1: Access the CMS Dashboard**
1. Open your web browser and navigate to:  
   👉 **`https://erosinc.in/admin`** *(or `https://erosinc.vercel.app/admin`)*
2. Click the **"Log in with GitHub"** button.

#### **Step 2: Create a New Post**
1. In the left navigation menu, click **News & Updates**.
2. Click the **"New News & Updates"** button in the top right corner.

#### **Step 3: Fill in Article Details**
Fill out the intuitive form fields:
* **Title:** The headline of your post (e.g. *"Expansion into Strategic Regional Hubs"*).
* **Publish Date:** Select the date for your article.
* **Excerpt:** A 1-2 sentence summary that appears on news cards and homepage previews.
* **Featured Image:** Select or upload an image path (e.g. `/gallery/new_event_04.jpg`).
* **Body:** Write your full article text using the built-in rich text editor (bold text, bullet points, headers, links).

#### **Step 4: Uploading New Photos**
* To upload a new image directly from your computer, click the image field, choose **Upload**, and select your photo.
* Images are automatically uploaded to the `public/gallery/` directory.

#### **Step 5: Publish!**
1. Click **Publish** at the top of the editor screen.
2. Sveltia CMS will save the article directly to your repository.
3. **Automatic Deployment:** Vercel will detect the change and rebuild the live website in **~30 seconds**.
4. Your new article will automatically appear on:
   * The **Homepage** (under *Latest News*)
   * The **News Page** (`/news`)
   * The **Gallery Page** (`/gallery`)

---

## 4. Maintenance & GoDaddy Domain Connection

### Connecting your GoDaddy Domain to Vercel:
When ready to point your primary GoDaddy domain (`erosinc.in`) to the live site:

1. Log into **Vercel** $\rightarrow$ Go to **Settings** $\rightarrow$ **Domains** $\rightarrow$ Add `erosinc.in`.
2. Log into **GoDaddy** $\rightarrow$ Go to **DNS Management** for `erosinc.in`.
3. Set the following 2 DNS records:

| Type | Name | Value / Points To | TTL |
| :--- | :--- | :--- | :--- |
| **A Record** | `@` | `76.76.21.21` | 1 Hour |
| **CNAME** | `www` | `cname.vercel-dns.com` | 1 Hour |

---

*Document generated for Eros Inc. Client Handover.*
