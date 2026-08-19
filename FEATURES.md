# FEATURES — toolaspect.com

Current as of 2026-08-19. Static HTML site, Cloudflare Pages, no build step. Deploy: `./deploy.sh` (auto-regenerates sitemap).

## Site Structure
- **1,421 pages** total, all self-contained HTML+JS, dark theme (#0f172a/#1e293b/#60a5fa)
- **~109 standalone tools** across finance, health, dev, converters, math, everyday
- **18 contractor calculators** (2026-08-19): concrete, rebar, lumber, paint, drywall, roofing, roof pitch, fencing, decking, brick, tile, siding, insulation, excavation, gravel, asphalt, mulch, electrical load
- **7 category hubs**: /all-tools/, /finance-tools/, /health-fitness-tools/, /developer-tools/, /converter-tools/, /math-tools/, /everyday-tools/
- **/contractor-tools/** — contractor vertical hub (Lane 1)
- **290+ converter pages** (units, crypto, time-zones)
- **Programmatic pages**: gift-ideas (~70), time-zones (~60)

## Monetization Status
- **None active.** AdSense application deferred (was "no ads" contradiction — removed 2026-08-19, needs 30d before applying)
- **Lane 1**: white-label embed widgets — in development (2026-08-19), free tier with attribution backlink, paid tier planned $9/mo
- **Lane 2**: directory SEO compounding on autopilot

## SEO Infrastructure
- Sitemap: 1,421 URLs, auto-regen in deploy.sh — NEVER run ad-hoc sitemap scripts
- IndexNow: daily cron (Yandex ✓, Bing 403)
- GSC verified + sitemap submitted 2026-08-12
- Google sandbox ongoing (day 8), YandexBot crawling 30% of PVs
- Traffic: ~300 real PV/day steady
- Marketing arsenal staged in docs/seo-offsite/marketing/ (8 Reddit, 6 Quora, 3 Medium, 30 Pinterest) — awaiting auth

## Known Issues
- Content depth: ~100 legacy tool pages are thin (79-349 words) — retrofit planned (docs/seo-offsite/scaling/content-depth-plan.md)
- AI Overviews CTR risk not yet mitigated ( Lane 1 B2B embeds = hedge)
- Kill gates set: <10K visits/mo at M6 → stop offsite SEO; M12 revenue <$200/day → exit
