#!/usr/bin/env python3
"""SEO wave: BreadcrumbList JSON-LD + visible breadcrumb trail on pages missing them,
plus hub cross-link strengthening. Idempotent: skips pages carrying data-ta-schema="bc1".
"""
import glob, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

HUB_NAMES = {
    'finance-tools': 'Finance Calculators', 'developer-tools': 'Developer Tools',
    'auto-tools': 'Auto Calculators', 'pet-tools': 'Pet Calculators',
    'everyday-tools': 'Everyday Tools', 'legal-tools': 'Legal Calculators',
    'business-tools': 'Business Tools', 'insurance-tools': 'Insurance Calculators',
    'health-calculators': 'Health Calculators', 'contractor-tools': 'Contractor Calculators',
    'image-tools': 'Image Tools', 'creator-tools': 'Creator Tools',
    'text-tools': 'Text Tools', 'converters': 'Converters', 'guides': 'Guides',
    'all-tools': 'All Tools', 'pet-names': 'Pet Names', 'gift-ideas': 'Gift Ideas',
    'anniversary-gifts-by-year': 'Anniversary Gifts by Year', 'stock-media': 'Stock Media',
    'time-zones': 'Time Zones', 'countdown-to': 'Countdown To', 'convert': 'Convert',
    'salary-by-state': 'Salary By State', 'roadmap': 'Roadmap', 'embed': 'Embed',
}
HUBS = [h for h in HUB_NAMES if os.path.isfile(f'{h}/index.html')]
# priority for ambiguity: specific hubs before all-tools
SPECIFICITY = ['contractor-tools','pet-tools','legal-tools','insurance-tools','health-calculators',
               'finance-tools','business-tools','auto-tools','creator-tools','image-tools',
               'text-tools','developer-tools','everyday-tools','converters','guides','all-tools']

def title_of(slug, html):
    m = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.S)
    if m:
        t = re.sub(r'<[^>]+>', '', m.group(1)).strip()
        if t: return t
    m = re.search(r'<title>(.*?)</title>', html, re.S)
    if m:
        t = m.group(1)
        t = re.split(r'\s*[|·—-]\s*ToolAspect', t)[0].strip()
        if t: return t
    return slug.replace('-', ' ').title()

def name_case(slug):
    return HUB_NAMES.get(slug, slug.replace('-', ' ').title())

# ---- build hub assignment maps ----
pairs = {}  # slug -> hub from existing breadcrumbs
hub_links = {}  # hub -> set of slugs linked on hub page
for p in glob.glob('*/index.html'):
    slug = p.split('/')[0]
    s = open(p, encoding='utf-8', errors='ignore').read()
    m = re.search(r'position":2,"name":"[^"]+","item":"https://toolaspect\.com/([a-z-]+)/', s)
    if m and m.group(1) != slug:
        pairs[slug] = m.group(1)

for h in HUBS:
    s = open(f'{h}/index.html', encoding='utf-8', errors='ignore').read()
    hub_links[h] = set(re.findall(r'href="(?:https://toolaspect\.com)?/([a-z0-9-]+)/?"', s))

# reverse membership from hub page links (excluding all-tools, which links everything)
rev = {}
for h, links in hub_links.items():
    if h == 'all-tools':
        continue
    for l in links:
        if l in HUB_NAMES or l == '':
            continue
        rev.setdefault(l, []).append(h)

def hub_for(slug):
    if slug in pairs:
        return pairs[slug]
    cands = [h for h in rev.get(slug, []) if h in SPECIFICITY]
    if cands:
        cands.sort(key=lambda h: SPECIFICITY.index(h))
        return cands[0]
    return 'all-tools'

# ---- wave 1: breadcrumbs ----
BC_STYLE = ('font-size:.8rem;color:var(--text-secondary,#9ca3af);padding:10px 0 0;'
            'margin:0;line-height:1.4')
A_STYLE = 'color:inherit;text-decoration:none'

def visible_trail(items):
    parts = []
    for name, url in items[:-1]:
        parts.append(f'<a href="{url}" style="{A_STYLE}">{name}</a>')
    parts.append(f'<span style="color:var(--text,#e4e4e7)">{items[-1][0]}</span>')
    return ('<nav class="bc-trail" aria-label="Breadcrumb" data-ta-schema="bc1" '
            f'style="{BC_STYLE}">' + ' <span aria-hidden="true">›</span> '.join(parts) + '</nav>')

added_bc, skipped = [], 0
missing = [p for p in sorted(glob.glob('*/index.html'))
           if 'BreadcrumbList' not in open(p, encoding='utf-8', errors='ignore').read()]
for p in missing:
    slug = p.split('/')[0]
    html = open(p, encoding='utf-8', errors='ignore').read()
    if 'data-ta-schema="bc1"' in html:
        skipped += 1
        continue
    title = title_of(slug, html)
    if slug in HUBS:
        items = [('Home', '/'), (name_case(slug), f'/{slug}/')]
    else:
        hub = hub_for(slug)
        items = [('Home', '/'), (name_case(hub), f'/{hub}/'), (title, f'/{slug}/')]
    ld = {"@context": "https://schema.org", "@type": "BreadcrumbList",
          "itemListElement": [
              {"@type": "ListItem", "position": i + 1, "name": n,
               "item": f"https://toolaspect.com{u}"}
              for i, (n, u) in enumerate(items)]}
    ld_s = json.dumps(ld, separators=(',', ':'))
    script = (f'<script type="application/ld+json" data-ta-schema="bc1">\n{ld_s}\n</script>\n')
    # insert JSON-LD before </head>
    html = html.replace('</head>', script + '</head>', 1)
    # visible trail: after <div class="container"> if present, else after first <body ...> line
    trail = visible_trail(items)
    m = re.search(r'<div class="container">', html)
    if m:
        html = html[:m.end()] + '\n' + trail + html[m.end():]
    else:
        m = re.search(r'<body[^>]*>', html)
        if m:
            html = html[:m.end()] + '\n' + trail + html[m.end():]
        else:
            print("NO INSERT POINT:", p)
            continue
    open(p, 'w', encoding='utf-8').write(html)
    added_bc.append(slug)

print(f"breadcrumbs added: {len(added_bc)} (skipped-idempotent: {skipped})")

# ---- wave 2: hub cross-links ----
# members per hub from breadcrumb pairs (now incl. new ones)
pairs2 = {}
for p in glob.glob('*/index.html'):
    slug = p.split('/')[0]
    if slug in HUBS:
        continue
    s = open(p, encoding='utf-8', errors='ignore').read()
    m = re.search(r'position":2,"name":"[^"]+","item":"https://toolaspect\.com/([a-z-]+)/', s)
    if m and m.group(1) != slug:
        pairs2[slug] = m.group(1)

from collections import defaultdict
members = defaultdict(list)
for slug, h in pairs2.items():
    if h != 'all-tools':
        members[h].append(slug)

xlinks = 0
for h, mem in sorted(members.items()):
    if h not in HUBS or h == 'guides':
        continue
    hp = f'{h}/index.html'
    html = open(hp, encoding='utf-8', errors='ignore').read()
    linked = set(re.findall(r'href="(?:https://toolaspect\.com)?/([a-z0-9-]+)/?"', html))
    # strongest members: those that already had breadcrumbs longest (proxy: pair order) —
    # rank by keyword relevance to hub name, then take up to 20 not yet linked
    def score(s):
        hw = set(re.split(r'[- ]', HUB_NAMES[h].lower())) - {'tools', 'calculators'}
        sw = set(s.split('-'))
        return -len(hw & sw)
    unlinked = sorted([s for s in mem if s not in linked and os.path.isdir(s)],
                      key=lambda s: (score(s), s))
    if not unlinked:
        continue
    take = unlinked[:20]
    lis = ''.join(
        f'<li style="margin:4px 0"><a href="/{s}/">{title_of(s, open(f"{s}/index.html", encoding="utf-8", errors="ignore").read())}</a></li>'
        for s in take)
    block = (f'<div class="wrap" data-ta-schema="bcx1"><h2 style="font-size:1.05rem;margin:1.2rem 0 .5rem">More {HUB_NAMES[h]}</h2>'
             f'<ul style="columns:2;list-style:none;padding:0">{lis}</ul></div>\n')
    html = html.replace('</body>', block + '</body>', 1)
    open(hp, 'w', encoding='utf-8').write(html)
    xlinks += len(take)
    print(f"hub {h}: +{len(take)} links ({', '.join(take[:5])}...)")

print(f"hub cross-links added: {xlinks}")
json.dump({'breadcrumbs': added_bc, 'xlinks': xlinks}, open('/tmp/wave_result.json', 'w'))
