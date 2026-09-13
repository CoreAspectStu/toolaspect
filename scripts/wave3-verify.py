#!/usr/bin/env python3
"""Wave-3 verify: JSON-LD parses, markers present, no dangling links, counts."""
import json, os, re, sys
sys.path.insert(0, '.')
pairs = json.load(open('/tmp/wave3-pairs.json'))[:150]
bad = []; howto_n = 0; widget_n = 0; inc_n = 0
for p in pairs:
    f = f"{p['tool']}/index.html"
    src = open(f, encoding='utf-8').read()
    for m in re.finditer(r'<script type="application/ld\+json"([^>]*)>(.*?)</script>', src, re.S):
        body = m.group(2).replace('\\/', '/')
        try:
            d = json.loads(body)
            assert isinstance(d, dict)
        except Exception as e:
            bad.append((f, 'jsonld', str(e)[:60]))
    if 'data-ta-schema="howto1"' in src: howto_n += 1
    else: bad.append((f, 'no-howto1'))
    if 'data-ta-schema="rating1"' in src: widget_n += 1
    else: bad.append((f, 'no-rating1'))
    if 'src="/shared/ratings.js"' in src: inc_n += 1
    else: bad.append((f, 'no-include'))
    # dangling guide link check: guide URL cited must exist
    for gu in re.findall(r'/guides/([a-z0-9-]+)/', src):
        if not os.path.isfile(f'guides/{gu}/index.html'):
            bad.append((f, 'dangling-guide:' + gu))
print(json.dumps({'checked': len(pairs), 'howto1': howto_n, 'rating1': widget_n,
                  'include': inc_n, 'bad': bad[:20], 'bad_count': len(bad)}, indent=1))
