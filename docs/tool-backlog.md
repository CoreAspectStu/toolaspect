# Tool Factory Backlog — ranked by CPC × longtail volume × build speed
# Format: slug | category | type | est CPC | why
# Status tracking: built tools get moved to done.md by the factory cron.

## Wave 1 — High-CPC Finance/Insurance (build ourselves)
refinance-break-even-calculator | finance | calc | $25 | refi intent, huge CPC, many longtail state/rate variants
pmi-calculator | finance | calc | $18 | mortgage PMI removal — commercial intent
heloc-payment-calculator | finance | calc | $22 | HELOC boom queries
closing-cost-calculator | finance | calc | $20 | by-state longtails
fha-loan-calculator | finance | calc | $19 | FHA MIP rules = AIO citation fodder
va-loan-calculator | finance | calc | $18 | VA funding fee tables
home-equity-calculator | finance | calc | $24 | home equity loan CPC is top-tier
car-insurance-estimator | insurance | calc | $30 | insurance CPC king (estimator not quote = safe)
life-insurance-needs-calculator | insurance | calc | $28 | needs-based = tables + formula
renters-insurance-calculator | insurance | calc | $16 | low comp, simple
umbrella-insurance-calculator | insurance | calc | $22 | affluent audience, zero comp tools
workers-comp-calculator | insurance | calc | $26 | B2B longtail, per-state rates
disability-insurance-calculator | insurance | calc | $25 | high CPC, formula-friendly
deductible-vs-copay-calculator | insurance | calc | $15 | AIO question-bait
annuity-calculator | finance | calc | $23 | retirement annuity longtails

## Wave 2 — Legal/B2B high-CPC
settlement-calculator | legal | calc | $35 | personal injury CPC is highest on web
workers-comp-settlement-calculator | legal | calc | $32 | PI/workers comp crossover
child-support-calculator | legal | calc | $20 | by-state formulas = programmatic pages
alimony-calculator | legal | calc | $22 | low comp
overtime-pay-calculator-by-state | legal | calc | $14 | FLSA tables, longtail states
wrongful-termination-compensation-calculator | legal | calc | $38 | highest CPC niche, zero good tools
medical-malpractice-settlement-calculator | legal | calc | $34 | PI vertical
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
