
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

## 2026-08-26 — Home systems wave (manual run, no deploy per instruction)
- driveway-paving-cost-calculator — tool + embed + guide (guides/driveway-paving-cost); asphalt vs concrete side-by-side, sealing schedule, 20/30-yr cost-per-year; $6,840 vs $7,200 20-yr worked example node-verified; rates from published 2025-26 paving cost surveys
- hvac-replacement-cost-calculator — tool + embed + guide (guides/hvac-replacement-cost); 5 system types, sq-ft/ton sizing snapped to half-ton increments, SEER2 savings (14.3→17 = 15.9%); $13,410 complete-system worked example node-verified; Bryant/QRC/EnergySage 2025-26 ranges
- water-heater-cost-calculator — tool + embed + guide (guides/water-heater-tank-vs-tankless); UEF operating math (gas therms via 29.3 kWh/therm), any-two-type compare; gas tankless payback 19.7 yrs vs heat pump 2.9 yrs node-verified; OBBBA-era note (25D expired, no water-heater claims beyond state)
- solar-savings-calculator — tool + embed + guide (guides/are-solar-panels-worth-it); bill→kW sizing w/ 0.80 performance factor, 25-yr escalation×degradation loop, credit input defaults 0 (25D ended 12/31/2025 per OBBBA); $27,136/10.44 kW/$2,400 yr-1/11-yr payback node-verified; $2.58-2.60/W + 17.45¢/kWh Jan 2026 EIA
- flood-insurance-cost-calculator — tool + embed + guide (guides/flood-insurance-cost); zone-based estimate w/ labeled sub-linear coverage scaling + contents add-on, 18% RR2.0 cap projection; AE $2,090→$4,781 worked example node-verified; zone bands from FEMA/NerdWallet/Progressive data
- all-tools: new Home Improvement + Insurance sections; contractor-tools: new Home Systems & Energy section + driveway in Concrete & Sitework, subtitle 35→39; insurance-tools 3→4; guides index Money/Home/Insurance 30→35; embeds 31-35 added to /embed/ index
- llm.txt regenerated locally; sitemap NOT regenerated (deploy.sh not run per instruction); NOT deployed
- longtail result pages skipped this run (not in run scope); candidates for follow-up: /hvac-replacement-cost-calculator-texas/, /water-heater-cost-by-state/, /flood-insurance-cost-florida/, /solar-savings-by-state/

## 2026-08-26 — Remodel/exterior cost wave (manual run, no deploy per instruction)
- window-replacement-cost-calculator — tool + embed + guide (guides/how-much-does-window-replacement-cost); per-window = type base × material factor × glass factor + install/story adders; 10 vinyl DH low-E = $3,250–$8,500 ($5,500 typical) and 6 fiberglass casement triple full-frame 2-story = $1,232/window node-verified; 2025-26 national installed ranges
- kitchen-remodel-cost-calculator — tool + embed + guide (guides/how-much-does-a-kitchen-remodel-cost); $/sq ft tiers aligned to CVV ($135/$420/$825) + 8% layout move + wall/island adders; 150 sf midrange = $52.5k–$78k ($63k) node-verified; NKBA line-item split table
- bathroom-remodel-cost-calculator — tool + embed + guide (guides/how-much-does-a-bathroom-remodel-cost); $/sq ft tiers ($160/$700/$900) + tub-to-shower/heated/vanity/tile-shower adders; 40 sf gut = $22k–$35.2k ($28k) node-verified; CVV anchors 35 sf ≈ $25k, 100 sf upscale ≈ $80k
- fence-cost-calculator — tool + embed + guide (guides/how-much-does-a-fence-cost); 9 materials × LF × height/terrain factors + gates + removal; 150 ft wood privacy = $2,700–$5,850 ($4,025) and 300 ft vinyl gentle-slope w/ 3 gates + removal = $12,868 typical node-verified; acreage perimeters (417/590/835 LF) computed
- deck-cost-calculator — tool + embed + guide (guides/composite-vs-wood-deck-cost); 5 materials × sf × height factor + stairs + railing-per-LF (3-side rail LF = L+2W); 240 sf PT ground = $7,800 typical and 300 sf composite 2nd-story cable = $21,320 node-verified; composite-vs-wood 20-yr table ($17,500 vs $13,400) as AIO citation asset
- all-tools: merged into Home Improvement section (hub card + 9 cost tools), meta 119+→124+; contractor-tools: new Remodeling & Installed Cost Estimators section, title/subtitle/JSON counts → 44 (35 + concurrent 4 + this wave 5); embeds 36-40 added to /embed/ index under Remodeling & Exterior Cost Widgets; guides index Money/Home/Insurance badge → 45 (actual link count), title/meta → 64
- llm.txt regenerated locally; sitemap NOT regenerated (deploy.sh not run per instruction); NOT deployed
- longtail result pages skipped (not in run scope); candidates: /kitchen-remodel-cost-10x12/, /fence-cost-per-acre/, /deck-cost-12x12/, /window-cost-by-material/
- coordinated with concurrent home-systems wave (driveway/hvac/water-heater/solar/flood + finance/insurance trio) touching the same hubs; all merges additive, counts reconciled to actual card counts

## 2026-08-26 — Finance/tax quartet + medical (built, NOT deployed)
- self-employment-tax-calculator — tool + embed + guide (guides/how-is-self-employment-tax-calculated); 15.3% on 92.35% of net, 2026 SS wage base $184,500 (max SS $22,878), 2.9% Medicare uncapped, 0.9% over $200k/$250k, deductible half; $90k → $12,717 SE tax ($6,358 half, 14.13% eff) and $250k single → $29,851 ($14,926 half, 11.94% eff) node-verified
- estimated-quarterly-tax-calculator — tool + embed + guide (guides/how-to-calculate-quarterly-taxes); full 2026 bracket engine (Rev. Proc. 2025-32, std ded $16,100/$32,200) + SE tax, ÷4 vs safe harbor (90% / 100% / 110% AGI>$150k); $90k single → $22,288 total, $5,015/qtr at 90% or $4,500/qtr prior-year ($18k prior tax) node-verified
- hsa-contribution-calculator — tool + embed + guide (guides/hsa-contribution-limits-2026); 2026 limits per Rev. Proc. 2025-19 ($4,400/$8,750/$1,000 catch-up, HDHP $1,700/$3,400 ded, $8,500/$17,000 OOP), proration vs last-month rule (catch-up not prorated), employer offset, payroll 7.65% FICA savings; 57yo family + $2k employer → $7,750 room, $2,685 saved node-verified
- fsa-deadline-calculator — tool + embed + guide (guides/when-does-fsa-money-expire); plan-year date engine (grace to Mar 15 vs carryover $680 vs strict), days-left, daily spend target, run-out +90d; $712 balance Sep 15 → Dec 31 = 107 days, $6.65/day, $46.58/wk node-verified; 2026 limits $3,400 election / $680 carryover
- vasectomy-reversal-cost-calculator — tool + embed + guide (guides/how-much-does-a-vasectomy-reversal-cost); cost bands by setting (office/ASC/hospital × surgeon+anesthesia+facility+VE add-on), insurance % + deductible applied, Belker 1991 VSG patency/pregnancy table (97/76 → 71/30); ASC VV typical $7,500 ($4,500–$10,500) node-verified; medical not-advice note
- Hubs: all-tools Finance 12→16 + Health 12→13; finance-tools Income & Salary 7→11; health-calculators Pregnancy & Health 7→8; guides index Money cards +5; embeds 41–45 under new "Tax, Benefits & Health Widgets" section (renumbered past concurrent 36–40); llm.txt regenerated (246 tools, 88 guides)
- NOT deployed (per instruction): sitemap, IndexNow, curl spot-checks skipped
- longtail pages skipped this batch (not in run scope)

## 2026-08-26 — Insurance quintet (built, NOT deployed per instruction)
- earthquake-insurance-calculator — tool + embed + guide (guides/how-much-is-earthquake-insurance); CA/WA/OR rate model ($2.90/$1.75/$1.45 per $1,000) × construction/age/zone/deductible (5–25%: 1.00–0.63) × retrofit 0.85, with out-of-pocket-at-claim output; CA $500k @15% = $1,102/yr + $75k OOP, OR $350k retrofitted = $457/yr node-verified; CDI avg $850–$900 + CEA ~2/3 + 10–13% take-rate cited as labeled published figures
- motorcycle-insurance-cost-calculator — tool + embed + guide (guides/how-much-is-motorcycle-insurance); 51-row state table (mean $583.50 → "$585/yr, $49/mo" national avg), coverage 0.72/0.38, age 1.90–0.90, sportbike 1.65, record 1.28/1.60, MSF 0.93, bundle 0.90; TX 30yo 600cc sportbike w/ ticket = $1,965/yr and OH 52yo bundled cruiser = $305/yr node-verified
- rv-insurance-cost-calculator — tool + embed + guide (guides/how-much-does-rv-insurance-cost); 6-class baselines (A $1,480 / B $880 / C $1,090 / trailer $480 / fifth $640 / camper $340, motorhome avg $1,150) × value 0.55+0.45v/typ × usage 1.35/1.00/0.85 × region 1.18/1.05/0.92/1.00 × ded 1.12–0.82; Class C $95k full-time TX = $1,602/yr, trailer $28k occasional OH = $396/yr node-verified
- boat-insurance-cost-calculator — tool + embed + guide (guides/how-much-does-boat-insurance-cost); 7 type baselines × value 0.6+0.4v/typ × state (hurricane 1.25 / coastal 1.12 / GL-heartland 0.95) × nav 1.00–1.40 × ded/liab/lay-up; bowrider $38k Lake MI = $396/yr and sailboat $60k FL coastal = $851/yr node-verified; 1–2%-of-value rule table
- identity-theft-protection-calculator — tool + embed + guide (guides/is-identity-theft-protection-worth-it); 10-factor risk quiz (0–15, banded Low/Mod/Elevated/High) + tier cost engine ($0/$9.99/$19.99/$29.99 × adults × years) vs free DIY stack; couple standard = $479.76/yr, $1,439.28/3yr, premium 2-adult 5yr $3,598.80 node-verified; free-vs-paid feature table (freeze/IP PIN/monitoring by law free), FTC 1M+ 2023 reports + BJS ~24M cited labeled
- Hubs: insurance-tools restructured (Policy Cost Estimators 9 incl. previously-missing renters + Coverage & Risk 3 incl. umbrella/identity); all-tools Insurance section → hub + 11 tools; embeds 46–50 added to /embed/ index; guides index +5 cards, Money/Home/Insurance 45→50, title/meta 64→69
- llm.txt regenerated locally; sitemap NOT regenerated (deploy.sh not run per instruction); NOT deployed
- longtail pages skipped (not in run scope); candidates: /motorcycle-insurance-calculator-california/, /motorcycle-insurance-calculator-florida/, /rv-insurance-class-c-texas/, /boat-insurance-florida/, /earthquake-insurance-california/

## 2026-08-26 — PI + SSDI + dental quintet (built, NOT deployed per instruction)
- motorcycle-accident-settlement-calculator — tool + embed + guide (guides/how-much-is-a-motorcycle-accident-settlement); specials (med/future/wages/bike+gear) × severity 1.5–5x, fault %, 33/40% fee, helmet select (informational); default $81k specials ×3–4 = $324k–$405k gross, −10% fault = $291.6k–$364.5k, net after 33% = $195,372–$244,215 node-verified; Martindale-Nolo $73,700 avg, NHTSA 6,335 killed 2023 / ~22–27x VMT / 37% helmet efficacy, IL-IA-NH no-helmet-law table cited labeled
- uber-lyft-accident-settlement-calculator — tool + embed + guide (guides/how-rideshare-accident-settlements-work); unique coverage-period engine: periods 2-3 = $1M liability + $1M UM/UIM (no cap flag), period 1 = contingent $50k/person cap binds on output; default passenger $42k specials ×2.5–3.5 = $147k–$189k gross, net $98,490–$126,630; same injuries in period 1 cap at $50k gross / $33.5k net node-verified (the gap demo)
- nursing-home-abuse-settlement-calculator — tool + embed + guide (guides/how-much-is-a-nursing-home-abuse-settlement); safety card first (911, LTC Ombudsman, Eldercare Locator 1-800-677-1116, APS, state survey agency); harm-type tiers 2–5x + citations adjustment ×0.9/×1.0 + 33/40/45% fee; default $85k economic ×3–4.5 = $340k–$467.5k gross, net $227,800–$313,225 node-verified; ranges labeled plaintiff-firm published (confidentiality caveat), NCOA/DOJ 1-in-10, WHO 1-in-6 + 2-in-3 staff, Genworth $116,800 private room 2023
- social-security-disability-denial-calculator — tool + embed + guide (guides/what-happens-after-an-ssdi-denial); date engine: entitlement = onset month +6 (5-month wait), start = max(ent, app−12) (retro cap), end = decision month −1, months × benefit, fee = min(25%, $9,200); default $1,630/mo, onset 2024-03-15, app 2024-06-10, ALJ 2026-02-20 → Sep-2024 entitlement, 17 months = $27,710, fee $6,928, net $20,783 node-verified incl. late-apply (cap binds) and early-decision (0 months) edges; stage table 38%/13%/51% (2024 labeled), cap $9,200 ≥ Nov 30 2024
- invisalign-cost-calculator — tool + embed + guide (guides/how-much-does-invisalign-cost); tier bands (Lite 2.8–4.5k / Moderate 3–5k / Comprehensive 4.5–7k) × region 0.92–1.12 − insurance max + FSA×tax-rate savings + retainers; default = $2,700–$5,200 OOP incl. $300 retainers, $113–$217/mo over 24 node-verified; Invisalign.com $1,772 avg coverage / 92%-up-to-$3k, lifetime ortho max $1k–$3.5k, HSA 2026 $4,400/$8,750, FSA $3.2–3.3k, SDC Dec-2023 shutdown noted
- Hubs: all-tools (Legal 12→16, Health 13→14, +5 guide cards), legal-tools (13→17 meta/JSON-LD, Injury 7→10, new Disability & Appeals section, Guides 11→15), health-calculators (Pregnancy & Health 8→9), embeds 51–55 added to /embed/ index; backlog 5 slugs marked DONE
- All 4 legal tools carry not-legal-advice notes; nursing-home page leads with reporting resources before any settlement math
- NOT deployed (per instruction): deploy.sh, sitemap regen, IndexNow, curl spot-checks, llm.txt regen, longtail pages all skipped

## 2026-08-26 — Autoloop review round 1: adversarial verify + deploy of all 25 pending tools
- Recomputed every calculator via node DOM-stub harness (inputs from HTML, outputs vs page prose): 24/25 exact. One real defect found and fixed: motorcycle-accident-settlement-calculator prose/FAQ/direct-answer used specials-includes-property multiplication ($81k ×3–4 → $324k–$405k gross) while tool+embed multiply injury specials only and add property dollar-for-dollar ($297k–$369k); rewrote tool AIO + worked example + guide paragraph to the tool's (better) method: gross $297,000–$369,000, net $179,091–$222,507 after 10% fault and 33% fee.
- kitchen-remodel-cost-calculator: prose range endpoints aligned to widget ($95,220 typical, high $119,320).
- 4 titles shortened to ≤60 (invisalign, motorcycle-accident, nursing-home-abuse, uber-lyft; ssdi already 58 rendered).
- Prose em-dashes scrubbed in 6 tools (parens/commas; table-cell dashes per house style).
- Gap fixed: 5 guides from PI/SSDI/dental quintet missing from guides/index.html — added (Legal 10→14, Money/Home/Insurance 50→51, title/meta/JSON-LD 69→74, 74 cards actual).
- Verified across all 25: AIO answer block present (quick-answer/aio-answer/direct-answer variants), 3× JSON-LD (WebApplication+FAQPage+BreadcrumbList, all parse), embed JS with dofollow backlink + listed in /embed/ index, guide exists + links tool, all-tools + category hub links, stats labeled as published national ranges/attributed (EIA, FEMA, CDI, SSA 2024, Martindale-Nolo, NHTSA, NCOA/DOJ, Belker 1991, Invisalign claims data, FTC/BJS) — no fabricated precision found.
- DEPLOYED (deploy.sh): 96 files uploaded, sitemap regenerated, llm.txt regenerated; IndexNow submitted OK.
- Curl-verified 81 URLs (25 tools + 25 guides + 25 embeds + 6 hubs): all 200.
