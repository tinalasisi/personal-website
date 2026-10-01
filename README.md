# Tina Lasisi — personal site (Astro)

---

## What's in the box

```
astro-handoff/
├── README.md                ← this file
├── package.json             ← astro + scripts
├── astro.config.mjs         ← deploy config (edit `site` / `base` for GH Pages)
├── tsconfig.json
├── .gitignore
├── public/                  ← static assets, served from /<filename>
│   ├── headshot-2026.jpg   ← new filename forces browsers to refetch
│   ├── branch-*.png
│   ├── mark-*.png
│   └── pattern-branches-mask.png
└── src/
    ├── layouts/
    │   └── Base.astro       ← <html> shell, theme bootstrap, font CDN links
    ├── components/
    │   ├── Sidebar.astro    ← fixed left sidebar (avatar, name, email, socials)
    │   └── SiteHeader.astro ← top nav inside the right column
    ├── data/                ← all editable content lives here
    │   ├── affiliations.ts
    │   └── events.ts
    ├── pages/
    │   └── index.astro      ← home page; composes layout + components + data
    └── styles/
        ├── tokens.css       ← brand color/type tokens (the design system)
        ├── site.css         ← framework styles (layout, sidebar, hero, etc.)
        └── local.css        ← page-specific tweaks layered on top of site.css
```

The design is a **fixed sidebar + scrolling main column**. CSS is plain — no
Tailwind, no preprocessor. Tokens cascade from `tokens.css` so a theme change
is a single-file edit.

---

## Get it running

```bash
cd astro-handoff
npm install
npm run dev          # http://localhost:4321
```

Build for production:

```bash
npm run build        # outputs to dist/
npm run preview      # serve dist/ locally
```

---

## Deploying to GitHub Pages

You're currently on GH Pages. Two paths:

### A. Custom domain (e.g. `lasisilab.org`)
1. In `astro.config.mjs`, set `site: 'https://your-domain.org'` and leave
   `base` unset.
2. Add a `public/CNAME` file with your domain.
3. Use the official `withastro/action` workflow:
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages
   on: { push: { branches: [main] } }
   permissions: { contents: read, pages: write, id-token: write }
   concurrency: { group: pages, cancel-in-progress: true }
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: withastro/action@v3
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment: { name: github-pages, url: ${{ steps.deployment.outputs.page_url }} }
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

### B. GitHub-Pages subpath (`https://tinalasisi.github.io/repo-name`)
1. In `astro.config.mjs`, set `site: 'https://tinalasisi.github.io'` AND
   `base: '/repo-name'`.
2. Use the same workflow above. All asset paths must go through Astro's
   built-ins (`/headshot.jpg` becomes `<base>/headshot.jpg` automatically) —
   the current scaffold already does this.

The current `netlify.toml` in `lasisi_blogdown/` is Hugo-specific and can be
deleted once you switch deploy targets.

---

## Where to edit content

| What | Where |
|---|---|
| Bio paragraph, CTAs | `src/pages/index.astro` |
| Affiliations | `src/data/affiliations.ts` |
| Upcoming / Recent events | `src/data/events.ts` |
| Contact form URL, copy | `src/pages/index.astro` (contact section) |
| Social links (Scholar/ORCID/etc.) | `src/components/Sidebar.astro` |
| Email, name, title | `src/components/Sidebar.astro` |
| Brand tokens (colors, fonts) | `src/styles/tokens.css` |
| Layout / sidebar / hero rules | `src/styles/site.css` |
| Page-level tweaks | `src/styles/local.css` |

The data files are typed — TypeScript will yell at you if you forget a field.

---

## What's NOT done yet (next steps)

This is a faithful single-page port of the prototype. Anything beyond is open
territory:

1. **Blog posts** — the old `lasisi_blogdown/content/post/` has 10 Markdown
   posts from 2017–2018. If you want them on the new site:
   - Move them to `src/content/posts/` and set up an Astro Content
     Collection (`src/content/config.ts`).
   - Add `src/pages/blog/[slug].astro` for individual post pages and
     `src/pages/blog/index.astro` for the list.
   - Decide whether to keep their Hugo front-matter as-is or rewrite.
2. **Publications** — `lasisi_blogdown/content/publication/` has 7 publication
   folders. Same Content Collection pattern applies. Or fetch from ORCID / a
   `.bib` file at build time.
3. **Talks** — same pattern (8 talk folders in blogdown).
4. **Multi-page nav** — currently the top nav uses `#about`, `#events`,
   `#contact` anchors that scroll the home page. If you add `/blog/`,
   `/publications/`, etc., the SiteHeader links should switch to real routes.
5. **Old `contact.html`** — the prototype had a standalone contact page; this
   port folds everything into `index.astro`. If you want a dedicated route,
   add `src/pages/contact.astro` and lift the contact section into it.
6. **Tagline / hero variant** — the design system in
   `/projects/.../` has a tagline tweak and a hero-banner variant we removed.
   Both still live in `site.css` under `.ll-hero` if you want to bring them
   back.

---

## A note on the design

- **Sidebar is `position: fixed`** on desktop. The grid template reserves a
  360px column so the right side doesn't slide under it. On <980px viewport
  the layout stacks and a top header takes over (see media queries in
  `site.css` near the bottom).
- **Theme toggle** is a 3-state: light / dark / system. Persists in
  `localStorage` under key `tl-theme`. The inline script in `Base.astro`
  applies it before paint to avoid a flash.
- **The branch motif** is a PNG used as a CSS mask
  (`pattern-branches-mask.png`), tinted via `background: var(--bg-hero)`.
  Recolor by changing tokens — no need to touch the PNG.
- **Icons** come from two CDNs: Font Awesome 6 (brand icons) and Academicons
  (Google Scholar, ORCID). They're loaded in `Base.astro`. If you want them
  self-hosted later, copy the CSS + font files into `public/` and update the
  `<link>` tags.

---

