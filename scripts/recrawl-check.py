#!/usr/bin/env python3
"""Post-Roof-wave recrawl check: crawler request counts before vs after Nov-9
waves. Uses datetime minute dimension (rollup done client-side)."""
import json, re, subprocess, collections
sec = open('/home/stu/.secrets').read()
tok = re.search(r'export CLOUDFLARE_ZONE_ANALYTICS_TOKEN="?([^"\n]+)"?', sec).group(1)
BOTS = ('Googlebot','Bingbot','GPTBot','ClaudeBot','Applebot','Slurp',
        'DuckDuckBot','CCBot','PerplexityBot','Bytespider','Amazonbot')
def pull(start, end):
    q = {"query": '{ viewer { zones(filter:{zoneTag:"2b7ef430522873db9383b5c97d6446c9"}) {'
        ' httpRequestsAdaptiveGroups(limit:10000, filter:{datetime_geq:"%s", datetime_lt:"%s"})'
        ' { dimensions { datetime userAgent } count } } } }' % (start, end)}
    r = subprocess.run(['curl','-s','--max-time','60','https://api.cloudflare.com/client/v4/graphql',
        '-H','Authorization: Bearer '+tok,'-H','Content-Type: application/json','-d',json.dumps(q)],
        capture_output=True, text=True).stdout
    d = json.loads(r)
    if d.get('errors'): print('CF errors:', d['errors'][:1]); return collections.Counter(), {}
    groups = d['data']['viewer']['zones'][0]['httpRequestsAdaptiveGroups']
    tot = collections.Counter(); byday = collections.defaultdict(collections.Counter)
    for g in groups:
        ua = (g['dimensions']['userAgent'] or '?').lower()
        for b in BOTS:
            if b.lower() in ua:
                tot[b] += g['count']
                byday[b][g['dimensions']['datetime'][:10]] += g['count']
                break
    return tot, byday
if __name__ == "__main__":
    c0, _ = pull('2026-11-02T00:00:00Z', '2026-11-09T00:00:00Z')
    c1, d1 = pull('2026-11-09T00:00:00Z', '2026-11-12T00:00:00Z')
    print("BEFORE Nov2-8 :", dict(c0))
    print("AFTER  Nov9-11:", dict(c1))
    for b in ('Googlebot','Bingbot','GPTBot','ClaudeBot'):
        if b in d1: print(b, 'after by day:', dict(sorted(d1[b].items())))
