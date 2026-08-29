# Ismail Abdulrahim — Portfolio

React + Vite portfolio, bilingual (Arabic/English), dark theme, one-page layout.

## Run locally
```
npm install
npm run dev
```

## Deploy to GitHub Pages
1. Push this repo to GitHub (e.g. `ismailmu6/portfolio`).
2. In `vite.config.js`, set `base: '/portfolio/'` if deploying to `username.github.io/portfolio`
   (skip this step if using a custom domain or `username.github.io` root repo).
3. Run:
   ```
   npm install -D gh-pages
   npm run build
   npx gh-pages -d dist
   ```
4. In the repo Settings → Pages, set the source to the `gh-pages` branch.
5. For a custom domain: add a `CNAME` file inside `public/` containing your domain,
   then point your domain's DNS to GitHub Pages (A records / CNAME per GitHub docs).
