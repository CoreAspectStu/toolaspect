#!/usr/bin/env python3
"""Lane D: add ad slots + includes to pages missing them (reference tables, all-tools, youtube)."""
import os, re
ROOT = os.environ.get("TA_ROOT", "/home/stu/projects/utility-sites")
pages = open('/tmp/laneD.txt').read().split()
CSS = '<link rel="stylesheet" href="/shared/ad-slots.css">'
JS = '<script defer src="/shared/ads.js"></script>'
SLOT = '<div class="ad-slot" data-slot="tool-top">Ad</div>'
SLOT2 = '<div class="ad-slot" data-slot="tool-result">Ad</div>'
fixed = 0
for p in pages:
    f = os.path.join(ROOT, p, 'index.html')
    if not os.path.exists(f):
        print('missing', p); continue
    d = open(f, encoding='utf-8').read()
    if 'ad-slot' in d or 'adsbygoogle' in d:
        continue
    # includes before </head>
    if CSS not in d:
        d = d.replace('</head>', '  ' + CSS + '\n  ' + JS + '\n</head>', 1)
    # containers: one after first h1 area (tool-top) — place after the first </h1>; one before footer (tool-result)
    m = re.search(r'</h1>', d)
    if m:
        d = d[:m.end()] + '\n  ' + SLOT + d[m.end():]
    fpos = d.rfind('<footer')
    if fpos == -1: fpos = d.rfind('</main>')
    if fpos == -1: fpos = d.rfind('</body>')
    d = d[:fpos] + '  ' + SLOT2 + '\n' + d[fpos:]
    open(f, 'w', encoding='utf-8').write(d)
    fixed += 1
print('ad slots added:', fixed, 'of', len(pages))
