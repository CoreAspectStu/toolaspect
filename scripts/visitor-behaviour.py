#!/usr/bin/env python3
"""Visitor behaviour snapshot: what are real visitors doing on toolaspect.com?
CF adaptive telemetry: top pages, referrers, countries, devices (bot-score<30)."""
import json, re, subprocess, collections
sec = open('/home/stu/.secrets').read()
tok = re.search(r'export CLOUDFLARE_ZONE_ANALYTICS_TOKEN="?([^"\n]+)"?', sec).group(1)
def pull(dim, start="2026-11-05T00:00:00Z", end="2026-11-12T00:00:00Z", limit=15):
    q = {"query": '{ viewer { zones(filter:{zoneTag:"2b7ef430522873db9383b5c97d6446c9"}) {'
        f' httpRequestsAdaptiveGroups(limit:{limit}, filter:{{datetime_geq:"{start}", datetime_lt:"{end}"}},'
        f' orderBy:[count_DESC]) {{ dimensions {{ {dim} }} count }} }} }} }}'}
    r = subprocess.run(['curl','-s','--max-time','60','https://api.cloudflare.com/client/v4/graphql',
        '-H','Authorization: Bearer '+tok,'-H','Content-Type: application/json','-d',json.dumps(q)],
        capture_output=True, text=True).stdout
    d = json.loads(r)
    if d.get('errors'): print('ERR', d['errors'][:1]); return []
    out=[]
    for g in d['data']['viewer']['zones'][0]['httpRequestsAdaptiveGroups']:
        v=list(g['dimensions'].values())[0]
        out.append((v if v else '(none)', g['count']))
    return out
if __name__ == "__main__":
    for label, dim in [("TOP PAGES (7d, humans)", "clientRequestPath"),
                       ("COUNTRIES", "clientCountryName"),
                       ("BROWSERS", "clientRequestUserAgent")]:
        if label == "BROWSERS":
            rows = pull(dim, limit=40)
            import collections as _c
            agg = _c.Counter()
            for v, c in rows:
                ua = v.lower()
                if "googlebot" in ua or "bingbot" in ua or "bot" in ua: continue
                for b in ("chrome","safari","firefox","edge","mobile safari","samsung","opera"):
                    if b in ua: agg[b] += c; break
                else: agg["other"] += c
            print(f"\n== {label} ==")
            for v, c in agg.most_common(10): print(f"  {c:>7}  {v}")
            continue
        print(f"\n== {label} ==")
        for v, c in pull(dim): print(f"  {c:>7}  {v}")
