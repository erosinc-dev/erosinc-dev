# GitHub Personal Access Token (PAT) Generation Guide
### Sveltia CMS Authentication for Eros Inc.

**Target CMS Portal:** `https://erosinc.in/admin` / `https://erosinc.vercel.app/admin`  
**Repository:** `github.com/erosinc-dev/erosinc-dev`  
**Purpose:** Authenticate non-technical team members & admins to publish news articles and upload gallery photos directly.

---

## 🔑 Step-by-Step Instructions

### Step 1: Sign in to GitHub
1. Open your web browser and navigate to:  
   👉 **`https://github.com`**
2. Log into your GitHub account (e.g. `erosinc-dev` or your personal GitHub account).

---

### Step 2: Open Developer Settings
1. Click your **Profile Avatar** in the top right corner of GitHub.
2. Click **Settings** from the drop-down menu.
3. On the left sidebar, scroll down to the bottom and click **Developer settings**.

---

### Step 3: Access Personal Access Tokens
1. In the left menu, click **Personal access tokens**.
2. Select **Tokens (classic)**.

---

### Step 4: Generate a New Token
1. Click the **Generate new token** button in the top right corner.
2. Select **Generate new token (classic)**.
3. If prompted for security verification, enter your GitHub password or 2FA code.

---

### Step 5: Configure Token Settings & Scopes
1. **Note (Description):** Type a clear label, such as:  
   `Eros Inc CMS Access`
2. **Expiration:** Select **No expiration** (or 90 days/1 year based on company security preferences).
3. **Select Scopes (Permissions):**  
   Check the box next to **`repo`** (Full control of private repositories).  
   *(This gives Sveltia CMS permission to save blog posts and upload photos to the `content/news` and `public/gallery` folders).*

---

### Step 6: Generate and Copy Your Token
1. Scroll down to the bottom of the page and click the green **Generate token** button.
2. Your token will appear on screen (starts with `ghp_...` or `github_pat_...`).
3. ⚠️ **IMPORTANT:** Click the copy icon next to the token and paste it somewhere safe!  
   *(GitHub will only show you this key ONCE. If you lose it, you can simply generate a new token).*

---

### Step 7: Log in to Sveltia CMS
1. Go to your live CMS login page:  
   👉 **`https://erosinc.in/admin`**
2. Paste your copied token into the authentication box and click **Log In**.
3. You are now logged into the Eros Inc. Content Management System! 🎉

---

## 🔒 Security Best Practices
* **Keep Token Confidential:** Treat your token like a password. Never share it publicly.
* **Revoking Access:** If a team member leaves, you can immediately delete their token under **Developer settings -> Personal access tokens**.
