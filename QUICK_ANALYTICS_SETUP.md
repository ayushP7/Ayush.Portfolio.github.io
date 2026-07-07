# Quick Analytics Setup (5 Minutes)

## 🚀 Fastest Way to Track Visitors

### Option 1: Google Analytics (Recommended)

**Step 1: Get Your ID (2 minutes)**
1. Go to https://analytics.google.com/
2. Sign in with Google
3. Click "Start measuring"
4. Create property: "Ayush Portfolio"
5. Website URL: your GitHub Pages URL
6. Accept terms
7. **Copy your Measurement ID** (looks like: `G-ABC123XYZ789`)

**Step 2: Update Code (1 minute)**
Replace `G-XXXXXXXXXX` in your `index.html` with your actual ID:

Find this line in index.html (around line 40):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

Replace `G-XXXXXXXXXX` with your ID like:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ789"></script>
```

Also update this line (same script section):
```html
gtag('config', 'G-XXXXXXXXXX');
```
To:
```html
gtag('config', 'G-ABC123XYZ789');
```

**Step 3: Push to GitHub (1 minute)**
```bash
git add index.html
git commit -m "Add Google Analytics"
git push origin main
```

**Step 4: Wait & Check (24-48 hours)**
After 24-48 hours:
- Visit https://analytics.google.com/
- See who visited your site
- Check real-time visitors, locations, devices, etc.

---

## 📊 What You'll See in Google Analytics:

✅ How many people visited  
✅ Which countries/cities they're from  
✅ Mobile vs Desktop  
✅ Time spent on site  
✅ Which pages they viewed  
✅ How they found your site  
✅ Session duration  
✅ Bounce rate  

---

## 🔗 Live Dashboard

Once setup:
- **Real-time:** https://analytics.google.com/ → Reports → Real-time
- **All traffic:** https://analytics.google.com/ → Reports → Overview

---

## ⚡ Instant Alternative (No Setup)

If you want instant results without code changes:

**Check GitHub built-in traffic:**
1. Go to your GitHub repo
2. Click "Insights" tab
3. Click "Traffic"
4. See referrers and unique visitors

(But this is very limited - Google Analytics is better)

---

## ❓ Still Confused?

**Your measurement ID:**
- Where to find: Google Analytics → Admin → Property → Property Settings
- Looks like: `G-XXXXXXXXXXXXX` (starts with "G-")
- Where to put: Two places in index.html (both shown above)

That's it! 🎉
