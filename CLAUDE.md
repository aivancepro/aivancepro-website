# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AIVancePro website — marketing site for the AIVancePro AI fitness coaching mobile app (iOS & Android). Built with **Astro 5**, deployed to **aivancepro.fr** via GitHub Pages (CNAME file).

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build (outputs to `dist/`)
- `npm run preview` — Preview production build locally

No test runner or linter is configured.

## Architecture

### Internationalization (i18n)

The site supports **3 languages**: French (default), English, German. French is the default locale and lives at the root (`/`). English and German use path prefixes (`/en/`, `/de/`).

- `src/i18n.js` — Central i18n module exporting `languages`, `t` (translations for nav/footer/links), `getLangFromUrl()`, and `getAlternateUrls()`.
- Each language has its own page files under `src/pages/` (root = FR, `en/` = EN, `de/` = DE). Pages are **duplicated per language**, not generated from a single template — each sets `const lang = 'fr'|'en'|'de'` and passes it through layouts.
- German pages use localized URL slugs (e.g., `/de/ratgeber/` instead of `/de/guides/`, `/de/preise` instead of `/de/pricing`).

### Content Collections

Two Astro content collections defined in `src/content.config.ts`:
- **blog** — `src/content/blog/{fr,en,de}/*.md`
- **guides** — `src/content/guides/{fr,en,de}/*.md`

Both use the same schema: `title`, `description`, `date`, `readTime`, `tag`, `lang`, `slug`, `canonical`, `keywords`, `alternates` (hreflang links). Content is rendered via dynamic `[slug].astro` routes that filter by `lang`.

### Layouts

- `BaseLayout.astro` — Root HTML shell. Handles SEO meta (OG, Twitter, hreflang, JSON-LD), imports `global.css`, renders `Nav` and `Footer` components. Props: `lang`, `title`, `description`, `canonical`, `alternates`, `jsonLd`, etc.
- `ArticleLayout.astro` — Wraps `BaseLayout` for blog/guide articles. Adds article header, body styling, and app store CTA at the bottom.

### Styling

- `src/styles/global.css` — Single global CSS file (no CSS framework). Uses CSS custom properties defined in `:root`. Font: Inter. Color scheme: blue (`#2563EB`) / purple (`#9333EA`) gradient for primary accents.
- Page-specific styles are inlined in `<style>` tags within each `.astro` file's `<Fragment slot="head">`.

### Legacy Static HTML

Some pages exist as static `.html` files at the root level (`index.html`, `pricing.html`, `login.html`, `privacy.html`, `terms.html`, `support.html`) alongside their Astro equivalents. The `blog/`, `guides/`, `exercices/`, `workout-splits/`, `compound-vs-isolation/` directories also contain pre-built HTML. These appear to be older versions; the Astro `src/pages/` versions are the active source of truth.

### Static Assets

- `public/` — Favicons, logos, OG image, screenshots, and `public/assets/` for additional images
- `assets/` (root) — Duplicate of some public assets (legacy)
