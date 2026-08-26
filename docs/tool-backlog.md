# Tool Factory Backlog — hostile audit #2 (2026-08-26)
# Format: slug | category | type | est CPC | why | suggest(score K/L seeds, depth N)
# Audit #2 verdicts: 216 rows in -> 209 kept | 2 cut | 5 merged into surviving rows |
#   1 retyped (wedding-venue lead->calc, no server-side lead capture on static hosting) |
#   15 wave-7 auto rows pulled up from the research-notes tail into the ranked tiers
#   (marked †, no suggest score yet, placed by CPC x volume x buildability).
#   0 duplicates of live tools found (audit #1 earlier today already cut those 11).
#   Full verdict list: /tmp/backlog-audit.md (supersedes audit #1's tmp report).
# Scoring, from the 2026-08-26 rescan (docs/data/suggest-scan.json):
#   score = 100 x demand_frac x (0.4 + 0.6 x longtail) x (0.3 + 0.7 x cpc_norm)
#     demand_frac = seeds returning suggestions / seeds tried (1-2 seeds per slug)
#     longtail    = unique suggest variants across seeds, capped at 20
#     cpc_norm    = midpoint of est-CPC field / $50 ("low" -> $1)
# Zero-demand rows (score 0: no seed returned any suggestion) sit in the last tier —
#   suggest absence is not proof of zero volume (quirky for some head terms) but is weak evidence.
# CPC/volume figures are as-researched by the original waves, not re-verified externally.
# Pre-rewrite layouts: /tmp/tool-backlog.pre-suggest-rewrite.md + git history.
# Status tracking: built tools get moved to done.md by the factory cron.

## Score 80+ (1 slug)
student-loan-refinance-calculator | finance | calc | $30-80 | highest CPC in the file; SoFi/Earnest/Credible bid hard; weighted rate vs offer, break-even + interest saved; reuses loan-calculator pattern | suggest(score 100, 2/2 seeds, depth 20)

## Score 60-79 (5 slugs)
extended-car-warranty-cost-calculator | auto | calc | $20-50 | warranty vertical clicks run $20-50+; 8-12k/mo; age/mileage term-pricing bands, pure client-side | suggest(score 77, 2/2 seeds, depth 19)
diminished-value-claim-calculator | legal | calc | $15-40 | 17c formula (base loss x damage x mileage multipliers); 10-15k/mo; DV appraisers + PI attorneys bid; same multiplier-table pattern as settlement winners | suggest(score 68, 2/2 seeds, depth 20)
truck-accident-settlement-calculator | legal | calc | $25-60 | commercial vehicle premium; 8th settlement tool on a pattern proven 7x | suggest(score 68, 2/2 seeds, depth 12)
student-loan-consolidation-calculator | finance | calc | $15-40 | federal weighted-average rate ROUNDED UP to 1/8% (generic calcs get this wrong = the moat); 15-25k/mo; loans-category CPCs $30-55 | suggest(score 66, 2/2 seeds, depth 19)
heloc-vs-cash-out-refi-calculator | finance | calc | $15-35 | home equity = top finance CPC; comparison chooser, distinct from live heloc-payment + refinance-break-even | suggest(score 65, 2/2 seeds, depth 20)

## Score 40-59 (59 slugs: 51 scored + 8 †wave-7)
vin-decoder | auto | tool | $2-5 | "vin decoder" 350-550k/mo, the biggest auto keyword not in the catalog; free NHTSA vPIC API is CORS-open (client-side fetch, no key; house precedent: live currency/crypto rates) + static WMI/year-code fallback table; recall-lookup mode same page; volume + interlink play, vehicle-history advertisers fund it | †wave-7
pet-insurance-cost-calculator | insurance | calc | $12-30 | anchor for /pet-tools/ hub: species/breed/age/state premium table x reimbursement %; 40-60k/mo cluster; Lemonade/Trupanion bid; add worth-it break-even mode | suggest(score 59, 2/2 seeds, depth 20)
non-owner-car-insurance-cost-calculator | insurance | calc | $10-30 | state-average table for non-owner policies; 8-12k/mo; head-term CPC without the head-term SERP war; distinct from sr22 row; state-table pattern proved | suggest(score 58, 2/2 seeds, depth 20)
pslf-forgiveness-calculator | finance | calc | $10-30 | 120-payment projection vs standard/refi payoff comparison; loan-lawyer bids | suggest(score 58, 2/2 seeds, depth 20)
car-shipping-cost-calculator | auto | calc | $8-20 | auto transport is a notorious expensive-lead vertical (brokers pay $50-150/lead; monetized via display ads, no lead capture on static hosting); "car shipping cost"/"how much to ship a car"/"car transport cost" 40-70k/mo; per-mile tier x vehicle size x open-vs-enclosed table, pure client-side; nothing in backlog or live touches it | †wave-7
car-insurance-rate-increase-calculator | insurance | calc | $8-20 | "how much does car insurance go up after an accident" 15-25k/mo + DUI/speeding/ticket variants = 30-50k cluster; state surcharge tables (+40% avg accident, +80% DUI) are AIO-citable; insurers pay top CPC; distinct intent from live car-insurance-estimator (generic cost vs post-incident delta) | †wave-7
irmaa-calculator | insurance | calc | $10-25 | senior market high RPM; MAGI 2-year lookback bracket tables; pairs with rmd-calculator | suggest(score 54, 2/2 seeds, depth 20)
auto-refinance-calculator | finance | calc | $8-25 | refi lenders pay top auto-finance CPC; current APR vs offer + fee break-even; distinct from auto-loan-calculator and refinance-break-even | suggest(score 53, 2/2 seeds, depth 20)
parent-plus-loan-calculator | finance | calc | $8-25 | ~4.2% origination fee true-APR reveal is the hook; 15-25k/mo; refi lenders target parents | suggest(score 53, 2/2 seeds, depth 20)
student-loan-repayment-plan-comparison-calculator | finance | calc | $8-25 | education-lane anchor: standard vs graduated vs extended vs IBR/PAYE/ICR, 20/25-yr forgiveness projection; "student loan calculator" 100k+/mo | suggest(score 53, 2/2 seeds, depth 20)
totaled-car-value-calculator | insurance | calc | $8-25 | ACV from depreciation curve + state total-loss threshold table; 10-15k/mo; feeds diminished-value tool | suggest(score 53, 2/2 seeds, depth 20)
sr22-insurance-cost-calculator | insurance | calc | $10-25 | nonstandard auto premium CPC; state filing-fee table | suggest(score 53, 2/2 seeds, depth 19)
homeowners-dwelling-coverage-calculator | insurance | calc | $10-25 | dwelling-replacement cost by regional build rates; regional insurer bids; no homeowners tool live | suggest(score 51, 2/2 seeds, depth 18)
dog-food-calculator | pets | calc | $8-20 | RER = 70 x kg^0.75 x activity factor; "how much should I feed my dog" ~35k/mo; fresh-food DTC pays top pet CAC | suggest(score 50, 2/2 seeds, depth 20)
lease-payment-calculator | auto | calc | $4-10 | "lease payment calculator"/"car lease calculator" 30-60k/mo head term missing from the file; cap-cost minus residual + money-factor math, engine shared with lease-vs-buy row (house precedent: auto-loan/car-payment/loan coexist); lease lenders bid | †wave-7
rmd-calculator | finance | calc | $8-18 | uniform-table RMD by age + balance; IRMAA interlink (merged 2026-08-26: wave-6 required-minimum-distribution-calculator was the same tool, one row now) | suggest(score 48, 2/2 seeds, depth 20)
lease-vs-buy-car-calculator | auto | calc | $8-20 | ~20k/mo; pure NPV math (depreciation, money factor, mileage overage) | suggest(score 48, 2/2 seeds, depth 19)
college-cost-calculator | education | calc | $6-18 | in-state vs out-of-state vs private 4-yr table; programmatic-college leads $20-100 CPL; how-much-should-i-borrow mode folded in (audit #2 2026-08-26: first-year-salary cap rule + per-$10k payment table; was a depth-3 row, weakest signal in the file) | suggest(score 47, 2/2 seeds, depth 20)
llc-vs-scorp-calculator | finance | calc | $8-20 | tax-structure chooser, formation services bid; distinct from live incorporation-cost-calculator (fees vs structure) | suggest(score 47, 2/2 seeds, depth 18)
wedding-loan-calculator | finance | calc | $10-25 | personal-loan lenders bid "wedding loan" 15k/mo; thin re-skin of loan-calculator pattern (house precedent: auto-loan + loan + car-payment coexist) | suggest(score 46, 2/2 seeds, depth 15)
car-repair-cost-calculator | auto | calc | $6-15 | umbrella hub; 30k+/mo; by-repair table (diagnose -> parts -> labor hours) | suggest(score 45, 2/2 seeds, depth 20)
cat-food-calculator | pets | calc | $6-15 | same RER engine, second page; ~15k/mo; cat fresh-food brands bid | suggest(score 45, 2/2 seeds, depth 20)
windshield-replacement-cost-calculator | auto | calc | $8-18 | glass cos bid hard (Safelite class); 25-40k/mo; with/without-insurance toggle + by-vehicle glass table | suggest(score 45, 2/2 seeds, depth 18)
529-college-savings-calculator | finance | calc | $5-15 | tuition-inflation projection + monthly needed + 30-state deduction table; triple AIO-citable | suggest(score 44, 2/2 seeds, depth 20)
capital-gains-tax-calculator | finance | calc | $5-15 | 90k/mo + crypto longtails; distinct from income-tax-calculator (salary tax); federal + state LTCG/STCG bracket tables | suggest(score 44, 2/2 seeds, depth 20)
car-affordability-calculator | auto | calc | $5-15 | reverse of auto-loan-calculator: budget -> sticker incl tax/fees; 15-25k/mo; pairs with live how-much-car-payment guide | suggest(score 44, 2/2 seeds, depth 20)
upside-down-car-loan-calculator | auto | calc | $5-15 | "upside down car loan"/"negative equity car" cluster 15-30k/mo; amortization-vs-depreciation curve crossing shows when equity turns positive = unique math no generic calc does; refi lenders bid; distinct from gap-insurance row (policy cost vs equity math) | †wave-7
gap-insurance-cost-calculator | insurance | calc | $5-15 | dealer one-time vs insurer add-on + loan-balance gap check; interlinks auto-loan and depreciation tools | suggest(score 44, 2/2 seeds, depth 20)
engine-replacement-cost-calculator | auto | calc | $4-10 | "engine replacement cost" 20-40k/mo, bigger than transmission which already has a row; reman vs used vs rebuild vs in-frame repair table; parts retailers + reman engine suppliers bid; shares the repair-cost table pattern | †wave-7
lasik-cost-calculator | health | calc | $6-14 | local surgical LTV; by-provider-type price bands | suggest(score 44, 2/2 seeds, depth 20)
student-loan-payoff-calculator | finance | calc | $8-20 | federal daily-simple-interest amortization + extra payments + avalanche; 10-18k/mo; student-specific variant of loan payoff (house precedent: credit-card-payoff pair) | suggest(score 44, 2/2 seeds, depth 16)
529-to-roth-rollover-calculator | finance | calc | $6-15 | SECURE 2.0 $35k cap / 15-yr age / annual-limit years-to-complete math; fresh keyword, thin SERP | suggest(score 43, 2/2 seeds, depth 19)
ev-charger-installation-cost-calculator | auto | calc | $5-12 | "EV charger installation cost"/"level 2 charger install" 15-30k/mo; hardware + electrician hours + panel-upgrade decision tree; charger brands and home-services electricians pay home-improvement CPCs; distinct from ev-charging-cost row (install vs energy) | †wave-7
actual-vs-standard-mileage-calculator | finance | calc | $5-12 | IRS standard rate vs actual expenses; 15-25k/mo, Jan-Apr peak; tax-software bids; interlinks live self-employment-tax + quarterly-tax tools | suggest(score 42, 2/2 seeds, depth 20)
catalytic-converter-replacement-cost-calculator | auto | calc | $5-12 | ~18k/mo; theft-replacement spikes; parts retailers bid | suggest(score 42, 2/2 seeds, depth 20)
dog-dental-cleaning-cost-calculator | pets | calc | $5-12 | biggest uncovered vet-procedure keyword 20-30k/mo; anesthesia price-band table; vet financing bids | suggest(score 42, 2/2 seeds, depth 20)
dog-surgery-cost-calculator | pets | calc | $5-12 | TPLO/patella/foreign-body procedure table by dog size; 15-25k/mo; vet-financing advertisers pay near-insurance CPCs | suggest(score 42, 2/2 seeds, depth 20)
ev-charging-cost-calculator | auto | calc | $5-12 | "how much to charge an EV" ~15k/mo rising; kWh x mi/kWh vs gas comparison; interlinks live fuel-cost-calculator | suggest(score 42, 2/2 seeds, depth 20)
ev-battery-replacement-cost-calculator | auto | calc | $4-10 | "EV battery replacement cost" 12-25k/mo and rising as 2011-2018 EV packs age out of 8yr/100k warranties; by-model pack-price table + warranty-check mode; same warranty bidders as extended-car-warranty-cost (the #2 score row in this file) | †wave-7
new-vs-used-car-calculator | auto | calc | $5-12 | distinct from lease-vs-buy; depreciation delta + insurance + financing 5-yr spread | suggest(score 42, 2/2 seeds, depth 20)
plastic-surgery-cost-calculator | health | calc | $5-12 | 50k/mo; by-procedure x by-state table pattern | suggest(score 42, 2/2 seeds, depth 20)
student-loan-forgiveness-tax-bomb-calculator | finance | calc | $5-12 | IDR forgiveness TAXABLE again post-2025 (ARPA exclusion ended); 2-5k/mo AIO longtail zone; complements repayment anchor | suggest(score 42, 2/2 seeds, depth 20)
transmission-repair-cost-calculator | auto | calc | $5-12 | ~25k/mo; rebuild vs replace vs used table = AIO citable | suggest(score 42, 2/2 seeds, depth 20)
vet-visit-cost-calculator | pets | calc | $5-12 | procedure price table incl emergency mode; ~20k/mo; local vets + insurance bid | suggest(score 42, 2/2 seeds, depth 20)
roof-replacement-cost-calculator | home | calc | $6-15 | 55k/mo; cost estimator distinct from live roofing-calculator (materials math), house precedent: deck-calculator + deck-cost-calculator pair | suggest(score 42, 2/2 seeds, depth 18)
fafsa-sai-calculator | education | calc | $4-12 | SAI confusion still peaking; 20-50k/mo seasonal; public formula (5.64% assessment, auto-Pell bands) = pure client-side | suggest(score 41, 2/2 seeds, depth 20)
new-tires-cost-calculator | auto | calc | $4-12 | 30-40k/mo; per-set price by size class and type + install add-ons; tire retailers bid hard; cost sibling of tire-size geometry tool | suggest(score 41, 2/2 seeds, depth 20)
401k-match-calculator | finance | calc | $5-12 | employer-match (dollar-for-dollar vs partial vs true-up) projection; brokerage ads; distinct from payroll-calculator (deductions) and retirement-calculator (projection) | suggest(score 41, 2/2 seeds, depth 19)
car-ac-repair-cost-calculator | auto | calc | $5-12 | 20-30k/mo summer spikes; recharge vs leak vs compressor diagnostic tree; tree UI is the differentiator | suggest(score 41, 2/2 seeds, depth 19)
wedding-insurance-cost-calculator | insurance | calc | $5-12 | extends insurance category pattern; $75-500 premium table by coverage; 3-6k/mo | suggest(score 41, 2/2 seeds, depth 19)
brake-replacement-cost-calculator | auto | calc | $5-10 | ~30k/mo; pads/rotors/calipers x axle combos, per-axle table | suggest(score 40, 2/2 seeds, depth 20)
car-battery-replacement-cost-calculator | auto | calc | $4-10 | 15-25k/mo; flooded vs AGM vs EFB, DIY vs installed, core fee; trivial table | suggest(score 40, 2/2 seeds, depth 20)
education-tax-credit-calculator | finance | calc | $4-10 | AOTC vs LLC chooser by MAGI and expense type; pairs with scholarship-taxability | suggest(score 40, 2/2 seeds, depth 20)
puppy-vaccination-schedule-calculator | pets | calc | $4-10 | birthdate -> DHPP/rabies timeline; 25-30k/mo; vet-clinic bids, recurring new-puppy intent | suggest(score 40, 2/2 seeds, depth 20)
spay-neuter-cost-calculator | pets | calc | $4-10 | by species/weight/region clinic price bands; 20-25k/mo | suggest(score 40, 2/2 seeds, depth 20)
student-loan-interest-deduction-calculator | finance | calc | $5-10 | $2,500 cap + MAGI phase-out slider; tax-season evergreen | suggest(score 40, 2/2 seeds, depth 20)
timing-belt-replacement-cost-calculator | auto | calc | $4-10 | 15-20k/mo; $500-2,000 by engine + interval table + interference-engine warning list | suggest(score 40, 2/2 seeds, depth 20)
towing-cost-calculator | auto | calc | $4-10 | ~12k/mo; hook fee + per-mile by tow type; local tow + roadside plans bid | suggest(score 40, 2/2 seeds, depth 20)
sat-score-calculator | education | calc | $4-12 | 25-60k/mo seasonal; raw->scaled->percentile from published College Board tables; test-prep bidders pay $10-30/click adjacent | suggest(score 40, 2/2 seeds, depth 19)

## Score 20-39 (141 slugs: 134 scored + 7 †wave-7)
act-score-calculator | education | calc | $3-10 | 15-35k/mo seasonal; published ACT tables; second page on the sat-score engine | suggest(score 39, 2/2 seeds, depth 20)
raw-dog-food-calculator | pets | calc | $3-10 | 2-3% body weight 80/10/10 split; 8-15k/mo; premium raw DTC pays top pet-food CAC; distinct keyword from dog-food-calculator | suggest(score 39, 2/2 seeds, depth 20)
car-key-replacement-cost-calculator | auto | calc | $4-12 | 15-25k/mo; basic vs transponder vs smart fob x dealer vs locksmith; table-first | suggest(score 39, 2/2 seeds, depth 18)
ivf-cost-calculator | health | calc | $6-15 | clinics + fertility financing bid; medication cycle stacker | suggest(score 39, 2/2 seeds, depth 16)
car-maintenance-cost-calculator | auto | calc | $3-8 | 30/60/90k service-schedule table by mileage; ~10k/mo; internal-links every repair-cost page above | suggest(score 38, 2/2 seeds, depth 20)
catering-cost-per-person-calculator | wedding | calc | $3-8 | 10-20k/mo; per-head table by service style = AIO citable; caterer ads | suggest(score 38, 2/2 seeds, depth 20)
college-roi-calculator | education | calc | $3-8 | Georgetown CEW net-ROI data public and citable; "is college worth it" 10-20k/mo with weak tool SERPs | suggest(score 38, 2/2 seeds, depth 20)
cost-of-owning-a-cat-calculator | pets | calc | $3-8 | cat twin; ~15-20k/mo; DTC cat brands fund the SERP | suggest(score 38, 2/2 seeds, depth 20)
cost-of-owning-a-dog-calculator | pets | calc | $3-8 | first-year vs monthly stacker; ~40k/mo; pet-supply DTC ads | suggest(score 38, 2/2 seeds, depth 20)
destination-wedding-cost-calculator | wedding | calc | $3-8 | 12-20k/mo; resort package + guest travel + legal fees; resorts pay premium CPL | suggest(score 38, 2/2 seeds, depth 20)
dog-boarding-cost-calculator | pets | calc | $3-8 | nights x service tier; Rover/Wag ads; ~15k/mo combined | suggest(score 38, 2/2 seeds, depth 20)
dog-grooming-cost-calculator | pets | calc | $3-8 | 20-30k/mo; size/coat/service price table; local + franchise ads, 6-8 week repeat cycle | suggest(score 38, 2/2 seeds, depth 20)
dog-training-cost-calculator | pets | calc | $3-8 | group vs private vs board-and-train chooser; 10-15k/mo | suggest(score 38, 2/2 seeds, depth 20)
electric-dog-fence-cost-calculator | pets | calc | $3-8 | DIY wireless vs pro buried-wire per-acre; ~10k/mo; installer lead-gen; distinct intent from live fence-cost-calculator (posts-and-panels), cross-link | suggest(score 38, 2/2 seeds, depth 20)
honeymoon-budget-calculator | wedding | calc | $3-8 | destination math; travel + registry advertisers; ~10k/mo | suggest(score 38, 2/2 seeds, depth 20)
party-rental-cost-calculator | events | calc | $3-8 | tent size table + per-item rental stacker; 10-20k/mo; rental yards bid, near-zero tool competition | suggest(score 38, 2/2 seeds, depth 20)
vehicle-registration-cost-calculator | auto | calc | $3-8 | 50-state fee table = the AIO pattern that won for car-insurance-estimator; ~15k/mo | suggest(score 38, 2/2 seeds, depth 20)
wheel-alignment-cost-calculator | auto | calc | $3-8 | 25-30k/mo; 2 vs 4-wheel x single vs lifetime plan; cross-sell new-tires tool | suggest(score 38, 2/2 seeds, depth 20)
window-tint-cost-calculator | auto | calc | $3-8 | 25-35k/mo; vehicle x film-type bands PLUS 50-state VLT legality table = double AIO magnet | suggest(score 38, 2/2 seeds, depth 20)
car-cost-of-ownership-calculator | auto | calc | $3-8 | "cost of ownership"/"true cost to own"/"how much does it cost to own a car" 25-50k/mo; 5-yr stacker (depreciation + insurance + fuel + maintenance + financing + fees) = hub page internal-linking every auto row in this file; Edmunds owns the branded phrase, not the generic keywords | †wave-7
engagement-ring-budget-calculator | wedding | calc | $2-8 | "engagement ring cost" 25k/mo + "how much to spend" 10k/mo; salary-rule vs 2-3mo myth + carat table; jewelers bid | suggest(score 37, 2/2 seeds, depth 20)
wedding-venue-cost-calculator | wedding | calc | $4-6 | venue = #1 line item; confirmed $5.42 CPC; by-state and venue-type table (RETYPED lead->calc audit #2 2026-08-26: no server-side lead capture on static hosting, display-ads calc instead) | suggest(score 37, 2/2 seeds, depth 20)
pell-grant-eligibility-calculator | education | calc | $3-8 | SAI-band -> award table ($7,395 max); 5-15k/mo; reuses the fafsa-sai engine | suggest(score 37, 2/2 seeds, depth 19)
towing-capacity-calculator | auto | tool | $3-8 | GVWR minus curb weight, GCWR check, tongue-weight math; 20-40k/mo; capability sibling of towing-cost | suggest(score 37, 2/2 seeds, depth 19)
lease-buyout-calculator | auto | calc | $4-10 | "car lease buyout"/"should I buy my leased car" 10-20k/mo; residual vs current-market value vs early-termination payoff 3-way compare + buyout loan payment; lenders and used-car retailers bid; distinct from lease-vs-buy (decision at signing vs end-of-lease) | †wave-7
strut-replacement-cost-calculator | auto | calc | $3-8 | "strut replacement cost"/"shocks and struts cost" 15-30k/mo; per-axle parts+labor combos + strut-mount + post-replacement alignment cross-sell to wheel-alignment row; complete-strut-assembly retailers bid | †wave-7
car-sales-tax-calculator | auto | calc | $3-8 | "sales tax on a car"/"vehicle sales tax" 15-30k/mo; state+county rate table with trade-in-credit states and title/registration add-ons = the car-specific moat over live generic sales-tax-calculator; cross-links vehicle-registration-cost row | †wave-7
salvage-title-value-calculator | insurance | calc | $4-10 | "salvage title value"/"salvage car value" 8-15k/mo; % of ACV by damage tier + rebuilt-title resale discount table; we-buy-junk-car and salvage-auction lead-gen pays; closes the totaled-car-value -> diminished-value -> salvage chain | †wave-7
ap-score-calculator | education | calc | $2-6 | per-exam raw->scaled worksheets; May spike 10-25k/mo; third page on the sat/act engine | suggest(score 36, 2/2 seeds, depth 20)
cat-litter-cost-calculator | pets | calc | $2-6 | substrate x price-per-lb + subscription math; 5-10k/mo; subscription litter DTC bids | suggest(score 36, 2/2 seeds, depth 20)
dog-pregnancy-calendar | pets | calc | $3-6 | 63-day gestation wheel; 15-20k/mo breeder intent, near-zero tool competition; + cat-pregnancy-calendar (63-65 day wheel) as second page on the same engine (folded in audit #2 2026-08-26) | suggest(score 36, 2/2 seeds, depth 20)
oil-change-cost-calculator | auto | calc | $3-6 | 40-60k/mo volume leader; synthetic vs blend cost-per-mile with interval math; quick-lube chains bid | suggest(score 36, 2/2 seeds, depth 20)
pet-cremation-cost-calculator | pets | calc | $2-6 | communal vs individual + urn line items; 10-15k/mo; factual tone-careful build | suggest(score 36, 2/2 seeds, depth 20)
photo-booth-rental-cost-calculator | events | calc | $2-6 | 10-20k/mo across weddings/proms/corporate; booth operators bid aggressively | suggest(score 36, 2/2 seeds, depth 20)
puppy-feeding-calculator | pets | calc | $2-6 | growth-phase calories (2-3x RER by age band) + meals/day taper; 15-20k/mo; distinct keyword from adult dog-food-calculator | suggest(score 36, 2/2 seeds, depth 20)
scholarship-taxability-calculator | education | calc | $3-6 | qualified-expense vs room-and-board split; <1k/mo but that is the AIO longtail zone (82% of AIOs cite <1k/mo keywords); cheap build | suggest(score 36, 2/2 seeds, depth 20)
subnet-calculator | dev | oss-wrap | $2-6 | rs/node-netmask (MIT): CIDR<->mask<->range<->broadcast, host count, split table; 55k+/mo; hosting/VPN ads bid (UI ref: cidr.xyz MIT) | suggest(score 36, 2/2 seeds, depth 20)
teacher-salary-by-state-calculator | education | table | $2-6 | static NEA/BLS state x step-schedule data = near-zero build, the state-table AIO pattern; 15-25k/mo | suggest(score 36, 2/2 seeds, depth 20)
car-title-transfer-cost-calculator | auto | calc | $2-6 | "title transfer cost" + 50 state longtails 15-30k/mo; sibling of vehicle-registration-cost row (title vs reg fee; sale vs gift vs inheritance modes); DMV-service advertisers; near-zero tool competition in SERPs | †wave-7
dealer-doc-fee-calculator | auto | table | $2-6 | "dealer fees"/"dealer doc fees" 10-25k/mo at purchase-decision stage; 50-state doc-fee table (capped in ~10 states) + out-the-door fee stacker = the state-table AIO pattern that won for car-insurance-estimator | †wave-7
marriage-tax-penalty-calculator | finance | calc | $5-15 | MFJ vs MFS side-by-side reuses income-tax engine; tax software bids; 5-15k/mo, Jan-Apr peak | suggest(score 36, 2/2 seeds, depth 14)
vet-bill-financing-calculator | finance | calc | $5-15 | CareCredit deferred-interest trap math (0% promo, ~27% retroactive APR); 3-6k/mo; consumer-finance CPC; cross-sells vet dental + surgery pages | suggest(score 36, 2/2 seeds, depth 14)
barcode-generator | dev | oss-wrap | $2-5 | productdevbook/etiket (MIT, active, zero-dep): Code128/UPC/EAN/39 + 40 formats, SVG+PNG; "barcode generator" ~50k/mo; ALSO styled-QR = upgrade path for live qr-code-generator (ONE row: JsBarcode merged here 2026-08-26, etiket preferred, JsBarcode fallback) | suggest(score 35, 2/2 seeds, depth 20)
certificate-decoder | dev-sec | asn1js | $2-5 | lapo-luchini/asn1js (ISC): PEM cert/CSR/key -> ASN.1 tree + readable fields; "certificate decoder" 8k + "csr decoder" 3k/mo; SSL-vendor ads = best CPC in lane | suggest(score 35, 2/2 seeds, depth 20)
dog-ideal-weight-calculator | pets | calc | $2-5 | breed + BCS healthy range; ~15k/mo; weight-loss-dog-food brand ads | suggest(score 35, 2/2 seeds, depth 20)
dog-life-expectancy-calculator | pets | calc | $2-5 | ~80-90k/mo cluster; breed-size table; shares data with dog-age page | suggest(score 35, 2/2 seeds, depth 20)
favicon-generator | dev | oss-wrap | $2-5 | ruisaraiva19/favycon (MIT): canvas pipeline -> favicon.ico + apple-touch + manifest; "favicon generator" ~30k/mo + "ico converter" ~15k/mo | suggest(score 35, 2/2 seeds, depth 20)
pdf-password-tools | pdf | oss-wrap | $1-3 | pdfstudio lock() + unlock() on ONE shell, TWO pages: "password protect pdf" ~90k/mo + "remove password from pdf" ~150k/mo; "never uploaded" privacy angle vs upload-based SERP leaders (protect-pdf + pdf-password-remover merged into one row audit #2 2026-08-26: same lib, inverse verbs) | suggest(scores 35 + 33, the two merged rows, both 2/2 seeds depth 20)
tire-size-calculator | auto | tool | $2-5 | 40k+/mo volume king (retail tire sites own it now); pure geometry 225/65R17 -> diameter/width/speedo delta | suggest(score 35, 2/2 seeds, depth 20)
wedding-dj-cost-calculator | wedding | calc | $2-5 | 10-20k/mo; 4-hr base + add-ons + live-band toggle ("wedding band cost" rides the page) | suggest(score 35, 2/2 seeds, depth 20)
wedding-florist-cost-calculator | wedding | calc | $1.5-5 | per-piece pricing x table count; 10-18k/mo; high florist margins fund the ads | suggest(score 35, 2/2 seeds, depth 20)
wedding-planner-cost-calculator | wedding | calc | $2-5 | full vs partial vs month-of tier table vs 10-15% of budget; 15-25k/mo | suggest(score 35, 2/2 seeds, depth 20)
weighted-gpa-calculator | education | calc | $2-5 | AP/IB +1.0, honors +0.5; 10-20k/mo; live gpa-calculator is unweighted; SHIP gpa-goal mode inside this page (merged 2026-08-26) | suggest(score 35, 2/2 seeds, depth 20)
car-depreciation-calculator | auto | calc | $4-10 | ~15k/mo; segment curve + yr1 drop; feeds lease-vs-buy and new-vs-used interlinks | suggest(score 35, 2/2 seeds, depth 16)
wedding-transportation-cost-calculator | wedding | calc | $4-10 | highest-CPC local-service lane (limo/party-bus clicks $5-15); 10-20k/mo cluster | suggest(score 35, 2/2 seeds, depth 16)
bachelorette-party-cost-calculator | events | calc | $1.5-4 | $1,300/person avg (Knot) and trending; per-person split with tip-splitter mechanics; low comp | suggest(score 34, 2/2 seeds, depth 20)
cat-age-calculator | pets | calc | $2-3 | ~60k/mo; 1st-year=15, 2nd=+9, then +4; trivial; volume play | suggest(score 34, 2/2 seeds, depth 20)
cat-life-expectancy-calculator | pets | calc | $2-4 | ~30-50k/mo; indoor vs outdoor table + breed adjusters; reuses dog-life-expectancy engine | suggest(score 34, 2/2 seeds, depth 20)
curl-converter | dev | curlconverter | $1.5-4 | MIT, tree-sitter wasm lazy (their own site is fully client-side); curl -> Python/fetch/axios/Go + 27 targets; ~12k/mo | suggest(score 34, 2/2 seeds, depth 20)
dog-heat-cycle-calculator | pets | calc | $2-4 | next-cycle prediction (6-12 mo interval); 8-12k/mo breeder niche, zero quality tools ranking | suggest(score 34, 2/2 seeds, depth 20)
ielts-band-score-calculator | education | calc | $1-4 | four-section mean + half-band rounding; 15-30k/mo global; pairs with cgpa-to-gpa as international cluster | suggest(score 34, 2/2 seeds, depth 20)
image-metadata-remover | dev | oss-wrap | $2-4 | szTheory/exifcleaner (MIT) proves pure-JS lossless strip (no exiftool); "remove exif" ~15k/mo; privacy advertisers bid | suggest(score 34, 2/2 seeds, depth 20)
svg-optimizer | dev | oss-wrap | $1.5-4 | svg/svgo (MIT) in-browser, svgomg proves the bundle; "svg optimizer"/"minify svg" ~15k/mo; presets + before/after diff (duplicate rows from both image waves merged 2026-08-26) | suggest(score 34, 2/2 seeds, depth 20)
wedding-budget-calculator | wedding | calc | $2-4 | 30-70k/mo head term + hub for the whole wedding cluster; allocates budget by % scaled by guest count; build first in the lane | suggest(score 34, 2/2 seeds, depth 20)
wedding-dress-cost-calculator | wedding | calc | $1.5-4 | 20-35k/mo; dress + alterations (10-20% adder) + preservation; online bridal retailers bid | suggest(score 34, 2/2 seeds, depth 20)
wedding-officiant-cost-calculator | wedding | calc | $1.5-4 | 6-10k/mo; civil vs religious vs professional fee bands | suggest(score 34, 2/2 seeds, depth 20)
wedding-photographer-cost-calculator | wedding | calc | $1.5-4 | biggest vendor cluster 30-50k/mo; hours x metro tier x second shooter; photographers buy leads | suggest(score 34, 2/2 seeds, depth 20)
wedding-videographer-cost-calculator | wedding | calc | $1.5-4 | 6-12k/mo; tiers + photographer-bundle discount mode | suggest(score 34, 2/2 seeds, depth 20)
dental-implant-cost-calculator | health | calc | $5-12 | 45k/mo; all-on-4 by-state longtails; clinic ads | suggest(score 34, 2/2 seeds, depth 14)
cgpa-to-gpa-converter | education | convert | $1-3 | 10-point Indian CGPA -> US 4.0 + percentage tables; 50k+/mo global student volume; near-zero effort | suggest(score 33, 2/2 seeds, depth 20)
credit-card-validator | finance-dev | oss-wrap | $1-3 | braintree/card-validator (MIT): Luhn + brand + BIN detection; ~50k/mo; loud no-storage banner | suggest(score 33, 2/2 seeds, depth 20)
dog-chocolate-toxicity-calculator | pets | calc | $1-3 | "dog ate chocolate" ~100-150k/mo variants; theobromine mg/kg thresholds + always-call-vet CTA; reference tool; volume play | suggest(score 33, 2/2 seeds, depth 20)
event-space-capacity-calculator | events | calc | $1-3 | sq-ft-per-person by seating style; 3-6k/mo; pairs with venue tool | suggest(score 33, 2/2 seeds, depth 20)
exif-viewer | dev | oss-wrap | $1-3 | mattiasw/ExifReader (MPL-2.0, active): EXIF/IPTC/XMP table + GPS map; "exif viewer" ~25k/mo; vendor unmodified + notice = compliant (merged duplicate exif-metadata-viewer row 2026-08-26; strip-metadata is the separate image-metadata-remover row) | suggest(score 33, 2/2 seeds, depth 20)
final-grade-calculator | education | calc | $1-3 | 300k+/mo at Dec + May peaks (RogerHub famous); trivial formula; embed magnet; volume monster | suggest(score 33, 2/2 seeds, depth 20)
iban-validator | finance-dev | oss-wrap | $1-3 | Simplify/ibantools (MIT OR MPL-2.0, verified): mod-97 + per-country rules; "iban validator" 90k+/mo global | suggest(score 33, 2/2 seeds, depth 20)
js-obfuscator | dev | javascript-obfuscator | $1-3 | BSD-2, browser build exists; string-array + control-flow options; ~12k/mo | suggest(score 33, 2/2 seeds, depth 20)
json-to-typescript | dev | quicktype | $1-3 | Apache-2.0 client-side engine; "json to typescript" 4k + java/pojo/go/rust aggregate 12k+/mo | suggest(score 33, 2/2 seeds, depth 20)
mermaid-diagram-suite | dev | mermaid | $1-3 | mermaid (MIT) behind 3-4 pages: sequence-diagram-maker 25k/mo, er-diagram-maker 15k/mo, class-diagram-maker 10k/mo; FLAG: upgrades live flowchart-maker + gantt-chart-maker with a "mermaid syntax" mode, do not duplicate them | suggest(score 33, 2/2 seeds, depth 20)
minifier-trio | dev | terser+csso+html-minifier | $1-3 | one shell, 3 pages: minify js 18k, css minifier 25k, minify html 8k/mo; terser BSD-2 + csso MIT + html-minifier MIT | suggest(score 33, 2/2 seeds, depth 20)
password-strength-checker | dev | zxcvbn-ts | $1-3 | zxcvbn (MIT fork, active): entropy + crack-time; lazy ~800KB dictionary; ~25k/mo; password-manager ads bid | suggest(score 33, 2/2 seeds, depth 20)
phone-number-validator | dev | libphonenumber-js | $1-3 | MIT, offline Google metadata: validity + E.164 formats + carrier type; ~15k/mo | suggest(score 33, 2/2 seeds, depth 20)
puppy-adult-size-calculator | pets | calc | $1-3 | "how big will my puppy get" 25-40k/mo; growth-curve percentage math + mixed-breed range; trivial | suggest(score 33, 2/2 seeds, depth 20)
qr-code-with-logo | creator | oss-wrap | $1-3 | qr-code-styling (MIT, active): dots/logo/gradients, PNG/SVG; "qr code with logo" ~12k + "custom qr code" ~20k/mo; distinct intent from live plain qr-code-generator; dynamic-QR SaaS affiliate upside (fancy-qr-generator row merged here 2026-08-26) | suggest(score 33, 2/2 seeds, depth 20)
quinceanera-cost-calculator | events | calc | $1-3 | 5-10k/mo for $5k-20k events; underserved SERP with a real advertiser base; Latino-events niche the big sites ignore | suggest(score 33, 2/2 seeds, depth 20)
robots-txt-validator | dev | oss-wrap | $1-3 | samclarke/robots-parser (MIT, active): validate + "is this URL blocked" wildcard matcher + AI-crawler table; distinct intent from live robots-txt-generator (check vs create) | suggest(score 33, 2/2 seeds, depth 20)
sql-playground | dev | sql.js | $1-3 | SQLite-to-wasm ~1MB, sample DB + user DDL -> results grid; "sqlite online" 8k + "sql playground" 6k/mo; runs, complements live sql-formatter (format) | suggest(score 33, 2/2 seeds, depth 20)
watermark-pdf | pdf | oss-wrap | $1-3 | pdf-lib stamp overlay/underlay via pdfstudio; "watermark pdf" ~40k/mo | suggest(score 33, 2/2 seeds, depth 20)
wedding-alcohol-calculator | wedding | calc | $1-3 | 1-drink-per-guest-per-hour rule + bottle math; 5-15k/mo longtails; embed king for wedding blogs | suggest(score 33, 2/2 seeds, depth 20)
wedding-cake-servings-calculator | wedding | calc | $1-3 | tier-size to servings chart + price-per-slice; 3-8k/mo; trivial build | suggest(score 33, 2/2 seeds, depth 20)
wedding-invitation-cost-calculator | wedding | calc | $1-3 | 8-15k/mo; piece price + postage math; stationery printers bid | suggest(score 33, 2/2 seeds, depth 20)
bcrypt-generator | dev | bcrypt.js | $1-2 | BSD-2 (per raw LICENSE): hash + verify + rounds slider; ~5k/mo; distinct from live MD5/SHA-only hash-generator | suggest(score 32, 2/2 seeds, depth 20)
code-beautifier | dev | js-beautify | $1-2.5 | js-beautify (MIT): js/css/html beautify 18k/mo combined; same shell as minifier-trio | suggest(score 32, 2/2 seeds, depth 20)
compress-pdf | pdf | oss-wrap | $0.5-2 | pdfstudio lossless + PDFLince (MIT) rerender-downscale path; ~500k/mo biggest pdf verb after merge; honest "lossless / never uploaded" angle only | suggest(score 32, 2/2 seeds, depth 20)
docx-viewer | document | oss-wrap | $1-2 | flyfish-dev/file-viewer (Apache-2.0) self-hostable wasm; "open docx online" ~30k/mo | suggest(score 32, 2/2 seeds, depth 20)
extract-pdf-pages | pdf | oss-wrap | $0.5-2 | pdfstudio arbitrary page selection ("pull pages 2,5-7"), distinct intent from split; ~40k/mo | suggest(score 32, 2/2 seeds, depth 20)
html-to-markdown | dev | turndown | $0.8-2 | MIT; paste HTML -> GFM; ~10k/mo; reverse-pair with live markdown-to-html | suggest(score 32, 2/2 seeds, depth 20)
image-color-picker | creator | oss-wrap | $1-2.5 | lokesh/color-thief (MIT): eyedropper + dominant palette from image; "image color picker" ~25k + "color palette from image" ~15k/mo = ONE tool, two keywords (merged 2026-08-26); distinct from live color-converter (manual palettes) | suggest(score 32, 2/2 seeds, depth 20)
image-cropper | creator | oss-wrap | $0.8-2 | fengyuanchen/cropperjs (MIT): social presets (YT thumbnail, IG, LinkedIn banner); "crop image online" ~40k/mo + every "X size" spec query | suggest(score 32, 2/2 seeds, depth 20)
image-to-text-ocr | image | oss-wrap | $0.5-2 | tesseract.js (Apache-2.0, verified) wasm worker, 100+ langs; "image to text"/"ocr online" 100k+/mo; volume play | suggest(score 32, 2/2 seeds, depth 20)
json-diff | dev | jsondiffpatch | $1-2 | MIT structural diff with array-move detection; "json diff" 10k + "compare json" 4k/mo; distinct from live text diff-checker, cross-link | suggest(score 32, 2/2 seeds, depth 20)
json-viewer | dev | oss-wrap | $1-2.5 | jsoneditor (Apache-2.0, v10 verified) tree/table viewer; "json viewer" 40k + "json editor online" 20k/mo; ADJACENT to live json-formatter, distinct keyword, cross-link hard | suggest(score 32, 2/2 seeds, depth 20)
markdown-to-word | document | oss-wrap | $1-2 | vace/markdown-docx (MIT) on dolanmiu/docx (MIT): real OOXML with tables/images; "markdown to word" ~8k/mo | suggest(score 32, 2/2 seeds, depth 20)
markdown-toc-generator | dev | oss-wrap | $0.5-2 | Flet/github-slugger (ISC, vendor+pin, dormant) + doctoc (MIT) as behavior ref: GitHub-accurate anchors (emoji/case/duplicates) are the moat; "table of contents generator" ~12k/mo | suggest(score 32, 2/2 seeds, depth 20)
marriage-license-cost-calculator | wedding | calc | $0.5-2 | 50-state fee table + courthouse-wedding mode (15-25k/mo combined); state-table AIO pattern; internally links the cluster | suggest(score 32, 2/2 seeds, depth 20)
pdf-metadata-editor | pdf | oss-wrap | $1-2 | pdf-lib (MIT) setTitle/setAuthor + read via pdfjs; "pdf metadata editor" ~10k/mo | suggest(score 32, 2/2 seeds, depth 20)
pdf-to-text | pdf | oss-wrap | $1-2 | markitdown-ts PDF conversion; "pdf to text" ~100k/mo + AI-ingest longtail; markdown output mode covers the folded pdf-to-markdown row (markitdown-ts emits both, audit #2 2026-08-26) | suggest(score 32, 2/2 seeds, depth 20)
test-grade-calculator | education | calc | $1-2 | "what grade is 21 out of 30" longtail flood 50k+/mo aggregate + teacher quick-grade mode; embed king; distinct from final-grade (points-to-% vs what-you-need) | suggest(score 32, 2/2 seeds, depth 20)
wedding-gift-calculator | everyday | calc | $0.8-2 | "how much to spend on a wedding gift" 15-25k/mo by relationship/city/plate-cost; volume + internal links, not CPC; calc not generator (distinct from live gift-ideas) | suggest(score 32, 2/2 seeds, depth 20)
words-to-pages-calculator | education | tool | $0.5-2 | 40-70k/mo evergreen essay volume; 275-words/page table + font options; trivial; cross-link word-counter | suggest(score 32, 2/2 seeds, depth 20)
xlsx-to-csv | document | oss-wrap | $1-2 | SheetJS CE (Apache-2.0, vendor+pin from cdn.sheetjs.com; GitHub repo is a stale mirror): multi-sheet picker in a Worker; "excel to csv"/"xlsx to csv" ~40k/mo (ONE row: duplicate dev-wave entry merged 2026-08-26) | suggest(score 32, 2/2 seeds, depth 20)
xml-formatter | dev | oss-wrap | $1-2.5 | xml-formatter + xml-js (both MIT): minify/indent/validate; ~50k/mo; same shell doubles as xml-validator | suggest(score 32, 2/2 seeds, depth 20)
xml-to-json | dev | oss-wrap | $1-2.5 | xml-js (MIT) bidirectional; "xml to json" 25k + "json to xml" 12k/mo; cluster with xml-formatter | suggest(score 32, 2/2 seeds, depth 20)
grade-curve-calculator | education | calc | $1-3 | mean+SD linear and square-root curves; 10-15k/mo; blog-heavy SERP, zero quality tools; embed magnet for teacher blogs | suggest(score 32, 2/2 seeds, depth 19)
dog-age-calculator | pets | calc | $2-4 | ~70-100k/mo exact cluster (Pedigree/AKC/PetMD rank = AIO citable); epigenetic vs 7-year table; trivial build; volume play | suggest(score 32, 2/2 seeds, depth 18)
teacher-loan-forgiveness-calculator | finance | calc | $5-15 | $5k vs $17.5k eligibility + 5-consecutive-year rule + vs-PSLF track; 6-12k/mo | suggest(score 32, 2/2 seeds, depth 11)
color-contrast-checker | dev | oss-wrap | $0.5-1.5 | bbc/color-contrast-checker (Apache-2.0): WCAG AA/AAA pass/fail chips + shareable hex URLs; ~25k/mo; trivial | suggest(score 31, 2/2 seeds, depth 20)
epoch-converter | dev | tool | $0.5-1.5 | NATIVE build, no OSS: 200-400k/mo cluster; epochconverter.com is a one-page top-1000 empire; ms-vs-s toggle, ISO both directions, live ticker; volume monster on trivial Date math | suggest(score 31, 2/2 seeds, depth 20)
pdf-merge | pdf | oss-wrap | $0.5-1.5 | 600k+/mo brutal SERP (iLovePDF/SmallPDF); win the "merge pdf offline / without uploading" privacy cluster | suggest(score 31, 2/2 seeds, depth 20)
pdf-split | pdf | oss-wrap | $0.5-1.5 | pdfstudio split() + page ranges; ~300k/mo; shares drag-reorder shell with pdf-merge | suggest(score 31, 2/2 seeds, depth 20)
pdf-to-jpg | pdf | oss-wrap | $0.5-1.5 | PDFLince (MIT) pdf.js render -> canvas -> JSZip; "pdf to jpg/png" ~200k/mo; DPI slider + multi-page zip | suggest(score 31, 2/2 seeds, depth 20)
qr-code-scanner | dev | oss-wrap | $0.5-1.5 | mebjas/html5-qrcode (Apache-2.0, verified): live camera + decode-from-screenshot (the laptop use case); "scan qr code" 100k+/mo; decodes, distinct from live qr-code-generator (creates) | suggest(score 31, 2/2 seeds, depth 20)
rotate-pdf | pdf | oss-wrap | $0.3-1 | pdfstudio rotate() per-range; ~200k/mo; trivial; internal-link feeder to merge/split | suggest(score 31, 2/2 seeds, depth 20)
user-agent-parser | dev | bowser | $0.5-1.5 | bowser (MIT, verified; chosen AFTER ua-parser-js AGPL rejection); "what is my user agent" 90k+/mo; volume play | suggest(score 31, 2/2 seeds, depth 20)
wedding-hashtag-generator | wedding | generator | $0.5-1.5 | surname mashup + puns on the baby-name-generator pattern; 10-15k/mo; social/embed magnet feeding the wedding hub | suggest(score 31, 2/2 seeds, depth 20)
csv-to-sql | dev | PapaParse | $1-2.5 | MIT (likely already the csv-to-json engine, reuse bundle): CSV -> INSERTs + type inference + DDL; ~8k/mo | suggest(score 31, 2/2 seeds, depth 19)
pdf-repair | pdf | oss-wrap | $1-4 | pdfstudio repair(); "repair corrupt pdf" ~20k/mo desperate-user niche, thin tool competition, high conversion | suggest(score 31, 2/2 seeds, depth 18)
jpg-to-pdf | pdf | oss-wrap | $0.3-1 | pdfstudio images-to-PDF + pdf-lib embed; ~300k/mo phone-scanner crowd, trivial; feeder into pdf-merge | suggest(score 30, 2/2 seeds, depth 19)
heic-to-jpg-converter | image | oss-wrap | $0.5-2 | hoppergee/heic-to (LGPL-3.0, verified): ship lib UNMODIFIED via CDN + attribution; "heic to jpg" 300k+/mo monster | suggest(score 30, 2/2 seeds, depth 18)
jq-playground | dev | jq wasm + jsonpath | $1-2 | jqlang/jq (MIT, Dolan text verified) official playground impl + jsonpath lib in ONE shell, two pages: "jq online" ~5k/mo + jsonpath-tester ~5k/mo (jsonpath-tester row merged here audit #2 2026-08-26: the two rows described the same shell) | suggest(scores 30 + 27, the two merged rows)
svg-to-png-converter | image | oss-wrap | $0.5-1.5 | vincerubinetti/svg-to-png (MIT): scale-factor rasterize + batch, handles foreignObject/fonts; ~40k/mo; rasterizes vector, distinct from live image-tools (raster<->raster) | suggest(score 30, 2/2 seeds, depth 18)
wedding-cost-per-guest-calculator | wedding | calc | $2-4 | $150-300/guest breakdown table feeding the budget hub; same schema as by-state cost winners | suggest(score 30, 2/2 seeds, depth 16)
html-entity-converter | dev | entities | $0.8-2 | fb55/entities (BSD-2 per file text, not BSD-3 as first logged): named/numeric encode+decode; ~12k/mo | suggest(score 27, 2/2 seeds, depth 15)
document-metadata-remover | document | oss-wrap | $2-5 | toddholloway/O365Metadata (MIT, active) strips author/company/history from docx/pptx/xlsx/pdf client-side; "remove metadata from word document" ~10k/mo; job-seeker/legal intent; pairs with image-metadata-remover | suggest(score 27, 2/2 seeds, depth 12)
party-food-quantity-calculator | events | calc | $1.5-4 | 5-15k/mo across ALL party types; per-person appetizer/entree/dessert table; grocery + catering ads | suggest(score 26, 2/2 seeds, depth 12)
docx-to-markdown | document | oss-wrap | $1-2.5 | markitdown-ts (MIT) Word converter in-worker; ~6k/mo riding the LLM-ingest wave; cross-links pdf-to-text + docx-to-html | suggest(score 23, 1/1 seeds, depth 10)
flatten-pdf | pdf | oss-wrap | $1-3 | pdfstudio flatten(); print-shop/forms niche "flatten pdf" ~15k/mo | suggest(score 23, 1/1 seeds, depth 10)
docx-to-html | document | oss-wrap | $1-2 | mammoth.js (BSD-2) semantic docx->html, 13 yrs maintained; pairs with live markdown-to-html | suggest(score 22, 1/1 seeds, depth 10)
markdown-to-pdf | document | oss-wrap | $0.5-1.5 | realdennis/md2pdf (MIT) vendored, swap print-dialog for pdfmake one-click download; ~60k/mo | suggest(score 22, 1/1 seeds, depth 10)
crop-pdf | pdf | oss-wrap | $1-2 | PDFLince crop via pdf-lib setCropBox + auto-whitespace-detect mode; ~15k/mo | suggest(score 22, 1/1 seeds, depth 9)
debt-settlement-vs-bankruptcy-calculator | finance | calc | $10-30 | debt relief = top-5 CPC vertical; nothing similar live | suggest(score 20, 1/2 seeds, depth 10)

## Score 1-19 (3 slugs)
fake-data-generator-trio | dev | @faker-js/faker | $0.3-1 | faker-js (MIT, 15.4k stars) one lazy locale bundle -> 3 pages: fake-name-generator 180k+/mo, random-address-generator 40k+/mo, fake-email-generator 15k+/mo; volume monster | suggest(score 11, 1/2 seeds, depth 10)
pdf-certificate-maker | document | oss-wrap | $1-3 | pdfme (MIT) Designer component; "certificate maker" ~20k/mo; course-platform ads | suggest(score 11, 1/2 seeds, depth 10)
toml-validator | dev | smol-toml | $1-2 | BSD-2: TOML 1.1 validate + ->JSON; 4k + 2k/mo; clone of live yaml-validator shell, near-zero effort | suggest(score 11, 1/2 seeds, depth 10)

## Research notes — preserved from audit #1 (2026-08-26), minus superseded P1-P4 tier-definition lines
# Audit #1 (earlier 2026-08-26): 235 rows in -> 204 kept, 31 cut. Cuts: 11 duplicates of
#   live tools, 9 cross-wave duplicate rows merged, 4 unwrappable, 7 unmonetizable or
#   poor-ROI. CPC/volume figures are as-researched by the original waves, not re-verified
#   externally. (Audit #1's P1-P4 tier headers removed by audit #2: superseded by score tiers.)
## License guards (verified the hard way — do not re-litigate)
# AVOID (GPL/AGPL/non-commercial): it-tools, quickchart, easy-invoice-pdf, qrbtf, ua-parser-js
#   (AGPL-3.0 now despite MIT-era README), jsoncrack (42MB app anyway), ONLYOFFICE,
#   imgly/background-removal-js, briaai/RMBG-1.4 (CC-NC), exiftool-vendored.js (GPL binary),
#   markitdown-browser (AGPL hiding behind custom header), tooladda-online suite (no license),
#   simplepdf-embed (funnel into branded cloud), DHTMLX Gantt (GPL).
# LGPL (heic-to): ship lib unmodified via CDN + attribution. MPL-2.0 (ExifReader): vendor
#   unmodified + notice. pdfstudio = Apache-2.0 qpdf-wasm; vendor + pin (94 stars, but the
#   qpdf engine underneath is 15+ yrs battle-tested). sheetjs + pdf-lib dormant but
#   API-stable: vendor + pin from cdn.sheetjs.com.
# Never promise iLovePDF compression ratios: pdfstudio compress is lossless stream
#   recompression only; PDFLince rerender is the downscale path.
## Fold-ins & deferred (decided — don't re-research, don't make new rows)
# pets: kitten-vaccination = mode of puppy-vaccination engine; xylitol + onion toxicity fold
#   into dog-chocolate page as a suite; rover-sitter-earnings fits everyday/finance not pets.
# pets MEDICATION DOSING: mg/kg YMYL without vet review — permanently avoided.
# weddings: seating-chart deferred (drag-drop effort, Knot gives it away gated); band-vs-dj,
#   alterations, rehearsal-dinner, bridal-shower, open-bar = page modes not pages. Bench:
#   hotel-room-block, bridal-hair-makeup, vendor-gratuity, name-change-checklist.
# auto repair hub fold-ins once car-repair-cost proves: head gasket, clutch, alternator,
#   paint job, detailing, roadside-assistance comparison, insurance deductible chooser.
# education: sgpa-to-cgpa and gpa-goal = modes of cgpa/weighted-gpa pages; deferment/
#   forbance = toggle on student-loan-payoff; avoided: dorm-vs-apartment, textbook,
#   student-budget (generic), employer-tuition (no client-side data).
# funeral-cost-calculator (30-40k/mo, burial-insurance $8-20 CPC): flagged for a future
#   end-of-life wave, out of current lanes.
# mermaid suite UPGRADES live flowchart-maker + gantt-chart-maker (add syntax mode), never
#   new duplicate pages. Squoosh wasm codecs = future upgrade path for image-compressor.
# audit #2 folds (2026-08-26): cat-pregnancy = page on dog-pregnancy engine; pdf-to-markdown
#   = output mode of pdf-to-text (markitdown-ts); how-much-should-i-borrow = mode of
#   college-cost; protect/remove pdf-password = one shell two pages; jsonpath = page on the
#   jq shell. CUT outright: code-screenshot-generator (carbon owns brand+SERP, no wedge),
#   binary-payload-decoder (two vendored deps for ~4k/mo, worst ROI in file).
## AIO structure rule (from Semrush 200k study — applies to every page build)
# 82% of AIOs on <1k/mo keywords = longtails; ~80% informational; listicles cited most.
# Cited pages: 2500-3300 words, tables, FAQ blocks, 40-60 word direct answer under H1.
# Only 20-26% AIO overlap with top-10 → don't need to rank #1 to get cited.

## Wave 7 — auto ownership & repair research notes (rows integrated into tiers above as †)
# 2026-08-26 wave. All client-side builds. Dupe-checked vs backlog + live catalog + fold-in
#   list: engine/strut pages are NOT on the head-gasket/clutch/alternator/paint/detailing
#   fold-in list and outrank transmission-repair-cost (25k/mo), which has its own row —
#   same precedent. Suggest scores to be added on next rescan; † rows placed by CPC x volume.
# Bench (build when a shell exists): early-lease-termination-fee-calculator (8-15k/mo, 3-way exit compare),
#   hail-damage-repair-cost-calculator (10-20k/mo seasonal spring/summer PDR + insurance-claim mode),
#   smog-check-cost-calculator (15-25k/mo CA-centric county price table), mechanic-labor-rate-calculator
#   (metro labor-rate table, meta-hub cross-linking every repair page above).
