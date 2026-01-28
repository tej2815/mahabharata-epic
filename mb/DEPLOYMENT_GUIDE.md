# Deployment Guide - Mahabharata Epic Website

## 🚀 Fastest Method: Netlify Drag & Drop

### Steps:

1. **Visit Netlify**
   - Go to: https://app.netlify.com/drop
   - No account needed for testing!

2. **Drag Your Folder**
   - Open File Explorer
   - Navigate to: `C:\Users\theja\OneDrive\Documents\mb`
   - Drag the ENTIRE `mb` folder onto the Netlify drop zone

3. **Done!**
   - Your site is instantly live
   - You'll get a URL like: `https://random-name-12345.netlify.app`
   - Share this URL with anyone!

4. **Optional: Customize URL**
   - Sign up for free account
   - Change site name to: `mahabharata-epic.netlify.app`

---

## 🐙 GitHub Pages (Free Permanent Hosting)

### Steps:

1. **Install Git** (if not already installed)
   - Download from: https://git-scm.com/download/win

2. **Create GitHub Account**
   - Go to: https://github.com
   - Sign up (free)

3. **Create New Repository**
   - Click the "+" icon → "New repository"
   - Name: `mahabharata-epic`
   - Check "Public"
   - Click "Create repository"

4. **Upload Files via Web Interface**
   - In your new repository, click "Add file" → "Upload files"
   - Drag all files from `C:\Users\theja\OneDrive\Documents\mb`
   - Commit changes

5. **Enable GitHub Pages**
   - Go to repository Settings
   - Click "Pages" in left sidebar
   - Under "Source", select "main" branch
   - Click Save

6. **Access Your Site**
   - Wait 1-2 minutes
   - Your site will be at: `https://yourusername.github.io/mahabharata-epic/`

---

## 💻 Alternative: Using Git Commands

If you want to use Git from command line:

```bash
# Navigate to your project folder
cd C:\Users\theja\OneDrive\Documents\mb

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Mahabharata Epic Website"

# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/mahabharata-epic.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

---

## ✅ Verify Deployment

After deployment, check that:
- [ ] Hero image loads correctly
- [ ] Scroll animations work
- [ ] All 18 Parvas are visible
- [ ] Family tree is interactive
- [ ] Navigation links work
- [ ] Mobile responsive

---

## 🔗 Custom Domain (Optional)

If you want your own domain like `mahabharata-epic.com`:

1. Buy domain from: Namecheap, GoDaddy, Google Domains
2. In Netlify/GitHub Pages settings, add custom domain
3. Update DNS records as instructed

---

## 📊 Recommended: Netlify

**Why Netlify is best for beginners:**
- ✅ Drag and drop deployment
- ✅ Automatic SSL certificate (HTTPS)
- ✅ Free hosting forever
- ✅ Instant updates when you change files
- ✅ Custom domain support
- ✅ No configuration needed

---

## 🆘 Troubleshooting

**Images not loading?**
- Make sure the `images` folder is included in deployment
- Check that image path in HTML is correct: `images/krishna-arjuna-gita.jpg`

**Styles not working?**
- Verify `style.css` and `script.js` are in the same folder as `index.html`

**404 Error?**
- Make sure `index.html` is in the root directory
- Wait a few minutes after deployment

---

## 🎉 That's It!

Your website is now live on the internet! Share the URL with friends and family to experience the Mahabharata epic.
