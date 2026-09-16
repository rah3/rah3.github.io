# rahiedatta.dev

**Repo:** `rahiedatta.dev/rahiedatta.dev`  
**Live:** https://rahiedatta.dev/rahiedatta.dev  
**GitHub Pages:** https://rahiedatta.dev.github.io/rahiedatta.dev/  
**Custom Domain:** https://rahiedatta.dev/rahiedatta.dev

Rahie Datta — Ottawa, Ontario — Carleton University BCS 2027

- **Font:** Calibri (matches FSWEP resume)
- **JS:** Vanilla OOP — ES6 Classes — Dr. Louis D. Nel COMP 2406 principles (Encapsulation, Composition, Single Responsibility)
- **Components:** Navigation, ScrollSpy, EmailClipboard, PortfolioApp
- **Stack:** Vanilla HTML/CSS/JS + Express for local dev, static `public/` for GitHub Pages
- **Node:** 24 (Actions: checkout@v5, setup-node@v5, upload-pages-artifact@v4)

## Run locally
```bash
git clone https://github.com/rahiedatta.dev/rahiedatta.dev.git
cd rahiedatta.dev
npm install
npm run dev
# http://localhost:3000
```

## Deploy
Push to `main` — `.github/workflows/pages.yml` deploys `public/` to Pages at `rahiedatta.dev/rahiedatta.dev`.

## Structure
- All `<script>` tags use filenames ending with `.js`
- `public/js/` — OOP classes: Navigation.js, ScrollSpy.js, EmailClipboard.js, App.js
