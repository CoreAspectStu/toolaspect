# 90-Day Execution Plan — toolaspect.com

**Capacity:** 1 developer-agent, ~20 hrs/week (13 weeks ≈ 260 hrs).
**Objective:** Position the site on the trajectory to 50K visits/day by executing programmatic expansion + content depth + internal linking + offsite signals in parallel.

---

## Phase overview

| Phase | Weeks | Focus |
|-------|-------|-------|
| 1. Foundation | 1–3 | Content-depth template + top-100 retrofit start; internal-linking scaffolding; first cheap cluster (postage) |
| 2. Expansion | 4–8 | Tier-1 clusters (electricity, min-wage, sunrise/sunset) + Tier-2 start; offsite cadence begins |
| 3. Scale | 9–13 | Tax, baby names, schedules; COL + calories batch 1; monitor and prune |

**Standing weekly cadence (every week):**
- ~10 hrs build (new pages / retrofits)
- ~3 hrs offsite SEO (2–3 posts from the drafted queue)
- ~3 hrs technical SEO + monitoring + data refreshes
- ~2 hrs review/QA of generated content

---

## Week-by-week

### Week 1
- Build content-depth template blocks into shared page template (intro, how-it-works, formula, example, FAQ, related tools).
- Generate GSC-based priority list of top-100 retrofit pages.
- **Ship: /postage/ cluster (~30 pages) + hub.**
- Submit new sitemaps in GSC.
- ✅ Milestone: depth template live; postage indexed-request submitted.

### Week 2
- Internal linking: breadcrumb partial + BreadcrumbList JSON-LD; sibling-map data structure; footer hub nav. (~20 hrs, this week is mostly linking.)
- Retrofit batch 1: top-25 converters.
- Offsite: 2 Reddit posts (draft queue) + 1 Medium article.
- ✅ Milestone: breadcrumbs sitewide; 25 retrofits live.

### Week 3
- **Ship: /electricity-rates/ (~50 pages + hub)** — EIA data pipeline.
- Retrofit batch 2: next 25 converters.
- Offsite: 1 Dev.to post + 1 Reddit thread.
- Set up rank tracking for top-50 target keywords (free tier of a tracker or manual GSC export script).
- ✅ Milestone: 50 retrofits done; electricity cluster live.

### Week 4
- **Ship: /minimum-wage/ (~110 pages incl. localities + hub)** — DOL data, `dateModified` automation.
- Retrofit batch 3: 25 salary/time-zone pages.
- CWV check: run Lighthouse/PageSpeed on 10 template variants; fix any regression (static HTML should score 95+; watch font loading and third-party scripts).
- ✅ Milestone: 75 retrofits; ~190 new pages live; total ~1,600 pages.

### Week 5
- **Ship: /sunrise-sunset/ batch 1 (top-100 US cities + hub)** — precomputed monthly tables.
- Retrofit batch 4: final 25 pages → **top-100 retrofit complete**.
- Offsite: 2 Reddit + 1 Medium.
- GSC review: check CNL rate on new clusters; add depth if >30%.
- ✅ Milestone: 100 retrofits complete; sunrise/sunset live.

### Week 6
- Sunrise/sunset batch 2 (+200 cities).
- **Start: /tax-rates/ cluster** — income tax bracket data model (biggest template effort).
- ✅ Milestone: total ~1,900 pages.

### Week 7
- **Ship: /baby-names/ (~600 pages + hub)** — SSA bulk import; one big batch, templated charts.
- Offsite: 1 Dev.to + 2 Reddit.
- Quarterly-ish: internal-link orphan check script run; fix findings.
- ✅ Milestone: baby names live (~2,500 pages total).

### Week 8
- **Ship: /schedules/nfl/ (32 pages + hub)** — seasonal timing (pre-season).
- Tax cluster continued: state income tax pages (~50).
- Mid-plan GSC deep-dive: impressions trend per cluster, top queries; adjust keyword targeting in templates where needed.
- ✅ Milestone: NFL schedules live before week 1 kickoff; tax 50% done. ~2,600 pages.

### Week 9
- **Ship: /schedules/nba/ (30 pages + hub)** + finish tax cluster (~100 total).
- Offsite: 2 Reddit + 1 Medium.
- ✅ Milestone: tax + schedules complete. ~2,700 pages.

### Week 10
- **Ship: /cost-of-living/ top-100 MSAs + hub.**
- Calories pipeline build: USDA FDC import, template with nutrient depth (start 250 pages).
- ✅ Milestone: COL live; calories pipeline validated.

### Week 11
- **Ship: /calories/ batch 1 (250 pages).**
- **Ship: /distances/ batch 1 (top-20 cities pairwise = 380 pages, precomputed matrix + fuel-cost context).**
- ✅ Milestone: ~3,500 pages.

### Week 12
- Calories batch 2 (250) + distances batch 2 (to 50-city matrix, ~2,000 pages).
- Offsite: final queue push — 2 Reddit + 1 Dev.to + 1 Medium.
- ✅ Milestone: ~4,000 pages.

### Week 13 — Review & consolidate
- Full GSC audit: indexing rate, CNL by cluster, impressions/clicks growth.
- Prune or noindex any cluster with >40% CNL after depth attempts.
- Retrofits wave 2 kickoff: next 50 pages.
- Write the next 90-day plan from data.

---

## Success metrics

| Metric | Day 0 | Day 45 target | Day 90 target |
|--------|-------|---------------|---------------|
| Indexed pages | ~1,409 | ~1,900 | ~3,700–4,000 |
| Daily organic visits | baseline | +30–50% | 2.5–4× baseline |
| Pages with 300+ word depth | <10% | top-100 + new clusters | top-150 + all new |
| Orphan pages | unknown | 0 | 0 |
| Lighthouse mobile (template pages) | 90+ | 95+ | 95+ |
| GSC "Crawled-not-indexed" new clusters | — | <30% | <20% |
| Referring domains from offsite posts | baseline | +8 | +15–20 |
| Keywords in top 10 | baseline | +20% | +50% |

**$1,000/day framing:** 50K visits/day at ~$20 RPM display. This 90-day plan builds the page inventory and relevance foundation; realistic traffic at day 90 is a fraction of target (programmatic SEO compounds over 6–12 months as clusters mature and rank). The plan's job is to maximize indexed, non-thin, well-interlinked pages + offsite velocity so months 4–12 compound.

## Monitoring stack (set up in weeks 1–3)

- **GSC:** weekly export (clicks, impressions, CNL by cluster) → script into a dashboard/spreadsheet.
- **Umami:** daily visits, landing pages, referrers.
- **Rank tracking:** top-50 keywords (10 per major cluster), weekly positions.
- **Crawl health:** monthly full-site crawl (or build-graph script) for orphans, broken links, depth.

## Risks & mitigations

- **Thin-content/doorway penalty on big clusters** → quality gates per programmatic-roadmap.md; batch monitoring; willingness to prune.
- **Schedule staleness (NFL/NBA)** → auto-refresh pipeline + `dateModified`; next-season redirect plan.
- **Data licensing** → use only public-domain/US-gov data (USPS, EIA, DOL, SSA, USDA) or computed data (sunrise/distances).
- **Agent capacity overrun** → clusters are severable; priority order is Tier 1 → Tier 3; drop distances batch 2 before dropping retrofits.
