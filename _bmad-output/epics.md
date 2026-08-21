# Epics — Remaining Work Only

**Updated:** 2026-08-21 · Covers post-pivot work. Everything already shipped (35 calculators, /embed/ system, sitemap/IndexNow/GSC automation) is NOT re-listed.
Legend: 🔐 = auth-blocked (needs human/user action); all other stories are AI-agent-executable via repo + `./deploy.sh`.

---

## E1 — Embed Program: Paid Tier + Expansion

**Goal:** Convert the live free embed system into revenue. $9/mo white-label tier + 7 more widgets.

| ID | Story (INVEST) | Acceptance criteria | Blocked? |
|---|---|---|---|
| E1-S1 | **Checkout decision doc**: compare Stripe Payment Links vs Gumroad for $9/mo subscriptions on a no-backend static site (Payment Links/Paddle-style hosted checkout vs Gumroad license-key model); recommend one; document in docs/embed/checkout-decision.md | Doc exists, covers no-backend constraint, one recommendation, <100 lines | No |
| E1-S2 | 🔐 **Checkout account + payment link**: user creates Stripe/Gumroad account, produces hosted $9/mo checkout URL | Live checkout URL that completes a test purchase | 🔐 YES |
| E1-S3 | **Paid-tier gating in widgets**: add `data-license` flag to embed JS — when absent/unverified, render attribution link; licensed mode removes it. License verification must work with no backend (e.g., signed key check client-side, accepting it's advisory) | All 4 live widgets honor the flag; README section updated | No |
| E1-S4 | **Pricing page** `/embed/pricing/`: free vs $9/mo comparison, checkout CTA, FAQ | Page deployed via ./deploy.sh, sitemap updated, 200 OK | No |
| E1-S5 | **7 new embed widgets** from existing calculators (roofing, drywall, fencing, decking, brick, tile, gravel) following ta-embed- scoping + attribution pattern | 7 new /embed/*.js files + catalog updated + demos render (Vision QA ≥8/10) | No |
| E1-S6 | **Embed docs page**: install guide, params, theming, troubleshooting | Deployed, covers all widgets | No |

---

## E2 — B2B Outreach Campaign

**Goal:** Send to the 50 staged targets (docs/seo-offsite/outreach/: 50 targets, 3 templates, 10/week cadence). Gated on sender identity.

| ID | Story | Acceptance criteria | Blocked? |
|---|---|---|---|
| E2-S1 | 🔐 **Sender identity decision**: user picks sending identity (name, from-address, reply-to) and email-sending method (manual / SMTP / service). Single decision, everything in E2 depends on it | Decision recorded in docs/seo-offsite/outreach/sender.md | 🔐 YES |
| E2-S2 | **Outreach tracker**: CSV/MD tracking sheet — target, template, sent date, reply, outcome — generated from the 50-target list | Tracker file created with all 50 targets pre-filled | No |
| E2-S3 | **Personalization pass**: for each of first 20 targets, add one personalized line to the template (target site type, suggested calculator) | 20 personalized emails drafted in outbox/ dir, humanized (no AI-isms) | No |
| E2-S4 | 🔐 **Send batch 1 (10 emails/week × 5 weeks)** | 50 sends logged in tracker | 🔐 YES |
| E2-S5 | **Reply handling playbook**: classification (interested / not-now / no) + next-step templates incl. embed install help and paid-tier pitch | Playbook doc with 3 reply templates | No |

---

## E3 — Offsite SEO Execution (marketing arsenal posting)

**Goal:** Publish the staged arsenal (8 Reddit, 6 Quora, 3 Medium, 30 Pinterest in docs/seo-offsite/marketing/). **Entirely auth-blocked** until platform accounts exist.

| ID | Story | Acceptance criteria | Blocked? |
|---|---|---|---|
| E3-S1 | 🔐 **Platform auth**: Reddit, Quora, Medium, Pinterest accounts usable by agent or by user manually | Each platform verified postable | 🔐 YES |
| E3-S2 | 🔐 **Publish Reddit batch** (8 posts, already humanized 2026-08-19) | 8 live post URLs logged | 🔐 YES |
| E3-S3 | 🔐 **Publish Quora (6) + Medium (3)** | 9 live URLs logged | 🔐 YES |
| E3-S4 | 🔐 **Publish Pinterest (30 pins)** | 30 pin URLs logged | 🔐 YES |
| E3-S5 | **Backlink/referral tracking**: weekly cron or manual report of referring domains + referral traffic from arsenal posts (CF Analytics + Umami) | Report template + first report generated | No |

---

## E4 — Content Depth Retrofit

**Goal:** Fix ~100 thin legacy tool pages (79–349 words) using the 6-block template (docs/seo-offsite/scaling/content-depth-plan.md). Prerequisite for credible AdSense application.

| ID | Story | Acceptance criteria | Blocked? |
|---|---|---|---|
| E4-S1 | **6-block template finalization**: define the per-page content template (intro, how-to-use, formula explained, FAQ ×3, related tools, sources) and codify as an agent checklist | Template doc finalized; pilot on 1 page | No |
| E4-S2 | **Thin-page inventory**: script to rank all pages by word count; produce top-100 retrofit queue (by traffic potential/priority) | Ordered queue in docs/seo-offsite/scaling/retrofit-queue.md | No |
| E4-S3 | **Retrofit batch 1 (25 pages)** | 25 pages ≥600 words, deployed via ./deploy.sh, sitemap regen, IndexNow pinged, all 200 OK | No |
| E4-S4 | **Retrofit batch 2 (25 pages)** | Same as above, next 25 | No |
| E4-S5 | **Retrofit batch 3 (25 pages)** | Same as above, next 25 | No |
| E4-S6 | **Retrofit batch 4 (25 pages)** | Same as above, final 25; all 100 pages ≥600 words | No |

---

## E5 — Ad Monetization

**Goal:** AdSense once eligible, Ezoic at 10K sessions/mo. The "no ads" claim was removed site-wide 2026-08-19; 30-day window clears ≈ 2026-09-18.

| ID | Story | Acceptance criteria | Blocked? |
|---|---|---|---|
| E5-S1 | **Ad-readiness audit** (after 30d window): re-check no residual "no ads" copy (full-site grep), thin-page count reduced ≥50 (E4 progress), privacy policy page exists with ad disclosure | Audit doc, pass/fail checklist | No |
| E5-S2 | **Privacy policy + ad disclosure page** | Deployed, linked in footer, covers AdSense/Umami/CF Analytics | No |
| E5-S3 | 🔐 **AdSense application** (user account action) | Application submitted; outcome logged | 🔐 YES |
| E5-S4 | **Ad placement implementation** (on approval): ad slots on tool pages above-fold-adjacent + end-of-content; no layout shift on calculators | Ads live, CLS unaffected, RPM baseline recorded | No (after approval) |
| E5-S5 | 🔐 **Ezoic migration at 10K sessions/mo** | Sessions verified ≥10K; Ezoic account + DNS (user action) | 🔐 YES |

---

## E6 — Internal Linking

**Goal:** Hub-and-spoke link structure, breadcrumbs, zero orphans. Pure agent work, no auth.

| ID | Story | Acceptance criteria | Blocked? |
|---|---|---|---|
| E6-S1 | **Orphan-page audit script**: crawl all internal links (or parse sitemap + link graph), report pages with 0 inbound internal links | Script + orphan report | No |
| E6-S2 | **Hub-and-spoke wiring**: every tool page links to its category hub + 3 related tools; hubs link to all children | Script adds links to pages missing them; deployed; spot-check 20 pages | No |
| E6-S3 | **Breadcrumbs**: add breadcrumb trail (Home → Category → Tool) to tool page template via shared JS or inline | Breadcrumbs render on all tool pages; structured data (BreadcrumbList JSON-LD) included | No |
| E6-S4 | **Link-graph regression check**: re-run orphan audit post-wiring; orphan count = 0 (excluding intentionally standalone) | Report shows 0 orphans | No |

---

## Blocked-on-user summary (do these decisions once, unblock everything)

1. **E1-S2** — checkout account (Stripe vs Gumroad, $9/mo link)
2. **E2-S1** — outreach sender identity
3. **E3-S1** — Reddit/Quora/Medium/Pinterest auth
4. **E5-S3/E5-S5** — AdSense/Ezoic accounts
