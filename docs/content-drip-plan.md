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
  no other queue pages known under 900 words (next-thinnest real tools:
  roman-numeral-converter 112, token-counter 183, llm-pricing-tracker 232 —
  low-monetization, depth only if queue idle).

## Schedule
- 06:00 tool-factory (10 tools) — bridge session A
- 06:15 content-drip (3 guides + 2 depth + longtails) — bridge session B (parallel OK)
- 06:30 gh-repo-scan
- 08:00 traffic report
All content: SEO titles/meta, JSON-LD, humanized, indexed (sitemap+IndexNow), interlinked.
