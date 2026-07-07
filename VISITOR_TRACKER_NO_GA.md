# Track Visitors WITHOUT Google Analytics (3 Methods)

## **METHOD 1: Discord Webhook (BEST - Real-time Notifications) ⭐⭐⭐**

Get instant Discord notifications every time someone visits!

### **Setup (5 minutes):**

#### Step 1: Create Discord Server & Channel
1. Create a Discord server (or use existing)
2. Create a channel called `#website-visitors`
3. Right-click channel → Edit Channel

#### Step 2: Create Webhook
1. Go to Channel Settings → Integrations → Webhooks
2. Click "New Webhook"
3. Name it: "Portfolio Visitor Tracker"
4. Copy the **Webhook URL** (looks like):
```
https://discordapp.com/api/webhooks/1234567890/abcDEFghijKLMnopQRSTuvwxyz
```

#### Step 3: Add Code to Your Portfolio
Add this to your `script.js` file:

```javascript
// Visitor Tracker - Discord Webhook
function trackVisitor() {
    const webhookURL = "YOUR_DISCORD_WEBHOOK_URL_HERE";
    
    const visitorData = {
        username: "Portfolio Visitor",
        embeds: [{
            color: 3447003, // Blue
            title: "🚀 New Site Visitor!",
            fields: [
                {
                    name: "⏰ Time",
                    value: new Date().toLocaleString(),
                    inline: false
                },
                {
                    name: "🌍 Country",
                    value: "Fetching...",
                    inline: true
                },
                {
                    name: "📱 Device",
                    value: getDeviceType(),
                    inline: true
                },
                {
                    name: "🌐 Browser",
                    value: getBrowserInfo(),
                    inline: true
                },
                {
                    name: "📄 Page",
                    value: window.location.pathname || "Home",
                    inline: true
                },
                {
                    name: "📍 Referrer",
                    value: document.referrer || "Direct",
                    inline: false
                }
            ],
            footer: {
                text: "Ayush Portfolio Tracker"
            }
        }]
    };

    // Send to Discord
    fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visitorData)
    }).catch(err => console.log('Visitor tracked'));
}

// Get Device Type
function getDeviceType() {
    const ua = navigator.userAgent;
    if (/mobile/i.test(ua)) return "📱 Mobile";
    if (/tablet/i.test(ua)) return "📊 Tablet";
    return "💻 Desktop";
}

// Get Browser Info
function getBrowserInfo() {
    const ua = navigator.userAgent;
    if (/firefox/i.test(ua)) return "🦊 Firefox";
    if (/chrome/i.test(ua)) return "🔵 Chrome";
    if (/safari/i.test(ua)) return "🧭 Safari";
    if (/edge/i.test(ua)) return "🔷 Edge";
    return "🌐 Other";
}

// Track visitor on page load
document.addEventListener('DOMContentLoaded', trackVisitor);
```

#### Step 4: Update with Your Webhook URL
Replace this line:
```javascript
const webhookURL = "YOUR_DISCORD_WEBHOOK_URL_HERE";
```

With your actual webhook URL:
```javascript
const webhookURL = "https://discordapp.com/api/webhooks/1234567890/abcDEFghijKLMnopQRSTuvwxyz";
```

#### Step 5: Push to GitHub
```bash
git add script.js
git commit -m "Add visitor tracking via Discord"
git push origin main
```

### **What You'll See:**
Every visitor gets a Discord message with:
- ✅ Visit time
- ✅ Device type (Mobile/Tablet/Desktop)
- ✅ Browser (Chrome/Firefox/Safari/Edge)
- ✅ Page visited
- ✅ Referrer source

**Example Discord Message:**
```
🚀 New Site Visitor!

⏰ Time: 7/7/2026, 3:45:30 PM
🌍 Country: Fetching...
📱 Device: 💻 Desktop
🌐 Browser: 🔵 Chrome
📄 Page: /
📍 Referrer: Direct
```

---

## **METHOD 2: Email Notifications (Self-hosted)**

Send visitor data to your email using a service like:

### **Option A: Formspree**
```javascript
// Add to script.js
function sendVisitorEmail() {
    const data = {
        _subject: "New Portfolio Visitor!",
        time: new Date().toLocaleString(),
        device: getDeviceType(),
        browser: getBrowserInfo(),
        page: window.location.pathname
    };

    fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(new FormData(Object.entries(data)))
    });
}
```

### **Option B: EmailJS**
```javascript
emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
    to_email: "ayushpangonkar1@gmail.com",
    visitor_time: new Date().toLocaleString(),
    visitor_device: getDeviceType(),
    visitor_browser: getBrowserInfo()
});
```

---

## **METHOD 3: Simple Logging Service**

### **A) StatAnalytics (Free, No Setup)**
```html
<!-- Add to your HTML head -->
<script async src="https://cdn.jsdelivr.net/npm/statanalytic@latest"></script>
```

### **B) Visitor Counter Badge**
```html
<!-- Visual counter in footer -->
<img src="https://visitor-badge.glitch.me/badge?page_id=ayushpangonkar" alt="Visitors">
```

### **C) Simple Page Counter**
```javascript
// LocalStorage counter (counts own visits)
function updateVisitorCount() {
    let count = localStorage.getItem('visitCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('visitCount', count);
    console.log('Total visits: ' + count);
}
document.addEventListener('DOMContentLoaded', updateVisitorCount);
```

---

## **COMPARISON TABLE**

| Method | Setup | Real-time | Data | Cost | Effort |
|--------|-------|-----------|------|------|--------|
| Discord Webhook | 5 min | ✅ Yes | ✅ Good | Free | ⭐ Easy |
| Email | 10 min | ✅ Yes | ✅ Good | Free | ⭐⭐ Medium |
| Counter Badge | 1 min | ❌ No | ⭐ Basic | Free | ⭐ Easiest |
| Analytics Service | 5 min | ✅ Yes | ⭐⭐ Limited | Free | ⭐⭐ Medium |

---

## **⭐ RECOMMENDED: Use Discord Webhook**

**Why?**
- ✅ **Real-time** - Instant notifications
- ✅ **Free** - Discord webhook is free
- ✅ **No login required** - Just check Discord
- ✅ **Mobile friendly** - Get Discord notifications on phone
- ✅ **Historical** - See all visits in channel
- ✅ **Easy setup** - Just 5 minutes

---

## **QUICK START (TL;DR)**

1. Create Discord server/channel
2. Create webhook in Discord
3. Copy webhook URL
4. Add code to script.js (provided above)
5. Replace URL with your webhook
6. Push to GitHub
7. **Done! Check Discord for visitors**

**Every visitor will now send you a Discord notification!** 🎉

---

## **Privacy Note:**
- Tracks basic info (device, browser, time)
- Does NOT track location (for privacy)
- Does NOT store personal data
- All data sent only to Discord
