#!/usr/bin/env python3
"""Generate shared/related-index.json — {slug: [sibling slugs]} from category hubs.

Only includes slugs that exist as directories, capped per tool. Deploy-time step.
"""
import os, re, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
HUBS = ['auto-tools', 'business-tools', 'contractor-tools', 'converters',
        'creator-tools', 'developer-tools', 'everyday-tools', 'finance-tools',
        'health-calculators', 'image-tools', 'insurance-tools', 'legal-tools',
        'pet-tools', 'text-tools']
CAP = 12
EXCLUDE = set(HUBS) | {'guides', 'all-tools', 'about', 'contact', 'roadmap',
                       'editorial-policy', 'partners', 'embed', 'convert',
                       'conversion-tables', 'stock-media', 'youtube', 'boosty',
                       'loyalfans', 'best-free-online-tools-2026', 'device-test'}


def main():
    index = {}
    for h in HUBS:
        f = os.path.join(ROOT, h, 'index.html')
        if not os.path.exists(f):
            continue
        html = open(f, encoding='utf-8', errors='ignore').read()
        slugs = []
        for s in re.findall(r'href="/([a-z0-9-]+)/"', html):
            if s and s not in slugs and s != h and s not in EXCLUDE and os.path.isdir(os.path.join(ROOT, s)):
                slugs.append(s)
        for s in slugs:
            sibs = [x for x in slugs if x != s]
            existing = index.get(s, [])
            for x in sibs:
                if x not in existing:
                    existing.append(x)
            index[s] = existing
    # cap
    for s in index:
        index[s] = index[s][:CAP]
    out = os.path.join(ROOT, 'shared', 'related-index.json')
    with open(out, 'w') as f:
        json.dump(index, f, separators=(',', ':'))
    print(f'related-index.json: {len(index)} tools, avg {sum(len(v) for v in index.values())/max(1,len(index)):.1f} siblings')


if __name__ == '__main__':
    main()
