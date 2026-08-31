# Tool Factory Backlog — hostile audit #4 (2026-08-26)
# Format: slug | category | type | est CPC | why | suggest(score K/L seeds, depth N)
# Audit #4 verdicts: 360 rows in -> 343 kept | 12 cut | 5 merged (in-row rulings executed).
#   FLOOR RULE enforced (cut unless volume >= ~8k/mo OR CPC midpoint >= ~$3 OR a
#   defensible unique moat): markdown-to-powerpoint (3-6k/mo, audit #3's own
#   weakest-keep flag), image-content-aware-resizer (3-6k/mo, audit #3's own first-cut
#   flag), regex-visualizer (3-5k/mo), pixel-art-editor (row itself admits art/game-dev
#   CPC is junk + pixilart owns the heads + 12.7k-star full-app embed = worst
#   buildability-per-traffic in the file), pptx-viewer ($0.5-1 thinnest CPC in the
#   doc lane, its markdown-to-powerpoint feeder also cut = viewer with no monetization
#   path), pdf-grayscale (6-10k at $1-2, sibling of audit-#3-cut pdf-dark-mode),
#   booklet-printer (5-8k at $1-3), bcrypt-generator (~5k/mo, live hash-generator
#   covers the adjacent digest intent), toml-validator (~6k/mo, live yaml-validator
#   shell clone), docx-to-markdown (~6k/mo, pdf-to-text already rides markitdown-ts at
#   100k/mo for the LLM-ingest angle), litter-box-size (weakest w19 row per its own
#   note, 5-10k at $0.5-1.5), wedding-cake-servings (3-8k at $1-3, fold as mode of
#   catering-cost-per-person / wedding-budget).
#   Merged (rulings that already lived in row text, now executed): pdf-form-filler ->
#   sign-pdf (audit #3's ONE-engine-TWO-pages ruling), xpath-tester -> jq-playground
#   (the decided third tab), typescript-formatter -> code-beautifier (prettier tabs on
#   one formatter shell), docx-to-html -> html-to-word (docshift converts both
#   directions, one row two directions), pet-insurance-claim-reimbursement ->
#   pet-insurance-cost (the w19 row's own fold flag: claims tab on the worth-it mode).
#   Dupe sweep vs live catalog (llm.txt + on-disk dirs): 0 new duplicates — every
#   w16-w21 adjacency claim re-verified. Server-side sweep: 0 rows need server infra
#   (vin-decoder NHTSA + citation-generator Crossref are CORS-open client-side fetches,
#   currency/crypto house precedent).
#   All 71 surviving wave-tail rows (w17, w18, w7c, w20, w19, w21) INTEGRATED into the
#   ranked tiers below, tagged — wNN, placed by CPC x volume x buildability; w16
#   section eliminated (both rows cut). Full verdict list: /tmp/backlog-audit.md.
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

## Score 80+ (1 slugs)
student-loan-refinance-calculator | finance | calc | $30-80 | highest CPC in the file; SoFi/Earnest/Credible bid hard; weighted rate vs offer, break-even + interest saved; reuses loan-calculator pattern | suggest(score 100, 2/2 seeds, depth 20)

## Score 60-79 (5 slugs)
business-card-qr-generator | qr | tool | $4-8 | vCard 3.0/4.0 correctness + PNG/SVG/PDF print sheet; 12.1K/mo $5.55 CPC; funnel to objexi dynamic vCard | research #1
google-review-qr-generator | qr | tool | $4-9 | Place-ID review-link QR + forms QR combined 4.9K/mo; local-business magnet | research #2
wifi-qr-code-generator | qr | tool | $1-4 | full WPA2/Enterprise EAP encoding (most free tools PSK-only); 2.9K/mo | research #3
content-calendar-template | creator | tool | $8-14 | interactive planner + ICS export + platform best-times DB; 2.9K/mo $11.31 | research #4
social-media-calendar-generator | creator | tool | $18-28 | auto-generate 30-day plan from niche; highest creator CPC $24.27; 2.4K/mo | research #5
rap-student-loan-calculator | finance | calc | $10-30 | Repayment Assistance Plan live since 2026-07-01: 1-10% of AGI sliding scale + $10 floor + 20/25-yr forgiveness; SERP is news articles, zero quality tools = first-mover AIO slot; payments-by-salary table ($30k/50k/80k) = triple citable; loan-lawyer + refi CPC; shares repayment-comparison engine (add the column there anyway, see flag below) | — w15e
student-loan-consolidation-calculator | finance | calc | $15-40 | federal weighted-average rate ROUNDED UP to 1/8% (generic calcs get this wrong = the moat); 15-25k/mo; loans-category CPCs $30-55 | suggest(score 66, 2/2 seeds, depth 19)
speeding-ticket-cost-calculator | legal | calc | $8-25 | traffic attorneys bid $10-30/click in this lane; "how much is a speeding ticket" 20-40k/mo + "in texas/california/florida" state longtails = 60-100k/mo cluster with a blog-heavy, calculator-thin SERP; 50-state fine-band + points table with insurance-surcharge projection cross-linking car-insurance-rate-increase row (the fine vs the surcharge = distinct intents) | — w7c
diminished-value-claim-calculator | legal | calc | $15-40 | 17c formula (base loss x damage x mileage multipliers); 10-15k/mo; DV appraisers + PI attorneys bid; same multiplier-table pattern as settlement winners | suggest(score 68, 2/2 seeds, depth 20)
private-student-loan-calculator | finance | calc | $15-40 | biggest unbuilt loan lane: private ORIGINATION rates/terms with the 4 disbursement modes no generic calc combines (full-deferral vs interest-only vs flat-payment vs immediate, each with capitalized-interest-at-graduation reveal) — the subsidized-vs-unsub trick applied to private terms; "private student loans" 40-80k/mo cluster, "private student loan calculator" longtails; College Ave/Credible/Sallie Mae bid near-refi CPCs; DISTINCT from refinance (existing loans), consolidation (federal), repayment-comparison (federal plans); loan-calculator engine pattern | — w21
divorce-cost-calculator | legal | calc | $10-30 | the marriage arc's biggest monetizable gap: "how much does a divorce cost"/"divorce lawyer cost"/"uncontested divorce cost" 30-60k/mo cluster and divorce attorneys bid some of the highest legal CPCs (family law commonly $15-50 in competitive metros); verified AIO-citable anchors — Nolo survey median $7,000 attorney fees / ~$11,300 avg, ~$4,100 uncontested, ~$19,500 per party contested, TX-with-kids $15-30k; DIY filing vs online-divorce-service ($150-500) vs mediation vs full-representation TCO ladder + 50-state filing-fee table (~$100-450) = the state-table pattern that won for car-insurance-estimator; DISTINCT from live alimony-calculator trio (support-payment amount vs process cost) — cross-link all four; trivial client-side build | — w20
truck-accident-settlement-calculator | legal | calc | $25-60 | commercial vehicle premium; 8th settlement tool on a pattern proven 7x | suggest(score 68, 2/2 seeds, depth 12)

## Score 40-59 (77 slugs)
car-repair-cost-calculator | auto | calc | $6-15 | umbrella hub; 30k+/mo; by-repair table (diagnose -> parts -> labor hours) | suggest(score 45, 2/2 seeds, depth 20)
roof-replacement-cost-calculator | home | calc | $6-15 | 55k/mo; cost estimator distinct from live roofing-calculator (materials math), house precedent: deck-calculator + deck-cost-calculator pair | suggest(score 42, 2/2 seeds, depth 18)
molar-mass-calculator | education | tool | $1.5-5 | "molar mass calculator" 100-200k/mo, the biggest chemistry-homework verb; periodic-table JSON (~90 elements) x formula parsing with hydrate dot-notation and parentheses = pure client-side; tutoring platforms (Wyzant class) bid above generic student CPCs; mole/percent-composition modes ride the same parser | — w21
car-shipping-cost-calculator | auto | calc | $8-20 | auto transport is a notorious expensive-lead vertical (brokers pay $50-150/lead; monetized via display ads, no lead capture on static hosting); "car shipping cost"/"how much to ship a car"/"car transport cost" 40-70k/mo; per-mile tier x vehicle size x open-vs-enclosed table, pure client-side; nothing in backlog or live touches it | †wave-7
car-wrap-cost-calculator | auto | calc | $3-8 | "vehicle wrap cost"/"car wrap cost" 25-40k/mo; color-change vs commercial-advertising wrap x vehicle-size class + partial-wrap mode; wrap shops + vinyl brands bid local-service CPCs; NOT the benched paint-job fold-in (vinyl ≠ paint, distinct keywords/advertisers) | — w7b
upside-down-car-loan-calculator | auto | calc | $5-15 | "upside down car loan"/"negative equity car" cluster 15-30k/mo; amortization-vs-depreciation curve crossing shows when equity turns positive = unique math no generic calc does; refi lenders bid; distinct from gap-insurance row (policy cost vs equity math) | †wave-7
pet-insurance-cost-calculator | insurance | calc | $12-30 | anchor for /pet-tools/ hub: species/breed/age/state premium table x reimbursement %; 40-60k/mo cluster; Lemonade/Trupanion bid; add worth-it break-even mode; cat keyword cluster ("cat insurance cost" 15-30k/mo) covered by species toggle + cat section — cat-insurance row folded here audit #3 2026-08-26, spin a separate page only if the cat section earns traffic; pet-insurance-claim-reimbursement folded here audit #4 2026-08-26 as the claims tab (bill -> deductible -> 70/80/90% split -> annual-max ladder, $8-20 CPC post-purchase intent — the w19 row's own fold flag executed) | suggest(score 59, 2/2 seeds, depth 20)
education-tax-credit-calculator | finance | calc | $4-10 | AOTC vs LLC chooser by MAGI and expense type; pairs with scholarship-taxability | suggest(score 40, 2/2 seeds, depth 20)
engine-replacement-cost-calculator | auto | calc | $4-10 | "engine replacement cost" 20-40k/mo, bigger than transmission which already has a row; reman vs used vs rebuild vs in-frame repair table; parts retailers + reman engine suppliers bid; shares the repair-cost table pattern | †wave-7
car-ac-repair-cost-calculator | auto | calc | $5-12 | 20-30k/mo summer spikes; recharge vs leak vs compressor diagnostic tree; tree UI is the differentiator | suggest(score 41, 2/2 seeds, depth 19)
car-insurance-rate-increase-calculator | insurance | calc | $8-20 | "how much does car insurance go up after an accident" 15-25k/mo + DUI/speeding/ticket variants = 30-50k cluster; state surcharge tables (+40% avg accident, +80% DUI) are AIO-citable; insurers pay top CPC; distinct intent from live car-insurance-estimator (generic cost vs post-incident delta) | †wave-7
sat-to-act-conversion-calculator | education | convert | $3-12 | "sat to act conversion"/"act to sat" 25-50k/mo cluster; official College Board-ACT concordance tables (refreshed 2024 for digital SAT) = trivial table lookup; test-prep bidders pay $5-15/click adjacent; pure volume x build, nothing in backlog or live touches it | — w15e
pet-rent-calculator | pets | calc | $2-6 | "pet rent"/"pet deposit"/"pet fees for apartments" 20-35k/mo; monthly pet-rent vs one-time deposit vs combo TCO over lease length + 50-state legality/cap table = AIO magnet; cross-sells LIVE renters-insurance-calculator — the only row in the wave with an existing live-tool landing pad | — w15p
sr22-insurance-cost-calculator | insurance | calc | $10-25 | nonstandard auto premium CPC; state filing-fee table | suggest(score 53, 2/2 seeds, depth 19)
homeowners-dwelling-coverage-calculator | insurance | calc | $10-25 | dwelling-replacement cost by regional build rates; regional insurer bids; no homeowners tool live | suggest(score 51, 2/2 seeds, depth 18)

## Score 20-39 (146 slugs)
qr-code-scanner | dev | oss-wrap | $0.5-1.5 | mebjas/html5-qrcode (Apache-2.0, verified): live camera + decode-from-screenshot (the laptop use case); "scan qr code" 100k+/mo; decodes, distinct from live qr-code-generator (creates) | suggest(score 31, 2/2 seeds, depth 20)
code-beautifier | dev | js-beautify + prettier | $1-2.5 | js-beautify (MIT): js/css/html beautify 18k/mo combined; typescript-formatter folded here audit #4 2026-08-26 — add TS/TSX/GraphQL tabs via prettier standalone browser build (MIT, 52.2k★, raw-verified, active; languages js-beautify cannot parse; "typescript formatter" 6-8k/mo) — one formatter shell, cross-link minifier-trio | suggest(score 32, 2/2 seeds, depth 20)
crop-pdf | pdf | oss-wrap | $1-2 | PDFLince crop via pdf-lib setCropBox + auto-whitespace-detect mode; ~15k/mo | suggest(score 22, 1/1 seeds, depth 9)
mileage-reimbursement-calculator | finance | calc | $2-5 | "mileage reimbursement calculator"/"irs mileage rate 2026" 15-30k/mo; miles x current IRS rate + employer-partial-payment shortfall + monthly-log totals; payroll/expense-software bids; distinct intent from actual-vs-standard-mileage row (getting repaid by an employer vs choosing a self-employment tax method) — cross-link both | — w7b
extract-pdf-pages | pdf | oss-wrap | $0.5-2 | pdfstudio arbitrary page selection ("pull pages 2,5-7"), distinct intent from split; ~40k/mo | suggest(score 32, 2/2 seeds, depth 20)
wedding-hashtag-generator | wedding | generator | $0.5-1.5 | surname mashup + puns on the baby-name-generator pattern; 10-15k/mo; social/embed magnet feeding the wedding hub | suggest(score 31, 2/2 seeds, depth 20)
ocr-pdf | pdf | oss-wrap | $1-3 | pdf.js render page → tesseract.js (both Apache-2.0, verified) in worker queue with progress; "ocr pdf"/"scanned pdf to text" ~25-40k/mo; DISTINCT intent from image-to-text-ocr (image input) and pdf-to-text (native text layer) — engine kinship only, three keywords three pages, cross-link all | — w11
wedding-alcohol-calculator | wedding | calc | $1-3 | 1-drink-per-guest-per-hour rule + bottle math; 5-15k/mo longtails; embed king for wedding blogs | suggest(score 33, 2/2 seeds, depth 20)
image-watermark | image | oss-wrap | $1-2 | zhensherlock/watermark-js-plus (MIT, 568★, pushed 2026-08-26): text/logo watermark, opacity/tiling/position, batch PNG/JPG; "add watermark to photo" 15-25k/mo; distinct from watermark-pdf (pdf lane); low effort | — w13
cat-age-calculator | pets | calc | $2-3 | ~60k/mo; 1st-year=15, 2nd=+9, then +4; trivial; volume play | suggest(score 34, 2/2 seeds, depth 20)
password-strength-checker | dev | zxcvbn-ts | $1-3 | zxcvbn (MIT fork, active): entropy + crack-time; lazy ~800KB dictionary; ~25k/mo; password-manager ads bid | suggest(score 33, 2/2 seeds, depth 20)
tire-load-index-chart | auto | table | $2-5 | "tire load index" + "tire speed rating" + "lt vs p metric"/"load range e" longtails = 15-30k/mo aggregate; static index->lbs + speed-symbol + load-range/ply-rating table with GVWR check tie-in to towing-capacity; tire retailers bid; trivial table build, pure AIO-cite page | — w7c
docx-viewer | document | oss-wrap | $1-2 | flyfish-dev/file-viewer (Apache-2.0) self-hostable wasm; "open docx online" ~30k/mo | suggest(score 32, 2/2 seeds, depth 20)
svg-to-png-converter | image | oss-wrap | $0.5-1.5 | vincerubinetti/svg-to-png (MIT): scale-factor rasterize + batch, handles foreignObject/fonts; ~40k/mo; rasterizes vector, distinct from live image-tools (raster<->raster) | suggest(score 30, 2/2 seeds, depth 18)
bates-numbering | legal | oss-wrap | $4-12 | cantoo pdf-lib loop: prefix/suffix + start index + digit count + position + first-page skip — page-numbers engine kinship = cheapest build in the lane; "bates numbering" only ~4-6k/mo but legal-document-production CPC tops the lane and zero client-side competition; AIO longtail zone (82% of AIOs cite <1k/mo keywords); volume play NO, CPC+effort play YES | — w18
image-to-svg-converter | image | oss-wrap | $0.5-1.5 | jankovicsandor/imagetracerjs (Unlicense = public domain, 1533★): zero-dep raster→SVG tracer, B&W-logo + color-photo + posterize-slider presets; "png to svg" ~30k + "jpg to svg"/"image to svg" ~15k/mo; vectorizer.ai is paid → free+private wedge; vendor+pin (dormant 2023, algorithm complete); only clean tracer — potrace/SVGcode route is GPL | — w13
credit-card-validator | finance-dev | oss-wrap | $1-3 | braintree/card-validator (MIT): Luhn + brand + BIN detection; ~50k/mo; loud no-storage banner | suggest(score 33, 2/2 seeds, depth 20)
exif-viewer | dev | oss-wrap | $1-3 | mattiasw/ExifReader (MPL-2.0, active): EXIF/IPTC/XMP table + GPS map; "exif viewer" ~25k/mo; vendor unmodified + notice = compliant (merged duplicate exif-metadata-viewer row 2026-08-26; strip-metadata is the separate image-metadata-remover row) | suggest(score 33, 2/2 seeds, depth 20)
qr-code-with-logo | creator | oss-wrap | $1-3 | qr-code-styling (MIT, active): dots/logo/gradients, PNG/SVG; "qr code with logo" ~12k + "custom qr code" ~20k/mo; distinct intent from live plain qr-code-generator; dynamic-QR SaaS affiliate upside (fancy-qr-generator row merged here 2026-08-26) | suggest(score 33, 2/2 seeds, depth 20)
xlsx-to-csv | document | oss-wrap | $1-2 | SheetJS CE (Apache-2.0, vendor+pin from cdn.sheetjs.com; GitHub repo is a stale mirror): multi-sheet picker in a Worker; "excel to csv"/"xlsx to csv" ~40k/mo (ONE row: duplicate dev-wave entry merged 2026-08-26) | suggest(score 32, 2/2 seeds, depth 20)
saml-decoder | dev-sec | pako compose | $3-8 | nodeca/pako (MIT, 6.1k*, LICENSE verified, active) + xml-formatter (already row'd): SAMLRequest/Response base64->inflate->pretty XML + assertions table; "saml decoder" ~4k/mo; IdP/SSO vendor ads = top CPC in lane; zero new deps beyond pako; audit #3 CPC-first keep | — w12
iban-validator | finance-dev | oss-wrap | $1-3 | Simplify/ibantools (MIT OR MPL-2.0, verified): mod-97 + per-country rules; "iban validator" 90k+/mo global | suggest(score 33, 2/2 seeds, depth 20)
robots-txt-validator | dev | oss-wrap | $1-3 | samclarke/robots-parser (MIT, active): validate + "is this URL blocked" wildcard matcher + AI-crawler table; distinct intent from live robots-txt-generator (check vs create) | suggest(score 33, 2/2 seeds, depth 20)
html-to-word | document | oss-wrap | $1-2 | ducbao414/docshift (MIT, 16★, LICENSE raw-verified, 2025) — explicitly pure client-side HTML⇄DOCX, tiny so vendor+pin; fallback TurboDocx/html-to-docx (MIT fork of privateOmega, 226★, raw-verified, pushed 2026-08, Node-first); "html to word"/"convert html to word" ~15-25k/mo; docx-to-html folded here audit #4 2026-08-26 (docshift converts both directions — one row, both directions, csv-to-json precedent; mammoth.js stays the semantic docx→html engine reference for the word-to-pdf chain); csv-to-excel reverse-pair precedent | — w18
pdf-metadata-editor | pdf | oss-wrap | $1-2 | pdf-lib (MIT) setTitle/setAuthor + read via pdfjs; "pdf metadata editor" ~10k/mo | suggest(score 32, 2/2 seeds, depth 20)
gitignore-generator | dev | gitignore data | $1-2 | github/gitignore (CC0-1.0, 175k*, LICENSE verified, active): checkbox stack composer over vendored template bundle + per-language longtails ("python gitignore" etc.); "gitignore generator" ~9k/mo; re-vendor templates at build time | — w12
excel-diff | document | oss-wrap | $1-2 | SheetJS CE (Apache-2.0, bundle already vendored for xlsx-to-csv row): two XLSX/CSV files → per-sheet cell-level diff grid, added/changed/removed highlight; PRIVACY WEDGE = every ranking competitor uploads to a server, ours never leaves the browser — headline the no-upload; "compare two excel files"/"excel diff" 8-12k/mo; distinct from live text diff-checker + json-diff row; medium effort | — w17
pdf-page-numbers | pdf | cantoo-pdf-lib | $1-2 | cantoo pdf-lib drawText loop: position (9 slots), format (1/1 of N), start index, margins, skip-first-page; "add page numbers to pdf" ~10-15k/mo; low effort, merge/split feeder | — w11
sql-playground | dev | sql.js | $1-3 | SQLite-to-wasm ~1MB, sample DB + user DDL -> results grid; "sqlite online" 8k + "sql playground" 6k/mo; runs, complements live sql-formatter (format) | suggest(score 33, 2/2 seeds, depth 20)
cron-explainer | dev | oss-wrap | $0.5-2 | bradymholt/cRonstrue (MIT, 1631★, LICENSE raw-verified, active) + Hexagon/croner (MIT, 2586★, raw-verified, active): paste arbitrary cron → accurate English + next-5-run datetimes (croner) + quartz 6/7-field + @daily strings; VERIFIED distinct from live cron-generator; crontab.guru owns heads = "cron expression explainer"/"cron parser"/"cron next run" longtail 8-15k/mo; both deps tiny, embed-ready | — w17
image-metadata-remover | dev | oss-wrap | $2-4 | szTheory/exifcleaner (MIT) proves pure-JS lossless strip (no exiftool); "remove exif" ~15k/mo; privacy advertisers bid | suggest(score 34, 2/2 seeds, depth 20)
image-to-text-ocr | image | oss-wrap | $0.5-2 | tesseract.js (Apache-2.0, verified) wasm worker, 100+ langs; "image to text"/"ocr online" 100k+/mo; volume play | suggest(score 32, 2/2 seeds, depth 20)
csv-to-sql | dev | PapaParse | $1-2.5 | MIT (likely already the csv-to-json engine, reuse bundle): CSV -> INSERTs + type inference + DDL; ~8k/mo | suggest(score 31, 2/2 seeds, depth 19)
jq-playground | dev | jq wasm + jsonpath | $1-2 | jqlang/jq (MIT, Dolan text verified) official playground impl + jsonpath lib in ONE shell, two pages: "jq online" ~5k/mo + jsonpath-tester ~5k/mo (jsonpath-tester row merged here audit #2 2026-08-26: the two rows described the same shell); xpath-tester folded here audit #4 2026-08-26 as the third tab (fontoxpath MIT, "xpath tester" ~6k/mo — the decided fold, executed) | suggest(scores 30 + 27, the two merged rows)
wheel-alignment-cost-calculator | auto | calc | $3-8 | 25-30k/mo; 2 vs 4-wheel x single vs lifetime plan; cross-sell new-tires tool | suggest(score 38, 2/2 seeds, depth 20)
cgpa-to-gpa-converter | education | convert | $1-3 | 10-point Indian CGPA -> US 4.0 + percentage tables; 50k+/mo global student volume; near-zero effort | suggest(score 33, 2/2 seeds, depth 20)
dog-ideal-weight-calculator | pets | calc | $2-5 | breed + BCS healthy range; ~15k/mo; weight-loss-dog-food brand ads | suggest(score 35, 2/2 seeds, depth 20)
dog-life-expectancy-calculator | pets | calc | $2-5 | ~80-90k/mo cluster; breed-size table; shares data with dog-age page | suggest(score 35, 2/2 seeds, depth 20)
html-to-jsx | dev | oss-wrap | $0.5-2 | reactjs/react-magic (BSD-3 Facebook, LICENSE raw-verified, htmltojsx engine behind React's own official playground; dormant 2023 but grammar complete = vendor+pin) + gregberge/svgr (MIT, 11055★, raw-verified, active) as svg-to-react tab on same shell; "html to jsx" 5-6k + "svg to jsx" 3-4k/mo; svgr's own playground proves full client-side | — w17
markdown-toc-generator | dev | oss-wrap | $0.5-2 | Flet/github-slugger (ISC, vendor+pin, dormant) + doctoc (MIT) as behavior ref: GitHub-accurate anchors (emoji/case/duplicates) are the moat; "table of contents generator" ~12k/mo | suggest(score 32, 2/2 seeds, depth 20)

## Score 1-19 (110 slugs)

529-qualified-expense-checker | education | tool | $2-8 | "can i use 529 for room and board/computer/..." longtail flood, 10-20k/mo aggregate; rules triage quiz + tables (K-12 $10k, $10k lifetime loan repayment, OBBBA 2026 credential expansion); same structure as the scholarship-taxability winner; advisors bid lightly | — w15e
529-to-roth-rollover-calculator | finance | calc | $6-15 | SECURE 2.0 $35k cap / 15-yr age / annual-limit years-to-complete math; fresh keyword, thin SERP | suggest(score 43, 2/2 seeds, depth 19)
actual-vs-standard-mileage-calculator | finance | calc | $5-12 | IRS standard rate vs actual expenses; 15-25k/mo, Jan-Apr peak; tax-software bids; interlinks live self-employment-tax + quarterly-tax tools | suggest(score 42, 2/2 seeds, depth 20)
baby-shower-cost-calculator | events | calc | $1-3 | 8-15k/mo; host-budget stacker (venue/food/decor/games/favors); registry + party-supply ads; plugs into the live pregnancy cluster (due-date, week-by-week, weight-gain pages) = biggest internal-link firehose available to any events row | — w14
bachelorette-party-cost-calculator | events | calc | $1.5-4 | $1,300/person avg (Knot) and trending; per-person split with tip-splitter mechanics; low comp | suggest(score 34, 2/2 seeds, depth 20)
document-metadata-remover | document | oss-wrap | $2-5 | toddholloway/O365Metadata (MIT, active) strips author/company/history from docx/pptx/xlsx/pdf client-side; "remove metadata from word document" ~10k/mo; job-seeker/legal intent; pairs with image-metadata-remover | suggest(score 27, 2/2 seeds, depth 12)
docx-mail-merge | document | oss-wrap | $2-8 | alonrbar/easy-template-x (MIT raw-verified, 531★, pushed 2026-08-20, "Node or in the browser" per own README): upload user's .docx template → tag detect → CSV/column-map UI → filled docx batch download; loops/conditionals/tables supported by the lib. Resolves w18's benched docxtemplater note (NOASSERTION = why it sat) — this is the clean engine. Volume: "mail merge" tool-intent slice ~15-30k/mo (head 60-100k is Word-help intent, be honest in copy) + "generate documents from template" longtail; legal/office SaaS CPC. Moat: only client-side mail merge (docxtemplater-cloud/Portant are server); future contract-generator wave's engine (nda/offer-letter/lease pages on this shell). Medium effort = tag-map UX, lib does the hard part | — w23
fake-data-generator-trio | dev | @faker-js/faker | $0.3-1 | faker-js (MIT, 15.4k stars) one lazy locale bundle -> 3 pages: fake-name-generator 180k+/mo, random-address-generator 40k+/mo, fake-email-generator 15k+/mo; volume monster | suggest(score 11, 1/2 seeds, depth 10)
lift-kit-cost-calculator | auto | calc | $3-8 | "lift kit cost"/"how much is a lift kit" 15-25k/mo; leveling vs 2/4/6-in suspension lift x parts + labor table by truck class; off-road retailers (rough-country class) + 4x4 shops bid; truck-accessory lane completely absent from the file | — w7b
llc-vs-scorp-calculator | finance | calc | $8-20 | tax-structure chooser, formation services bid; distinct from live incorporation-cost-calculator (fees vs structure) | suggest(score 47, 2/2 seeds, depth 18)
marriage-green-card-cost-calculator | legal | calc | $10-35 | immigration clicks are top-tier legal CPC (Boundless-class platforms + immigration attorneys bid relentlessly); "marriage green card cost"/"how much does it cost to get a green card through marriage" 10-20k/mo; verified 2026 fee anchors — I-130 $675 ($625 online) + I-485 $1,440 = ~$2,065-2,115 USCIS-only, +I-765 $260 + I-131 ~$630 ≈ $3,005 full package, attorney flat $2,000-5,000, all-in $3,500-8,000+; adjustment-of-status vs consular-processing (DS-260) toggle + DIY-vs-attorney compare + hidden-cost section (medical exam, translations); K-1 fiancé-visa mode on same page; FEE-TABLE REFRESH GUARD at build time (USCIS schedule changes); internal-links marriage-license + name-change cluster; lane-stretch row kept for CPC — citizenship/N-400 siblings belong to a future immigration wave, don't row them here | — w20
marriage-name-change-cost-calculator | wedding | calc | $2-6 | PROMOTED from bench, re-typed checklist->cost tool: SS card + license + DL + passport + vehicle-title fee stacker by state + DIY-free vs online-kit ($50-100) compare; "name change after marriage" 20-40k/mo; name-change services + passport expediters bid | — w14
minifier-trio | dev | terser+csso+html-minifier | $1-3 | one shell, 3 pages: minify js 18k, css minifier 25k, minify html 8k/mo; terser BSD-2 + csso MIT + html-minifier MIT | suggest(score 33, 2/2 seeds, depth 20)
pdf-certificate-maker | document | oss-wrap | $1-3 | pdfme (MIT) Designer component; "certificate maker" ~20k/mo; course-platform ads | suggest(score 11, 1/2 seeds, depth 10)
pdf-password-tools | pdf | oss-wrap | $1-3 | pdfstudio lock() + unlock() on ONE shell, TWO pages: "password protect pdf" ~90k/mo + "remove password from pdf" ~150k/mo; "never uploaded" privacy angle vs upload-based SERP leaders (protect-pdf + pdf-password-remover merged into one row audit #2 2026-08-26: same lib, inverse verbs) | suggest(scores 35 + 33, the two merged rows, both 2/2 seeds depth 20)
## Speculative — zero Ads volume (110 slugs, DataForSEO 2026-08-26) — filler only, never displaces a volume-verified row
# Demoted after real-volume re-score: no measurable Google Ads demand on slug or refined phrasing.
# Long-tail may still earn organically; build only as batch filler.

## Research notes — audit #4 condensed (audit #1/#2/#3 notes survive where load-bearing)
# Audit #1 (2026-08-26): 235 rows in -> 204 kept, 31 cut. Audit #2 (same day): 216 -> 209 kept.
#   Audit #3 (same day): 294 -> 282. Audit #4 (this file): 360 -> 343 (12 cut, 5 merged).
#   Full verdict lists: /tmp/backlog-audit.md (audit #4, supersedes) + git history.
#   CPC/volume figures are as-researched by the original waves, not re-verified externally.
## License guards (verified the hard way — do not re-litigate)
# AVOID (GPL/AGPL/non-commercial): it-tools, quickchart, easy-invoice-pdf, qrbtf, ua-parser-js
#   (AGPL-3.0 now despite MIT-era README), jsoncrack (42MB app anyway), ONLYOFFICE,
#   imgly/background-removal-js, briaai/RMBG-1.4 (CC-NC), exiftool-vendored.js (GPL binary),
#   markitdown-browser (AGPL hiding behind custom header), tooladda-online suite (no license),
#   simplepdf-embed (funnel into branded cloud), DHTMLX Gantt (GPL).
# LGPL (heic-to): ship lib unmodified via CDN + attribution. MPL-2.0 (ExifReader): vendor
#   unmodified + notice. pdfstudio = Apache-2.0 qpdf-wasm; vendor + pin (94 stars, but the
#   qpdf engine underneath is 15+ yrs battle-tested). sheetjs dormant but API-stable:
#   vendor + pin from cdn.sheetjs.com. pdf-lib: use cantoo-scribe/pdf-lib (MIT, active
#   fork, npm @cantoo/pdf-lib) for new builds; original Hopding repo dormant since 2024.
# Wave-18 adds: signaturepdf (826★, top organic hit for "open source pdf tool") + QuickOutline
#   both AGPL-3.0 raw-verified — concept traps for our organize/sign/outline surfaces.
# Never promise iLovePDF compression ratios: pdfstudio compress is lossless stream
#   recompression only; PDFLince rerender is the downscale path.
# Wave-13 chain-check traps: cut-it-out = Apache-2.0 wrapper around AGPL imgly lib;
#   btk/vectorizer = MIT label over GPL potrace; bg-remove = MIT code shipping CC-NC RMBG-1.4
#   weights; gemini-watermark-remover = MIT circumvention tool (policy reject). Raw (CR2/NEF)
#   converter lane license-dead until a clean libraw wasm exists. bg-removal resolved via
#   MODNet/u2net, both Apache-2.0 verified at source — re-host from origin, never untagged
#   HF mirrors. Full reject lists: /tmp/gh-research-*.md.
# Wave-24 adds: @ffmpeg/ffmpeg wrapper is MIT but @ffmpeg/core + @ffmpeg/core-mt npm
#   BINARIES are GPL-2.0-or-later (npm registry verified 2026-08-26) — ffmpeg.wasm
#   transcode/compress/convert is license-dead AS DISTRIBUTED, and every MIT UI over it
#   (dinoosauro/ffmpeg-web, modifio, addyosmani/video-compress) inherits the trap
#   (btk/vectorizer pattern). GPL-free media routes: mp4box.js remux (BSD-3), mp3 frame
#   slicing, lamejs encode (LGPL = unmodified + attribution, heic precedent), WebCodecs
#   (native). screenity 18.5k★ screen recorder = GPL-3.0, reference only, port nothing.
## Fold-ins & deferred (decided — don't re-research, don't make new rows)
# pets: kitten-vaccination = mode of puppy-vaccination engine; xylitol + onion toxicity fold
#   into dog-chocolate page as a suite; rover-sitter-earnings fits everyday/finance not pets.
#   cat twins on existing engines = second pages exactly like the cat-food precedent, audit
#   call not new rows: cat-dental, cat-surgery, cat-grooming, cat-heat-cycle, cat-euthanasia.
#   cat-insurance RESOLVED audit #3 = species toggle on pet-insurance page. puppy-shots-cost
#   = cost mode of puppy-vaccination; dog-tooth-extraction = mode of dog-dental; dog-house
#   = mode of crate row; intl pet travel/hotel-pet-fees = modes of pet-shipping; senior-pet
#   care = mode of cost-of-owning; flea-tick-heartworm retail-price-only if ever (never
#   dosing); wellness-plan chooser folds into pet-insurance worth-it mode; dog-license +
#   microchip trivial/thin; dog-cancer-treatment revisit after euthanasia proves; dog
#   c-section = breeder niche pairing with dog-pregnancy engine; aquarium junk CPC.
#   MEDICATION DOSING (mg/kg): permanently banned, YMYL without vet review.
# weddings/events: seating-chart deferred (drag-drop effort, Knot gives it away gated);
#   band-vs-dj, alterations, rehearsal-dinner, bridal-shower, open-bar = modes. Audit #3
#   added: vow-renewal + vendor-gratuity = modes of wedding-budget; prom = mode of suit-tux
#   page; graduation-party = mode of party-food-quantity; event-space-capacity = mode of
#   wedding-venue stacker. Bench: hotel-room-block PROMOTED; banquet-hall (near-dupe of
#   venue+party-rental), event-planner (extend wedding-planner page), engagement-party
#   (mode family), bachelor-party (page on bachelorette engine), conference-budget (mode
#   of corporate-event-budget) stay benched.
# auto repair hub fold-ins once car-repair-cost proves: head gasket, clutch, alternator,
#   paint job, detailing, roadside-assistance comparison, insurance deductible chooser,
#   spark-plug/radiator/water-pump/fuel-pump/starter (sub-20k/mo family). tire-rotation +
#   balancing fold into new-tires/alignment; wheel-offset builds WITH tire-size; payload
#   = mode of towing-capacity; out-the-door = dealer-doc-fee stacker; lease-mileage-overage
#   = lease-vs-buy math; ev-tax-credit DEAD (federal credit expired 9/30/2025). Bench:
#   early-lease-termination, hail-damage (PDR + claim mode), smog-check (CA page on
#   state-vehicle-inspection shell), mechanic-labor-rate (metro table, meta-hub).
# education: sgpa-to-cgpa and gpa-goal = modes of cgpa/weighted-gpa pages; deferment/
#   forbearance = toggle on student-loan-payoff; avoided: dorm-vs-apartment, textbook,
#   student-budget (generic), employer-tuition (no client-side data). Bench: gre/gmat
#   (pages on sat/act engine), superscore (mode of sat-to-act), ncaa-core-gpa, efc =
#   legacy-keyword mode of fafsa-sai, pell LEU tracker, GI Bill BLOCKED (zip-level BAH
#   table too heavy), IB points = mode of ap-score page.
# funeral-cost-calculator (30-40k/mo, burial-insurance $8-20 CPC): flagged for a future
#   end-of-life wave, out of current lanes. backyard-chickens cost: homesteading not pets,
#   future wave.
# mermaid suite UPGRADES live flowchart-maker + gantt-chart-maker (add syntax mode), never
#   new duplicate pages. Squoosh wasm codecs = future upgrade path for image-compressor.
# pdf: protect/remove-password = one shell two pages (done); form-filler + sign = one
#   engine two pages (audit #3 ruling). jsonpath + xpath = tabs on the jq shell.
## AIO structure rule (from Semrush 200k study — applies to every page build)
# 82% of AIOs on <1k/mo keywords = longtails; ~80% informational; listicles cited most.
# Cited pages: 2500-3300 words, tables, FAQ blocks, 40-60 word direct answer under H1.
# Only 20-26% AIO overlap with top-10 → don't need to rank #1 to get cited.
## Regulatory context that changes builds (verified 2026-08-26, wave-15e)
# OBBBA (July 2025) overhauled federal repayment EFFECTIVE 2026-07-01 — RAP (1-10% of AGI,
#   $10/mo floor under $10k income), Tiered Standard, PAYE/ICR closed to new enrollees;
#   rehab = 15% discretionary / 12 payments with $10 Direct-loan minimum. The three
#   pre-OBBBA rows above are flagged; rap-student-loan-calculator is the first-mover row.
# SECURE 2.0 §110 student-loan 401(k) match: 2025 first plan year, IRS final regs Oct 2025
#   — rollout wave is NOW (student-loan-401k-match row rides it).
## Wave 16-21 condensation (audit #4 — full sections in git history + /tmp/gh-research-*.md)
# w16 (image round 2): lane mined out; BOTH rows CUT audit #4 (pixel-art-editor: junk
#   art/game-dev CPC + pixilart owns heads + full-app embed; image-content-aware-resizer:
#   3-6k/mo below floor). Traps on record: vladmandic/face-api archived (blur-faces lane
#   has NO clean active OSS); georapbox/meme-generator MIT code but copyrighted meme
#   template images (asset-IP reject); tui.image-editor dead 2.9y; logoly WTFPL-clean but
#   adult-adjacent (AdSense risk). Full rejects: /tmp/gh-research-image-media-design.md.
# w17 (dev utils): rejects /tmp/gh-research-devutils.md — regexper archived+NOASSERTION
#   (successor regex-vis CUT audit #4 for 3-5k/mo volume); every chmod repo GPL/unlicensed
#   (chmod row went native); live cron-generator checked directly — its describe() reads
#   form dropdowns only, so cron-explainer is genuinely distinct.
# w18 (pdf round 2): rejects /tmp/gh-research-pdf-docs.md — NativeDocuments commercial
#   docx-wasm dead (license-dead); highkite/pdfAnnotate dead 3.4y (Submitty supersedes).
#   pptx-viewer CUT audit #4 ($0.5-1 thinnest CPC, feeder markdown-to-powerpoint also
#   cut); vue-office pptx runtime knowledge stays in git history if a slide lane ever
#   revives.
# w7c (auto round 3): no new fold decisions — sub-20k repair family + smog-check/hail/
#   early-termination benches already on record above.
# w20 (weddings round 2) mode-folds on record: annulment + legal-separation = tabs on the
#   divorce page; postnup = tab on prenup; K-1 fiancé visa = mode of green-card row;
#   sweet-sixteen + christening = modes of quinceanera/birthday family; 360-booth = mode
#   of photo-booth; save-the-dates + calligraphy = modes of invitation; baby-shower-gift
#   = mode of wedding-gift schema; wedding-cake-servings CUT audit #4 = mode of
#   catering-cost-per-person/wedding-budget. Out-of-lane flags (do not row in a weddings
#   wave): gift-tax (finance), travel-insurance-cost (insurance wave, pairs with
#   honeymoon-budget), funeral-cost (end-of-life wave), holiday-light-installation (home
#   services), marriage-counseling-cost (health-lane YMYL tone care).
# w19 (pets round 2): dupe sweep 0 hits; ESA-letter scam lane + medication-dosing bans
#   unchanged; dog-insulin = follow-on page only if dog-allergy-treatment ranks;
#   rover-sitter-earnings belongs to everyday/finance, not pets.
# w21 (education round 2) bench list (don't re-research): derivative-calculator (math.js
#   is answer-not-steps vs Symbolab's SERP — revisit only if matrix-calculator proves the
#   shell); z-score/p-value/confidence-interval (jstat MIT tabs once standard-deviation
#   proves); science-gpa BCPM + LSAC-GPA (gpa mode family); grad-plus (parent-plus
#   engine); toefl + duolingo-english-test (ielts engine); ph-calculator (second chemistry
#   page); community-college-vs-university + grandparent-529 + CSS-profile +
#   SAI-asset-shift (modes of college-cost/529/sai pages); R2T4 withdrawal repayment
#   (YMYL accuracy risk); thesis-statement-generator (quality floor); grammar-checker +
#   plagiarism-checker (server/API infra). GRE/GMAT/superscore/NCAA/IB/GI-Bill bench
#   unchanged from w15e notes.
---

## Wave 22 — GitHub developer-utilities round 4 (adversarial) — 2026-08-26
# Round 4 of this lane (w11/w12/w17 same-day precedents; those reject lists are
# /tmp/gh-research-developer-utilities.md + -devutils.md + -dev-utilities.md — none
# re-scanned). This pass = angles NO prior file touched: totp/2fa, image-diff,
# strftime previewer, dotenv editors, htaccess, hex viewer. 6 searches + 3 direct
# GETs + 4 raw-LICENSE verifications + 2 SERP spot-checks. 3 survivors. Rows below
# carry no suggest() score — next audit: tier-place by CPC x volume as usual.
# Fold note (not a row): live /base64-encoder/ needs a "base64 to image" decode
#   mode with inline canvas preview — 30-40k/mo keyword, trivial, no OSS needed.
# Out-of-lane flag: "date format converter" (08/26/2026 <-> 2026-08-26, consumer
#   Excel intent, real volume) is everyday-lane NATIVE, not dev-utilities; the dev
#   variant (strftime/moment previewer) has no clean head keyword and NO OSS —
#   one dead 0* repo from 2016 is the entire ecosystem. Below floor either way.

## Wave 23 — GitHub PDF/document tools round 3 (adversarial, 2026-08-26)
# Third pass over the lane (w11 x2 + w18 mined the core verbs; ~250 rejects on record in
# /tmp/gh-research-pdf-doc*.md). This pass hunted WHITE SPACE only + ran the recency sweep
# (topic:pdf created:>2025-03, stars:>40) the star-sorted prior passes never did: zero new
# survivors from it — every new high-star repo is AI-pipeline/Rust/desktop/AGPL (full list
# in /tmp/gh-research-pdf-docs-r3.md). All licenses below raw-verified from file contents.

## Wave 24 — GitHub image/media/design round 3: audio/video/media edges (adversarial, 2026-08-26)
# ~135 repos scanned (8 star-sorted queries + 11 direct checks). Rounds 1-2 (w13/w16,
# /tmp/gh-research-image-media-design.md) closed the raster/vector/design sub-lanes, so this
# round attacked the never-scanned edges: audio, video, recorders, TIFF, avatars, icon search,
# og-image. LANE KILL on record: @ffmpeg/core npm = GPL-2.0-or-later (guards above) — all
# survivors route around it. (Dispatcher labeled this wave "11"; number renumbered to next
# free per house convention — image round 1 already did 11→13.)

# Bench round 3 (decided — don't re-research): og-image-generator (vercel/satori MPL-2.0
#   13849★ + resvg-wasm MPL — both vendor-clean per ExifReader precedent, but "og image
#   generator" 3-6k/mo = sub-floor; promote only if developer-tools hub wants it) ·
#   icon-search (feather/heroicons/tabler MIT + simple-icons CC0 = clean client-side subset
#   search exists, but download-set intent + junk CPC; filler only) · video-compressor +
#   generic video-converter (WebCodecs + Vanilagy/mp4-muxer MIT 611★ = GPL-free pipeline
#   exists but a real decode/encode build — revisit when video-trimmer proves a media hub) ·
#   webcam-recorder (tab on screen-recorder) · slideshow-maker (Canva-class branded SERP,
#   no clean OSS — self-build if ever, don't scan again) · wavesurfer.js = shared UI for
#   voice-recorder + mp3-cutter rows.

## Enhancement wave (queued — after AIO/SEO uplift wave lands) — charts on money tools
- chart-pass-money-tools | enhancement | chart layer | n/a | uPlot/Chart.js deferred, render FROM existing HTML table data (table stays crawlable source of truth); ~30-40 loan/amortization/retirement/compound/tax/macro tools; engagement + linkability play, NOT an AIO substitute

## Wave E — DataForSEO-validated lateral plays (2026-08-28 research)

| slug | vol/mo | CPC | product | note |
|---|---|---|---|---|
| face-recognition-search | 45k combined (face search 27k + face recognition search 18k) | high intent | authAspect | explainer + engine comparison; core authAspect buyer |
| loyalfans | 165k | — | veyzi | platform guide + fees page |
| pimeyes-alternative | 4.4k | — | authAspect | comparison page, "free alternatives" angle |
| ai-image-detector | 1.6k | — | authAspect | client-side heuristics + guide |
| duplicate-image-finder | 1.6k | — | authAspect | perceptual hash, fully client-side |
| deepfake-detector | 1k | — | authAspect | detection signals guide |
| boosty | 12.1k | — | veyzi | platform fees/earnings calculator |
| copyright-infringement-damages | 720 | — | authAspect | content-only legal guide |
| video-watermark | 880 + add-watermark-to-video 390 | — | authAspect | add-only; NEVER removal |
| rumble-earnings | 140 | — | veyzi | platform calculator |
| dmca-notice-template / cease-and-desist-template | 430 combined | — | authAspect | content-only templates |
| patreon-fees-calculator | 40 | — | veyzi | small but zero competition |

HARD RULE (standing): never build watermark-removal or any content-theft tooling — "watermark remover" (135k/mo) and "remove watermark from video" (22k/mo) deliberately skipped.

## GH scan 2026-08-30 (auto)
gh:overshard/timelite-nextjs | oss | wrap | low | S271 BSD-2-Clause — A dead simple time tracker that keeps everything in local storage. Next.js, no accounts and no serve
