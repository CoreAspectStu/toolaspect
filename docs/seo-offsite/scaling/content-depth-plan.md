# Content Depth Plan — Retrofitting 1,409 Existing Pages

**Why:** OmniCalculator outranks bare calculators because every tool page carries 300–800 words of explanatory content: what it does, the formula, a worked example, FAQs. Google's Helpful Content system rewards this; pure-widget pages get outclassed. Our 973 converters are mostly widget + one line — the single highest-leverage fix on the site.

---

## The depth template (apply to every retrofitted page)

Every tool page gets these six blocks, in order:

### 1. Intro paragraph (~60–100 words, unique per page)
- What the tool does, who uses it, one concrete use case.
- Must contain the primary keyword naturally in the first sentence.
- **Never templated boilerplate** — parameterized with 2–3 page-specific facts (e.g., for cm-to-inches: "1 inch equals exactly 2.54 cm, so...").

### 2. "How it works" section (~80–120 words)
- Step-by-step usage: input → output, precision options, edge cases.
- Explains *why* the answer is what it is (for converters: unit definitions in human terms).

### 3. Formula section (~40–80 words + displayed formula)
- The exact formula in a `<code>` or styled block.
- Conversion factor / definition sourced (SI definitions, USDA, DOL, etc.).
- This is what earns featured snippets — format as a direct-answer paragraph + formula.

### 4. Worked example (~60–100 words)
- One fully worked real-world example: "Convert 180 cm to inches: 180 ÷ 2.54 = 70.87 in."
- A second variant example where it adds value (reverse conversion).

### 5. FAQ (3–5 questions, ~150–250 words total)
- Pull from People-Also-Ask patterns for the keyword (GSC + SERP inspection).
- Mark up with FAQPage JSON-LD on the first rollout batch; monitor for rich results.
- Questions must differ per page family — no shared generic FAQ across 900 pages.

### 6. Related tools strip
- 4–6 contextual links (see internal-linking-plan.md) — category hub + siblings.

**Target per page: 300–500 words added. Never duplicate paragraphs across pages.**

---

## Prioritization: which 100 pages first

Rank all 1,409 pages by `impressions × (position 5–30)` from GSC — pages with impressions but stuck on page 1–2 of SERPs are where added depth converts fastest into clicks. Expected mix:

1. **~40 converters** — highest-volume units (cm-to-inches, kg-to-lbs, celsius-to-fahrenheit, inches-to-feet, mph-to-kmh, liters-to-gallons...). Each has 10K–500K searches/mo individually.
2. **~25 salary-by-state pages** — top-population states (CA, TX, FL, NY, PA, IL, OH, GA, NC, MI...).
3. **~20 time-zone pages** — the head terms (EST to CST, PST to EST, GMT conversions).
4. **~15 gift-idea + guide pages** — best commercial RPM, seasonal.

If GSC query data is unavailable for some, fall back to public keyword estimates for the head terms.

## Effort estimate (1 developer-agent, ~20 hrs/week)

- **Templating work (one-time):** 8–12 hrs — add content blocks to the shared template; write the LLM-assisted generation pipeline that produces intro/formula/example/FAQ per page from a structured spec (unit definitions, factors, PAA questions). Human/agent reviews output for factual accuracy.
- **Per-page cost:** ~3–4 min agent time (spec + generate + review + build) → **~100 pages ≈ 6–8 hrs of generation + review**, spread over 4 weeks (25 pages/week).
- **Total: retrofit of top-100 pages fits comfortably in weeks 1–5** alongside programmatic expansion.
- Remaining ~1,300 pages: continue at 100/month after day 90; converters are highly templated so marginal cost falls.

## Quality gates

- Spot-check 10% of each batch: no factual errors in formulas/factors (unit conversion errors are reputation-fatal on a tool site).
- No two pages share >25% of body text (dedupe check in build pipeline).
- FAQ JSON-LD valid (Rich Results Test) on first 20 pages before scaling.
- Add `dateModified` to retrofitted pages so Google re-crawls promptly; request re-indexing for the top-25 via GSC.

## Expected impact

Pages ranking 8–20 moving to top-5 typically 2–4× their CTR. If the top-100 retrofit lifts aggregate impressions-to-clicks by even 30%, that alone is the cheapest traffic gain in this roadmap — cheaper than any new page cluster.
