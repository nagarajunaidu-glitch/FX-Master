# 🚀 FX Master: Global Money Movement & Multi-Currency Infrastructure

A modern, full-stack Fintech application built with **Next.js / React 18** (Frontend) and **Node.js / Express** (Backend).

---

## 📁 Repository Structure

```
FX-Master/
├── .gitignore                  # GitHub ignore rules (node_modules, .next, .env, etc.)
├── README.md                   # Project documentation & setup instructions
│
├── frontend/                   # Next.js / React Application
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css     # Design tokens, typography, gradients & animations
│   │   │   ├── layout.jsx      # Root layout & Google Fonts
│   │   │   └── page.jsx        # Interactive Homepage & Journey Router
│   │   ├── components/         # Modular Components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── BusinessJourneySection.jsx
│   │   │   ├── IndividualJourneySection.jsx
│   │   │   ├── YourMoneySection.jsx
│   │   │   ├── OnePlatformSection.jsx
│   │   │   ├── ShopFavsSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── AuthModal.jsx
│   │   └── services/
│   │       └── api.js          # API client with offline fallback simulation
│   ├── jsconfig.json
│   ├── next.config.js
│   └── package.json
│
├── backend/                    # Node.js & Express API Server
│   ├── controllers/            # FX conversion, treasury, and transfer controllers
│   ├── routes/                 # Express API routes
│   ├── server.js               # Server entry point
│   └── package.json
│
└── legacy-static/              # Standalone Zero-Dependency Static Prototype
    ├── index.html              # HTML prototype
    ├── styles.css              # Vanilla CSS stylesheets
    └── app.js                  # Vanilla JS logic
```

---

## 🚀 Running the Project Locally

### 1. Start the Backend API (Port 5000)
```bash
cd backend
npm install
npm run dev
```

### 2. Start the Frontend App (Port 3000)
```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🐙 Adding & Pushing to GitHub

To initialize git and push to your GitHub repository:

```bash
# 1. Initialize Git (if not already done)
git init

# 2. Stage all files (node_modules & build artifacts are automatically ignored)
git add .

# 3. Commit your changes
git commit -m "feat: FX Master Business & Individual platform with updated content"

# 4. Set main branch
git branch -M main

# 5. Connect your GitHub remote repository (replace with your repository URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push to GitHub
git push -u origin main
```
