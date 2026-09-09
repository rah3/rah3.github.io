
# rah3.github.io — GitHub Pages Ready

Static portfolio matching LaTeX resume (FSWEP/EOSD focused).

## Run locally (no Express needed)
```
npm install
npm start
# -> http://localhost:3000
```

## Deploy to GitHub Pages
1. Push this folder to `rah3.github.io` repo (main branch)
2. In GitHub repo Settings > Pages > Source: Deploy from branch `main` / root
3. No build step needed — it's pure HTML/CSS/JS

## Structure
- index.html -> loads scripts/* and style/*
- scripts/home.js, resume.js, footer.js, scrollOperations.js, contact.js
- style/styles.css
- images/favicon.ico, logo.png, profile.jpg
- .nojekyll -> tells Pages not to ignore folders starting with _

Removed: server.js, express dependency (not needed for Pages)
