#!/usr/bin/env python3
"""Kyle Roof method on-page audit for utility-sites (toolaspect.com).

Roof Big-4 checks + zone term-frequency, per page:
  1. URL slug contains target keyword
  2. <title> contains target keyword (highest-weight signal)
  3. H1 contains target keyword
  4. H1 == title (verbatim — Roof: same wording always wins)
  5. Exact keyword >=1 in <p> body
  6. Keyword count in body vs Roof ~2% density ceiling (over-opt flag)
  7. H2/H3 contain keyword or variant (zone coverage)
Target keyword derived from slug; variants = token subset matches.
Outputs: docs/kyle-roof-audit-report.md + JSON.
"""
import json, re, html, os, sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT_MD = ROOT / "docs" / "kyle-roof-audit-report.md"
OUT_JSON = ROOT / "docs" / "kyle-roof-audit-report.json"

class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = []
        self.h1 = []; self.h2 = []; self.h3 = []; self.paras = []
        self._zone = None; self._buf = []
    def handle_starttag(self, tag, attrs):
        if tag in ("title","h1","h2","h3","p"):
            self._zone = tag; self._buf = []
    def handle_endtag(self, tag):
        if tag == self._zone and self._zone:
            txt = html.unescape(" ".join("".join(self._buf).split()))
            {"title": self.title, "h1": self.h1, "h2": self.h2,
             "h3": self.h3, "p": self.paras}[self._zone].append(txt)
            self._zone = None
    def handle_data(self, d):
        if self._zone: self._buf.append(d)

def kw_from_slug(slug: str) -> str:
    return slug.replace("-", " ").strip()

def audit_page(dirpath: Path):
    f = dirpath / "index.html"
    if not f.exists(): return None
    try: raw = f.read_text(errors="replace")
    except Exception: return None
    p = PageParser()
    try: p.feed(raw)
    except Exception: return None
    slug = dirpath.name
    kw = kw_from_slug(slug)
    kwt = kw  # exact target
    title = p.title[0] if p.title else ""
    h1 = p.h1[0] if p.h1 else ""
    body = " ".join(p.paras)
    body_l = body.lower(); kw_l = kw.lower()
    tokens = kw_l.split()
    def has_exact(z): return kw_l in z.lower()
    def has_variant(z):
        zl = z.lower()
        # all significant tokens present = variant match
        return all(t in zl for t in tokens if len(t) > 2)
    body_count = body_l.count(kw_l)
    word_count = max(len(body_l.split()), 1)
    density = 100.0 * body_count * len(tokens) / word_count
    checks = {
        "kw_in_url": True,  # derived from slug by construction
        "kw_in_title": has_exact(title),
        "kw_in_h1": has_exact(h1),
        "h1_equals_title": title.strip() == h1.strip(),
        "kw_in_body_para": body_count >= 1,
        "h2_coverage": any(has_exact(h) or has_variant(h) for h in p.h2),
        "h3_coverage": any(has_exact(h) or has_variant(h) for h in p.h3),
    }
    flags = []
    if not checks["kw_in_title"]: flags.append("title-missing-kw")
    if not checks["kw_in_h1"]: flags.append("h1-missing-kw")
    if not checks["h1_equals_title"]: flags.append("h1!=title")
    if not checks["kw_in_body_para"]: flags.append("body-missing-kw")
    if density > 3.0: flags.append("overopt-density>3%")
    if word_count < 300: flags.append("thin-content<300w")
    return {"slug": slug, "kw": kw, "title": title[:120], "h1": h1[:120],
            "body_words": word_count, "body_kw_count": body_count,
            "density_pct": round(density, 2), "checks": checks, "flags": flags}

def main():
    pages = []
    for d in sorted(ROOT.iterdir()):
        if d.is_dir() and (d / "index.html").exists():
            r = audit_page(d)
            if r: pages.append(r)
    total = len(pages)
    agg = {}
    for k in ("kw_in_title","kw_in_h1","h1_equals_title","kw_in_body_para",
              "h2_coverage","h3_coverage"):
        agg[k] = sum(1 for p in pages if p["checks"][k])
    flagged = [p for p in pages if p["flags"]]
    OUT_MD.parent.mkdir(exist_ok=True)
    with open(OUT_JSON, "w") as f:
        json.dump({"total": total, "agg": agg, "pages": pages}, f, indent=1)
    with open(OUT_MD, "w") as f:
        f.write(f"# Kyle Roof on-page audit — {total} pages\n\n## Zone pass rates\n\n")
        f.write("| Check | Pass | Rate |\n|---|---|---|\n")
        for k, v in agg.items():
            f.write(f"| {k} | {v}/{total} | {100*v/total:.1f}% |\n")
        f.write(f"\nFlagged pages: **{len(flagged)}**\n\n")
        byflag = {}
        for p in flagged:
            for fl in p["flags"]: byflag.setdefault(fl, []).append(p["slug"])
        f.write("| Flag | Count |\n|---|---|\n")
        for fl, slugs in sorted(byflag.items(), key=lambda x: -len(x[1])):
            f.write(f"| {fl} | {len(slugs)} |\n")
        f.write("\n## Flagged pages (fix queue)\n\n")
        for p in flagged[:400]:
            f.write(f"- `{p['slug']}` — {', '.join(p['flags'])}\n")
    print(f"Audited {total} pages; flagged {len(flagged)}")
    for k, v in agg.items(): print(f"  {k}: {v}/{total} ({100*v/total:.1f}%)")
    print("Report:", OUT_MD)

if __name__ == "__main__":
    main()
