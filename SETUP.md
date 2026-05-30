# DayOne Studio Portfolio — Setup Guide

## What you're building
A dark-themed developer portfolio with:
- **Hero** section with animated availability badge
- **Services** section (LaunchPad Sites + MVP Sprints)
- **Work** section with filterable project cards
- **Contact** form
- Fully responsive, mobile-first design

---

## STEP 1 — Prerequisites

Make sure you have these installed. Open your terminal and check:

```bash
node -v    # needs to be v18 or higher
npm -v     # should come with Node
```

If Node isn't installed, download it from https://nodejs.org (choose the LTS version).

---

## STEP 2 — Create the project folder

Open VS Code, then open its integrated terminal (`Ctrl+`` ` on Windows, `Cmd+`` ` on Mac).

```bash
# Navigate to wherever you keep your projects
cd ~/Documents   # or cd C:\Users\YourName\Documents on Windows

# Create the project using Vite
npm create vite@latest dayone-studio -- --template react

# Move into the folder
cd dayone-studio

# Open it in VS Code
code .
```

---

## STEP 3 — Replace the generated files with this project's code

Vite creates some boilerplate files. You need to **replace them** with the files provided.

### Files to copy/replace:

| This repo file | → | Put it here in your project |
|---|---|---|
| `src/main.jsx` | → | `src/main.jsx` (replace) |
| `src/App.jsx` | → | `src/App.jsx` (replace) |
| `src/index.css` | → | `src/index.css` (replace) |
| `index.html` | → | `index.html` (replace) |
| `vite.config.js` | → | `vite.config.js` (replace) |

### Files to CREATE (these don't exist in the Vite template):

Copy each of these into your project at the exact same path:

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Hero.jsx
│   ├── Hero.css
│   ├── Services.jsx
│   ├── Services.css
│   ├── Work.jsx
│   ├── Work.css
│   ├── ProjectCard.jsx
│   ├── ProjectCard.css
│   ├── Contact.jsx
│   ├── Contact.css
│   ├── Footer.jsx
│   └── Footer.css
└── data/
    └── projects.js
```

### Files to DELETE from the Vite template:
- `src/App.css`
- `src/assets/react.svg`
- `public/vite.svg`

---

## STEP 4 — Install dependencies

In your VS Code terminal:

```bash
npm install
```

This installs React, Vite, and all dependencies listed in `package.json`.

---

## STEP 5 — Run the dev server

```bash
npm run dev
```

You should see output like:

```
  VITE v5.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open `http://localhost:5173` in your browser. Your portfolio is live! 🎉

---

## STEP 6 — Personalise the content

### 6a. Change your name and details

Open `src/components/Hero.jsx` and update:
- The availability message
- The stats (40+ projects, etc.)

Open `src/components/Contact.jsx` and update:
- `hello@dayone.studio` → your actual email
- Any other contact info

Open `src/components/Footer.jsx` and update the name.

Open `index.html` and update:
- `<title>` tag
- `<meta name="description">` tag

### 6b. Add your real projects

Open `src/data/projects.js`. This is where ALL your projects live.

Each project object looks like this:

```js
{
  id: 1,
  type: "launchpad",   // ← "launchpad" or "mvp"
  title: "Project Name",
  tagline: "Short punchy line shown on the card.",
  description: "Longer description shown on hover.",
  tags: ["React", "SEO"],
  liveUrl: "https://yourproject.com",
  imageUrl: "/images/your-project.jpg",  // or null for a placeholder
  year: "2025",
  highlight: "3× orders",   // or null
}
```

**To add a LaunchPad Site**, copy the template and set `type: "launchpad"`.
**To add an MVP Sprint**, copy the template and set `type: "mvp"`.

### 6c. Add project screenshots

1. Create a `public/images/` folder in your project root
2. Drop your screenshots in there (JPG or PNG, 1280×720 recommended)
3. In `projects.js`, set `imageUrl: "/images/your-file.jpg"`

---

## STEP 7 — Hook up the contact form

The form currently simulates a submission. To make it actually send emails:

### Option A — Formspree (easiest, free tier available)
1. Go to https://formspree.io and create an account
2. Create a new form and copy your Form ID (looks like `xpzvabcd`)
3. Open `src/components/Contact.jsx` and replace the demo block:

```js
// Replace the "Demo: simulate" line with:
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
if (!res.ok) throw new Error('Failed')
setStatus('sent')
```

### Option B — EmailJS (no backend needed)
1. Go to https://www.emailjs.com
2. Follow their React quickstart guide

---

## STEP 8 — Build for production

When you're ready to deploy:

```bash
npm run build
```

This creates a `dist/` folder with your optimised site.

### Deploy options:
- **Vercel** (recommended): `npm i -g vercel && vercel`
- **Netlify**: Drag and drop the `dist/` folder at netlify.com
- **GitHub Pages**: Push to GitHub and enable Pages with the `dist` folder

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm: command not found` | Install Node.js from nodejs.org |
| Port 5173 already in use | Run `npm run dev -- --port 3000` |
| CSS not applying | Make sure each `.css` file is imported in its `.jsx` pair |
| Images not showing | Put images in `/public/images/` and use `/images/filename.jpg` as the path |
| Form not submitting | Hook up Formspree or EmailJS (Step 7) |

---

## Project structure overview

```
dayone-studio/
├── index.html              ← Page shell + Google Fonts
├── vite.config.js          ← Vite config (React plugin)
├── package.json            ← Dependencies
├── public/
│   └── images/             ← Your project screenshots go here
└── src/
    ├── main.jsx            ← React entry point
    ├── App.jsx             ← Assembles all sections
    ├── index.css           ← Global styles & CSS variables
    ├── components/         ← One file per section
    │   ├── Navbar.*
    │   ├── Hero.*
    │   ├── Services.*
    │   ├── Work.*
    │   ├── ProjectCard.*
    │   ├── Contact.*
    │   └── Footer.*
    └── data/
        └── projects.js     ← ✏️  YOUR PROJECTS — edit this file
```
