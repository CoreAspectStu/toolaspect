#!/usr/bin/env python3
"""SEO hub-depth wave-2: expand 'More {Hub}' blocks (bcx1) on thin hubs to 15 links,
plus traffic-weighted sibling link injection (bcx2) into related-tools lists.
Links only — no new tools/guides. Idempotent.
"""
import glob, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

HUB_NAMES = {
    'finance-tools': 'Finance Calculators', 'business-tools': 'Business Tools',
    'legal-tools': 'Legal Calculators', 'insurance-tools': 'Insurance Calculators',
    'health-calculators': 'Health Calculators', 'contractor-tools': 'Contractor Calculators',
}
TARGET = 15

traffic = json.load(open('/tmp/cf_traffic.json')) if os.path.exists('/tmp/cf_traffic.json') else {}

# ---- hub membership from BreadcrumbList assignments ----
pairs = {}
for p in glob.glob('*/index.html'):
    slug = p.split('/')[0]
    s = open(p, encoding='utf-8', errors='ignore').read()
    m = re.search(r'position":2,"name":"[^"]+","item":"https://toolaspect\.com/([a-z-]+)/', s)
    if m and m.group(1) != slug:
        pairs[slug] = m.group(1)

def title_of(slug):
    p = f'{slug}/index.html'
    if not os.path.isfile(p): return slug.replace('-', ' ').title()
    s = open(p, encoding='utf-8', errors='ignore').read()
    m = re.search(r'<h1[^>]*>(.*?)</h1>', s, re.S)
    if m:
        t = re.sub(r'<[^>]+>', '', m.group(1)).strip()
        if t: return t
    m = re.search(r'<title>(.*?)</title>', s, re.S)
    if m:
        t = re.split(r'\s*[|·—-]\s*ToolAspect', m.group(1))[0].strip()
        if t: return t
    return slug.replace('-', ' ').title()

def short_name(slug):
    t = title_of(slug)
    t = re.sub(r'\s*Calculator.*$', '', t, flags=re.I).strip() or t
    return t

hub_added = {}
# ---- Task A: expand / create bcx1 blocks ----
for hub, nice in HUB_NAMES.items():
    hp = f'{hub}/index.html'
    html = open(hp, encoding='utf-8', errors='ignore').read()
    m = re.search(r'(<div class="wrap" data-ta-schema="bcx1">.*?</div></div>|<div class="wrap" data-ta-schema="bcx1">.*?</ul></div>)', html, re.S)
    block = None
    if m:
        block = m.group(0)
    if block:
        in_block = set(re.findall(r'href="/([a-z0-9-]+)/"', block))
    else:
        in_block = set()
    members = [s for s, h in pairs.items() if h == hub and os.path.isdir(s)]
    def rank(s):
        return (-traffic.get(f'/{s}/', 0), s)
    cands = sorted([s for s in members if s not in in_block], key=rank)
    take = cands[:TARGET - len(in_block)]
    if not take:
        hub_added[hub] = 0
        continue
    lis = ''.join(
        f'<li style="margin:4px 0"><a href="/{s}/">{title_of(s)}</a></li>'
        for s in take)
    if block:
        new_block = block.replace('</ul>', lis + '</ul>')
        html = html.replace(block, new_block, 1)
    else:
        new_block = (f'<div class="wrap" data-ta-schema="bcx1"><h2 style="font-size:1.05rem;margin:1.2rem 0 .5rem">More {nice}</h2>'
                     f'<ul style="columns:2;list-style:none;padding:0">{lis}</ul></div>\n')
        html = html.replace('</body>', new_block + '</body>', 1)
    open(hp, 'w', encoding='utf-8').write(html)
    hub_added[hub] = len(take)
    print(f'hub {hub}: +{len(take)} in bcx1 block ({", ".join(take[:6])}...)')

# ---- Task B: traffic-weighted sibling injection (bcx2), capped at 30 links ----
INJECT = {
    'fafsa-sai-calculator': ['llc-vs-scorp-calculator', 'college-roi-calculator', 'mortgage-calculator', 'college-cost-calculator'],
    'llc-vs-scorp-calculator': ['fafsa-sai-calculator', 'college-roi-calculator', 'mortgage-calculator', 'college-cost-calculator'],
    'bac-calculator': ['calorie-deficit-calculator'],
    'mortgage-calculator': ['fafsa-sai-calculator', 'llc-vs-scorp-calculator', 'college-roi-calculator'],
    'car-wrap-cost-calculator': ['ev-battery-replacement-cost-calculator', 'auto-loan-calculator', 'state-vehicle-inspection-cost-calculator'],
    'college-roi-calculator': ['fafsa-sai-calculator', 'llc-vs-scorp-calculator', 'mortgage-calculator'],
    'ev-battery-replacement-cost-calculator': ['car-wrap-cost-calculator', 'auto-loan-calculator', 'state-vehicle-inspection-cost-calculator'],
    'auto-loan-calculator': ['car-wrap-cost-calculator', 'ev-battery-replacement-cost-calculator', 'state-vehicle-inspection-cost-calculator'],
    'calorie-deficit-calculator': ['bac-calculator'],
    'state-vehicle-inspection-cost-calculator': ['car-wrap-cost-calculator', 'ev-battery-replacement-cost-calculator', 'auto-loan-calculator'],
    'trade-school-cost-calculator': ['fafsa-sai-calculator', 'llc-vs-scorp-calculator'],
}
injected = {}
total = 0
for slug, sibs in INJECT.items():
    p = f'{slug}/index.html'
    html = open(p, encoding='utf-8', errors='ignore').read()
    # only inside the related-tools block's first <ul>
    m = re.search(r'(<div class="related-tools">.*?<ul[^>]*>)(.*?)(</ul>)', html, re.S)
    if not m:
        print(f'NO related-tools ul: {slug}'); continue
    existing = set(re.findall(r'href="/([a-z0-9-]+)/"', m.group(0)))
    todo = [s for s in sibs if s not in existing and os.path.isdir(s)]
    if not todo:
        injected[slug] = 0; continue
    lis = ''.join(
        f'<li style="margin:4px 0" data-ta-schema="bcx2"><a href="/{s}/">{short_name(s)}</a></li>'
        for s in todo)
    new_html = html[:m.end(2)] + lis + html[m.end(2):]
    open(p, 'w', encoding='utf-8').write(new_html)
    injected[slug] = len(todo); total += len(todo)
    print(f'{slug}: +{len(todo)} bcx2 links ({", ".join(todo)})')

print(f'TOTAL injected: {total}')
json.dump({'hub_added': hub_added, 'injected': injected, 'total': total},
          open('/tmp/wave2_result.json', 'w'))
