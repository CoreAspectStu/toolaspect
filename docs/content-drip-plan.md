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

- 2026-10-08 batch guides (intake from 10-07 queue notes; image cluster, bridges to the
  privacy cluster via no-upload angle; none had an existing guide):
  "best free image tools 2026" listicle → guides/best-free-image-tools/ (best-X. 15-tool
  job → tool → catch table with ItemList LD, every catch checked against the page JS:
  compressor single-file + lossless PNG, upscaler 2,000/1,200 px input caps, MODNet portrait
  model, reverse search needs a public URL; computed resize table 4,032 px → 1,200 px = 9% of
  pixels; GIMP / Photopea / Inkscape as the honest "use an editor" picks);
  image-compressor → guides/tinypng-alternatives/ (most-aware; substitutes for "Photopea
  alternatives", skipped as poor cluster fit: we have no layered editor. TinyPNG free web from
  tinypng.com Oct 2026: 20 images, 5 MB each, 3 conversions/session, 48 h retention; Pro 75 MB /
  Ultra 150 MB from tinify.com/pricing/web; Pro ~$39/yr from third-party listings (hedged);
  API 500 free/month. Honest that our PNG→PNG is lossless, so convert to WebP or use
  pngquant/Squoosh palette reduction; Caesium Linux = build from source; XnConvert free for
  private/educational use only);
  background-remover → guides/remove-bg-alternatives/ (most-aware + privacy. remove.bg help:
  free up to 0.25 MP; API docs: 1 credit full-res up to 50 MP, 50 free API calls/month at preview;
  subs ~$9/mo for 40 credits from third-party trackers (hedged); computed 0.25 MP sizes per
  aspect ratio (3:2 = 612×408, ~1% of a 24 MP photo); Apple Lift Subject / Win11 Paint /
  rembg / Adobe Express (free "at time of writing", hedged) / Canva Pro / GIMP)
  (1,072–1,316 words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles ≤52 chars.) Guide backlinks added on
  image-compressor, background-remover, image-upscaler.
- 2026-10-08 depth passes (queue's named thin candidates, niche-calc cluster):
  honeymoon-registry-fee-calculator (865 → 1,415 words; +fund-size fee table and
  gift-count sensitivity table, both computed from the page's own PLATFORMS model
  ($5,000 / 10 → 200 gifts on Honeyfund card: $180.90 → $293), +"cut the fees" list; FAQ
  visible 5 / LD 4 → 7 / 7 (LD was missing one visible FAQ, now synced); 2026 gift-tax
  annual exclusion $19,000). Boilerplate answer box rewritten.
  online-vet-cost-comparison (875 → 1,447; +subscription break-even table computed from the
  page JS defaults (Pawp beats Chewy video from visit 2, Airvet from visit 9), +"what can an
  online vet handle" triage table incl. ASPCA APCC (888) 426-4435; FAQ 3→5, LD synced).
  FIXED copy: answer box said the tool compares "clinic prices by treatment type". It
  compares online vet subscriptions vs per-visit, now rewritten.
  JS byte-identical on both (script-block md5).
  NEED STU GO-AHEAD (JS / data): honeymoon PLATFORMS labels Honeyfund card as "3.5% + $0.59";
  third-party summaries disagree (some say 2.8% + $0.30 card, 3.5% + $0.59 bank). Traveler's
  Joy may also add a guest-side 2.95% + $0.99. Verify against live checkouts before editing JS.
  online-vet note text says "a single subscription year still costs less than paying per visit"
  for any visits < 5, which is false at 1 visit/yr (Chewy $49.99 < Pawp $99).
- 2026-10-08 hub updates: guides hub +3 cards (More Guides 511→514), count claims 570→573
  in all 9 guides-hub places (= 573 on-disk dirs); all-tools Guides (573) regenerated.
  Queue state: next image-cluster intake: "Squoosh alternatives" (skip, overlaps TinyPNG
  guide), "iLoveIMG alternatives" (most-aware, image + PDF bridge), "Canva free vs Pro"
  (check fit). Thin depth candidates left (<900): wedding-hashtag-generator (853),
  text-tools hub (332); run a fresh <900 scan next batch.

- 2026-10-09 batch guides (intake from 10-08 queue notes + rebalance weighting: image/PDF
  bridge, PDF+privacy, PDF; none had an existing guide):
  image tools → guides/iloveimg-alternatives/ (most-aware. iloveimg.com/pricing Oct 2026:
  free 30 images/task + 200 MB for compress/resize/convert/rotate/watermark, crop 1/90 MB,
  blur face 10/100 MB, remove bg 3/6 MB, upscale 1/6 MB; Premium €5/mo yearly (€60) or €9
  monthly, 120 images/4 GB, bg/upscale stay 6 MB; security page: deleted within 2 h, ISO 27001.
  Computed 400 photos / 30 = 14 tasks. 10-row iLoveIMG tool → no-upload swap table, honest
  that we have no face-blur tool (Photopea/GIMP); Network-tab + Wi-Fi upload checks);
  PDF + privacy → guides/is-it-safe-to-upload-pdfs-online/ (problem-aware. Retention table
  from vendor pages: iLovePDF/iLoveIMG 2 h (signed docs up to 5 yrs), Smallpdf 1 h (shared/
  eSign 14 days, account storage until deleted; from Smallpdf blog), PDF24 1 h EU, Sejda
  "after processing" no window, TinyPNG 48 h; document risk table; HIPAA BAA note; metadata +
  fake-redaction sections → document-metadata-remover / redact-pdf);
  pdf-add-text / sign-pdf / flatten-pdf → guides/pdffiller-alternatives/ (most-aware. Prices
  from pdfFiller's own blog 2026: Basic $8 / Plus $12 / Premium $15 per month billed yearly;
  monthly ~$20/$30/$40 from third-party reviews (hedged); 30-day trial needs a card, cancel
  ≥24 h before end per pdfFiller's cancel guide; honest that Add Text doesn't fill AcroForm
  fields → browser viewer / Preview / Acrobat Reader; job → free route table)
  (1,174–1,243 words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles ≤51 chars.) SKIPPED as intake: FaceCheck.ID
  alternatives (official site has no readable pricing/free-search terms; third-party data
  conflicts; revisit only with verifiable facts). Guide backlinks added on image-compressor,
  image-cropper, image-watermark, pdf-add-text, sign-pdf, flatten-pdf, redact-pdf,
  document-metadata-remover, compress-pdf, pdf-merge, guides/best-free-pdf-tools,
  guides/best-free-image-tools, guides/ilovepdf-alternatives, guides/pdfescape-alternatives.
- 2026-10-09 depth passes (fresh <900 scan; device-test pages still need sign-off):
  wedding-hashtag-generator (845 → 1,350 words; +pun-by-surname-ending table with real
  outputs run through the page JS in node (39 rules / 32 endings, not "40-odd"), +pre-print
  hashtag check table; FAQ visible 5 / LD 4 → 7 / 7 synced). FIXED copy: worked example
  claimed #AlexAndJordanForever in round 1. Real round 1 (sorted shortest-first) has no
  first-name tags → rewritten with the actual 12; "a second click surfaces deeper cuts" →
  each click after the first slides the list by ONE tag. Answer box rewritten.
  form-builder (606 → 1,197; +"what the export needs before going live" table, +form-backend
  section, +JSON export section (sample = 16 lines / 929 bytes HTML, 46 lines JSON, verified
  in node); FAQ 3→5, LD synced). FIXED copy: FAQ said "optional inline styles" (none exist)
  and listed file/hidden types (palette has 9 types, no file/hidden/tel/url); "browsers have
  validated dates since 2013" (desktop Safari 2021); broken <code>date</td> markup. Answer
  box rewritten. JS byte-identical on both (script-block md5).
  NEED STU GO-AHEAD (JS): wedding-hashtag clean() strips non-ASCII (García → Garca) and cap()
  lowercases the rest (McDonald → Mcdonald); same-surname couples get #LeeLeeHitched /
  #MeetTheLeeLees; "fresh set" button label vs 1-tag rotation. form-builder: Required on a
  dropdown removes the blank option so `required` can never fail; group label for= points at
  no id on radio groups (should be fieldset/legend); export lacks newline after <form>.
- 2026-10-09 hub updates: guides hub +3 cards (More Guides 514→517), count claims 573→576
  in all 9 guides-hub places (= 576 on-disk dirs); all-tools Guides (576) regenerated.
  Queue state: next intake candidates: "Canva free vs Pro" (fit still doubtful), "PDF Candy
  alternatives" / "Xodo alternatives" (PDF, most-aware, verify limits first), FaceCheck.ID
  (blocked on facts). Thin depth candidates left (<900, non-device): gantt-chart-maker (755),
  kanban-board (762), mind-map-maker (777), class-diagram-maker (848), mermaid-diagram-suite
  (887), molar-mass-calculator (892), html-to-markdown (895), words-per-minute-test (898).

- 2026-10-10 batch guides (intake from 10-09 queue notes + rebalance weighting: 2× PDF
  most-aware + 1× privacy/AI-detection; none had an existing guide):
  PDF → guides/pdf-candy-alternatives/ (most-aware. pdfcandy.com/pricing Oct 2026: free =
  "page and hourly restrictions", no batch, limited file size, no ads, no account to start
  (numbers NOT published; "~1 task/hour" from TechRadar/PCWorld, hedged); Web €6/mo,
  Desktop+Web yearly €4/mo, Lifetime €99, paid up to 500 MB/task; currency appears geo-based.
  Security page: AES-256 transit + rest, EU + USA servers, deleted within 2 h; owner Icecream
  Apps (Cyprus); Desktop is Windows only. 8-option table + 11-row swap table);
  PDF → guides/xodo-alternatives/ (most-aware. xodo.com/pricing: 1 free web action/day,
  free compress = Low only; Web $7.99/mo ($95.88/yr), Desktop/PDF Studio $9.99/mo ($119.88/yr)
  or $240 perpetual, Suite $8.99/mo ($107.93/yr, sale price); 3-day trials need a card; mobile
  free plan watermarks edits (Xodo plans article); free Xodo PDF Reader Win/Mac/Linux kept as
  an honest pick; compress page: deleted after 1 h, server region not stated);
  privacy/AI → guides/ai-or-not-alternatives/ (most-aware. aiornot.com/pricing: free 20 image
  checks/mo, Pro $5 (500), Business $100 (6,600); privacy policy silent on upload retention/
  training. Hive free Chrome ext + API $6/1k; Illuminarty free (no published cap) / $10 / $30;
  Sightengine 2,000 ops/mo (500/day) / $29; Content Credentials Verify; SynthID Detector opened
  globally 2026-10-07 per Google blog (partners OpenAI/NVIDIA/Kakao; ~10 checks/day + sign-in
  from press only, hedged). Honest that our ai-image-detector is metadata-only (exifr), not a
  pixel classifier. Situation × check-type table; accuracy caveats cite arXiv 2505.12335 and
  "Fake or JPEG?" 2403.17608)
  (1,049–1,282 words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles ≤46 chars.) Dropped from drafts as unverifiable:
  "40+ tools" claim for PDF Candy, PDF Candy free-watermark FAQ. Guide backlinks added on
  compress-pdf, pdf-merge, pdf-split, pdf-annotate, ai-image-detector, guides/best-free-pdf-
  tools, guides/how-to-tell-if-an-image-is-ai-generated.
- 2026-10-10 depth passes (queue's named thin candidates, top two of the 10-09 list):
  gantt-chart-maker (750 → 1,593 words; +sample-project breakdown table (start/days/done-by
  computed from the page's sample T array), +working-days → calendar-days table (computed in
  node, Mon vs Wed start), +"what saves / what resets" section; FAQ visible 5 / LD 4 → 7 / 7
  synced). FIXED copy: worked example said the tasks' straight sum would be "60" days, real sum
  is 83; "content and build share two weeks" → content runs entirely inside frontend build;
  explained chart caption's 49 days (grid padded to whole weeks: ceil((42+2)/7)*7). Answer box
  rewritten.
  kanban-board (763 → 1,498; +"what each click does" behaviour table read from the JS, +Little's
  Law WIP → cycle-time table; FAQ visible 5 / LD 4 → 7 / 7 synced). FIXED copy: privacy FAQ told
  users to "export" the board, but there's no export button. Answer box rewritten.
  JS byte-identical on both (script-block md5).
  NEED STU GO-AHEAD (JS): gantt start date/project name/zoom aren't persisted (date resets to
  today on load and the whole saved chart shifts); task labels truncate at 24 chars; Days are
  calendar days (no working-day option). kanban: no export, no card edit, no in-column reorder,
  Clear Done has no confirm.
- 2026-10-10 hub updates: guides hub +3 cards (More Guides 517→520), count claims 576→579
  in all 9 guides-hub places (= 579 on-disk dirs); all-tools Guides (579) regenerated.
  Queue state: next intake candidates: "Canva free vs Pro" (fit still doubtful), FaceCheck.ID
  (blocked on facts), "Hive AI detector" (now covered inside ai-or-not guide, skip), "Foxit
  free alternatives" / "PDFgear vs" (PDF, most-aware, verify limits first). Thin depth candidates
  left (<900, non-device): mind-map-maker (777), class-diagram-maker (848), mermaid-diagram-suite
  (887), molar-mass-calculator (892), html-to-markdown (895), words-per-minute-test (898).

- 2026-10-12 batch guides (intake from 10-10 queue notes + rebalance weighting: 2× PDF + 1×
  privacy/security; none had an existing guide). Intake triage: PDFSimpli, Soda PDF, PDF2Go
  all DROPPED (pricing pages render prices client-side / show none, unverifiable); PDFgear
  DROPPED (fully free, weak alternatives intent); "Smallpdf vs iLovePDF" DROPPED (Smallpdf
  prices JS-rendered; own blog 2026-08-03 confirms only 7-day trial + yearly 25% cheaper).
  PDF → guides/foxit-alternatives/ (most-aware. foxit.com/pdf-editor/pricing Oct 2026: Editor
  $129.99/user/yr, Editor+ $159.99/user/yr, paid-in-full or billed monthly, FAQ "monthly from
  $10.99" (plan unnamed, hedged); perpetual Editor 14 $209.99; AI Assistant $49.99/yr (2,000
  credits/mo; 300 free/mo on every account); volume 30+ up to 30% off; 14-day trial, NO card.
  Reader free, personal + business, Win/macOS/iOS/Android/web, AcroForm + XFA filling. Online
  merge "max 20MB each" (title says 10MB, noted), compress 150 MB, no account, "deleted after
  processing", server region unstated. 3-yr cost table computed: 389.97 / 479.97 vs 209.99);
  PDF → guides/how-to-fill-out-a-pdf-form/ (problem-aware. form-type table, app × form-type
  matrix: Firefox AcroForm since 83 / XFA since 93 (Oct 2021 release notes); Edge XFA
  unsupported by default, PDFXFAEnabled policy (learn.microsoft.com); "Please wait..." = XFA
  (UMich KB / Adobe community); box height → text size table at 60% rule (72 pt/in);
  ESIGN 2000 + UETA; links pdf-add-text / sign-pdf / flatten-pdf (Forms mode, field count));
  privacy/security → guides/is-it-safe-to-paste-a-jwt-online/ (problem-aware, developer
  cluster. RFC 7519 claims table w/ sensitivity, JWE RFC 7516 five-part tell, RFC 8725;
  jwt.io (Auth0/Okta) home page silent on client-side processing (checked Oct 2026, hedged);
  Python one-liner decode tested; Unix timestamp reference table computed in Python; honest
  that our decoder's VALID badge only checks exp, never the signature)
  (1,314–1,365 words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD; 0 em
  dashes; 0 broken internal links; titles ≤49 chars.) Guide backlinks added on jwt-decoder,
  flatten-pdf, pdf-add-text, sign-pdf (+foxit), guides/best-free-pdf-tools (+foxit, +form).
- 2026-10-12 depth passes (queue's named thin candidates, top two of the 10-10 list):
  mind-map-maker (772 → 1,673 words; +"what the map does with your text" behaviour table read
  from the JS (one sub-level only, # and blank lines ignored, label caps 24/22/26 chars, colors
  repeat after 8), +SVG size table computed from the layout formula (max(rows)×34+80, first
  ceil(n/2) branches right), +clean-output section; FAQ visible 5 / LD 4 → 8 / 8 synced).
  FIXED copy: worked example said "read clockwise from the top right" but both sides render
  top-to-bottom (clockwise order would be Format, Guests, Growth, Production); rules FAQ
  implied 2–3 sub-levels, tool draws one. Answer box rewritten.
  class-diagram-maker (920 → 1,736; +"which arrow do I need" decision table, +modifiers &
  generics table (Mermaid docs: * abstract, $ static, ~T~ generics, no comma generics),
  +SVG vs PNG export table read from the JS (PNG 2×, #0f1117 bg; SVG no bg; nothing saved
  on reload); FAQ visible 5 / LD 4 → 8 / 8 synced; "Related Calculators" → "Related Tools").
  FIXED copy: worked example said two dotted arrows reach PaymentMethod, it's three (the
  Order ..> dependency too); abstract FAQ claimed an italic stereotype tag (it's abstract
  *members* that italicize, via trailing *). Answer box rewritten.
  JS byte-identical on both (script-block md5 a79b951e… / a421ac47…).
  NEED STU GO-AHEAD (JS) — URGENT: pdf-add-text font bug. fontFor() does
  PDFLib.StandardFonts[name] with option values "Helvetica-Bold" (the DEFAULT) and
  "Times-Roman"; the enum keys are HelveticaBold / TimesRoman, so embedFont(undefined) throws
  and the download fails on the default font (reproduced with pdf-lib 1.17.1 in node:
  Helvetica ok, Courier ok, Helvetica-Bold FAIL, Times-Roman FAIL). One-line fix: change the
  option values to HelveticaBold / TimesRoman. jwt-decoder: VALID badge is exp-only (label
  could say "not expired"); atob() mangles non-ASCII (UTF-8) claims; pl.iss is concatenated
  into innerHTML unescaped (self-XSS only). mind-map: no third level, no PNG export.
  class-diagram: no persistence (localStorage would be cheap).
- 2026-10-12 hub updates: guides hub +3 cards (More Guides 520→523), count claims 579→582
  in all 9 guides-hub places (= 582 on-disk dirs); all-tools Guides (582) regenerated (sorted
  insert, 2026-10-12 stamp).
  Queue state: next intake candidates: "Canva free vs Pro" (fit still doubtful), FaceCheck.ID
  (blocked on facts), Smallpdf vs iLovePDF (needs a browser-rendered Smallpdf price),
  "how to fill XFA form on Mac" (could fold into form guide instead). Thin depth candidates
  left (<900, non-device): mermaid-diagram-suite (887), molar-mass-calculator (892),
  html-to-markdown (895), words-per-minute-test (898).

- 2026-10-13 batch guides (intake from 10-12 queue notes: all four named candidates still
  blocked/doubtful, so fresh intake. Slug-token + href-coverage rescan: every tool already has
  a guide linking it (only device-test/hub/crate longtails at 0). PDF intake triage: Nitro
  (pricing JS-rendered, no prices in HTML), PDF Expert (EUR-only server-side, €84.99/yr /
  €149.99 lifetime, USD unverifiable), PDFelement (pricing URL 404, third-party prices only),
  all DROPPED; PDF how-to intents saturated (delete/organize/extract/password all covered).
  So weighting swung to the under-served lanes this batch: 1× privacy/security + 2× niche
  calc (niche calc 25% lane had gone unserved since 10-02). None had an existing guide):
  privacy → guides/is-it-safe-to-upload-files-to-virustotal/ (problem-aware. VT 2021 terms,
  now archived as "historic" on virustotal.readme.io after move to Google Cloud SecOps terms:
  samples "immediately shared for review by the Service's Partners", "ONLY UPLOAD SAMPLES THAT
  YOU WISH TO PUBLICLY SHARE", no confidential/personal data, contributed samples "generally
  will not be removed"; API docs list "Download a file" (paid); public API = hash lookup only,
  4 req/min, non-commercial; Private Scanning docs (2026-07-03): org-only, ~24 h retention,
  no AV verdicts. Submission × exposure table + OS hash-command table (Get-FileHash / certutil
  / shasum -a 256 / sha256sum). Honest that our hash-generator reads files as TEXT);
  niche calc → guides/do-employers-have-to-reimburse-mileage/ (solution-aware. FLSA no duty,
  29 CFR 531.35 kickback; state table CA 2802 / IL 820 ILCS 115/9.5 / IA 91A.3(6) / NH RSA
  275:57 / MT-ND-SD Field Code / MA 454 CMR 27.04(4) / DC narrow, cross-checked vs Clockspot
  2026 tracker, hedged; IRS 2026 72.5¢ Jan–Jun → 76¢ Jul–Dec (Ann. 2026-11, matches our
  irs-mileage-rates-2026 guide); miles × rate table computed; min-wage worked example
  $8×40 − 100 mi×$0.76 = $244 → $6.10/hr; DOL FOH vs opinion letter vs 6th Cir. 2024 hedged;
  OBBBA made §67(g) suspension permanent, Form 2106 exceptions);
  niche calc (Social Security = #3 GA4 page) → guides/can-you-work-while-collecting-social-
  security/ (problem-aware. SSA 2026 RET: $24,480 ($1/$2) / $65,160 ($1/$3), monthly
  $2,040 / $5,430 (computed /12); 2025 = $23,400 / $62,160; 2027 figures due with COLA
  2026-10-14 (refresh then!). Withholding-by-income table computed; whole-check withholding
  example ($1,800/mo, $5,000 → Jan–Mar held, $400 refunded); FRA recalculation; benefit
  taxation thresholds 25k/32k, 34k/44k + OBBBA $6,000 senior deduction 2025–2028)
  (1,238–1,347 words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD; 0 em
  dashes; 0 broken internal links; titles ≤54 chars.) Guide backlinks added on hash-generator,
  mileage-reimbursement-calculator, social-security-calculator, guides/when-to-take-social-
  security, guides/irs-mileage-rates-2026, guides/best-free-privacy-tools.
- 2026-10-13 depth passes (queue's named thin candidates, top two of the 10-12 list):
  mermaid-diagram-suite (910 → 1,980 words; +syntax table per diagram type (Mermaid docs),
  +"what each button does" behaviour table read from the JS (400 ms re-render, error keeps
  last good render, example overwrites editor, nothing saved on reload), +SVG vs PNG section;
  FAQ visible 5 / LD 4 → 9 / 9 synced). FIXED copy: answer box claimed a gantt example (none
  in dropdown); "exact parse error with character position" → line number + pointer; FAQ
  listed "org charts" (not a Mermaid type) → git graphs; generic calculator HowTo LD rewritten.
  molar-mass-calculator (919 → 1,962; +K4Fe(CN)6 element × count × AW breakdown table, +20
  more compounds table run through the page's own parser/AW table in node, +percent
  composition section, +"what the parser accepts/rejects" section; FAQ visible 5 / LD 4 → 9 /
  9 synced). FIXED copy: generic answer box; "molar mass vs molecular weight diverge for salts".
  JS byte-identical on both (inline-script md5 f4c6e35a… / 4b20b847…).
  URGENT, LIVE REGRESSION (found by syntax-gate.py 10-13): word-unscrambler inline script
  fails to parse since 41f141931 (10-11): canMake() ends "...return true}return true}", an
  extra "return true}", so the whole tool is dead on prod. One-token fix: delete the
  duplicate. NOT fixed here (drip rule: no tool JS without Stu's go-ahead).
  NEED STU GO-AHEAD (JS): hash-generator handleFile() uses readAsText, so binary files
  (exe/zip/pdf/docx) hash WRONG vs sha256sum (should be readAsArrayBuffer + hash bytes).
  molar-mass: "CaSO4·0.5H2O" → 136.134 (0.5 read as dot + ×0), decimal subscripts garbage
  (Fe0.95O → 1519.9), chained hydrate dots carry the multiplier forward, leading coefficient
  multiplies the hydrate part. mermaid: status says "Renderer ready." before the library loads,
  PNG export has no try/catch around canvas (tainted-canvas on Safari, untested), example
  picker overwrites without confirm. STILL OPEN from 10-12: pdf-add-text default font
  (Helvetica-Bold) fails to download.
- 2026-10-13 hub updates: guides hub +3 cards (More Guides 523→526), count claims 582→585
  in all 9 guides-hub places (= 585 on-disk dirs); all-tools Guides (585) sorted insert,
  2026-10-13 stamp.
  Queue state: next intake candidates: refresh SS guide + calculator copy with 2027 RET limits
  once SSA publishes (10-14); "Canva free vs Pro" (fit doubtful); FaceCheck.ID (blocked);
  Smallpdf vs iLovePDF (needs browser-rendered price); PDF "alternatives" pool needs a
  browser-rendered price check (Nitro, PDF Expert USD, PDFelement). Thin depth candidates left
  (<900, non-device): html-to-markdown (895), words-per-minute-test (898).

- 2026-10-14 batch guides (intake from 10-13 queue notes: all named candidates still
  blocked/doubtful; SSA 2027 COLA/RET release is today but ssa.gov returns 403 to our
  fetchers and press figures are still projections ($25,200 / $67,200), so the SS earnings-
  test refresh is DEFERRED until the official numbers can be verified. Fresh intake, weighted
  toward PDF + privacy (owed after 10-13's 2× niche calc). None had an existing guide):
  PDF/document → guides/email-attachment-size-limits/ (problem-aware. Official help pages Oct
  2026: Gmail 25 MB personal, auto Drive link above (support.google.com/mail/answer/6584);
  Yahoo 25 MB in+out (SLN5673); Outlook.com 20 MB incl. message text, Exchange default 10 MB
  (MS "send large files with Outlook"); iCloud 20 MB, Mail Drop 5 GB (support.apple.com
  102198); Proton 25 MB / 100 files (EN support page; localized pages say 50 MB incoming,
  so incoming NOT claimed). Base64 headroom table computed: limit ÷ (4/3 × 78/76) = ÷1.368 →
  10/20/25/35/50 MB fit 7.3/14.6/18.3/25.6/36.5 MB; Exchange Online 150 MB cap + ~33% encoding
  note hedged);
  PDF + privacy/security → guides/can-a-pdf-contain-a-virus/ (problem-aware. PDF keyword
  risk table (/JS /OpenAction /AA /Launch /EmbeddedFile /URI /AcroForm /XFA /JBIG2Decode);
  ESET 2018 CVE-2018-4990 + CVE-2018-8120 chain; CVE-2024-4367 PDF.js (Firefox 126 fix);
  MEASURED table: built a PDF with every active feature and ran it through @cantoo/pdf-lib
  2.9.1 copyPages (what pdf-split/pdf-merge do) in node: OpenAction, Names-tree JS, embedded
  files REMOVED; page /AA JS, /Launch link, /URI links KEPT; rasterize removes all. Hash step
  points at OS commands, NOT our hash-generator (still hashes binary files as text). Honest
  that no web tool, ours included, should be used to open a hostile PDF → Dangerzone/VM);
  niche calc (SS = #3 GA4 page) → guides/how-do-spousal-social-security-benefits-work/
  (solution-aware. Reduction table FRA 67 computed: spousal 25/36 of 1% × 36 + 5/12 of 1%
  beyond → 32.5/35/37.5/41.7/45.8/50%, own 70/75/80/86.7/93.3/100/108/124%; $2,400 PIA →
  $780…$1,200; own+excess worked example $800 own + $400 excess → $1,200 at FRA, $820 at 62
  (560 + 260); deemed filing (born ≥ 1954-01-02, 2015 BBA); divorced 10-yr / 2-yr
  independent rule; spousal vs survivor table; GPO/WEP repealed by SSFA signed 2025-01-05)
  (1,289–1,379 visible words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles ≤54 chars.) Guide backlinks added on
  compress-pdf, pdf-split (email), pdf-merge (virus), social-security-calculator,
  guides/when-to-take-social-security (spousal), guides/is-it-safe-to-upload-files-to-
  virustotal, guides/best-free-privacy-tools (virus).
- 2026-10-14 depth passes (the two named thin candidates left in the 10-13 list):
  html-to-markdown (905 → 1,827 words; +17-row "what this converter actually outputs"
  edge-case table, every row produced by running the page's own inline converter in node +
  jsdom (no vendored lib, ~100 lines custom), +"prepping HTML" section; FAQ visible 6 / LD 4
  → 9 / 9 synced). FIXED copy: task-list checkbox claim (bare checkbox in li is dropped),
  block-level images produce nothing, <br> only works inside paragraphs, privacy FAQ claimed
  no third-party requests (page loads GA/AdSense/CF analytics).
  words-per-minute-test (926 → 1,929; +passage-runs-out table (449-461 char passages → 2-min
  test ends early above ~45 WPM), +WPM→CPM table, +net-vs-word-per-error penalty table,
  +result-label bands table read from the JS (27/45/60/80 net); FAQ visible 6 / LD 4 → 9 / 9
  synced). FIXED copy: Brysbaert reading-speed citation 2014 → 2019; "quote on a resume"
  overclaim. JS byte-identical on both (inline-script md5 vs HEAD).
  NEED STU GO-AHEAD (JS): html-to-markdown drops bare li checkboxes + block-level img, splits
  loose div text/loses top-level b/a, SKIP.SVG never matches (tagName is lowercase svg),
  nested tables duplicate rows, no backtick-aware code fences, no Markdown escaping.
  wpm-test: label uses unrounded net (44.6 shows "45 WPM" labelled average), only 3 passages.
  URGENT SECURITY (JS, found while researching the PDF-virus guide): 15 tool pages load
  pdfjs-dist@3.11.174 with isEvalSupported left at its default (true), which is affected by
  CVE-2024-4367 (arbitrary JS in our origin from a crafted PDF; fixed in 4.2.67): compare-pdf,
  compress-pdf, crop-pdf, delete-pages-from-pdf, flatten-pdf, ocr-pdf, organize-pdf,
  pdf-add-text, pdf-annotate, pdf-metadata-editor, pdf-to-jpg, pdf-to-text, rearrange-pdf-
  pages, redact-pdf, rotate-pdf. Quick fix: pass isEvalSupported:false to every getDocument()
  call; proper fix: move to pdfjs-dist 4.2.67+ (sign-pdf already on 6.3.289). STILL OPEN:
  pdf-add-text default font, hash-generator readAsText, molar-mass hydrate parsing.
- 2026-10-14 hub updates: guides hub +3 cards (More Guides 526→529), count claims 585→588
  in all 9 guides-hub places (= 588 on-disk dirs); all-tools Guides (588) sorted insert,
  2026-10-14 stamp; syntax-gate 1,348 blocks, 0 broken.
  Queue state: SS 2027 RET/COLA refresh (calculator + work-while-collecting guide) once SSA
  figures are verifiable; thin depth pool (<900, non-device) now EMPTY: run a fresh word-
  count scan next batch (device-test pages still need sign-off). Guide intake ideas: "how
  to send large files" (fold into email guide?), "PDF/A explained" (no tool yet, weak),
  survivor benefits guide (SS cluster, verify rules first).

- 2026-10-15 batch guides (fresh intake: the 10-14 queue named no ready candidates, so
  picked tools with no dedicated guide, weighted PDF + privacy + niche calc. Dedupe: no
  guide slug/title matched; delete-pages-from-pdf was only linked from best-free-pdf-tools /
  extract / organize guides):
  PDF → guides/how-to-delete-pages-from-a-pdf/ (solution-aware, AIO likely cites tools.
  Method table: our tool / Preview / Chrome-Edge Save as PDF / MS Print to PDF / iOS Files /
  Acrobat (Reader can't). MEASURED in node with @cantoo/pdf-lib 2.5.1 (= the tool's exact
  version, copyPages into new doc): deleted page text GONE (all streams inflated + searched);
  links on kept pages KEPT; filled field's widget stays but AcroForm dropped (0 fields);
  outlines + Title/Author DROPPED (producer → pdf-lib); deleted page's image GONE normally but
  KEPT (hidden, extractable) when pages share one /Resources dict; shared-res output 6,666 B
  vs 6,457 B input. Points sensitive pages to redact-pdf / flatten-pdf);
  privacy/security → guides/are-qr-codes-safe-to-scan/ (problem-aware. Payload-type table
  (https/WIFI:/SMSTO:/tel:/mailto:/VCARD/bitcoin:/otpauth://); FBI IC3 PSA Jan 2022, FTC
  alert Dec 2023, Austin pay-station stickers early 2022, iOS 11 camera preview bug fixed 11.3;
  lookalike-URL table where every "site you'd visit" was produced by WHATWG new URL() in node
  (subdomain trick, user@host trick, Cyrillic а → xn--pypal-4ve.com, shortener). Honest that
  our qr-code-scanner decodes locally, only offers Open for http(s), and does NO reputation
  check);
  niche calc (SS = #3 GA4 page) → guides/how-do-social-security-survivor-benefits-work/
  (solution-aware. Survivor FRA 67 for 1962+ (66+8m 1960, 66+10m 1961), 84 months, .339%/mo
  → 71.5/75.6/79.6/83.7/87.8/91.9/95.9/100% computed on $2,000; family table 100/71.5/71.5
  disabled 50-59/75 child-in-care/75 child/82.5 one parent/75 two parents; family max 150-
  180%; RIB-LIM worked example $1,400 at 62 → $1,650 floor reached ~62y9m; DRCs carry over
  ($2,480); no deemed filing → switch strategies; remarriage ≥60 (≥50 disabled); 9-month
  marriage rule; $255 lump sum; GPO repealed SSFA Jan 2025. ssa.gov 403 to fetchers again;
  survivor FRA/reduction rows cross-checked via search snippets of SSA's survivorchartred
  page + SSA handbook §406)
  (1,343–1,413 visible words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles ≤53 chars.) Guide backlinks added on
  delete-pages-from-pdf, qr-code-scanner, social-security-calculator, guides/when-to-take-
  social-security, guides/how-do-spousal-social-security-benefits-work.
- 2026-10-15 depth passes (fresh <900 scan, own counter excl. script/style/nav/header/footer:
  only non-device page under 900 = boosty; second pick = pdf-to-text at 904, PDF lane):
  boosty (883 → 1,545 words; +net-by-gross table, +subscribers-needed-by-price table,
  +commission-sensitivity table (10/11.7/13/15/20%), every number from the page's own calc()
  formula in node; +fixed-payout-fee guidance (box is once/month, weekly payouts = 4×);
  FAQ visible 5 / LD 5 → 7 / 7). FIXED copy: generic answer box → real answer.
  pdf-to-text (904 → 1,709; +11-row "tricky layouts" table, every row real output of the
  page's own buildText() run in node, +plain-vs-markdown table, +page-spec behaviour; FAQ
  visible 6 / LD 4 → 8 / 8 synced). FIXED copy: "plain mode keeps one line per PDF line"
  (false: plain mode reflows paragraphs too); generic answer box → real answer.
  JS byte-identical on both (inline-script md5 vs pre-edit copy); syntax-gate 0 broken.
  NEED STU GO-AHEAD (JS): pdf-to-text page markers number the EXTRACTED pages 1..n, not
  the source page numbers (extract 5,9 → "Page 1", "Page 2") — fix: pass `wanted` into
  buildText and label with wanted[i]; dehyphenation glues "well-"+"known" → wellknown and
  "2024-"+"2025" → 20242025 (only rejoin when next line starts lowercase); same-baseline
  merge spans the full page width (two columns interleave); per-glyph text items join with
  spaces ("H e l l o"). STILL OPEN: pdfjs-dist 3.11.174 CVE-2024-4367 on 15 PDF pages
  (incl. delete-pages-from-pdf + pdf-to-text), pdf-add-text default font, hash-generator
  readAsText, molar-mass hydrate parsing.
- 2026-10-15 hub updates: guides hub +3 cards (More Guides 529→532), count claims 588→591
  in all 9 guides-hub places (= 591 on-disk dirs); all-tools Guides (591) sorted insert,
  2026-10-15 stamp.
  Queue state: SS 2027 COLA/RET refresh still pending verifiable SSA figures. Thin pool
  (<900, non-device) now EMPTY again; next depth candidates from the 900-1000 band:
  baby-shower-cost-calculator (903), cgpa-to-gpa-converter (905), rotate-pdf (939),
  extract-pdf-pages (947), pdf-split (969). Guide intake ideas: "how to send large files"
  (fold into email guide?), "how to remove a password from a PDF" (check overlap with
  password-protect-a-pdf), SS disability → retirement conversion at FRA (SSDI cluster).

- 2026-10-16 batch guides (10-15 queue named intake ideas only; all 675 tool dirs are already
  linked from >=1 guide, so picked by lane + no dedicated guide. Dedupe: password removal
  already in password-protect-a-pdf (skipped); how-much-does-ssdi-pay only mentions FRA
  conversion in passing; no SS-taxation guide existed):
  niche calc (SS cluster) → guides/what-happens-to-ssdi-at-full-retirement-age/ (solution-
  aware; tool social-security-disability-benefits-calculator. Automatic DIB→RIB conversion at
  FRA, same PIA; FRA-by-birth-year table with conversion years (1959 cohort converting 2025-26,
  1960+ at 67 from 2027); before/after rules table (SGA $1,690 / blind $2,830 2026 from SSA
  sga page, CDRs stop, Medicare continues, suspension for DRCs at FRA per SSA KA-01160);
  suspension worked example $1,800 → $2,232 at 70, $64,800 forgone, break-even 150 months;
  early-RIB-then-DIB onset-date caveat hedged; SSI doesn't convert; private LTD offset note);
  PDF/privacy (problem-aware; intake idea from 10-14/10-15) → guides/how-to-send-large-files/
  (tool compress-pdf + image-compressor + pdf-split. Free-limit table: Gmail 25 MB→Drive,
  Outlook.com 20 MB, Drive 15 GB, OneDrive 5 GB, Mail Drop 5 GB/30 days, WeTransfer free 3 GB
  + 10 transfers per rolling 30 days (help.wetransfer.com, Dec 2024 plans), Dropbox Transfer
  Basic 2 GB / 7-day expiry (help.dropbox.com; older 100 MB figure is stale), Signal 100 MB,
  FAT32 4 GB/file. Upload-time table computed (MB×8÷Mbps). MEASURED zip table: zlib level 9
  (= .zip deflate) on real files: sitemap.xml 95.5%, JSON 84.2%, HTML 69.1%, PNG median 14.9%,
  PDFs (21) median 4.0%, EXIF camera JPEGs (17) median 1.3%, MP4 (25) median 0.3%. NOTE our own
  stock-media JPEGs zip 37-68% smaller (flat-colour charts at high quality → they're oversized;
  worth a recompress pass for page weight). WhatsApp/Telegram limits NOT claimed (sources conflict));
  niche calc (SS cluster) → guides/is-social-security-taxable/ (solution-aware; tool
  social-security-calculator. Thresholds $25k/$34k single, $32k/$44k joint, MFS-living-together
  from $0, never indexed (1983/1993); taxable-amount tables computed with the Pub 915 worksheet
  for $24k single ($0 → $20,400 cap) and $40k joint; worked example $30k other → $11,300; OBBBA
  senior deduction $6,000/person 2025-2028, 6% phase-out from $75k/$150k, gone at $175k/$250k,
  SS formula unchanged; 2026 state list = CO CT MN MT NM RI UT VT (WV phase-out complete
  2026-01-01, HB 4880); W-4V 7/10/12/22%; SSA-1099; lump-sum election for SSDI back pay)
  (1,261–1,399 visible words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles ≤59 chars, descs ≤155.) Guide backlinks added
  on social-security-calculator (taxable), social-security-disability-benefits-calculator
  (FRA), image-compressor (large files), guides/how-much-does-ssdi-pay (FRA), guides/when-to-
  take-social-security (taxable), guides/email-attachment-size-limits (large files).
  compress-pdf NOT touched (carries someone's uncommitted pdfjs isEvalSupported fix).
- 2026-10-16 depth passes (first two of the 10-15 900-1000 band list):
  baby-shower-cost-calculator (920 → 1,481 words by own counter; +cost-by-guest-count table
  (10/15/25/40/60 × 3 presets, fixed + per-guest decomposition from the page's own PRESETS:
  backyard $190 + $15/g, typical $595 + $23/g, brunch $945 + $35/g), +where-to-cut table (6
  levers off the $1,170 typical, all six → $510), +co-host split section; FAQ visible 5 / LD 4
  → 7 / 7 synced). FIXED: generic answer box → real answer.
  cgpa-to-gpa-converter (956 → 1,521; +three-percentage-conventions table 6.0-10.0 with the
  page's own indianClass bands (7.5 CGPA = Distinction under ×10 only; ×10 vs technical always
  7.5 pts apart), +reverse GPA-minimum → CGPA table (2.5-3.85), +why-linear-misleads section;
  FAQ visible 6 / LD 4 → 8 / 8 synced). FIXED: generic answer box → real answer.
  JS byte-identical on both (inline-script md5 vs pre-edit copy); syntax-gate 1,348 blocks,
  0 broken.
- 2026-10-16 hub updates: guides hub +3 cards (More Guides 532→535), count claims 591→594 in
  all 9 guides-hub places (= 594 on-disk dirs); all-tools Guides (594) sorted insert,
  2026-10-16 stamp.
  Queue state: next depth candidates from the 900-1000 band: rotate-pdf (939; wait until the
  uncommitted pdfjs fix is committed), extract-pdf-pages (947), pdf-split (969). Guide intake
  ideas: SSDI → Medicare (24-month wait, ALS/ESRD exceptions), "how to remove a password from
  a PDF" stays folded into password-protect-a-pdf, stock-media JPEG recompress (page weight).
  STILL OPEN (JS, need Stu): pdfjs-dist 3.11.174 CVE-2024-4367 proper upgrade (quick
  isEvalSupported:false fix is in the working tree uncommitted on all 15 pages as of 10-16),
  pdf-to-text page markers/dehyphenation, pdf-add-text default font, hash-generator
  readAsText, molar-mass hydrate parsing.

- 2026-10-17 batch guides (10-16 queue's named intake idea first, then lane-weighted fresh
  intake; dedupe: Medicare-on-SSDI only existed as one FAQ answer in how-much-does-ssdi-pay;
  no screenshot-metadata or "can't edit PDF" guide existed):
  niche calc (SS cluster) → guides/when-does-medicare-start-on-ssdi/ (solution-aware; tool
  social-security-disability-benefits-calculator. 25th month of entitlement = ~29 months from
  onset; onset → entitlement → Medicare table computed (mid-Mar 2024 → Sep 2024 → Sep 2026 …
  mid-Jan 2026 → Jul 2026 → Jul 2028); prior months count if back within 5 yrs; 12-month
  retro entitlement can put long-appeal cases past month 24 at approval; ALS (same month,
  2020 law removed 5-month wait) / ESRD (4th month of dialysis, 1st month home training,
  transplant admission month) / SSI→Medicaid table; 2026 CMS: Part B $202.90/mo, $283 ded,
  Part A ded $1,736, Part D OOP cap $2,100; $1,500 check → $1,297.10; Part B late penalty
  resets at 65; Medigap under 65 state-dependent (hedged); COBRA 18→29 mo disability
  extension at up to 150%; EPMC 93 months after TWP; SGA $1,690);
  privacy → guides/do-screenshots-have-metadata/ (problem-aware; tools image-metadata-
  remover + exif-viewer + redact-pdf. Photo-vs-screenshot metadata table; screenshot-a-photo
  strips GPS but keeps ~8.5% of pixels (4032×3024 → 1179×884 on a 1179-wide iPhone);
  visible-leak table (status bar, notifications, URL tokens, file names, weak redaction,
  aCropalypse); aCropalypse CVE-2023-21036 Pixel Markup + CVE-2023-28303 Snipping Tool /
  Snip & Sketch, both patched Mar 2023, Aarons & Buchanan; pixelation reversible (hedged).
  NOT measured on real phone screenshots (none on disk), so device-specific claims kept
  general: no GPS by default, Apple "screenshot" label);
  PDF → guides/why-cant-i-edit-my-pdf/ (problem-aware; tools pdf-add-text + ocr-pdf +
  pdf-password-tools + pdf-annotate. Symptom → cause → fix table (8 rows: scan, permissions
  pw, open pw, flattened form, XFA, signed/certified, subset fonts, viewer-only); job → tool
  table (7 rows); no cracking advice)
  (1,196–1,392 visible words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles ≤59 chars, descs ≤155.) Guide backlinks added
  on social-security-disability-benefits-calculator, image-metadata-remover, pdf-add-text,
  guides/how-much-does-ssdi-pay, guides/what-happens-to-ssdi-at-full-retirement-age,
  guides/how-to-remove-location-from-photos, guides/how-to-fill-out-a-pdf-form.
- 2026-10-17 depth passes (10-16 queue's 900-1000 band, first two; rotate-pdf unblocked now
  that the pdfjs isEvalSupported fix is committed in 7fa194926):
  rotate-pdf (939 → ~1,600 words; MEASURED with @cantoo/pdf-lib 2.9.1 in node, same
  load → setRotation → save path as the page: page 1 turned 90° on 30 real PDFs, size
  change −1.3% … +21.2%, median +3.5% (6-row sample table); bookmarks kept on 21/21, AcroForm
  kept, encrypted file → save throws "is encrypted" (owner-only pw still previews in pdf.js);
  +landscape-vs-rotated section; FAQ visible 6 / LD 4 → 8 / 8 synced). FIXED copy: "file
  grows by a handful of bytes" / "only a few bytes of metadata change" (false: whole file is
  re-saved) → measured median; generic answer box → real answer.
  extract-pdf-pages (947 → ~1,650; MEASURED copyPages on 11 real PDFs: page 1 alone keeps
  79% of a 12-page text report (shared fonts) vs 0.5% of a 148-page image-heavy guide;
  first-half extracts 24–95%; links kept (14/14), bookmarks DROPPED on 7/7, AcroForm DROPPED;
  +what-comes-along table, +extract vs delete vs split; FAQ visible 6 / LD 4 → 8 / 8
  synced). FIXED copy: "forms and annotations ... travel with them" (forms don't); generic
  answer box → real answer.
  JS byte-identical on both (inline-script md5 vs pre-edit copy).
  NEED STU GO-AHEAD (JS): extract-pdf-pages (and anything else using copyPages with
  ignoreEncryption:true) silently writes a BROKEN PDF from an encrypted source, even a
  permissions-only one (reproduced: 3-page owner-pw file → pdftotext "Unknown compression
  method in flate stream"). Fix: detect doc.isEncrypted after load and stop with "remove the
  password first" (copy now warns users). Check pdf-split / delete-pages / organize-pdf /
  pdf-merge for the same pattern.
- 2026-10-17 hub updates: guides hub +3 cards (More Guides 535→538), count claims 594→597 in
  all 9 guides-hub places (= 597 on-disk dirs); all-tools Guides (597) sorted insert,
  2026-10-17 stamp.
  Queue state: next depth candidate pdf-split (969), then re-scan the 900-1000 band. Guide
  intake ideas: SSDI back pay / how far back (SS cluster), "PDF opens blank" (PDF), stock-
  media JPEG recompress (page weight, not a guide). STILL OPEN (JS, need Stu): copyPages-on-
  encrypted (above), pdfjs-dist 3.11.174 proper upgrade, pdf-to-text page markers/
  dehyphenation, pdf-add-text default font, hash-generator readAsText, molar-mass hydrate.

- 2026-10-18 batch guides (10-17 queue's two named intake ideas first, then one lane-weighted
  fresh pick; dedupe: back pay only existed as one section of what-happens-after-an-ssdi-denial,
  blank PDFs only as one pdf-repair FAQ; no "has this PDF been edited" guide existed. Checksum
  guide SKIPPED on purpose: hash-generator readAsText bug still open, would send users to a
  wrong file hash):
  niche calc (SS cluster) → guides/how-far-back-does-ssdi-back-pay-go/ (solution-aware; tool
  social-security-disability-denial-calculator. Rules table (5 full waiting months, 12-month
  retro limit, established onset, through month before decision); scenario table run through
  the denial calculator's own JS (onset 3/15/2025, applied 4/2025, $1,630: initial 11/2025 → 2
  mo $3,260; recon 4/2026 → 7 mo $11,410; ALJ 10/2026 → 13 mo $21,190; applied 1/2025 after 1/2023
  onset → 33 mo $53,790, 25% = $13,448 → $9,200 cap (decisions on/after 11/30/2024, no 2026 change
  found)); windfall offset, back Part B premiums, WC/PDB 80% offset; SSI table (no retro, 2026 FBR
  $994 → installments at $2,982+, 3 payments 6 months apart, 9-month resource exclusion);
  lump-sum election → is-social-security-taxable);
  PDF → guides/why-is-my-pdf-blank/ (problem-aware; tools pdf-repair + pdf-to-jpg + ocr-pdf +
  flatten-pdf. 7-row symptom → cause → fix table (XFA "Please wait" text, truncation, not-a-PDF,
  viewer, Portfolio, layers, color override); XFA: Chrome/Edge/Safari/Preview no, Firefox partial
  since 2021, dropped in PDF 2.0. MEASURED truncation with Poppler on a 47-page 3.1 MB pdfTeX
  paper: cut 1% / 5% / 50% → all 47 pages open but near-blank, text 22,700 → 445 words (fonts
  at file end); cut 75% → won't open; 7 of 8 other PDFs cut 5% wouldn't open at all);
  PDF/privacy → guides/how-to-tell-if-a-pdf-has-been-edited/ (problem-aware; tools pdf-metadata-
  editor + compare-pdf + sign-pdf + document-metadata-remover. MEASURED: pdf-lib edit on 2 files →
  Producer "pdf-lib (...)" + ModDate = save time, Creator/CreationDate kept, XMP untouched (InDesign
  brand guide's XMP still "Adobe PDF Library 16.0.3" / 2022 → 4-year Info/XMP mismatch); corpus of
  37 unique PDFs: 18 no dates, 19 creation date, 5 ModDate≠CreationDate, 5 XMP ModifyDate,
  4 with >1 %%EOF of which 3 just linearized and 1 real incremental update (12-page brochure,
  5.8 KB appended 2 min later; cutting at the earlier %%EOF restored the earlier page order,
  back cover moved from p1 to p12))
  (1,379–1,400 visible words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles ≤50 chars, descs ≤154.) Guide backlinks added
  on social-security-disability-denial-calculator, pdf-repair, pdf-metadata-editor,
  guides/what-happens-after-an-ssdi-denial, guides/how-to-repair-a-corrupt-pdf,
  guides/how-to-edit-pdf-metadata.
- 2026-10-18 depth passes (10-17 queue's named pdf-split, then the 900-1000 band re-scan:
  dog-pregnancy-calendar 924, credit-card-payoff 929, rap-calculator-50000-salary 941, pet-tools
  954, credit-card-payoff-calculator 956, honeymoon-budget 956, words-to-pages 958, json-to-yaml
  959, oil-change-cost 963, pregnancy-due-date 968, money-factor 970, dog-dna-test 972,
  car-payment 974, tire-size 984, crypto-converter 985, workers-comp 991, amortization-schedule
  992, bathroom-remodel 994; <900 = device-test pages + about/editorial only):
  pdf-split (993 → 1,554 words; MEASURED this page's split path (@cantoo/pdf-lib 2.9.1 create +
  copyPages) on 25 real PDFs: two halves total median 154% of original (56–196%), burst median
  621% (105–4,547%); image-heavy >2 MB median burst 153% (7 files), text-heavy <300 KB 682% (16);
  +what-carries-over table (links kept, bookmarks/AcroForm/metadata dropped, encrypted refused at
  load); FAQ visible 6 / LD 4 → 8 / 8 synced). FIXED copy: "slightly more total disk space" (false,
  up to 45×) → measured; output names "part-1.pdf" / "page-1.pdf by default" (false: prefix
  defaults to the source file name) → report-1.pdf; generic answer box → real answer. pdf-split
  load() has NO ignoreEncryption, so it is NOT affected by the copyPages-on-encrypted bug.
  car-payment-calculator (974 → 1,600; +payment-per-$1,000 table 0-18% APR × 36/48/60/72 with the
  page's own formula (7%/60 = $19.80 → 27 × 19.80 = $534.60 vs $534.63), +max-loan-by-payment
  table at 7%, +rolled-in tax/fees ($2,500 → $584.14, +$470 interest) and negative equity ($4,000
  → $613.84, +$752), +extra-payment section ($50/mo → 54 months, −$527; $100 → 50, −$954); FAQ
  visible 4 / LD 4 → 6 / 6 synced). FIXED: generic answer box → real answer.
  JS byte-identical on both (inline-script md5 vs pre-edit copy); syntax-gate 1,348 blocks, 0 broken.
- 2026-10-18 hub updates: guides hub +3 cards (More Guides 538→541), count claims 597→600 in
  all 9 guides-hub places (= 600 on-disk dirs); all-tools Guides (600) sorted insert,
  2026-10-18 stamp.
  Queue state: next depth candidates from the 900-1000 band (lane order): credit-card-payoff-
  calculator (956; check credit-card-payoff 929 is a true duplicate first, both self-canonical),
  money-factor-converter (970), workers-comp-calculator (991), amortization-schedule (992). Guide
  intake ideas: SSDI onset date / "how SSA decides when your disability began" (SS), "PDF prints
  blank or missing text" (PDF), file checksum guide once hash-generator readAsText is fixed.
  STILL OPEN (JS, need Stu): copyPages-on-encrypted in extract-pdf-pages (pdf-split cleared;
  still check delete-pages / organize-pdf / pdf-merge), pdfjs-dist 3.11.174 proper upgrade,
  pdf-to-text page markers/dehyphenation, pdf-add-text default font, hash-generator readAsText,
  molar-mass hydrate. NEW minor bug (edge case): denial calculator assumes onset is never on
  the 1st (ent = onsetM+6); onset on the 1st should give onsetM+5. Copy in the new guide states
  the rule; calculator is off by one month in that edge case. Needs Stu go-ahead to change JS.

- 2026-10-19 batch guides (10-18 queue's two named intake ideas first, then one lane-weighted
  privacy pick; dedupe: onset date only existed as one rule-table row in how-far-back-does-ssdi-
  back-pay-go, printing only as FAQ fragments in how-to-flatten-a-pdf, no "photo edited" guide
  existed. Checksum guide still SKIPPED: hash-generator readAsText bug open):
  niche calc (SS cluster) → guides/how-does-ssa-decide-your-disability-onset-date/ (solution-
  aware; tools social-security-disability-denial-calculator + ssdi-benefits + social-security-
  calculator. AOD/EOD/DLI/potential-onset table; SSR 18-01p (Oct 2018, ME optional), SGA $1,690
  (2026), UWA ≤6 months, grid-rule ages 50/55; five-way onset table run on the back pay calculator's
  rules (applied 4/2025, ALJ 10/2026, $1,630: AOD 3/15/2025 → 13 mo $21,190; EOD 9/1/2025 (1st-of-
  month edge) → 8 mo $13,040; EOD 1/10/2026 → 3 mo $4,890; amended 6/10/2024 → 22 mo $35,860;
  amended 1/10/2023 → retro-capped 4/2024 → 30 mo $48,900, fee $9,200 cap); partially favorable
  / Appeals Council 60-day risk; SSI no-retro note);
  PDF → guides/why-does-my-pdf-print-blank/ (problem-aware; tools flatten-pdf + pdf-to-jpg +
  pdf-repair + compress-pdf + ocr-pdf. 7-row printout → cause → fix table; MEASURED pdffonts over
  40 unique local PDFs: 37 all-embedded, 3 with an unembedded font (ComicSansMS TrueType in a
  technical report; base-14 Helvetica ×2 incl. a pdf-add-text output), 6 with fonts lacking
  ToUnicode (prints fine, copies as gibberish), 1 image-only; Print as Image / Document and
  Markups / layer print flags / printer memory);
  privacy → guides/how-to-tell-if-a-photo-has-been-edited/ (problem-aware; tools exif-viewer +
  image-metadata-remover + reverse-image-search + ai-image-detector. Clue → proves → doesn't-prove
  table; MEASURED 228 unique local JPEGs: 25 any EXIF, 12 camera make, 12 DateTimeOriginal of
  which 12/12 ≠ ModifyDate (minutes to 2 months later; Software = Lightroom Classic 15.2.1 ×5,
  Photoshop 26.6 ×4, Bridge 2025 ×2, Bridge 2022 ×1), 15 XMP, 6 xmpMM:History, 1 GPS; crop test on
  a Canon EOS R6 4717×3145 frame with PIL: default save → 0 EXIF tags, save with exif copied →
  Make/dates kept and PixelX/YDimension still 4717×3145 on a 2358×1572 image; C2PA hedged to
  "a few camera and phone makers")
  (1,404–1,429 visible words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles 48–57 chars, descs 144–155.) Guide backlinks added
  on social-security-disability-denial-calculator, social-security-disability-benefits-calculator,
  flatten-pdf, pdf-to-jpg, exif-viewer, ai-image-detector, guides/how-far-back-does-ssdi-back-pay-
  go, guides/what-happens-after-an-ssdi-denial, guides/why-is-my-pdf-blank, guides/how-to-flatten-
  a-pdf, guides/how-to-tell-if-a-pdf-has-been-edited, guides/how-to-remove-location-from-photos.
- 2026-10-19 depth passes (10-18 queue's lane order: credit-card-payoff-calculator first; duplicate
  check vs credit-card-payoff: NOT a byte duplicate (different JS, copy, desc; same H1; both self-
  canonical) but a cannibalization pair, flagged below; then money-factor-converter):
  credit-card-payoff-calculator (971 → 1,843 words; +APR × payment table on $8,000 (15–29% APR ×
  $200–$500) from the page's own monthly loop, +minimum-only table (interest+1%/$25 floor vs
  interest+2%: $8,000 → 277 mo/$13,600 vs 160 mo/$6,979), +payment-for-deadline table (12–60 mo:
  $748.76 … $220.95), +balance-transfer math (3%/5% fee → $458/$467 a month over 18 mo vs $450 at
  22% → 22 mo/$1,770); FAQ visible 4 / LD 4 → 6 / 6 synced). FIXED: generic answer box → real answer.
  money-factor-converter (980 → 1,754; +rent-charge-over-lease table (3 deals × 3 MFs), +why the
  formula uses cap+residual (average-balance derivation of ÷2400), +dealer markup table (0.00040 on
  $40k–$96k = $576–$1,382 over 36 mo), +ways to lower MF (MSDs hedged 0.00005–0.00010/deposit,
  tier, subvented, one-pay); FAQ visible 5 / LD 4 → 7 / 7 synced). FIXED: generic answer box → real.
  JS byte-identical on both (inline-script md5 vs pre-edit copy); syntax-gate 1,348 blocks, 0 broken.
- 2026-10-19 hub updates: guides hub +3 cards, count claims 600→603 in all 9 places (= 603 on-disk
  dirs); all-tools Guides section regenerated by deploy.sh (gen-all-tools.py reads guides/).
  Queue state: next depth candidates (900-1000 band, lane order): workers-comp-calculator (1,000),
  amortization-schedule (997), crypto-converter (985), tire-size (984), then re-scan. Guide intake
  ideas: "can I work while on SSDI / trial work period" (SS; check how-much-does-ssdi-pay first),
  "PDF text copies as gibberish / wrong characters" (PDF; ToUnicode, 6/40 measured today),
  "do photos have a hidden date taken" (privacy), file checksum guide once hash-generator readAsText
  is fixed. NEEDS STU DECISION (content): credit-card-payoff vs credit-card-payoff-calculator is a
  cannibalization pair (same H1, same intent, both self-canonical) → pick one, canonical/301 the other.
  STILL OPEN (JS, need Stu): copyPages-on-encrypted in extract-pdf-pages (check delete-pages /
  organize-pdf / pdf-merge), pdfjs-dist 3.11.174 upgrade, pdf-to-text page markers/dehyphenation,
  pdf-add-text default font (ships unembedded base-14 Helvetica; fine for printing, noted in today's
  guide), hash-generator readAsText, molar-mass hydrate, denial calculator onset-on-the-1st off-by-one.

- 2026-10-20 batch guides (10-19 queue's three named intake ideas, in order; dedupe: trial work
  period only existed as one sentence in how-much-does-ssdi-pay, can-you-work-while-collecting-
  social-security covers the RETIREMENT earnings test only; no gibberish/ToUnicode guide (how-to-
  extract-text-from-a-pdf covers columns/OCR, not encoding); no capture-date guide. Checksum guide
  still SKIPPED: hash-generator readAsText bug open):
  SS cluster → guides/can-you-work-while-on-ssdi/ (solution-aware; tools social-security-disability-
  benefits-calculator + social-security-disability-denial-calculator + social-security-calculator.
  2026 figures VERIFIED vs ssa.gov/redbook/newfor2026: TWP $1,210 (or >80 hrs self-employed), SGA
  $1,690 / blind $2,830; earnings table incl. IRWE ($1,900 − $300 = $1,600 countable); timeline for
  $1,630 benefit + $2,000/mo job from 1/2026: TWP Jan–Sep, cessation Oct + grace Nov/Dec, EPE to
  9/2029, first 12 months $19,560 SSDI + $24,000 wages; EXR 5 yrs / 6 months provisional; Medicare
  ≥93 months after TWP (→ mid-2034); SSI $65+$20 then $1 per $2, 2026 FBR $994: $1,000 wages →
  $536.50, zero at $2,073; 1619(b); Ticket to Work CDR protection; report by the 10th);
  PDF → guides/why-does-pdf-text-copy-as-gibberish/ (problem-aware; tools pdf-to-text + ocr-pdf +
  pdf-repair + pdf-to-jpg. 6-row symptom → cause → fix table; MEASURED pdffonts + pdftotext over 41
  unique local PDFs: 35 all fonts with ToUnicode, all clean; 6 with ≥1 font lacking it, of which
  3 clean, 2 with stray control chars (2/22,700 and 5/18,276 words), 1 94-page UK gov white paper
  (344/357 font entries unmapped) clean body but all 37 contents-page dot leaders → runs of U+FFFD;
  2 image-only. Point made: missing ToUnicode is often survivable, extractor fallbacks differ);
  privacy → guides/how-to-find-when-a-photo-was-taken/ (problem-aware; tools exif-viewer +
  image-metadata-remover + reverse-image-search. 7-row date-field table (DateTimeOriginal /
  OffsetTimeOriginal / Digitized / ModifyDate / GPSDateStamp / file dates / filename); MEASURED 228
  unique JPEGs: 25 EXIF, 12 DateTimeOriginal, 7 OffsetTimeOriginal (+10/+11), 0 GPS date, file mtime
  matched capture 0/12 (later by 142 days to 4 yrs 4 mo); copy test on Canon EOS R6 file: EXIF date
  2022-04-04 kept, mtime = copy time; PIL default re-save → 0 EXIF tags)
  (1,265–1,274 visible words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles 47–56 chars, descs 145–150.) Guide backlinks added
  on social-security-disability-benefits-calculator, pdf-to-text, ocr-pdf, exif-viewer,
  guides/how-much-does-ssdi-pay, guides/when-does-medicare-start-on-ssdi, guides/how-to-extract-
  text-from-a-pdf, guides/how-to-tell-if-a-photo-has-been-edited, guides/do-screenshots-have-metadata.
- 2026-10-20 depth passes (10-19 queue's lane order: workers-comp-calculator, amortization-schedule):
  workers-comp-calculator (1,000 → 1,754 words; all figures from the page's own formula: +cost per
  $45,000 employee by class ($67.50 clerical … $6,750 roofing; $0.03–$3.24 per hour worked), +e-mod
  table on $300k plumbing ($12,600 base; 0.80 → $10,080, 1.50 → $18,900), +payroll audit section
  (restaurant est. $400k / actual $480k → +$1,440; $60k uninsured roofing sub → +$9,000); guide
  links how-much-does-workers-comp-cost + how-workers-comp-settlements-are-calculated (first inbound
  from this page); FAQ visible 5 / LD 4 → 7 / 7 synced). FIXED: generic answer box → real answer.
  amortization-schedule (997 → 1,714; +loan-type table from the page's loop (car/personal/student/
  15-yr/30-yr: payment, total interest, interest share of payment 1, crossover payment: 30-yr 6.5% =
  payment 233, 15-yr = 53, car/personal = 1), +prepayment comparison ($100/$200/$500 extra, biweekly
  ≈ $131.68/mo extra → ~5 yr 10 mo / ~$72,700, $10k lump at payment 12/60/120 → $49,273/$36,754/
  $24,541), +recast vs refinance; +auto-loan related link, +how-does-loan-amortization-work link;
  FAQ visible 4 / LD 4 → 6 / 6 synced). FIXED copy: "$100 extra → about 4½ years early, ~$58,000"
  (actual 56 months = 4 yr 8 mo, $58,860) in body + FAQ; crossover "between year 15 and 20" →
  "payment 233, in year 20"; generic answer box → real answer.
  JS byte-identical on both (inline-script md5 vs pre-edit copy).
- 2026-10-20 hub updates: guides hub +3 cards, count claims 603→606 in all 9 places (= 606 on-disk
  dirs), More Guides badge 541→544 (NOTE: badges don't match card counts: More Guides has 379
  cards, total 552 cards vs 606 dirs; pre-existing, worth a hub regen); all-tools Guides section
  regenerated by deploy.sh (gen-all-tools.py).
  Queue state: next depth candidates (900-1000 band, lane order): crypto-converter (985), tire-size
  (984), then re-scan. Guide intake ideas: "SSDI overpayment: what to do" (SS; pairs with today's
  reporting section), "how to make a scanned PDF searchable" (PDF; check ocr-pdf guide first),
  "does WhatsApp/iMessage strip photo metadata" (privacy; check do-screenshots-have-metadata),
  file checksum guide once hash-generator readAsText is fixed.
  STILL OPEN (need Stu): credit-card-payoff vs credit-card-payoff-calculator cannibalization pair;
  JS: copyPages-on-encrypted (extract-pdf-pages; check delete-pages/organize-pdf/pdf-merge),
  pdfjs-dist 3.11.174 upgrade, pdf-to-text page markers/dehyphenation, pdf-add-text default font,
  hash-generator readAsText, molar-mass hydrate, denial calculator onset-on-the-1st off-by-one.

- 2026-10-21 batch guides (10-20 queue intake ideas; dedupe: "how to make a scanned PDF searchable"
  SKIPPED as duplicate intent of guides/how-to-ocr-a-pdf/ → replaced with A4-on-Letter printing
  (no dedicated guide; font/blank-print covered by why-does-my-pdf-print-blank, so not that);
  "does WhatsApp/iMessage strip photo metadata" SWAPPED for a measurable compression test: app
  behaviour couldn't be tested locally and secondary sources conflict (HD/document modes), so the
  new guide only hedges messaging apps in one sentence. Checksum guide still SKIPPED, readAsText open):
  SS cluster → guides/what-to-do-about-an-ssdi-overpayment/ (problem-aware; tools social-security-
  disability-benefits-calculator + social-security-disability-denial-calculator + social-security-
  calculator. VERIFIED vs SSA EM (secure.ssa.gov reference 08282025031929PM): Title II default
  withholding 50% for notices from 4/25/2025 (was 10% from 3/2024, 100% before), SSI stays 10%,
  recovery date = notice month + 3 (≥60 days to appeal), collection stops on reconsideration/waiver
  request; SSA-561 (60 days + 5 mail), SSA-632 (no deadline; within 30 days → no withholding while
  pending), SSA-634 lower rate, personal conference before waiver denial, TOP tax-refund offset.
  Worked example $1,630 benefit / $9,780 overpayment: 50% = $815 × 12 mo; 10% = $163 × 60; $100 =
  98 mo; 6-row cause table);
  PDF → guides/how-to-print-an-a4-pdf-on-letter-paper/ (problem-aware; tools crop-pdf + word-to-pdf +
  html-to-pdf. Computed: A4 vs Letter −5.9 mm wide / +17.6 mm tall, actual size clips 8.8 mm top+bottom,
  fit 94.1% (89.8% with 0.25 in hw margins), Letter→A4 97.3%/91.4%, Legal→Letter 78.6%/75%; 25 mm-
  margin A4 fits Letter at 100% with 16.2 mm spare. MEASURED pdfinfo over 39 readable local PDFs:
  16 A4, 7 Letter, 13 16:9 decks, 2 other, 1 mixed-size);
  privacy → guides/does-compressing-a-photo-remove-metadata/ (problem-aware; tools image-compressor +
  image-metadata-remover + exif-viewer. MEASURED: Canon EOS R6 4717×3145 JPEG + synthetic GPS run
  through 10 routes. ImageMagick q70 / resize 50% / →WebP / →PNG all KEPT EXIF+GPS+date (only -strip
  removed); Pillow default save REMOVED (kept only when exif= passed); Chromium canvas JPEG/WebP 0.7
  (= our compressor's code path) 0 EXIF tags, 456-byte generic sRGB ICC added. Metadata = 4,144 bytes
  = 0.6% of the q70 file, 3,144 of it ICC.)
  (1,171–1,384 visible words incl. tables + FAQ; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles 51–54 chars, descs 148–151.) Guide backlinks added
  on social-security-disability-benefits-calculator, crop-pdf, image-compressor, guides/can-you-work-
  while-on-ssdi, guides/why-does-my-pdf-print-blank, guides/how-to-remove-location-from-photos.
- 2026-10-21 depth passes (10-20 queue's lane order: crypto-converter, tire-size):
  tire-size-calculator (996 → 1,817 words; all diameters from the page's formula: +truck upsizing
  table on 265/70R17 (275/70 +1.7% … 315/70 +8.7%, actual speed at indicated 60, clearance gained =
  half the diameter gain), +speedometer/odometer error table (−3%…+8%), +load index / speed rating
  table (91–116, Q–Y), LT vs P-metric, DOT date code; FAQ visible 6 / LD 4 → 8 / 8 synced).
  FIXED: generic answer box → real answer.
  crypto-converter (1,002 → 1,478; +small-units table (sat/wei/gwei/lamport/drop/lovelace/litoshi/
  koinu/USDT 6 dp) priced at CoinGecko 10-21 (BTC $82,465, ETH $2,435), +spread/fee table on $1,000
  one-way and round-trip, +US tax section (property, 1099-DA gross proceeds 2025 / basis 2026);
  +percentage-change related link). FIXED BUG: visible FAQ section was CGPA-to-GPA FAQs (template
  paste) and FAQPage LD was 2 generic currency Qs → replaced with the page's 6 real crypto Q&As
  (moved out of the SEO copy, where they sat as bare H3s) + 2 new, LD 8 / 8 synced; generic answer
  box → real answer. JS byte-identical on both (inline-script md5 vs pre-edit copy).
  FLAG (JS, need Stu): crypto-converter CRYPTOS uses CoinGecko id "polygon", which returns nothing
  (MATIC is now "matic-network"/POL "polygon-ecosystem-token") → Polygon option never gets a rate.
  Other 14 ids return prices.
- 2026-10-21 hub updates: guides hub +3 cards, count claims 606→609 in all 9 places (= 609 on-disk
  dirs), More Guides badge 544→547 (badge/card mismatch from 10-20 still stands); all-tools Guides
  section regenerated by deploy.sh (gen-all-tools.py).
  Queue state: next depth candidates: re-scan the 900-1000 band (tire-size and crypto done).
  Guide intake ideas: "SSDI continuing disability review: what to expect" (SS; check what-happens-
  after-an-ssdi-denial), "why are my PDF pages different sizes" (PDF; reuse today's pdfinfo scan),
  "does HEIC to JPG keep metadata" (privacy; test heic-to-jpg-converter's canvas path first).
  STILL OPEN (need Stu): credit-card-payoff vs credit-card-payoff-calculator cannibalization pair;
  crypto-converter "polygon" CoinGecko id; JS: copyPages-on-encrypted (extract-pdf-pages; check
  delete-pages/organize-pdf/pdf-merge), pdfjs-dist 3.11.174 upgrade, pdf-to-text page markers/
  dehyphenation, pdf-add-text default font, hash-generator readAsText, molar-mass hydrate, denial
  calculator onset-on-the-1st off-by-one.

- 2026-10-22 batch guides (10-21 queue intake ideas, all three taken; dedupe: CDR not covered by
  what-happens-after-an-ssdi-denial (0 CDR mentions) or any SS guide; no page-size guide among 40 PDF
  guides; convert-heic-to-jpg only links exif-viewer/metadata-remover, never tests what survives):
  SS cluster → guides/what-happens-at-an-ssdi-continuing-disability-review/ (problem-aware; tools
  social-security-disability-benefits-calculator + -denial-calculator + social-security-calculator.
  VERIFIED vs eCFR 20 CFR 404.1590: MIE 6–18 mo, MIP ≥ every 3 yr, MINE every 5–7 yr; triggers (b);
  (h) no medical CDR while using a ticket; (i) work alone can't start a CDR after 24 months on SSDI;
  404.914 disability hearing at cessation reconsideration; 404.1597a/POMS DI 12027: continuation
  election within 10 days of receipt (15 from notice date), through the ALJ decision, repay if lost
  (waiver if good faith). Worked deadlines for a March 2 notice: Mar 17 / May 6.);
  PDF → guides/why-are-my-pdf-pages-different-sizes/ (problem-aware; tools pdf-merge + crop-pdf +
  rotate-pdf. MEASURED: merged Letter/A4/16:9/Legal/597×845 one-pagers with @cantoo/pdf-lib 2.9.1
  copyPages (= pdf-merge's code path) → pdfinfo shows every size unchanged. Fit table computed
  min(W/w,H/h): A4→Letter 94.1%, Letter→A4 97.3%, Legal 78.6/83.5, Tabloid 64.7/68.8, A3 66.5/70.7,
  slide 82.5/87.7 landscape. Reused 10-21 pdfinfo scan: 39 PDFs, 0 mixing A4+Letter (the 10-21
  "1 mixed" was a 0×0 pdfinfo read artifact on t50.pdf, not a real mix). crop-pdf = setCropBox only.);
  privacy → guides/does-converting-heic-to-jpg-keep-metadata/ (problem-aware; tools heic-to-jpg-
  converter + exif-viewer + image-metadata-remover. MEASURED: 4717×3145 HEIC with 45-tag EXIF + GPS
  written by pillow-heif 1.8.1 (no iPhone original on disk; ImageMagick's own HEIC writer drops
  EXIF, so it couldn't make the test file). Our tool's vendor heic-to.js heicTo() in headless
  Chromium → JPG and PNG 0 EXIF tags (canvas.toBlob; sRGB ICC added); ImageMagick JPG 45 / PNG 44
  tags incl GPS; Pillow default 0, exif= passed 45.)
  (1,255–1,444 words incl. tables + FAQ + related; FAQ 5 each + Article/Breadcrumb/FAQPage LD;
  0 em dashes; 0 broken internal links; titles 50–57 chars, descs 151–154.) Guide backlinks added
  on heic-to-jpg-converter, social-security-disability-benefits-calculator, pdf-merge, and guides/
  what-to-do-about-an-ssdi-overpayment, how-to-print-an-a4-pdf-on-letter-paper, does-compressing-a-
  photo-remove-metadata.
- 2026-10-22 depth passes (re-scan of the 900–1000 band, visible words excl. script/style/nav/
  footer: dog-pregnancy-calendar 933, credit-card-payoff 942 (skipped: cannibalization pair open),
  rap-calculator-50000-salary 949, pet-tools 958 (hub), honeymoon-budget 965, json-to-yaml 968,
  words-to-pages 968, oil-change-cost 973, pregnancy-due-date-calculator 974, dog-dna 979):
  pregnancy-due-date-calculator (974 → 1,656; all dates from the page's formula LMP+280+(cycle−28):
  +LMP-on-the-1st → due date table for 2026 (Jan 1 → Oct 8 … Dec 1 → Sep 7 2027), +cycle 21–35 days
  shift table (Jan 1 LMP: Oct 1 … Oct 15), +tests-by-week table (dating US, NIPT, NT, anatomy 18–22,
  glucose 24–28, Tdap 27–36, GBS 36–37); FAQ 4 / LD 4 → 6 / 6 synced). FIXED: generic answer box
  → real answer.
  json-to-yaml (968 → 1,623; +16-row YAML→JSON edge-case table, every row real yaml@2.9.0 output
  in node (1.10 → 1.1, 01234 → 1234, 0o755 → 493, .inf → null, << merge key kept literal,
  DUPLICATE_KEY / TAB_AS_INDENT / MULTIPLE_DOCS errors), +"Norway problem" table: this converter's
  YAML 1.2 output leaves no/yes/on/off/12:30/dates unquoted and PyYAML 6.0.3 reads them as
  False / True key / False / 750 / date; FAQ 3 / LD 3 → 5 / 5 synced). FIXED: generic answer box.
  JS byte-identical on both (inline-script md5 vs pre-edit copy).
  BUGS FOUND (JS untouched per drip rule — need Stu go-ahead):
  (1) pregnancy-due-date-calculator: new Date("YYYY-MM-DD") parses as UTC midnight, then
  toLocaleDateString renders in local time → every date shows ONE DAY EARLY for users west of UTC
  (all US visitors): LMP Mar 10 shows due Dec 14 vs the copy's Dec 15. Fix: parse as local
  (new Date(y, m-1, d)). Also trimester cutoffs (weeks<13 / <27) vs the page's table (1–13 / 14–27
  / 28+): week 13 shows Second, week 27 shows Third.
  (2) json-to-yaml: consider YAML.stringify(value, {version:'1.1'}) or a "quote YAML 1.1 booleans"
  option — verified it quotes "no"/"on"/"yes"/"off"/"12:30"/dates, avoiding the Norway problem.
- 2026-10-22 hub updates: guides hub +3 cards, count claims 609→612 in all 9 places (= 612 on-disk
  dirs), More Guides badge 547→550 (badge/card mismatch from 10-20 still stands); all-tools Guides
  section regenerated by deploy.sh (gen-all-tools.py).
  Queue state: next depth candidates (900–1000 band): oil-change-cost-calculator (973), words-to-
  pages-calculator (968), honeymoon-budget-calculator (965), dog-pregnancy-calendar (933); skip
  credit-card-payoff until the cannibalization call. Guide intake ideas: "how to appeal an SSDI
  cessation" only if CDR guide's section proves too thin (else "SSDI and Ticket to Work"), "how to
  make all PDF pages the same size" is now covered in today's guide (don't duplicate) → instead
  "why is my PDF so large" (check how-to-compress-a-pdf first), "does AirDrop keep photo metadata"
  (privacy; only if testable, else hedge-free alternative like "what EXIF data does a phone photo
  contain").
  STILL OPEN (need Stu): as 10-21 list, minus crypto-converter "polygon" id (fixed in 738aa8925),
  plus the two JS items above.

- 2026-10-23 batch guides (10-22 intake ideas, deduped: "why is my PDF so large" DROPPED, how-to-compress-a-pdf
  already covers where PDF weight comes from; "what EXIF does a phone photo contain" DROPPED, exiftool-alternatives
  has that section and no real phone original on disk; "appeal an SSDI cessation" not needed, CDR guide covers it):
  SS cluster → guides/what-is-the-ticket-to-work-program/ (problem-aware; tools social-security-disability-benefits-
  calculator + social-security-calculator + -denial-calculator. VERIFIED vs eCFR 20 CFR part 411 (2026-10-01):
  411.125 eligibility 18–64, current pay, not during 404.1597a continuation; 411.140 IWP/IPE assignment; 411.160
  medical CDRs only (SGA work reviews still allowed); 411.180 timely-progress table yr1 3 mo ≥ TWP ($1,210) / GED /
  60%, yr2 6 mo / +75%, yr3–4 9 mo > SGA ($1,690), yr5+ 6 mo no-cash-benefit earnings, combo % rule; 411.192
  inactive status; 411.200 PM decision effective 30 days after notice; 411.210 reinstatement; 411.220 90-day
  extension. Help Line 1-866-968-7842 / choosework.ssa.gov.);
  PDF → guides/why-does-my-pdf-look-blurry/ (problem-aware; tools compress-pdf + pdf-to-jpg + ocr-pdf. MEASURED:
  1-page Letter PDF of 11-pt Helvetica via @cantoo/pdf-lib = 3,569 B; pdftoppm at 72/96/150/200/300 DPI → JPEG q75
  136/226/431/636/1,084 KB (38×–304× the vector file). x-height px = pt×0.523×DPI/72 (Helvetica AFM): 11 pt 5.8/7.7/
  12.0/16.0/24.0, 8 pt 4.2/5.6/8.7/11.6/17.4. DPI options = compress-pdf & pdf-to-jpg selects (72–300, default 150).);
  privacy → guides/do-png-files-have-metadata/ (solution/problem-aware; tools exif-viewer + image-metadata-remover +
  image-compressor. MEASURED on a Pillow-built PNG (tEXt Author/Software/Comment/A1111 "parameters", iTXt XMP, eXIf
  with GPS, iCCP, pHYs): ImageMagick 6.9.11 png→png kept all tEXt incl. prompt, dropped eXIf + XMP, added tIME +
  date:create/modify; -strip → none; png→jpg → Comment + ICC; Pillow 13 re-save → iCCP only; Chromium canvas PNG →
  none; canvas JPEG 0.92 (= metadata remover) → sRGB ICC only. exifr 7.1.3 {gps:true} (= /exif-viewer/) showed text
  chunks + prompt + EXIF/GPS, NOT XMP (full parse only).)
  (1,013–1,382 words incl. tables + FAQ + related; FAQ 5 each + Article/Breadcrumb/FAQPage LD; 0 em dashes; 0 broken
  internal links; titles 57–58 chars, descs 145–150.) Guide backlinks added on social-security-disability-benefits-
  calculator, compress-pdf, exif-viewer, and guides/can-you-work-while-on-ssdi, why-does-pdf-text-copy-as-gibberish,
  do-screenshots-have-metadata.
- 2026-10-23 depth passes (next two in the 900–1000 band):
  oil-change-cost-calculator (963 → 1,606; +yearly cost by miles table 6k–25k from the page's presets ($55/5k, $65/6k,
  $95/7.5k, page's Math.round), +DIY parts by capacity 4–8 qt ($5/qt+$10, $9/qt+$11 = page DIY defaults), +shop vs DIY
  5-yr table at 12k mi ($240 conv / $312 syn); FAQ 5 / LD 4 → 7 / 7 synced). FIXED: generic answer box → real answer.
  words-to-pages-calculator (958 → 1,406; +pages→words table 1–20 pp at 275/410/550, +speech table 1–30 min at the
  page's 140 wpm; FAQ 6 / LD 4 → 8 / 8 synced). FIXED: generic answer box; FIXED WRONG FACT: font table/FAQ said
  Times New Roman 12 holds FEWER words than Arial (500 vs 550) while calling it "narrower". MEASURED with Liberation
  Sans/Serif/Mono (Arial/TNR/Courier New metrics), 4,524 words of site prose greedily broken on a 6.5in line: words/line
  at 12 pt 14.50 / 15.99 / 10.45 → scaled to the 550 convention: TNR 12 ~610, Courier 12 ~390, Arial 14 ~400, TNR 14
  ~440, Arial 11 ~650, TNR 11 ~730, Arial 10 ~790 (old table said 10 pt ~650). Verdana row removed (unmeasurable here).
  JS byte-identical on both (inline-script md5 vs pre-edit copy).
- 2026-10-23 hub updates: guides hub +3 cards, count claims 612→615 in all 9 places (= 615 on-disk dirs), More Guides
  badge 550→553 (badge/card mismatch from 10-20 still stands); all-tools Guides section regenerated by deploy.sh.
  Queue state: next depth candidates (900–1000 band): honeymoon-budget-calculator (965), dog-pregnancy-calendar (933),
  then re-scan the band; skip credit-card-payoff until the cannibalization call. Guide intake ideas: "SSDI vs SSI"
  (check how-much-does-ssdi-pay first), "why won't my PDF print" (check why-does-my-pdf-print-blank; only if distinct),
  "does WebP keep metadata" (privacy; testable with the same canvas/ImageMagick/Pillow harness, /tmp/drip23/png/).
  STILL OPEN (need Stu): as 10-22 list. Note (no fix needed): image-metadata-remover always outputs JPEG (documented in
  its FAQ); the PNG guide points PNG users who need transparency to image-compressor with PNG output.

- 2026-10-25 batch guides (10-23 intake ideas, all three taken; dedupe: how-much-does-ssdi-pay has one SSI paragraph only,
  no dedicated comparison; why-does-my-pdf-print-blank covers blank output (fonts/layers/forms), not restrictions / spool
  size / damaged files; does-compressing-a-photo-remove-metadata has one WebP row, nothing on WebP's own chunks):
  SS cluster → guides/ssdi-vs-ssi/ (solution-aware compare, AIO yes; tools social-security-disability-benefits-calculator +
  -denial-calculator + social-security-calculator. 2026: avg disabled worker $1,586 → $1,630 (SSA COLA fact sheet via AARP/
  MSU reprint; ssa.gov 403s curl), SSI FBR $994/$1,491, QC $1,890, SGA $1,690, max $4,152; concurrent table SSDI $300–$1,200
  → SSI = 994 − (SSDI − 20), break-even $1,014; SSI earnings table ($20+$65, half the rest) → zero at $2,073; VTR ⅓ →
  $662.67; past-due SSI ≥ 3×FBR ($2,982) in installments; 5-mo SSDI wait / 12-mo retro vs SSI month-after-filing.);
  PDF → guides/why-wont-my-pdf-print/ (problem-aware; tools compress-pdf + pdf-password-tools/unlock + pdf-repair + flatten-pdf.
  MEASURED /tmp/drip25/pdf: pikepdf 10.17 (qpdf 12.4.2) owner-only AES-256 print:no → pdfinfo "Encrypted: yes (print:no …)";
  poppler pdftops converted it anyway; empty-password open + save → "Encrypted: no". pdftops -level3 spool: text 3.6 KB → 60 KB;
  1 page 4032×3024 JPEG (504 ppi) 1.08 → 1.39 MB; 10 pages sharing that one image 1.09 MB → 13.8 MB; re-rendered at 150 DPI q75
  (= compress-pdf rerender defaults, via pdftoppm) 1.28 → 1.63 MB. Raster Letter page PPM: 150/300/600 DPI = 6.3/25.2/101 MB.);
  privacy → guides/does-webp-keep-metadata/ (problem-aware; tools image-compressor + exif-viewer + image-metadata-remover.
  MEASURED /tmp/drip25/webp: Pillow 13 / libwebp 1.6.0 WebP with EXIF+GPS, XMP, ICC (VP8X ICCP VP8 EXIF XMP). IM 6.9.11 webp→webp
  and →png kept EXIF+GPS+ICC, dropped XMP (IM flagged our XMP invalid: caveat in copy); →jpg wrote APP1 WITHOUT "Exif\0\0" header
  (Pillow + exifr read 0 tags, author string still in bytes); -strip → bare VP8; Pillow default save → nothing, pass-through →
  all; Chromium 145 canvas webp (= image-compressor) and jpeg 0.92 → sRGB ICC only.)
  (1,074–1,400 words incl. tables + FAQ + related; FAQ 5 each + Article/Breadcrumb/FAQPage LD; 0 em dashes; 0 broken internal
  links; titles 55–57 chars, descs 146–153.) Guide backlinks added on social-security-disability-benefits-calculator,
  pdf-password-tools/unlock, image-compressor, and guides/how-much-does-ssdi-pay, why-does-my-pdf-print-blank,
  do-png-files-have-metadata.
  BUG FOUND (JS untouched per drip rule, need Stu go-ahead): exif-viewer's exifr 7.1.3 throws "Unknown file format" on EVERY
  WebP (even with a full EXIF chunk), and the page accepts image/*. The guide says so plainly. Fix options: parse WebP RIFF EXIF
  chunk manually and hand the TIFF bytes to exifr, or show a "WebP not supported yet" message instead of a silent fail.
  Also seen in a local headless check: bmi-calculator calc() throws "Cannot read properties of null (reading 'value')" on
  #height at load (line ~219); check on prod.
- 2026-10-25 depth passes (next two in the 900–1000 band):
  honeymoon-budget-calculator (956 → 1,681; +preset totals table run through the page's formula (road trip $2,261, Caribbean
  $4,433, Hawaii $6,622, Europe 8 n @12% $6,261, South Pacific $11,825; lodging share 36–47%), +Caribbean 4–14 nights table
  (per day $646 → $483), +registry net-of-fee table at 0/2.9/5/9.65%, +where-to-cut section; FAQ 5 / LD 4 → 7 / 7 synced).
  FIXED: generic answer box → real answer.
  dog-pregnancy-calendar (924 → 1,749; +bred-on-the-1st 2026 due-date table (day 63, 58–72 window, day-57 temp start; Sep 1 →
  Nov 3 matches page), +week-by-week table (wk 9 = day 57+ per page JS), +why-the-date-is-off section (ovulation-timed whelping
  62–64 d); FAQ 5 / LD 4 → 7 / 7 synced). FIXED: generic answer box; FAQ palpation "days 26-32" → 28-32 to match the
  calendar's milestone (JS) and copy. JS byte-identical on both (inline-script md5 vs pre-edit copy).
- 2026-10-25 hub updates: guides hub +3 cards, count claims 615→618 in all 9 places (= 618 on-disk dirs), More Guides badge
  553→556; all-tools Guides section regenerated by deploy.sh.
  Queue state: next depth candidates: re-scan the 900–1000 band (honeymoon + dog-pregnancy done); skip credit-card-payoff until
  the cannibalization call. Guide intake ideas: "SSI asset limit: what counts" (SS; check ssdi-vs-ssi overlap, only if it can go
  deeper on ABLE accounts / spend-down), "how to make a PDF smaller for printing" NO (covered today) → "why is my PDF printing
  so slowly" only if distinct, else "how to print a PDF without margins"; "does AVIF keep metadata" (privacy; same harness,
  check Pillow AVIF support first).
  STILL OPEN (need Stu): as 10-23 list minus pregnancy-due-date (fixed in 25470422c), plus exif-viewer WebP and bmi load error.

- 2026-10-26 batch guides (10-25 intake ideas; dedupe: ssdi-vs-ssi has two sentences on resources only; "why is my PDF printing
  so slowly" DROPPED, why-wont-my-pdf-print already covers spool size → took the fallback "print a PDF without margins" (the A4
  guide only mentions margins in a scaling context; how-to-crop-a-pdf is about the file, not the print dialog); Pillow 13 has AVIF):
  SS cluster → guides/ssi-asset-limit/ (problem/solution-aware; tools social-security-disability-benefits-calculator +
  net-worth-calculator + -denial-calculator. VERIFIED: eCFR 20 CFR 416.1205 limit table (1985 $1,600 … 1989 $2,000/$3,000),
  416.1207 first moment of month, 416.1212/1216/1218/1230/1231/1233/1242/1202; SSA "Understanding SSI - Resources" 2026 via
  archive.org (ssa.gov 403s curl): digital wallets count, tax refunds/EITC 12 mo, ABLE $100k; SSA ABLE spotlight 2026: onset
  before 46 from 2026-01-01, contribution limit $20,000 (NOT $19,000; some secondary sites are stale), ABLE to Work +$15,960
  continental, over $100k → SSI suspended, Medicaid continues; POMS SI 01150.111 TN 60: months = value ÷ (FBR + fed-admin state
  supp), 2 dp, round down, cap 36 (eCFR 416.1246 still says 24 mo; statute/POMS govern). SSA SSIamts: FBR 1989 $368 → 2026 $994
  (limit at FBR pace ≈ $5,402); 2027 FBR $1,029 / $1,544 (3.6% COLA), so update transfer-penalty table in January.);
  PDF → guides/how-to-print-a-pdf-without-margins/ (problem-aware; tools crop-pdf + rotate-pdf + compress-pdf. COMPUTED: Fit
  scale on a full-bleed page = min((W−2h)/W,(H−2h)/H): 3 / 4.2 / 6.35 mm edge → Letter 97.2/96.1/94.1%, A4 97.1/96.0/94.0%;
  crop-then-fit with crop-pdf's default 12 pt padding into an 8.0×10.5 in printable area: 0.5/0.75/1/1.25/1.5 in margins →
  102/107/112/119/126% (11 pt → 12.4 pt at 1 in), height-limited.);
  privacy → guides/does-avif-keep-metadata/ (problem-aware; tools image-compressor + exif-viewer + image-metadata-remover.
  MEASURED /tmp/drip26/avif: Pillow 13 AVIF with EXIF+GPS, XMP (mime item), ICC (colr prof). ImageMagick 6.9.11 / libheif 1.15.1
  reads EXIF only: avif→avif and -strip drop EVERYTHING; →jpg/→webp keep EXIF+GPS; →png keeps eXIf AND writes 13 tEXt chunks with
  GPS in plain text; XMP + ICC lost on every IM route. Pillow default save drops EXIF/XMP in all formats (AVIF/PNG keep ICC).
  Chromium 145: decodes AVIF; canvas toBlob('image/avif') silently returns image/png; canvas webp/jpeg → sRGB ICC only. Real
  exif-viewer page (local, after fix below) reads AVIF EXIF + GPS; no XMP.)
  (1,095–1,414 words incl. tables + FAQ + related; FAQ 5 each + Article/Breadcrumb/FAQPage LD; 0 em dashes; 0 broken internal
  links; titles 55–58 chars, descs 151–155.) Guide backlinks added on social-security-disability-benefits-calculator, crop-pdf,
  image-compressor, and guides/ssdi-vs-ssi, how-to-print-an-a4-pdf-on-letter-paper, does-webp-keep-metadata.
  FIXED (script src only, same library + version): exif-viewer AND ai-image-detector loaded
  cdn.jsdelivr.net/npm/exifr@7.1.3/full.umd.js, which is a 404 (real path /dist/full.umd.js), so `exifr` was undefined and both
  tools were dead on prod since 7a371dc26 (2026-08-28). Earlier guides' "exif-viewer" measurements used a local copy of the
  library, not the live page. Playwright on the fixed local page: AVIF + WebP originals show Make/Artist/GPS; canvas-stripped → none.
  BUG FOUND (not fixed, needs Stu: version swap, not a path fix): qr-code-with-logo and qr-code-batch load
  qrcode@1.5.3/build/qrcode.min.js → 404 (1.5.x ships no build/; 1.4.4/build/qrcode.min.js is 200). Sitewide jsdelivr audit of
  59 URLs: only these + exifr were real 404s (esrgan-slim base path and svgedit are dynamic, not broken).
  Note: every tool page throws pageerror "Y" ×2–4 under local headless (also untouched pages like mpg-calculator); likely an
  ad/analytics script on localhost. Check on prod before chasing.
- 2026-10-26 depth passes (900–1000 band re-scan with /tmp/drip26/wc.py, which reads ~3% lower than earlier counts; picked
  the lowest real calculator + highest-CPC page, skipping credit-card-payoff (cannibalization), pet-tools (hub), rap-…-50000
  (longtail)):
  slope-calculator (928 → 1,530; +real-life specs table (ADA 1:12 ramp / 1:48 cross slope, IPC 704.1 drain ¼ and ⅛ in/ft, IRC
  7¾/10 stairs, 4/12 and 12/12 pitch → m / % / °), +degrees→slope table 1–60° with rise per 12 in, +common mistakes; FAQ 6 / LD 4
  → 8 / 8 synced). FIXED: generic answer box → real answer.
  pain-and-suffering-calculator (984 → 1,526; +fault table on the page-default $45,000 claim under pure / 50% bar / 51% bar /
  contributory (FL 51% since HB 837, 2023), +take-home table 33⅓% vs 40% fee, $1,500 costs, $12,000 liens → $16,500 / $13,500,
  policy-limit note (CA min BI $30k, FL no BI requirement); FAQ 5 / LD 4 → 7 / 7 synced; guide link added in related).
  FIXED: generic answer box. JS byte-identical on both (inline-script md5 asserted).
- 2026-10-26 hub updates: guides hub +3 cards, count claims 618→621 in all 9 places (= 621 on-disk dirs), More Guides badge
  556→559; all-tools Guides section regenerated by deploy.sh.
  Queue state: next depth candidates (my counter): dog-dna-test-cost-comparison (933), oee-calculator (943),
  quinceanera-cost-calculator (956), mpg-calculator (970), vet-visit-cost-calculator (970). Guide intake ideas: "how much
  can you have in the bank on SSI" NO (covered today) → "SSI and inheritance: what happens" (check ssi-asset-limit overlap; only if
  it can go deeper on disclaimers = transfers, special needs trusts); "how to print a PDF as a booklet" (check organize-pdf);
  "does JPEG XL keep metadata" only if Pillow/IM here support JXL, else "do Google Photos downloads keep metadata" (hedge-free only
  if testable).
  STILL OPEN (need Stu): as 10-25 list minus exif-viewer WebP (fixed in 11f40ea9f), plus qrcode@1.5.3 404 on 2 QR tools.

- 2026-10-27 batch guides (10-26 intake ideas, all three taken; dedupe: no SSI guide mentions inheritance; "booklet" only appears in
  passing on crop-pdf/word-to-pdf; JXL testable via pillow-jxl-plugin 1.3.8 on Pillow 13, IM 6.9.11 has no JXL):
  SS cluster → guides/inheriting-money-on-ssi/ (problem-aware; tools social-security-disability-benefits-calculator +
  net-worth-calculator + social-security-calculator. VERIFIED secure.ssa.gov POMS today: SI 00830.550 (12/16/2025) inheritance =
  death benefit, income in the first month it has value and can be used, date = earlier of alleged receipt or estate closing,
  inherited house lived in → PMV; SI 00830.545 death benefits count only above last-illness + burial costs the person paid (list
  incl. funeral clothes, food for visiting relatives, taxi fare); SI 01120.215 resource from the next month, co-heirs refusing
  consent → not a resource until probate; SI 01150.110 refusing an inheritance = transfer ("constructively received"), as is
  transferring income in the month of receipt; SI 01150.007 spend-down at FMV OK; SI 01120.203 SNT under 65 + payback, self-
  established since 12/13/2016; SI 02301.205 12 consecutive months suspension → termination; 20 CFR 416.420(a) 2-month lag.
  Example: $30,000 − $4,000 funeral = $26,000 counted; refuse → 26 months (26.16). PMV 2026 $351.33.);
  PDF → guides/how-to-print-a-pdf-as-a-booklet/ (solution-aware; tools extract-pdf-pages (keeps typed order when "Keep document
  order" unticked; parsePageSpec dedups, fine for imposition) + pdf-merge (pad with blank-page PDF; no tool here inserts blanks) +
  pdf-page-numbers. VERIFIED Adobe KB "Print booklets in Acrobat Reader" (archive.org 2026-10-07): Booklet subset Both / Front only
  / Back only, Sheets from auto (16 pp → sheets 1–4), Binding Left/Right/Left (Tall)/Right (Tall). COMPUTED imposition orders
  6–24 pp (front N−2s,1+2s / back 2+2s,N−1−2s) and best-case scale = min(cell/page): Letter→Letter 64.7% (12 pt → 7.8),
  A4→A4 70.7%, Legal 77.3%, Tabloid 100%, A3 for A4 100%.);
  privacy → guides/does-jpeg-xl-keep-metadata/ (problem-aware; tools exif-viewer + image-metadata-remover + image-compressor.
  MEASURED /tmp/drip27/jxl: src.jpg 294,340 B with EXIF+GPS+XMP+ICC; plugin-default lossless transcode 228,751 B (−22.3%) keeps
  EXIF+GPS+XMP in brob (Brotli) boxes, "Jane Doe" NOT greppable, decodes to a byte-identical JPEG (md5 match); pixel re-encode q90
  201,356 B keeps Exif box (plugin copies EXIF by default), drops XMP; JXL→JXL re-save same; Pillow default → JPG/PNG/WebP strips
  all (PNG keeps ICC); manual exif pass-through from pixel JXL → malformed APP1 (name still in bytes). Chromium 145.0.7632.6
  DECODES JXL (img.decode OK); canvas webp/jpeg → no EXIF/GPS/XMP, sRGB ICC; toBlob('image/jxl') → image/png.)
  (1,147–1,391 words incl. tables + FAQ + related; FAQ 5 each + Article/Breadcrumb/FAQPage LD; 0 em dashes; 0 broken internal
  links; titles 55–58, descs 145–156.) Guide backlinks on social-security-disability-benefits-calculator, extract-pdf-pages,
  exif-viewer, and guides/ssi-asset-limit, how-to-print-a-pdf-without-margins, does-avif-keep-metadata.
  BUG FOUND (JS untouched, needs Stu): exif-viewer says "No EXIF metadata found" on a JXL WITH full EXIF+GPS (exifr 7.1.3 has no
  JXL parser) → false all-clear on a privacy tool; the guide says so plainly. Fix = JXL box walker like the WebP one (Exif box:
  skip 4-byte offset → TIFF), but brob-compressed boxes need Brotli in the browser, so at minimum show "JPEG XL not supported yet".
  Also image-compressor rejects JXL (type whitelist) although Chromium 145 decodes it: adding 'image/jxl' (+ '.jxl' in accept)
  would make it a working in-browser JXL metadata stripper.
- 2026-10-27 depth passes (first two from the 10-26 candidate list):
  oee-calculator (943 → 1,482; +six big losses table (Nakajima TPM: breakdowns/setup → A, minor stops/reduced speed → P,
  defects/startup → Q) with first fixes, +what-each-OEE-point-is-worth table on the page's own 480 min / 1.5 min shift (320 cap;
  3.2 parts/shift/pt = 1,600/yr at 500 shifts; 60→77.5% = +56/shift), note that the JS caps P at 100%; FAQ 6 / LD 4 → 8 / 8 synced
  (LD was already out of sync: 6 visible vs 4 LD)). FIXED: generic answer box → real answer.
  dog-dna-test-cost-comparison (933 → 1,465; +multi-dog cost table from the page's KITS array (typical = (sale+list)/2, Math.round
  like money()), +clear/carrier/at-risk results table, +recessive breeding odds table (carrier×carrier 25/50/25), +MDR1 paragraph;
  FAQ 6 / LD 6 → 8 / 8 synced). FIXED: generic answer box. No new vendor price claims (page prices still "late 2025": re-verify
  vendor prices on the next pass). JS byte-identical on both (inline-script md5 asserted).
- 2026-10-27 hub updates: guides hub +3 cards, count claims 621→624 in all 9 places (= 624 on-disk dirs), More Guides badge
  559→562; all-tools Guides section regenerated by deploy.sh.
  NOTE: the Hermes gateway's quality-wave job ran `git add -A` at 06:28 while this batch was mid-flight, so today's guides, depth
  passes and hub edits landed inside a4b132251 ("deploy.sh: sitemap generator skips noindex pages"), not a content-drip commit.
  Queue state: next depth candidates: quinceanera-cost-calculator (956), mpg-calculator (970), vet-visit-cost-calculator (970),
  bathroom-remodel-cost-calculator (971) (skip credit-card-payoff (cannibalization), pet-tools (hub), rap-…-50000 (longtail),
  minify-html/csv-to-excel only if nothing else). Guide intake ideas: "SSI and life insurance" NO (covered in inheriting-money-
  on-ssi) → "can you have a savings account on SSI" only if it beats ssi-asset-limit on a distinct intent, else "SSI overpayment
  waiver" (check what-to-do-about-an-ssdi-overpayment overlap); "how to print a PDF double-sided" (check why-wont-my-pdf-print);
  "does HEIF/HEIC from Android keep metadata" only if testable here, else "do screenshots on iPhone have location" (check
  do-screenshots-have-metadata).
  STILL OPEN (need Stu): as 10-26 list minus the qrcode 404 (fixed in cde4e5ae5), plus exif-viewer JXL false negative and
  image-compressor JXL whitelist.

- 2026-10-28 batch guides (10-27 intake ideas; dedupe: "savings account on SSI" DROPPED, ssi-asset-limit already answers it
  (bank accounts count, first-of-month rule) → took the fallback "SSI overpayment waiver" (what-to-do-about-an-ssdi-overpayment
  is Title II: 50% default, only 2 SSI sentences); why-wont-my-pdf-print has 0 duplex mentions; "do iPhone screenshots have
  location" DROPPED, do-screenshots-have-metadata already answers it, and Android HEIC isn't testable here → took a measurable
  privacy format: GIF):
  SS cluster → guides/ssi-overpayment-waiver/ (problem-aware; tools social-security-disability-benefits-calculator +
  net-worth-calculator + social-security-calculator. VERIFIED eCFR today: 20 CFR 416.550 (without fault + defeat purpose /
  equity / small amount), .551 (partial waiver $390/$260/$130), .552 (SSA fault alone ≠ without fault; limitations considered),
  .553(b) (current recipients pass if income ≤ FBR + $20 + $65 + state supp → $1,014 / $1,079 in 2026), .554, .555 (no $ figure
  in reg, so none stated), .556 ($50-or-less excess resources → waived unless willful), .557 (personal conference, file review
  ≥5 days before, in person/phone/video), .570 (dedicated account can't repay), .571 (lesser of payment or 10% of total income;
  not for fraud/concealment), .573 (CPR 10% of Title II). POMS SI 02220.016, SI 02220.026 (10/03/2024: withholding starts 60 days
  after notice if no response in 30; negotiate 12 mo, else 60, SSA-634 beyond), SI 02220.020 (CPR criteria incl. no pending
  waiver/recon). 10% of $994 = $99.40; repay table $500–$10,000. SI 02260.* (waiver chapter) 404s on secure.ssa.gov and
  policy.ssa.gov today, so regs were the source.);
  PDF → guides/how-to-print-a-pdf-double-sided/ (problem/solution-aware; tools extract-pdf-pages (typed order, "Keep document
  order" unticked → reversed evens e.g. 10,8,6,4,2) + organize-pdf + pdf-merge (blank page pad). VERIFIED CUPS options doc
  (openprinting.github.io): sides=two-sided-long-edge (portrait) / short-edge (landscape), outputorder=reverse; page-set is NOT
  in the current doc so not used. Adobe duplex KB 403/404 via curl + archive (429), so Acrobat labels kept to the long-stable
  ones (Print on both sides of paper; More Options → Odd or Even Pages; Reverse pages). COMPUTED sheet table 7–250 pp.);
  privacy → guides/does-gif-keep-metadata/ (problem-aware; tools exif-viewer + image-metadata-remover + image-compressor.
  MEASURED /tmp/drip28/gif with a GIF block walker: src.jpg 294,340 B EXIF+GPS+XMP+ICC → Pillow 13 GIF 610,325 B writes NOTHING
  even with exif=/xmp=/icc_profile= passed (only comment=); IM 6.9.11 1,212,530 B keeps ICC (ICCRGBG1) only, -strip nothing.
  Hand-built "XMP DataXMP" GIF with GPS: IM gif→gif keeps it (ID rewritten lowercase), →jpg/png drops, -strip removes. Animated
  12-frame GIF: IM -strip keeps 12 frames + loop, drops comment (4,983 → 4,013 B). Chromium 145 local: image-compressor GIF →
  1-frame PNG/WebP, no metadata; canvas toBlob('image/gif') → image/png.)
  (1,184–1,394 words incl. tables + FAQ + related; FAQ 5 each + Article/Breadcrumb/FAQPage LD; 0 em dashes; 0 broken internal
  links; titles 44–57, descs 147–149.) Guide backlinks on social-security-disability-benefits-calculator, organize-pdf,
  extract-pdf-pages, exif-viewer, image-metadata-remover, and guides/what-to-do-about-an-ssdi-overpayment, ssi-asset-limit,
  how-to-print-a-pdf-as-a-booklet, why-wont-my-pdf-print, does-webp-keep-metadata, do-png-files-have-metadata.
  BUG FOUND (JS untouched, needs Stu): exif-viewer on a GIF whose XMP holds GPS says "No EXIF metadata found" AND "No GPS data
  present in this file" → second false all-clear after JXL (exifr has no GIF parser). Guide says so and gives the text-editor
  check. Minimal fix: for image/gif (and jxl) show "this format isn't fully checked" instead of "No GPS data present".
- 2026-10-28 depth passes (first two from the 10-27 candidate list):
  quinceanera-cost-calculator (956 → 1,725; +cost-by-guest-count table from the page's PRESETS (budget $4,750 fixed + $21.75/guest,
  classic $9,650 + $32, grand $19,100 + $53; 100–300 guests), +where-to-cut table on classic/175 (each swap alone; all at 150
  guests → $7,950), +padrino sponsorship → calculator-line table, +20% catering service-charge note (conditional, no new vendor
  prices); FAQ 6 / LD 4 → 8 / 8 synced (LD was out of sync)). FIXED: generic answer box → real answer.
  mpg-calculator (970 → 1,591; +pump-shutoff error table on the page's 312 mi / 11.9 gal (±0.3 gal = ±2.5% one tank, ±0.8% over
  three; full-to-full error only in first/last fill), +odometer/tire and E10 (~3% less energy) notes, +MPG-illusion table at
  page defaults 13,500 mi / $3.45 (10→12 = 225 gal = $776/yr vs 30→40 = 112 gal = $388; Larrick & Soll, Science 2008); FAQ 5 /
  LD 4 → 7 / 7 synced). FIXED: generic answer box. JS byte-identical on both (inline-script md5 asserted); headless: $15,250 and
  26.2 mpg.
- 2026-10-28 hub updates: guides hub +3 cards, count claims 624→627 in all 9 places (= 627 on-disk dirs), More Guides badge
  562→565; all-tools Guides section regenerated by deploy.sh (gen-all-tools.py).
  Queue state: next depth candidates: vet-visit-cost-calculator (970), bathroom-remodel-cost-calculator (971), then re-scan the
  970–1000 band (skip credit-card-payoff (cannibalization), pet-tools (hub), rap-…-50000 (longtail)). Guide intake ideas: "SSI
  overpayment from a bank account over the limit: what to do" NO (covered today) → "SSI and marriage: what changes" (check
  ssdi-vs-ssi overlap; couple rate $1,491, deeming); "how to print a PDF in black and white" (check why-wont-my-pdf-print);
  "does TIFF keep metadata" (testable with Pillow/IM; check what reads it).
  STILL OPEN (need Stu): as 10-27 list, plus exif-viewer GIF/XMP false "No GPS data present".

- 2026-10-29 batch guides (10-28 intake ideas, all deduped: ssdi-vs-ssi / ssi-asset-limit only state the $1,491 couple rate and
  $3,000 limit, no deeming or holding-out; why-wont-my-pdf-print + the 4 print guides have 0 grayscale/black-and-white mentions;
  TIFF only appears in passing in does-webp-keep-metadata / exiftool-alternatives):
  SS cluster → guides/ssi-and-marriage/ (problem-aware; tools social-security-disability-benefits-calculator + net-worth-calculator
  + marriage-tax-penalty-calculator. VERIFIED eCFR title 20 (versioner API, current to 2026-10-26): 416.1802 (ineligible vs
  eligible spouse; (d)(1) status fixed at start of month, marry on the 1st = single until next month), 416.1806 (legal marriage,
  spouse-benefit entitlement, or living together + holding out), 416.1163 (child allocation = couple FBR − individual FBR = $497,
  reduced by child's income; no deeming if spouse's remainder ≤ $497; else couple computation with $20 + $65 + ½ exclusions
  vs $1,491; lesser-of rule (e)(2); second-prior-month income (e)(1); deeming stops the month after separation/divorce/death),
  416.1202(a) (ineligible spouse's IRA/work pension/Keogh excluded), 416.1205(c) ($2,000 / $3,000 since 1989). COMPUTED:
  two singles $1,988 vs couple $1,491 = −$497/mo, −$5,964/yr; spouse wages table $800–$3,000 (cut starts > $1,079, zero at
  $3,067; $1,600 → $733.50, with one child → $982); spouse SSDI/retirement table $500–$1,630 (cut starts > $517, zero at $1,511,
  so avg SSDI $1,630 ends federal SSI). ISM food exclusion from 2024-09-30 stated; no state-supplement figures.);
  PDF → guides/how-to-print-a-pdf-in-black-and-white/ (problem/solution-aware; tools extract-pdf-pages (color pages "3,7,12-14"
  vs rest "1-2,4-6,8-11,15-40") + pdf-split + pdf-merge. VERIFIED: CUPS source (OpenPrinting/cups cups/ppd-cache.c) uses IPP
  print-color-mode=monochrome (falls back to process-monochrome); it is NOT in the CUPS options doc, so lpoptions -l is given for
  driver names. Ghostscript VectorDevices doc: -sColorConversionStrategy=Gray converts all colors to DeviceGray, no
  ProcessColorModel needed since 9.11. Acrobat "Print in grayscale (black and white)", Chrome Color menu hidden for printers that
  don't report color, Preview Quartz Filter Black & White / Gray Tone. Ink claims hedged ("many inkjets").);
  privacy → guides/does-tiff-keep-metadata/ (problem-aware; tools exif-viewer + image-metadata-remover + image-compressor.
  MEASURED /tmp/drip29/tiff with a TIFF IFD walker (tiffwalk.py): src.jpg 294,340 B EXIF+GPS+XMP+ICC → Pillow 11.3 default TIFF
  5,760,740 B ICC only; exif= passed → Make/Model/Software/Artist/ExifIFD/GPS + ICC, no XMP; LZW 6,760,096 B (> raw).
  IM 6.9.11-60 jpg→tif keeps XMP (creator name) + ICC, DROPS EXIF/GPS; zip 2,436,501 B / jpeg 486,423 B same tags; -strip none;
  3-page tif -strip keeps 3 pages. Re-save TIFF(EXIF+GPS) → IM and Pillow keep ICC only; TIFF→JPG drops EXIF (Pillow keeps
  with exif=); IM XMP-TIFF → JPG keeps XMP. Chromium 145.0.7632.6: exif-viewer reads TIFF EXIF + GPS (warning shown) but does
  not surface XMP; img.decode() on TIFF → EncodingError, so image-compressor can't take TIFF (silently does nothing).)
  (1,193–1,399 words incl. tables + FAQ + related; FAQ 5 each + Article/Breadcrumb/FAQPage LD; 0 em dashes; 0 broken internal
  links; titles 50–53, descs 143–153.) Guide backlinks on social-security-disability-benefits-calculator,
  marriage-tax-penalty-calculator, extract-pdf-pages, exif-viewer, image-metadata-remover, and guides/ssi-asset-limit, ssdi-vs-ssi,
  ssi-overpayment-waiver, how-to-print-a-pdf-double-sided, why-wont-my-pdf-print, does-gif-keep-metadata,
  do-png-files-have-metadata.
- 2026-10-29 depth passes (the two from the 10-28 candidate list):
  vet-visit-cost-calculator (970 → 1,617; +annual-visit-by-region table from the page's ROUTINE/EMERGENCY arrays × region factors
  (dog $189/$210/$241/$273, cat $149/$165/$190/$215, ER workup $585/$650/$747/$845; JS Math.round semantics), +GP-vs-ER line-item
  table (exam +177%, bloodwork +47%, X-rays +43% w/ the views caveat), +hospital-nights table 1–4 nights on exam+blood+X-ray+IV
  ($1,670 / $2,570 / $3,470 / $4,370 typical); FAQ 6 / LD 4 → 9 / 9 synced (LD was out of sync)). FIXED: generic answer box.
  bathroom-remodel-cost-calculator (971 → 1,626; +size × level table 25–100 sq ft from BATH_RATE, +budget → sq ft table
  ($10k = 14 sq ft midrange → cosmetic-refresh money), +move-plumbing 8% table (applies to sf×rate only, not add-ons), +flat
  add-on note (40 sq ft midrange + all 4 upgrades = $40,200 = $1,005/sq ft); FAQ 6 / LD 4 → 9 / 9 synced). FIXED: generic answer
  box. JS byte-identical on both (inline-script md5 asserted); headless defaults $210 and $28,000. No new vendor price claims
  (vet page footnote still says "late 2025": re-verify on a later pass).
- 2026-10-29 hub updates: guides hub +3 cards, count claims 627→630 in all 9 places (= 630 on-disk dirs), More Guides badge
  565→568; all-tools Guides section regenerated by deploy.sh.
  Queue state: next depth candidates: re-scan the 970–1000 band with /tmp/drip29/wc.py (skip credit-card-payoff
  (cannibalization), pet-tools (hub), rap-…-50000 (longtail)). Guide intake ideas: "SSI and living with family" (in-kind support /
  one-third reduction; check ssi-and-marriage + ssi-asset-limit overlap), "how to print a PDF without color on a Mac" NO (covered
  today) → "how to print multiple pages on one sheet of a PDF" (check how-to-print-a-pdf-as-a-booklet), "does BMP keep
  metadata" (testable; likely short → maybe "does HEIC keep metadata when converted to JPG" if Pillow-heif is available).
  BUG FOUND (pre-existing, JS untouched, needs Stu): bmi-calculator throws TypeError "Cannot read properties of null (reading
  'value')" in calc() on page load (headless Chromium 145, local). Also image-compressor silently ignores TIFF (accept image/*
  lets it through, browser can't decode) → should say "TIFF isn't supported in this browser".
  STILL OPEN (need Stu): as 10-28 list (exif-viewer JXL/GIF false negatives, image-compressor JXL whitelist, dog-dna prices).

- 2026-10-30 batch guides (10-29 intake ideas, all deduped: ssi-and-marriage has one ISM sentence, ssi-asset-limit none, so no
  VTR/PMV/pro-rata/business-arrangement coverage; how-to-print-a-pdf-as-a-booklet only mentions "2 per sheet" as a booklet step;
  BMP appears only in passing in 4 guides; HEIC→JPG metadata already covered by does-converting-heic-to-jpg-keep-metadata):
  SS cluster → guides/ssi-and-living-with-family/ (problem-aware; tools social-security-disability-benefits-calculator +
  rent-calculator + net-worth-calculator. VERIFIED eCFR title 20 (versioner API, current to 2026-10-26, text in /tmp/drip30/cfr):
  416.1130(b)(1) (ISM = shelter only; business arrangement = required rent ≥ PMV, else ISM = PMV or CMRV − rent), 416.1131 (VTR
  needs another's household + shelter + ALL meals; all-or-nothing; no exclusions on it), 416.1132 (own household if owner/life
  estate/liable on lease/pro rata/public-assistance HH; parent of minor = deeming not ISM), 416.1133 (pro rata = HH operating
  expenses / people regardless of age, 12-mo avg), 416.1140 (PMV = ⅓ FBR + $20; can rebut with actual value), 416.1142 (public
  assistance HH = SSI + ≥1 other member on SNAP/TANF/SSI/need-based VA/state aid → no ISM from HH). COMPUTED 2026: VTR $331.33 →
  $662.67; PMV $351.33 (with $20 GIE, max cut also $331.33 when no other income); rent table $0–$352 by "all meals" vs "own
  food" ($100 → $662.67 vs $762.67); with $500 SSDI: none $514 / VTR $182.67 / PMV $162.67 / PMV+$200 rent $362.67.);
  PDF → guides/how-to-print-multiple-pages-on-one-sheet-pdf/ (solution-aware; tools pdf-merge (n-up restarts per job → merge
  first) + extract-pdf-pages + organize-pdf. Where-it-lives table (Acrobat Multiple, Chrome/Edge/Firefox More settings, Preview
  Layout, Windows driver, CUPS lp -o number-up/number-up-layout/page-border). COMPUTED scale of a portrait Letter page in an
  N-up cell on Letter, margins ignored, 2/6-up landscape: 65/50/39/33/25% → 12 pt = 7.8/6.0/4.6/4.0/3.0 pt; 40-page sheet
  counts.);
  privacy → guides/does-bmp-keep-metadata/ (problem-aware; tools exif-viewer + image-compressor + image-metadata-remover.
  MEASURED /tmp/drip30/bmp with a BMP header walker (bmpwalk.py) on the drip29 src.jpg (EXIF+GPS+XMP+588 B ICC): Pillow 11.3
  BMP 5,760,054 B, 40-byte header, 96 dpi stamped, nothing else; exif=/icc_profile= silently ignored (identical bytes). IM
  6.9.11-60 default V5 5,760,726 B with the embedded 588 B ICC (== source); -strip V5 sRGB no profile; BMP3 40-byte header but
  ICC still appended after the pixels (offset 5,760,054). IM BMP→JPG keeps ICC, no EXIF. Chromium 145: exif-viewer "No EXIF /
  No GPS" (correct for BMP); image-compressor q80 on the BMP: WebP 92.92 KB (−98.3%) / JPEG 227.51 KB / PNG 3.3 MB, no EXIF;
  JPEG/WebP get Chrome's own 456 B sRGB profile.)
  (1,186–1,398 words incl. tables + FAQ + related; FAQ 5 each + Article/Breadcrumb/FAQPage LD; 0 em dashes; 0 broken internal
  links; titles 49–57, descs 135–150.) Guide backlinks on social-security-disability-benefits-calculator, rent-calculator,
  pdf-merge, organize-pdf, exif-viewer, image-compressor, and guides/ssi-and-marriage, ssi-asset-limit, ssi-overpayment-waiver,
  how-to-print-a-pdf-as-a-booklet, how-to-print-a-pdf-double-sided, how-to-print-a-pdf-in-black-and-white,
  does-tiff-keep-metadata, do-screenshots-have-metadata, do-png-files-have-metadata.
- 2026-10-30 depth passes (from the 970–1000 re-scan with wc.py):
  driveway-paving-cost-calculator (983 → 1,705; +size table 200–1,200 sq ft at $10/$12 with $7–13 / $8–18 ranges, +horizon
  table 5–30 yrs on the page's own seal/replacement logic with break-even concrete price ($10.35 → $11.40 up to 20 yrs, jumps to
  $21.40 once asphalt needs replacing), +seal interval × rate grid at 20 yrs (3-yr at ≥$0.35 beats concrete's $7,200), +honest
  note that the JS only schedules seals in the first asphalt life; FAQ 5 / LD → 7 / 7 synced). FIXED: generic answer box.
  window-replacement-cost-calculator (992 → 1,518; +frame × glass per-window grid (vinyl clear $523 → wood triple $1,141),
  +retrofit/full-frame/2-story table for 10 vinyl vs fiberglass (+32% / +14% / +45% on vinyl), +window-count budget table 6–20
  (vinyl range, fiberglass, wood; volume discount not in calc, stated); FAQ 6 / LD → 8 / 8 synced). FIXED: generic answer box.
  JS byte-identical on both (inline-script md5 asserted); headless: $6,000 vs $7,200 and $5,500. No new vendor price claims.
- 2026-10-30 hub updates: guides hub +3 cards, count claims 630→633 in all 9 places (= 633 on-disk dirs), More Guides badge
  568→571; all-tools Guides section regenerated by deploy.sh.
  Queue state: next depth candidates: kitchen-remodel-cost-calculator (1,000), wedding-transportation-cost-calculator (996),
  wedding-invitation-cost-calculator (984), corporate-event-budget-calculator (982) (skip credit-card-payoff (cannibalization),
  pet-tools (hub), rap-…-50000 (longtail); dev tools in the band are lower value). Guide intake ideas: "SSI and living in
  someone else's home: how to write a rental agreement" NO (covered today) → "SSI and room and board in a group home" (check
  416.1141(c)/1144 coverage) or "can you get SSI and SNAP at the same time"; "how to print a PDF poster on multiple pages
  (tiling)" (check how-to-print-a-pdf-without-margins); "does ICO keep metadata" is too thin → "does DNG keep metadata"
  (Pillow can't write DNG; check what's testable) or "does screenshot on Mac include metadata" (check do-screenshots-have-metadata).
  NOTE (pre-existing, JS untouched): headless Chromium logs pageerror Error('Y') on load of driveway/window/image-compressor
  pages, identical on the pre-edit file; likely an offline third-party script. Not caused by this batch.
  STILL OPEN (need Stu): as 10-29 list (bmi-calculator calc() TypeError, image-compressor silent TIFF, exif-viewer JXL/GIF
  false negatives, image-metadata-remover JXL whitelist, dog-dna prices).

- 2026-10-31 batch guides (10-30 intake ideas, all deduped: "SNAP" appears in ssi-and-living-with-family only as the public
  assistance household exception; how-to-print-a-pdf-without-margins mentions "posters" once, no tiling; no video-metadata guide
  in the privacy cluster (DNG/Mac-screenshot dropped: not testable here, no exiftool/Mac)):
  SS cluster → guides/can-you-get-ssi-and-snap/ (solution-aware; tools social-security-disability-benefits-calculator +
  rent-calculator + net-worth-calculator. VERIFIED FY2027 SNAP (Oct 1 2026–Sep 30 2027, 48+DC): max 1 = $306, 2 = $562, 4 =
  $1,023, min $25 (PA DHS release 2026-09-29 quoting FNS memo 2026-08-21); std deduction $217 (1–3), shelter cap $769, assets
  $3,000 / $4,750 elderly-disabled (FNS COLA page via search; fns.usda.gov + usda.gov PDF return 403 to curl/WebFetch, Akamai).
  Rules cited from 7 CFR 271.2 / 273.9(d) / 273.2(j)(2) / 273.10(e)(2)(ii) / 273.1, 7 USC 2017(b). COMPUTED on $994 SSI, utilities
  in rent: rent $0/300/500/700/900 → $72/72/106/166/226; +$100 medical at $500 rent → $135; $500 SSDI+$514 SSI at $500 → $97;
  couple $1,491 → $179 / $198 at $700 rent.);
  PDF → guides/how-to-print-a-pdf-poster-on-multiple-pages/ (solution-aware; tools extract-pdf-pages + crop-pdf + jpg-to-pdf.
  COMPUTED sheet counts at 0.25 in margins + 0.25 in overlap, best orientation: 11x17 4/3, 18x24 8/8, 24x36 15/15, 36x48 25/25,
  A2 6/8, A1 12/15 (Letter/A4); tile scale 200/300/400% of Letter → 6/15/24 sheets. TESTED pdfposter 0.9.1 (venv
  /tmp/drip31/pv): 24x36 → 12 Letter pages 3x4 portrait, full-page tiles, no overlap option.);
  privacy → guides/do-videos-have-location-data/ (problem-aware; tools video-watermark + image-metadata-remover + exif-viewer.
  TESTED /tmp/drip31/vid with ffmpeg 5.1.9: 1080p H.264 .mov tagged location ISO 6709 + make/model + creation_time. -c copy → mp4
  and default re-encode keep location (stored as binary 'loci', so byte-search for the digits finds nothing), drop make/model/date;
  VP9 WebM keeps LOCATION + MAKE + MODEL; -map_metadata -1 drops all. Chromium 145 headless on our /video-watermark/ (VP9 mp4 src
  with location): watermarked.webm 778 KB, only encoder=Chrome.)
  (999–1,227 words incl. tables + FAQ + related; FAQ 5 each + Article/Breadcrumb/FAQPage LD; 0 em dashes; 0 broken internal links;
  titles 55–56, descs 143–154.) Guide backlinks on social-security-disability-benefits-calculator, rent-calculator,
  extract-pdf-pages, crop-pdf, video-watermark, exif-viewer, and guides/ssi-and-living-with-family, ssi-asset-limit, ssdi-vs-ssi,
  how-to-print-a-pdf-without-margins, how-to-print-multiple-pages-on-one-sheet-pdf, how-to-print-an-a4-pdf-on-letter-paper,
  how-to-watermark-a-video, how-to-remove-location-from-photos, do-screenshots-have-metadata.
- 2026-10-31 depth passes (from the 10-30 candidate list):
  kitchen-remodel-cost-calculator (1,000 → 1,653; +size × tier table 70–300 sq ft (typical + range), +scope-adder table on 150 sq ft
  midrange ($63,000 → $78,040 with all three), +"costs the calculator leaves out" list; FAQ 6 / LD → 8 / 8 synced). FIXED: generic
  answer box.
  wedding-transportation-cost-calculator (996 → 1,490; +6 common setups with 18% tip vs $750 avg, +shuttle per-rider table
  (50/75/100), +gratuity 15/18/20% table; FAQ 6 / LD → 8 / 8 synced). FIXED: generic answer box.
  All tables computed from each page's own JS constants; no new vendor price claims. Inline JS md5 asserted unchanged on both;
  headless defaults $63,000 and $1398.30.
  NOTE (pre-existing, JS untouched): wedding-transportation fmt() prints "$1398.30" with no thousands separator when cents are
  non-zero (toFixed branch). Cosmetic; needs Stu's OK to touch calculator JS.
- 2026-10-31 hub updates: guides hub +3 cards, count claims 633→636 in all 9 places (= 636 on-disk dirs), More Guides badge
  571→574; all-tools Guides section regenerated by deploy.sh.
  Queue state: next depth candidates: wedding-invitation-cost-calculator (984), corporate-event-budget-calculator (982) (skip
  credit-card-payoff (cannibalization), pet-tools (hub), rap-…-50000 (longtail)). Guide intake ideas: "SSI and room and board in a
  group home" (check 416.1141/1144 vs ssi-and-living-with-family), "how to print a PDF on 11x17 / tabloid" (check
  how-to-print-an-a4-pdf-on-letter-paper + today's poster guide), "do audio files / voice memos have metadata" (ffmpeg + mutagen
  testable; check do-videos-have-location-data overlap).
  STILL OPEN (need Stu): as 10-30 list (bmi-calculator calc() TypeError, image-compressor silent TIFF, exif-viewer JXL/GIF
  false negatives, image-metadata-remover JXL whitelist, dog-dna prices) + wedding-transportation fmt() comma.

- 2026-11-01 batch guides (10-31 intake ideas, all deduped: "group home" / 416.1141 / 416.1144 appear in no SSI guide; "tabloid" /
  "11x17" only in passing in 3 PDF guides; no audio-metadata guide in the privacy cluster; "voice memo" nowhere):
  SS cluster → guides/ssi-in-a-group-home/ (problem-aware; tools social-security-disability-benefits-calculator + net-worth-calculator
  + rent-calculator. VERIFIED eCFR title 20 (versioner API now needs curl --compressed; current to 2026-10-26; text in /tmp/drip32/cfr):
  416.201 (institution = 4+ unrelated + services; public institution excludes publicly operated community residence ≤16; medical
  treatment facility), 416.211 (no SSI for a full month in a public institution, 14-day absence rule; (b) Medicaid >50% → reduced
  rate; (c) ≤16-bed community residence eligible, not if next to a large institution / school / jail / medical; (d) emergency shelter
  6 months in any 9), 416.212 (up to 3 full months at the full rate: physician certifies ≤90 days + home expenses, evidence by
  discharge or day 90), 416.414 ($30 / $60 couple), 416.1140 (PMV = ⅓ FBR + $20, rebuttable), 416.1141(c) (PMV in nonmedical
  institutions), 416.1143 (agency placement: pay the established rate = no ISM), 416.1144 (nonprofit: express obligation; lump-sum
  lifetime prepayment ≠ current payment; no ISM if no obligation and no payment / paid by another nonprofit), 416.1145 (for-profit:
  pay or legally indebted = no ISM). COMPUTED 2026: PMV $351.33 (couple $517.00); someone else pays the fee → $662.67; with $200 /
  $300 / $500 / $600 other income → $462.67 / $362.67 / $162.67 / $62.67; $0 at ≥ $662.67. No state-supplement figures.);
  PDF → guides/how-to-print-a-pdf-on-11x17-paper/ (solution-aware; tools rotate-pdf + crop-pdf + pdf-merge. COMPUTED + TESTED with
  PyMuPDF 1.27.2 (/tmp/drip32/tab; gs/qpdf not installed, CUPS inactive): Letter→Tabloid fit 129.4% (width-limited, 2.76 in blank
  top+bottom), Tabloid→Letter 64.7% (1.38 in side), Tabloid→Legal 77.3%, Tabloid→A3 97.3%, A3→Tabloid 94.1%, A4→A3 141.4%; 12 pt →
  15.5 / 7.8 pt; two Letter pages on 17×11 = exactly 100%; Tabloid 279.4×431.8 mm vs A3 297×420 (A3 17.6 mm wider, 11.8 mm shorter).
  App-settings table (Acrobat Page Setup / "Choose paper source by PDF page size", Chrome/Edge/Firefox More settings → Paper size,
  Preview Paper Size + Scale to Fit, Windows driver, CUPS lp -o media=Tabloid -o fit-to-page) from product knowledge, not run.);
  privacy → guides/do-audio-files-have-metadata/ (problem-aware; tools document-metadata-remover + image-metadata-remover +
  exif-viewer; NO audio tool exists, the guide says so and points to ffmpeg. MEASURED /tmp/drip32/aud with ffmpeg 5.1
  (Lavf59.27.100) + mutagen 1.46 on a 10 s tagged tone: WAV 882,170 B with RIFF INFO (INAM/IART/ICMT/ICRD/ISFT; mutagen reads none,
  ffprobe does); MP3 161,126 B ID3v2.4 (location only as TXXX; tags = 168 B; 1,079 B PNG cover → +1,123 B, written as v2.3); M4A
  83,353 B ilst ©nam/©ART/©day/©cmt/©too + binary loci (grep for the digits: 0 hits); FLAC / Opus / Vorbis LOCATION= plain text
  (1 hit). -c copy keeps everything; M4A→MP3 keeps everything incl. location as TXXX:location text (2 grep hits); MP3→M4A and
  MP3→WAV keep title/artist/album/comment/date; -map_metadata -1 leaves only encoder=Lavf; + -fflags +bitexact leaves nothing.
  Apple Voice Memos "location-based naming" cited as a documented title option; whether phone apps write a GPS atom is hedged.)
  (1,310–1,391 words incl. tables + FAQ + related; FAQ 5 each + Article/Breadcrumb/FAQPage LD; 0 em dashes; 0 broken internal
  links; titles 51–59, descs 152–154.) Guide backlinks on social-security-disability-benefits-calculator, net-worth-calculator,
  rotate-pdf, crop-pdf, document-metadata-remover, exif-viewer, and guides/ssi-and-living-with-family, ssi-asset-limit,
  ssi-and-marriage, how-to-print-a-pdf-poster-on-multiple-pages, how-to-print-an-a4-pdf-on-letter-paper,
  why-are-my-pdf-pages-different-sizes, do-videos-have-location-data, how-to-remove-location-from-photos, do-screenshots-have-metadata.
- 2026-11-01 depth passes (the two from the 10-31 candidate list):
  wedding-invitation-cost-calculator (984 → 1,456; +households × tier grid 50–200 at the defaults (details card, 2 oz rectangle,
  stamped RSVP, postcard save-the-dates; 100 std = $707), +postage-per-100 table (5 setups, $82–$271), +save-the-date table
  ($0 / $140 / $207); FAQ 5 / LD 4 → 7 / 7 synced). FIXED: generic answer box. FIXED (content, pre-existing): the budget worked
  example said "order 80 = $120 … Total $181.50 … 80% smaller" but the JS does Math.round(75 × 1.10) = 83 sets → $124.50, $186,
  74% smaller; prose corrected to match the calculator.
  corporate-event-budget-calculator (982 → 1,454; +headcount × type grid 25–500 at 10% contingency from the MODES sums (160 / 115 /
  290 / 1,950 / 465), +market-tier per-head table (only flagged lines scale: holiday 88 of 160 → $147 / $160 / $173; offsite
  → $2,243 major), +contingency 0–20% table on the $19,200 default; FAQ 5 / LD 4 → 7 / 7 synced). FIXED: generic answer box.
  JS byte-identical on both (inline-script md5 asserted); headless defaults $707 and $21,120. Pre-existing pageerror 'Y' on both
  (same offline third-party script as the 10-30 note).
- 2026-11-01 hub updates: guides hub +3 cards, count claims 636→639 in all 9 places (= 639 on-disk dirs), More Guides badge
  574→577; all-tools Guides 636→639 (gen-all-tools.py, also re-run by deploy.sh); llm.txt 639 guides. Deploy OK first try
  (sitemap 2,022 URLs, 26 files uploaded).
  Queue state: next depth candidates: re-scan the 970–1000 band with /tmp/drip32/wc.py (skip credit-card-payoff (cannibalization),
  pet-tools (hub), rap-…-50000 (longtail), dev tools). Guide intake ideas: "SSI after jail or prison" (416.211(c)(5)(iii) + the
  prerelease procedure; check ssi-overpayment-waiver / ssdi-vs-ssi overlap), "how to print a PDF on legal paper (8.5 × 14)" (check
  today's 11x17 guide + how-to-print-an-a4-pdf-on-letter-paper; Tabloid→Legal 77.3% already computed), "do PDF files have metadata"
  (check pdf-metadata-editor tool page + document-metadata-remover + which-pdf guides first).
  NOTE (pre-existing, JS untouched): wedding-invitation fmt() has the same no-thousands-separator branch as wedding-transportation
  when cents are non-zero (toFixed path), e.g. 150 luxury households would print "$1980.50"-style figures.
  STILL OPEN (need Stu): as 10-31 list (bmi-calculator calc() TypeError, image-compressor silent TIFF, exif-viewer JXL/GIF false
  negatives, image-metadata-remover JXL whitelist, dog-dna prices, wedding-transportation fmt() comma) + wedding-invitation fmt().
