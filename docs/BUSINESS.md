<!-- canon: true | project: utility-sites | doc: business | version: 1 | owner: stu
     updated: 2026-09-01 | reviewed: 2026-09-01 | sources: FEATURES.md, README.md, docs/seo-offsite/execution-plan.md, docs/seo-offsite/revenue/revenue-model.md, docs/seo-offsite/revenue/monetization-mix.md, git log (a3039e7, 91051d5b), sitemap.xml, hermes cron list, packages/toolaspect-embed/package.json -->
<!-- doc-sig: documenting/v1 | via: hermes | 2026-09-01 -->

# 📋 Business — utility-sites (ToolAspect)

> INVESTOR/C-SUITE FACING: TAM/SAM/SOM, traction stats, pricing, tech-stack quick reference, commercial status. Updated on every material change; auto-mirrored to Outline. Edit THIS file — it is the canonical source; Outline mirror follows via `outline-doc`.


## 1. One-liner
ToolAspect (toolaspect.com) is a 100%-free, no-signup, no-tracking utility site — 2,000+ browser-based tools and 1,000+ converters across finance, contractor, pet, auto, dev, and everyday verticals — monetized long-term via display ads and white-label embed widgets.

## 2. Problem / Market
- **TAM / SAM / SOM:** Calculator.net-class utility sites serve billions of monthly pageviews (calculator.net alone reportedly 1.5–1.8 pages/visit at tens of millions of visits/mo). Online-calculator/display-ad TAM est. $1B+/yr. SAM (English-language tool/converter SERP traffic monetizable at $12–35 RPM): est. $200–400M/yr. SOM (realistic 5-yr capture at 50K daily PV, RPM $20): ~$365K/yr. *(Bottom-up figures from docs/seo-offsite/revenue/revenue-model.md; top-down figures are estimates.)*
- **Why now:** AI Overviews are gutting informational SERP CTR, but tool/utility queries still require an interactive page — utility sites are the durable SEO asset class. Rapid static-site generation (tool-factory protocol) lets a solo operator ship 5–10 quality tools/week where incumbents ship per quarter.

## 3. Product & wedge
- **What's live (URLs):** https://toolaspect.com — 2,381+ static pages (sitemap.xml currently lists 3,124 URLs incl. state×tool hubs, guides, converters); site claims "2,000+ tools / 1,000+ converters". Vertical hubs: /contractor-tools/, /pet-tools/, /auto-tools/, /finance-tools/, /developer-tools/, /embed/ (white-label widget catalog).
- **Distribution products shipped:**
  - npm package **@coreaspect/toolaspect-embed@0.1.0** published (packages/toolaspect-embed)
  - **WordPress plugin** built and packaged (packages/toolaspect-wp/toolaspect-embed.zip) — one-line embeddable calculators
  - 4 white-label JS embed widgets live on /embed/ (concrete, rebar, lumber, paint)
- **What's next (30/90 days):** 5 directory submissions pending (docs/seo-offsite/submissions/api-backlink-plan.md — GitLab, PyPI, Docker Hub, Gravatar, Mastodon gated on Stu signups); content-drip guides cadence live; state×tool wave 2 expansion; AdSense application (30-day post-"no ads" removal window passing).

## 4. Commercial status
| Metric | Value | As-of |
|---|---|---|
| Customers / users | ~300 real pageviews/day (no signup product; anonymous) | 2026-08-20 (FEATURES.md) |
| MRR / revenue | $0 — no monetization active yet | 2026-08-20 |
| Pipeline (qualified) | 50 embed-outreach targets identified, 0 contacted (outreach kit ready, sends pending) | 2026-08-19 |
| Pricing (tiers) | Free tools forever; embed widgets: Free (attribution backlink) / White-label planned $9/mo | 2026-08-19 |
| Verified traffic (analytics) | _(not yet tracked)_ — no tokenized analytics API wired | 2026-09-01 |
| Revenue | _(not yet tracked)_ | 2026-09-01 |

## 5. Traction highlights
- **2026-09-01** — State×tool wave 1: 5 hubs × 50 states = 255 sourced-data pages; git `91051d5b`, `86e899db`
- **2026-08-31** — SEO wave-1 shipped: +703 OG tag sets, title dedupe, H1 demotion; git `a3039e7`
- **2026-08-31** — Buildable-now wave: E-E-A-T about + editorial-policy pages, 21 quotable definition boxes, 357 guides hub-spoke linked, robots.txt allow-all + sitemap; gate 0/0
- **2026-09-01** — Content-drip 9/1: 3 new guides + depth passes (home-equity 787→1,310 words; va-loan 815→1,252)
- **2026-08-19** — /embed/ widget catalog live (4 white-label calculators, vision QA 9/10); contractor batch 1 (9 tools) verified
- **2026-08-26** — AIO/SEO uplift wave 1: 40 tools through review-fix-deploy loop
- **Ongoing crons live:** SEO-drift weekly regression watch (Mon 7AM), GSC sitemap ping + AIO visibility check (Wed 8AM), plus toolaspect daily-traffic, site-gate, factory-watcher, marketing-daily jobs (see `hermes cron list`)
- **npm:** @coreaspect/toolaspect-embed@0.1.0 published; **WP plugin** packaged

## 6. Tech stack (quick reference)
| Layer | Tech | Note |
|---|---|---|
| Site | Static HTML+JS, zero build step | Self-contained pages, dark theme, all client-side |
| Hosting | Cloudflare Pages | Deploy via ./deploy.sh (auto-regenerates sitemap) |
| Generation | Python scripts (scripts/) | gen-state-pages, generate-seo-pages, gen-all-tools, seo-fix-wave1-3 |
| Quality gate | site-gate.py + node DOM-stub harnesses | 0 broken links / 0 gate fails required per deploy |
| Distribution | npm (@coreaspect/toolaspect-embed) + WordPress plugin | One-line embed installs |
| SEO infra | sitemap.xml (3,124 URLs), llm.txt, IndexNow daily, GSC verified 2026-08-12 | JSON-LD ×3 per tool |
| Ops | Hermes cron jobs (drift Mon 7AM, sitemap-ping Wed 8AM, traffic, gate, factory) | Config drift currently skipping some unpinned jobs |

## 7. Competition & moat
- **Nearest competitors:** calculator.net (incumbent, ~1.5–1.8 pages/visit scale), rapidtables.com, omnicalculator.com — full competitor cards in GTM.md (currently a stub; monetization benchmark in docs/seo-offsite/revenue/competitor-monetization.md).
- **Wedge:** (1) speed — tool-factory protocol ships node-verified, JSON-LD-complete tools at 5–10/week with automated gates; (2) vertical depth incumbents lack (contractor, pet-cost, wedding-cost, state×tool matrices); (3) B2B hedge — embed widgets + npm/WP distribution monetize AI-Overview CTR risk that pure display sites can't.

## 8. Risks & asks
- **Risk 1 — Google sandbox / SEO timeline:** GSC verified 2026-08-12; site in sandbox with YandexBot crawling ~30% of PVs. Kill gate: <10K visits/mo at M6 → stop offsite SEO. M12 revenue <$200/day → exit.
- **Risk 2 — AI Overviews CTR erosion** on informational queries; mitigated by tool-required queries + Lane 1 B2B embeds, not yet measured.
- **Risk 3 — Analytics blind spot:** no tokenized analytics (CF Pages token is build-time-only, error 9106) — traffic/revenue can't be verified until Plausible/GA4/CF Web Analytics API is wired.
- **Asks:** ~15 min of Stu signups (GitLab, npm publish approval, PyPI, Gravatar, Mastodon) to unlock 5 pending directory submissions; embed outreach green-light (50 targets, 10/week cadence ready); analytics integration decision.
