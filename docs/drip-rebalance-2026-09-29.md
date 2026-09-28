# Drip Rebalance Directive (2026-09-29) — based on GA4 real-user data

## Why
GA4 28-day data (property "ToolAspect.com", 518947030) shows which pages actual
humans engage with. Direct-channel traffic is 90% bots (2s engagement) — ignore PV
waves. Real engagement concentrates in:

1. **PDF/document tools** — Crop PDF (27s), PDF Certificate Maker (10m 06s!), DOCX Viewer, HTML→Word, Repair Corrupt PDF, Document Metadata Remover
2. **Privacy/security tools** — PimEyes Alternatives guide (17 views = #2 page), Certificate Decoder, Image Metadata Remover, AI Image Detector
3. **Niche calculators** — Social Security Calculator (#3), Dealer Doc Fee, Equipment Depreciation (MACRS), Totaled Car Value, Dog/pet calculators
4. **Dev tools** — SVG Editor, Regex Tester, JavaScript Obfuscator, Subnet Calculator, IBAN Validator

Crypto/fiat converter pages have GSC impressions but near-zero human engagement —
de-prioritize.

## New weighting for content-drip-queue.md
- 50% depth passes + guides for PDF/document cluster pages
- 25% privacy/security cluster (comparative "alternatives" guides especially — the
  PimEyes one is our #2 page; replicate that pattern: 'X Alternatives — Compared')
- 25% niche calculators (finance/tax/pet/automotive with tables + FAQs)
- NEW guide pattern to add: "best free [category] tools 2026" listicles interlinking
  our own tool pages (AI assistants cite listicles heavily — our #1 real channel)

## Guardrails
- BUILD FREEZE on new tools still applies — this rebalances guides/depth only
- Keep all existing deploy gates (syntax-gate.py after any wave)
