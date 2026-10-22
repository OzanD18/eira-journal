# Eira Journal — Editorial Website

A Next.js / React / TypeScript / Tailwind website with a verified October 2026 masthead and six regional desks. All original sample articles, sample staff profiles, sample issues, sample events, placeholder portraits, and example external links have been removed.

## Start locally

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Visit http://localhost:3000. For validation, use `npm run lint` and `npm run build`.

## Roster and published content

- Edit **`content/team.ts`** to maintain the two co-editors-in-chief and six regional editorial desks. All 26 staff names were copied from the confirmed roster.
- **`content/publications.ts`** lists the inaugural newsletter. Future issues can be added there, with their PDF files placed in `public/newsletters/`. The homepage and Publications page update automatically.
- Only add material you are authorized to publish. Do not list a newsletter as published until the file and publication details are verified.

## Deployment

Use Vercel or another Next.js-capable host. Specify `NEXT_PUBLIC_SITE_URL=https://your-real-domain.example` before production build so canonical metadata and sitemap point to the correct site. There is **no** invented submission URL, email address, social profile, event, faculty adviser, or academic affiliation claim beyond the journal's Emory student-led identification.

## Pages

- `/` — homepage featuring the inaugural newsletter and regional editorial desks
- `/masthead` — real 26-person editorial roster
- `/regions` — six regional sections with editors and writers
- `/publications` — published newsletter archive
- `/newsletter/1` — online edition of the first Middle East newsletter
- `/about` — concise journal description

No former demo URLs are published in navigation or the sitemap.


## Newsletter 1: Middle East

The inaugural newsletter is available as a unified, nine-page PDF at
`public/newsletters/eira-journal-newsletter-01-middle-east.pdf`.

- Homepage now links to **Read Our Newsletter**.
- `/newsletter/1` is the online edition with complete articles and author-supplied references.
- `/publications` lists the inaugural newsletter.
- Before making the site public, editors should fact-check claims, confirm source links, and
  review the drafts (especially the Yemen claim that 350,000 troops constitute 60–70% of the population, and the bracketed `[The source]` quotation in the Iran draft).
- The embedded map from the supplied Yemen draft is not reproduced in the new publication pending verification of its original image credit and usage rights. All body text and supplied notes are retained.

To deploy: upload to GitHub, connect a Next.js-compatible hosting provider, and build.
