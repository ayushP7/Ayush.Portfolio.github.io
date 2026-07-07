# Discord Visitor Tracker - Complete Setup Guide

## ✅ What This Does

Every time someone visits your portfolio, you get a **Discord message** with:
- ⏰ Exact time they visited
- 📱 Device type (iOS, Android, Windows, Mac, etc.)
- 💻 Platform information
- 🖥️ Screen resolution
- 🌐 Browser details
- 🔗 Where they came from (referrer)
- 🗣️ Their language
- 🕐 Their timezone

**All in real-time!** You get instant notifications.

---

## 🚀 Step-by-Step Setup (10 Minutes)

### **Step 1: Create Discord Server (2 minutes)**

If you don't have Discord:
1. Download Discord from https://discord.com/download
2. Create account
3. Create new server (+ button)
4. Name it: "Portfolio Tracking" or similar
5. Create channel: #visitors

If you already have Discord:
- Just create a new channel in your existing server

### **Step 2: Create Discord Webhook (3 minutes)**

1. Right-click your #visitors channel
2. Click "Edit Channel"
3. Go to "Integrations" section
4. Click "Create Webhook"
5. Name it: "Portfolio Tracker"
6. Click "Copy Webhook URL"
7. **SAVE THIS URL** (keep it safe!)

**Your webhook URL looks like:**
```
https://discord.com/api/webhooks/1234567890/abcdefghijklmnop
```

### **Step 3: Update Your Code (2 minutes)**

In your `script.js` file, find this line (around line 12):

```javascript
const WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL_HERE';
```

Replace `'YOUR_DISCORD_WEBHOOK_URL_HERE'` with your actual webhook URL:

```javascript
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1234567890/abcdefghijklmnop';
```

### **Step 4: Push to GitHub (3 minutes)**

```bash
git add script.js
git commit -m "Add Discord visitor tracking"
git push origin main
```

### **Step 5: Test It!**

1. Wait 1-2 minutes for changes to deploy
2. Visit your portfolio: https://ayushp7.github.io/Ayush.Portfolio.github.io
3. Check your Discord #visitors channel
4. **You should see a visitor message!** 🎉

---

## 📊 What You'll See

Each visitor will appear as a beautifully formatted Discord embed:

```
🎉 New Portfolio Visitor!
Someone visited your portfolio 👀

⏰ Time Visited: 12/20/2024, 3:45:30 PM
📱 Device Type: Windows
💻 Platform: Win32
🖥️ Screen Resolution: 1920x1080

🌐 Browser Info: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36...

🔗 Referrer (From): Direct visit

🗣️ Language: en-US
🕐 Timezone: America/New_York
```

---

## 🔐 Security Notes

⚠️ **Important:**
- Your webhook URL is like a password
- Don't share it publicly
- Don't commit it to a public GitHub repo

**If you accidentally expose it:**
1. Go to Discord channel settings
2. Delete the webhook
3. Create a new one
4. Update your code

---

## 📱 Get Mobile Notifications

To get instant notifications on your phone:

1. Download Discord app (App Store or Google Play)
2. Sign in to your account
3. Enable notifications for #visitors channel
4. Every visitor = phone notification! 📲

---

## 🎯 Multiple Channels (Optional)

If you want different channels for different data:

```javascript
// Separate webhooks for different purposes
const MAIN_WEBHOOK = 'https://discord.com/api/webhooks/xxx/yyy';
const MOBILE_WEBHOOK = 'https://discord.com/api/webhooks/aaa/bbb';

// Send to different channels based on device
if (deviceType.includes('Mobile')) {
    fetch(MOBILE_WEBHOOK, { ... });
} else {
    fetch(MAIN_WEBHOOK, { ... });
}
```

---

## ✨ Customization Ideas

### Change the embed color:
```javascript
color: 3447003, // Change this number (0-16777215)
```

Color options:
- Red: 15158332
- Green: 3066993
- Blue: 3447003
- Purple: 10181046
- Orange: 15105570

### Add your avatar:
```javascript
author: {
    name: "Ayush's Portfolio",
    icon_url: "https://your-image-url.com/avatar.png"
}
```

### Change the title:
```javascript
title: '🎉 New Portfolio Visitor!', // Change this text
```

---

## 🐛 Troubleshooting

### "Not getting Discord messages?"

**Check 1:** Is your webhook URL correct?
- Copy it again from Discord
- Make sure you replaced 'YOUR_DISCORD_WEBHOOK_URL_HERE' completely

**Check 2:** Is code deployed?
- Run `git push origin main`
- Wait 1-2 minutes for GitHub to update
- Refresh your portfolio

**Check 3:** Check browser console for errors
- Press F12
- Go to Console tab
- Refresh your site
- Look for error messages

**Check 4:** Is webhook still valid?
- Go to Discord channel → Edit Channel → Integrations
- Check if webhook still exists
- If not, create a new one and update code

### "Getting multiple messages?"
- This is normal! It means tracking is working
- Each page load = one message
- Each bot visit = one message

### "Want to disable tracking temporarily?"
```javascript
// Comment out this line:
// trackVisitorToDiscord();
```

---

## 📊 Viewing Your Data

**To see all visitors:**
1. Open Discord
2. Go to #visitors channel
3. Scroll through messages
4. Each message = one visitor

**To export data:**
- Take screenshots
- Right-click message → Copy Message Link
- Discord keeps history (default: 100 days)

---

## 🎁 Bonus: Track Page-Specific Visits

If you want to know WHICH page they visited:

```javascript
// Add this to see which page
function trackPageVisit(page) {
    console.log(`User visited: ${page}`);
    // The current page is already tracked in the embed
}

// Call on different pages if needed
trackPageVisit('Hero Section');
trackPageVisit('Projects');
```

---

## ✅ Setup Complete!

You now have:
- ✅ Real-time visitor tracking
- ✅ Discord notifications
- ✅ Device & browser info
- ✅ Geographic data (timezone)
- ✅ Referrer tracking
- ✅ Mobile notifications (optional)

**Enjoy seeing who visits your portfolio!** 🚀

---

## 📞 Questions?

If webhook stops working:
1. Create new webhook in Discord
2. Update URL in script.js
3. Push to GitHub
4. It works again!

**That's it!**
