# PRD — ToolAspect Two-Lane Monetization

**Status:** Active · **Supersedes:** microSaaS Transformation PRD (2026-05-24, stale, pre-pivot) · **Written:** 2026-08-21

---

## 1. Problem Statement

ToolAspect (toolaspect.com) is a 1,439-page static HTML tool site launched Aug 2026 on Cloudflare Pages, currently earning **$0**. The original $1K/day SEO-only plan scored 4/10 in adversarial review (2026-08-18): RPM assumptions were wrong (real: $8–12, not $20), head terms are DA-90-locked, and AI Overviews erode calculator-query CTR 30–50%. The plan pivoted to a two-lane model. This PRD captures that pivot.

## 2. Goal

**$1,000/day revenue** — realistically reached **M12–18 via the B2B path**, not via display ads. At honest $8–12 RPM, ads-only $1K/day would need ~100K PV/day (≈3M/mo) — top-percentile outcome for a new domain. Therefore Lane 1 (B2B recurring revenue) is the primary path; Lane 2 (SEO) is the compounding hedge that must run near-zero-marginal-cost.

## 3. Current State (grounded in FEATURES.md / activity.md, as of 2026-08-20)

- 1,439 pages: ~109 standalone tools, 290+ converters, ~130 programmatic pages
- **Lane 1 shipped:** 35 contractor-vertical calculators live (18 dispatched via swarm 2026-08-19, formulas verified, all HTTP 200); /embed/ white-label widget system live — 7 embeds shipped, free tier = attribution backlink, paid tier planned at $9/mo; outreach kit staged (50 targets, 3 templates, docs/seo-offsite/outreach/)
- **Lane 2 shipped:** sitemap auto-regen in deploy.sh (1,421+ URLs); IndexNow daily cron (Yandex ✓, Bing 403); GSC verified + sitemap submitted 2026-08-12; traffic report cron on correct zone
- Traffic: **~340 real PV/day** steady; Google sandbox ongoing (day 8+), YandexBot crawling 30% of PVs
- Monetization: **none active.** AdSense deferred — "no ads" homepage claim removed site-wide 2026-08-19; needs 30d clean before applying
- Content debt: ~100 legacy tool pages thin (79–349 words)

## 4. Lanes

### Lane 1 — Contractor Vertical + B2B Embeds (primary revenue path)
1. **Vertical depth:** contractor calculators (concrete, rebar, lumber, paint, drywall, roofing, fencing, decking, brick, tile, siding, insulation, excavation, gravel, asphalt, mulch, electrical load + hub) form the wedge. Rationale: high commercial intent, KD<10 long-tail terms, active trade communities that actually link out.
2. **White-label embeds:** /embed/*.js one-line widgets. Free tier carries attribution backlink (also a link-building channel); paid tier $9/mo white-label (Stripe or Gumroad checkout). Unit economics: 40 sites × $75/mo-style pricing was the strategist's model; at $9/mo entry, ~300+ subs ≈ $90/day and the real upsell is higher tiers.
3. **B2B outreach:** 50 staged targets, 3 email templates, 10/week cadence. This is a sales problem, not a ranking problem — Google-independent revenue.

### Lane 2 — Directory SEO on Autopilot (compounding hedge)
Broad directory stays deployed (zero marginal cost) with automation only:
- Sitemap auto-regen (deploy.sh — never run ad-hoc sitemap scripts)
- IndexNow daily cron
- GSC monitor + daily traffic report cron
- No further 20 hr/wk investment in generic-directory SEO.

## 5. Non-Goals

- No backend, no DB, no build system (constraint, see §7)
- No programmatic page expansion until first 100 retrofitted pages show GSC impressions
- No head-keyword chasing (calculator.net DA 90+, rapidtables 88+ — closed)
- AdSense application before the 30-day "no ads" fix window clears (≈2026-09-18)

## 6. Constraints

- **No build step.** Static HTML, self-contained pages, inline JS/CSS.
- **Deploy only via `./deploy.sh`** (which regenerates the sitemap).
- No ad network yet — AdSense deferred; Ezoic only after 10K sessions.
- AI-agent-executable where possible; auth-blocked steps (Reddit/Medium/Google account posting, email sending identity, Stripe/Gumroad account) marked explicitly.

## 7. Success Metrics & Kill Gates

**Revenue path check (per fact-check.md corrections):**
- Realistic year-1 net RPM: **$8–12** (US-heavy utility traffic, AdSense/Ezoic tier)
- Ads-only $1K/day = ~100K PV/day ≈ 3M/mo — not the base case
- Realistic M12 SEO revenue: $15–50/day at 50–150K PV/mo
- $1K/day realistic via: B2B embed MRR compounding (M12–18)

**Kill gates (adopted from adversarial review, non-negotiable):**
1. **< 10K visits/mo at M6 → stop all offsite SEO investment** (Lane 2 goes pure-autopilot)
2. **M12 revenue < $200/day → exit / sell** (content sites trade ~30–40× monthly profit)

**Interim targets:**
- First paid embed sub: within 30 days of checkout live
- $1K MRR from embeds: within 60 days of outreach start (strategist target)
- 10K sessions/mo: unlocks Ezoic (better RPM than AdSense)

## 8. Risks

| Risk | Mitigation |
|---|---|
| AI Overviews kill long-tail calculator CTR | Lane 1 B2B is Google-independent — the hedge IS the strategy |
| Zero moat (asset clonable in a weekend) | Vertical brand + embed contracts = switching costs; attribution backlinks compound |
| AdSense rejection (new domain, thin pages, programmatic) | Content retrofit first; apply only after 30d fix window + depth improvement |
| Outreach emails never sent (auth/identity blocker) | Sprint 1 must resolve sender identity decision — it gates all of E2 |
| Sandbox longer than 3–9mo | Lane 1 revenue doesn't wait for Google |

## 9. Timeline (honest, post-correction)

- **M0–2 (now):** embed paid tier, 7 more embeds, outreach sends begin, content retrofit starts
- **M3–6:** first embed MRR, AdSense application (post-30d window), Ezoic at 10K sessions
- **M6:** kill-gate check #1 (<10K visits/mo → stop offsite SEO)
- **M12:** kill-gate check #2 (revenue <$200/day → exit); realistic $50–200/day blended
- **M12–18:** $1K/day achievable only if B2B path compounds (embeds + vertical brand)
