# ToolAspect — Build-Next Research (Nov 2026)

Site: toolaspect.com · ~31K PV/wk (+23% WoW) · ~700 pages. Repo: /data/projects/utility-sites.

## Evidence (7d analytics + SERP checks, Nov 2026)

**Top performers (human hits):** lumber cost guide (1,497) · rumble-pay guide (1,270 → rumble-earnings calc 753) · patreon-fees guide (666) · tip-calculator (558) · color-picker (557) · home-repair-costs-by-state (548) · convert hub (540).

**Proven patterns:** (a) "how much does X pay" creator guide → earnings calculator silo; (b) cost-by-state programmatic pages; (c) "how much does X cost 2026" guide feeding existing calculators; (d) zero-click dev/utility tools with return traffic (color-picker, converters).

**SERP/demand checks (web search):**
- **Kick payouts**: SERP dominated by Reddit/Facebook threads + kick.com's own partner page. No authoritative calculator/guide site ranks. Classic weak-SERP, high-confusion query ("$16–18/hr?" threads = exactly the question users type).
- **X Premium / Original Content Rewards**: top result is a niche site (paidhype.com) with "how much does X pay creators, plus a calculator" — a small site ranking #1 proves the SERP is winnable. Program changed in 2025 (engagement-bait penalty) → incumbents are stale, fresh 2026 content wins.
- **Fanbase**: gemlist.io (small niche blog) ranks #1 — weak SERP confirmed.
- **Substack fees**: Substack's own help pages own it (10% + Stripe fees). Harder SERP; only worth a comparison-angle page (Substack vs Patreon vs Locals fee calculator).
- **Locals**: covered mainly as a Rumble-acquisition news story; no dedicated payout guide ranks. Cheap win riding our Rumble authority.
- **Cost-by-state**: childcare (worldpopulationreview, CNBC), roof replacement (multiple thin niche sites rank — winnable), dental cleaning (clearcaredentalgroup, a multi-location practice — winnable), car insurance (Bankrate/SmartFinancial — BRUTAL, avoid). Braces: thin SERP, mostly ASD/clinic blogs.
- **Materials cost guides**: drywall/siding/insulation/shed SERPs = Angi/HomeAdvisor/homewyse (strong, avoid head terms). Gravel cost: niche sites rank (hellogravel, calcgravel, homegpt) → long-tail winnable. Fence: multiple small calculator sites rank → winnable.
- **Existing coverage**: TikTok, Twitch, YouTube, Rumble, Patreon, Boosty payout guides exist. **Missing: Kick, X Premium, Fanbase, Locals, Substack-comparison, Whop** — the exact adjacent platforms with weak SERPs.
- **Monetization**: AdSense was rejected earlier; affiliate-plan.md (finance cluster) drafted but unshipped. Display-only revenue at 30K PV/wk leaves affiliate + email + embed revenue on the table.
- **fabric note** (suggestion pool): generic high-volume calculators (percentage, BMI, word counter) — we already have these; head terms are saturated by incumbents. Not a build lane.

---

## Ranked Build Lanes

### Lane 1 — Creator payout silo expansion: Kick, X Premium, Fanbase, Locals (+comparison hub) 🥇
- **Build:** 4 guides + 4 calculators: `how-much-does-kick-pay` (+ kick-earnings-calculator with hourly-rate model — the "$16/hr" question), `how-much-does-x-pay-creators` (2026 Original Content Rewards, + calculator; note paidhype proves model), `how-much-does-fanbase-pay` (+ calculator), `locals-creator-earnings` (+ mini calc). Plus one **creator-platform-fee-comparison** hub (Patreon vs Substack vs Locals vs Fanbase vs Boosty — we already have 3 of the data sets) — comparison angle beats Substack's own help pages on the fee query.
- **Pages:** ~10 new + 1 hub. Internal-link all to rumble-earnings + patreon-fees (proven authority nodes).
- **Why it wins:** Direct clone of the Rumble playbook (1,270 + 753 hits) into SERPs verified weak (small niche sites / Reddit / FB threads rank). Kick is the fastest-growing streaming platform with maximum payout confusion.
- **Effort:** ~3–4 days of content-engine time (guides fit existing 3/day drip; calculators are variants of rumble-earnings template). **Highest ROI on the board.**

### Lane 2 — State-level cost pages: roof repair, dental cleaning, childcare, braces 🥈
- **Build:** 4 × 50-state programmatic sets cloning home-repair-costs-by-state (548/wk). Priority order: **roof replacement** (thin niche sites rank; feeds existing roofing/roof-replacement calculators), **dental cleaning + braces** (winnable vs a dental group; feeds invisalign/dental-implant pages), **childcare** (huge evergreen demand, DOL public data available; feeds college-cost/529 cluster).
- **Pages:** ~200 (4 × 50).
- **Why it wins:** Pattern already validated on-site; SERPs for 3 of 4 are thin niche/medical sites; DOL childcare database gives citable government data = E-E-A-T moat.
- **Effort:** ~1–1.5 weeks (data sourcing is the bulk; template already exists).
- **Do NOT do car insurance by state** — Bankrate/SmartFinancial/carinsurance.com own it.

### Lane 3 — "How much does X cost 2026" guide × existing calculator cross-feed 🥉
- **Build:** Guides for materials where SERP is niche-site-winnable and we already own the calculator: **gravel** (gravel-calculator exists; SERP = hellogravel/calcgravel), **fence** (fence-calculator; SERP = small calc sites), **concrete/mulch/topsoil/sod refresh** (update + 2026 re-title), **lumber quarterly price update** (protect the 1,497-hit page — price guides decay without freshness).
- **Pages:** ~8 new guides + freshness pass on top 10 cost guides.
- **Why it wins:** Lumber proved the format; avoid Angi/HomeAdvisor head terms (drywall, siding, insulation) — target only where niche sites rank.
- **Effort:** ~4–5 days, mostly content engine.

### Lane 4 — Monetization upgrades (ship affiliate-plan v1 + email + embeds)
- **Build:** (a) Ship the drafted affiliate plan: Amazon Associates + one finance CPL network, "Compare offers" card on auto-loan/401k/mortgage/annuity calculators (2-tool A/B test first per plan). (b) Home-services quote affiliate (roofing/contractor lead-gen, e.g. networx/1800-contractor style) on state cost pages — that's what the thin niche competitors monetize with. (c) Email capture on top 10 guides (cost-update alerts / payout-rate updates — natural re-subscription reason). (d) Formalize `/embed` offering (embeds.html + embeds-data.json exist): free embed w/ attribution → backlinks; paid white-label later.
- **Pages:** 0 new; ~10 templates touched.
- **Why it wins:** 30K PV/wk display-only is under-monetized; affiliate CPL on finance tools pays $25–150/lead vs pennies per display PV. State-cost pages have home-services lead-gen intent competitors already exploit.
- **Effort:** ~1 week (needs Stu's payment details for network applications — flag this).

### Lane 5 — Developer tools lane (color-picker validation)
- **Build:** Expand developer-tools hub around color-picker (557/wk): color-contrast-checker → full color suite interlinking (palette generator, gradient from color, color-blindness simulator view), JSON/formatter upgrades (json-viewer, jq-playground already exist), regex/tester hub. Dev-tool users are repeat visitors → better RPM and email list quality.
- **Pages:** ~10.
- **Why it wins:** color-picker + convert hub = 1,100 PV/wk of sticky, returning dev traffic; dev tools have embeddable/shareable loops. Weakest evidence of the five — treat as experiment, measure 30d.
- **Effort:** ~1 week.

## Quick wins this week
1. `how-much-does-kick-pay` guide + kick earnings calculator (Lane 1, ship first).
2. Roof replacement cost by state (50 pages from home-repair template).
3. X Premium payout guide (stale incumbent SERP).
4. Refresh lumber guide with Nov 2026 prices + "updated" date (protect the #1 page).
5. Email capture widget on top 10 guides (before affiliate rollout).

## What NOT to build
- **Car insurance / insurance by state** — Bankrate/SmartFinancial fortress.
- **Drywall / vinyl siding / insulation / shed head-term guides** — Angi/HomeAdvisor/homewyse own them.
- **Substack fees head-on** — Substack's own docs rank; only via the comparison hub angle.
- **Generic head-term calculators** (percentage, BMI, word counter — despite fabric suggestion): we have them; incumbents saturate; zero marginal edge.
- **Twitch/YouTube/TikTok payout guide expansion** — we already rank there; maintain, don't multiply.
- **Paid embed/white-label productization now** — no demand signal yet; free embed-for-backlink first.

*Monetization honesty note: AdSense rejected earlier in the year; current ad network unverified in this research — confirm what's actually serving before affiliate tests so network-policy conflicts are checked (affiliate-plan.md already accounts for removal-safety).*
