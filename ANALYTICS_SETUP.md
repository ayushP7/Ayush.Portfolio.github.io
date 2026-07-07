# Analytics Setup Guide - Track Your Portfolio Visitors

## ✅ Google Analytics Setup (Best Option - FREE)

### What You'll Get:
- 📊 Real-time visitor count
- 🗺️ Visitor location (country, city)
- 📱 Device type (mobile, desktop, tablet)
- 🌐 Traffic sources (direct, search, social)
- ⏱️ Average session duration
- 📈 Page views and bounce rate
- 🎯 Visitor interests and behavior

### Step-by-Step Setup:

#### 1. Create Google Analytics Account
```
1. Visit: https://analytics.google.com/
2. Click "Start measuring"
3. Create new property
4. Website name: "Ayush Portfolio"
5. Website URL: https://ayushp7.github.io/Ayush.Portfolio.github.io
6. Copy your Measurement ID (G-XXXXXXXXXX)
```

#### 2. Update Your Portfolio Code
In your `index.html`, replace `G-XXXXXXXXXX` with your actual Measurement ID:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID-HERE"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YOUR-ID-HERE');
</script>
```

**Example:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF45"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-ABC123DEF45');
</script>
```

#### 3. Push Changes to GitHub
```bash
git add index.html
git commit -m "Add Google Analytics tracking"
git push origin main
```

#### 4. Wait 24-48 Hours
Google Analytics takes time to collect data. After 24-48 hours:
- Go to https://analytics.google.com/
- You'll see visitor statistics
- Real-time data shows current visitors

### What You Can Track:

**Real-Time Data:**
- Currently active visitors
- Current page views
- Live user locations
- Real-time traffic

**Key Metrics:**
- Total visitors (users)
- Page views
- Bounce rate
- Average session duration
- Traffic sources
- Device breakdown
- Geographic data
- Browser/OS information

### Dashboard View:
```
Home Dashboard
├── Active Users (Real-time)
├── Session/User Overview
├── Traffic Sources
│   ├── Organic Search
│   ├── Direct
│   ├── Social
│   └── Referral
├── User Demographics
│   ├── Country
│   ├── City
│   └── Language
├── Devices
│   ├── Desktop
│   ├── Mobile
│   └── Tablet
└── Pages & Screens
    └── Page views by URL
```

---

## 🔄 Alternative: Other Analytics Tools

### 2. StatCounter (Free Tier)
- **URL:** https://statcounter.com/
- **Pros:** Simple, visual charts, no login required
- **Setup:** Add tracking code snippet
- **Best for:** Basic visitor count

### 3. Plausible Analytics
- **URL:** https://plausible.io/
- **Pros:** Privacy-focused, lightweight, GDPR compliant
- **Pricing:** Paid (no free tier, ~$9/month)
- **Best for:** Privacy-conscious tracking

### 4. Hotjar (Free + Paid)
- **URL:** https://www.hotjar.com/
- **Features:** Heatmaps, session recordings, surveys
- **Pricing:** Free tier available (~$39/month for pro)
- **Best for:** Detailed user behavior

### 5. Matomo
- **URL:** https://matomo.org/
- **Pros:** Self-hosted, open-source
- **Best for:** Maximum control & privacy

---

## 📱 Simple Visitor Counter Alternative

If you just want a simple counter, use this:

**Add to your HTML:**
```html
<!-- Simple Visitor Counter -->
<script async src="https://www.counter.dev/script.js" data-id="12345678" data-utcoffset="0"></script>
```

**Get your counter ID:** https://www.counter.dev/

---

## 🎯 Recommended Setup:

1. **Best:** Google Analytics (free, comprehensive)
2. **Easy:** StatCounter (simple setup, basic tracking)
3. **Privacy:** Plausible (privacy-focused but paid)

---

## 📊 What Data is Already Collected?

GitHub Pages automatically tracks:
- ✅ Page views (via GitHub's logs)
- ✅ Referrer information
- ✅ Visit timestamps

**To access GitHub traffic:**
1. Go to your GitHub repository
2. Click "Insights" tab
3. Select "Traffic"
4. View referrers and clones

---

## ✅ Current Status:

Google Analytics code has been added to your `index.html`. 

**Next steps:**
1. Get your Measurement ID from Google Analytics
2. Replace `G-XXXXXXXXXX` in the code
3. Push to GitHub
4. Wait 24-48 hours
5. Check analytics dashboard

**Any questions about setup?** Let me know!
