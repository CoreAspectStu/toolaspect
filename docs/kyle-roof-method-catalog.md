<!-- status: in-progress | domain: PROJECT:utility-sites | canonical: docs/kyle-roof-method-catalog.md | updated: 2026-11-09 -->

# Kyle Roof Method Catalog — ToolAspect application
(Sources: POP blog top-10-factors test, Voices of Search ep., Niche Pursuits #170, rankings.io PIM 210, trewmarketing #69, bigeyeagency IN CLEAR FOCUS, seobymarta, localseotactics interview, hvseo.co, IMG/YouTube on-page test results)

## Core thesis
Google on-page ranking ≈ **math over term frequencies in page zones** (BM25/TF-IDF-like bag-of-words per section), not "content quality". Evidence: Lorem Ipsum pages ranked #1 ("rhinoplasty Plano") with only correct term counts/placement. US patent on his testing method.

## Tests & findings (evidence-graded)

| # | Finding | Evidence | Strength |
|---|---|---|---|
| 1 | **Top-4 placements**: meta title (highest), body copy, URL, H1 = ~60% of on-page value | POP controlled test (12 elements, rank-ordered pages) | High |
| 2 | **H1 should equal title tag verbatim** — repeated test winner | POP tests, stated "always wins" | High |
| 3 | Group A (title/body/URL/H1) > Group B (H2/H3, image alt) > Group C (bold/italic/H4) > Group D (schema/OG tags). **Meta description & meta keywords test pages never indexed** | POP top-10-factors test | High |
| 4 | TF-IDF/BM25 per zone: title, H1, H2/H3, paragraph = separate bags; counts matter, not global density | Yandex-leak reasoning + 400+ tests | High |
| 5 | Key off the **best on-page competitor** (often pos #8 or page 2), NOT page-1 averages; sometimes win by having *less* than competitors ("edge analysis") | POP algorithm design | Medium-High |
| 6 | Body density sweet spot ~2% (exact kw); over-optimization real — flag >3% | POP test pages, interviews | Medium |
| 7 | Contextual/LSI terms: each keyword has expected co-occurring terms; include at competitor-like frequencies per zone | POP recommendations engine | Medium-High |
| 8 | Supporting-page silo (virtual silo): target page + consciously chosen supporting pages linking up with deliberate anchors | Method teaching (Niche Pursuits, IMG course) | Medium |
| 9 | Scientific method: N identical pages, same domain, fake (non-indexed) keyword, change ONE element on middle page after indexing; up=positive factor | Patented method | High (method itself) |
| 10 | "SEO Avalanche": rank for long-tail first, expand upward; increases breadth of ranking terms — easier traffic lever than head terms | Chris Carter/IMG writeup | Medium |
| 11 | Don't change URLs of performing pages (treated as new page) | Repeated caveat | High |
| 12 | Google counts unseen text (whole rendered page, not WP editor word count); word count per se weak — no magic number | Interviews | Medium |
| 13 | Indexation zone / segmentation: where on page terms appear matters (top-of-page weighting) | IMG test videos | Medium |

## ToolAspect application decisions
- **Apply now (safe, additive)**: body-kw gaps (192 pages), title-kw gaps (117), H1-kw gaps (82), H2 coverage. Fold into drip batches; never touch URLs.
- **A/B before site-wide**: H1=title verbatim (current template uses emoji + brand suffix; record traffic weeks = don't mass-change). Test on ~20 low-traffic pages, watch 2-4 weeks via Cloudflare + GSC, then roll to more if wins (owner's "when something works, apply to more pages" rule).
- **Skip**: meta keyword/description effort; chasing head-term compact keywords on-page alone (SERPs dominated by authorities — use compact-keyword long-tail variants as separate silo pages instead, Avalanche-style).

## Audit checklist (operational) — implemented in scripts/kyle_roof_audit.py
1. kw_in_url — slug contains target keyword → pass by construction for new pages; never edit existing slugs.
2. kw_in_title — exact kw in `<title>` → else FIX: prepend/insert kw at title start.
3. kw_in_h1 — exact kw in H1 → else FIX: reword H1 (strip emoji if it blocks match).
4. h1_equals_title — verbatim → else FIX via A/B cohort only.
5. kw_in_body_para — exact kw ≥1 in `<p>` → else FIX: add intro paragraph with kw.
6. density_pct — warn >3%, sweet spot ~2% → FIX: dilute or add content.
7. h2_coverage / h3_coverage — kw or full-token variant in ≥1 H2/H3 → FIX: rename one section heading.
8. thin-content — body <300 words → FIX: depth pass.
9. silo check (manual/next): each target page has ≥2 supporting pages linking up with kw-ish anchors.
10. competitor edge analysis (next tool): scrape best-on-page competitor per kw, compare zone term counts, match footprint (not average).

Weekly monitor: cron `kyle-roof-weekly-audit` (3ef85c5fa9b6, Sun 09:00 Sydney) → docs/kyle-roof-audit-report.{md,json}, WoW drift alert.
