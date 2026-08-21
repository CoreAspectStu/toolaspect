# Architecture — ToolAspect (as actually built)

**Status:** Matches shipped reality · **Updated:** 2026-08-21

## Stack (deliberately minimal)

- **Static HTML on Cloudflare Pages.** No backend, no DB, no build system, no framework.
- Tool pages are **self-contained**: inline JS + inline CSS, dark theme (#0f172a/#1e293b/#60a5fa). Each page is a single .html file that runs entirely in the browser.
- **Deploy: `./deploy.sh` only.** It auto-regenerates the sitemap (1,421+ URLs) and is the single deploy path. Ad-hoc sitemap scripts are forbidden.
- **shared/nav.js** — shared navigation injection across pages.

## Key components

### Tool pages (~109 tools + 290+ converters + ~130 programmatic)
- Formula-based calculators; contractor vertical (35 calculators) verified: concrete cf/27, bags cf/0.6, lumber t×w×l/12, brick 7.625×2.25, asphalt 145, siding 100sqft.
- Category hubs: /all-tools/, /finance-tools/, /health-fitness-tools/, /developer-tools/, /converter-tools/, /math-tools/, /everyday-tools/, /contractor-tools/.

### White-label embed system — /embed/*.js
- Vanilla JS widgets (concrete, rebar, lumber, paint + more), one-line `<script>` install, light/dark themes.
- All CSS/JS scoped under **`ta-embed-` prefix** to avoid host-site collisions.
- **Attribution link** baked into free tier (backlink channel); paid tier = link removal ($9/mo, checkout TBD Stripe/Gumroad).
- /embed/ catalog page with live demos (Vision QA 9/10).

## Analytics
- **Cloudflare Analytics** (zone toolaspect.com — cron fixed from wrong zone 2026-08-19)
- **Umami** for self-hosted page analytics

## Automation (cron jobs)
1. **IndexNow daily** — pings new/changed URLs (Yandex accepted, Bing 403)
2. **Traffic report** — daily PV summary from CF Analytics API
3. **GSC monitor** — indexing/impression tracking
4. **Sitemap regen** — runs inside deploy.sh, not standalone

## Constraints for all future work
- Static HTML only; any "backend" behavior must live in Cloudflare Pages Functions or client-side JS — currently neither exists, and adding one needs explicit decision.
- Every deploy through ./deploy.sh.
- New embed widgets: vanilla JS, `ta-embed-` scoping, attribution link, ≤ small file size (host-site friendly).
