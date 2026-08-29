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

## Schedule
- 06:00 tool-factory (10 tools) — bridge session A
- 06:15 content-drip (3 guides + 2 depth + longtails) — bridge session B (parallel OK)
- 06:30 gh-repo-scan
- 08:00 traffic report
All content: SEO titles/meta, JSON-LD, humanized, indexed (sitemap+IndexNow), interlinked.
