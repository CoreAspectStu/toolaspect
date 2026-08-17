# Internal Linking Plan — Hub-and-Spoke Architecture

**Why:** calculator.net and rapidtables rank on sheer internal-link equity: every page is ≤3 clicks from the homepage, every page links up to its category and sideways to siblings, and category hubs concentrate relevance. At 1,400 pages (growing to ~4,000), we need this deliberately, not accidentally.

---

## How the leaders do it

**calculator.net**
- Flat taxonomy: ~10 top-level categories (finance, fitness & health, math, other), each a hub page with a descriptive table of every calculator in that category.
- Every calculator page has a left sidebar / footer linking to **all sibling calculators in its category** → each page receives dozens of contextual internal links.
- Breadcrumb-style "Home › Category › Calculator" on every page.
- Cross-links *inside content*: "Related: BMI calculator" style inline mentions.

**rapidtables**
- Same hub pattern plus heavy use of **conversion tables that link every unit pairing** (each "X to Y" page links to its reverse and neighbors) — their convert cluster is a fully-connected graph within each measurement family (length, weight, temperature...).

**Takeaways for us:**
1. Category hubs must be real content pages (100+ words + full tool index), not nav stubs.
2. Every tool page: breadcrumb + hub link + 3–5 sibling links + in-content cross-links.
3. Converters should interlink bidirectionally with their reverse pair and metric/imperial neighbors.

---

## Target architecture

```
Home
├── /convert/           (hub: all measurement families)
│   ├── /convert/length/      (sub-hub)
│   │   ├── /convert/cm-to-inches/   → siblings: inches-to-cm, cm-to-feet, mm-to-inches...
│   │   └── ...
│   ├── /convert/weight/ ...
│   └── ...
├── /salary/            (hub)
│   └── /salary/california/  → siblings: texas, florida, new-york...
├── /time-zones/        (hub)
├── /gift-ideas/        (hub)
├── /guides/            (hub)
└── NEW clusters each get a hub:
    /postage/  /electricity-rates/  /minimum-wage/  /tax-rates/
    /sunrise-sunset/  /baby-names/  /schedules/  /cost-of-living/
    /calories/  /distances/
```

**Rules:**
- Every tool page links to: (a) its hub, (b) 3–5 siblings, (c) 1–2 in-content contextual links.
- Every hub links to all its children (paginated if >100) + to 2–3 related hubs.
- Homepage links to all hubs (directly or via a compact directory section) → max depth = 3 clicks.
- Breadcrumbs: `Home › Category › Tool` with JSON-LD `BreadcrumbList` markup on every page.

---

## Concrete template changes

1. **Add a breadcrumb partial** to the shared page template (top of `<main>`), with BreadcrumbList JSON-LD. ~2 hrs.
2. **Add a "Related tools" block** at the bottom of every tool page, rendered from a per-cluster sibling map (data-driven YAML/JSON: cluster → ordered sibling list). ~4 hrs incl. data files for existing clusters.
3. **Build/upgrade category hub pages** for: convert (exists — enrich with sub-hubs per measurement family), salary, time-zones, gift-ideas, guides; auto-generate hub for every new programmatic cluster. Each hub: intro paragraph, full linked index, "popular" section. ~10 hrs total for existing + template for new.
4. **Sidebar or footer nav** listing all hubs site-wide (rapidtables-style), so every page passes equity to every hub. ~2 hrs.
5. **In-content cross-links:** the content-depth retrofit (content-depth-plan.md) adds a "Related tools" line as block 6 of the template — same sibling map, so one mechanism feeds both.
6. **Converters specifically:** auto-link every page to its reverse pair (cm-to-inches ↔ inches-to-cm) and list the full family on the sub-hub — rapidtables pattern.
7. **Sitemaps:** keep separate XML sitemaps per cluster; hubs listed first.

**Total build effort: ~20 hrs** (one week of the 20 hr/week agent budget).

## Maintenance rules

- New programmatic batch must ship WITH its hub + sibling map — no orphan batches.
- Quarterly orphan check: crawl the site (or build-graph script) and assert every page has ≥1 hub link + breadcrumb; fail the build otherwise.
- Limit sibling links to 5 to avoid link-dilution spam; keep anchors descriptive (tool name, not "click here").
