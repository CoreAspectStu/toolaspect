# Tool Factory Backlog — ranked by CPC × longtail volume × build speed
# Format: slug | category | type | est CPC | why
# Status tracking: built tools get moved to done.md by the factory cron.

## Wave 1 — High-CPC Finance/Insurance (build ourselves)

renters-insurance-calculator | insurance | calc | $16 | low comp, simple
umbrella-insurance-calculator | insurance | calc | $22 | affluent audience, zero comp tools

disability-insurance-calculator | insurance | calc | $25 | high CPC, formula-friendly
deductible-vs-copay-calculator | insurance | calc | $15 | AIO question-bait
annuity-calculator | finance | calc | $23 | retirement annuity longtails

## Wave 2 — Legal/B2B high-CPC
settlement-calculator | legal | calc | $35 | personal injury CPC is highest on web
# DONE 2026-08-25: workers-comp-settlement-calculator, child-support-calculator,
# medical-malpractice-settlement-calculator, mesothelioma-settlement-calculator ($40-90),
# lawsuit-loan-calculator (wave 5) — see tool-factory-done.md
alimony-calculator | legal | calc | $22 | low comp
overtime-pay-calculator-by-state | legal | calc | $14 | FLSA tables, longtail states
wrongful-termination-compensation-calculator | legal | calc | $38 | highest CPC niche, zero good tools
slip-and-fall-settlement-calculator | legal | calc | $33 | PI vertical
social-security-disability-benefits-calculator | legal | calc | $21 | SSDI tables
incorporation-cost-calculator | legal | calc | $17 | business formation CPC

## Wave 3 — OSS-wrap generators (MIT repos verified Aug-25)
invoice-generator-v2 | business | wrap-invoify | $8 | port invoify core patterns, PDF export
resume-builder | business | wrap-resume | $12 | resume CPC solid, sadanandpai/resume-builder MIT
cover-letter-generator | business | gen | $11 | LLM-free template engine
form-builder | developer | wrap-formbuilder | $4 | kevinchappell/formBuilder MIT, drop-in
gantt-chart-maker | business | wrap-dhtmlx | $5 | license-check DHTMLX first
org-chart-maker | business | gen | $6 | canvas/SVG, low comp
flowchart-maker | business | gen | $7 | drag-drop SVG, big volume
gnatt-alternative:bar-chart-maker | data | gen | $4 | quick win
kanban-board | productivity | gen | $3 | localStorage, high volume
mind-map-maker | productivity | gen | $6 | SVG tree, AIO citable

## Wave 4 — Health/Medical AIO magnets
pregnancy-weight-gain-calculator | health | calc | $9 | IOM tables = perfect AIO
calorie-deficit-calculator | health | calc | $7 | huge volume
macro-split-calculator | health | calc | $6 | bodybuilding longtails
blood-alcohol-calculator-by-weight | health | exists-check | $8 | widen bac-calculator longtails
heart-rate-zone-calculator | health | calc | $6 | Karvonen formula = citation fodder
pregnancy-week-by-week | health | data | $9 | 40 programmatic pages
ovulation-fertility-window-calculator | health | exists-check | $8 | extend ovulation-calculator
glucose-a1c-converter | health | calc | $10 | medical tables, tiny comp
ideal-protein-intake-calculator | health | calc | $5 | extend macro
hydration-needs-by-weight | health | calc | $4 | extend water-intake

## Wave 5 — Deep-research additions (subagent-ranked, Aug-25)
# Legal PI — highest CPC on the web ($20-90). Build with by-state/injury variant potential.
car-accident-settlement-calculator | legal | calc | $25-60 | 90k/mo cluster, PI attorneys bid hard; state variants
pain-and-suffering-calculator | legal | calc | $20-45 | multiplier method = perfect AIO content
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
