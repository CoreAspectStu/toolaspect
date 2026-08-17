# Programmatic SEO Roadmap — toolaspect.com

**Goal:** Scale from ~1,409 pages to 4,000+ indexed pages targeting ~50K visits/day ($1,000/day at ~$20 RPM utility-site display rates).

**Existing programmatic base:** salary-by-state (~50), time-zones (97), gift-ideas (80), convert/* (973), guides/.

---

## Candidate page-type matrix

Volumes are US aggregate monthly search volume for the full page cluster (all city/state/food variants summed). KD is Ahrefs-style 0–100. "Thin-content risk" = likelihood Google treats pages as doorway/thin (low = safe).

| # | Page type | Est. cluster volume/mo | KD | Template complexity | Thin-content risk | Notes |
|---|-----------|------------------------|----|--------------------|-------------------|-------|
| 1 | **Electricity rates by state** (~50) | 90K–150K | 15–25 (LOW) | Low — table + rate trend + provider context | Low if we add kWh averages, trends, solar/usage context | Very few strong competitors; much is utility-corp marketing pages |
| 2 | **Minimum wage by state** (~50 + localities ~60) | 150K–250K | 20–30 (LOW-MED) | Low — table + yearly history + tipped/exempt rules | Low with history tables + local ordinances | High query volume spikes every Jan 1; evergreen |
| 3 | **Sales tax / income tax by state** (~100) | 300K–500K | 25–35 (MED) | Medium — income tax brackets per state, calculator | Low if bracket tables are real data, not stubs | Tax foundation + state .gov sites compete, but calculators rank |
| 4 | **Cost of living by city** (~300) | 500K–800K | 30–40 (MED) | Medium — indexed data table (rent, groceries, utilities, transport) + comparison widget | MEDIUM — biggest risk of the list; must include 8–12 real data columns per city + city-vs-city compare | Best volume ceiling; numbeo dominates but is UGC-heavy and slow |
| 5 | **Postage rates** (~30, incl. weight/zone tables) | 100K–180K | 10–20 (LOW) | Low — static tables + 2024/2025 rate-change pages | Low | USPS own pages compete but are terrible UX; strong opportunity |
| 6 | **Sunrise/sunset by city** (~300) | 400K–700K | 15–25 (LOW) | Medium — precomputed monthly tables per city (no client JS needed) | Low if monthly tables + day-length chart included | timeanddate dominates head terms, but "[city] sunrise times december" long tail is open |
| 7 | **Driving distance between cities** (~2,000 pairs from top 50 cities) | 600K–1.2M | 30–45 (MED-HIGH) | Medium — precompute distance matrix, route text | Low with drive-time + midpoint + fuel-cost context | distance.to etc. compete; the fuel-cost angle differentiates |
| 8 | **Calories in foods** (~1,000) | 800K–1.5M | 35–45 (MED-HIGH) | Medium — nutrition table (calories, protein, fat, carbs, serving sizes) from USDA data | MEDIUM — must have 6+ nutrient columns, raw/cooked variants, portion calculator to avoid thin | FatSecret/calorieking compete; USDA open data makes this cheap to build well |
| 9 | **Baby name popularity by year** (~600: top names × decade/state) | 300K–600K | 20–30 (LOW-MED) | Low — SSA open data tables + trend charts | Low with decade trends + meaning snippets | SSA.gov ranks but has zero UX; nameberry covers head terms only |
| 10 | **NBA/NFL team schedules** (~64: 32 NFL + 30 NBA) | 250K–400K (seasonal spikes) | 25–35 (MED) | Medium — schedule table + broadcast + bye/bye-week info; needs yearly refresh | Low-MED (staleness risk) | Seasonal: publish 6 weeks before season; strong Aug–Dec traffic |
| 11 | **Unit conversion tables** (we already have convert/*) | covered | — | — | — | Expand via depth (see content-depth-plan.md), not new pages |

---

## Prioritized top 10 for the next 3 months (build order)

**Tier 1 — build immediately (weeks 1–6). Best volume-to-competition ratio, low template complexity:**

1. **Postage rates** (~30 pages) — lowest KD on the list, near-zero data maintenance, links USPS tables. Ship in week 1 as a warm-up.
2. **Electricity rates by state** (~50) — weak competition, high commercial RPM (energy advertisers).
3. **Minimum wage by state** (~110 incl. localities) — January evergreen spike; auto-refresh from DOL data.
4. **Sunrise/sunset by city** (~300) — precomputed static tables; pure evergreen; low risk.

**Tier 2 — weeks 5–10. Higher volume, medium effort:**

5. **Sales/income tax by state** (~100) — per-state bracket tables + a state tax calculator (extends our existing converter engine).
6. **Baby name popularity** (~600) — SSA bulk data, one build → 600 pages, extremely cheap per page.
7. **NBA/NFL schedules** (~64) — time-box to seasons; target NFL first (Aug–Dec).

**Tier 3 — weeks 8–13. Highest volume but needs real data pipelines:**

8. **Cost of living by city** (~300) — start with top-100 MSAs only if data depth (8+ columns) is achievable; expand later.
9. **Calories in foods** (~1,000) — USDA FDC API; ship in batches of 250; strict template with nutrient depth.
10. **Driving distance between cities** (~2,000 pairs) — precompute matrix from top-50 cities; add fuel-cost calculator as differentiator.

---

## Guardrails against thin-content penalties

- Every page: minimum 250–350 words of unique explanatory text + at least one data table with ≥6 meaningful columns + FAQ (3 questions minimum).
- No page published with "N/A" or empty data cells — skip the page instead.
- Each cluster gets a category hub (index page) with original overview content (see internal-linking-plan.md).
- Batch-submit via sitemap; monitor GSC "Crawled - not indexed" rate per cluster; if a cluster exceeds 30% CNL, pause the cluster and add depth before expanding.
- Add `dateModified` + visible "Data updated" line to all data pages.

## Page-count trajectory

| Milestone | Month | New pages | Total pages |
|-----------|-------|-----------|-------------|
| Postage + electricity + min-wage + sunrise | M1 | ~490 | ~1,900 |
| Tax + baby names + schedules | M2 | ~760 | ~2,660 |
| COL top-100 + calories (batch 1) + distances (batch 1) | M3 | ~1,100 | ~3,760 |
