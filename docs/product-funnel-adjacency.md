# ToolAspect → Product Funnel Adjacency Research (2026-08-26)

All volumes/CPCs are **ESTIMATES** unless a backlog row cites them. Fit score = signup-relevance (1–10) × traffic attainability (1–10), /10.

## 1. Product-funnel matrix

### Emuu (voice AI ops — B2B)
| Tool idea | Backlog status | Fit | Est. volume | Est. CPC | CTA angle |
|---|---|---|---|---|---|
| AI-receptionist-cost-calculator (AI vs human vs answering svc) | **NOT in backlog** | 8.5 | 2–8k/mo (est) | $8–25 (voice-AI/B2B SaaS bidders; competitors: techpotions, everydaysoftware.ai both rank = SERP winnable) | "You'd save $X/mo — deploy it live: Emuu" |
| Voice-agent-cost-calculator (STT+LLM+TTS stack TCO) | NOT in backlog | 7.5 | 1–5k/mo (est) | $5–15 | "Skip the glue code — Emuu runs the whole stack" |
| AI-recruiting-screening-ROI-calculator (time-to-hire, screener hours saved) | NOT in backlog | 9 | 1–4k/mo (est) | $10–30 (recruiting-tech CPCs are top-tier) | "Automate the screening you just calculated — Emuu" |
| Call-center-staffing-vs-AI calculator | NOT in backlog | 7 | 1–3k/mo (est) | $10–25 | Same as receptionist |
| voicemail/transcription related: `voice-recorder` already flagged in backlog notes | backlog pass-mention | 5 | high | $1 | weak funnel — audio utilities ≠ B2B voice AI |

### PropoDoc (AI proposals — B2B)
| Tool idea | Backlog status | Fit | Est. volume | Est. CPC | CTA angle |
|---|---|---|---|---|---|
| **invoice-generator — LIVE on ToolAspect today** | live | 8 | 30–60k/mo (est) | $2–8 | "Turn invoices into winning proposals — PropoDoc" |
| Quote/estimate-builder (turn into PDF quote) | NOT in backlog | 8 | 10–25k/mo (est, "quote template" cluster larger) | $3–10 | direct PropoDoc CTA |
| Freelancer-rate/pricing calculator (charge-what-to) | partial: `wedding-vendor-pricing-calculator` (weddings only) | 7 | 10–30k/mo (est) | $3–10 | "Price it → then proposal it in PropoDoc" |
| Proposal-vs-ROI / hourly-value calculator | NOT in backlog | 6 | low | $2–5 | soft CTA |
| RFP/SCOPE checklist → outline generator | NOT in backlog | 9 relevance, low volume | <2k/mo (est) | $5–15 | perfect topical CTA, build cheap |

### Veyzi (creator platform — B2C)
| Tool idea | Backlog status | Fit | Est. volume | Est. CPC | CTA angle |
|---|---|---|---|---|---|
| youtube-sponsorship-calculator | **NOT in backlog** (biggest gap) | 9 | 10–30k/mo (est; competitors sponsorship.so, collabpals) | $2–6 | "Get sponsored deals + chat with fans — Veyzi" |
| TikTok-earnings/engagement tools | partial: `tiktok-money-calculator` LIVE | 8 | 20–50k/mo cluster (est) | $1–4 | Veyzi bio-link CTA |
| link-in-bio / bio-link generator | NOT in backlog | 9 | 20–40k/mo (est, "link in bio" huge, branded SERP) | $1–3 | literally Veyzi's core product — free tier CTA |
| instagram-engagement-calculator | LIVE `engagement-rate-calculator`, `influencer-calculator`, `follower-growth-calculator` | 8 | 15–40k/mo cluster (est) | $1–4 | Veyzi CTA |
| brand-deal-reminder/media-kit builder | NOT in backlog | 8 | 5–15k/mo (est) | $2–5 | Veyzi signup to build media kit |

### Objexi (object intelligence / QR — TOP priority, $799/$1,499 B2B)
| Tool idea | Backlog status | Fit | Est. volume | Est. CPC | CTA angle |
|---|---|---|---|---|---|
| **qr-code-generator — LIVE** | live | 9 | 100k+/mo (backlog cites "scan qr code" 100k+; generator similar) | $0.5–3 | "Static QR is free. An AI layer ON your objects: Objexi" |
| qr-code-scanner | backlog row #138 (mebjas/html5-qrcode) | 8 | 100k+/mo (backlog figure) | $0.5–1.5 | scanner → "what if the object answered back? Objexi" |
| qr-code-with-logo | backlog row #188 | 8 | ~32k/mo combined (backlog figures) | $1–3 | branded-QR → Objexi demo |
| dynamic-QR-cost-comparison (QRBC/Bitly/Flowcode vs per-site) | NOT in backlog | 9 | 3–10k/mo (est) | $2–8 (dynamic-QR SaaS bids confirmed by search) | "Compare → Objexi per-site $799 beats per-scan" |
| equipment-label/asset-tag ROI calculator (QR-tagged inventory) | NOT in backlog | 8 | 2–8k/mo (est, "qr asset tracking" cluster) | $4–12 (industrial software CPC) | industrial Objexi lane |

## 2. Backlog adjacency rows found (grep)
- **Objexi-adjacent:** `qr-code-scanner` (L138, html5-qrcode), `qr-code-with-logo` (L188, qr-code-styling), `barcode-generator` (L137, etiket — styled-QR upgrade path). Live: `qr-code-generator`.
- **PropoDoc-adjacent:** `invoice-generator` LIVE; backlog mentions invoices only inside html-to-pdf copy; `wedding-vendor-pricing-calculator` (L393) is the only what-to-charge tool. AVOID list blocks `easy-invoice-pdf` (GPL) and `qrbtf`.
- **Veyzi-adjacent backlog:** nothing creator-monetization-specific (no sponsorship/media-kit/link-in-bio rows). Live pages carry the load (see §4).
- **Emuu-adjacent:** zero voice/call/screening rows except `phone-number-validator` (L194) and audio utilities (voice-recorder note L567). Wide open.

## 3. Top 10 builds ranked by (traffic value × signup relevance)
1. **qr-code-scanner** (backlog row, 100k+/mo) → Objexi — highest volume × direct product adjacency; build now.
2. **link-in-bio generator** → Veyzi — core-product mirror, 20–40k/mo est.
3. **qr-code-with-logo** (backlog row) → Objexi — 32k/mo, feeds branded-QR upsell.
4. **youtube-sponsorship-calculator** → Veyzi — 10–30k/mo est, winnable SERP (thin competitors).
5. **AI-receptionist-cost-calculator** → Emuu — small volume but near-perfect intent match; competitor pages exist and rank, proving demand.
6. **invoice-generator CTA module** (already live, zero build) → PropoDoc — traffic already flowing, only needs the branded module.
7. **quote-estimate-builder** → PropoDoc — 10–25k/mo est, same engine family as invoice-generator.
8. **AI-recruiting-screening-ROI-calculator** → Emuu — high CPC recruiting-tech intent.
9. **dynamic-QR-cost-comparison** → Objexi — commercial-investigation keyword, direct $799 positioning.
10. **media-kit builder for creators** → Veyzi — 5–15k/mo est, strong signup conversion (tool output = the artifact).

## 4. Live ToolAspect pages already adjacent + CTA plan
Verified live dirs + `ad-slot` div present (checked: invoice-generator, qr-code-generator, youtube-earnings-calculator — all contain `ad-slot`):

- **Veyzi:** youtube-earnings-calculator, tiktok-money-calculator, twitch-bit-calculator, twitch-revenue-calculator, spotify-royalty-calculator, podcast-earnings-calculator, creator-earnings-calculator, engagement-rate-calculator, follower-growth-calculator, influencer-calculator, hashtag-generator, video-aspect-ratio-calculator, youtube-thumbnail-size, youtube-watch-time-calculator, /creator-tools hub.
- **Objexi:** qr-code-generator (+ sitemap-wide; scanner/logo pending builds).
- **PropoDoc:** invoice-generator, cover-letter-generator, resume-builder, form-builder, markup-calculator, /business-tools hub.
- **Emuu:** none today.

**Placement plan:** one shared JS include (e.g. `shared/funnel-cta.js`) injected site-wide that reads a page→product mapping (or category prefix map) and renders a branded module into `.ad-slot` — no per-page edits. Keep the ad slot's dashed-border aesthetic replaced by branded card (product logo, one-line value prop, primary CTA button with UTM `?utm_source=toolaspect&utm_campaign=funnel`). Priority rollout: qr-code-generator→Objexi first (founder's top product), creator cluster→Veyzi second (15+ pages), invoice/business→PropoDoc third, Emuu once its calculator pages exist. Optionally keep an ad fallback for unmapped pages.

---

# Extension Pass 2 (2026-08-27): authAspect + portfolio sweep

All volumes/CPCs **ESTIMATES** unless a backlog row cites them.

## 5. Portfolio sweep results (~/projects/ README survey)

| Candidate | Verdict | Why |
|---|---|---|
| **authAspect** | ✅ INCLUDED | Live product: image copyright protection for creators — C2PA provenance, watermarking, DMCA detection/takedown; Chrome ext + web platform; seed market OnlyFans creators already paying $50–200/mo for DMCA. Real signup funnel. |
| recruitervibe-site | ⏭ excluded (for now) | Real funnel design (Vibe Score → claim profile) but wrangler bindings are placeholder TODOs — not live yet. Revisit at launch. |
| scanaspect | ⏭ excluded | No README; auth-troubleshooting internal tooling, not a customer product. |
| vidaspect-research / -extension | ⏭ excluded | Research Next.js scaffold + Chrome extension companion; no independent web signup funnel beyond vidaspect.com itself (VidAspect is analysis SaaS, tool-adjacency weak). |
| hyperaspect | ⏭ excluded | HyperFrames video-gen platform — different research pass; OSS/framework posture, no simple calculator funnel. Flag for a future pass. |
| ai-workspace-audit, afterword, agentpulse | ⏭ excluded | POL scaffolds / stub READMEs — not live products. |
| mvphq | ⏭ excluded | Live lead-capture tool sites (prorated-rent, nurse-diff, hvac-load, lease-addendum) but funnel = lead forms on their own sites, not a ToolAspect-signup product. Own ecosystem already. |
| healthaspect-engine, liveaspect, paperclip | ⏭ excluded | Shared engines / infra / third-party OSS — not customer-facing funnels. |

## 6. authAspect funnel matrix (creator anti-theft ICP)

The ICP insight: **crectors worried about content theft are the exact audience of the entire Veyzi creator-earnings cluster AND the image-tools cluster.** Someone calculating "how much does TikTok pay" or watermarking a photo is one step from "my content got stolen." authAspect CTAs can ride 15+ already-live pages plus 3 backlog rows that were previously unassigned to any product.

| Tool idea | Backlog status | Fit | Est. volume | Est. CPC | CTA angle |
|---|---|---|---|---|---|
| **image-watermark** (L175, watermark-js-plus MIT) | **backlog row, unassigned** — now authAspect | 9.5 | 15–25k/mo (backlog figure) | $1–2 (backlog) | "A watermark stops nothing — provenance + auto-DMCA does. authAspect" |
| **image-metadata-remover / "remove exif"** (L240, exifcleaner MIT) | backlog row, unassigned | 8.5 | ~15k/mo (backlog figure) | $2–4 (backlog; privacy bidders) | Privacy flip: "Strip EXIF for public copies — keep signed originals in authAspect" |
| **exif-viewer** (L187, ExifReader MPL-2.0) | backlog row, unassigned | 8 | ~25k/mo (backlog figure) | $1–3 | "See what leaks → verify what's yours: authAspect" |
| watermark-pdf (L200) | backlog row | 5 | ~40k/mo (backlog) | $1–3 | PDF lane ≠ creator images; generic watermark CTA only |
| reverse-image-search finder / "who stole my photo" checker | NOT in backlog | 9 | 10–30k/mo (est; "reverse image search" cluster) | $0.5–2 | Perfect top-of-funnel: free search → authAspect monitoring/takedown |
| DMCA-takedown-cost calculator (manual svc vs authAspect) | NOT in backlog | 9 | 1–5k/mo (est) | $5–20 (legal-adjacent bidders; seed market pays $50–200/mo) | calculator output IS the pricing comparison → signup |
| C2PA / Content Credentials verifier & embedder | NOT in backlog | 8 | 2–8k/mo (est, rising) | $2–8 | literally the product's core tech as a free tool |
| AI-image-detector ("is this AI?") | NOT in backlog | 7 | 50k+/mo (est, huge trend cluster) | $1–5 | adjacent intent; harder build, crowded SERP |

**Already-live pages that should carry authAspect CTAs (retrofit, zero build):** youtube-earnings-calculator, tiktok-money-calculator, twitch-bit/revenue-calculator, creator-earnings-calculator, engagement-rate-calculator, influencer-calculator, hashtag-generator, image-compressor, + /creator-tools and /image-tools hubs. Angle: "Earning from content? Protect it first."

**Backlog caution:** AVOID list policy-rejects `gemini-watermark-remover` (circumvention tool) — do NOT build watermark-*removal* tools under authAspect branding; it's the moral inverse of the product.

## 7. Combined top-10 re-rank (all 5 products)

1. **image-watermark** (backlog L175, MIT lib ready) → **authAspect** — 15–25k/mo cited, perfect ICP, lowest-effort high-fit build in the whole matrix. Build first.
2. **qr-code-scanner** (backlog L138, 100k+/mo) → Objexi — still the volume king.
3. **link-in-bio generator** → Veyzi — core-product mirror, 20–40k/mo est.
4. **reverse-image-search / "who stole my photo"** → authAspect — 10–30k/mo est, pure top-of-funnel for a paying seed market.
5. **image-metadata-remover** (backlog L240) → authAspect — 15k/mo cited, privacy bidders, trivial build.
6. **qr-code-with-logo** (backlog L188) → Objexi — 32k/mo cited.
7. **youtube-sponsorship-calculator** → Veyzi — thin SERP, 10–30k/mo est.
8. **DMCA-takedown-cost calculator** → authAspect — tiny volume but the seed market's exact purchase-decision query; near-guaranteed conversion.
9. **AI-receptionist-cost-calculator** → Emuu — proven competitor demand, near-perfect intent match.
10. **quote-estimate-builder** → PropoDoc — 10–25k/mo est, reuses invoice-generator engine.

(Moved out of old top-10 to make room: invoice-generator CTA module stays #0 priority as zero-build, media-kit builder and recruiting-ROI calc slide to 11–12.)

## 8. Funnel-CTA mapping update for shared/funnel-cta.js

Add product mapping: `image-tools/*` and `image-watermark`/`exif-*`/`metadata-*` pages → authAspect; creator-earnings cluster gets **dual CTA** (Veyzi primary, authAspect secondary "protect your earnings") — creators are both products' ICP simultaneously.
