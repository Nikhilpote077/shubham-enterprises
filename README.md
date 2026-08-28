# Shubham Enterprises — Website (Phase 1)

Public-facing marketing site for Shubham Enterprises, a zinc electroplating
and metal-finishing job-work business in Udyambag, Belagavi, Karnataka.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` — local development server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — ESLint

## Project structure

```
app/          Routes (App Router) — one folder per page, plus sitemap.ts,
              robots.ts, icon.tsx and opengraph-image.tsx (generated, no
              external image files needed)
components/   Reusable UI — cards, header/footer, form, placeholder visuals
data/         All site content as typed arrays/objects (products, services,
              industries, gallery, company info, nav). This is the layer to
              replace with API calls when the Phase 2 admin panel exists —
              components already consume it as plain data, not hard-coded JSX.
lib/          Small utilities: schema.org JSON-LD builders, class-name helper
types/        Shared TypeScript interfaces for all content models
assets/fonts/ Self-hosted Barlow Condensed + IBM Plex font files (OFL-licensed,
              see assets/fonts/OFL.txt), loaded via next/font/local
```

## Content that still needs real data before launch

Search the codebase for `TODO` to find every spot — the main ones:

- **`data/company.ts`** — business email address, verified social links,
  precise facility coordinates (currently an approximate Udyambag location)
- **`data/stats.ts`** — the homepage stat strip currently only shows facts
  that are true of the site's structure (finish count, process steps, GST
  registration). Add real business metrics — years in operation, monthly
  capacity, on-time delivery rate — once available.
- **`app/about/page.tsx`** — founding year, ownership history and team size
  are intentionally left out rather than invented
- **Photography** — every image on the site is currently a generated
  placeholder tile labelled "Sample visual" (see
  `components/PlaceholderVisual.tsx`). Replace with real photos of the
  facility, plating lines and finished parts, then swap `PlaceholderVisual`
  usages for `next/image`.
- **`data/company.ts` → `siteConfig.url`** — set to the real production
  domain before deploying (affects canonical URLs, sitemap, structured data,
  and Open Graph tags)

## Admin panel (Phase 2)

Not built in this phase by design. The data layer (`/data`, `/types`) is
already shaped the way a future admin CRUD + database would populate it, so
Phase 2 should mean swapping static array imports for API calls — not
restructuring the pages or components.

## Notes on the contact form

`app/api/contact/route.ts` validates and sanitizes submissions and includes
a honeypot field, but does not yet send email or persist to a database —
see the TODO in that file. Wire up an email service (Resend, SMTP, etc.)
or a database insert before relying on it in production.

## Security

Production security headers (CSP, X-Frame-Options, etc.) are set in
`next.config.ts`. The CSP is scoped to what the site actually loads —
tighten or extend it if you add third-party scripts, analytics, or remove
the Google Maps embed on the Contact page.
