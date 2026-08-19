# Fact-Check: ToolAspect $1K/Day Plan

Reviewer: adversarial fact-checker · Date: 2026-08-18 · Evidence: live curl checks of toolaspect.com, Bing/DDG SERP scrapes, plan docs in `docs/seo-offsite/`.

---

## VERDICT SUMMARY

The plan is **directionally sane but numerically optimistic and internally inconsistent**. Two of its pillars (RPM $20 blended, $700/day by M12) are not supported by the evidence. The content base is real but thinner than the plan implies. Indexing is currently ~zero — normal for day 6, but it means the clock hasn't even started.

---

## 1. TRAFFIC / CONTENT CLAIMS

### Claim: 1,409 pages, sitemap in order
**VERIFIED.** `sitemap.xml` returns exactly 1,409 `<loc>` entries, homepage 200 OK.

### Claim: pages have meta descriptions, H1s, real content (not thin stubs)
**PARTIALLY VERIFIED — mostly thin.** 11 pages sampled (2026-08-18, tag-stripped word counts):

| Page | Words | Meta desc | H1 |
|---|---|---|---|
| age-calculator | 79 | ✅ | ✅ |
| amortization-schedule | 204 | ✅ | ✅ |
| auto-loan-calculator | 96 | ✅ | ✅ |
| average-calculator | 169 | ✅ | ✅ |
| bac-calculator | 93 | ✅ | ✅ |
| base64-encoder | 2,124 | ✅ | ✅ |
| bmi-calculator | 349 | ✅ | ✅ |
| compound-interest-calculator | 341 | ✅ | ✅ |
| password-generator | 2,503 | ✅ | ✅ |
| percentage-calculator | 228 | ✅ | ✅ |
| unit-converter | 310 | ✅ | ✅ |

Every page has title/meta/H1 — good. But **7 of 11 sampled pages are 79–349 words**; only 2 dev-tool pages exceed 2,000. The plan's own "content depth" retrofit (300–500 words, top-100 only) acknowledges this but understates the problem: at 79–200 words, most tool pages are thin-stub tier for 2025-26 quality standards. "Content depth" must cover far more than 100 pages.

### Claim: 45–60M searches/mo addressable; ceiling 120–150K visits/mo
**UNKNOWN / UNVERIFIABLE.** No volume source methodology in `traffic-gap-analysis.md`; plausible order-of-magnitude for 1,400 utility keywords but not auditable from here. The self-imposed 120–150K/mo ceiling is actually *honest* — it correctly concedes a new domain won't capture a meaningful share of that volume. Keep, but treat as guess.

---

## 2. RPM CLAIMS

### Claim: blended $20 RPM; finance $40–80; AdSense $12
**DESTROYED (blended $20 as base case).** Reality-check against published 2025–26 data:

- AdSense display RPM for US-heavy utility/tool traffic: commonly **$5–15**, not $12 floor. Calculator-adjacent traffic is low-intent, high-bounce; advertisers pay little.
- The plan's own `revenue-model.md` line 68 concedes: *"A global-uniform traffic mix yields blended RPM ~$8–12 even with finance content"* — then the base case assumes $20 anyway. Internal contradiction.
- The $20 blended requires: majority tier-1 geo + premium network (Mediavine/Raptive tier) + above-average pages/session. None of those exist in year 1.
- Network thresholds: the plan gets these **roughly right** (VERIFIED): Mediavine Journey 10K sessions, Mediavine/Raptive 50K sessions, Ezoic no minimum. But per the trajectory below, the site doesn't hit 10K sessions until ~M5 *on the plan's own optimistic curve* — so year-1 reality is AdSense/Ezoic RPM, i.e. **$6–12 net of ad-block and geo**.
- Finance $40–80 RPM: real, but plan itself admits YMYL SERPs are dominated by NerdWallet/Bankrate. Assume ~0% finance ranking in year 1.

**Corrected numbers:** Year-1 net RPM $8–12. Base-case traffic requirement at $10 RPM = **100K PV/day**, not 50K — double the plan's math. M12 revenue at realistic 200–400K PV/mo × $10–14 RPM = **$70–180/day, not $700**.

---

## 3. TRAJECTORY CLAIMS

### Claim: $700/day by M12 (900K PV/mo, ~30K PV/day)
**DESTROYED.** From ~26 PV/week (~110/mo) to 900K/mo in 12 months = **~8,000x growth**. Reality:

- Google sandbox for new domains: typically 3–9 months of near-zero before meaningful rankings (plan assumes it "resolves month 4–6" — optimistic end).
- calculator.net, the plan's own benchmark, took **years** to reach its current scale. New-domain programmatic-SEO case studies that do ramp fast (e.g. some AI-era sites) did it with massive DR link acquisition or existing authority — a 20 hr/wk solo effort with 15–20 referring domains/mo is not that.
- Common new-domain curve: months 1–6 near-zero; months 7–12: 5–50K/mo if content+links executed well; crossing 100K/mo in month 12 is a *top-percentile* outcome. 900K/mo by M12 is fantasy-tier.
- The plan's own monthly table is internally inconsistent: M5 = 35K/mo, M12 = 900K/mo — a 26x jump in 7 months with no mechanism stated.

**Corrected trajectory:** realistic M12 = 50–150K PV/mo → **$15–50/day**. $1K/day: month 30–48 at best, and only if the page count and authority program actually compounds.

---

## 4. INDEXING REALITY

**MEASURED (2026-08-18):**
- Bing `site:toolaspect.com`: reports "About 18,600 results" but **zero actual toolaspect.com organic results visible in the SERP HTML** — Bing's count is a loose-match artifact; verifiable indexed pages ≈ 0.
- DuckDuckGo: 0 results.
- Sitemap submitted Aug 12; site live ~Aug 8–13 → **~0–6 days old. Near-zero indexing is normal and not alarming.**

But the implication for the plan is: the 3–9 month sandbox clock starts *now*. The plan's M1–M3 milestones (postage rates, 3,760 pages by M3) will produce pages that sit unranked for months. Publishing 3,760 thin programmatic pages into the sandbox also raises site-wide quality-signal risk (helpful-content-style classifiers). **Recommendation:** cap programmatic expansion until the first 100 retrofitted pages show impressions in GSC.

---

## 5. ADSENSE / POSITIONING RISK

### "No signup. No ads. No tracking." contradiction
**VERIFIED CONTRADICTION.** Homepage (2026-08-18) literally reads: *"No signup. No ads. No tracking. Everything runs in your browser."* The master plan monetizes with display ads (AdSense → Ezoic → Mediavine). This is (a) a consumer-protection/trust problem — the site's stated differentiator vs incumbents is the *absence* of the exact monetization planned; (b) an AdSense policy optics problem. The copy must change before ad deployment, or the entire positioning collapses.

### AdSense approval for a 1-week-old, 1,400-page LLM-generated site
**HIGH RISK — UNKNOWN approval odds, honestly unknowable, but stacked against:**
- 2024–26 Google site-quality guidance explicitly targets scaled programmatic/AI content; "no original value added" is a named rejection/deindexing reason.
- 1-week domain age + no traffic history + no backlinks = routine AdSense rejections in 2025–26 reports; typical approvals happen at 1–3 months with evidence of real use.
- 7 of 11 sampled pages at <350 words gives reviewers exactly the "thin/templated" pattern they reject.
- Realistic expectation: **rejection on first application**; approval plausible only after the content retrofit + some organic traffic.

---

## SCORECARD

| # | Claim | Verdict |
|---|---|---|
| 1a | 1,409 pages, sitemap OK | ✅ VERIFIED |
| 1b | Pages not thin stubs | ⚠️ HALF — meta/H1 yes; 7/11 sampled are 79–349 words |
| 1c | 45–60M searches / 120–150K ceiling | ❓ UNKNOWN / reasonable guess |
| 2a | Blended RPM $20 base case | ❌ DESTROYED — year-1 realistic $8–12 |
| 2b | Network thresholds (10K/50K sessions) | ✅ VERIFIED |
| 2c | Finance RPM $40–80 | ✅ exists, but ❌ unreachable in Y1 (YMYL) |
| 3 | $700/day by M12 | ❌ DESTROYED — realistic M12 $15–50/day; 8,000x growth claimed |
| 4 | Indexing | 📊 Measured ~0 — normal at day ~6; sandbox 3–9 mo not priced into timeline |
| 5a | Ads vs "No ads" positioning | ❌ VERIFIED CONTRADICTION |
| 5b | AdSense approval odds | ⚠️ HIGH RISK / UNKNOWN — likely first-attempt rejection |

## CORRECTED PLAN NUMBERS

- Year-1 blended RPM: **$8–12** (AdSense/Ezoic, ad-block + geo adjusted), not $20.
- $1K/day traffic requirement at $10 RPM: **~100K PV/day (3M/mo)** — not 50K.
- M12 realistic outcome: 50–150K PV/mo → **$15–50/day**.
- $1K/day realistic horizon: **month 30–48**, contingent on execution, not month 14–24.
- Sequencing fixes: (1) rewrite "No ads" positioning before any ad code ships; (2) retrofit content depth before programmatic expansion to 3,760 pages; (3) delay AdSense application until retrofit + first GSC impressions.
