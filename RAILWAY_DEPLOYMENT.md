# 🚂 Railway Deployment Guide for V-FIX

## Quick Deployment Steps

### Method 1: Deploy from GitHub (Recommended)

#### Step 1: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   cd /tmp/vfix-demo
   git init
   git add .
   git commit -m "Initial commit - V-FIX demo"
   ```

2. **Create a new GitHub repository**:
   - Go to https://github.com/new
   - Name it: `vfix-demo`
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/vfix-demo.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Deploy on Railway

1. **Go to Railway**: https://railway.app/

2. **Sign up/Login**:
   - Use your GitHub account for easy integration

3. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Select your `vfix-demo` repository

4. **Configure (Auto-detected)**:
   - Railway will automatically detect it's a Node.js/Vite project
   - Build command: `npm install && npm run build`
   - Start command: `npm run preview -- --host 0.0.0.0 --port $PORT`

5. **Deploy**:
   - Railway will start building immediately
   - Wait 2-3 minutes for the build

6. **Get Your URL**:
   - Click on your deployment
   - Go to "Settings" → "Networking"
   - Click "Generate Domain"
   - Your app will be live at: `https://your-app-name.up.railway.app`

---

### Method 2: Deploy from Local (Railway CLI)

#### Step 1: Install Railway CLI

```bash
# macOS/Linux
curl -fsSL https://railway.app/install.sh | sh

# Or with npm
npm install -g @railway/cli
```

#### Step 2: Login

```bash
railway login
```

This will open a browser window to authenticate.

#### Step 3: Deploy

```bash
cd /tmp/vfix-demo
railway init
railway up
```

#### Step 4: Get Your URL

```bash
railway domain
```

Or go to your Railway dashboard and generate a domain.

---

## Configuration Files (Already Created)

### ✅ railway.json
Tells Railway how to build and deploy the app.

### ✅ nixpacks.toml
Configures the build environment.

### ✅ vite.config.js (Updated)
Now includes preview configuration for Railway's port system.

---

## Environment Variables

For this demo, no environment variables are needed. But if you want to add any:

1. Go to your project on Railway
2. Click "Variables"
3. Add your variables

---

## Deployment Settings

### Build Command
```bash
npm install && npm run build
```

### Start Command
```bash
npm run preview -- --host 0.0.0.0 --port $PORT
```

### Port
Railway automatically assigns a port via the `$PORT` environment variable.

---

## Troubleshooting

### Build Fails

**Check the logs** in Railway dashboard:
- Common issue: Missing dependencies
- Solution: Make sure `package.json` is correct

### App Not Loading

**Check preview settings**:
```bash
# Test locally first
npm run build
npm run preview
```

### Port Issues

Make sure `vite.config.js` has:
```javascript
preview: {
  port: process.env.PORT || 4173,
  host: '0.0.0.0',
}
```

---

## Post-Deployment

### Share Your Demo

Your V-FIX demo will be live at:
```
https://your-app-name.up.railway.app
```

### Custom Domain (Optional)

1. Go to Railway project settings
2. Click "Networking"
3. Add your custom domain
4. Configure DNS records as shown

### Monitoring

- Railway provides automatic monitoring
- View logs in the dashboard
- Check deployment history
- Monitor resource usage

---

## Costs

### Railway Pricing (as of 2024)

- **Free Tier**: $5 credit/month (enough for demos)
- **Hobby Plan**: $5/month + usage
- **Pro Plan**: $20/month + usage

Your V-FIX demo should run comfortably on the free tier!

---

## Re-deploying Updates

### If Using GitHub:
1. Make your changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update feature X"
   git push
   ```
3. Railway auto-deploys on push!

### If Using CLI:
```bash
railway up
```

---

## Quick Commands Cheat Sheet

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Deploy
railway up

# View logs
railway logs

# Open in browser
railway open

# Get domain
railway domain

# View status
railway status
```

---

## Demo Access URLs

After deployment, share these with investors:

- **Production URL**: `https://your-app-name.up.railway.app`
- **Customer View**: Click "Müşteri Girişi"
- **Technician View**: Click "Teknisyen Girişi"
- **Admin View**: Click "Yönetici Girişi"

---

## Support

- Railway Docs: https://docs.railway.app/
- Railway Discord: https://discord.gg/railway
- Railway Status: https://status.railway.app/

---

## Success Checklist

- ✅ Code pushed to GitHub (or ready for CLI deploy)
- ✅ Railway account created
- ✅ Project deployed
- ✅ Domain generated
- ✅ App accessible online
- ✅ All 3 user roles working
- ✅ Example scenarios loading correctly

---

**Your V-FIX demo is now live and ready to share with investors!** 🚀🎉

