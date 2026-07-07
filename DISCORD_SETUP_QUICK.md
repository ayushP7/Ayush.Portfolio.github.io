# Discord Visitor Tracking - Quick Setup (5 Minutes)

## ⚡ Already Added to Your Code!

Your `script.js` already has Discord visitor tracking built-in! Just need to add your webhook URL.

---

## **SETUP STEPS:**

### **Step 1: Create Discord Server** (1 minute)
If you don't have one:
- Go to https://discord.com/app
- Click "+" to create a new server
- Name it: "Portfolio Visitors"
- Create

### **Step 2: Create Channel** (1 minute)
In your Discord server:
- Right-click in sidebar
- Create Channel
- Name: `#website-visitors`
- Click Create

### **Step 3: Get Webhook URL** (2 minutes)
1. Right-click on `#website-visitors` channel
2. Click "Edit Channel"
3. Left sidebar → "Integrations"
4. Click "Webhooks"
5. Click "New Webhook"
6. Name it: "Portfolio Tracker"
7. Click "Copy Webhook URL"
8. **Save this URL** - you'll need it next

Example URL (yours will be different):
```
https://discordapp.com/api/webhooks/1234567890/abcDEFghijKLMnopQRSTuvwxyz
```

### **Step 4: Add URL to Your Code** (1 minute)
Open `script.js` and find this line (around line 7):
```javascript
const WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL_HERE';
```

Replace it with your URL:
```javascript
const WEBHOOK_URL = 'https://discordapp.com/api/webhooks/1234567890/abcDEFghijKLMnopQRSTuvwxyz';
```

### **Step 5: Push to GitHub**
```bash
git add script.js
git commit -m "Add Discord webhook URL for visitor tracking"
git push origin main
```

---

## **✅ DONE!**

Now every visitor to your site will:
1. Generate a Discord message in your `#website-visitors` channel
2. Show visitor info:
   - ⏰ Time visited
   - 📱 Device type (iPhone/Android/Desktop/Tablet)
   - 💻 Platform (Windows/Mac/Linux)
   - 🖥️ Screen resolution
   - 🌐 Browser info
   - 🔗 Where they came from (referrer)
   - 🗣️ Language
   - 🕐 Timezone

---

## **EXAMPLE DISCORD MESSAGE:**

```
🎉 New Portfolio Visitor!
Someone visited your portfolio 👀

⏰ Time Visited: 7/7/2026, 3:45:22 PM
📱 Device Type: Desktop
💻 Platform: Windows NT 10.0
🖥️ Screen Resolution: 1920x1080
🌐 Browser Info: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/127.0.0.0
🔗 Referrer (From): Direct visit
🗣️ Language: en-US
🕐 Timezone: America/New_York

Portfolio Visitor Tracker
```

---

## **MOBILE NOTIFICATIONS:**

Discord app on your phone will send:
- 📲 Instant push notification
- 🔔 Every time someone visits
- ✨ Works even if your computer is off

---

## **SECURITY:**

- ✅ **No personal data** - Only device/browser info
- ✅ **No IP logging** - Privacy protected
- ✅ **No tracking code** - Just visitor counts
- ✅ **Your webhook URL** - Only you can see it
- ✅ **GitHub safe** - Keep webhook URL secret!

---

## **❓ TROUBLESHOOTING:**

**Q: No messages in Discord?**
- Check if webhook URL is correct
- Hard refresh your portfolio (Ctrl+F5)
- Check Discord permissions on channel

**Q: Error in console?**
- Open DevTools (F12)
- Check Console tab
- Look for any error messages
- Make sure webhook URL has no extra spaces

**Q: Too many notifications?**
- Discord has rate limiting
- Multiple visits won't all send messages
- This is Discord's protection

---

## **THAT'S IT! 🎉**

Your portfolio now has:
✅ Discord visitor notifications
✅ Real-time alerts on your phone
✅ Complete visitor information
✅ Zero Google Analytics

**Start getting visitor notifications now!**
