# FEATURES — toolaspect.com

Current as of 2026-09-04. Static HTML site, Cloudflare (direct wrangler upload via `./deploy.sh`, auto-regenerates sitemap; CI deploy.yml removed — was broken/empty token).

## Site Structure
- **3,173 pages** (sitemap URLs), all self-contained HTML+JS, dark theme
- **~600+ tools** across finance, health, dev, converters, math, everyday, PDF, contractor, and more (categories on /all-tools/)
- **Contractor vertical**: 18 calculators + /contractor-tools/ hub
- **/embed/** — white-label JS widget catalog (concrete, rebar, lumber, paint); free tier = attribution backlink, white-label = paid upsell ($9/mo planned). Outreach kit staged, first sends pending
- **290+ converter pages**; programmatic pages: gift-ideas, time-zones, guides
- **/all-tools/** auto-gen crawler mirror (regenerated each deploy, no private data); /roadmap/ deindexed
- **Content drip**: nightly builder queue (guides + depth passes), commit e.g. `38d0827f` (3 guides + 2 depth passes)
- **Factory**: automated tool-builder lane + toolaspect-factory-watcher cron (backlog tracking)

## Monetization Status (ACTIVE BUILD-OUT)
- **AdSense lane (in progress, NOT yet serving ads)**: pub-7079002297203024 verification snippet injected sitewide (`9f7fe5c1`); placeholder `ad-slot` system live (`tool-top`, `tool-result`, `guide-inline` slots, shared/ads.js flag-gated upgrader, ad-slots.css). Ad serving still gated off pending Stu's go
- Legacy cleanup: 1,756 unstyled "Advertisement" stubs removed (`87fcb548`); nesting fixes on 145 pages (`c9eb8465`, `86bcf049`)
- **Lane 1**: white-label embed widgets — LIVE, outreach pending
- **Lane 2**: directory SEO compounding (traffic 512→3,464 PV/day across Aug, ~6.8x)

## Layout/formatting (fresh fixes, Sep 3)
- Footer: nav.js link container repaired after dedupe-script mangling (`5e96a0bd`), links deduped 18→16 with margins/dividers (`11fe4a43`)
- 672 pages: .seo block re-wrapped in `.wrap` (was full-bleed) (`9b89f64b`)
- 1,776 pages: related-tools sections wrapped (`cf3fde3a`)
- All verified visually at 400px mobile width on prod

## SEO Infrastructure
- Canonicals + JSON-LD sitewide; IndexNow pings on deploy
- **GSC fully connected** (Sep 1): all 11 domain properties, queries+pages flowing — early impressions tiny (1-3/query)
- **Umami** (analytics.coreaspectai.com) beacon sitewide incl. all-tools/roadmap re-injections; daily traffic cron posts 7-day charts (Sydney clock ranges)
- FAQ schema stripped sitewide (retired May 2026 per SEO doctrine); compare-page format prioritized
- Static count claims "2,000+/1,000+" (doctrine: no real counts); site-gate.py allows ≥1000

## Known Issues / Open Threads
- Preview server :3390 (http://100.67.179.30:3390) dies on every gateway restart — needs systemd user unit w/ Restart=always (proposed, not yet done)
- Ad serving activation awaiting Stu's go (AdSense app was deferred — 30d window from Aug 19 removal of "no ads" contradiction has now elapsed)
- Embed outreach: kit ready, 0 sends
