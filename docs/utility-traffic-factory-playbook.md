<!-- status: in-progress | domain: PROJECT:utility-sites | canonical: docs/utility-traffic-factory-playbook.md | updated: 2026-11-14 -->

# Utility Traffic Factory — Repeatable Playbook (v1)

**Purpose:** ToolAspect began as a test — "can we generate buyer-ready traffic for our own products?" **Answer: YES** (0 → 36K PV/wk in ~3 months). This is the documented, repeatable process to spin up the same engine per product area, with a human gate, then scale.

## The proven stack (what actually drove the results)

| Layer | Component | Evidence |
|---|---|---|
| Site | Astro-free flat HTML, one dir per tool/guide, CF Pages | 700+ pages, deploys in seconds |
| Content engine | Daily drip: 3 guides + 2 depth passes (Claude/GLM workers) | 660 guides live |
| On-page method | Kyle Roof zone audit (kw in URL/title/H1/body/H2 per zone) | title 83→99.9%, H1 88→99.7%, body 72→99.4% pass |
| Keyword strategy | "How much does X pay/cost" + cost-by-state + long-tail variants (Avalanche: rank breadth, not head terms) | lumber guide 1,497 hits/wk; rumble 1,270→753 silo flow |
| Deploy/verify | deploy.sh → CF Pages + IndexNow + curl-200 checks + structural diff (no tag loss) | every wave verified |
| Analytics | CF GraphQL (traffic, crawlers) + Umami events (guide-to-tool, tool-used) | conversion data live |
| Monitoring | daily 9am traffic cron + weekly Roof drift audit cron | drift caught (roadmap revert) |
| Research loop | build-next lanes doc: SERP-verified weak-competition targets only | 5 ranked lanes committed |

## Phase-by-phase (per new product area)

### Phase 0 — Positioning (1 day)
1. Define the product area + who buys (buyer = the product we ultimately funnel traffic to).
2. List 50 "how much does X cost/pay", "X by state", "X calculator" queries in the niche.
3. SERP-check each (DDG via Oracle AU relay — core-control IP is bot-challenged): keep only queries where niche sites/Reddit/forums rank, NOT big authorities. **Kill list matters more than build list.**

### Phase 1 — Site + engine (2-3 days)
4. Clone the utility-sites repo structure (deploy.sh, sitemap gen, shared headers, umami-wire).
5. New CF Pages project + zone; wire CF analytics token; Umami site.
6. Seed 30-50 pages: mix of calculators + guides per the SERP winners above.
7. Apply Roof audit from day 1 (scripts are generic: point ROOT at the new repo).

### Phase 2 — Compounding loop (ongoing, ~$15-20/day content spend)
8. Daily drip: 3 guides + 2 depth passes, every batch: verified 200s + IndexNow + commit.
9. Weekly: Roof drift audit + refresh top pages (freshness dates) + next-lane research.
10. Rule: guides must link to a paired calculator (silo); calculators link to 2+ guides.

### Phase 3 — Gate → autonomous (OpenHands pilot, in progress)
11. OpenHands Agent Canvas on core-control (tailnet-only :3111), automation runs the daily loop.
12. **Human gates (owner):** (a) deploy-to-prod approval, (b) new monetization/legal claims. Everything else autonomous.
13. Gate opens after 2 weeks of clean autonomous runs (one at a time).

### Phase 4 — Monetization (after traffic ≥ 20K PV/wk)
- Display ads → finance CPL affiliate on matching calculators ($25-150/lead) → own-product CTAs (the original goal: buyer traffic for our products) → email capture.
- Cross-product funnel: each site's guides carry contextual links to OUR product in the area.

## Scale plan (repeat across product areas)
- Candidate areas (own products first): health/kiosk (HealthAspect), QR/agents (QrAspect), video research (VidAspect), voice (LiveAspect), RE/security tooling.
- One repo + one CF zone + one OpenHands automation each; same playbook; shared content engine.
- Factory cost model: ~1 engineer-day setup + $15-20/day content + ~$0 infra (CF free tier) per site.

## Rules that keep it alive
- NEVER chase head terms (Bankrate/Angi SERPs) — long-tail breadth only.
- NEVER change URLs of performing pages.
- Every claim on cost/fee pages needs a source (E-E-A-T; drip workers already enforce).
- Freshness on winners: top-10 pages get price refreshes monthly.
- Every change verified live (curl 200 + content check) before "done".

## Status
- [x] ToolAspect: proof of concept (36K PV/wk)
- [ ] OpenHands pilot live (pulling now)
- [ ] 2-week gated autonomy run
- [ ] Second site (pick from candidates with owner)
- [ ] Revenue layer on ToolAspect (affiliate-plan.md v1)
