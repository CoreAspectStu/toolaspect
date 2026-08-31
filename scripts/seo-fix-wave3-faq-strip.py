#!/usr/bin/env python3
"""2026-08-31 schema hygiene wave: FAQ rich results retired May 2026.
- Strip standalone FAQPage JSON-LD <script> blocks (visible FAQ HTML kept).
- Remove FAQPage nodes from data-ta-schema=v2 @graph blocks (keep WebApplication).
- Add Organization entity JSON-LD (sameAs) to homepage + hub pages.
Idempotent. No deploy — commit-ready only."""
import re, json, sys
from pathlib import Path

repo = Path(__file__).resolve().parent.parent
html_files = [p for p in repo.rglob('*.html') if 'node_modules' not in p.parts
              and '_bmad-output' not in p.parts and not any(s in p.parts for s in ('index-v2-backup.html','index-v3-proto.html'))]

ORG_BLOCK = ('<script type="application/ld+json" data-ta-org="v1">'
'{"@context":"https://schema.org","@type":"Organization","name":"ToolAspect",'
'"url":"https://toolaspect.com/","logo":"https://toolaspect.com/favicon-32.png",'
'"description":"Free online tools, calculators, and converters.",'
'"sameAs":["https://github.com/CoreAspectStu/utility-sites",'
'"https://www.linkedin.com/company/toolaspect","https://x.com/toolaspect"]}</script>\n')

def strip_standalone(text):
    """Remove ld+json script blocks whose JSON contains "@type":"FAQPage" (top-level)."""
    out, pos, removed = [], 0, 0
    for m in re.finditer(r'<script type="application/ld\+json">(.*?)</script>\s*\n?', text, re.DOTALL):
        body = m.group(1)
        try:
            data = json.loads(body)
        except Exception:
            continue
        if isinstance(data, dict) and data.get('@type') == 'FAQPage':
            out.append(text[pos:m.start()]); pos = m.end(); removed += 1
    out.append(text[pos:])
    return ''.join(out), removed

def strip_graph_node(text):
    """In data-ta-schema v2 @graph blocks, drop FAQPage array nodes."""
    changed = 0
    def repl(m):
        nonlocal changed
        head, body, tail = m.group(1), m.group(2), m.group(3)
        try:
            data = json.loads(body)
        except Exception:
            return m.group(0)
        graph = data.get('@graph')
        if not isinstance(graph, list):
            return m.group(0)
        kept = [n for n in graph if not (isinstance(n, dict) and n.get('@type') == 'FAQPage')]
        if len(kept) == len(graph):
            return m.group(0)
        changed += 1
        data['@graph'] = kept
        return head + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + tail
    text = re.sub(r'(<script type="application/ld\+json" data-ta-schema="v2">)(.*?)(</script>)',
                  repl, text, flags=re.DOTALL)
    return text, changed

s_standalone = s_graph = 0
for f in html_files:
    try:
        t = f.read_text(encoding='utf-8')
    except Exception:
        continue
    orig = t
    t, n1 = strip_standalone(t); s_standalone += n1
    t, n2 = strip_graph_node(t); s_graph += n2
    if t != orig:
        f.write_text(t, encoding='utf-8')

# --- Organization entity on homepage + hubs ---
KEY_PAGES = ['index.html'] + [f'{h}/index.html' for h in
    ('all-tools','finance-tools','health-calculators','insurance-tools','legal-tools',
     'everyday-tools','business-tools','creator-tools','developer-tools','text-tools',
     'image-tools','auto-tools','contractor-tools','pet-tools','guides')]
added = 0
for rel in KEY_PAGES:
    f = repo / rel
    if not f.exists():
        print(f'  skip (missing): {rel}'); continue
    t = f.read_text(encoding='utf-8')
    if 'data-ta-org=' in t:
        continue  # already has org entity
    m = re.search(r'</head>', t)
    if not m:
        print(f'  skip (no head): {rel}'); continue
    t = t[:m.start()] + ORG_BLOCK + t[m.start():]
    f.write_text(t, encoding='utf-8'); added += 1

print(f'standalone FAQPage blocks removed: {s_standalone}')
print(f'FAQPage nodes removed from v2 @graph: {s_graph}')
print(f'Organization entity added: {added}')
