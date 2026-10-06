# Content Drip-Feed Plan — supporting content for existing high-value tools
# Audit Aug-25: 174 tools, 157 lack a supporting guide, 158 thin (<900 words), 155 without tables.

## Strategy
The 10/day tool factory builds NEW pages. This drip adds the SECOND layer: supporting
content that multiplies existing pages' rankings. Every day, one content batch:

### Daily content batch (runs after the tool build, same bridge session slot)
1. **3 supporting guides** for the top-ranked existing tools without one
   (priority list: /tmp/guide-priority.json → bake into docs/content-drip-queue.md).
   Each guide: 900-1400 words, question-led H2s (PAA style), 1+ data table,
   links to its tool page + 2 sibling tools, FAQ block, humanizer rules.
2. **Depth pass on 2 thin tool pages**: expand SEO content to 900+ words,
   add a reference table + 2 FAQs if missing. NEVER touch the calculator JS.
3. **Longtail result pages** (2-4) for that day's tools if parameter variants exist.
4. llm.txt regen + deploy + IndexNow (same as tool protocol).

### Weekly (Sunday batch replaces daily)
- Interlink sweep: ensure every finance/health/legal tool has ≥3 inbound internal links.
- Internal search-review: GSC queries with impressions>50 and CTR<2% → title rewrite candidates.

## Queue (auto-extended)
Priority = monetization score (finance/insurance/legal/health keywords in slug).
Wave order: savings*, salary*, retirement*, refinance-break-even*, property-tax*, pmi*, payroll*, ovulation,
net-worth*, income-tax, credit-card-payoff*, car-payment, dti*, amortization, compound-interest*,
roi, bmi*, calorie, macro, body-fat, bmr, water-intake, ideal-weight, due-date, age-calculator...
(* = matching guide already exists in guides/ — verify on arrival, skip, and log it below)

48 high-value tools currently queued; remainder (currency-converter, qr-code-generator,
password-generator, image-compressor, csv-to-json, prompt-library) follow in wave 2.

### Done (drip log)
- 2026-08-25 batch A guides: savings → guides/how-much-should-you-save-each-month/;
  retirement → guides/how-much-do-you-need-to-retire/;
  property-tax → guides/how-is-property-tax-calculated/;
  payroll → guides/how-to-calculate-payroll-taxes/
  (each: 1,078–1,142 words, computed data tables, FAQ + Article/Breadcrumb/FAQPage JSON-LD,
  tool + 2 sibling links; all-tools guides section updated to 29)
- 2026-08-25 batch A skipped (guide pre-existing): salary (how-to-calculate-salary-after-tax)
- 2026-08-25 guides: pregnancy-due-date → guides/how-due-dates-are-calculated/;
  workers-comp → guides/how-much-does-workers-comp-cost/;
  social-security → guides/when-to-take-social-security/
- 2026-08-25 skipped (guide pre-existing): va-loan (va-loan-funding-fee),
  mortgage (how-to-calculate-mortgage-payment), fha (fha-loan-requirements)
- 2026-08-25 depth passes: pregnancy-due-date-calculator (92 → 900+ words, 2 tables, 4 FAQs + FAQ/Breadcrumb JSON-LD);
  mortgage-calculator (154 → 960+ words, rate table, 4 FAQs + FAQ/Breadcrumb JSON-LD, related links added).
  Skipped va-loan-calculator (827 words, near target, batch-1 depth already applied).
- 2026-08-26 batch guides: ovulation → guides/when-do-you-ovulate/;
  income-tax → guides/how-is-income-tax-calculated/;
  car-payment → guides/how-much-car-payment-can-i-afford/
  (each: 1,392–1,415 words, computed data tables, FAQ + Article/Breadcrumb/FAQPage JSON-LD,
  tool + 2 sibling links; all-tools guides section updated, count 39→59)
- 2026-08-26 skipped (guide pre-existing, verified links tool): refinance-break-even (when-should-you-refinance-your-mortgage),
  pmi (how-to-get-rid-of-pmi), net-worth (how-to-calculate-net-worth),
  credit-card-payoff (credit-card-payoff-snowball-method), dti (debt-to-income-ratio-explained)
- 2026-08-26 depth passes: ovulation-calculator (83 → 967 words, 2 tables, 4 FAQs + FAQ/Breadcrumb JSON-LD);
  amortization-schedule (79 → 953 words, 2 reference tables, 4 FAQs + FAQ/Breadcrumb JSON-LD,
  guide links added; calculator JS untouched on both)
- 2026-08-27 batch guides: amortization → guides/how-does-loan-amortization-work/;
  roi → guides/what-is-a-good-roi/;
  calorie → guides/how-many-calories-should-i-eat/
  (each: 1,316–1,407 words, computed data tables, FAQ + Article/Breadcrumb/FAQPage JSON-LD,
  tool + 2 sibling links; all-tools guides section updated, count 59→62)
- 2026-08-27 depth passes: roi-calculator (870 → 1,226 words, benchmark reference table, +2 FAQs
  with FAQPage JSON-LD update, BreadcrumbList added, related links + guide link; repaired corrupted
  JS-array-in-HTML paragraph in ROI Pitfalls section; calculator JS untouched);
  calorie-calculator (895 → 1,301 words, DGA reference table, +2 FAQs with FAQPage JSON-LD update,
  BreadcrumbList added, guide link in related; calculator JS untouched)
  Next in queue: body-fat, bmr, ideal-weight, age-calculator
  (macro and water-intake already have guides: how-to-calculate-your-macro-split, how-much-water-by-weight).
- 2026-08-28 batch guides: body-fat → guides/what-is-a-healthy-body-fat-percentage/;
  bmr → guides/how-to-calculate-bmr/;
  ideal-weight → guides/how-much-should-i-weigh/
  (each: 1,226–1,274 words, computed data tables, FAQ + Article/Breadcrumb/FAQPage JSON-LD,
  tool + 2 sibling links; all-tools guides section updated, count 62→65)
- 2026-08-28 depth passes: body-fat-calculator (949 → 1,368 words, +ACE bands table + worked-example
  section, +2 FAQs with FAQPage JSON-LD update (5→7), BreadcrumbList added, guide link in related;
  calculator JS untouched, verified byte-identical to HEAD);
  bmr-calculator (951 → 1,385 words, +BMR-by-age table + equation-comparison table + worked-example
  section, +2 FAQs with FAQPage JSON-LD update (5→7), BreadcrumbList added, guide link in related;
  calculator JS untouched, verified byte-identical to HEAD)
  Next in queue: age-calculator (guide + depth pass if <900), then wave 2:
  currency-converter, qr-code-generator, password-generator, image-compressor,
  csv-to-json, prompt-library. (macro and water-intake have guides already — depth
  passes only if their tool pages are still thin.)
- 2026-08-29 batch guides: age-calculator → guides/how-old-am-i/;
  currency-converter → guides/why-do-exchange-rates-change/;
  qr-code-generator → guides/do-qr-codes-expire/
  (each: 1,387–1,399 words, computed data tables, FAQ + Article/Breadcrumb/FAQPage JSON-LD,
  tool + 2 sibling links; all-tools guides section updated, count 65→68; guide backlinks added
  to all three tool pages' related sections; currency-converter visible `you\'re` typo fixed)
- 2026-08-29 depth passes: prompt-library (141 → 1,059 words, +category-count table +prompt-anatomy
  reference table, +5 FAQs with new FAQPage JSON-LD; calculator JS untouched, verified byte-identical
  to HEAD; NOTE: PROMPTS array holds 53 prompts while title/meta claim "60+" — claim left untouched,
  flagged for next tool pass);
  water-intake-calculator (916 → 1,300 words, +worked-example section +USDA water-content-of-foods
  table, +2 FAQs with FAQPage JSON-LD update (5→7), guide link in related; calculator JS untouched,
  verified byte-identical to HEAD)
  Skipped depth passes: age-calculator (990 words ≥ 900, table + FAQ JSON-LD already present),
  macro-calculator (982).
  Next in queue: password-generator, image-compressor, csv-to-json (no matching guides),
  then remainder of wave-2 list.
- 2026-08-30 batch guides: password-generator → guides/what-makes-a-password-strong/;
  image-compressor → guides/which-image-format-should-you-use/;
  csv-to-json → guides/csv-vs-json-when-to-use-each/
  (each: 1,358–1,440 words, computed data tables — cracking-time, format-comparison,
  format-by-job — FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling links;
  all-tools guides section updated, count 68→71; guide backlinks added to all three
  tool pages' related sections)
- 2026-08-30 depth passes: password-generator (996 → 1,272 words, repaired corrupted
  JS-array-in-HTML paragraph in Passwords/Hashes/Breaches section — same defect class as
  the ROI page, +hash-algorithm reference table, +2 FAQs with FAQPage JSON-LD update 5→7,
  BreadcrumbList already present; calculator JS untouched);
  image-compressor (1,443 → 1,714 words, +format-comparison table +quality-settings
  reference table, +2 FAQs with FAQPage JSON-LD update 7→9; compressor JS untouched)
  Skipped depth pass: csv-to-json (1,223 words ≥ 900, format table + 5 FAQs already
  present) — but repaired as out-of-band fix: FAQPage JSON-LD first Question name held a
  ~4KB pasted-HTML blob (staged-blob collision class; JSON parsed but Q1 was garbage) →
  restored to "How do I convert a CSV file to JSON?"; added missing BreadcrumbList.
  Out-of-band: guides/index.html stale 226 claims (twitter meta + CollectionPage) → 336,
  completing the 10d746c "all count claims" sweep that missed those three.
  Wave-2 queue state: prompt-library guide still owed (depth pass done 8-29);
  currency-converter, qr-code-generator, macro, water-intake, age-calculator complete.
- 2026-08-31 batch guides: prompt-library → guides/how-to-write-ai-prompts/;
  hourly-to-salary → guides/how-to-convert-hourly-to-salary/;
  sales-tax → guides/how-does-sales-tax-work/
  (each: 1,308–1,386 words, verified data tables — prompt anatomy + weak-vs-repaired,
  rate→period conversion + salary→effective-hourly, Tax Foundation 2026 combined
  rates — FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling links;
  all-tools guides section updated, count 71→74; guide backlinks added to all
  three tool pages' related sections; FLSA $684/week threshold verified vs DOL,
  sales-tax tool page stale "California highest combined avg" claim corrected
  to TF-2026 Louisiana 10.11%)
- 2026-08-31 depth passes: compound-interest-calculator (190 → 1,240 words,
  +simple-vs-compound +rate-grid +frequency +Rule-of-72 reference tables,
  +5 FAQs with new FAQPage JSON-LD + BreadcrumbList; fixed wrong
  "$10k + $500/mo @7%/30y = $566,755" bullet → $691,150 monthly-compounded
  (old figure dropped the principal and used annual contributions); guide link
  in related; calculator JS untouched);
  heloc-payment-calculator (764 → 1,274 words, +payment-jump-by-balance table
  (verified: $50k→$200k at 8.5%), +variable-rate mechanics +blunt-the-jump
  sections, +2 FAQs with FAQPage JSON-LD update 5→7, guide links in related;
  calculator JS untouched)
  Skipped guide (matching exists): compound-interest (how-to-calculate-compound-
  interest), heloc-payment (heloc-vs-cash-out-refi, heloc-vs-home-equity-loan),
  home-equity (how-to-build-home-equity), life-insurance-needs
  (how-much-life-insurance-do-i-need), loan (how-to-calculate-loan-payoff).
  Queue state: high-value queue (/tmp/guide-priority.json) guides complete
  except low-monetization tail (engagement-rate, average, percentage-change,
  placeholder-image); thin pages still under 900 for a future depth pass:
  home-equity-calculator (810), va-loan-calculator (842).
- 2026-09-01 batch guides: engagement-rate → guides/what-is-a-good-engagement-rate/;
  average → guides/mean-vs-median-vs-mode/;
  percentage-change → guides/how-to-calculate-percentage-increase/
  (each: 1,367–1,400 words, computed data tables — benchmark tiers + interactions-needed;
  outlier + decision tables; base-sensitivity + break-even + chaining — FAQ +
  Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling links; all-tools guides section
  updated 472→475 and gen-all-tools.py [:200] grid cap removed so every guide lists
  (cap contradicted the FULL-mirror docstring and hid h+-sorted guides); guide
  backlinks added to all three tool pages' related sections)
- 2026-09-01 depth passes: home-equity-calculator (787 → 1,310 words, +$10k-lever
  table (verified: +$8k value vs +$10k principal at 80% LTV) +price-drop/CLTV table
  (−44% = underwater threshold), +2 FAQs (4→6) with new FAQPage JSON-LD, +how-to-
  build-home-equity +heloc-vs-cash-out-refi guide links; calculator JS untouched,
  byte-identical to HEAD);
  va-loan-calculator (815 → 1,252 words, +VA-vs-FHA-vs-conventional payment table
  (verified $400k @ 6.25%/30y: VA $2,516 / FHA ~$2,595 / conv ~$2,500-2,625),
  +2 FAQs (4→6) with new FAQPage JSON-LD, +va-loan-funding-fee guide link; stale
  "2025 funding fee" copy corrected to current — rates unchanged since 2023-04-07;
  calculator JS untouched, byte-identical to HEAD)
  Queue state: high-value queue guides complete except placeholder-image (last
  low-monetization tail item); no other known queue pages under 900 words.
- 2026-09-02 batch guides: car-insurance-estimator → guides/how-much-does-car-insurance-cost/;
  auto-loan → guides/how-is-car-loan-interest-calculated/;
  annuity → guides/how-do-annuities-work/ (queue auto-extended per the plan's
  monetization rule — annuity the highest-CPC finance slug without a guide)
  (each: ~1,240-1,570 visible words, verified data tables — 2026 full-coverage
  surveys $177-244/mo bracketing the $2,545 basis, Experian Q1 2026 APR-by-tier
  4.55%-21.77%, mid-2025 SPIA quotes — FAQ + Article/Breadcrumb/FAQPage JSON-LD,
  tool + 2 sibling links; guides hub updated 486→489 incl. Money badge 117→120,
  all-tools regenerated by the parallel lane already listed all three; guide
  backlinks added to all three tool pages' related sections)
- 2026-09-02 depth passes: refinance-break-even-calculator (742 → 1,345 words,
  +rate-cut-vs-break-even table (node-verified, same 25-yr term: 7.5%→6.25% =
  $238/mo, 26-month break-even; distinct from the tool's 30-yr default example),
  +pay-points +when-not-to-refinance sections, +3 FAQs (5→8) with FAQPage
  JSON-LD; guide link in related; calculator JS untouched, byte-identical to HEAD);
  life-insurance-needs-calculator (841 → 1,205 words, +three-families DIME table
  (computed: single renter needs $377k vs the 10× rule's $550k; two-kid family
  $1,115k vs $800k) +term-length/laddering section, +2 FAQs (5→7) with FAQPage
  JSON-LD; guide link in related; calculator JS untouched, byte-identical to HEAD)
- 2026-09-02 CONCURRENT-WAVE NOTE: a parallel car-insurance lane (state longtail
  pages) rewrote the how-much-does-car-insurance-cost guide mid-batch (adopted
  wholesale — better PAA FAQ set, record-impact table, siblings rate-increase/
  gap calculators) and added a half-point rate table + their own FAQPage JSON-LD
  to refinance-break-even-calculator; reconciled to a single 8-Q FAQPage matching
  visible FAQs (merged no-closing-cost phrasings, kept their sell-soon Q).
  placeholder-image guide covered by that lane's what-size-should-a-placeholder-
  image-be, so the high-value queue's guide backlog is now fully drained.
  Fresh word-count audit: remaining thin queue pages for a future depth pass:
  percentage-calculator (786), credit-card-payoff (793), fha-loan-calculator (804),
  closing-cost-calculator (819), retirement-calculator (853), auto-loan-calculator
  (865, guide linked this batch).
- 2026-09-02 batch guides: bac → guides/how-long-does-alcohol-stay-in-your-system/;
  social-security-disability-benefits → guides/how-much-does-ssdi-pay/;
  placeholder-image → guides/what-size-should-a-placeholder-image-be/
  (each: 1,225–1,361 words, verified data tables — time-to-zero + drinks-to-0.08
  by weight + detection windows; SSA-2026 quick figures + PIA-by-AIME bends
  $1,286/$7,749 cross-checked vs ssa.gov fact sheet + oact/cola; slot sizes +
  ratio math — FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling links;
  all-tools guides section 486 via gen-all-tools.py; guide backlinks added to
  all three tool pages' related sections)
  Queue note: placeholder-image was the LAST /tmp/guide-priority.json item;
  queue auto-extended by monetization score → bac (legal/health, DUI-adjacent)
  and ssdi-benefits (finance/legal; distinct intent from the denial calc's
  what-happens-after-an-ssdi-denial guide). Priority queue now 48/48 complete.
- 2026-09-02 depth passes: credit-card-payoff (210 → 914 words, +payment-size
  payoff table +2026 APR reference table (LendingTree 23.8% new-offer avg,
  20.2–27.4% range, store cards 30.6%) replacing the false "Average APR: 24.99%
  (2026)" claim (was the tool's default input, not the market), minimum-payment
  model rebuilt (interest + 1% principal + $35 floor = 203 mo/$8,824 on $5k),
  +4 FAQs with new FAQPage JSON-LD + BreadcrumbList, snowball-method guide link,
  off-topic siblings Pascals-Triangle/Tip-Splitter → credit-card-payoff-calculator/
  debt-settlement-vs-bankruptcy; calculator JS untouched, byte-identical to HEAD);
  pmi-calculator (820 → 1,233 words, +HPA exit-milestones table (80%/78%/appraisal/
  month-180 final) + extra-payment sensitivity table (verified: $0 extra → month 95,
  $17,985 PMI; $300 extra → month 56, $10,725), +2 FAQs (5→7) with new FAQPage
  JSON-LD, how-to-get-rid-of-pmi guide link; calculator JS untouched, byte-identical
  to HEAD)
- 2026-09-02 out-of-band fixes: bac-calculator "0.08% in all 50 states" corrected
  (Utah 0.05% since 2018) in prose + effects table; ssdi-benefits tool page static
  tables 2025→2026 (bend row $1,226–$7,391 → $1,286–$7,749 w/ $2,068.16 slice max,
  cap $4,018 → $4,152, avg ~$1,580 → $1,630, TWP $1,160 → $1,210). FLAG for next
  tool pass: that page's calculator JS still runs 2025 constants (BP1=1226,
  BP2=7391, MAX_BENEFIT=4018, AVG=1580, SGA=1620) so its hero value computes the
  2025 formula while every static label says 2026; left untouched per no-JS rule.
  placeholder-image JS-array-in-HTML paragraph repaired to prose (same defect
  class as the ROI/password pages).
  Skipped depth pass: refinance-break-even-calculator (856 words — next queue
  depth candidate, third-thinnest).
  Queue state: guides done for all 48 priority tools + wave-2; remaining depth
  candidates: refinance-break-even (856); next guides must come from fresh
  keyword intake (awareness-stage + AIO-check columns per factory protocol).
- 2026-09-02 batch B (second drip slot; queue auto-extended by monetization score,
  awareness + AIO columns per factory protocol):
  car-insurance-estimator → guides/how-much-does-car-insurance-cost/
  (most-aware/pricing; AIO yes — per-state pricing tables), incorporation-cost →
  guides/how-much-does-it-cost-to-start-an-llc/ (most-aware/pricing; AIO yes —
  fee + 5-yr-total tables), overtime → guides/how-is-overtime-pay-calculated/
  (solution-aware; AIO yes — formula + worked paychecks)
  (each: 1,312–1,381 words, computed/verified data tables — insurance from the
  estimator's 2025-verified bases w/ 2026 band cross-checked (Experian $2,266,
  U.S. News $2,554, MarketWatch min $61/mo ≈ tool's 29% rule $738); LLC fees from
  the calculator's verified 2025 schedule (CA $70+$800, TX $300, NY pub ~$1,000,
  MT $35, MA $500, avg ~$132); OT math hand-verified, CA $16.90 min wage +
  $70,304 exempt threshold 2026 via DIR, FLSA $684/wk per 8-31 DOL verify —
  FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling links;
  guide backlinks: estimator (added by concurrent lane), incorporation + overtime
  (this session); all-tools guides section regenerated 490 via gen-all-tools.py)
- 2026-09-02 batch B depth passes: refinance-break-even-calculator (856 → 1,533
  words) MERGED with a concurrent session's simultaneous pass on the same file:
  both rate tables kept (half-point ladder + same-term break-even grid), duplicate
  FAQPage LD deduped to one 8-Q block matching the 8 HTML faq-items, concurrent
  lane's 7.00% row fixed 63 → 62 months (ceil($6,000/$97)); calculator JS
  byte-identical to HEAD (insertions-only diff).
  finance-calculator (311 → 1,156 words, +extra-payment scenario table verified
  on $250k @ 6.5%/30y (+$200/mo → $97,618 saved, 7.9 yrs; +$500 → $163,516,
  13.8 yrs; biweekly ≈ $72,714, 5.8 yrs; $5k month-one lump → $27,938), +4 FAQs
  with new FAQPage JSON-LD; FALSE claim fixed: old copy said "$200/mo extra saves
  over $70,000 and pays off 6 years early" — real numbers $97,618/7.9 yrs; stale
  "UtilityTools" footer brand → ToolAspect; calculator JS byte-identical to HEAD)
- 2026-09-02 batch B out-of-band: 4 never-committed EMPTY guide dirs found
  (llc-vs-scorp, lift-kit-cost, marriage-green-card-cost, marriage-name-change-cost)
  — the 8-31 "llc-vs-scorp guide exists" skip was wrong, that guide is OWED;
  removed the dead /guides/llc-vs-scorp/ link from the new LLC guide (only ref
  on the site). guides hub: claims re-pegged to true on-disk count (490; was 486
  after concurrent lane's new how-is-car-loan-interest-calculated guide), badge
  corrected to actual listed cards (437). FLAG for next pass: 53 older guides
  have no card in guides/index.html (hub lists 437 of 490).
  Queue state: next auto-extend guide candidates by monetization: salary-by-state,
  rent-calculator (30% rule), ai-receptionist-cost, plus OWED llc-vs-scorp guide;
  remaining thin depth candidates per the concurrent lane's fresh audit (above):
  percentage-calculator (786), fha-loan-calculator (804), closing-cost-calculator
  (819), retirement-calculator (853), auto-loan-calculator (865); next-thinnest
  low-monetization tools roman-numeral-converter (112), token-counter (183),
  llm-pricing-tracker (232) — depth only if queue idle.
- 2026-09-02 RECONCILIATION PASS (4th spawned lane — see storm note): the bridge
  spawned the 09-02 drip slot FOUR times (08:33/08:49/08:52/08:53); lanes 1-3
  produced batches A/B/C above + the de-doorway sweep (32d56a0b) + overnight
  va-disability work (b150d251). All landed: local == origin/main, all new URLs
  200. Lane 4 (this one) verified instead of building an overlapping 4th batch:
  batch A guides 1,361/1,297/1,225 words w/ full JSON-LD + tool/sibling links,
  depth JS-containment confirmed (only FAQPage/Breadcrumb LD inserted); batches
  B/C guides all parse, 3-4 tool links, question-led H2s. Fixes this pass:
  overtime title 65→58ch, LLC title 65→51ch, annuities title 62→57ch (+og
  mirrors + headline/breadcrumb), car-loan meta 163→148ch (+og/WebApp mirrors;
  6.39%/11.43% verified vs Experian Q1 2026 — initial search snippet claiming
  6.88% was wrong, Experian ask-experian pages confirm the guide's figures),
  "highest-leverage"→"highest-impact" in car-insurance guide (protocol word
  list). DE-DOORWAY SWEEP DEFECT FIXED: all 50 salary-by-state tax FAQs answered
  "How do taxes change take-home pay?" with minimum-wage text — replaced with
  per-state real answers generated from scripts/state-data/salary-tax-2025.json
  (graduated lo-hi / flat rate / no-tax wording; 50/50 replaced, 0 non-sequiturs
  remain). Other 5 state hubs spot-checked: Q/A coherent, no same-class defect.
  ENGINE FLAG (needs dedicated tool pass, JS untouched today): every
  salary-by-state page hardcodes stateTax=taxable*.04 — Texas shows a 4% state
  tax, California ignores its 1-12.3% brackets; correct per-state data already
  sits in scripts/state-data/salary-tax-2025.json (regime/std_ded/brackets,
  Tax Foundation 2025). va-lane's doc leftovers (tool-backlog row removal,
  tool-factory-done entry, roadmap) committed with this pass.
- 2026-09-03 batch guides: llc-vs-scorp → guides/llc-vs-scorp/ (the OWED
  guide; links /incorporation-cost-calculator/ as cluster tool because
  llc-vs-scorp-calculator is backlog-only (row 85) — the two dead
  /llc-vs-scorp-calculator/ links in the LLC cost guide repointed here);
  salary-by-state → guides/take-home-pay-by-state/; rent-calculator →
  guides/how-much-should-i-spend-on-rent/
  (each: ~1,300-1,400 visible words, computed/verified data tables — S-corp
  SE-vs-FICA ladder on the 2026 $184,500 wage base, $75k/$150k take-home from
  scripts/state-data/salary-tax-2025.json + 2025 fed brackets (CA/IL/fed
  hand-verified), 30%-rule income table + NLIHC 2026 anchors ($34.73/hr
  housing wage, $24.84 renter wage, $1,806 2BR FMR — internally consistent:
  34.73×2080/12×0.30=$1,806) — FAQ + Article/Breadcrumb/FAQPage JSON-LD,
  tool + 2 sibling links; guide backlinks added to incorporation,
  salary-calculator, rent-calculator related sections)
- 2026-09-03 depth passes: percentage-calculator (999 → 1,402 words,
  JS-array-in-HTML paragraph repaired to prose (3 paragraphs, quotes fixed),
  +percentage-points-vs-relative table +reverse-percentage section, +2 FAQs,
  new FAQPage (7 Q) + BreadcrumbList LD, 2 guide links in related.
  ENGINE REPAIR (documented exception to no-JS rule): calc3 was missing a
  semicolon (''document → SyntaxError) so ALL FOUR calculators were dead on
  live since the 8-31 defbox wave; single-char fix, node-verified
  (300→240 = -20.0%, 15% of 200 = 30, $80-20% = save $16/pay $64);
  fha-loan-calculator (948 → 1,300 words, 2025→2026 limits table
  $541,287/$1,249,125 per HUD 25-145, MIP table relabeled (rates unchanged
  since ML 2023-05 — verified), +MIP-lifetime comparison table (3.5% down =
  ~$55,700 over 30 yrs vs 10% down ~$17,300/11 yrs), +2 FAQs, new FAQPage
  (7 Q) LD, 2 guide links, stale 2025 meta → current; engine byte-identical
  to HEAD)
- 2026-09-03 out-of-band: rent-calculator off-topic related links
  (Pascals-Triangle/Tip-Splitter — same class as the 9-02 credit-card-payoff
  fix) → mortgage/budget/renters-insurance; guides hub +3 Money cards
  (badge 120→123), count claims re-pegged 497 (= dirs with index.html,
  matches gen-all-tools.py); all-tools regenerated (674 tools, 497 guides).
  Verified reference data this batch: 2026 SS wage base $184,500 (SSA
  oact/cola/cbb), QBI permanent + 23% from 2026 below threshold
  (OBBBA via Tax Foundation), HUD 25-145 2026 limits, NLIHC Out of Reach
  2026, FHA MIP 0.55% current since ML 2023-05.
  Queue state: named candidates exhausted except ai-receptionist-cost (next
  guide); remaining thin depth candidates: closing-cost-calculator (~870),
  retirement-calculator/auto-loan-calculator borderline ~940-960; then fresh
  keyword intake (awareness + AIO columns per factory protocol).
  FLAGS for next pass: (1) PRODUCTION OUTAGE — every HTML path on
  toolaspect.com returned bare 500 from the ~08:56 deploy ce84d8d5 (assets +
  robots.txt served 200 from edge cache; that deployment's pages.dev URLs
  also 500; prior deployment 8dc49c43 = e0ce3ce fully 200; no CF platform
  incident; today's deploy tests whether a fresh manifest upload restores
  service — if not, dashboard instant-rollback to 8dc49c43 is the fix, then
  bisect 5e16fcc5); (2) /salary-by-state/ hub root has NO index.html but is
  in sitemap.xml (deploy.sh priority list) → 404 class, needs a hub page;
  (3) three empty guide dirs remain on disk: lift-kit-cost,
  marriage-green-card-cost, marriage-name-change-cost (owed guides or
  delete); (4) llc-vs-scorp-calculator still backlog row 85 — when built,
  link it and the new guide bidirectionally.
- 2026-09-04 batch guides: ai-receptionist-cost → guides/ai-receptionist-cost/
  (the named next guide; tool live since 9-3); marriage-green-card-cost →
  guides/marriage-green-card-cost/ and lift-kit-cost → guides/lift-kit-cost/
  (both were EMPTY owed guide dirs; their own calculators are backlog rows
  86/84 — per the llc-vs-scorp precedent each links the nearest live cluster
  tool: marriage-license-cost-calculator / wheel-alignment-cost-calculator
  as CTA + prenup/marriage-tax-penalty and tire-size/car-maintenance siblings)
  (each: 1,136–1,399 words, verified data tables — vendor pricing bands
  (Goodcall $59-79 flat, Smith.ai ~$95/mo per-call entry, Retell $0.07/min,
  human services $245-292 entry) + computed volume comparison; USCIS 2026
  fee stack (I-130 $675/$625, I-485 $1,440, I-765 $260, I-131 $630 =
  $3,005 AOS full package vs $1,235 consular incl DS-260 $325 + $235
  immigrant fee; H.R. 1 un-bundled EAD/AP effective 2026-02-05, +$890 vs
  the old bundled I-485) + I-864P $27,050 HH-of-2 floor (eff. 3-1-2026);
  leveling/body/mild/tall lift bands $250-900/$400-1,000/$1,000-3,500/
  $3,000-7,000+ by truck class — FAQ + Article/Breadcrumb/FAQPage JSON-LD,
  tool + 2 sibling links; guide backlinks added to ai-receptionist,
  marriage-license, wheel-alignment tool pages)
- 2026-09-04 depth passes: closing-cost-calculator (920 → 1,577 words,
  +shoppable-vs-fixed Loan-Estimate-sections table +seller-concession caps
  table (conv 3/6/9 by down payment, FHA 6, VA 4, USDA 6) +seller-side
  section (post-Aug-2024 NAR-settlement commission reality), +2 FAQs (5→7)
  with new FAQPage JSON-LD, closing-costs-explained guide link in related;
  calculator JS byte-identical to HEAD);
  auto-loan-calculator (952 → 1,372 words, +Experian Q1 2026 APR-by-tier
  table w/ computed $30k/60mo payments ($559.97 super prime vs $729.70 deep
  subprime = $10,184 interest spread) +node-verified rebate-vs-0.9% table
  ($2,000 rebate loses by $1,060; break-even ≈ $2,480), +2 FAQs (5→7) with
  new FAQPage + BreadcrumbList LD, FAQ markup converted to .faq-item divs,
  funnel-cta/ads scripts moved out of the .related div; calculator JS
  byte-identical to HEAD)
- 2026-09-04 hub updates: guides hub +3 cards (More Guides 440→441 incl
  lift-kit, Money 123→124 incl green-card, Work & Productivity 50→51 incl
  ai-receptionist), total claims re-pegged 497→500 (= on-disk index.html
  count incl today's 3); all-tools hub regenerates via gen-all-tools.py on
  deploy. Prior-batch backlink gap noticed: divorce/bathroom-remodel/deck
  tool pages have matching guides but no guide link (left for interlink
  sweep). Queue note: marriage-name-change-cost guide STILL OWED (dir
  empty, calculator backlog row 87) — last of the 9-02 empty-dir trio.
  Fresh full-sweep word audit: 62 pages under 900 visible words, dominated
  by concurrent-lane state stubs (roof/window/fence/hvac/car-insurance
  -cost-by-state at 69-81 words — sitemap'd, belong to the state-page lanes)
  and low-monetization utilities (roman-numeral 112, token-counter 183,
  llm-pricing 232; queue rule: depth only if queue idle); alimony-california
  (700) / alimony-texas (720) / all-on-4 state pages (552-613) are the
  thinnest monetizable next candidates for a future depth pass.
- 2026-09-05 batch guides (queue auto-extended by monetization + awareness/
  AIO intake after full re-audit; NOTE: initial slug-keyword grep was
  unreliable — "ship-a-car"/"charge-an-ev"/"truck-tow" guide dirs escaped
  'shipping'/'ev-charg'/'towing' patterns; verified via site-wide dangling
  /guides/ link scan (zero found) + content-level title grep before picking):
  veterinary-imaging → guides/how-much-does-a-dog-x-ray-cost/
  (health/pet cost, most-aware; AIO yes — pricing tables; x-ray is the
  highest-volume imaging query and dog-mri-cost covers only MRI),
  youtube-earnings → guides/how-much-does-youtube-pay-per-view/
  (pricing head query; distinct from youtube-rpm-by-country, cross-linked),
  tiktok-money → guides/how-much-does-tiktok-pay/ (pricing head query,
  Creator Rewards $0.40-$1.00/1K qualified creator-reported, 1+ min videos)
  (each: 1,050-1,240 words, verified data tables — clinic-type x-ray bands
  and modality ladder from the tool's published bands; niche RPM with
  per-view and 1M-views columns; regional rate table + income-stream table —
  FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling links;
  guide backlinks added to all three tool pages' related sections)
- 2026-09-05 depth passes: alimony-calculator-california (700 → 1,390 words,
  +duration-by-marriage-length table +4320-factors section +what-ends-or-
  changes-support section, +2 FAQs (3→5) with new FAQPage JSON-LD;
  calculator JS byte-identical to HEAD);
  alimony-calculator-texas (720 → 1,351 words, +eligibility-route ×
  duration × cap table, +maintenance-vs-contractual-alimony +what-ends-or-
  changes sections, +2 FAQs (3→5) with new FAQPage JSON-LD; calculator JS
  byte-identical to HEAD). Both pages: how-alimony-is-calculated guide link
  added to related. Verified before/after: marriage-name-change-cost guide
  was already completed by the 9-04 factory wave (1,206 words, committed
  6a331651) — 9-04's "STILL OWED" note is stale; calculator backlog row 87
  also built (1,472 words).
- 2026-09-05 hub updates: guides hub +3 cards (More Guides 442→445), count
  claims re-pegged 500→504 (= on-disk dirs with index.html; the old 503
  `ls guides/` count included AGENTS.md + hub itself). all-tools hub
  regenerates via gen-all-tools.py in deploy.sh.
  Queue state: monetization queue fully drained — content-level title scan
  found no uncovered finance/insurance/legal/health tool without a guide
  (creator-cluster leftovers youtube-pay + tiktok-pay were the last head
  queries; twitch-revenue/spotify-royalty/fansly/onlyfans remain uncovered
  but low-monetization, depth only if queue idle). Remaining thin depth
  candidates: all-on-4 state pages (552-613), retirement-calculator (982,
  above 900 now — recheck), low-monetization tail. Next guides must come
  from fresh keyword intake (awareness + AIO columns per factory protocol).
- 2026-09-06 batch guides (queue auto-extended by monetization + awareness/AIO
  after the 9-05 drain; all three most-aware pricing head queries, AIO yes —
  rate tables; creator cluster has 10+ sibling pages so topic-bridge OK):
  twitch-revenue → guides/how-much-does-twitch-pay/;
  spotify-royalty → guides/how-much-does-spotify-pay-per-stream/;
  onlyfans-earnings → guides/how-much-do-onlyfans-creators-make/
  (each: 1,211–1,327 words, computed/verified data tables — sub-tier × split
  incl. Plus 60/70%, illustrative monthly bands by channel size; stream
  milestones × $0.003/$0.004/$0.005 + platform comparison table; income-stream
  × 80% + subscriber scenarios — FAQ + Article/Breadcrumb/FAQPage JSON-LD,
  tool + 2 sibling tools; guide backlinks added to all three tool pages).
  Verified reference data: Twitch US Tier 1 $5.99 since July 2024 (T2 $11.99,
  T3 $29.99), Plus Program 100/300 points → 60/70% ($100k cap removed Jan
  2024), payout $50 most methods ($100 wire), net-15; Spotify Loud & Clear
  2026: $11B+ paid for 2025, ~$70B lifetime, 1,000-stream rule since 2024;
  OnlyFans FY2024 $7.22B gross fan spend / ~$5.8B to creators (80/20), ~4M
  creators, subs $4.99-$49.99, ~7-day pending + $20 min + 3-5 business days.
- 2026-09-06 out-of-band fixes: twitch-revenue-calculator prose corrected
  to current pricing/splits — $4.99/$2.50 → $5.99/$3.00 (T2/T3 table rows
  added at $11.99/$29.99), "$100 minimum threshold" → $50 most methods
  ($100 wire) net-15, Plus Program split mention added; calc JS UNTOUCHED
  (byte-identical to HEAD, md5-verified) — FLAG for next tool pass: calc
  still multiplies T1/T2/T3 by 4.99/9.99/24.99 so its sub-revenue output
  runs ~17-20% below current prices; onlyfans related block off-topic
  youtube-watch-time link swapped for pricing/fansly calculators + guide.
- 2026-09-06 depth passes: all-on-4-dental-implants-cost-texas (556 → 1,161
  words) and -florida (600 → 1,175 words): +acrylic-vs-zirconia reference
  tables, +first-year/visit-schedule sections (snowbird angle on FL),
  +financing monthly-payment tables (python-computed: $15,000 @ 14.9%/60mo =
  $356.06/mo → $21,364 total; $15,300 = $363.18/mo → $21,791), +2 FAQs each
  (TX 3→5, FL 4→6) with new FAQPage JSON-LD; title/og/twitter/schema year
  2025→2026 (data stays the verified 2025-published national ranges, labeled
  as such); FL full-mouth national cell corrected $36,000-$70,000 →
  $30,000-$60,000 (now consistent with TX and the per-arch×2 derivation);
  neither page carries calculator JS (informational state pages).
- 2026-09-06 hub updates: guides hub +3 cards (More Guides 445→448), count
  claims re-pegged 504→507 (= on-disk dirs with index.html); all-tools hub
  regenerates via gen-all-tools.py in deploy.sh.
  Queue state: fansly-earnings is the last uncovered creator tool (guide
  owed or fold into onlyfans cross-links — next batch decision); depth
  candidate: all-on-4-california (617); no other named guide candidates —
  fresh keyword intake (awareness + AIO columns) needed for new guides.
- 2026-09-07 batch guides (fansly was the named queue item; the other two
  picked by fresh-intake rules — most-aware pricing head queries, AIO yes,
  href-coverage scan found 90 never-referenced tools and the home-materials
  calculators were the strongest monetizable gaps with a big construction
  cluster for the topic bridge):
  fansly-earnings → guides/how-much-does-fansly-pay/;
  blow-in-insulation → guides/how-much-does-blow-in-insulation-cost/;
  drywall → guides/how-much-does-drywall-installation-cost/
  (each: 1,234–1,386 words, computed/verified data tables — per-sub tier
  math + payout-method minimums + platform comparison at the 80/20 split;
  per-sqft source table + attic-size cost/bag table + DOE zone R-targets;
  per-sqft scope bands + project-size table + finish-levels 0-5 — FAQ +
  Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling tools; guide
  backlinks added to all three tool pages' related sections).
  Verified reference data: Fansly 20% take / 80% payout, 7-day pending,
  minimums Paxum-Cosmo-ACH $20 / SEPA $50 / wire-crypto $100, Tue-Fri
  processing cycle w/ 1-3 business day delivery (help.fansly.com payout
  articles); insulation HomeGuide 2026 $0.60-$2.30/sqft installed
  cellulose, Homewyse May-2026 $1.67-$2.92, Bob Vila attic $1.00-$1.50,
  DIY materials $0.30-$0.75; drywall $1.50-$3.50/sqft full install L4,
  labor-only $1.75-$3.75, hang-only $0.65-$1.90, HomeAdvisor 2,000-sqft
  house $8,000-$30,000, Thumbtack 1-2 rooms $900-$1,500, panels $12-$20
  avg $15.
- 2026-09-07 depth passes: all-on-4-dental-implants-cost-california
  (609 → 1,329 words) mirroring the 9-06 TX/FL pattern: +acrylic-vs-
  zirconia table at CA prices, +first-year section (Pacific + Loma Linda
  school angle), +financing table (python-computed: $18,300 @ 14.9%/60mo
  = $434/mo → $26,064; $25,000 = $593/mo → $35,606; $36,600 = $869/mo →
  $52,127), +2 FAQs (4→6) with new FAQPage JSON-LD, title/og/twitter/
  schema year 2025→2026 (data stays the verified 2025-published national
  ranges, labeled as such); no calculator JS on the page.
  llm-pricing-tracker (232 → 1,261 words; queue-idle rule satisfied —
  monetization queue drained, so the low-mon tail unlocked; picked over
  roman-numeral/token-counter for AIO reference-table potential):
  +monthly-cost table at the calculator's own representative models
  (1M in/500K out/day: GPT-4o $225 → cheapest tier $0.75), +discount-
  levers table (batch 50%, caching 50-90% w/ GPT-5 $0.125 anchor,
  context tiers), +output-cost mechanics +model-picker +invoice sections,
  +5 FAQs with new FAQPage JSON-LD + BreadcrumbList; stale twitter:title
  "ToolAspect — 28 Free Online Tools" → real title; OpenRouter fetch JS
  byte-identical to HEAD. Static numbers deliberately anchored to the
  page's own calculator constants + provider-stable discount structure
  (live table carries current rates).
- 2026-09-07 out-of-band fixes: fansly-earnings-calculator broken doctype
  repaired (stray closing paragraph pasted mid-<!DOCTYPE> — staged-blob
  collision class; paragraph restored to the payout-mechanics section),
  two "Veyzi" third-party brand plugs removed from multi-platform
  sections (foreign-copy drift class), off-topic youtube related links →
  onlyfans-earnings/loyalfans + fansly guide block at tail (twitch-page
  pattern); blow-in/drywall related lists gained guide links.
- 2026-09-07 hub updates: guides hub +3 cards (More Guides 448→451),
  count claims re-pegged 507→510 (= on-disk dirs with index.html);
  all-tools hub regenerates via gen-all-tools.py in deploy.sh.
  Queue state: no named guide candidates remain — loyalfans is the last
  uncovered creator-platform tool (brand/pricing query, low volume — next
  batch decision whether to guide it or leave it linked from fansly/OF
  cross-links); remaining thin depth candidates: roman-numeral-converter
  (107), token-counter (173), invoice-generator (581); construction-
  cluster never-referenced calculators (gutter, shed, topsoil, mulch,
  lumber, brick, paver, rebar, sod, sonotube, wall-framing, crown-molding,
  soffit-fascia, concrete-block, excavation, epoxy, aggregate-base) are
  the next guide-intake pool if the home-cost guides perform.
- 2026-09-08 batch guides (loyalfans was the named queue decision — guided;
  other two picked from the named construction-cluster intake pool,
  most-aware pricing head queries, AIO yes — cost tables):
  loyalfans → guides/how-much-does-loyalfans-pay/;
  gutter → guides/how-much-do-gutters-cost/;
  shed → guides/how-much-does-it-cost-to-build-a-shed/
  (each: 1,209–1,368 visible words, computed/verified data tables —
  revenue-stream × 80/20 + sub-size math + 5% referral ladder +
  OF/Fansly/Loyalfans payout comparison (loyalfans.com/payout: $50 min,
  1st & 16th, 5% lifetime referral); material × $/LF source table
  (vinyl $6-$11 HomeAdvisor, seamless aluminum $6-$15 / Homewyse 5-2026
  $6.29-$10.45, steel $12-$25, copper $15-$40, guards $1-$15) +
  gable/hip whole-house table computed at the calculator's own $9/LF math
  ($1,026/$1,593); route comparison (DIY $1,500-$3,000 vs prefab
  $4,000-$7,000 10×12, 2026 avg ~$3,500) + materials-budget table +
  slab bags-vs-ready-mix table (1.48 yd ≈ $222 vs 67 bags $400-$470) —
  FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling tools;
  guide backlinks added to all three tool pages' related sections).
- 2026-09-08 depth passes: invoice-generator (590 → 1,264 words,
  +invoice-numbering reference table +unpaid-invoice ladder +late-fee
  conventions (1.5%/mo) +cash-vs-accrual tax-timing section, +2 FAQs
  (4→6) with NEW FAQPage JSON-LD (page had none; BreadcrumbList already
  present); invoice JS byte-identical to HEAD);
  roman-numeral-converter (112 → 1,075 words, +subtractive-pairs +
  lookup-numbers + 2020-2030 years reference tables (node-verified
  against the tool's own algorithm), +greedy-algorithm walkthrough,
  +3999-limit/vinculum +IIII-on-clocks +no-zero sections, +5 FAQs with
  new FAQPage JSON-LD + BreadcrumbList; converter JS byte-identical to
  HEAD, sha-verified).
- 2026-09-08 out-of-band fixes: loyalfans tool page — one "Veyzi"
  third-party brand plug removed from the durable-version section
  (foreign-copy drift class, same as 9-07 fansly fix) and off-topic
  YouTube related links swapped for fansly/onlyfans/guide links;
  shed-calculator JS-array-in-HTML paragraph repaired to three prose
  paragraphs (Anchoring/Floors/Finishing section — same staged-blob
  collision class as ROI/password/percentage pages).
- 2026-09-08 hub updates: guides hub +3 cards (More Guides 451→454),
  count claims re-pegged 510→513 (= on-disk dirs with index.html);
  all-tools hub regenerates via gen-all-tools.py in deploy.sh.
  Queue state: creator cluster now fully covered (loyalfans was the
  last); remaining thin depth candidate: token-counter (183) — depth
  only if queue idle (low-monetization); construction-cluster intake
  pool for next guides (if the gutter/shed/home-cost guides perform):
  topsoil, mulch, lumber, brick, paver, rebar, sod, sonotube,
  wall-framing, crown-molding, soffit-fascia, concrete-block,
  excavation, epoxy, aggregate-base; fresh keyword intake (awareness +
  AIO columns) for anything beyond those per factory protocol.
- 2026-09-09 batch guides (first three of the named construction-cluster
  intake pool — topsoil, mulch, lumber — verified no matching guides via
  content-level grep, all most-aware pricing head queries, AIO yes —
  cost tables; construction cluster >10 sibling pages for topic bridge):
  topsoil → guides/how-much-does-topsoil-cost/;
  mulch → guides/how-much-does-mulch-cost/;
  lumber → guides/how-much-does-lumber-cost/
  (each: 1,150–1,267 visible words, computed/verified data tables —
  type × $/yd bands (topsoil.com $20-$50 screened delivered, blends
  $40-$80, bags $2-$5 → $72-$180/yd-eq) + project table w/ 10% cushion
  at $30/yd + $75 delivery; LawnStarter $30-$135/yd bulk, hardwood
  $30-$50, cedar $45-$80, cypress $44-$68, dyed +$5-$10, rubber
  $80-$160, stone $25-$60, pine straw $4-$7/bale, bags $3.25-$6.50 →
  $44-$88/yd-eq, installed $77-$94 + project table at the tool's own
  $40/yd + $4.50/bag defaults; lumber NAHB/Madison's $521.35/MBF 8-28,
  TE futures $566.54 9-8 (-2.2%/mo), Gordian installed $915.88 +12.7%
  YoY, studs Menards $4.25 / HD $4.65 / ~$6 contractor, PT $4.20-$5.00,
  hardwood oak $5-$6 / maple $6-$9/BF retail + order table computed at
  $0.80-$1.13/BF — FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool +
  2 sibling tools (topsoil→mulch+sod, mulch→topsoil+gravel,
  lumber→deck+fence); guide backlinks added to all three tool pages'
  related lists (4th slot, 9-08 pattern)).
- 2026-09-09 depth passes: token-counter (173 → 993 words; queue-idle
  rule — named last thin candidate; +words→tokens +context-window scale
  (8K/32K/128K/200K/1M → words + 275-word pages) +chars-per-token
  by content type reference tables, all evergreen — page's JS model
  constants are 2024-era (GPT-4o/Claude 3.5/Gemini 1.5) so static copy
  deliberately avoids restating per-model prices to avoid contradicting
  the live table — +5 FAQs with new FAQPage + BreadcrumbList JSON-LD,
  cron-generator related slot → how-to-write-ai-prompts guide, prose
  links llm-pricing-tracker; calculator JS byte-identical to HEAD);
  pregnancy-weight-gain-calculator-twins (611 → 1,177 words; thinnest
  health/monetizable page in fresh audit; +where-the-weight-goes
  composition table (singleton components, fetal side doubled per
  Johns Hopkins; twins ~5 lb each at birth per BabyCenter; sums to
  ~42-44 lb = mid-band) +running-over-or-under-the-band section,
  +2 FAQs (4→6) with new FAQPage JSON-LD, off-topic deductible-vs-copay
  related link → pregnancy-week-by-week; calculator JS byte-identical
  to HEAD).
- 2026-09-09 hub updates: guides hub +3 cards (More Guides 454→457),
  count claims re-pegged 513→516 (= on-disk dirs with index.html);
  all-tools regenerated via gen-all-tools.py (694 tools + 516 guides).
  Queue state: next construction-cluster guide candidates (brick, paver,
  rebar, sod, sonotube, wall-framing, crown-molding, soffit-fascia,
  concrete-block, excavation, epoxy, aggregate-base) if home-cost guides
  perform; remaining thin depth candidates from fresh audit (excluding
  test-hardware pages): hours-calculator (347), base64-encoder (336),
  color-picker (536), bar-chart-maker (595), uuid-generator (603),
  plus-size-pregnancy-weight-gain (766) — depth only if queue idle.

- 2026-09-10 batch guides (next three of the named construction-cluster intake
  pool — brick, paver, rebar — verified no matching guides via content-level
  grep; driveway-paving-cost is adjacent to paver but a different intent —
  driveway surfaces vs patio material takeoff — so paver guides separately
  and cross-links):
  brick → guides/how-much-does-a-brick-wall-cost/;
  paver → guides/how-much-does-a-paver-patio-cost/;
  rebar → guides/how-much-does-rebar-cost/
  (each: 1,322–1,383 visible words, computed/verified data tables — per-1,000
  → $/sqft conversion ($350→$2.40 … $900→$6.17 at the tool's 6.86/sqft) +
  wall-size count table (100 sqft = 755 bricks/19 bags/$378 → 500 sqft =
  3,772/93/$1,886, tool-mirror math incl. 37 bricks/bag); installed $/sqft
  by material + size totals + 320-sqft piece-count + base-tonnage tables
  (4×8 = 1,584 pcs; 8.3 t gravel @5 in; 72 lb poly sand); stick-price-by-size
  + slab takeoff table (10×10@18 #4 = 14 bars/8 sticks/103 lb/$87 → 30×30@24
  #5 = 50 sticks/1,033 lb/$878) — anchors: HomeGuide 2026 brick $350-$900/
  1,000 + $300-$800 labor + rebar $0.50-$1.00/lb & $1,300-$2,000/ton,
  Homewyse May-2026 veneer $38-$51/sqft + brick paver patios $20-$26,
  HomeGuide/Angi installed walls $10-$45/sqft, HD #3 $5.38 & #4 $14.33
  ($12.18 @50+) 20-ft sticks — FAQ + Article/Breadcrumb/FAQPage JSON-LD,
  tool + 2 sibling tools (brick→paver+concrete-block, paver→aggregate-base+
  concrete, rebar→concrete+sonotube); guide backlinks added to all three
  tool pages' related lists (4th slot)).
- 2026-09-10 depth passes: base64-encoder (344 → 1,201 words; queue-idle
  rule — thinnest pages in the 9-09 audit; +padding-rules +size-overhead
  (3B→4c/100B→136c/1MiB→1,398,104c) +where-it-shows reference tables,
  worked SGkh bit walkthrough, encoding-not-encryption section, +5 FAQs with
  new FAQPage JSON-LD; csv-vs-json guide link in related; encoder/decoder JS
  untouched); hours-calculator (359 → 1,102 words; +minutes→decimal table
  with pay impact at the tool's $20/hr default +overtime-bands table (FLSA
  weekly, CA daily 1.5×/2×, EU 48h) +7-minute-rounding chart, worked shift
  examples (8:42→18:17 w/ 45-min break = 8.83 h = $176.67; overnight
  22:15→06:45 = 8.50), +5 FAQs with new FAQPage JSON-LD, overtime/payroll
  guide links in related; calculator JS untouched).
- 2026-09-10 out-of-band fixes: paver-calculator + rebar-calculator
  JS-array-in-HTML paragraphs repaired to prose (same staged-blob collision
  class as ROI/password/percentage/shed pages); paver static size-table
  waste column corrected — base counts were shown under the "+10% waste"
  header (450→495, 1,800→1,980, 267→294, 225→248, 100→110 and 20×20
  equivalents) with matching example sentence + FAQ fix; calculator JS
  byte-clean on both (diff contains no script lines).
- 2026-09-10 hub updates: guides hub +3 cards (More Guides 457→460),
  count claims re-pegged 516→519 (= on-disk dirs with index.html);
  all-tools regenerated via gen-all-tools.py in deploy.sh.
  FLAG for next pass: (1) DEPLOY BLOCKED — wrangler pages deploy failed
  twice (kill switch engaged); CF API rejects the ~/.secrets legacy
  CLOUDFLARE_API_KEY/EMAIL pair with 9103 "Unknown X-Auth-Key" (key
  server-side rotated; worked 9-9 18:23), and both valid tokens on the box
  (D1, zone-analytics) 403 on Pages. 9-10 batch sits UNCOMMITTED in the
  working tree (12 modified + 3 new guide dirs); resume = rotate CF key →
  deploy.sh → indexnow-submit.py → curl-verify 3 new guides → commit.
  IndexNow deliberately NOT run (would submit 5 not-yet-live URLs).
  Queue state: construction-cluster intake pool continues (sod, sonotube,
  wall-framing, crown-molding, soffit-fascia, concrete-block, excavation,
  epoxy, aggregate-base) if home-cost guides perform; remaining thin depth
  candidates from the 9-09 audit: color-picker (536), bar-chart-maker (595),
  uuid-generator (603), plus-size-pregnancy-weight-gain (766) — depth only
  if queue idle.

- 2026-09-11 batch guides (next three of the named construction-cluster
  intake pool — sod, sonotube, wall-framing — verified no matching guides
  via content-level grep, all most-aware pricing head queries, AIO yes —
  cost tables):
  sod → guides/how-much-does-sod-cost/;
  sonotube → guides/how-much-does-a-sonotube-pier-cost/;
  wall-framing → guides/how-much-does-it-cost-to-frame-a-wall/
  (each: 1,224–1,370 visible words, computed/verified data tables — grass
  type × $/sqft + $/pallet (fescue $0.35-$0.70/$160-$315, Bermuda
  $0.35-$0.85/$180-$380, zoysia $0.60-$1.10/$330-$560 per HomeAdvisor/
  HomeGuide-family 2026; NC State farm-gate Bermuda $0.30-$0.62 avg $0.41,
  delivered ~$0.99; HD Harmony zoysia 500-sqft pallet ~$559) + lawn-size
  pallet/roll/cost table incl. acre row ($15,246-$37,026); tube-size ×
  volume/bags/$ table + per-pier DIY totals ($30/$37/$50 at $6/bag) +
  bag-vs-readymix crossover table (6/12/20 piers: 35 bags $210 vs $115
  ready-mix … 116 bags $696 vs $384; Sakrete 12-in × 48-in $13.88 HD,
  8-in $8.68-$13.98); wall-length stud/plate/sheet/lumber table
  ($116-$308 at the tool's own $4/$4/$30 defaults) + pro LF table
  (HomeGuide 2026 $25-$64/LF w/ drywall, framing only $18-$24, Angi
  interior $20-$30; Angi house $7-$16/sqft → $14k-$32k @ 2,000 sqft) —
  FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling tools
  (sod→topsoil+mulch, sonotube→concrete+rebar, wall-framing→drywall+
  concrete-block); guide backlinks added to all three tool pages'
  related lists (4th slot)).
- 2026-09-11 depth passes: color-picker (546 → 1,146 words, +six-format
  conversion table (node-verified against the page's own conversion
  functions) + WCAG contrast section (AA 4.5:1/3:1, AAA 7:1, 21:1 max) +
  shorthand/alpha/148-named-colors section, +2 FAQs (6→8) with new FAQPage
  JSON-LD; picker/conversion JS untouched); bar-chart-maker (605 → 1,163
  words, + rules-of-thumb table (7 rules) + zero-baseline argument +
  why-SVG section (email-clients exception), +2 FAQs (4→6) with new
  FAQPage JSON-LD; chart JS untouched). Both diffs insertion-only in
  head/seo sections — grep-verified zero calculator-JS lines.
- 2026-09-11 out-of-band fixes: sod-calculator JS-array-in-HTML paragraph
  repaired to three prose paragraphs (staged-blob collision class, same
  as ROI/password/shed/paver pages); off-topic insulation/electrical
  related links swapped on all three tool pages (topsoil+mulch /
  concrete+rebar / drywall+concrete-block); wall-framing "Framaming"
  typo fixed.
- 2026-09-11 hub updates: guides hub +3 cards (More Guides 460→463),
  count claims re-pegged 519→522 (= on-disk dirs with index.html);
  all-tools hub regenerates via gen-all-tools.py in deploy.sh.
  Queue state: construction-cluster intake pool continues (crown-molding,
  soffit-fascia, concrete-block, excavation, epoxy, aggregate-base) if
  home-cost guides perform; remaining thin depth candidates from the
  9-09 audit: uuid-generator (603), plus-size-pregnancy-weight-gain
  (766) — depth only if queue idle.

- 2026-09-12 batch guides (next three of the named construction-cluster intake
  pool — crown-molding, soffit-fascia, concrete-block — verified no matching
  guides via content-level grep, all most-aware pricing head queries, AIO yes —
  cost tables):
  crown-molding → guides/how-much-does-crown-molding-cost/;
  soffit-fascia → guides/how-much-do-soffit-and-fascia-cost/;
  concrete-block → guides/how-much-does-a-concrete-block-wall-cost/
  (each: 1,212–1,285 visible words, computed/verified data tables — material ×
  $/LF × installed (MDF $1-$3, pine $1.35-$4, poly $2-$10, hardwood $5-$15+;
  HomeGuide 2026 installed $7-$16/LF, avg $1,173; Angi $4-$23) + room-size
  table at the tool's own perimeter×1.15 waste / 12-ft-stick / $3.50 math;
  job-type × $/LF (fascia board $5-$12, aluminum wrap $11-$20 per Homewyse
  May-2026 $11.17-$19.87, vinyl soffit $4-$22, repair ~$10, removal $3-$7) +
  whole-house footprint table at $6-$22/LF + DIY 180-LF material walk ($1,485);
  scope × $/sqft ($3-$13 DIY materials, $10-$17 labor-only, $15-$30 turnkey,
  Homewyse basic $18.87-$24.17) + wall-size block/mortar/cost table at the
  tool's 1.125 blocks/sqft × 5% waste, $2.25/block, 33 blocks/bag math — FAQ +
  Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling tools (crown→drywall+
  wall-framing, soffit→gutter+siding, block→concrete+rebar); guide backlinks
  added to all three tool pages' related lists, replacing the off-topic
  insulation/electrical links — 9-11 sod/sonotube fix class).
- 2026-09-12 depth passes: uuid-generator (612 → 1,320 words; queue-idle rule
  satisfied — last named thin candidate pair; +UUID version reference table
  incl. RFC 9562 v6/v7/v8 (May-2024, obsoletes 4122) + birthday-bound collision
  table (node-verified: 1M → 1 in 1.1e25, 1B → 1 in 1.1e19, 1T → 1 in 1.1e13,
  2.71 quintillion → 50%, = 86 years at 1B/sec) + formats/storage section
  (BINARY(16) vs CHAR(36), case-collation trap), pseudo-FAQ h3s formalized
  into .faq-item block + 2 new FAQs (v4-vs-v7, DB storage), 7-Q FAQPage LD;
  stale twitter:title "ToolAspect — 28 Free Online Tools" fixed — llm-pricing
  9-07 class; generator JS untouched, zero diff lines);
  plus-size-pregnancy-weight-gain (775 → 1,325 words; +full IOM 2009 table —
  all four BMI classes singleton + twins (28-40/25-35/15-25/11-20 lb; twins
  37-54/31-50/25-42) with weekly rates + where-the-ranges-come-from prose +
  above/below-range associations section + postpartum-resolution numbers,
  +2 FAQs (BMI 35/40 same 11-20 range, faster-than-half-lb/wk trend guidance),
  6-Q FAQPage LD; off-topic deductible-vs-copay related link →
  pregnancy-week-by-week — twins-page 9-09 fix class; calculator JS untouched).
- 2026-09-12 out-of-band: GENERATOR-STRIPS-BREADCRUMB defect fixed — an
  uncommitted regen (roadmap lane, 9-11) had stripped the af3cbee1 bc1
  breadcrumb blocks from all-tools + roadmap because gen-all-tools.py /
  gen-roadmap.py templates predate the breadcrumb wave (same class as the
  embed-gen-analytics strip). deploy.sh now runs seo-breadcrumbs-wave.py
  (idempotent) after the three gen-*.py calls so every regen re-restores bc1
  on the regenerated hubs.
- 2026-09-12 hub updates: guides hub +3 cards (More Guides 463→466),
  count claims re-pegged 522→525 (= on-disk dirs with index.html);
  all-tools hub regenerates via gen-all-tools.py in deploy.sh.
  Queue state: construction-cluster intake pool continues (excavation, epoxy,
  aggregate-base) if home-cost guides perform; no other named thin depth
  candidates remain — fresh audit next batch; fresh keyword intake (awareness
  + AIO columns per factory protocol) for anything beyond the pool.

- 2026-09-13 batch guides (final three of the named construction-cluster
  intake pool — excavation, epoxy, aggregate-base — verified no matching
  guides via content-level grep, all most-aware pricing head queries, AIO
  yes — cost tables):
  excavation → guides/how-much-does-excavation-cost/;
  epoxy → guides/how-much-does-an-epoxy-garage-floor-cost/;
  aggregate-base → guides/how-much-does-road-base-cost/
  (each: 1,166–1,261 visible words, computed/verified data tables — unit
  pricing (soil $10-$20/yd³, rock $40-$250, $100-$300/hr w/ operator,
  Angi $1,658-$6,707 typical project, mini rental $300-$400/day, full-size
  ~$719/day avg DOZR) + project table at the tool's own swell/truck math
  (pool 30×12×5 = 66.7 bcy → 83.3 lcy → 6 loads/$900; basement 24×36×8 =
  22 loads/$3,300); DIY-kit $1-$3/sqft vs pro $4-$10 ($7.78-$12.71 Homewyse
  May-2026 high-spec, ArmorGarage $1.08-$2.66 DIY material) + garage-size
  gallons/kits table at the calculator's 160 ft²/gal + 10% waste defaults;
  product pickup/delivered bands (crusher run $20-$30 pickup, $25-$50
  delivered, Gravelshop installed $30-$60/ton = $3-$6/sqft, LawnStarter
  driveway avg $1,500) + tonnage + coverage-per-ton tables (58 ft²@4in,
  116@2in, 39@6in — tool-mirror math) — FAQ + Article/Breadcrumb/FAQPage
  JSON-LD, tool + 2 sibling tools (excavation→concrete+sonotube,
  epoxy→concrete+aggregate-base, aggregate→paver+concrete); guide backlinks
  added to all three tool pages' related lists, replacing the off-topic
  insulation/electrical links — 9-11/9-12 fix class).
- 2026-09-13 depth passes (fresh audit: thinnest monetizable pages, both
  old longtails with tables but no FAQPage LD): rap-calculator-50000-salary
  (605 → 920 words, +full RAP-scale reference table node-verified against
  the page's own engine incl. the $10 floor + exact-bracket $45k=4% quirk,
  +2 FAQs (5-Q FAQPage JSON-LD added — page had none)); 
  speeding-ticket-cost-california (747 → 1,165 words, +point-system/
  negligent-operator reference table (1-pt/2-pt violations, 4-in-12/6-in-24/
  8-in-36 thresholds, traffic-school masking) + rolling-window prose,
  +2 FAQs (6-Q FAQPage JSON-LD added)); both diffs insertion-only —
  calculator JS untouched (0 deleted lines, grep-verified).
- 2026-09-13 hub updates: guides hub +3 cards (More Guides 466→469),
  count claims re-pegged 525→528 (= on-disk dirs with index.html);
  all-tools hub regenerates via gen-all-tools.py in deploy.sh.
  Queue state: named construction-cluster intake pool now COMPLETE
  (gutter, shed, topsoil, mulch, lumber, brick, paver, rebar, sod, sonotube,
  wall-framing, crown-molding, soffit-fascia, concrete-block, excavation,
  epoxy, aggregate-base all have guides). Fresh-audit thin depth candidates
  for next batch (excluding state-lane stubs + test-hardware pages):
  rap-calculator-30000-salary (641), rap-calculator-80000-salary (684),
  speeding-ticket-cost-texas (775), speeding-ticket-cost-florida (793),
  anniversary-gifts pages (506-666), dev-tool tail (slug-generator 802,
  json-schema-validator 837, epoch-converter 825) — depth only if queue
  idle; new guides need fresh keyword intake (awareness + AIO columns per
  factory protocol).

- 2026-09-14 batch guides (named queue + construction pool both drained; fresh
  intake via the 9-05 href-coverage scan recipe — 78 tools never referenced by
  any guide, filtered by monetization/awareness/AIO, then content-level title
  grep to skip covered clusters: pregnancy-weight-gain, anniversary-gifts-by-
  year, and what-size-dog-crate guides all pre-exist, factoring = math):
  markup → guides/markup-vs-margin/ (finance pricing, solution-aware, AIO yes
  — conversion tables);
  recruiting-screening-roi → guides/how-much-does-a-bad-hire-cost/
  (most-aware cost query, DOL 30% + SHRM $4,700 anchors);
  creator-revenue-projections → guides/how-much-do-content-creators-make/
  (pricing head query, aggregate over the 10+ creator cluster, AIO yes —
  payout tables)
  (each: 1,247–1,334 visible words, computed/verified data tables — markup↔
  margin grid node-verified (50%→33.3%, 40% margin→66.7% markup, keystone,
  discount-erosion $75−20%→16.7% margin); screening-volume table computed at
  the calculator's own 100×20min×$35 model ($1,166.67/mo = $14k/yr, half
  wasted = $7k) + replacement-cost bands hedged "commonly cited" + DOL 30%
  of $65k = $19,500; platform payout-rules table + 100K-audience table
  ($299.50 Twitch 100 T1 subs, $800 OF 100@$10×80%) + $3,000/mo ladder
  (750K YT views @ $4 RPM, 6M TikTok, 750K Spotify, ~1,000 T1 subs, 375 OF
  subs) — FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling tools;
  guide backlinks added to all three tool pages' related lists).
- 2026-09-14 depth passes: rap-calculator-30000-salary (670 → 1,155 words,
  +band-edge table ($25k-$40,001 → % → monthly, node-verified: $30,000=$50.00,
  $30,001=$75.00, $40,001=$133.34) +what-counts-as-income section (AGI vs
  salary, pre-tax deductions, recertification timing), +2 FAQs (5-Q FAQPage
  LD updated), how-the-rap-plan-works guide link);
  rap-calculator-80000-salary (713 → 1,151 words, +upper-ladder table
  ($50k-$150k → % → monthly incl. 10% cap rows, node-verified: $100,001=
  $833.34, $150,000=$1,250.00) +forgiveness-tax section (ARPA exclusion
  expired 12-31-2025 per the site's tax-bomb calculator, linked) , +2 FAQs
  (5-Q FAQPage LD updated), tax-bomb + RAP-plan-guide links). Both diffs
  insertion-only except the FAQ-LD and related-list lines — calculator JS
  untouched, grep-verified.
- 2026-09-14 out-of-band fixes: markup-calculator — staged-blob duplicate
  FAQ section with GRADE-calculator content removed (page had two FAQ H2s;
  on-topic markup FAQs kept), generic 3-Q FAQPage LD upgraded to the 5 real
  visible Qs, off-topic Pascals-Triangle/Tip-Splitter related links → ROI/
  Finance/guide (9-02 credit-card-payoff class); recruiting-screening-roi —
  staged-blob FAQ section holding HOMEOWNERS-INSURANCE Q&A replaced with 4
  on-topic screening FAQs + matching 4-Q FAQPage LD, two "Emuu" third-party
  brand plugs neutralized (Veyzi/foreign-copy drift class, 9-07/9-08); 
  creator-revenue-projections — broken doctype repaired (stray paragraph
  pasted mid-<!DOCTYPE, fansly 9-07 class; paragraph moved to the page coda),
  "Veyzi" plug neutralized.
- 2026-09-14 hub updates: guides hub +3 cards (More Guides 469→472), count
  claims re-pegged 528→531 in all 9 places (= on-disk dirs with index.html);
  all-tools hub regenerates via gen-all-tools.py in deploy.sh.
  Queue state: fresh-intake pool from the href-coverage scan still holds
  follower-growth (creator cluster tail), recruiting-adjacent B2B, and the
  device-test/privacy cluster (keyboard/mic/webcam/hearing/color-blindness,
  ai-image-detector/deepfake-detector/face-recognition-search) — test pages
  belong to the hardware-test lane, so candidate guides need Stu sign-off or
  fresh keyword intake (awareness + AIO columns per factory protocol).
  Remaining thin depth candidates from the 9-13 audit: speeding-ticket-cost-
  texas (775), speeding-ticket-cost-florida (793), anniversary-gifts pages
  (506-666), dev-tool tail (slug-generator 802, epoch-converter 825,
  json-schema-validator 837) — depth only if queue idle.

- 2026-09-23 batch guides (fresh intake via the 9-05 href-coverage scan: 75
  tools never referenced by any guide; all-on-4 skipped — covered by
  how-much-do-dental-implants-cost; hvac/window/roof/fence by-state skipped —
  guides exist; device-test cluster still awaiting Stu sign-off):
  follower-growth → guides/what-is-a-good-follower-growth-rate/ (named queue
  item, creator-cluster tail; solution-aware, AIO yes — rate tables);
  llm-pricing-tracker + token-counter → guides/how-much-does-it-cost-to-run-an-ai-chatbot/
  (most-aware pricing query; covers both unreferenced AI-cluster tools);
  number-to-words → guides/how-to-write-a-check/ (finance bridge, high-volume
  how-to, AIO yes — amounts-in-words table)
  (each: 1,344–1,462 visible words, computed/verified tables — doubling-time
  grid + churn-ceiling table (600/mo inflow, 1% churn → 15,681 @12mo, 60k cap);
  per-model chat cost at list rates (Gemini 2.5 Flash $0.30/$2.50, Haiku 4.5
  $1/$5, GPT-5 $1.25/$10, Sonnet 5 $2/$10, GPT-4o $2.50/$10): 6-turn chat =
  10,800 in/1,500 out tokens = $0.0070–$0.0420, 20-turn = 5.6× the 6-turn cost,
  system-prompt caching −24–30%; check-parts + amounts-in-words tables, UCC
  §3-114 words-over-numbers, §4-401 postdating — FAQ + Article/Breadcrumb/
  FAQPage JSON-LD, tool + 2 sibling links; guide backlinks added to the related
  lists of follower-growth-calculator, llm-pricing-tracker, token-counter,
  number-to-words).
- 2026-09-23 depth passes: speeding-ticket-cost-texas (801 → 1,183 words,
  +defensive-driving eligibility section (CCP Art. 45.0511: 25+ over, CDL,
  12-month bars) + premium-vs-dismissal reference table ($1,500–$3,000 at 24%
  × 3 yr), +2 FAQs (4→6) with FAQPage LD update);
  speeding-ticket-cost-florida (815 → 1,160 words, +§322.27 suspension-
  threshold table + dangerous-excessive-speeding (50+ over/100+ mph) prose,
  +2 FAQs (4→6) with FAQPage LD update; FIXED two statute errors: "18 points
  in 24 months" → 18 in 18, and 15-over points 4 → 3 (statute: 3 pts ≤15 over,
  4 pts >15) in table, prose, visible FAQ, and LD). Calculator JS untouched on
  both (diff = content + FAQ-LD lines only). UNVERIFIED, left as-is: FL traffic-
  school cap reads "five lifetime" in prose/FAQ but "5 per 10 yr" in the table —
  check §318.14(9) next pass.
- 2026-09-23 hub updates: guides hub +3 cards (More Guides 472→475), count
  claims re-pegged 531→534 in all 9 places (= on-disk dirs with index.html);
  all-tools hub regenerates via gen-all-tools.py in deploy.sh.
  Queue state: href-coverage pool remaining = device-test/privacy cluster
  (sign-off needed), factoring/fraction (math, low monetization),
  content-calendar-planner/link-in-bio (creator tail). Thin depth candidates
  left: anniversary-gifts pages (506-666), slug-generator (826),
  epoch-converter (850), json-schema-validator (862).

- 2026-09-24 batch guides (href-coverage pool, next three after 9-23;
  content-calendar-planner SKIPPED — covered by guides/content-calendar;
  device-test cluster still awaiting Stu sign-off):
  factoring → guides/how-to-find-prime-factorization/ (solution-aware how-to,
  AIO yes — factorization + divisibility + GCF/LCM tables);
  fraction → guides/how-to-add-fractions-with-different-denominators/ (high-
  volume PAA how-to, AIO yes — LCD-vs-product + operations tables);
  link-in-bio → guides/what-to-put-in-your-link-in-bio/ (creator-cluster tail,
  best-X/solution-aware — platform link-limit table: IG 5 (Apr-2023), YT 14,
  Threads 5 (2025), TikTok 1,000 followers or business acct, web-verified)
  (each: 1,257–1,406 visible words, all math Python-verified (360 = 2³·3²·5,
  24 divisors; 48/180 GCF 12 LCM 720; 7/12+5/18 = 31/36; 3 5/16 + 1 7/8 =
  5 3/16) — FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling links;
  guide backlinks added to the related lists of factoring-calculator,
  fraction-calculator (off-topic finance/unit links → math siblings), link-in-bio).
- 2026-09-24 depth passes: 1st-anniversary-gifts (533 → 1,077 words, +origin
  section + years-1-5 table (matches anniversary-gifts-by-year) + lead-time/
  price table, +2 FAQs (3→5) with FAQPage LD update);
  5th-anniversary-gifts (574 → 1,110 words, +wood-species table (Janka:
  walnut 1,010, hard maple 1,450, cherry 950, white oak 1,350, red oak 1,220
  lbf) + personalization + sterling-vs-18/10 section, +2 FAQs (4→6) with
  FAQPage LD update); both link guides/anniversary-gifts-by-year. No JS on
  either page touched.
- 2026-09-24 hub updates: guides hub +3 cards (More Guides 475→478), count
  claims re-pegged 534→537 in all 9 places (= on-disk dirs with index.html);
  all-tools regenerated (537 guides).
  NOTE (unfixed, flagged): link-in-bio, custom-content-price, churn-rate,
  onlyfans-price, onlyfans-earnings, youtube-sponsorship still carry "Veyzi"
  plugs — 9-14 neutralized two; confirm with Stu whether Veyzi is ours before
  stripping the rest.
  Queue state: href-coverage pool remaining = content-calendar-planner (covered),
  device-test/privacy cluster (sign-off). Thin depth candidates left:
  25th-anniversary-gifts (658), 50th-anniversary-gifts (693), slug-generator
  (826), epoch-converter (850), json-schema-validator (862). New guides need
  fresh keyword intake next batch.

- 2026-09-25 batch guides (fresh intake via the 9-05 href-coverage scan: 67
  never-referenced dirs, mostly hubs/device-tests; car-insurance-cost-by-state
  SKIPPED — covered by how-much-does-car-insurance-cost + 3 siblings; device-
  test cluster still awaiting Stu sign-off; math/probability tail picked since
  factoring/fraction (9-24) give the cluster its topic bridge):
  roman-numeral-converter → guides/how-to-read-roman-numerals/ (high-volume
  how-to, AIO yes — symbols/pairs/1-100/years tables);
  pascals-triangle → guides/how-does-pascals-triangle-work/ (solution-aware,
  AIO yes — rows 0-10 + diagonals + row-10 odds tables);
  coin-flip + dice-roller + random-number-generator → guides/odds-of-flipping-
  heads-in-a-row/ (PAA query, covers three unreferenced tools — streak, run-in-
  N-flips, two-dice tables)
  (prose 1,122–1,329 words excl. tables, 1,250–1,542 incl.; all numbers Python-
  verified: roman() for every table row (1994 MCMXCIV, 2026 MMXXVI, 3999
  MMMCMXCIX); C(n,k) rows 0-10, 11⁵ = 161,051, C(10,5)/1024 = 24.61%; streak
  DP: ≥5 heads in 100 flips 81.0%, ≥6 54.6%, ≥6 either side 80.7%; 2023
  Bartoš et al. 350,757 flips / 50.8% same-side — FAQ + Article/Breadcrumb/
  FAQPage JSON-LD, tool + 2 sibling links; guide backlinks added to roman-
  numeral-converter, pascals-triangle, coin-flip, dice-roller, probability-
  calculator. Out-of-band: coin-flip / dice-roller / pascals-triangle related-
  links were off-topic finance/percentage/unit (9-02 class) → math siblings).
- 2026-09-25 depth passes: 25th-anniversary-gifts (658 → 1,218 words, +silver-
  purity table (.999/.958/.925/.900/plated/nickel-silver) + tarnish-care +
  20th-40th milestone table, +2 FAQs (4→6) with FAQPage LD update);
  50th-anniversary-gifts (693 → 1,258 words, +karat table (24k 99.9% … 10k
  41.7%) + plated/gold-filled/vermeil (FTC guides: GF ≥1/20 by weight, vermeil
  ≥10k ≥2.5µm over sterling) + 55th-75th table + family-gifts section, +2 FAQs;
  FAQPage LD 4→7 — also synced the pre-existing visible "50th or 60th diamond"
  Q that was missing from LD). Both link guides/anniversary-gifts-by-year. No
  JS on either page.
- 2026-09-25 hub updates: guides hub +3 cards (More Guides 478→481), count
  claims re-pegged 537→540 in all 9 places (= on-disk dirs with index.html);
  all-tools regenerated (540 guides).
  Queue state: href-coverage pool now = device-test/privacy cluster (sign-off),
  word-unscrambler/lorem-ipsum/stopwatch/word-search-maker (low monetization),
  dog-crate breed pages (covered by what-size-dog-crate — add backlinks next
  pass). Thin depth candidates left: slug-generator (826), epoch-converter
  (850), json-schema-validator (862), *-cost-by-state stubs (262-362, state
  lanes). New guides need fresh keyword intake next batch.

- 2026-09-26 batch guides (fresh href-coverage rescan: 62 never-referenced
  dirs, mostly hubs/device-tests/state stubs; picked tools with no guide whose
  clusters give a topic bridge: pet cluster 60+ pages, text-tools):
  pet-name-generator → guides/how-to-choose-a-dog-name/ (solution-aware how-to,
  AIO yes — rules checklist + command-clash table + AKC 2025 top-10 table,
  web-verified: F Luna/Bella/Daisy…, M Max/Hank/Teddy…; Pilley & Reid 2011
  Chaser 1,022 names; Saito et al. 2019 Sci Rep cat names);
  word-unscrambler → guides/how-to-unscramble-words/ (solution-aware how-to,
  AIO yes — n! arrangements (7 = 5,040), repeat-letter multinomials (LETTER
  180, MISSISSIPPI 34,650), ENABLE-list pattern counts; RGNIDAE → READING/
  GRAINED/GRADINE/DERAIGN, all Python-verified vs ENABLE 172,823 words);
  word-search-maker → guides/how-to-make-a-word-search/ (tool-intent how-to,
  AIO yes — grid-size table matching the tool page + cells/word, difficulty-
  levers table; 5-letter word in 10x10 = 120/192/384 placements at 2/4/8
  directions; Gibat, Selenby Digest, 1968-03-01)
  (1,322–1,353 visible words each, FAQ + Article/Breadcrumb/FAQPage JSON-LD,
  tool + 2 sibling links; guide backlinks added to all three tool pages'
  related lists. Out-of-band: pet-name-generator raw JS-array paragraph
  ("Names, Sounds, and Training") → 3 <p>s; off-topic related links on all
  three tool pages → on-topic siblings.)
- 2026-09-26 depth passes: slug-generator (826 → 1,566 words, +"Title to slug"
  table generated by running the page's own slugify() in node, +5 decision
  subsections (hyphens per Google URL-structure doc, stop words, 301s,
  WordPress post_name varchar(200), Unicode), +2 FAQs (5→7) w/ LD);
  epoch-converter (851 → 1,424 words, +s/ms/µs/ns table at 1767225600 =
  2026-01-01Z, +Y2038/leap-second/current-timestamp sections, +2 FAQs (5→7);
  FAQPage LD 4→7 incl. syncing a missing visible Q). JS untouched on both
  (only FAQ-LD + related-links lines changed).
- 2026-09-26 hub updates: guides hub +3 cards (More Guides 481→484), count
  claims re-pegged 540→543 in all 9 places (= on-disk dirs with index.html).
  BROKEN TOOLS FOUND (JS untouched per drip rule — need Stu go-ahead):
  (1) pet-name-generator: horse array has missing quotes ("Blaze,"Apache"…)
  → SyntaxError, generator dead; (2) word-search-maker: grid pre-filled with
  random letters before placement so ~0 words get placed (0.001/run avg), and
  page claims 8 directions but JS uses 2/4; (3) word-unscrambler: embedded
  dictionary W is 25,000 words aa→bisexed (A/B only) — READING etc. missing.
  Queue state: href-coverage pool left = lorem-ipsum, stopwatch, notepad,
  duplicate-image-finder (low monetization) + device-test cluster (sign-off).
  Thin depth candidates left: json-schema-validator (862), *-cost-by-state
  stubs (262-362), dog-crate breed pages (823-887).

- 2026-09-27 batch guides (href-coverage pool: lorem-ipsum, stopwatch,
  duplicate-image-finder; notepad left in pool, weakest intent):
  lorem-ipsum → guides/what-does-lorem-ipsum-mean/ (high-volume PAA, AIO yes —
  Latin fragment→Cicero table + placeholder-length table; Cicero De finibus
  1.10.32-33, Rackham 1914, McClintock/Before & After 1994 web-verified;
  "since the 1500s" framed as folklore, PageMaker-shipped-it hedged);
  stopwatch → guides/lap-vs-split-time/ (PAA, AIO yes — 4x400 m lap/split/mile-
  pace table (1:32/1:35/1:37/1:30 → 6:14), 400 m lap→pace table, minutes→
  decimal hours table; hand-timing round-up + 0.24 s stat convention, Chrome
  88 background-tab throttling web-verified);
  duplicate-image-finder → guides/how-to-find-duplicate-photos/ (solution-aware,
  AIO yes — MEASURED aHash distances on one test image (resize/JPEG70/bright/
  grayscale/watermark 0, crops 2-5, mirror 26, rot90 32, other photo 36) +
  Hamming-band table; iOS 16/Ventura Duplicates album via Apple support docs)
  (~1,395 visible words each, FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool
  + 2 sibling links; guide backlinks added to all three tools' related lists.)
- 2026-09-27 depth passes: json-schema-validator (862 → 1,652 words, +Ajv
  8.17.1 error-message table (messages captured by running Ajv in node) +
  "Common mistakes" section (allOf+additionalProperties → unevaluatedProperties,
  required-in-property, 1.0 is integer, format annotation-only); FIXED wrong
  dialect row (tuples: draft-07/2019-09 items[]+additionalItems, 2020-12
  prefixItems); FAQ visible 6→8, LD 4→8 (synced 2 missing));
  dog-crate-size-for-german-shepherd (823 → 1,595 words, +measuring section,
  crate-types table, crate-time-by-age table (Humane World for Animals crate
  training 101: months+1 h, ≤3-4 h under 6 mo, adults 4-5 h daytime), FAQ 4→6).
  JS byte-identical to HEAD on both; syntax-gate 0 broken.
- 2026-09-27 hub updates: guides hub +3 cards (More Guides 484→487), count
  claims re-pegged 543→546 in all 9 places (= on-disk dirs); all-tools regen.
  Queue state: href-coverage pool left = notepad (low) + device-test cluster
  (sign-off). Thin depth candidates left: dog-crate-size-for-french-bulldog
  (840), -golden-retriever (887), *-cost-by-state stubs (262-362). New guides
  need fresh keyword intake next batch.

- 2026-09-28 batch guides (fresh intake: href-coverage pool drained, so new
  recipe = tool pages whose slug tokens match no guide slug/title, then
  per-candidate check of which guides link the tool. Found the home cluster's
  three biggest "how much X do I need" tools had NO dedicated guide, only a
  bathroom-remodel mention):
  paint-calculator → guides/how-much-paint-do-i-need/ (solution-aware, AIO yes
  — gallons-by-room table (8 ft walls, 21 sq ft door / 15 sq ft window, matching
  the tool page), coverage-by-texture table (400/350/300/250 → 2.00/2.29/2.67/
  3.20 gal), ceiling table);
  tile-calculator → guides/how-many-tiles-do-i-need/ (solution-aware, AIO yes —
  tiles per 100 sq ft by size w/ 10%/15% waste, waste-by-layout table, grout
  coverage per 25 lb bag from the calculator's own formula, thinset bands;
  ANSI A108 80% dry / 95% wet coverage, LFT = any side ≥15 in);
  flooring-calculator → guides/how-much-flooring-do-i-need/ (solution-aware,
  AIO yes — waste-by-layout, 180 sq ft waste-sensitivity table (5-20% → 8/9/9/
  10 boxes), room-size box/cost/underlayment table)
  (1,241–1,367 words excl. tables, 1,431–1,609 visible; every table number run
  through the tool's own JS math in node — incl. rounding (1.825 → 1.82, $38.50
  → $39) — FAQ + Article/Breadcrumb/FAQPage JSON-LD, tool + 2 sibling links;
  guide backlinks added to all three tool pages' related paragraph, JS
  untouched.) TILE BUG FOUND (JS untouched per drip rule): the 4.25 × 4.25 in
  option has value="4.5", so it computes 20.25 sq in/tile vs real 18.06 and
  undercounts ~11% (guide table uses the true 18.06). Needs Stu go-ahead.
  Next intake candidates (same recipe, no dedicated guide yet): stair-
  calculator (rise/run), siding-calculator (squares), countertop-calculator.
- 2026-09-28 depth passes: dog-crate-size-for-french-bulldog (830 → 1,672 body
  words, +3-measurement section (width test), crate-types table (airflow for
  brachycephalic), heat-safety section, crate-time-by-age table (Humane World
  crate training 101), FAQ 4→6 w/ LD synced); dog-crate-size-for-golden-
  retriever (877 → 1,703, +measuring section, crate-types table, what-to-put-
  in-the-crate section, crate-time table, FAQ 4→6 w/ LD). No JS on either page.
- 2026-09-28 hub updates: guides hub +3 cards (More Guides 487→490), count
  claims re-pegged 546→549 in all 9 places (= on-disk dirs); all-tools regen
  (549 guides); syntax-gate 1,358 blocks, 0 broken.
  Queue state: next guides = stair / siding / countertop (above). Thin depth
  candidates left: *-cost-by-state stubs (262-362, state lanes), other dog-crate
  breed pages (check word counts next batch).

- 2026-09-29 batch guides (next intake from 9-28 list: stair / siding /
  countertop, all verified: no dedicated guide, only remodel-guide mentions):
  stair-calculator → guides/how-to-calculate-stairs/ (solution-aware how-to,
  AIO yes — risers/treads/run/stringer/angle table for 36-132 in rises run
  through the tool's own JS (Math.round risers, 7.25 target, 10.5 tread;
  108 in → 15 @ 7.20, 147 in run, 182.4 in stringer), IRC R311.7 code table
  (7¾ riser, 10 tread, ⅜ var, 36 width, 6'8" headroom, 151 in flight, nosing,
  handrail 4+ risers 34-38 in), IBC 7/11, DCA 6 5 in throat);
  siding-calculator → guides/how-much-siding-do-i-need/ (solution-aware, AIO yes
  — gable area by width/pitch table, squares for 5 house shapes (2-story
  30×50 = 2,805 sq ft → 28.05 sq → 32 @ 12%), waste-sensitivity table
  5/10/15/20% → 30/31/33/34 squares; VSI 16 in nail spacing, Hardie 6 in
  grade / 1-2 in roof clearance);
  countertop-calculator → guides/how-to-measure-countertops/ (solution-aware,
  AIO yes — 6-layout sq ft/backsplash/waste/slab/edge table via the tool's JS
  (18 ft L = 50.9 sq ft w/ waste → 2 slabs), L-corner double-count 4.5 sq ft,
  waste-by-material table, NKBA 24 in/seat + 15 in knee space at 36 in)
  (1,257-1,430 words excl. tables, FAQ 5 each + Article/Breadcrumb/FAQPage
  JSON-LD, tool + 2+ sibling links; guide backlinks added to all three tool
  pages' related paragraph, JS untouched.)
  BUGS FOUND (JS untouched per drip rule — need Stu go-ahead):
  (1) stair-calculator: JS rounds riser count to NEAREST (Math.round) while page
  copy + FAQ say "round up"; page also says it returns stair angle, JS doesn't.
  (2) siding-calculator: nails-per-square map {vinyl:2000,…} is ~20x too high
  (page copy itself says ~1 nail/sq ft = ~100/square), and wrap rolls =
  ceil(squares/3) (~300 sq ft/roll) contradicts the page's 1,000 sq ft/roll
  table. Guide avoids both outputs.
- 2026-09-29 depth passes (dog-crate breed pages exhausted — only 3 exist, all
  done; picked from fresh <900-word scan): schema-generator (384 → 1,318
  words, +"which types still get rich results" table (FAQ gone May 2026, HowTo
  Sep 2023, June 2025 seven-feature phase-out incl. Course Info, mobile
  breadcrumbs dropped Jan 2025 — web-verified), worked example, mistakes
  section; boilerplate 2 FAQs → 6 real FAQs w/ LD synced; "25+ types" → 24
  (actual count in SCHEMA_TYPES); removed unsourced "+30% CTR" claim);
  delete-pages-from-pdf (705 → 1,097 words, +"what carries over" table
  (bookmarks/metadata dropped since output is PDFDocument.create()+copyPages),
  +when-not-to-use links, FAQ 4→6 w/ LD synced; fixed copy: download suffix
  is -trimmed not -organized, bookmark row corrected). JS byte-identical on both.
- 2026-09-29 hub updates: guides hub +3 cards (More Guides 490→493), count
  claims re-pegged 549→552 in all 9 places (= on-disk dirs); all-tools regen.
  Queue state: next guide intake candidates = run slug-token recipe again
  (contractor cluster: roofing, drywall, concrete, gravel, mulch — check for
  existing guides first). Thin depth candidates (<900): test-grade-calculator
  (875), mtbf-calculator (887), rearrange-pdf-pages (697), xml-to-json (852),
  css-minifier (741), minify-js (762); device-test pages need sign-off.

## Schedule
- 06:00 tool-factory (10 tools) — bridge session A (**Anthropic/Opus provider only** — GLM via bridge FAILS with z.ai 400 [1213] on large content prompts, proven Sep 22)
- 06:15 content-drip (3 guides + 2 depth + longtails) — bridge session B, parallel OK, **same rule: provider "anthropic"** (or run in-session as Hermes subagent — never GLM bridge for content payloads)
- 06:30 gh-repo-scan
- 08:00 traffic report
All content: SEO titles/meta, JSON-LD, humanized, indexed (sitemap+IndexNow), interlinked.

- 2026-09-30 batch guides (queue: contractor cluster roofing/drywall/concrete/gravel/
  mulch; SKIPPED as covered: roofing (how-much-does-a-new-roof-cost has squares
  section), drywall (how-much-does-drywall-installation-cost has sheets section),
  mulch (how-much-does-mulch-cost has quantity section). Third slot filled per
  drip-rebalance-2026-09-29 privacy/security weighting):
  concrete-calculator → guides/how-much-concrete-do-i-need/ (solution-aware, AIO yes
  — per-100 sq ft by thickness table, 8-project yards/80 lb/60 lb bags table, tube
  table; all via the tool's JS (10% waste, 0.6 cu ft/80 lb bag, ceil) — 10×10×4 in
  = 1.36 yd³ / 62 bags; 20 ft 16×8 footing = 0.72 yd³ / 33 bags);
  gravel-calculator → guides/how-much-gravel-do-i-need/ (solution-aware, AIO yes —
  density table 1.4/1.5/1.35/1.7 t/yd³ from the tool's dropdown, sq ft per ton by
  depth, 9-project tons table (12×50 ft @ 4 in = 10.37 t pea/#57));
  ai-image-detector → guides/how-to-tell-if-an-image-is-ai-generated/ (problem-aware,
  AIO yes — signal reliability table + "what you find → what it means" table; C2PA
  (OpenAI help center), IPTC trainedAlgorithmicMedia (IPTC/Meta), SynthID Detector
  portal + OpenAI SynthID dual-layer web-verified; honest that our tool reads
  EXIF/XMP only, no C2PA/SynthID)
  (1,261–1,398 words excl. tables, FAQ 5 each + Article/Breadcrumb/FAQPage LD, tool +
  3 sibling links; guide backlinks on all three tool pages; concrete/gravel off-topic
  related links (insulation) swapped for gravel/rebar and concrete/mulch.)
  OUT-OF-BAND FIX: ai-image-detector FAQ (visible + faq1 LD) held 4 SVG-tracing
  Q&As (image-to-svg paste) → 4 real detector FAQs. JS untouched.
- 2026-09-30 depth passes (directive: PDF cluster + niche calc): rearrange-pdf-pages
  (697 → 1,291 words, +duplex-scan page-map table (fronts then reversed backs →
  1,N,2,N-1…, verified by hand for 4/6/8/10), +"what carries over" table, tool-choice
  links, FAQ 4→6 w/ LD rebuilt from visible; FIXED copy: download suffix is
  -reordered (JS) not -organized; bookmark FAQ "possibly" → "don't carry over"
  (output is PDFDocument.create()+copyPages)); test-grade-calculator (875 → 1,339,
  +points-needed-per-grade table for 10–100 pt tests via the JS's ceil(min/100*t),
  +one-test-vs-class-grade worked example, FAQ 5→7, LD 4→7 (synced missing
  "70 percent C or C-")). JS byte-identical on both.
- 2026-09-30 hub updates: guides hub +3 cards (More Guides 493→496), count claims
  552→555 in all 9 places (= on-disk dirs); all-tools patched by hand (555).
  NOTE: scripts/gen-all-tools.py output drops the bc1 breadcrumb LD/nav, og:image and
  result-actions.js that later scripts injected — don't commit its raw output.
  Queue state: contractor cluster quantity guides now covered except asphalt, brick,
  paver, topsoil (check). Per 9-29 directive, next intake should lean PDF/document
  (50%) — most PDF tools already have how-to guides, so consider "best free PDF
  tools 2026" listicle + privacy "X alternatives — compared" guides. Thin depth
  candidates left: mtbf-calculator (887), xml-to-json (852), css-minifier (741),
  minify-js (762).

- 2026-10-01 batch guides (queue from 9-30 notes: contractor leftovers asphalt/brick/
  paver/topsoil + PDF listicle + privacy per drip-rebalance-2026-09-29; SKIPPED as
  covered: brick (how-much-does-a-brick-wall-cost has bricks+mortar section), paver
  (how-much-does-a-paver-patio-cost has pavers+base section), topsoil (how-much-does-
  topsoil-cost has quantity section)):
  asphalt-calculator → guides/how-much-asphalt-do-i-need/ (solution-aware, AIO yes —
  coverage per ton at 2/3/4/6 in (82.8/55.2/41.4/27.6 sq ft), 11-row project table via
  the tool's JS (145 lb/ft³, ceil(t×1.05×10)/10, 20 t loads, $130/t): 12×50 @ 3 in =
  10.88 t exact / 11.5 order / $1,495; 60×100 @ 4 in = 152.3 t / 8 loads);
  image-metadata-remover → guides/how-to-remove-location-from-photos/ (problem-aware,
  privacy cluster — GPS decimal-places precision table, sharing-route survives/stripped
  table, method table; iPhone/Android/Windows/Mac/browser steps; honest that our tool
  always outputs JPEG @ 0.92, orientation baked into pixels);
  PDF cluster → guides/best-free-pdf-tools/ ("best free X 2026" listicle per directive —
  31-tool master table with a real detail per tool, privacy-check table, ItemList LD)
  (1,120–1,397 words prose excl. tables, FAQ 5 each + Article/Breadcrumb/FAQPage LD,
  tool + sibling links; guide backlinks on asphalt-calculator, image-metadata-remover,
  pdf-merge. JS untouched.)
  COPY BUGS FIXED (no JS): asphalt-calculator coverage-per-ton FAQ/LD/table was 3× low
  (said 27.6 sq ft/t at 2 in — that's the 6 in figure; real 82.8) + "0.018.1 tons" →
  0.054; image-metadata-remover FAQ (visible+LD held an age-calculator Q + boilerplate)
  → 4 real Q&As, false "PNG lossless/pixel-identical" and "keeps orientation flag"
  claims corrected; pdf-merge "local copy of pdf-lib" → loads from CDN wording.
  SITE BUG FIXED: 6 pages started with "<!D" + stray closing paragraph + "OCTYPE html>"
  (broken doctype → quirks mode): image-metadata-remover, churn-rate-calculator,
  custom-content-price-calculator, onlyfans-price-calculator, qr-code-with-logo,
  qr-code-batch — doctype restored, paragraphs moved above the FAQ section.
  NEED STU GO-AHEAD (JS): image-metadata-remover "Keep orientation flag" dropdown is a
  no-op; PNG input exported as JPEG (transparency lost). Also flagged: exif-viewer FAQ
  is boilerplate; pdf-metadata-editor meta promises "strip all" but only edits Info
  dict (not XMP); ads.js?v=2 loaded twice on most tool pages.
- 2026-10-01 depth passes: mtbf-calculator (895 → 1,763 words, +R(t)=e^(−t/MTBF)
  table, +λ/FIT conversion table, MTBF vs MTTF vs MTTR + availability section, FAQ 5→9
  visible / LD 4→9 synced; FIXED pump example availability 98.7% → 99.6% (2920 ÷
  2932.67) and boilerplate answer box); xml-to-json (861 → 1,510, +10-row edge-case
  table run through vendor/xml-js in node, JSON→XML pitfalls, FAQ 3→6 synced; FIXED
  false claims: DOM parser → xml-js/sax, "@" prefix → _attributes, comments/PIs kept
  not lost, order not preserved in compact mode). JS byte-identical on both.
- 2026-10-01 hub updates: guides hub +3 cards (More Guides 496→499), count claims
  555→558 in all 9 places (= on-disk dirs); all-tools patched by hand (558).
  Queue state: contractor quantity guides now complete. Next intake per directive:
  privacy "X alternatives — compared" guides (pattern of pimeyes-alternative), more PDF
  depth (check <900-word PDF tool pages), niche calc guides (dealer doc fee, MACRS,
  totaled car value — check for existing guides). Thin depth candidates left:
  css-minifier (750), minify-js (771), exif-viewer (boilerplate FAQ).

- 2026-10-02 batch guides (intake per 10-01 notes + drip-rebalance-2026-09-29: "X
  alternatives — compared" pattern, 2× PDF + 1× privacy; niche-calc intake checked
  and SKIPPED as covered: dealer-doc-fee (guides/dealer-doc-fees), totaled-car
  (how-insurance-determines-a-totaled-car-value), MACRS (equipment-depreciation-guide),
  section-179 vehicle, every pet/auto calc already has a guide):
  PDF cluster → guides/smallpdf-alternatives/ (most-aware — 9-option table: where the
  file goes / free limit / account / best for; Smallpdf-task → free-swap table (11
  rows); web-verified: Smallpdf free = 2 tasks/day per 2026 reviews (hedged), Sejda 3
  tasks/hr + 200 pp/50 MB, PDF24 EU servers + 1-hr deletion + Creator free for
  business);
  PDF cluster → guides/free-adobe-acrobat-alternatives/ (most-aware — Adobe US
  pricing table from adobe.com/acrobat/pricing.html Oct 2026: Std $14.99/$24.99, Pro
  $19.99/$29.99, Studio $24.99/$34.99 (annual-billed-monthly / month-to-month);
  Reader free = view/print/search/comment/fill/sign; 13-row paid-feature → free-swap
  table incl. bates-numbering);
  reverse-image-search → guides/tineye-alternatives/ (privacy cluster, most-aware —
  engine comparison + job → engine tables; TinEye facts from help.tineye.com: free
  non-commercial 100/day + 300/week, uploads not saved, no face matching, 5 sort
  modes; Google Lens no biometric face matching; Yandex face quality hedged by region)
  (1,057–1,180 words prose excl. tables, 1,229–1,466 incl.; FAQ 5 each +
  Article/Breadcrumb/FAQPage LD; 0 em dashes in body.) Guide backlinks added on
  compress-pdf, pdf-merge, ocr-pdf, reverse-image-search, pimeyes-alternative and
  guides/best-free-pdf-tools.
  FAQ REPAIRS (no JS): reverse-image-search FAQ (visible + LD) held 5 background-
  removal/matting Q&As → 5 real reverse-search Q&As; answer box said "Upload a photo
  ... Google, Bing and Yandex" → public URL, 4 engines incl. TinEye.
  pimeyes-alternative (#2 real-engagement page) + face-recognition-search FAQs were
  "How do I use the … / Is it free / How accurate" boilerplate → 5 + 4 real Q&As.
- 2026-10-02 depth passes: css-minifier (751 → 1,513 words; +11-row "what csso
  changes" table — every row real csso 5.0.5 output in node; +keep vs restructure,
  silent-drop of broken CSS, gzip section; FAQ 3→5 LD synced). FIXED false copy:
  shorthand folding (24px×4 → 24px, 0 0 8px 0 → 0 0 8px) is Restructure-only, not
  Keep structure (table row + worked example); "errors surface csso's parse message
  with a line reference" — csso is tolerant and silently drops unparseable rules
  (".a{color:red;.b{margin:0}" → ".a{color:red}"); "byte-for-byte equivalent" →
  functionally equivalent; answer box "Paste CSS above" → below.
  minify-js (772 → 1,526; +6-row preset-behavior table from terser 5.51.2 in node;
  +"why is my output empty" section: the default Compress + mangle preset uses
  toplevel:true, which DELETES top-level functions only called from HTML onclick
  (output "") and renames globals — fixes: Compress preset / window.fn = fn (verified
  survives) / modules; +license-comment section (strip/compress drop /*! headers,
  full keeps them); +gzip section (strip 17.3% / full 29.5% after gzip); FAQ 3→5 LD
  synced; boilerplate HowTo LD ("enter your values… minify css guide") rewritten to
  real steps; copy said "Strip only is the safe default" but the page defaults to
  Compress + mangle → clarified). JS byte-identical on both (script-block md5).
- 2026-10-02 hub updates: guides hub +3 cards (More Guides 499→502), count claims
  558→561 in all 9 places (= on-disk dirs); all-tools Guides (561), patched by hand.
  NOTE: the 10-01 batch was deployed but never committed — it ships in today's commit.
  Queue state: "alternatives" intake next candidates: iLovePDF alternatives (verify
  limits first, sources conflict), ExifTool/EXIF-viewer alternatives, DocuSign
  free alternatives (only if sign-pdf honesty re: audit trail is kept). Thin depth
  candidates left: exif-viewer (boilerplate FAQ), compress-pdf/pdf-merge/ocr-pdf have
  6 visible FAQ items vs 4 in LD (check sync). NEED STU GO-AHEAD (JS): minify-js
  default preset (toplevel:true) silently deletes onclick handlers — consider
  defaulting to Compress or toplevel:false.

- 2026-10-03 batch guides (intake from 10-02 queue notes, "X alternatives — compared"
  pattern per drip-rebalance-2026-09-29: 2× PDF/document + 1× privacy; none had an
  existing guide):
  pdf-merge (PDF cluster) → guides/ilovepdf-alternatives/ (most-aware — 9-option table
  + 13-row iLovePDF-tool → free-swap table; ilovepdf.com/pricing Oct 2026: Basic free
  = 25 files/merge vs 500 Premium, 15–200 MB per-tool caps vs 4 GB, OCR/desktop/AI
  Premium-only, EU page €9/mo or €60/yr (quoted in EUR, US price varies — hedged);
  iLovePDF blog: uploads deleted within 2 h);
  sign-pdf → guides/free-docusign-alternatives/ (most-aware — free e-sign options table +
  situation → choice table; DocuSign pricing page: no free tier, 30-day trial no card,
  Personal 5 envelopes/mo, Standard/Business Pro 100 envelopes/user/yr; US price
  hedged "$10–15/mo"; Dropbox Sign help center: 3 requests/mo renewing every 30 days
  from signup, unlimited self-sign, audit trail on requests; signwell.com/pricing:
  free 3 docs/mo, 1 template, 1 sender; ESIGN/UETA/eIDAS framed as general info);
  exif-viewer (privacy cluster) → guides/exiftool-alternatives/ (most-aware — 10-tool
  table (type/platform/reads/edits/uploads) + "what a phone photo reveals" table;
  exiftool.org: Phil Harvey, Perl, tens of thousands of tags, same terms as Perl;
  ExifCleaner + Jeffrey's viewer both built on ExifTool (latter uploads); HONEST about
  our viewer: exifr parse() defaults = IFD0/EXIF/GPS only, no XMP/IPTC/maker notes,
  JPEG/HEIC/AVIF/TIFF/PNG)
  (1,204–1,255 words excl. tables, 1,448–1,600 incl.; FAQ 5 each + Article/Breadcrumb/
  FAQPage LD; 0 em dashes; 0 broken internal links.) Guide backlinks added on
  pdf-merge, sign-pdf, exif-viewer, image-metadata-remover, guides/smallpdf-alternatives.
- 2026-10-03 depth passes (queue's named candidates were all already >1,000 words —
  exif-viewer 1,119, compress-pdf 1,167, pdf-merge 1,055, ocr-pdf 1,218 — so picked the
  document-cluster pages from a fresh <900 scan; device-test pages still need sign-off):
  resume-builder (832 → 1,394 words; +template-choice table (Classic Georgia serif /
  Modern Arial navy band / Minimal Arial no rules, from the page CSS), +print-dialog
  settings table, +duty→result bullet table; FAQ 6→8, LD 4→8 synced). FIXED copy:
  "the two templates" → three; "letter-size PDF" → paper size follows print settings
  (no @page rule); boilerplate answer box rewritten. CSS-ONLY FIX: Modern template's
  navy header band wasn't printed by default (Chrome "Background graphics" off) →
  white name/contact text vanished on the PDF; added print-color-adjust:exact on
  .modern .rs-head-wrap inside @media print.
  cover-letter-generator (875 → 1,422; +"what each tone changes" table quoting the
  JS's real openers, +pre-send checklist, +"what hiring managers skim for" table;
  FAQ 5→7, LD 4→7 synced). FIXED copy: "you can edit the output directly" (#letter
  is not contenteditable) → copy into Word/Docs; unsourced "fewer than half of
  postings" / "a majority read letters" softened; boilerplate answer box rewritten.
  JS byte-identical on both (script-block md5).
  NEED STU GO-AHEAD (JS): cover-letter-generator lowercases the first letter of the
  "why" sentence, which then STARTS paragraph 4 (output paragraph begins lowercase)
  and also lowercases proper nouns at the start of achievement/why; word-count note
  says "right in the 250–400 word range" for 200–249 words. Page copy now tells users
  to fix capitals by hand.
  SITE-WIDE FINDING: 116 tool pages still carry the boilerplate answer box "The X
  produces your output instantly from the input you provide…" (data-ta-answer-text) —
  candidate for a sweep.
- 2026-10-03 hub updates: guides hub +3 cards (More Guides 502→505), count claims
  561→564 in all 9 guides-hub places + roadmap stat (= 564 on-disk dirs); all-tools
  Guides (564) + 3 links, patched by hand.
  Queue state: next "alternatives" intake candidates: Adobe Scan / CamScanner
  alternatives (scan-to-PDF), PDFescape alternatives, Photopea/remove.bg (image —
  check cluster fit), "best free privacy tools 2026" listicle. Thin depth candidates
  (<900, non-device): flowchart-maker (866), org-chart-maker (867), er-diagram-maker
  (893), jq-playground (893), honeymoon-registry-fee-calculator (874), online-vet-cost-
  comparison (882), wedding-hashtag-generator (853); by-state cost pages (262–362) need
  sourced data before expanding.

- 2026-10-05 batch guides (intake from 10-03 queue notes, per drip-rebalance-2026-09-29:
  2× PDF/document "alternatives" + 1× "best free [category] tools 2026" listicle; none had
  an existing guide; Photopea/remove.bg skipped, as remove-image-background guide exists):
  jpg-to-pdf (PDF cluster) → guides/camscanner-alternatives/ (most-aware. 8-option table
  incl. Microsoft Lens retirement: pulled from stores Feb 9 2026, scanning stopped Mar 9
  2026, MS points to OneDrive scan; CamScanner free = watermark + ads, Premium listed
  $4.99/mo or $49.99/yr on Capterra (hedged); Kaspersky Aug 2019 Necro dropper in ad
  library + Play removal; India ban June 2020; computed phone-camera → DPI table
  (12 MP Letter page at 80% of frame = 285 DPI); honest that JPG to PDF has no
  edge-detect/deskew and OCR PDF gives a transcript, not a searchable PDF);
  pdf-add-text (PDF cluster) → guides/pdfescape-alternatives/ (most-aware. Free/Premium/
  Ultimate table from pdfescape.com/signup Oct 2026: Premium $2.99/mo yearly or $5.99
  monthly, Ultimate $5.99/$8.99, free 10 MB upload + 10 files/7 days vs 40 MB + 100/30
  days; merge/compress/edit-text Premium, redaction/digital signatures Ultimate; 100-page
  free cap only in third-party listings → hedged; feature → free-swap table, 9 rows);
  image-metadata-remover (privacy cluster) → guides/best-free-privacy-tools/ ("best free
  X 2026" listicle per directive. 15-tool table with an honest catch per tool, "what
  hidden data your files carry" table, ItemList LD; outside picks Bitwarden / HIBP
  k-anonymity / uBlock Origin (Lite on Chrome) / Signal)
  (897–1,031 words prose excl. tables, 1,538–1,746 incl. tables + FAQ; FAQ 5 each +
  Article/Breadcrumb/FAQPage LD; 0 em dashes; 0 broken internal links.) Guide backlinks
  added on jpg-to-pdf, pdf-add-text, image-metadata-remover.
  COPY BUGS FIXED (no JS): OCR PDF outputs a .txt transcript (no pdf-lib, no text layer)
  but 3 guides said it makes PDFs searchable / "adds a selectable text layer":
  ilovepdf-alternatives (FAQ visible + LD + swap table), free-adobe-acrobat-alternatives
  (×2), smallpdf-alternatives (FAQ visible + LD + body). Wording now says transcript.
- 2026-10-05 depth passes (queue's named thin candidates; fresh <900 scan of PDF/doc/
  privacy pages found none apart from the text-tools hub):
  flowchart-maker (866 → 1,470 words; +syntax cheat-sheet table, +"mistakes that break the
  chart" list, +chart-height table computed from the JS layout constants (74 px per step,
  102 per decision, 440 px wide); FAQ 5→7, LD 4→7 synced). FIXED copy: loop FAQ claimed
  the No branch arrows back to an earlier step. The JS only searches later steps (j>i), and
  backward/unmatched targets render a "No → X" stub label. Symbols table lists document +
  connector shapes that the tool doesn't draw → note added. Boilerplate answer box rewritten.
  org-chart-maker (867 → 1,329; +formatting-rules table (separator regex, hyphenated names,
  tabs, multiple top-level lines create a "Root" box), +SVG size table (170 px per leaf,
  108 px per level); FAQ 5→7, LD 4→7 synced). FIXED copy: "boxes wrap at about twenty
  characters" → names truncated at 20, titles at 24 (no wrap); worked example said VP Eng's
  span is "inside the healthy range" → 2 direct reports, noted as thin. Answer box rewritten.
  JS byte-identical on both (script-block md5).
  NEED STU GO-AHEAD (JS): flowchart-maker can't draw backward No arrows (retry loops);
  org-chart-maker truncates names/titles with no ellipsis and shows a "Root" box when
  there's more than one top-level line; "Reset zoom" button only scrolls (no zoom exists).
- 2026-10-05 hub updates: guides hub +3 cards (More Guides 505→508), count claims 564→567
  in all 9 guides-hub places (= 567 on-disk dirs); all-tools Guides (567) + 3 links.
  Queue state: next "alternatives" intake candidates: Adobe Scan is covered inside the
  camscanner guide. Next: "Sejda alternatives", "PDF24 alternatives", "Have I Been Pwned
  alternatives / how to check if your email was leaked" (privacy), "best free image tools
  2026" listicle. Thin depth candidates left (<900): er-diagram-maker (893),
  jq-playground (893), honeymoon-registry-fee-calculator (874), online-vet-cost-
  comparison (882), wedding-hashtag-generator (853), text-tools hub (332).

- 2026-10-07 batch guides (intake from 10-05 queue notes, per drip-rebalance-2026-09-29:
  2× PDF "alternatives" + 1× privacy; none had an existing guide):
  pdf-merge / pdf-split (PDF cluster) → guides/sejda-alternatives/ (most-aware. Sejda
  free vs paid table: web 3 tasks/hour, desktop 3/day, 200 pages or 50 MB (pricing page
  only says "page and hourly limits", numbers from reviews, hedged); paid from
  sejda.com/pricing Oct 2026: Web Week Pass €5.50/7 days, Web Monthly €8.50, Desktop+Web
  Annual €71, uploads to 500 MB, OCR to 100 pages; 8-option table + 10-row job → free
  pick table; honest that our tools don't edit existing text → LibreOffice Draw);
  organize-pdf / pdf-password-tools (PDF cluster) → guides/pdf24-alternatives/ (most-aware.
  pdf24 FAQ: free for all incl. companies, ad-funded, EU servers, online uploads deleted
  after 1 hour, Creator = Windows only, Mac users pointed to online tools; Geek Software
  GmbH; platform table (Win/Mac/Linux/uploads) + 10-row PDF24 tool → in-browser pick);
  password tools (privacy cluster) → guides/have-i-been-pwned-alternatives/ (most-aware +
  problem-aware "how to check if your email was leaked". HIBP homepage Oct 2026:
  17,837,635,527 accounts / 1,039 sites (written as "17 billion+ / over 1,000"); API v3
  docs: Pwned Passwords range API free, no key, first 5 SHA-1 chars; breachedaccount needs
  paid key; Google dark web report: scans stopped Jan 15 2026, reports off Feb 16 2026;
  Bitwarden breach report free / exposed-passwords report Premium; worked k-anonymity
  example SHA1("password") → 5BAA6, 16^5 = 1,048,576 prefixes; what-leaked → what-to-do table)
  (1,134–1,235 words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles ≤58 chars.) Guide backlinks added on
  pdf-merge, pdf-split, organize-pdf, pdf-password-tools, password-strength-checker,
  password-generator, guides/best-free-pdf-tools, guides/best-free-privacy-tools.
- 2026-10-07 depth passes (queue's named thin candidates, dev-tools cluster):
  er-diagram-maker (893 → 1,571 words; +crow's-foot cheat-sheet table, +relationship-type
  table (1:1, 1:N, M:N join table, self-reference), +CREATE TABLE → entity section,
  +"why won't it render" list; every syntax example parse-tested against mermaid 11.17.2
  in node (missing relationship label = parse error; decimal(10,2), "PK, FK", quoted
  comments, `..` dashed lines all OK); FAQ 5→7, LD synced). FIXED copy: worked example
  quoted `PRODUCT ||--o{ CATEGORY : "sorted into"` and a `LINE_ITEM }o--|| PRODUCT` chain
  that aren't in the default diagram → now matches DEFAULT (CATEGORY ||--o{ PRODUCT :
  "sorts into"). Boilerplate answer box rewritten.
  jq-playground (893 → 1,458; +11-row cheat-sheet table, every output verified with real
  jq on the sample order; +"how is this different from the CLI" section from the page JS:
  input goes through JSON.parse, so NDJSON fails, ints > 2^53 lose precision (verified in
  node: 12345678901234567890 → ...7000), 129.00 → 129, no --slurp/--arg; FAQ 3→5, LD synced).
  JS byte-identical on both (script-block md5).
- 2026-10-07 hub updates: guides hub +3 cards (More Guides 508→511), count claims 567→570
  in all 9 guides-hub places (= 570 on-disk dirs); all-tools Guides (570) + 3 links.
  Queue state: next "alternatives" intake: "best free image tools 2026" listicle, then
  Stirling-PDF / Adobe Scan already covered; candidates: "Mozilla Monitor alternatives"
  (skip, overlaps HIBP guide), "Photopea alternatives" (check cluster fit). Thin depth
  candidates left (<900): honeymoon-registry-fee-calculator (874), online-vet-cost-
  comparison (882), wedding-hashtag-generator (853), text-tools hub (332).
