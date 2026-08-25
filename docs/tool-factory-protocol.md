# Tool Factory Protocol — daily build recipe (cron: tool-factory)

Each run: build the next **10 tools** from `docs/tool-backlog.md` (in order, skip any marked done). Use parallel subagents (swarm) — ~3 workers, 3-4 tools each.

## Per-tool build checklist (ALL required)

### 1. Tool page — `/<slug>/index.html`
- Copy house style from `bmi-calculator/index.html` / `stair-calculator/index.html` (CSS vars, nav.js, ad-slot divs, result-box).
- `<title>`: `{Tool Name} — Free {category} Calculator | ToolAspect` (≤60 chars)
- meta description ≤155 chars with the primary keyword + a number/outcome.
- Interactive calculator with **real, correct formulas** — verify math against 2 worked examples by hand before shipping.
- **Reference data tables** (rates, thresholds, by-state/by-age rows) — this is what wins AIO citations. Minimum 1 table per tool.
- 300-500 words SEO content: What it is / Formula / How to use / Worked example with real numbers.
- FAQ section (4-6 real questions) + `FAQPage` + `WebApplication` + `BreadcrumbList` JSON-LD.
- NO em-dash abuse, no "delve/leverage/seamlessly/in today's fast-paced world", varied sentence length, contractions — humanized by default.

### 2. Interlinking
- Add tool to `all-tools/index.html` + its category hub (`finance-tools/`, `legal-tools/` (create if missing), etc.)
- Link 3-5 SIBLING tools in-page ("Related calculators").
- Blog post links to tool + 2 related tools.

### 3. Blog post — `/guides/<topic>/index.html`
- 800-1200 words, practical, question-led H2s matching PAA queries.
- Same humanizer rules. Link to the new tool page + 2 existing tools.

### 4. Deploy + indexing
- Run `./deploy.sh` (regenerates sitemap, deploys, commits, pushes).
- `python3 ~/.hermes/scripts/indexnow-submit.py` (submits sitemap URLs to Bing/Yandex/IndexNow relay).
- Spot-check 2 new URLs return 200 (`curl -s -o /dev/null -w "%{http_code}"`).

### 5. AI-provenance scrub
- Static HTML from our template carries no AI marks — but if any subagent used generated text pasted from a model UI, run `python3 ~/projects/ai-mark-scrubber/scrub_cli.py <file>` on it. Check for C2PA/meta tags on any images: none should be present.

### 6. Report (post to channel)
Table: tool | URL | status(200) | indexed-submitted | notes. Plus batch totals (tools built, guides built, sitemap count before→after).

## Backlog maintenance
- On completion, move built slugs from backlog waves into `docs/tool-factory-done.md` with date.
- If backlog < 15 remaining, generate the next wave (research high-CPC niches not yet covered, dedupe against existing dirs) and append.

## Kill switch
If deploy fails or any URL 404s after 2 retries — STOP, report failure, don't continue the batch.
