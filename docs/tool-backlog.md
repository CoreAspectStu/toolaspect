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

## Score 60-79 (10 slugs)
rap-student-loan-calculator | finance | calc | $10-30 | Repayment Assistance Plan live since 2026-07-01: 1-10% of AGI sliding scale + $10 floor + 20/25-yr forgiveness; SERP is news articles, zero quality tools = first-mover AIO slot; payments-by-salary table ($30k/50k/80k) = triple citable; loan-lawyer + refi CPC; shares repayment-comparison engine (add the column there anyway, see flag below) | — w15e
student-loan-consolidation-calculator | finance | calc | $15-40 | federal weighted-average rate ROUNDED UP to 1/8% (generic calcs get this wrong = the moat); 15-25k/mo; loans-category CPCs $30-55 | suggest(score 66, 2/2 seeds, depth 19)
speeding-ticket-cost-calculator | legal | calc | $8-25 | traffic attorneys bid $10-30/click in this lane; "how much is a speeding ticket" 20-40k/mo + "in texas/california/florida" state longtails = 60-100k/mo cluster with a blog-heavy, calculator-thin SERP; 50-state fine-band + points table with insurance-surcharge projection cross-linking car-insurance-rate-increase row (the fine vs the surcharge = distinct intents) | — w7c
diminished-value-claim-calculator | legal | calc | $15-40 | 17c formula (base loss x damage x mileage multipliers); 10-15k/mo; DV appraisers + PI attorneys bid; same multiplier-table pattern as settlement winners | suggest(score 68, 2/2 seeds, depth 20)
private-student-loan-calculator | finance | calc | $15-40 | biggest unbuilt loan lane: private ORIGINATION rates/terms with the 4 disbursement modes no generic calc combines (full-deferral vs interest-only vs flat-payment vs immediate, each with capitalized-interest-at-graduation reveal) — the subsidized-vs-unsub trick applied to private terms; "private student loans" 40-80k/mo cluster, "private student loan calculator" longtails; College Ave/Credible/Sallie Mae bid near-refi CPCs; DISTINCT from refinance (existing loans), consolidation (federal), repayment-comparison (federal plans); loan-calculator engine pattern | — w21
divorce-cost-calculator | legal | calc | $10-30 | the marriage arc's biggest monetizable gap: "how much does a divorce cost"/"divorce lawyer cost"/"uncontested divorce cost" 30-60k/mo cluster and divorce attorneys bid some of the highest legal CPCs (family law commonly $15-50 in competitive metros); verified AIO-citable anchors — Nolo survey median $7,000 attorney fees / ~$11,300 avg, ~$4,100 uncontested, ~$19,500 per party contested, TX-with-kids $15-30k; DIY filing vs online-divorce-service ($150-500) vs mediation vs full-representation TCO ladder + 50-state filing-fee table (~$100-450) = the state-table pattern that won for car-insurance-estimator; DISTINCT from live alimony-calculator trio (support-payment amount vs process cost) — cross-link all four; trivial client-side build | — w20
truck-accident-settlement-calculator | legal | calc | $25-60 | commercial vehicle premium; 8th settlement tool on a pattern proven 7x | suggest(score 68, 2/2 seeds, depth 12)

## Score 40-59 (77 slugs)
background-remover | image | oss-wrap | $1-3 | transformers.js (Apache-2.0) + Xenova/modnet ONNX (Apache-2.0 verified both ends) people/portrait matting + u2net (Apache-2.0 weights re-hosted from origin) for objects; "remove background from image" 300k+/mo, remove.bg/Cutout ads bid; honest copy = private+free, not pro-grade on hair; ~5MB lazy model load; every AGPL competitor (imgly/removerized) locked out = clean-water wedge | — w13
word-to-pdf | document | oss-wrap | $1-3 | CHAIN BUILD, no new deps: mammoth.js (BSD-2, verified, docx-to-html direction of the html-to-word row) → html-to-pdfmake (MIT) → pdfmake (MIT): docx → semantic HTML → one-click PDF, third page on the html-to-pdf engine; "word to pdf" ~300-500k/mo, biggest document verb not in the catalog; HONESTY GUARD: semantic conversion — text/tables/headings survive, brochure layout does NOT; real-fidelity docx-wasm is license-dead (NativeDocuments commercial, no license, dead 2019 — see rejects); privacy wedge vs upload SERP | — w18
image-upscaler | image | oss-wrap | $0.5-2 | thekevinscott/UpscalerJS (MIT, 896★, active 2026-08): 2x/4x esrgan in-browser tfjs/wasm; "image upscaler"/"upscale image" 100k+/mo; pin BSD-lineage esrgan-slim models only (zoo includes research-only weights); upscayl/clarity/realesrgan-gui all AGPL = same wedge | — w13
html-to-pdf | document | oss-wrap | $1-3 | Aymkdn/html-to-pdfmake (MIT, 642★, active) on pdfmake (MIT, 12.3k★, active): paste HTML/snippet → pdfmake doc → one-click PDF, no server print-dialog; "html to pdf" ~150-200k/mo; HONESTY GUARD: no full CSS engine — position as clean-print converter (articles, tables, invoices), never pixel-perfect | — w11
sign-pdf | pdf | oss-wrap | $2-6 | szimek/signature_pad (MIT, 12k★, LICENSE verified) canvas draw/type/upload → PNG stamped via cantoo pdf-lib at drag-placed coords + optional date stamp; "sign pdf" ~50-70k/mo; "never uploaded" wedge vs DocuSign-brand SERP; legal/insurance CPC; audit #4 merge executed: pdf-form-filler folded here — ONE engine, TWO pages (fill page = cantoo pdf-lib AcroForm enumerate fields, fill text/checkbox/radio/dropdown, save flattened or editable; "fill pdf form" ~20-30k/mo; AcroForm-only-not-XFA caveat in copy), protect/remove-password precedent | — w11
excel-to-pdf | document | oss-wrap | $1-2 | CHAIN BUILD: SheetJS CE (Apache-2.0, vendored for xlsx rows) sheet_to_html → html-to-pdfmake → pdfmake, one section per sheet + landscape toggle; "excel to pdf" ~150-250k/mo; HONESTY GUARD: no print-area/page-break fidelity — grid+formulas-as-values only; second page on same chain as word-to-pdf | — w18
redact-pdf | pdf | oss-wrap | $3-8 | SAFE-REDACTION-ONLY: draw boxes → full-page rasterize via pdf.js canvas → rebuild in pdf-lib so covered text is destroyed, not hidden (the only client-side method that's actually safe); "redact pdf" ~8-10k/mo; legal/medical HIPAA intent = top PDF CPC in lane; copy must promise destruction, never "hide" | — w11
car-repair-cost-calculator | auto | calc | $6-15 | umbrella hub; 30k+/mo; by-repair table (diagnose -> parts -> labor hours) | suggest(score 45, 2/2 seeds, depth 20)
roof-replacement-cost-calculator | home | calc | $6-15 | 55k/mo; cost estimator distinct from live roofing-calculator (materials math), house precedent: deck-calculator + deck-cost-calculator pair | suggest(score 42, 2/2 seeds, depth 18)
molar-mass-calculator | education | tool | $1.5-5 | "molar mass calculator" 100-200k/mo, the biggest chemistry-homework verb; periodic-table JSON (~90 elements) x formula parsing with hydrate dot-notation and parentheses = pure client-side; tutoring platforms (Wyzant class) bid above generic student CPCs; mole/percent-composition modes ride the same parser | — w21
car-shipping-cost-calculator | auto | calc | $8-20 | auto transport is a notorious expensive-lead vertical (brokers pay $50-150/lead; monetized via display ads, no lead capture on static hosting); "car shipping cost"/"how much to ship a car"/"car transport cost" 40-70k/mo; per-mile tier x vehicle size x open-vs-enclosed table, pure client-side; nothing in backlog or live touches it | †wave-7
car-wrap-cost-calculator | auto | calc | $3-8 | "vehicle wrap cost"/"car wrap cost" 25-40k/mo; color-change vs commercial-advertising wrap x vehicle-size class + partial-wrap mode; wrap shops + vinyl brands bid local-service CPCs; NOT the benched paint-job fold-in (vinyl ≠ paint, distinct keywords/advertisers) | — w7b
pdf-annotate | pdf | oss-wrap | $1-3 | Submitty/pdf-annotate.js (MIT, 295★, LICENSE raw-verified, pushed 2026-02): annotation interaction layer on pdf.js (highlight/ink/text-note); persistence = custom pdf-lib low-level annot-dict writer — MEDIUM EFFORT, the fiddly part, budget it; "annotate pdf" ~20-30k + "highlight pdf" ~15k + "draw on pdf" ~10k/mo; e-sign SaaS bids; highkite/pdfAnnotate (638★, MIT) dead-3.4y — cited in rejects, Submitty supersedes | — w18
organize-pdf | pdf | oss-wrap | $0.5-1.5 | pdf.js page thumbnails + cantoo pdf-lib copyPages/delete: drag-reorder grid with per-page delete/rotate — ONE shell, THREE pages ("organize pdf" ~100-150k, "delete pages from pdf" ~60-80k, "rearrange pdf pages" ~30-40k, one-engine-N-pages precedent); distinct intents from extract (pull-keep selection) and split (burst); reference ComputeFreely/pdffreely.com (CC0 1.0, LICENSE raw-verified, active) proving browser-only viability; medium effort = the drag UI | — w18
compare-pdf | document | oss-wrap | $1-2 | pdf.js getTextContent per page + jsdiff (both house-verified stacks): side-by-side synced pages with text-level adds/dels highlighted; v2 = raster XOR mode for scanned pdfs; "compare pdf"/"compare two pdf files"/"pdf diff" ~20-35k/mo aggregate; fourth member of diff family (text diff-checker, json-diff, excel-diff) — cross-link all; reference a-subhaneel/pdf-diff-viewer (MIT, 2★, raw-verified, active — concept proof only) | — w18
pdf-add-text | pdf | oss-wrap | $1-3 | cantoo pdf-lib drawText at click-placed coords + font-size/color picker: the flat/scanned-form answer where the sign-pdf engine's AcroForm API can't help; "add text to pdf" ~30-40k + "write on pdf" ~15k/mo; shares drag-position geometry with sign-pdf stamp code; feeder into the sign + fill cluster | — w18
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
barcode-generator | dev | oss-wrap | $2-5 | productdevbook/etiket (MIT, active, zero-dep): Code128/UPC/EAN/39 + 40 formats, SVG+PNG; "barcode generator" ~50k/mo; ALSO styled-QR = upgrade path for live qr-code-generator (ONE row: JsBarcode merged here 2026-08-26, etiket preferred, JsBarcode fallback) | suggest(score 35, 2/2 seeds, depth 20)
qr-code-scanner | dev | oss-wrap | $0.5-1.5 | mebjas/html5-qrcode (Apache-2.0, verified): live camera + decode-from-screenshot (the laptop use case); "scan qr code" 100k+/mo; decodes, distinct from live qr-code-generator (creates) | suggest(score 31, 2/2 seeds, depth 20)
jpg-to-pdf | pdf | oss-wrap | $0.3-1 | pdfstudio images-to-PDF + pdf-lib embed; ~300k/mo phone-scanner crowd, trivial; feeder into pdf-merge | suggest(score 30, 2/2 seeds, depth 19)
pdf-to-jpg | pdf | oss-wrap | $0.5-1.5 | PDFLince (MIT) pdf.js render -> canvas -> JSZip; "pdf to jpg/png" ~200k/mo; DPI slider + multi-page zip | suggest(score 31, 2/2 seeds, depth 20)
compress-pdf | pdf | oss-wrap | $0.5-2 | pdfstudio lossless + PDFLince (MIT) rerender-downscale path; ~500k/mo biggest pdf verb after merge; honest "lossless / never uploaded" angle only | suggest(score 32, 2/2 seeds, depth 20)
pdf-merge | pdf | oss-wrap | $0.5-1.5 | 600k+/mo brutal SERP (iLovePDF/SmallPDF); win the "merge pdf offline / without uploading" privacy cluster | suggest(score 31, 2/2 seeds, depth 20)
subnet-calculator | dev | oss-wrap | $2-6 | rs/node-netmask (MIT): CIDR<->mask<->range<->broadcast, host count, split table; 55k+/mo; hosting/VPN ads bid (UI ref: cidr.xyz MIT) | suggest(score 36, 2/2 seeds, depth 20)
image-color-picker | creator | oss-wrap | $1-2.5 | lokesh/color-thief (MIT): eyedropper + dominant palette from image; "image color picker" ~25k + "color palette from image" ~15k/mo = ONE tool, two keywords (merged 2026-08-26); distinct from live color-converter (manual palettes) | suggest(score 32, 2/2 seeds, depth 20)
pdf-split | pdf | oss-wrap | $0.5-1.5 | pdfstudio split() + page ranges; ~300k/mo; shares drag-reorder shell with pdf-merge | suggest(score 31, 2/2 seeds, depth 20)
json-viewer | dev | oss-wrap | $1-2.5 | jsoneditor (Apache-2.0, v10 verified) tree/table viewer; "json viewer" 40k + "json editor online" 20k/mo; ADJACENT to live json-formatter, distinct keyword, cross-link hard | suggest(score 32, 2/2 seeds, depth 20)
heic-to-jpg-converter | image | oss-wrap | $0.5-2 | hoppergee/heic-to (LGPL-3.0, verified): ship lib UNMODIFIED via CDN + attribution; "heic to jpg" 300k+/mo monster | suggest(score 30, 2/2 seeds, depth 18)
image-cropper | creator | oss-wrap | $0.8-2 | fengyuanchen/cropperjs (MIT): social presets (YT thumbnail, IG, LinkedIn banner); "crop image online" ~40k/mo + every "X size" spec query | suggest(score 32, 2/2 seeds, depth 20)
xml-formatter | dev | oss-wrap | $1-2.5 | xml-formatter + xml-js (both MIT): minify/indent/validate; ~50k/mo; same shell doubles as xml-validator | suggest(score 32, 2/2 seeds, depth 20)
favicon-generator | dev | oss-wrap | $2-5 | ruisaraiva19/favycon (MIT): canvas pipeline -> favicon.ico + apple-touch + manifest; "favicon generator" ~30k/mo + "ico converter" ~15k/mo | suggest(score 35, 2/2 seeds, depth 20)
markdown-to-pdf | document | oss-wrap | $0.5-1.5 | realdennis/md2pdf (MIT) vendored, swap print-dialog for pdfmake one-click download; ~60k/mo | suggest(score 22, 1/1 seeds, depth 10)
color-contrast-checker | dev | oss-wrap | $0.5-1.5 | bbc/color-contrast-checker (Apache-2.0): WCAG AA/AAA pass/fail chips + shareable hex URLs; ~25k/mo; trivial | suggest(score 31, 2/2 seeds, depth 20)
code-beautifier | dev | js-beautify + prettier | $1-2.5 | js-beautify (MIT): js/css/html beautify 18k/mo combined; typescript-formatter folded here audit #4 2026-08-26 — add TS/TSX/GraphQL tabs via prettier standalone browser build (MIT, 52.2k★, raw-verified, active; languages js-beautify cannot parse; "typescript formatter" 6-8k/mo) — one formatter shell, cross-link minifier-trio | suggest(score 32, 2/2 seeds, depth 20)
pdf-to-text | pdf | oss-wrap | $1-2 | markitdown-ts PDF conversion; "pdf to text" ~100k/mo + AI-ingest longtail; markdown output mode covers the folded pdf-to-markdown row (markitdown-ts emits both, audit #2 2026-08-26) | suggest(score 32, 2/2 seeds, depth 20)
rotate-pdf | pdf | oss-wrap | $0.3-1 | pdfstudio rotate() per-range; ~200k/mo; trivial; internal-link feeder to merge/split | suggest(score 31, 2/2 seeds, depth 20)
svg-editor | image | oss-wrap | $0.5-1.5 | SVG-Edit/svgedit (MIT core + bundled LGPL-3.0 dep, 7803★, active): embed UNMODIFIED build at /svg-editor/ + SEO/ads shell (heic CDN precedent covers the LGPL dep); "svg editor" 80-150k/mo but brutal SERP (method.ac/boxy/figma) — longtail play, not head; Method-Draw rejected (dormant 2.3y) | — w13
flatten-pdf | pdf | oss-wrap | $1-3 | pdfstudio flatten(); print-shop/forms niche "flatten pdf" ~15k/mo | suggest(score 23, 1/1 seeds, depth 10)
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
certificate-decoder | dev-sec | asn1js | $2-5 | lapo-luchini/asn1js (ISC): PEM cert/CSR/key -> ASN.1 tree + readable fields; "certificate decoder" 8k + "csr decoder" 3k/mo; SSL-vendor ads = best CPC in lane | suggest(score 35, 2/2 seeds, depth 20)
bates-numbering | legal | oss-wrap | $4-12 | cantoo pdf-lib loop: prefix/suffix + start index + digit count + position + first-page skip — page-numbers engine kinship = cheapest build in the lane; "bates numbering" only ~4-6k/mo but legal-document-production CPC tops the lane and zero client-side competition; AIO longtail zone (82% of AIOs cite <1k/mo keywords); volume play NO, CPC+effort play YES | — w18
image-to-svg-converter | image | oss-wrap | $0.5-1.5 | jankovicsandor/imagetracerjs (Unlicense = public domain, 1533★): zero-dep raster→SVG tracer, B&W-logo + color-photo + posterize-slider presets; "png to svg" ~30k + "jpg to svg"/"image to svg" ~15k/mo; vectorizer.ai is paid → free+private wedge; vendor+pin (dormant 2023, algorithm complete); only clean tracer — potrace/SVGcode route is GPL | — w13
credit-card-validator | finance-dev | oss-wrap | $1-3 | braintree/card-validator (MIT): Luhn + brand + BIN detection; ~50k/mo; loud no-storage banner | suggest(score 33, 2/2 seeds, depth 20)
exif-viewer | dev | oss-wrap | $1-3 | mattiasw/ExifReader (MPL-2.0, active): EXIF/IPTC/XMP table + GPS map; "exif viewer" ~25k/mo; vendor unmodified + notice = compliant (merged duplicate exif-metadata-viewer row 2026-08-26; strip-metadata is the separate image-metadata-remover row) | suggest(score 33, 2/2 seeds, depth 20)
qr-code-with-logo | creator | oss-wrap | $1-3 | qr-code-styling (MIT, active): dots/logo/gradients, PNG/SVG; "qr code with logo" ~12k + "custom qr code" ~20k/mo; distinct intent from live plain qr-code-generator; dynamic-QR SaaS affiliate upside (fancy-qr-generator row merged here 2026-08-26) | suggest(score 33, 2/2 seeds, depth 20)
xlsx-to-csv | document | oss-wrap | $1-2 | SheetJS CE (Apache-2.0, vendor+pin from cdn.sheetjs.com; GitHub repo is a stale mirror): multi-sheet picker in a Worker; "excel to csv"/"xlsx to csv" ~40k/mo (ONE row: duplicate dev-wave entry merged 2026-08-26) | suggest(score 32, 2/2 seeds, depth 20)
xml-to-json | dev | oss-wrap | $1-2.5 | xml-js (MIT) bidirectional; "xml to json" 25k + "json to xml" 12k/mo; cluster with xml-formatter | suggest(score 32, 2/2 seeds, depth 20)
markdown-table-generator | dev | markdown-table | $1-2 | wooorm/markdown-table (MIT, 297*, license file verified, remark ecosystem): CSV/TSV/HTML/pasted-grid -> GFM table + alignment controls; "markdown table generator" ~10k + "csv to markdown" ~4k/mo; modes of one shell | — w12
phone-number-validator | dev | libphonenumber-js | $1-3 | MIT, offline Google metadata: validity + E.164 formats + carrier type; ~15k/mo | suggest(score 33, 2/2 seeds, depth 20)
markdown-to-word | document | oss-wrap | $1-2 | vace/markdown-docx (MIT) on dolanmiu/docx (MIT): real OOXML with tables/images; "markdown to word" ~8k/mo | suggest(score 32, 2/2 seeds, depth 20)
saml-decoder | dev-sec | pako compose | $3-8 | nodeca/pako (MIT, 6.1k*, LICENSE verified, active) + xml-formatter (already row'd): SAMLRequest/Response base64->inflate->pretty XML + assertions table; "saml decoder" ~4k/mo; IdP/SSO vendor ads = top CPC in lane; zero new deps beyond pako; audit #3 CPC-first keep | — w12
js-obfuscator | dev | javascript-obfuscator | $1-3 | BSD-2, browser build exists; string-array + control-flow options; ~12k/mo | suggest(score 33, 2/2 seeds, depth 20)
watermark-pdf | pdf | oss-wrap | $1-3 | pdf-lib stamp overlay/underlay via pdfstudio; "watermark pdf" ~40k/mo | suggest(score 33, 2/2 seeds, depth 20)
xlsx-viewer | document | oss-wrap | $1-2 | SheetJS read (already vendored for xlsx-to-csv) + virtualized HTML grid with sheet tabs + formula-value toggle; "excel viewer online"/"xlsx viewer" ~10-15k/mo; feeder page to xlsx-to-csv + csv-to-excel | — w11
pdf-repair | pdf | oss-wrap | $1-4 | pdfstudio repair(); "repair corrupt pdf" ~20k/mo desperate-user niche, thin tool competition, high conversion | suggest(score 31, 2/2 seeds, depth 18)
json-to-yaml | dev | oss-wrap | $0.5-1.5 | eemeli/yaml (ISC, 1688★, LICENSE raw-verified, active — modern js-yaml successor): bidirectional JSON⇄YAML + pretty-print; HONESTY: reverse-pair of live yaml-validator (YAML→JSON only today), new value = json→YAML direction + formatter mode; "json to yaml" 15-20k/mo; csv-to-excel reverse-pair precedent | — w17
engagement-ring-budget-calculator | wedding | calc | $2-8 | "engagement ring cost" 25k/mo + "how much to spend" 10k/mo; salary-rule vs 2-3mo myth + carat table; jewelers bid | suggest(score 37, 2/2 seeds, depth 20)
towing-capacity-calculator | auto | tool | $3-8 | GVWR minus curb weight, GCWR check, tongue-weight math; 20-40k/mo; capability sibling of towing-cost | suggest(score 37, 2/2 seeds, depth 19)
svg-optimizer | dev | oss-wrap | $1.5-4 | svg/svgo (MIT) in-browser, svgomg proves the bundle; "svg optimizer"/"minify svg" ~15k/mo; presets + before/after diff (duplicate rows from both image waves merged 2026-08-26) | suggest(score 34, 2/2 seeds, depth 20)
iban-validator | finance-dev | oss-wrap | $1-3 | Simplify/ibantools (MIT OR MPL-2.0, verified): mod-97 + per-country rules; "iban validator" 90k+/mo global | suggest(score 33, 2/2 seeds, depth 20)
robots-txt-validator | dev | oss-wrap | $1-3 | samclarke/robots-parser (MIT, active): validate + "is this URL blocked" wildcard matcher + AI-crawler table; distinct intent from live robots-txt-generator (check vs create) | suggest(score 33, 2/2 seeds, depth 20)
html-to-word | document | oss-wrap | $1-2 | ducbao414/docshift (MIT, 16★, LICENSE raw-verified, 2025) — explicitly pure client-side HTML⇄DOCX, tiny so vendor+pin; fallback TurboDocx/html-to-docx (MIT fork of privateOmega, 226★, raw-verified, pushed 2026-08, Node-first); "html to word"/"convert html to word" ~15-25k/mo; docx-to-html folded here audit #4 2026-08-26 (docshift converts both directions — one row, both directions, csv-to-json precedent; mammoth.js stays the semantic docx→html engine reference for the word-to-pdf chain); csv-to-excel reverse-pair precedent | — w18
dog-water-intake-calculator | pets | calc | $1-2.5 | "how much water should a dog drink" 15-25k/mo + puppy/cat variants; oz-per-lb rule (0.5-1 oz/lb adults, ~1 oz/lb puppies) + activity/climate + kibble-vs-wet-food adjusters — the canine page of the LIVE human hydration pair (hydration-needs-by-weight + water-intake) = instant internal-link cluster; pet-fountain DTC + vet ads; guideline-only copy with call-your-vet note (general care info, not medication dosing — dog-food-calculator precedent) | — w19
curl-converter | dev | curlconverter | $1.5-4 | MIT, tree-sitter wasm lazy (their own site is fully client-side); curl -> Python/fetch/axios/Go + 27 targets; ~12k/mo | suggest(score 34, 2/2 seeds, depth 20)
pdf-metadata-editor | pdf | oss-wrap | $1-2 | pdf-lib (MIT) setTitle/setAuthor + read via pdfjs; "pdf metadata editor" ~10k/mo | suggest(score 32, 2/2 seeds, depth 20)
wedding-gift-calculator | everyday | calc | $0.8-2 | "how much to spend on a wedding gift" 15-25k/mo by relationship/city/plate-cost; volume + internal links, not CPC; calc not generator (distinct from live gift-ideas) | suggest(score 32, 2/2 seeds, depth 20)
user-agent-parser | dev | bowser | $0.5-1.5 | bowser (MIT, verified; chosen AFTER ua-parser-js AGPL rejection); "what is my user agent" 90k+/mo; volume play | suggest(score 31, 2/2 seeds, depth 20)
url-parser | dev | native | $0.5-1.5 | NATIVE whatwg URL (zero deps): paste URL → protocol/host/port/path/table of decoded query params, editable, rebuild URL; "url parser"/"query string parser" 12-18k/mo; DISTINCT from live url-encoder (encode values vs dissect structure); trivial build, embed-friendly | — w17
dog-breed-selector-quiz | pets | quiz | $1-2.5 | "what dog breed is right for me"/"dog breed quiz"/"dog breed selector" 25-50k/mo aggregate; weighted quiz (size/energy/shedding/apartment/kids/experience) over a ~30-breed DB -> ranked matches with cost-per-year pulled from cost-of-owning data; shareable engagement play feeding puppy-price + cost-of-owning + pet-insurance rows; distinct from live pet-name-generator (naming vs choosing); MEDIUM build (quiz UX + breed DB) is the only knock | — w19
gpa-scale-converter | education | table | $1-3 | "gpa scale"/"4.0 gpa scale" 40-80k/mo; letter <-> percent <-> 4.0 mega-table page, table-first AIO build; interlink don't duplicate live gpa-calculator content (loan/auto-loan sibling precedent); cheapest volume play in the lane | — w15e
pell-grant-eligibility-calculator | education | calc | $3-8 | SAI-band -> award table ($7,395 max); 5-15k/mo; reuses the fafsa-sai engine | suggest(score 37, 2/2 seeds, depth 19)
oil-change-cost-calculator | auto | calc | $3-6 | 40-60k/mo volume leader; synthetic vs blend cost-per-mile with interval math; quick-lube chains bid | suggest(score 36, 2/2 seeds, depth 20)
gitignore-generator | dev | gitignore data | $1-2 | github/gitignore (CC0-1.0, 175k*, LICENSE verified, active): checkbox stack composer over vendored template bundle + per-language longtails ("python gitignore" etc.); "gitignore generator" ~9k/mo; re-vendor templates at build time | — w12
excel-diff | document | oss-wrap | $1-2 | SheetJS CE (Apache-2.0, bundle already vendored for xlsx-to-csv row): two XLSX/CSV files → per-sheet cell-level diff grid, added/changed/removed highlight; PRIVACY WEDGE = every ranking competitor uploads to a server, ours never leaves the browser — headline the no-upload; "compare two excel files"/"excel diff" 8-12k/mo; distinct from live text diff-checker + json-diff row; medium effort | — w17
vehicle-property-tax-calculator | auto | table | $3-8 | ~24 states bill car tax as a separate annual excise/personal-property tax on assessed value — a distinct bill from registration fees (the moat vs the registration row); "personal property tax on a car"/"car tax by state" 10-25k/mo; state rate x assessment-ratio table = the 50-state AIO pattern that won for vehicle-registration-cost | — w7c
dog-pregnancy-calendar | pets | calc | $3-6 | 63-day gestation wheel; 15-20k/mo breeder intent, near-zero tool competition; + cat-pregnancy-calendar (63-65 day wheel) as second page on the same engine (folded in audit #2 2026-08-26) | suggest(score 36, 2/2 seeds, depth 20)
json-to-typescript | dev | quicktype | $1-3 | Apache-2.0 client-side engine; "json to typescript" 4k + java/pojo/go/rust aggregate 12k+/mo | suggest(score 33, 2/2 seeds, depth 20)
pdf-page-numbers | pdf | cantoo-pdf-lib | $1-2 | cantoo pdf-lib drawText loop: position (9 slots), format (1/1 of N), start index, margins, skip-first-page; "add page numbers to pdf" ~10-15k/mo; low effort, merge/split feeder | — w11
sql-playground | dev | sql.js | $1-3 | SQLite-to-wasm ~1MB, sample DB + user DDL -> results grid; "sqlite online" 8k + "sql playground" 6k/mo; runs, complements live sql-formatter (format) | suggest(score 33, 2/2 seeds, depth 20)
cron-explainer | dev | oss-wrap | $0.5-2 | bradymholt/cRonstrue (MIT, 1631★, LICENSE raw-verified, active) + Hexagon/croner (MIT, 2586★, raw-verified, active): paste arbitrary cron → accurate English + next-5-run datetimes (croner) + quartz 6/7-field + @daily strings; VERIFIED distinct from live cron-generator; crontab.guru owns heads = "cron expression explainer"/"cron parser"/"cron next run" longtail 8-15k/mo; both deps tiny, embed-ready | — w17
car-maintenance-cost-calculator | auto | calc | $3-8 | 30/60/90k service-schedule table by mileage; ~10k/mo; internal-links every repair-cost page above | suggest(score 38, 2/2 seeds, depth 20)
wedding-venue-cost-calculator | wedding | calc | $4-6 | venue = #1 line item; confirmed $5.42 CPC; by-state and venue-type table (RETYPED lead->calc audit #2 2026-08-26: no server-side lead capture on static hosting, display-ads calc instead); event-space capacity sizing = mode of this page's stacker (event-space-capacity row folded audit #3) | suggest(score 37, 2/2 seeds, depth 20)
wedding-dj-cost-calculator | wedding | calc | $2-5 | 10-20k/mo; 4-hr base + add-ons + live-band toggle ("wedding band cost" rides the page) | suggest(score 35, 2/2 seeds, depth 20)
image-metadata-remover | dev | oss-wrap | $2-4 | szTheory/exifcleaner (MIT) proves pure-JS lossless strip (no exiftool); "remove exif" ~15k/mo; privacy advertisers bid | suggest(score 34, 2/2 seeds, depth 20)
dog-crate-size-calculator | pets | calc | $1-2.5 | "dog crate size"/"what size dog crate" + by-breed longtails 20-40k/mo; adult dog length + 2-4in clearance height/width rule from breed weight bands (crate sizing charts are pure arithmetic the retail blogs bury in tables); dog-house-sizing mode on the same engine; crate retailers bid; trivial build, feeder into cost-of-owning rows | — w15p
puppy-feeding-calculator | pets | calc | $2-6 | growth-phase calories (2-3x RER by age band) + meals/day taper; 15-20k/mo; distinct keyword from adult dog-food-calculator | suggest(score 36, 2/2 seeds, depth 20)
marriage-tax-penalty-calculator | finance | calc | $5-15 | MFJ vs MFS side-by-side reuses income-tax engine; tax software bids; 5-15k/mo, Jan-Apr peak | suggest(score 36, 2/2 seeds, depth 14)
image-to-text-ocr | image | oss-wrap | $0.5-2 | tesseract.js (Apache-2.0, verified) wasm worker, 100+ langs; "image to text"/"ocr online" 100k+/mo; volume play | suggest(score 32, 2/2 seeds, depth 20)
csv-to-sql | dev | PapaParse | $1-2.5 | MIT (likely already the csv-to-json engine, reuse bundle): CSV -> INSERTs + type inference + DDL; ~8k/mo | suggest(score 31, 2/2 seeds, depth 19)
jq-playground | dev | jq wasm + jsonpath | $1-2 | jqlang/jq (MIT, Dolan text verified) official playground impl + jsonpath lib in ONE shell, two pages: "jq online" ~5k/mo + jsonpath-tester ~5k/mo (jsonpath-tester row merged here audit #2 2026-08-26: the two rows described the same shell); xpath-tester folded here audit #4 2026-08-26 as the third tab (fontoxpath MIT, "xpath tester" ~6k/mo — the decided fold, executed) | suggest(scores 30 + 27, the two merged rows)
wheel-alignment-cost-calculator | auto | calc | $3-8 | 25-30k/mo; 2 vs 4-wheel x single vs lifetime plan; cross-sell new-tires tool | suggest(score 38, 2/2 seeds, depth 20)
cgpa-to-gpa-converter | education | convert | $1-3 | 10-point Indian CGPA -> US 4.0 + percentage tables; 50k+/mo global student volume; near-zero effort | suggest(score 33, 2/2 seeds, depth 20)
dog-ideal-weight-calculator | pets | calc | $2-5 | breed + BCS healthy range; ~15k/mo; weight-loss-dog-food brand ads | suggest(score 35, 2/2 seeds, depth 20)
dog-life-expectancy-calculator | pets | calc | $2-5 | ~80-90k/mo cluster; breed-size table; shares data with dog-age page | suggest(score 35, 2/2 seeds, depth 20)
bolt-pattern-calculator | auto | tool | $2-6 | "bolt pattern" 40-80k/mo + "5x114.3"/"5x4.5" decode longtails = 60-100k aggregate; studs x pitch, inch<->mm conversion, offset explainer; HONESTY GUARD: popular-pattern static table (~50 patterns), never a per-vehicle fitment DB (that dataset is licensed); wheel/tire retailers bid; builds WITH tire-size-calculator shell | — w7c
wedding-planner-cost-calculator | wedding | calc | $2-5 | full vs partial vs month-of tier table vs 10-15% of budget; 15-25k/mo | suggest(score 35, 2/2 seeds, depth 20)
wedding-photographer-cost-calculator | wedding | calc | $1.5-4 | biggest vendor cluster 30-50k/mo; hours x metro tier x second shooter; photographers buy leads | suggest(score 34, 2/2 seeds, depth 20)
html-to-jsx | dev | oss-wrap | $0.5-2 | reactjs/react-magic (BSD-3 Facebook, LICENSE raw-verified, htmltojsx engine behind React's own official playground; dormant 2023 but grammar complete = vendor+pin) + gregberge/svgr (MIT, 11055★, raw-verified, active) as svg-to-react tab on same shell; "html to jsx" 5-6k + "svg to jsx" 3-4k/mo; svgr's own playground proves full client-side | — w17
horse-age-calculator | pets | calc | $1-2 | "horse age calculator"/"how old is my horse in human years" + teeth-aging longtails 8-15k/mo; equine third page on the dog-age/cat-age engine (exact house precedent); senior-at-15-20y marker + human-year comparison table = AIO-citable; horse-supply retail bids; trivial-build volume play | — w19
bill-of-sale-generator | auto | generator | $2-5 | "bill of sale template"/"bill of sale for a car" 40-60k/mo; state picker + as-is disclosure + odometer/price fields -> printable PDF on the existing pdf-lib stack; legal-template sites + DMV-services bid; paperwork companion to car-title-transfer + dealer-doc-fee rows, funnels the private-sale reader into the ownership cluster | — w7b
salvage-title-value-calculator | insurance | calc | $4-10 | "salvage title value"/"salvage car value" 8-15k/mo; % of ACV by damage tier + rebuilt-title resale discount table; we-buy-junk-car and salvage-auction lead-gen pays; closes the totaled-car-value -> diminished-value -> salvage chain | †wave-7
ielts-band-score-calculator | education | calc | $1-4 | four-section mean + half-band rounding; 15-30k/mo global; pairs with cgpa-to-gpa as international cluster | suggest(score 34, 2/2 seeds, depth 20)
party-food-quantity-calculator | events | calc | $1.5-4 | 5-15k/mo across ALL party types; per-person appetizer/entree/dessert table; grocery + catering ads; graduation-party mode folded here (audit #3) | suggest(score 26, 2/2 seeds, depth 12)
hmac-generator | dev | native | $1-3 | NATIVE WebCrypto (crypto.subtle HMAC-SHA1/256/384/512, zero deps; crypto-js MIT only if MD5-HMAC requested): message+key → HMAC hex/base64; "hmac generator"/"hmac sha256 generator" 8-12k/mo; DISTINCT from live hash-generator (keyed MAC vs plain digest); API/webhook-debugger intent = security-tooling CPC above generic dev | — w17
bumper-repair-cost-calculator | auto | calc | $2-6 | "bumper repair cost"/"bumper replacement cost" 15-25k/mo; scuff-repair vs re-skin vs OEM-replace table + paint-match adder; collision shops + aftermarket-parts retailers bid; shares the dent-repair table shell, distinct keyword | — w7b
bright-futures-calculator | education | calc | $2-6 | FL Bright Futures FAS/FMS tier eligibility (GPA + service hours, test-free since 2024) 15-30k/mo FL-heavy + GA HOPE as second page on the same engine (alimony-california/texas state-page precedent); in-state colleges + FL prep bid | — w15e
puppy-adult-size-calculator | pets | calc | $1-3 | "how big will my puppy get" 25-40k/mo; growth-curve percentage math + mixed-breed range; trivial | suggest(score 33, 2/2 seeds, depth 20)
html-entity-converter | dev | entities | $0.8-2 | fb55/entities (BSD-2 per file text, not BSD-3 as first logged): named/numeric encode+decode; ~12k/mo | suggest(score 27, 2/2 seeds, depth 15)
wedding-officiant-cost-calculator | wedding | calc | $1.5-4 | 6-10k/mo; civil vs religious vs professional fee bands | suggest(score 34, 2/2 seeds, depth 20)
dog-harness-size-calculator | pets | calc | $0.5-2 | "dog harness size"/"what size harness for my dog"/"dog collar size" 15-30k/mo aggregate; girth + weight input -> size band x harness-style table (step-in vs overhead vs front-clip) with brand-chart variance note; Chewy-class retail + harness DTC bid; crate-row kinship (retail sizing table), one engine with dog-crate-size | — w19
car-key-replacement-cost-calculator | auto | calc | $4-12 | 15-25k/mo; basic vs transponder vs smart fob x dealer vs locksmith; table-first | suggest(score 39, 2/2 seeds, depth 18)
markdown-toc-generator | dev | oss-wrap | $0.5-2 | Flet/github-slugger (ISC, vendor+pin, dormant) + doctoc (MIT) as behavior ref: GitHub-accurate anchors (emoji/case/duplicates) are the moat; "table of contents generator" ~12k/mo | suggest(score 32, 2/2 seeds, depth 20)
trade-in-vs-private-sale-calculator | auto | calc | $3-10 | "trade in vs sell"/"dealer trade in value" 5-15k/mo; instant-offer discount bands (dealer ~85-92% of private-party) + doc-fee delta + tax-credit states where trade-in reduces sales tax; online car-buyers pay per-lead; funnel from car-depreciation row | — w7c
catering-cost-per-person-calculator | wedding | calc | $3-8 | 10-20k/mo; per-head table by service style = AIO citable; caterer ads | suggest(score 38, 2/2 seeds, depth 20)
cost-of-owning-a-dog-calculator | pets | calc | $3-8 | first-year vs monthly stacker; ~40k/mo; pet-supply DTC ads | suggest(score 38, 2/2 seeds, depth 20)
destination-wedding-cost-calculator | wedding | calc | $3-8 | 12-20k/mo; resort package + guest travel + legal fees; resorts pay premium CPL | suggest(score 38, 2/2 seeds, depth 20)
puppy-price-calculator | pets | table | $1-4 | "how much does a puppy cost" 15-30k + by-breed price longtails ("french bulldog price" 10-20k, "golden retriever price" 8-15k, dozens more) = 50k+/mo aggregate; breed-median acquisition table + adoption-fee mode + first-year toggle cross-linking cost-of-owning-a-dog row (acquisition vs ownership intent); programmatic breed pages on the pregnancy-week-by-week precedent | — w15p
strut-replacement-cost-calculator | auto | calc | $3-8 | "strut replacement cost"/"shocks and struts cost" 15-30k/mo; per-axle parts+labor combos + strut-mount + post-replacement alignment cross-sell to wheel-alignment row; complete-strut-assembly retailers bid | †wave-7
dent-repair-cost-calculator | auto | calc | $2-6 | "dent repair cost"/"how much to fix a dent" 15-25k/mo; paintless-dent-repair per-ding-size table vs body-shop panel respray; body-shop chains + PDR franchises bid; hail-damage stays benched (seasonal insurance-claim page, same shell) | — w7b
cat-life-expectancy-calculator | pets | calc | $2-4 | ~30-50k/mo; indoor vs outdoor table + breed adjusters; reuses dog-life-expectancy engine | suggest(score 34, 2/2 seeds, depth 20)
birthday-party-cost-calculator | events | calc | $1-4 | "birthday party cost"/"kids birthday party cost" 15-25k/mo; venue-type x guest-count for kids vs adult + at-home mode; venues + party-supply ads; party-rental engine kinship; prom/graduation-party rows folded to modes of this + party-food-quantity (audit #3) | — w14
marriage-license-cost-calculator | wedding | calc | $0.5-2 | 50-state fee table + courthouse-wedding mode (15-25k/mo combined); state-table AIO pattern; internally links the cluster | suggest(score 32, 2/2 seeds, depth 20)
money-factor-converter | auto | convert | $2-6 | "money factor to apr"/"money factor to interest rate" 8-15k/mo; x2400 conversion both directions + deal-check mode (quoted MF -> effective APR reveal) — the lease-specific unit converter missing from the lane; second page on the lease-payment engine (reverse-pair precedent) | — w7c
premium-vs-regular-gas-calculator | auto | calc | $1-3 | "premium vs regular gas"/"is premium gas worth it" 15-30k/mo; annual cost delta at your mileage + required-vs-recommended octane explainer (AAA testing is citable); trivial math on the mpg/fuel-cost engine family; volume play | — w7c
bar-mitzvah-cost-calculator | events | calc | $2-6 | "bar mitzvah cost"/"bat mitzvah cost" 5-10k/mo for $10-30k+ events — the quinceanera precedent exactly (kept row, score 33): underserved SERP the big event sites ignore, real venue/caterer/tutor/photographer advertiser base; tutor-years + venue + catering per-head + entertainment + candle Ceremony decor stacker; b'nai mitzvah shared-page handling like the twins-pregnancy precedent if data splits | — w20
graduation-gift-calculator | everyday | calc | $0.8-2 | "how much money to give for graduation gift"/"graduation gift etiquette" 5-15k/mo with May-June spikes; cash-gift norms by relationship (friend $20-50, relative $50-100, grandparent/close $100-300) + HS-vs-college toggle; wedding-gift row's schema sibling (volume + internal links, not CPC); graduation-PARTY stays folded in party-food-quantity per audit #3 — gift and party are different intents, this row only does the gift | — w20

## Score 1-19 (110 slugs)

529-college-savings-calculator | finance | calc | $5-15 | tuition-inflation projection + monthly needed + 30-state deduction table; triple AIO-citable | suggest(score 44, 2/2 seeds, depth 20)
529-qualified-expense-checker | education | tool | $2-8 | "can i use 529 for room and board/computer/..." longtail flood, 10-20k/mo aggregate; rules triage quiz + tables (K-12 $10k, $10k lifetime loan repayment, OBBBA 2026 credential expansion); same structure as the scholarship-taxability winner; advisors bid lightly | — w15e
529-to-roth-rollover-calculator | finance | calc | $6-15 | SECURE 2.0 $35k cap / 15-yr age / annual-limit years-to-complete math; fresh keyword, thin SERP | suggest(score 43, 2/2 seeds, depth 19)
actual-vs-standard-mileage-calculator | finance | calc | $5-12 | IRS standard rate vs actual expenses; 15-25k/mo, Jan-Apr peak; tax-software bids; interlinks live self-employment-tax + quarterly-tax tools | suggest(score 42, 2/2 seeds, depth 20)
baby-shower-cost-calculator | events | calc | $1-3 | 8-15k/mo; host-budget stacker (venue/food/decor/games/favors); registry + party-supply ads; plugs into the live pregnancy cluster (due-date, week-by-week, weight-gain pages) = biggest internal-link firehose available to any events row | — w14
bachelorette-party-cost-calculator | events | calc | $1.5-4 | $1,300/person avg (Knot) and trending; per-person split with tip-splitter mechanics; low comp | suggest(score 34, 2/2 seeds, depth 20)
backyard-wedding-cost-calculator | wedding | calc | $2-5 | "backyard wedding cost"/"wedding at home cost" 5-10k/mo rising with budget-wedding content; the REVEAL is the hook: venue-fee savings vs added rental stack (tent $500-2,000, tables/chairs $5-8/head, luxury restroom trailer $1,000-3,000, generator, insurance rider) — backyard often costs MORE at 75+ guests, no other calculator shows it; cross-links wedding-venue + party-rental rows; rental yards bid | — w20
bartender-cost-calculator | events | calc | $2-5 | service-cost row the quantity-math row can't serve: "how much does a bartender cost"/"bartender for party cost"/"mobile bar rental cost" 5-10k/mo; $30-60/hr per bartender (1-per-50-guests rule) + 2-hr minimums + mobile-bar-package $300-800 + tip-jar norms vs catering-staff bar; DISTINCT from wedding-alcohol row (how many bottles vs what staff costs) — cross-link; mobile-bar companies + staffing agencies bid | — w20
bootcamp-roi-calculator | education | calc | $4-12 | "coding bootcamp cost"/"is a coding bootcamp worth it" 10-25k/mo; CIRR published outcomes (pre/post salary, placement) = citable data; tuition + opportunity cost vs salary-delta payback-months; bootcamps pay $100-300 CPL — top CPC in the non-degree lane; rides the mba-roi engine | — w21
bounce-house-rental-cost-calculator | events | calc | $2-6 | "bounce house rental cost"/"bounce house rental prices" 15-30k/mo with its own SERP universe (local-pack heavy, zero calculators); second page on the party-rental engine (cat-food precedent — one engine, own keyword family); day-rate table dry $100-250 / wet combo $200-400 / multi-day + delivery zone + attendant + generator adders + buy-vs-rent break-even for the birthday-every-year family; party-rental yards bid local-service CPCs | — w20
bridal-hair-makeup-cost-calculator | wedding | calc | $2-6 | PROMOTED from bench: trial + day-of + travel-fee x bridal-party count; "wedding hair and makeup cost" 10-20k/mo; local artists/salons fund the SERP; same per-head pattern as the dress/alterations row | — w14
car-audio-installation-cost-calculator | auto | calc | $2-6 | "car stereo installation cost"/"car speaker installation" 15-25k/mo; head-unit/speakers/sub+amp x vehicle-class table + big-box vs independent shop compare; second page on the remote-start 12-volt shell — same install-service advertisers, distinct keyword | — w7c
car-battery-replacement-cost-calculator | auto | calc | $4-10 | 15-25k/mo; flooded vs AGM vs EFB, DIY vs installed, core fee; trivial table | suggest(score 40, 2/2 seeds, depth 20)
car-title-transfer-cost-calculator | auto | calc | $2-6 | "title transfer cost" + 50 state longtails 15-30k/mo; sibling of vehicle-registration-cost row (title vs reg fee; sale vs gift vs inheritance modes); DMV-service advertisers; near-zero tool competition in SERPs | †wave-7
car-wash-membership-calculator | auto | calc | $1-3 | "car wash prices"/"how much is a car wash" 40-60k/mo volume leader; unlimited-plan break-even (washes/month threshold) + per-wash vs monthly TCO — the biggest recurring ownership spend with no row anywhere in the file; chains + local washes bid local-service CPCs; trivial build; membership decision, distinct from the folded detailing fold-in (service pricing) | — w7c
cat-litter-cost-calculator | pets | calc | $2-6 | substrate x price-per-lb + subscription math; 5-10k/mo; subscription litter DTC bids | suggest(score 36, 2/2 seeds, depth 20)
college-cost-calculator | education | calc | $6-18 | in-state vs out-of-state vs private 4-yr table; programmatic-college leads $20-100 CPL; how-much-should-i-borrow mode folded in (audit #2 2026-08-26: first-year-salary cap rule + per-$10k payment table; was a depth-3 row, weakest signal in the file) | suggest(score 47, 2/2 seeds, depth 20)
college-roi-calculator | education | calc | $3-8 | Georgetown CEW net-ROI data public and citable; "is college worth it" 10-20k/mo with weak tool SERPs | suggest(score 38, 2/2 seeds, depth 20)
corporate-event-budget-calculator | events | calc | $4-12 | B2B twin of the wedding-budget head: event-platform SaaS, venues, caterers bid; "corporate event budget"/"company event cost" 8-15k/mo with holiday-party + team-building + offsite modes on one per-attendee x headcount engine; weak tool SERPs (Cvent content everywhere, no calculators) | — w14
cost-of-owning-a-cat-calculator | pets | calc | $3-8 | cat twin; ~15-20k/mo; DTC cat brands fund the SERP | suggest(score 38, 2/2 seeds, depth 20)
dealer-doc-fee-calculator | auto | table | $2-6 | "dealer fees"/"dealer doc fees" 10-25k/mo at purchase-decision stage; 50-state doc-fee table (capped in ~10 states) + out-the-door fee stacker = the state-table AIO pattern that won for car-insurance-estimator | †wave-7
debt-settlement-vs-bankruptcy-calculator | finance | calc | $10-30 | debt relief = top-5 CPC vertical; nothing similar live | suggest(score 20, 1/2 seeds, depth 10)
document-metadata-remover | document | oss-wrap | $2-5 | toddholloway/O365Metadata (MIT, active) strips author/company/history from docx/pptx/xlsx/pdf client-side; "remove metadata from word document" ~10k/mo; job-seeker/legal intent; pairs with image-metadata-remover | suggest(score 27, 2/2 seeds, depth 12)
docx-mail-merge | document | oss-wrap | $2-8 | alonrbar/easy-template-x (MIT raw-verified, 531★, pushed 2026-08-20, "Node or in the browser" per own README): upload user's .docx template → tag detect → CSV/column-map UI → filled docx batch download; loops/conditionals/tables supported by the lib. Resolves w18's benched docxtemplater note (NOASSERTION = why it sat) — this is the clean engine. Volume: "mail merge" tool-intent slice ~15-30k/mo (head 60-100k is Word-help intent, be honest in copy) + "generate documents from template" longtail; legal/office SaaS CPC. Moat: only client-side mail merge (docxtemplater-cloud/Portant are server); future contract-generator wave's engine (nda/offer-letter/lease pages on this shell). Medium effort = tag-map UX, lib does the hard part | — w23
dog-allergy-treatment-cost-calculator | pets | calc | $3-8 | "cytopoint cost" 8-15k + "apoquel cost" 10-20k + "dog allergy test cost" 5-10k = 25-45k/mo cluster of expensive chronic treatments with zero cost tools in the SERP; injection-vs-tablet-vs-immunotherapy multi-year TCO at published per-visit prices; COST-ONLY GUARD: prices + visit frequency only, zero mg/kg math — medication-dosing ban stays intact; pet pharmacies (1-800-PetMeds class) + vet derms bid; if it ranks, dog-insulin is the follow-on chronic-med page | — w19
dog-boarding-cost-calculator | pets | calc | $3-8 | nights x service tier; Rover/Wag ads; ~15k/mo combined | suggest(score 38, 2/2 seeds, depth 20)
dog-daycare-cost-calculator | pets | calc | $2-5 | "dog daycare prices"/"doggy daycare cost" 15-30k/mo; verified ~$40/day national avg ($25-65 range) with package/membership math (e.g. 30-day pack drops $37 to $26.67/day = the calculator's point); per-day vs package vs monthly-pass by metro tier; local daycares + franchises (Camp Bow Wow class) bid; distinct from dog-boarding row (day vs overnight) | — w15p
dog-dental-cleaning-cost-calculator | pets | calc | $5-12 | biggest uncovered vet-procedure keyword 20-30k/mo; anesthesia price-band table; vet financing bids | suggest(score 42, 2/2 seeds, depth 20)
dog-exercise-needs-calculator | pets | calc | $1-3 | "how much exercise does a dog need" 15-25k/mo + per-breed longtails ("how much exercise does a border collie need" x dozens = 30k+ aggregate); breed-group activity table x age x heat/humidity adjuster in minutes + intensity; opens the activity axis nothing in the lane touches (every food row is intake); dog-walking services + gear retail bid; cat mode (2 x 15-min play sessions) as second tab | — w19
dog-food-cost-comparison-calculator | pets | calc | $1.5-5 | brand/price shopping intent DISTINCT from dog-food-calculator portion math: "farmers dog cost"/"fresh dog food cost" + Ollie/Spot-and-Tango longtails = 20-40k/mo; verified $70-800/mo fresh range = 3-5x premium kibble; cost-per-day by dog size across kibble vs wet vs fresh vs raw using kcal-per-cup math; the hottest pet CAC war funds it (DTC fresh brands + kibble incumbents both publish cost content = advertiser-rich SERP) | — w15p
dog-grooming-cost-calculator | pets | calc | $3-8 | 20-30k/mo; size/coat/service price table; local + franchise ads, 6-8 week repeat cycle | suggest(score 38, 2/2 seeds, depth 20)
dog-surgery-cost-calculator | pets | calc | $5-12 | TPLO/patella/foreign-body procedure table by dog size; 15-25k/mo; vet-financing advertisers pay near-insurance CPCs | suggest(score 42, 2/2 seeds, depth 20)
dog-training-cost-calculator | pets | calc | $3-8 | group vs private vs board-and-train chooser; 10-15k/mo | suggest(score 38, 2/2 seeds, depth 20)
dog-walking-cost-calculator | pets | calc | $2-4 | "dog walking prices"/"dog walker rates" 15-25k/mo; per-walk vs 20-pack vs monthly by walk length (20/30/60-min) + Rover/Wag platform-vs-independent compare; platform ads + local walkers bid; third page of the boarding/daycare service-cost shell | — w15p
electric-dog-fence-cost-calculator | pets | calc | $3-8 | DIY wireless vs pro buried-wire per-acre; ~10k/mo; installer lead-gen; distinct intent from live fence-cost-calculator (posts-and-panels), cross-link | suggest(score 38, 2/2 seeds, depth 20)
elopement-cost-calculator | wedding | calc | $2-5 | rising intent since 2020: "how much does it cost to elope"/"elopement packages cost" 8-15k/mo, thin SERPs; package vs pop-up-company vs DIY table; elopement planners/photographers bid; distinct intent from destination-wedding row (intimate-local vs guest-travel) | — w14
euthanasia-cost-calculator | pets | calc | $2-6 | "how much does it cost to put a dog down" 15-25k + cat variants = 25-45k/mo; verified clinic $50-150 vs in-home $200-400+ (Lap of Love/CodaPet class bids) + communal-vs-individual cremation section (pet-cremation row folded here audit #3 2026-08-26: same purchase event, one tone-careful page); the biggest uncovered pets keyword left | — w15p
ev-battery-replacement-cost-calculator | auto | calc | $4-10 | "EV battery replacement cost" 12-25k/mo and rising as 2011-2018 EV packs age out of 8yr/100k warranties; by-model pack-price table + warranty-check mode; same warranty bidders as extended-car-warranty-cost (the #2 score row in this file) | †wave-7
fake-data-generator-trio | dev | @faker-js/faker | $0.3-1 | faker-js (MIT, 15.4k stars) one lazy locale bundle -> 3 pages: fake-name-generator 180k+/mo, random-address-generator 40k+/mo, fake-email-generator 15k+/mo; volume monster | suggest(score 11, 1/2 seeds, depth 10)
federal-vs-private-student-loan-calculator | finance | calc | $10-30 | "federal vs private student loans" 10-25k/mo at the borrowing-decision moment; chooser (rate bands, protections, PSLF/forgiveness eligibility, credit-check reality) + side-by-side payment projection; distinct intent from repayment-plan-comparison (choosing plan type ON federal loans vs choosing loan TYPE) — reuses the private-loan engine; lenders bid both sides of the SERP | — w21
final-grade-calculator | education | calc | $1-3 | 300k+/mo at Dec + May peaks (RogerHub famous); trivial formula; embed magnet; volume monster | suggest(score 33, 2/2 seeds, depth 20)
financial-aid-award-letter-comparison-calculator | education | calc | $4-12 | "comparing financial aid offers" 8-20k/mo spring peak; 2-3 award letters side-by-side -> net price + debt-at-graduation + first-monthly-payment per offer; college lead-gen advertisers ($20-100 CPL per college-cost row); fills the gap between fafsa-sai (formula) and college-cost (projection) | — w15e
flat-tow-setup-cost-calculator | auto | calc | $3-8 | RV "dinghy towing" lane untouched in the file: base plate + tow bar + supplemental braking + lighting = $1.5-4k stack with flat-tow vs tow-dolly vs trailer compare; "flat towing a car"/"tow bar" 8-15k/mo; RV-parts suppliers bid real CPCs; hardware-cost sibling of towing-capacity (which stays the capability-math page) | — w7c
gender-reveal-party-cost-calculator | events | calc | $1-3 | "gender reveal party cost"/"gender reveal ideas" 10-25k/mo, post-2019 established SERP; at-home ($100-500: balloons/cannon/box) vs hosted-event ($1,000-2,500+ venue/food) stacker + count-guests reveal-logistics math; party-supply retail + venue ads; baby-shower row's sibling — cross-links the live pregnancy cluster (due-date, week-by-week) same as baby-shower does | — w20
grade-curve-calculator | education | calc | $1-3 | mean+SD linear and square-root curves; 10-15k/mo; blog-heavy SERP, zero quality tools; embed magnet for teacher blogs | suggest(score 32, 2/2 seeds, depth 19)
honeymoon-budget-calculator | wedding | calc | $3-8 | destination math; travel + registry advertisers; ~10k/mo | suggest(score 38, 2/2 seeds, depth 20)
honeymoon-registry-fee-calculator | wedding | calc | $1-3 | product-fee comparison the trip-budget row doesn't touch: "honeymoon registry"/"honeyfund fees"/"zola cash fund fee" 8-15k/mo; registry-platform fee table (Honeyfund tip/free-ish vs Zola ~2.4% cash funds vs Traveler's-Joy ~7.5% service fee on gifts) → net-received-on-$5k-fund reveal = the title-loan-APR trap-math pattern at wedding scale; registries themselves advertise + affiliate upside; REFRESH GUARD: verify current fee schedules at build, they change yearly | — w20
horse-board-cost-calculator | pets | calc | $1.5-4 | "horse boarding cost"/"how much does it cost to board a horse" 15-30k/mo — the single biggest line item in horse ownership, with its own keyword the horse-cost-of-ownership stacker only prices as one input; full vs partial vs self-care vs pasture board x metro-tier monthly table + annual TCO + stall-vs-paddock adders; third equine row deepening the lane (cost, insurance, board); stables + feed/tack retail bid local-service CPCs | — w19
horse-cost-of-ownership-calculator | pets | calc | $1-4 | "how much does a horse cost" 15-25k + "cost of owning a horse"/"how much does a horse cost per month" cluster 25-50k/mo; boarding x feed x farrier (every 6-8 wks) x vet x tack x lesson stacker — every input is a published regional average, zero tool competition in SERPs; pairs with horse-insurance row to open equine | — w15p
horse-insurance-cost-calculator | insurance | calc | $4-12 | equine mortality + major-medical premium table by horse value x use (pleasure/trail/show) + deductible/reimbursement sliders; equine insurers bid real CPCs at boat/RV levels; direct sibling of LIVE boat-insurance, rv-insurance, motorcycle-insurance rows — the pattern is proven 3x live; 3-8k/mo volume but CPC carries it (audit #3 CPC-first keep); opens the equine lane | — w15p
horse-trailer-cost-calculator | pets | calc | $1.5-4 | "horse trailer cost"/"horse trailer prices" 10-20k/mo big-ticket purchase lane ($5k used bumper-pull to $50k+ living-quarters gooseneck); stock vs stock-and-combo vs 2/3-horse vs LQ price bands + new-vs-used depreciation + monthly-payment tab on the LIVE loan-calculator engine; trailer dealers + trailer lenders bid (RV-lane CPCs); fourth equine row | — w19
hybrid-vs-gas-payback-calculator | auto | calc | $3-10 | "is a hybrid worth it"/"hybrid vs gas" 10-25k/mo; purchase premium / annual fuel-savings = break-even years — distinct math from ev-charging-cost (per-mile energy) and new-vs-used (car class), cross-link all three; OEM ads fund it | — w7c
ignition-interlock-cost-calculator | legal | calc | $8-25 | interlock providers (Intoxalock/Draeger/LifeSafer class) are per-phone-lead machines among the priciest auto-legal bidders; "ignition interlock cost" 8-15k/mo + state longtails; install $70-150 + $60-100/mo lease + calibration x state duration tiers (6-24 mo) = trivial stacker; completes a DUI cluster with sr22 + rate-increase rows | — w7c
ivf-cost-calculator | health | calc | $6-15 | clinics + fertility financing bid; medication cycle stacker | suggest(score 39, 2/2 seeds, depth 16)
lasik-cost-calculator | health | calc | $6-14 | local surgical LTV; by-provider-type price bands | suggest(score 44, 2/2 seeds, depth 20)
lift-kit-cost-calculator | auto | calc | $3-8 | "lift kit cost"/"how much is a lift kit" 15-25k/mo; leveling vs 2/4/6-in suspension lift x parts + labor table by truck class; off-road retailers (rough-country class) + 4x4 shops bid; truck-accessory lane completely absent from the file | — w7b
llc-vs-scorp-calculator | finance | calc | $8-20 | tax-structure chooser, formation services bid; distinct from live incorporation-cost-calculator (fees vs structure) | suggest(score 47, 2/2 seeds, depth 18)
marriage-green-card-cost-calculator | legal | calc | $10-35 | immigration clicks are top-tier legal CPC (Boundless-class platforms + immigration attorneys bid relentlessly); "marriage green card cost"/"how much does it cost to get a green card through marriage" 10-20k/mo; verified 2026 fee anchors — I-130 $675 ($625 online) + I-485 $1,440 = ~$2,065-2,115 USCIS-only, +I-765 $260 + I-131 ~$630 ≈ $3,005 full package, attorney flat $2,000-5,000, all-in $3,500-8,000+; adjustment-of-status vs consular-processing (DS-260) toggle + DIY-vs-attorney compare + hidden-cost section (medical exam, translations); K-1 fiancé-visa mode on same page; FEE-TABLE REFRESH GUARD at build time (USCIS schedule changes); internal-links marriage-license + name-change cluster; lane-stretch row kept for CPC — citizenship/N-400 siblings belong to a future immigration wave, don't row them here | — w20
marriage-name-change-cost-calculator | wedding | calc | $2-6 | PROMOTED from bench, re-typed checklist->cost tool: SS card + license + DL + passport + vehicle-title fee stacker by state + DIY-free vs online-kit ($50-100) compare; "name change after marriage" 20-40k/mo; name-change services + passport expediters bid | — w14
mermaid-diagram-suite | dev | mermaid | $1-3 | mermaid (MIT) behind 3-4 pages: sequence-diagram-maker 25k/mo, er-diagram-maker 15k/mo, class-diagram-maker 10k/mo; FLAG: upgrades live flowchart-maker + gantt-chart-maker with a "mermaid syntax" mode, do not duplicate them | suggest(score 33, 2/2 seeds, depth 20)
minifier-trio | dev | terser+csso+html-minifier | $1-3 | one shell, 3 pages: minify js 18k, css minifier 25k, minify html 8k/mo; terser BSD-2 + csso MIT + html-minifier MIT | suggest(score 33, 2/2 seeds, depth 20)
new-tires-cost-calculator | auto | calc | $4-12 | 30-40k/mo; per-set price by size class and type + install add-ons; tire retailers bid hard; cost sibling of tire-size geometry tool | suggest(score 41, 2/2 seeds, depth 20)
non-owner-car-insurance-cost-calculator | insurance | calc | $10-30 | state-average table for non-owner policies; 8-12k/mo; head-term CPC without the head-term SERP war; distinct from sr22 row; state-table pattern proved | suggest(score 58, 2/2 seeds, depth 20)
nursing-school-cost-calculator | education | calc | $4-12 | biggest degree-cost keyword not in the file: "nursing school cost" 20-40k + "how much is nursing school" 10-20k + absn/how-long variants = 40-70k/mo; ADN vs BSN vs ABSN vs direct-entry MSN (length x cost x starting-salary table) = triple AIO-citable; nursing programs are top programmatic-CPL spenders + NCLEX-prep advertisers; program modes ride one shell (pregnancy-week precedent) | — w21
online-vet-cost-comparison | pets | calc | $2-6 | "online vet"/"ask a vet online"/"virtual vet" 25-50k/mo and rising post-2023 telehealth normalization; Dutch/Pawp/Vetster-class subscription TCO vs office-visit + emergency break-even chooser; cost-comparison copy only (no triage or diagnosis advice) keeps it clear of the YMYL dosing ban; distinct from vet-visit-cost (in-person) | — w15p
party-rental-cost-calculator | events | calc | $3-8 | tent size table + per-item rental stacker; 10-20k/mo; rental yards bid, near-zero tool competition | suggest(score 38, 2/2 seeds, depth 20)
pdf-certificate-maker | document | oss-wrap | $1-3 | pdfme (MIT) Designer component; "certificate maker" ~20k/mo; course-platform ads | suggest(score 11, 1/2 seeds, depth 10)
pdf-password-tools | pdf | oss-wrap | $1-3 | pdfstudio lock() + unlock() on ONE shell, TWO pages: "password protect pdf" ~90k/mo + "remove password from pdf" ~150k/mo; "never uploaded" privacy angle vs upload-based SERP leaders (protect-pdf + pdf-password-remover merged into one row audit #2 2026-08-26: same lib, inverse verbs) | suggest(scores 35 + 33, the two merged rows, both 2/2 seeds depth 20)
photo-booth-rental-cost-calculator | events | calc | $2-6 | 10-20k/mo across weddings/proms/corporate; booth operators bid aggressively | suggest(score 36, 2/2 seeds, depth 20)
prenup-cost-calculator | legal | calc | $8-25 | "how much does a prenup cost"/"prenup cost" 10-20k/mo and rising with millennial/post-OBBBA financial-transparency content wave; family-law attorneys ($150-500/hr, flat $1,000-3,000 typical) + online prenup platforms (HelloPrenup $590-class flat) both bid — attorney-vs-online-vs-DIY compare is the vet-bill-financing trap-math pattern; what-it-covers line-item stack + state-enforceability note (caveat copy, no legal advice per legal-lane house rule); postnup = second tab on same page; engagement-ring + marriage-license rows funnel in | — w20
psat-national-merit-index-calculator | education | calc | $2-8 | Selection Index formula + 50-state semifinalist cutoff table; "psat to sat"/"national merit cutoff" 10-30k/mo Oct-Feb spikes; Compass owns the content, tools are thin; second page on the sat-score engine | — w15e
puppy-vaccination-schedule-calculator | pets | calc | $4-10 | birthdate -> DHPP/rabies timeline; 25-30k/mo; vet-clinic bids, recurring new-puppy intent | suggest(score 40, 2/2 seeds, depth 20)
quinceanera-cost-calculator | events | calc | $1-3 | 5-10k/mo for $5k-20k events; underserved SERP with a real advertiser base; Latino-events niche the big sites ignore | suggest(score 33, 2/2 seeds, depth 20)
remote-start-installation-cost-calculator | auto | calc | $2-5 | "remote start installation cost"/"how much to install remote start" 10-15k/mo with winter spikes; 1-way vs 2-way vs smartphone-module x vehicle-make table (bypass-module surcharge is the hidden-cost hook); 12-volt shops + big-box install services bid | — w7b
scholarship-taxability-calculator | education | calc | $3-6 | qualified-expense vs room-and-board split; <1k/mo but that is the AIO longtail zone (82% of AIOs cite <1k/mo keywords); cheap build | suggest(score 36, 2/2 seeds, depth 20)
service-dog-cost-calculator | pets | calc | $2-5 | "how much does a service dog cost" 10-20k/mo; program-trained ($15-30k+) vs nonprofit-subsidized vs owner-trained cost + 1-2 yr timeline compare with public-access test and handler-training line items; trainer orgs + nonprofits bid; cost info only, no certification/legal claims — avoids the ESA-letter scam lane entirely | — w15p
small-pet-cost-calculator | pets | table | $1-2.5 | "how much do rabbits cost" + guinea pig + hamster + bearded dragon + chinchilla + gerbil longtails = 30-60k/mo aggregate; per-species first-year + monthly stack programmatic pages (same play as pregnancy-week-by-week); PetSmart/Petco/Chewy-class retail ads; near-zero build, zero tool competition | — w15p
spay-neuter-cost-calculator | pets | calc | $4-10 | by species/weight/region clinic price bands; 20-25k/mo | suggest(score 40, 2/2 seeds, depth 20)
state-vehicle-inspection-cost-calculator | auto | table | $2-6 | "how much is a car inspection" + NY/PA/TX/VA/MO state-inspection longtails 20-40k/mo; state table (fee band, safety vs emissions, frequency) = the 50-state AIO pattern that won for vehicle-registration-cost; inspection stations + DMV-services bid; smog-check stays benched as the CA page on this shell | — w7b
student-loan-401k-match-calculator | finance | calc | $3-10 | SECURE 2.0 §110 loan-payment match: 2025 first plan year, IRS final regs Oct 2025, employer rollout + benefits-press wave through 2026; 2-8k/mo rising, near-zero tool SERP; payment -> match $ -> 10-yr compounding; pairs with (distinct from) the 401k-match row; benefits brokers + recordkeepers bid | — w15e
student-loan-marriage-calculator | finance | calc | $5-15 | "student loans and marriage"/"student loan marriage penalty" 8-15k/mo; post-OBBBA first-mover: RAP payment is AGI-driven, so MFJ vs MFS = payment delta PLUS tax delta netted in ONE tool — math no generic calc does; distinct from marriage-tax-penalty row (tax-only) and repayment rows (single-filer); loan-lawyer + refi CPC | — w21
student-loan-payoff-vs-invest-calculator | finance | calc | $5-15 | "pay off student loans or invest" 8-15k/mo evergreen; guaranteed-rate NPV vs market-return compare with federal-protections toggle; refi lenders AND brokerages bid on the same SERP; distinct intent from payoff (amortization) and refinance (rate math) rows | — w15e
student-loan-repayment-plan-comparison-calculator | finance | calc | $8-25 | education-lane anchor: standard vs graduated vs extended vs IBR/PAYE/ICR, 20/25-yr forgiveness projection; "student loan calculator" 100k+/mo; OBBBA flag (w15e): pre-2026 row — REPLACE closed-plan columns with RAP (1-10% AGI) + Tiered Standard at build time | suggest(score 53, 2/2 seeds, depth 20)
subsidized-vs-unsubsidized-student-loan-calculator | finance | calc | $5-15 | "subsidized vs unsubsidized" 15-30k/mo cluster; in-school + grace-period accrual delta with capitalized-interest-at-graduation reveal = unique math no generic loan calc does; lenders bid; feeds payoff/repayment anchors | — w15e
teacher-loan-forgiveness-calculator | finance | calc | $5-15 | $5k vs $17.5k eligibility + 5-consecutive-year rule + vs-PSLF track; 6-12k/mo | suggest(score 32, 2/2 seeds, depth 11)
teacher-salary-by-state-calculator | education | table | $2-6 | static NEA/BLS state x step-schedule data = near-zero build, the state-table AIO pattern; 15-25k/mo; distinct from live salary-by-state (general salary math vs teacher step schedules) | suggest(score 36, 2/2 seeds, depth 20)
teen-driver-car-insurance-cost-calculator | insurance | calc | $10-30 | adding a 16-yr-old raises the parent premium ~130-158% (published: ValuePenguin 158%, Forbes ~$2,735/yr added, ~$10.4k/yr standalone) — every figure AIO-citable; "how much does car insurance go up for a teenager"/"car insurance for 16 year old" 20-50k/mo cluster; state x age x gender x on-parent-policy-vs-own table; insurers bid the highest CPCs in the insurance lane; distinct intent from live car-insurance-estimator (generic state average vs add-a-teen delta) and from car-insurance-rate-increase row (post-incident vs new-driver) | — w7b
test-grade-calculator | education | calc | $1-2 | "what grade is 21 out of 30" longtail flood 50k+/mo aggregate + teacher quick-grade mode; embed king; distinct from final-grade (points-to-% vs what-you-need) | suggest(score 32, 2/2 seeds, depth 20)
therapy-dog-cost-calculator | pets | calc | $2-5 | "therapy dog cost"/"therapy dog certification cost" 8-15k/mo; evaluation + registration + insurance + handling-course stacker (~$100-500 all-in) — a $300 reality, NOT the $15-30k program-dog price in the service-dog-cost row (different animal, different buyer, different SERP); second page on the service-dog engine (cat-food precedent); therapy-dog orgs + trainers bid; certification-cost info only, no legal-claims copy | — w19
tire-dot-age-decoder | auto | tool | $2-6 | "tire dot code"/"how old are my tires"/"tire expiration date" 10-25k/mo; decode DOT week/year -> tire age + 6-10yr replacement guidance table; safety-factual content tire retailers and manufacturers fund; trivial build, thin tool SERP; third page on the tire lane with tire-size + load-chart | — w7c
trade-school-cost-calculator | education | calc | $3-10 | college-alternative lane nobody tools: "trade school cost" 15-30k + "cdl school cost" 15-25k + "cosmetology school cost" 20-30k + welding/HVAC = 60-100k/mo aggregate; program x length x cost table + earn-while-learning offset vs 4-yr path = AIO magnet; trade schools pay real lead-gen CPCs (same advertisers as vet-tech-salary row — cross-link); program modes one shell | — w21
trade-show-booth-cost-calculator | events | calc | $5-15 | highest-CPC lane in the wave: exhibit houses + custom-booth builders pay $5-15/click B2B (leads $50-200); "trade show booth cost" 5-10k/mo + 10x10/20x20 longtails over blog-only SERPs, zero calculators; pop-up vs rental vs custom x size table + shipping/I&D-labor stacker, pure client-side | — w14
tutoring-rates-calculator | education | calc | $3-10 | "tutoring rates"/"how much to charge for tutoring"/"tutor prices" 15-25k/mo; subject x level x region x in-person-vs-online rate table + per-hour-vs-package builder; Wyzant/Preply/Varsity bid top tutoring CPCs; BOTH-sides intent (parents pricing + tutors setting rates) doubles the audience; teacher-salary row kinship (table pattern) | — w21
vehicle-section-179-calculator | finance | calc | $6-20 | business-vehicle first-year expensing: ~$30-32k SUV cap vs >6,000-lb-GVWR full expensing is AIO-citable and widely botched by generic tax pages; "section 179" 15-30k/mo + "write off my truck for business" longtails; CPAs + tax software bid; distinct from actual-vs-standard-mileage (expense method vs depreciation election) | — w7c
vet-bill-financing-calculator | finance | calc | $5-15 | CareCredit deferred-interest trap math (0% promo, ~27% retroactive APR); 3-6k/mo; consumer-finance CPC; cross-sells vet dental + surgery pages | suggest(score 36, 2/2 seeds, depth 14)
vet-tech-salary-by-state-calculator | education | table | $2-8 | "vet tech salary" 40-60k + "veterinarian salary" 30-50k + "veterinary assistant salary" 15-25k = 90-140k/mo aggregate, the biggest keyword cluster in the whole vet lane with zero rows anywhere in the file; BLS OES 50-state median/hourly table = the teacher-salary-by-state pattern, near-zero build; vet-tech programs are aggressive trade-school lead-gen (Penn Foster class) paying $2-8/click; dog-groomer + kennel-tech salaries = extra pages on the same BLS engine | — w19
veterinary-imaging-cost-calculator | pets | calc | $3-8 | "dog mri cost" 6-12k/mo + "dog xray cost" 15-25k + "dog ultrasound cost" + CT/cat variants = 30-50k/mo cluster; modality x pet-size x clinic-type price table (verified: x-ray ~$150-500, MRI $2,000-6,000 avg ~$2,285-5,000 all-in at referral hospitals) is prime AIO-cite material; referral hospitals + insurers bid; per-head-procedure precedent: dog-dental + dog-surgery coexist with vet-visit row | — w15p
wedding-bands-cost-calculator | wedding | calc | $2-8 | "how much do wedding bands cost"/"mens wedding band cost"/"womens wedding band cost" 10-20k/mo — a distinct purchase event from the engagement ring (ceremony pair vs proposal ring, different keywords AND different products), sibling-not-dupe of the engagement-ring-budget row; metal-tier price table is the build: tungsten/silicone $50-200, gold $500-2,000, platinum $1,500-3,000+ per band x hers/his/his-his/hers-hers; jewelers (Blue Nile/James Allen class) bid hard — the richest consumer CPC left in the pure-wedding lane; engraving + resizing adders | — w20
wedding-cost-per-guest-calculator | wedding | calc | $2-4 | $150-300/guest breakdown table feeding the budget hub; same schema as by-state cost winners | suggest(score 30, 2/2 seeds, depth 16)
wedding-decor-lighting-cost-calculator | wedding | calc | $1.5-5 | "wedding decorations cost" 10-20k/mo + lighting/draping longtails; uplighting per-fixture + ceiling drape + linen table; event-rental advertisers; distinct from florist row (flowers vs fixtures/rentals), cross-link both | — w14
wedding-dress-cost-calculator | wedding | calc | $1.5-4 | 20-35k/mo; dress + alterations (10-20% adder) + preservation; online bridal retailers bid | suggest(score 34, 2/2 seeds, depth 20)
wedding-florist-cost-calculator | wedding | calc | $1.5-5 | per-piece pricing x table count; 10-18k/mo; high florist margins fund the ads | suggest(score 35, 2/2 seeds, depth 20)
wedding-guest-cost-calculator | wedding | calc | $2-6 | the attendee-perspective page the host-side rows can't serve: "how much does it cost to be a wedding guest"/"average cost to attend a wedding" 8-15k/mo content cluster with fresh annual survey data to cite (guest spend ~$600 avg per wedding, higher when traveling); travel + lodging + attire + gift + shower-gift stacker with local-vs-destination toggle; DISTINCT from wedding-cost-per-guest (host math) and wedding-gift (gift line only — that row stays the deep-dive, this one links to it); travel-booking + formalwear-rental advertisers fund it; plugs the suit-tux rental row's prom/guest modes | — w20
wedding-insurance-cost-calculator | insurance | calc | $5-12 | extends insurance category pattern; $75-500 premium table by coverage; 3-6k/mo | suggest(score 41, 2/2 seeds, depth 19)
wedding-invitation-cost-calculator | wedding | calc | $1-3 | 8-15k/mo; piece price + postage math; stationery printers bid | suggest(score 33, 2/2 seeds, depth 20)
wedding-suit-tux-rental-cost-calculator | wedding | calc | $2-5 | groom-side gap: dress row exists, formalwear doesn't; rent vs buy break-even x events-worn; "tuxedo rental cost" 15-25k/mo (prom rides the same page — prom-cost row folded here audit #3 2026-08-26) + "wedding suit cost" 8-12k; formalwear chains bid | — w14
wedding-transportation-cost-calculator | wedding | calc | $4-10 | highest-CPC local-service lane (limo/party-bus clicks $5-15); 10-20k/mo cluster | suggest(score 35, 2/2 seeds, depth 16)
wedding-vendor-pricing-calculator | events | calc | $3-10 | vendor-SIDE B2B twin of the cost rows: "photography pricing calculator"/"wedding photography pricing"/"dj pricing calculator" 8-15k/mo aggregate from vendors asking what to CHARGE (distinct audience + keyword from wedding-photographer-cost row, what couples pay — cross-link both); formula = cost-of-business + target income ÷ weddings/yr → minimum sustainable package price, the math freelancers famously botch; HoneyBook-class vendor SaaS bids $5-15 on photographer/DJ business keywords — B2B CPC beats consumer wedding clicks ~3x; also covers planner/coordinator pricing tabs | — w20
wedding-videographer-cost-calculator | wedding | calc | $1.5-4 | 6-12k/mo; tiers + photographer-bundle discount mode | suggest(score 34, 2/2 seeds, depth 20)
weighted-grade-calculator | education | calc | $1-3 | "weighted grade calculator" 15-30k/mo, Dec/May spikes; category-weight current-grade math (homework 20% + midterms 30% + final 50%) — distinct formula AND keyword from final-grade (needed-score), test-grade (points->%), and weighted-GPA (course credits); trivial build | — w15e

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
