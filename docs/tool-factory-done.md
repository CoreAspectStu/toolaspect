
## 2026-08-25 — Batch 1 (Wave 1 finance/insurance)
- refinance-break-even-calculator — live 200, 3x JSON-LD, guide post
- pmi-calculator — live 200, 3x JSON-LD, guide post
- heloc-payment-calculator — live 200, 3x JSON-LD, guide post
- closing-cost-calculator — live 200, 3x JSON-LD, guide post
- fha-loan-calculator — live 200, 3x JSON-LD, guide post
- va-loan-calculator — live 200, 3x JSON-LD, guide post
- home-equity-calculator — live 200, 3x JSON-LD, guide post
- car-insurance-estimator — live 200, 3x JSON-LD, guide post
- life-insurance-needs-calculator — live 200, 3x JSON-LD, guide post
- workers-comp-calculator — live 200, 3x JSON-LD, guide post

## 2026-08-25 — Batch 2 (Wave 2/5 legal high-CPC) — built, NOT yet deployed
- mesothelioma-settlement-calculator — page + guide + embed, ranges from Mealey's/trust data, compassionate tone
- workers-comp-settlement-calculator — PPD side (distinct from workers-comp-calculator premium tool), NY/TX/FL modes
- medical-malpractice-settlement-calculator — NPDB 2023/24 data, 2026 state caps (CA AB35 $470k/$650k, TX, VA, IN, NE)
- child-support-calculator — income shares + TX ($11,700 cap 9/2025) + NY ($193k cap 3/2026) + CA §4055 formula
- lawsuit-loan-calculator — funding cost, simple vs compound, effective APR
- legal-tools/ hub created; all-tools Legal section added; embed index widgets 8-12 added

## 2026-08-25 — Wave 2 legal (swarm)
- car-accident-settlement-calculator — live 200, adversarial review PASS
- pain-and-suffering-calculator — live 200, adversarial review PASS
- wrongful-termination-settlement-calculator — live 200, adversarial review PASS
- dog-bite-settlement-calculator — live 200, adversarial review PASS
- slip-and-fall-settlement-calculator — live 200, adversarial review PASS
- mesothelioma-settlement-calculator — live 200, adversarial review PASS
- workers-comp-settlement-calculator — live 200, adversarial review PASS
- medical-malpractice-settlement-calculator — live 200, adversarial review PASS
- child-support-calculator — live 200, adversarial review PASS
- lawsuit-loan-calculator — live 200, adversarial review PASS

## 2026-08-26 — Wave 3 generators + pregnancy (solo build, 3 sequential groups)
# Requested Wave 1 finance/insurance list was already live (Batch 1) — all 10 skipped per
# "skip existing dirs"; batch built the next 10 unbuilt backlog items in order instead.
- resume-builder — live, 3 templates, live preview, PDF via print CSS, localStorage
- cover-letter-generator — live, template engine, 3 tones, word-count check, PDF
- form-builder — live, 9 field types, HTML + JSON schema export (developer hub)
- gantt-chart-maker — live, vanilla SVG (DHTMLX GPL avoided), phases, progress, weekends
- org-chart-maker — live, indented-list parser, tidy tree layout, SVG download
- flowchart-maker — live, ANSI symbols, decision branches w/ named no-targets, SVG
- bar-chart-maker — live, V/H orientation, sort, negatives, zero-baseline, SVG
- kanban-board — live, drag-drop + arrow keys, WIP limit, localStorage
- mind-map-maker — live, radial 2-side layout, per-branch colors, SVG
- pregnancy-weight-gain-calculator — live, IOM 2009 singleton+twin ranges, math hand-verified
  (BMI 22.3→13.1–19.4 lb @ wk28; BMI 34.3→3.9–8.6 lb @ wk20)
- invoice-generator upgraded in place (invoice-generator-v2 backlog item): live preview,
  unlimited line items, dates/notes/tax, PDF print layout — same URL, no duplicate
- Guides built (10): ats-resume, cover-letter, html-form, gantt, org-chart, flowchart,
  bar-chart, kanban, mind-map, pregnancy-weight-gain
- Embeds added (10): widgets 13–22 in /embed/ index
- Longtails (2): pregnancy-weight-gain-calculator-twins, plus-size-pregnancy-weight-gain
- business-tools/ hub created; all-tools Business section added; health/dev hubs updated

## 2026-08-25 — Wave 3 insurance/alimony (swarm)
- renters-insurance-calculator — live 200
- umbrella-insurance-calculator — live 200
- disability-insurance-calculator — live 200
- deductible-vs-copay-calculator — live 200
- annuity-calculator — live 200
- alimony-calculator — live 200
- settlement-calculator — live 200
- incorporation-cost-calculator — live 200
- overtime-pay-calculator-by-state — live 200
- social-security-disability-benefits-calculator — live 200
- alimony-calculator-california — live 200
- alimony-calculator-texas — live 200

## 2026-08-26 — Health trio (ADAG + protein + hydration) — built, NOT deployed (manual run, no deploy)
- glucose-a1c-converter — tool + embed + guide (guides/a1c-to-average-glucose), ADA eAG table + diagnostic thresholds, ADAG formula node-verified
- ideal-protein-intake-calculator — tool + embed + guide (guides/how-much-protein-per-day), extends macro-calculator (interlinked), RDA→2.2 g/kg table, USDA food values
- hydration-needs-by-weight — tool + embed + guide (guides/how-much-water-by-weight), extends water-intake-calculator (interlinked), weight table + IOM/EFSA benchmarks
- all-tools Health 5→8; health-calculators Body Composition 7→9, Pregnancy & Health 5→6
- embeds 23-25 added to /embed/ index; llm.txt regenerated locally; sitemap NOT regenerated (deploy.sh not run per instruction)

## 2026-08-26 — Five-tool batch (legal + fitness + pregnancy) — built, NOT deployed (manual run, no deploy)
- wrongful-termination-compensation-calculator — tool + embed + guide (guides/how-wrongful-termination-compensation-is-calculated); benefits-stack math (KFF 2025 premiums, 401k match, bonus), BLS at-will exceptions table, §1981a caps; $87,102 worked example node-verified
- calorie-deficit-calculator — tool + embed + guide (guides/how-to-calculate-a-calorie-deficit); Mifflin-St Jeor TDEE, NIH 1200/1500 floors, 2 worked examples node-verified
- macro-split-calculator — tool + embed + guide (guides/how-to-calculate-your-macro-split); %-to-grams + g/lb anchor modes, AMDR bands, 6 presets node-verified
- heart-rate-zone-calculator — tool + embed + guide (guides/heart-rate-zones-explained); Karvonen HRR zones, classic vs Tanaka max-HR, 2 worked examples node-verified
- pregnancy-week-by-week — tool + embed + guide (guides/pregnancy-week-by-week-guide) + 40 programmatic week pages (scripts/gen-pregnancy-week-pages.py); Naegele 280-day math node-verified; week pages 159-205 word unique intros, own canonicals
- all-tools Legal 11→12, Health 8→12 (merged with concurrent health trio), Programmatic Pages 5→6 (pregnancy weeks); health-calculators Body Composition 9→10, new Fitness & Training (2), Pregnancy & Health 6→7; legal-tools Employment 3→4, Guides 10→11, meta 12→13 calculators
- embeds 26-30 added to /embed/ index; llm.txt regenerated locally; sitemap NOT regenerated (deploy.sh not run per instruction)

## 2026-08-26 — Burst (parallel GLM x2)
- calorie-deficit-calculator — live 200
- macro-split-calculator — live 200
- heart-rate-zone-calculator — live 200
- pregnancy-week-by-week — live 200
- glucose-a1c-converter — live 200
- ideal-protein-intake-calculator — live 200
- hydration-needs-by-weight — live 200
- wrongful-termination-compensation-calculator — live 200
