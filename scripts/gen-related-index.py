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

    # --- Wave-6a: reference tables + convert pair siblings -----------------
    # reference/<slug> tables relevant to specific tool pages
    REF_MAP = {
        'unit-converter': ['common-conversions-cheat-sheet'],
        'percentage-calculator': ['common-conversions-cheat-sheet',
                                  'fraction-decimal-percent-chart'],
        'fraction-calculator': ['fraction-decimal-percent-chart'],
        'scientific-calculator': ['common-conversions-cheat-sheet',
                                  'fraction-decimal-percent-chart'],
        'roman-numeral-converter': ['roman-numerals-chart'],
        'binary-converter': ['ascii-codes-table'],
        'curl-converter': ['http-status-codes'],
    }
    for slug, refs in REF_MAP.items():
        if not os.path.isdir(os.path.join(ROOT, slug)):
            continue
        existing = index.setdefault(slug, [])
        for r in refs:
            p = 'reference/' + r
            if os.path.isdir(os.path.join(ROOT, p)) and p not in existing:
                existing.append(p)

    # unit-converter gets every convert/<pair> page as a sibling
    pairs = []
    cdir = os.path.join(ROOT, 'convert')
    if os.path.isdir(cdir):
        for d in sorted(os.listdir(cdir)):
            if os.path.isdir(os.path.join(cdir, d)):
                pairs.append('convert/' + d)
    if pairs and os.path.isdir(os.path.join(ROOT, 'unit-converter')):
        existing = index.setdefault('unit-converter', [])
        keep = existing[:6]  # a few hub siblings, then the convert lane links
        for p in pairs:
            if p not in keep:
                keep.append(p)
        keep.append('reference/common-conversions-cheat-sheet')
        index['unit-converter'] = keep

    # each convert/<pair> page gets sibling pairs sharing a unit word
    if os.path.isdir(cdir):
        for p in pairs:
            name = p.split('/', 1)[1]
            words = set(name.split('-')) - {'to', 'per', 'second'}
            sibs = []
            for q in pairs:
                if q == p:
                    continue
                qname = q.split('/', 1)[1]
                if words & (set(qname.split('-')) - {'to', 'per', 'second'}):
                    sibs.append(q)
            idx_p = p
            entry = index.setdefault(idx_p, [])
            for s in sibs[:8]:
                if s not in entry:
                    entry.append(s)
            if 'unit-converter' not in entry:
                entry.append('unit-converter')
            if 'reference/common-conversions-cheat-sheet' not in entry:
                entry.append('reference/common-conversions-cheat-sheet')
    # -----------------------------------------------------------------------

    out = os.path.join(ROOT, 'shared', 'related-index.json')
    with open(out, 'w') as f:
        json.dump(index, f, separators=(',', ':'))
    print(f'related-index.json: {len(index)} tools, avg {sum(len(v) for v in index.values())/max(1,len(index)):.1f} siblings')


if __name__ == '__main__':
    main()
