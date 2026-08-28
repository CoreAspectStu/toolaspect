
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

## 2026-08-26 — 4-tool batch (roth + time/text cluster) — built, NOT deployed
- roth-conversion-calculator — 2026 bracket-ladder planner (Rev. Proc. 2025-32 thresholds), MFJ/single, node-verified worked examples ($300k/5yr ladder saves $24,476), not-tax-advice disclaimer
- words-per-minute-test — interactive 30/60/120s typing test, live WPM/accuracy, forward-only scoring (348 chars/60s → 69.6 gross, 68 net), Tab restart / Esc new passage
- military-time-converter — 12h<->24h both directions + full 24-row chart with pronunciation + live 24h clock; roundtrip verified over all 1440 minutes
- reading-time-calculator — words/paste-text to reading minutes at 150/238/325/475 WPM + speaking time at 130, pages at 275 wpp (Brysbaert 2019 figures)
- embeds 56-59 added; guides: when-to-do-a-roth-conversion, average-typing-speed, average-reading-speed, how-to-read-military-time

## 2026-08-26 — Autoloop review round 2: adversarial verify + deploy of the 4-tool batch (roth + time/text cluster)
- Recomputed all arithmetic via node: reading-time claims all exact (1500/238=6:18, 5min=1190 words, 80000/238=5hr36min, 291 pages, Medium 265×5=1325, 2500/238=10:30, 18min×145=2610); military chart verified over all 1440 minutes roundtrip.
- Real defects found and fixed:
  - military-time-converter + embed: spoken-form generator mixed words and digits ("nineteen 42") and dropped leading-zero hours (0930 -> "nine 30", 0030 -> "zero 30"); rewrote to word-based minutes ("fourteen forty-five", "zero nine thirty", "zero zero thirty") matching the page's own prose/FAQ promises. Verified all spoken claims + 1440-min roundtrip pass.
  - military-time-converter: colon-notation alt display broke for 12:00-12:59 AM (12:42 AM showed ":42"); now 00:42 via padded hour.
  - Citation error: the 190-study reading-rate meta-analysis is Brysbaert 2019 (J. Memory and Language), not 2014 — fixed on reading tool (AIO/FAQ/table), average-reading-speed guide (meta/intro/body/table/FAQ), guides index card, and this done-log.
  - reading-time FAQ: 1000 words aloud at 130 WPM is 7 min 42 s (tool output), FAQ said 7:40 — aligned.
  - De-fabricated guide ranges: dropped invented "college-educated 250-280" and "older readers 10-20% under best years" precision (now qualitative); podcast script 30min@145WPM corrected 4,300 -> 4,350 words.
  - Read-time badges honest: average-reading-speed 8 -> 4 min (974 words), how-to-read-military-time 6 -> 4 min (999 words).
- Verified: AIO block, 3x JSON-LD parse (WebApplication+FAQPage+BreadcrumbList tools; Article+FAQPage guides), embeds + /embed/ index listing, guide<->tool crosslinks, all-tools + everyday-tools hub cards, canonicals; AI-slop grep clean; published stats properly attributed (Brysbaert 2019, Rayner 2016, Medium 265 WPM).
- DEPLOYED (deploy.sh) + curl-verified + committed + pushed (this entry).

## 2026-08-28 — 5-tool batch (dog food + stats + 401k/lease/student-loan) — built, NOT deployed
- dog-food-calculator — RER = 70 x kg^0.75 x factor (OSU/Merck factors), cups from bag kcal/cup, treat allowance; worked examples 30 lb neutered = 496 RER x 1.6 = 794 kcal = 2.1 cups @375; 70 lb intact = 1,685; weight-loss 80 lb @1.0 = 1,035; 65-lb target RER = 886
- sample-size-calculator — Cochran n0 = z²p(1-p)/e² (385 @95/5/.5) + FPC (278 @N=1000, 218 @500, 80 @100) + mean mode (z s/e)² (97 @s15,e3); z-table 1.282/1.645/1.96/2.326/2.576; achieved-MoE back-solve
- 401k-match-calculator — dollar-for-dollar / 50%-partial / tiered 100+50 formulas; per-paycheck vs true-up front-load sim ($200k @20%/check loses $3,077 of an $8k match); 2026 IRS limits ($24,500 / $8,000 catch-up / $11,250 super / $72,000 415c / Roth catch-up >$145k FICA, verified via IRS/TIAA Nov-2025 COLA); Vanguard avg employer contribution 4-5% labeled
- student-loan-payoff-calculator — daily simple interest (bal x rate/365) over real calendar months; $35k @6.8% std $402.78/$403 x 120 = $13,338 interest; +$50/+$100/+$200/mo save $2,154/$3,697/$5,767 (102/89/71 payments); one-time $1,000 saves $949; biweekly $1,530
- lease-payment-calculator — dep + rent + tax: $45k MSRP/$43k cap/60% resid/36mo/MF .0025/8% tax = $444.44 + $175.00 = $619.44 pre-tax, $669.00 w/tax; MFx2400 APR table; 65% resid = $562.57; $2,500 down = $587.25/mo but only $443 total savings; Experian avg lease $619 vs $770 loan (labeled, via LendingTree)
- embeds 68-72 added to /embed/ index; guides: how-much-should-i-feed-my-dog, how-to-calculate-sample-size, how-401k-match-works, pay-off-student-loans-faster, how-to-calculate-a-lease-payment
- hubs: all-tools (Finance 27, Everyday 8, Health 15), finance-tools (Loans 24, Investment 4), health-calculators (new Pets section), everyday-tools (Math 7), guides index (131 count), shared/nav.js +5 entries
- llm.txt + sitemap regenerated locally; site-gate PASS; NOT deployed (per instruction) — run ./deploy.sh + indexnow to publish

## 2026-08-28 — 5-tool batch (car-repair umbrella + roof replacement + molar mass + car shipping + car wrap) — built, NOT deployed
- car-repair-cost-calculator — umbrella hub: 25-repair by-repair table (parts range, flat-rate hours, national total at the ~$130/hr median), metro labor-rate table, diagnose->parts->labor bill anatomy, node-verified examples ($423-$788 pads+rotors @ $115/hr indep; $475-$875 @ $150/hr dealer; alternator dealer $575-$1,075)
- roof-replacement-cost-calculator — 11 materials $350-$3,000/sq installed, house pitch factors (verified vs sqrt(1+(r/12)^2); 10/12 caught wrong at 1.307 -> 1.302), footprint->squares->cost with complexity/stories/layers/region; 20.12-sq worked example $9,056-$15,093 base, $12,500-$19,000 as 2-layer 2-story; distinct from live roofing-calculator (materials takeoff), cross-linked both ways from guide
- molar-mass-calculator — IUPAC 2021 weights for elements 1-92, parser handles nested parens, leading coefficients, hydrate dots (· . * ~); element breakdown table + grams<->moles card (25g glucose = 0.1388 mol = 8.357e22 particles); 22-compound reference table node-verified (CuSO4·5H2O 249.677 etc.)
- car-shipping-cost-calculator — 6-tier per-mile model made monotonic in total cost after node check ($2.20/3.20 @150mi down to $0.46/0.66 @2,500+), vehicle factors 0.95-1.35, enclosed x1.8/1.95, inoperable +$150-300, season; 1,250-mi WE $900-$1,313 open / $1,620-$2,559 enclosed; 8-route table; broker lowball-trap framing (no lead capture)
- car-wrap-cost-calculator — 7 vehicle classes x 6 finishes x 3 shop tiers + partial coverage + removal; full table incl. chrome x2.6; satin-crossover WE $2,800-$5,040 (premium color-shift fix: $4,725-$8,505, was miscomputed)
- embeds 73-77 added (renumbered after concurrent wave's 68-72); guides: how-much-does-car-repair-cost, how-much-does-a-new-roof-cost, how-to-calculate-molar-mass, how-much-does-it-cost-to-ship-a-car, how-much-does-it-cost-to-wrap-a-car (all 1,039-1,186 words)
- NEW CATEGORY HUB auto-tools/ created (4 sections, 15 cards incl. wave's vin-decoder + extended-warranty); all-tools +contractor-tools +everyday-tools cards; nav.js Auto & Transport group added (+ MolarMass, RoofReplacementCost, and nav-coverage for concurrent wave's capital-gains/mpg/sig-fig orphans so gate passes)
- verification: node DOM-stub harness 5/5 tools exact, embed stub tests 5/5, 3x JSON-LD parse + single h1 on all 5, titles 53-57 chars, metas 134-146, internal links all resolve (fixed one /conversion-tables/ -> /converters/), guide arithmetic re-verified (fuel-drive $125-$188 @25-30mpg corrected from overestimate); site-gate PASS (0 fails)
- NOT deployed (per instruction): deploy.sh/wrangler, IndexNow, curl spot-checks skipped; sitemap.xml (1,746 URLs) + llm.txt (316 tools + 130 guides) regenerated locally only

## 2026-08-28 — 5-tool batch (heloc-refi / car-warranty / title-loan / citation / vin) — built, NOT deployed
- heloc-vs-cash-out-refi-calculator — dual-path amortization comparison (keep+HELOC vs cash-out refi): monthly payment, blended rate, N-yr net financing cost (payments + closing − principal paid), ending balances, CLTV>90% warning. Node-verified worked example: $300k@4.25%/26yr + $50k HELOC@8.5%/20yr = $2,024/mo @ 4.86% blended vs $350k refi@6.75%/30yr = $2,270/mo; 5-yr net cost $80,802 vs $121,771 (saves $40,969 + $19,712 lower balance)
- extended-car-warranty-cost-calculator — transparent tier-rate model (powertrain 1.0%/named 1.7%/B2B 2.2% of value per year × age × mileage × class multipliers, all published in tables) calibrated to labeled national ranges ($1,000-4,500 by tier, $25-100/mo); worked examples node-verified ($28k 4-yr SUV 68k mi B2B 4yr = $4,073/$84.86mo; $32k 2-yr sedan PT 5yr = $1,600); break-even repair bill + DIY self-insure fund output; repair-cost-by-age table (labeled national ranges)
- title-loan-apr-calculator — true-APR reveal (monthly fee ×12; 25%/mo = 300%) + generated rollover stack table with fees-reach-principal month marker (mo 4 @ 25%, mo 5 @ 20%, mo 7 @ 15%) + APR conversion table + product comparison (payday 391.07% math, Fed G.19 card/loan averages labeled); consumer-protection framing, not-legal-advice note, CFPB 1-in-5 repossession cited as research
- citation-generator — APA 7 / MLA 9 / Chicago 17 tabs × book/journal/website, smart author parsing (Last,First or First Last), APA initials + sentence-case transform with acronym protection, et al. rules per style, in-text citations, rich+plain clipboard copy, live Crossref DOI auto-fill (browser-side). Formatter driven through node DOM-stub harness: all six worked-example citations match page prose exactly (Brysbaert 2019 ×3 styles, Morrison Beloved ×3, no-author/no-date website ×3)
- vin-decoder — check-digit validation (weights/transliteration algorithm; all 4 sample VINs verified incl. X-remainder case), 60-row WMI table, year-code table (1980-2030), country codes, live NHTSA vPIC decode + recalls-by-vehicle lookup with graceful offline fallback; sample VINs vPIC-verified (2003 Honda Accord Marysville OH; 1993 Acura Legend Sayama JP; 1989 MCI 102C3; 2013 F-150)
- embeds 78-82 added to /embed/ index; guides: heloc-vs-cash-out-refi, extended-car-warranty-cost, title-loan-costs, apa-vs-mla-citation, how-to-read-a-vin
- hubs: all-tools (Finance 29, Everyday +citation, Automotive +vin), finance-tools (Loans 26), auto-tools (Buying 3 +vin, Insurance 2 +warranty — auto-tools hub created by concurrent wave), text-tools (5 tools), guides index (65 Money/19 Work, title 136), shared/nav.js +5 entries
- llm.txt regenerated (316 tools + 130 guides); sitemap already contained all 10 new URLs via concurrent wave's regen; site-gate PASS at build time
- NOT deployed (per instruction) — run ./deploy.sh + indexnow to publish

## 2026-08-28 — 5-tool batch (slope / rmd / std-dev / matrix / sat-score) — built, NOT deployed
- slope-calculator — two points -> slope m, b, y=mx+b, point-slope, angle, distance, midpoint, perpendicular slope, percent grade + live SVG plot; vertical-line undefined case handled; reference table slope/angle/grade (ADA 1:12 4.8deg/8.3%, 6/12 pitch 26.6deg/50%, m=2 63.4deg/200%); node-verified: (2,3)(6,11) m=2 b=-1 dist 8.94 mid (4,7) perp -0.5; (-1,7)(4,-8) m=-3 b=4
- rmd-calculator — full IRS Uniform Lifetime Table 72-120 baked in (Pub 590-B, 2022+), RMD + factor + % of balance + monthly + next-year factor; full 72-100 reference table with $500k column node-verified (75->20,325.20; 500k@72=18,248 @85=31,250 @90=40,984); 2025 IRMAA bracket table ($106k/$212k, $185->$628.90) + 2026 threshold note; roth-conversion interlink both directions; not-financial-advice disclaimer; SECURE 2.0 ages (73/75), 25%->10% excise, April-1 trap, QCD $108k
- standard-deviation-calculator — sample/population toggle, n/mean/median/mode/variance/both-SDs/min-max/sum/SS; deviations table = AIO-citable worked example ([4,8,15,16,23,42]: mean 18, SS 910, pop 12.32/var 151.67, sample 13.49/var 182); empirical-rule table 68/95/99.7 with worked bands; n-1 Bessel explanation with n=5 -> +25% variance check
- matrix-calculator — 2x2/3x3/4x4 grids, det (cofactor formula for 2-3, partial-pivot elimination for 4x4), Gauss-Jordan inverse with singular detection, transpose, AxB multiply; node-verified: [[4,7],[2,6]] det 10 inv [[0.6,-0.7],[-0.2,0.4]] A*A^-1=I; 3x3 det 21 inverse verified to identity; det4 example = 4.0 (independent python elimination cross-check); [[2,4],[1,2]] -> Singular
- sat-score-calculator — College Board OFFICIAL raw->scaled table (paper edition of digital SAT Practice Test 4, (c)2023: RW 0-66, Math 0-54, lower/upper ranges) + official user-group percentile table 400-1600 by 10s; module inputs (RW 2x0-33, Math 2x0-27); node-verified: RW 53 -> 630-650, Math 38 -> 570-600, total 1200-1250 = 75th-80th; 61+46 -> 1400-1450 = 92nd-95th; equating-not-curving + no-guessing-penalty copy
- embeds 83-87 added to /embed/ index (renumbered after concurrent waves reached 82); guides: how-to-calculate-slope, how-rmds-are-calculated, how-to-calculate-standard-deviation, how-to-calculate-matrix-determinant, how-the-sat-is-scored
- hubs: all-tools (Finance 28, Everyday 13), finance-tools (Income & Salary 13), everyday-tools (Math & Numbers 11, School & Work 8), guides index (Money 61, Work 19, title 130 = actual dir count), shared/nav.js +5 (Slope/StandardDeviation/Matrix in Finance Extras, SatScore after GPA, Rmd in Tax & Payroll)
- verification: node --check on 5 embeds + all inline scripts; DOM-stub harness happy paths exact (slope/rmd/std-dev/sat print the hand-verified numbers); matrix pure-math suite incl identity + singular + det4 cross-check; JSON-LD x3 parses + single h1 on all 10 new pages; site-gate PASS (0 fails, 0 warns, 318 pages)
- NOT deployed (per instruction): deploy.sh/wrangler/IndexNow skipped; sitemap.xml (1,746 URLs incl all 10 new) + llm.txt (316 tools + 130 guides) regenerated locally

## 2026-08-28 — 5-tool batch (auto/finance/education cluster) — built, NOT deployed
- car-affordability-calculator — reverse amortization budget->sticker (annuity factor 50.2621: $450/mo @7.2%/60mo -> $22,618 loan, $23,696 sticker after 6% tax/$1,500 fees/$4,000 down; OTD $26,618, interest $4,382); budget->sticker table + APR-by-credit-band table; AIO block
- capital-gains-tax-calculator — 2025 federal engine (stacking: ordinary+STCG fill 10-37% brackets, LTCG band-stacked at 0/15/20 with breakpoints single 48,350/533,400, MFJ 96,700/600,000, HoH 64,750/566,700; NIIT 3.8% at 200k/250k MAGI); node-verified examples: $75k+$25k LT -> $3,750 (15%); $210k+$80k LT -> $15,040 (18.8% incl. NIIT $3,040); MFJ $70k+$20k -> $0; crypto section (property rules, per-swap disposal, 1099-DA from TY2025, wash-sale inapplicable under current law); state top-rate table incl. WA 7% excise >~$278k; not-tax-advice disclaimer
- sig-fig-calculator — count+round engine verified (0.004578->4 sf; 2 sf -> 0.0046; 4578 2sf -> 4.6e+3; float-honest FAQ: 3.15@2sf->3.1, 2.675@3sf->2.67, 1.35@2sf->1.4); rules tables; least-precision operand rule (4.56x1.4->6.4; 12.11+0.3->12.4)
- auto-refinance-calculator — $18k@9.9%/36mo vs 5.9%/36mo+$300 fee: $579.96->$546.78 ($33.18/mo, $894.66 net, break-even mo 9); extend-term trap table (60mo: $347.15 payment but -$250.52 vs staying put); rate-cut table $20k/48mo
- mpg-calculator — 312 mi/11.9 gal = 26.2 mpg (8.97 L/100km, 13.2c/mi, $41.06 fill, 514.9 gal & $1,776.42/yr @13.5k); cost-per-1,000-mi table at $3.50; EPA-class ranges labeled; 235.214583 conversion constant verified
- embeds 88-92 added to /embed/ showcase (node --check clean); guides: how-much-car-can-i-afford-on-500-a-month, how-is-capital-gains-tax-calculated, how-to-count-significant-figures, when-to-refinance-your-car, how-to-calculate-mpg (read-time badges matched to word counts at 238 wpm)
- hubs: all-tools Finance 28->31 / Everyday 13->15; finance-tools Loans&Credit 26->28, Income&Salary 13->14 (+3 seo-table rows); everyday-tools Math&Numbers 11->12 + new Auto&Fuel section (mpg + rescued orphan fuel-cost-calculator); guides index 65->69 / 19->20; llm.txt regen (316 tools + 135 guides); auto-tools (concurrent wave's new hub) Buying&Payments 3->5 (+car-affordability, +auto-refinance) and mpg card beside fuel-cost
- NOT deployed: no deploy.sh, no indexnow, sitemap not regenerated (deferred to next deploy)
