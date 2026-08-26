# Tool Factory Backlog — ranked by CPC × longtail volume × build speed
# Format: slug | category | type | est CPC | why
# Status tracking: built tools get moved to done.md by the factory cron.

## Wave 1 — High-CPC Finance/Insurance (build ourselves)

## Wave 2 — Legal/B2B high-CPC

# DONE 2026-08-25: workers-comp-settlement-calculator, child-support-calculator,
# medical-malpractice-settlement-calculator, mesothelioma-settlement-calculator ($40-90),
# lawsuit-loan-calculator (wave 5) — see tool-factory-done.md

# DONE 2026-08-26: wrongful-termination-compensation-calculator

## Wave 3 — OSS-wrap generators (MIT repos verified Aug-25)
# DONE 2026-08-26: resume-builder, cover-letter-generator, form-builder, gantt-chart-maker,
# org-chart-maker, flowchart-maker, bar-chart-maker, kanban-board, mind-map-maker —
# built as clean vanilla-JS implementations (no external repo code vendored).
# invoice-generator-v2 resolved as an in-place upgrade of /invoice-generator/ (PDF export,
# unlimited line items, live preview, invoify-style layout) rather than a duplicate v2 URL.
# gantt-chart-maker license check: DHTMLX Gantt community = GPL → built our own SVG instead.
# Wave 4 pregnancy-weight-gain-calculator also built 2026-08-26 (see done.md).

## Wave 4 — Health/Medical AIO magnets

# DONE 2026-08-26: calorie-deficit-calculator
# DONE 2026-08-26: macro-split-calculator
blood-alcohol-calculator-by-weight | health | exists-check | $8 | widen bac-calculator longtails
# DONE 2026-08-26: heart-rate-zone-calculator
# DONE 2026-08-26: pregnancy-week-by-week
ovulation-fertility-window-calculator | health | exists-check | $8 | extend ovulation-calculator
# DONE 2026-08-26: glucose-a1c-converter
# DONE 2026-08-26: ideal-protein-intake-calculator
# DONE 2026-08-26: hydration-needs-by-weight

## Wave 5 — Deep-research additions (subagent-ranked, Aug-25)
# Legal PI — highest CPC on the web ($20-90). Build with by-state/injury variant potential.

truck-accident-settlement-calculator | legal | calc | $25-60 | commercial vehicle premium
# DONE 2026-08-25: lawsuit-loan-calculator
# Finance adds (dedupe vs existing)
heloc-vs-cash-out-refi-calculator | finance | calc | $15-35 | home equity top finance CPC
debt-settlement-vs-bankruptcy-calculator | finance | calc | $10-30 | debt relief top-5 CPC
llc-vs-scorp-calculator | finance | calc | $8-20 | formation services bid
capital-gains-tax-calculator | finance | calc | $5-15 | 90k/mo, crypto longtails (check existing income-tax first)
rmd-calculator | finance | calc | $8-18 | IRMAA brackets = AIO tables
401k-match-calculator | finance | calc | $5-12 | brokerage ads
irmaa-calculator | insurance | calc | $10-25 | senior market high RPM
sr22-insurance-calculator | insurance | calc | $10-25 | nonstandard auto premium CPC
homeowners-dwelling-coverage-calculator | insurance | calc | $10-25 | regional insurer bids
# Health cost (elective surgery = local clinic bids)
dental-implant-cost-calculator | health | calc | $5-12 | 45k/mo, all-on-4 by state longtails
ivf-cost-calculator | health | calc | $6-15 | clinics + fertility financing
lasik-cost-calculator | health | calc | $6-14 | local surgical LTV
plastic-surgery-cost-calculator | health | calc | $5-12 | 50k/mo, by-state
# Home lead-gen ($300-600/lead)
roof-replacement-cost-calculator | home | calc | $6-15 | 55k/mo
hvac-cost-calculator | home | calc | $6-14 | ac replacement 3-ton longtails
solar-payback-calculator | home | calc | $8-20 | $40-150/lead solar installers

## OSS quick-wins (MIT, pure client-side — verified by subagent)
xkcd-chart-maker | developer | wrap-chart.xkcd | low | chart.xkcd MIT 7.8K stars, SVG
fancy-qr-generator | everyday | wrap-qrbtf? | low | node-qrcode/nayuki MIT; qrbtf is GPL-avoid
## AVOID: it-tools (GPL), quickchart (AGPL), easy-invoice-pdf (AGPL), qrbtf (GPL)

## AIO structure rule (from Semrush 200k study)
- 82% of AIOs on <1k/mo keywords = longtails; ~80% informational; listicles cited most
- Cited pages: 2500-3300 words, tables, FAQ blocks, 40-60 word direct answer under H1
- Only 20-26% AIO overlap with top-10 → don't need to rank #1 to get cited

## GH scan 2026-08-25 (auto)
gh:nikolaeu/numi | oss | wrap | low | S6491 MIT — Beautiful calculator app for macOS, Linux & Windows
gh:yuvadm/cidr.xyz | oss | wrap | low | S848 MIT — CIDR Calculator and Subnetting Visualizer
gh:dunizb/sCalc | oss | wrap | low | S354 MIT — :calling: A simple calculator application
gh:spot13/pmcalculator | oss | wrap | low | S225 MIT — A simple process manager calculator that helps determine the correct values for child processes in P
gh:legions-developer/invoicely | oss | wrap | low | S899 MIT — Invoicely is a simple and easy to use invoice generator where you can create beautiful and professio
gh:htmldocs-js/htmldocs | oss | wrap | low | S746 MIT — The modern alternative to LaTeX. Create PDF documents templates using React, JSX, and Tailwind
gh:tuanpham-dev/react-invoice-generator | oss | wrap | low | S675 MIT — React Invoice Generator allows you quickly make invoices and export them as PDF
gh:amruthpillai/reactive-resume | oss | wrap | low | S41664 MIT — A one-of-a-kind resume builder that keeps your privacy in mind. Completely secure, customizable, por
