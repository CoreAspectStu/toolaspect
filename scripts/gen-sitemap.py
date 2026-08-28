#!/usr/bin/env python3
"""Generate sitemap.xml from the live directory tree.

- Every page (any depth) with its real file mtime as lastmod — no stale 'today' stamps
- roadmap/embed excluded (private/noindex)
- --tracked: include only git-tracked files (use for PRs against a dirty worktree)

Run after every batch, before deploy. Idempotent.
"""
import subprocess, sys
from pathlib import Path
from datetime import datetime, timezone

repo = Path(__file__).resolve().parent.parent
BASE = "https://toolaspect.com"
EXCLUDE = {"roadmap", "embed", "shared", "node_modules", "scripts", "docs", ".git"}
HUBS = {"all-tools","finance-tools","contractor-tools","health-calculators","creator-tools",
        "auto-tools","insurance-tools","legal-tools","business-tools","converters","convert",
        "everyday-tools","developer-tools","text-tools","image-tools","guides"}

tracked = set()
if "--tracked" in sys.argv:
    out = subprocess.run(["git","-C",str(repo),"ls-files","--","*/index.html","index.html","404.html","about.html"],
                         capture_output=True, text=True, check=True).stdout
    tracked = {line for line in out.splitlines() if line}

def lastmod(p: Path) -> str:
    return datetime.fromtimestamp(p.stat().st_mtime, tz=timezone.utc).strftime("%Y-%m-%d")

def include(p: Path) -> bool:
    rel = p.relative_to(repo).as_posix()
    if any(x in EXCLUDE for x in p.parts): return False
    if tracked and rel not in tracked: return False
    return True

entries = [(f"{BASE}/", 1.0, "daily")]  # homepage

pages = sorted(repo.glob("index.html")) + sorted(repo.glob("*/index.html")) + sorted(repo.glob("*/*/index.html"))
pages += [repo/"404.html", repo/"about.html"]
seen = set()
for p in pages:
    if not p.exists() or not include(p) or p in seen: continue
    seen.add(p)
    rel = p.relative_to(repo).as_posix()
    if rel == "index.html": continue
    if rel in ("404.html",): continue
    if rel == "about.html":
        entries.append((f"{BASE}/about.html", 0.4, "yearly", lastmod(p))); continue
    url = (f"{BASE}/{rel[:-len('index.html')]}").replace("https://toolaspect.com//", "https://toolaspect.com/")
    depth = rel.count("/")
    top = p.parts[-3] if len(p.parts) >= 3 else ""
    if depth == 1 and top in HUBS: prio, freq = (0.9, "weekly")
    elif depth == 1: prio, freq = (0.7, "monthly")
    else: prio, freq = (0.6, "monthly")
    entries.append((url, prio, freq, lastmod(p)))

xml = ['<?xml version="1.0" encoding="UTF-8"?>',
       '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for e in entries:
    xml.append("  <url>")
    xml.append(f"    <loc>{e[0]}</loc>")
    if len(e) > 3: xml.append(f"    <lastmod>{e[3]}</lastmod>")
    xml.append(f"    <changefreq>{e[2]}</changefreq>")
    xml.append(f"    <priority>{e[1]}</priority>")
    xml.append("  </url>")
xml.append("</urlset>")
(repo/"sitemap.xml").write_text("\n".join(xml) + "\n", encoding="utf-8")
print(f"sitemap: {len(entries)} URLs written{' (tracked only)' if tracked else ''}")
