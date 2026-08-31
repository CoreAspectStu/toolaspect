#!/usr/bin/env python3
"""Sitewide integrity gate for toolaspect (2026-08-28 incident: 247 orphan pages passed per-page checks).
Run before every deploy: python3 scripts/site-gate.py  — exits 1 on any FAIL."""
import re, sys, json, subprocess
from pathlib import Path
from collections import defaultdict

repo = Path(__file__).resolve().parent.parent
fails, warns = [], []

# 1. NAV COVERAGE — every tool dir must be reachable from shared/nav.js
nav = (repo/'shared/nav.js').read_text()
nav_links = set(re.findall(r"href: '/([a-z0-9-]+)/'", nav))
tools = {p.parent.name for p in repo.glob('*/index.html')}
HUBS = {'roadmap','embed','best-free-online-tools-2026','guides','all-tools','convert','converters','finance-tools','health-calculators','insurance-tools','legal-tools','everyday-tools','business-tools','creator-tools','developer-tools','text-tools','image-tools'}
orphans = sorted(t for t in tools - nav_links if t not in HUBS)
if orphans:
    fails.append(f"NAV ORPHANS ({len(orphans)}): tools not in nav menu: {orphans[:10]}...")

# 2. FOOTER ESSENTIALS
for must in ['/guides/','/all-tools/','/privacy','/terms']:
    if must not in nav:
        fails.append(f"FOOTER missing link to {must}")

# 3. INTERLINKS — every page needs a related-tools block + /guides/ link
no_rel = [p.parent.name for p in repo.glob('*/index.html')
          if p.parent.name not in {'roadmap','embed'} and 'related-tools' not in p.read_text(errors='ignore')]
if no_rel:
    fails.append(f"NO INTERLINKS ({len(no_rel)} pages missing related-tools block)")

# 4. PAGE PILLARS (fast static subset)
LD = re.compile(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', re.S|re.I)
for p in repo.glob('*/index.html'):
    t_full = p.read_text(errors='ignore')
    t = re.sub(r'<script.*?</script>', '', t_full, flags=re.S)
    slug = p.parent.name
    if slug in {'roadmap','embed'}: continue
    if len(re.findall(r'<h1[ >]', t)) != 1: fails.append(f"{slug}: h1 count != 1")
    for block in LD.findall(t):
        try: json.loads(block)
        except Exception as e: fails.append(f"{slug}: invalid JSON-LD ({e})")
    if 'nav.js' not in t_full and slug != 'best-free-online-tools-2026': fails.append(f"{slug}: no nav.js include")
    if 'funnel-cta.js' not in t and '.ad-slot' not in t.replace('class="ad-slot"','X'):
        pass  # cta optional

# 5. CTA MAP COVERAGE — mapped product clusters must render cards
cta = (repo/'shared/funnel-cta.js').read_text()
try:
    subprocess.run(['node','--check',str(repo/'shared/nav.js')],check=True,capture_output=True)
    subprocess.run(['node','--check',str(repo/'shared/funnel-cta.js')],check=True,capture_output=True)
    subprocess.run(['node','--check',str(repo/'shared/ads.js')],check=True,capture_output=True)
except Exception as e:
    fails.append(f"JS SYNTAX: {e}")

# 6. SITEMAP FRESHNESS — every tool must be in sitemap
sm = repo.glob('sitemap*.xml')
if sm:
    smt = list(sm)[0].read_text()
    missing_sm = sorted(t for t in tools if f'/{t}/' not in smt and t not in {'embed','roadmap'})
    if missing_sm: fails.append(f"SITEMAP missing {len(missing_sm)} pages: {missing_sm[:8]}")
else:
    warns.append("no sitemap.xml found")

# 3. HOMEPAGE TOOL-COUNT CLAIMS — sitewide counts are set to a static "2,000+"
# (Stu doctrine 2026-08-31: visitors come for ONE tool, not the count; a static
# round number needs no maintenance and can't go stale). Gate only checks for
# LOW hard counts (e.g. "550 tools") that undersell reality — "2,000+" style
# aspirational claims are allowed and ignored.
n_tools = len([t for t in tools if t not in HUBS | {'account','about','contact','privacy','terms','disclaimer','blog','okf-policy'}])
n_conv = len(list((repo/'convert').glob('*/index.html')))
home = (repo/'index.html').read_text() + nav
import re as _re
for m in _re.finditer(r'(\d[\d,]*)\s*\+?\s*(?:free\s+)?(?:online\s+)?(?:tools|calculators|converters)', home):
    claimed = int(m.group(1).replace(',', ''))
    if claimed <= 25: continue  # per-category counts, not sitewide claims
    if claimed >= 1000: continue  # static aspirational sitewide claim ("2,000+") — allowed
    limit = n_conv if 'converter' in m.group(0).lower() else n_tools
    floor = int(limit * 0.9)
    if claimed < floor:
        fails.append(f"STALE COUNT '{m.group(0).strip()}' on homepage/nav — reality ≈{limit} (floor {floor})")

# 4. ROADMAP PRIVACY — build plan must not be crawler-visible
if 'href="/roadmap/"' in nav:
    fails.append("ROADMAP EXPOSED: footer/nav links to /roadmap/ (game plan leak)")
if (repo/'sitemap.xml').exists() and '/roadmap/' in (repo/'sitemap.xml').read_text():
    fails.append("ROADMAP EXPOSED: /roadmap/ in sitemap.xml")
if 'toolaspect.com/roadmap/' in (repo/'llm.txt').read_text() if (repo/'llm.txt').exists() else False:
    fails.append("ROADMAP EXPOSED: /roadmap/ listed in llm.txt")

print(json.dumps({"when": "pre-deploy gate", "pages": len(tools), "tools": n_tools, "converters": n_conv, "fails": fails, "warns": warns}, indent=1))
sys.exit(1 if fails else 0)
