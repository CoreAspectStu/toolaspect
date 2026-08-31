#!/usr/bin/env python3
"""ToolAspect data-refresh loop v1.

Scans tool pages for staleness, picks top N slugs, writes a refresh manifest
to docs/data-refresh-queue.json.

Staleness score = weighted mix of:
  - mentions of stale years ('2024', '2025') in page copy
  - count of $ figures in data tables / copy (more figures = more to go stale)
  - age of last git commit touching the file (days)

Usage: python3 scripts/data-refresh.py [-n 5]
"""
import argparse
import datetime
import html as htmllib
import json
import os
import re
import subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, "docs")
CURRENT_YEAR = datetime.date.today().year
STALE_YEARS = [str(y) for y in range(CURRENT_YEAR - 2, CURRENT_YEAR)]  # e.g. 2024, 2025
PRICE_RE = re.compile(r"\$\s?\d[\d,]*(?:\.\d{2})?")
YEAR_RE_TMPL = r"\b{year}\b"


def git_last_commit_age(path):
    """Days since last commit touching path, relative to that commit's date."""
    try:
        out = subprocess.run(
            ["git", "log", "-1", "--format=%cI", "--", path],
            cwd=ROOT, capture_output=True, text=True, timeout=10,
        ).stdout.strip()
        if not out:
            return 9999
        d = datetime.datetime.fromisoformat(out)
        return (datetime.datetime.now(datetime.timezone.utc) - d).days
    except Exception:
        return 9999


def strip_tags(s):
    s = re.sub(r"<script.*?</script>", " ", s, flags=re.S | re.I)
    s = re.sub(r"<style.*?</style>", " ", s, flags=re.S | re.I)
    s = re.sub(r"<[^>]+>", " ", s)
    return htmllib.unescape(s)


def scan_page(html_path):
    with open(html_path, encoding="utf-8", errors="replace") as f:
        text = strip_tags(f.read())
    year_hits = {}
    for y in STALE_YEARS:
        year_hits[y] = len(re.findall(YEAR_RE_TMPL.format(year=y), text))
    prices = PRICE_RE.findall(text)
    return year_hits, prices, text


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("-n", "--top", type=int, default=5)
    args = ap.parse_args()

    results = []
    for entry in sorted(os.listdir(ROOT)):
        p = os.path.join(ROOT, entry, "index.html")
        if not os.path.isfile(p):
            continue
        year_hits, prices, _ = scan_page(p)
        stale_year_total = sum(year_hits.values())
        # Score: stale-year mentions weigh most; each $ figure adds a little;
        # commit age adds 1 point per 30 days stale.
        commit_age = git_last_commit_age(os.path.join(entry, "index.html"))
        score = (stale_year_total * 10
                 + min(len(prices), 50) * 1
                 + commit_age / 30.0)
        if stale_year_total == 0 and len(prices) < 3:
            continue  # no data-bearing copy to refresh
        results.append({
            "slug": entry,
            "staleness_score": round(score, 1),
            "reasons": {
                "stale_year_mentions": year_hits,
                "dollar_figure_count": len(prices),
                "days_since_last_commit": commit_age,
            },
            "key_figures": prices[:15],
        })

    results.sort(key=lambda r: -r["staleness_score"])
    top = results[: args.top]

    os.makedirs(DOCS, exist_ok=True)
    out = {
        "generated": datetime.datetime.now().isoformat(timespec="seconds"),
        "criteria": {
            "stale_years": STALE_YEARS,
            "current_year": CURRENT_YEAR,
            "scoring": "10*stale_year_mentions + min($figures,50) + commit_age_days/30",
        },
        "queue": top,
        "total_candidates": len(results),
    }
    out_path = os.path.join(DOCS, "data-refresh-queue.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(out, f, indent=2)

    print(f"Wrote {out_path} ({len(top)} slugs queued of {len(results)} candidates)")
    for r in top:
        print(f"  {r['staleness_score']:>7.1f}  {r['slug']}  "
              f"years={r['reasons']['stale_year_mentions']} "
              f"$figs={r['reasons']['dollar_figure_count']} "
              f"age={r['reasons']['days_since_last_commit']}d")


if __name__ == "__main__":
    main()
