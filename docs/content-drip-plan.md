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
Wave order: savings, salary*, retirement, refinance-break-even*, property-tax, pmi*, payroll, ovulation,
net-worth*, income-tax, credit-card-payoff*, car-payment, dti*, amortization, compound-interest*,
roi, bmi*, calorie, macro, body-fat, bmr, water-intake, ideal-weight, due-date, age-calculator...
(* = matching guide already exists in guides/ — verify on arrival, skip, and log it below)

48 high-value tools currently queued; remainder (currency-converter, qr-code-generator,
password-generator, image-compressor, csv-to-json, prompt-library) follow in wave 2.

### Done (drip log)
- 2026-08-25 guides: pregnancy-due-date → guides/how-due-dates-are-calculated/;
  workers-comp → guides/how-much-does-workers-comp-cost/;
  social-security → guides/when-to-take-social-security/
- 2026-08-25 skipped (guide pre-existing): va-loan (va-loan-funding-fee),
  mortgage (how-to-calculate-mortgage-payment), fha (fha-loan-requirements)
- 2026-08-25 depth passes: pregnancy-due-date-calculator (92 → 900+ words, 2 tables, 4 FAQs + FAQ/Breadcrumb JSON-LD);
  mortgage-calculator (154 → 960+ words, rate table, 4 FAQs + FAQ/Breadcrumb JSON-LD, related links added).
  Skipped va-loan-calculator (827 words, near target, batch-1 depth already applied).

## Schedule
- 06:00 tool-factory (10 tools) — bridge session A
- 06:15 content-drip (3 guides + 2 depth + longtails) — bridge session B (parallel OK)
- 06:30 gh-repo-scan
- 08:00 traffic report
All content: SEO titles/meta, JSON-LD, humanized, indexed (sitemap+IndexNow), interlinked.
