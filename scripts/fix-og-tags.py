#!/usr/bin/env python3
"""Ensure complete OG/Twitter meta tags on every HTML page (idempotent).

Adds/repairs: og:title, og:type, og:url, og:description, og:image (+width/height),
og:site_name, twitter:card/title/description/image.
Keeps existing values; only fills gaps. --tracked limits to git-known files
(use for PRs against a dirty worktree). Run before every deploy.
"""
import re, subprocess, sys
from pathlib import Path

repo = Path(__file__).resolve().parent.parent
BASE = "https://toolaspect.com"
OG_IMG = f"{BASE}/shared/og-image.png"

tracked = set()
if "--tracked" in sys.argv:
    out = subprocess.run(["git", "-C", str(repo), "ls-files"], capture_output=True, text=True, check=True).stdout
    tracked = set(out.splitlines())

def page_url(p: Path) -> str:
    rel = p.relative_to(repo).as_posix()
    return f"{BASE}/" if rel == "index.html" else f"{BASE}/{rel.rsplit('/index.html', 1)[0]}/"

pages = [repo/"index.html", repo/"404.html", repo/"about.html"] + sorted(repo.glob("*/index.html"))
changed = skipped = 0
errors = []
for p in pages:
    rel = p.relative_to(repo).as_posix()
    if not p.exists() or (tracked and rel not in tracked) or "node_modules" in p.parts:
        continue
    try:
        txt = p.read_text(encoding="utf-8")
    except Exception as e:
        errors.append(f"{rel}: {e}"); continue
    title_m = re.search(r"<title>(.*?)</title>", txt, re.S)
    title = re.sub(r"\s*[|–-]\s*ToolAspect\s*$", "", title_m.group(1).strip()) if title_m else rel
    desc_m = re.search(r'<meta\s+name="description"\s+content="([^"]*)"', txt)
    desc = desc_m.group(1) if desc_m else f"{title} — free online tool on ToolAspect. Runs in your browser, no signup."

    def esc(s): return s.replace('"', "&quot;")
    adds = []
    if f'property="og:title"' not in txt:       adds.append(f'<meta property="og:title" content="{esc(title)}">')
    if f'property="og:type"' not in txt:        adds.append('<meta property="og:type" content="website">')
    if f'property="og:url"' not in txt:         adds.append(f'<meta property="og:url" content="{page_url(p)}">')
    if f'property="og:description"' not in txt: adds.append(f'<meta property="og:description" content="{esc(desc)}">')
    if f'property="og:image"' not in txt:       adds.append(f'<meta property="og:image" content="{OG_IMG}">')
    if f'property="og:image:width"' not in txt:  adds.append('<meta property="og:image:width" content="1200">')
    if f'property="og:image:height"' not in txt: adds.append('<meta property="og:image:height" content="630">')
    if f'property="og:site_name"' not in txt:   adds.append('<meta property="og:site_name" content="ToolAspect">')
    if f'name="twitter:card"' not in txt:       adds.append('<meta name="twitter:card" content="summary_large_image">')
    if f'name="twitter:title"' not in txt:      adds.append(f'<meta name="twitter:title" content="{esc(title)}">')
    if f'name="twitter:description"' not in txt: adds.append(f'<meta name="twitter:description" content="{esc(desc)}">')
    if f'name="twitter:image"' not in txt:      adds.append(f'<meta name="twitter:image" content="{OG_IMG}">')

    if adds:
        block = "\n".join(adds)
        m = re.search(r'<link rel="canonical"[^>]*>', txt)
        if not m:
            # insert right before the first og: meta if present so og block stays contiguous
            m = re.search(r'<meta property="og:', txt)
        if m:
            txt = txt[:m.end()] + "\n" + block + txt[m.end():]
        else:
            txt = txt.replace("</head>", block + "\n</head>", 1)
        p.write_text(txt, encoding="utf-8")
        changed += 1
    else:
        skipped += 1

print(f"og-tags: {changed} pages updated, {skipped} already complete, {len(errors)} errors")
for e in errors: print("ERR", e)
sys.exit(1 if errors else 0)
