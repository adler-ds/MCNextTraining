# Marketing Cloud Next Training

Comprehensive training program for **Marketing Cloud Next** (Agentforce Marketing) integrated with **Salesforce Loyalty Management**.

Built for internal Salesforce product and technical teams using Northern Trail Outfitters (NTO) Rewards as the example scenario.

## 🏔️ Training Structure

### Pyramid Approach
- **Level 1: Foundation** - Prerequisites and basic concepts
- **Level 2: Practitioner (Core)** - Hands-on modules for day-to-day work
- **Level 3: Advanced** - Optional deep-dives and edge cases
- **Level 4: Implementation Guide** - Optional professional services guidance

### Current Modules
- ✅ **Module 1: The Data Foundation** - Data Streams, Identity Resolution, Unified Individuals, Loyalty DMOs
- 🚧 Module 2: Segmentation (Coming Soon)
- 🚧 Module 3: Data Graphs (Coming Soon)
- 🚧 Module 4: Consent Management (Coming Soon)
- 🚧 Module 5: Content Builder (Coming Soon)
- 🚧 Module 6: Flows & Automation (Coming Soon)
- 🚧 Module 7: Loyalty Integration (Coming Soon)
- 🚧 Module 8: Analytics & Reporting (Coming Soon)

## 🚀 Local Development

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Setup
```bash
# Clone the repository
git clone <your-repo-url>
cd mc-next-training

# Install dependencies
npm install

# Start development server
npm run dev

# Or start production server
npm start
```

The server will start on `http://localhost:8000`

- **Module 1**: http://localhost:8000/modules/module-01-data-foundation.html
- **Health Check**: http://localhost:8000/health

## 📦 Deployment

### Step 1: Push to GitHub

1. **Create a new repository on GitHub** (e.g., `mc-next-training`)
   - Go to https://github.com/new
   - Name: `mc-next-training`
   - Description: "Marketing Cloud Next Training with Loyalty Management"
   - Keep as Private (internal training materials)
   - Don't initialize with README (we already have one)

2. **Push your local repository to GitHub**
   ```bash
   # Add GitHub as remote
   git remote add origin https://github.com/YOUR-USERNAME/mc-next-training.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Heroku (Automatic Deploys from GitHub)

1. **Create Heroku App**
   - Go to https://dashboard.heroku.com
   - Click "New" → "Create new app"
   - App name: `mc-next-training` (or your preferred name)
   - Region: Choose your region
   - Click "Create app"

2. **Connect to GitHub**
   - In your Heroku app dashboard, go to the "Deploy" tab
   - Under "Deployment method", click "GitHub"
   - Click "Connect to GitHub" and authorize if needed
   - Search for your repository: `mc-next-training`
   - Click "Connect"

3. **Enable Automatic Deploys**
   - Scroll to "Automatic deploys" section
   - Choose branch: `main`
   - Click "Enable Automatic Deploys"
   - (Optional) Check "Wait for CI to pass before deploy" if you add CI later

4. **Initial Deploy**
   - Scroll to "Manual deploy" section
   - Choose branch: `main`
   - Click "Deploy Branch"
   - Wait for build to complete

5. **Open Your App**
   - Click "Open app" button at top right
   - Or visit: `https://mc-next-training.herokuapp.com`

### Subsequent Updates

```bash
# Make your changes locally
# Test: npm start

# Commit and push to GitHub
git add .
git commit -m "Update Module 1 styling"
git push origin main

# Heroku will automatically deploy! 🎉
# Check deploy progress in Heroku dashboard → Activity tab
```

### Heroku Configuration

The app is configured with:
- **Node.js Buildpack** (automatic detection)
- **Procfile** specifying `web: node server.js`
- **Express Server** serving static files
- **Compression** middleware for faster loading
- **Health Check** endpoint at `/health`

### Monitoring

**Via Heroku Dashboard:**
- Activity tab: View deployment history
- Resources tab: View dyno status
- Metrics tab: View app performance
- Logs: Click "More" → "View logs"

**Via Heroku CLI** (optional):
```bash
# Install CLI
brew tap heroku/brew && brew install heroku

# Login
heroku login

# View logs
heroku logs --tail --app mc-next-training

# Check app status
heroku ps --app mc-next-training

# Restart app
heroku restart --app mc-next-training
```

## 📸 Screenshots

Screenshots should be placed in the `/screenshots/` directory with the naming convention:
- `mod1-step1-description.jpg`
- `mod1-step2-description.jpg`
- etc.

See `screenshot-tracker.md` (when created) for a complete list of needed screenshots.

## 📚 Reference Materials

All reference materials are tracked in:
- `/referance docs/reference-sources.md` - Master catalog of PDFs, videos, Slack canvases
- `/overview/key-concepts-summary.md` - Consolidated key concepts

## 🎨 Branding

The training uses:
- **NTO Brand**: Orange (#f26522) and Dark Blue (#032d60)
- **Salesforce Brand**: Blue (#0176d3) accents
- **Typography**: Salesforce Sans font family

## 🤝 Contributing

This is an internal training resource. Contributions should follow:
1. Keep content accurate to current MC Next releases (track release notes)
2. Use NTO Rewards loyalty scenario throughout
3. Include screenshot placeholders for hands-on labs
4. Follow the pyramid structure (Core → Advanced → Implementation)

## 📋 To-Do

- [ ] Create index.html landing page with pyramid navigation
- [ ] Create remaining modules (2-8)
- [ ] Add JavaScript interactivity (progress tracking, quiz functionality)
- [ ] Add video embeds for Vidyard training videos
- [ ] Create screenshot tracker document
- [ ] Add search functionality
- [ ] Add print-friendly CSS enhancements

## 📄 License

Internal Salesforce Training Material - Not for external distribution

---

**Release Context**: Currently aligned with Release 262 (Summer '26) - May/June 2026
