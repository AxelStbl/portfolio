# ADNS Intelligence — Website

Single-page portfolio for **ADNS Intelligence**, a French/English AI & Data consultancy.
Built with **React 19 + Vite + Tailwind CSS v4**, deployed on **Vercel** via GitHub auto-deploy (root directory set to `website/`).

## Structure

- `src/portfolioData.js` — single source of truth for all bilingual (EN/FR) content
- `src/components/` — one file per section: Hero, About, Services, Metrics, Methodology, FAQ, Contact, Footer, Navbar, LanguageToggle
- `public/` — static assets (logo, robots.txt, sitemap.xml)

## Commands

```bash
npm run dev      # local dev server (Vite HMR)
npm run build    # production build → dist/
npm run preview  # preview production build locally
npm run lint     # ESLint check
```

## Deploy

Push to GitHub → Vercel auto-builds from `main`:

```bash
git add <files>
git commit -m "message"
git push origin main   # triggers Vercel auto-deploy (~1-2 min)
```

Logo files are in `public/` — `adns-logo.png` is the main logo (abstract arc design), `logo.svg` is the favicon.

## Key rules

- **All text content** goes in `portfolioData.js` under both `en` and `fr` keys — keep both languages in sync
- **No personal names** (first or last) anywhere in source files or content
- Tailwind classes only — no custom CSS unless strictly necessary
- Keep components presentational; no business logic outside `portfolioData.js`
