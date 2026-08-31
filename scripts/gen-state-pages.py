#!/usr/bin/env python3
"""Generate <hub>/<state>/ pages from scripts/state-data/*.json (salary-by-state pattern)."""
import json, glob, os, datetime
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
BASE = "https://toolaspect.com"
TODAY = datetime.date.today()
YEAR = TODAY.year

STATES = {
 'al':'Alabama','ak':'Alaska','az':'Arizona','ar':'Arkansas','ca':'California','co':'Colorado',
 'ct':'Connecticut','de':'Delaware','fl':'Florida','ga':'Georgia','hi':'Hawaii','id':'Idaho',
 'il':'Illinois','in':'Indiana','ia':'Iowa','ks':'Kansas','ky':'Kentucky','la':'Louisiana',
 'me':'Maine','md':'Maryland','ma':'Massachusetts','mi':'Michigan','mn':'Minnesota','ms':'Mississippi',
 'mo':'Missouri','mt':'Montana','ne':'Nebraska','nv':'Nevada','nh':'New Hampshire','nj':'New Jersey',
 'nm':'New Mexico','ny':'New York','nc':'North Carolina','nd':'North Dakota','oh':'Ohio','ok':'Oklahoma',
 'or':'Oregon','pa':'Pennsylvania','ri':'Rhode Island','sc':'South Carolina','sd':'South Dakota',
 'tn':'Tennessee','tx':'Texas','ut':'Utah','vt':'Vermont','va':'Virginia','wa':'Washington',
 'wv':'West Virginia','wi':'Wisconsin','wy':'Wyoming','dc':'District of Columbia',
}
_CODE = {v.lower(): k for k, v in STATES.items()}
_CODE.update({n.replace(' ', '-'): c for n, c in
              [('new hampshire','nh'),('new jersey','nj'),('new mexico','nm'),('new york','ny'),
               ('north carolina','nc'),('north dakota','nd'),('rhode island','ri'),
               ('south carolina','sc'),('south dakota','sd'),('west virginia','wv'),('district of columbia','dc')]})

CSS = """
:root{--bg:#0b0e14;--panel:#111524;--text:#e7eaf2;--muted:#8b93a7;--accent:#5eead4;--border:#1e2438}
*{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,sans-serif;background:var(--bg);color:var(--text);line-height:1.6}
.wrap{max-width:860px;margin:0 auto;padding:1.5rem 1rem 4rem}
h1{font-size:1.6rem;margin:.2rem 0 .4rem}h2{font-size:1.1rem;margin:1.8rem 0 .5rem;color:var(--accent)}
.sub{color:var(--muted);margin:0 0 1.2rem}
table{width:100%;border-collapse:collapse;margin:.6rem 0}
th,td{padding:8px 10px;border:1px solid var(--border);text-align:left;font-size:.92rem}
th{background:var(--panel)}
.hero{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:1.2rem;margin:1rem 0}
.big{font-size:1.9rem;font-weight:700;color:var(--accent)}
.pill{display:inline-block;background:#16a34a18;color:#4ade80;border-radius:999px;padding:2px 10px;font-size:.8rem}
.pill.down{background:#dc262618;color:#f87171}
a{color:var(--accent)}
ul.links{columns:2;list-style:none;padding:0}ul.links li{padding:3px 0}
@media(max-width:640px){ul.links{columns:1}}
footer{margin-top:2.5rem;color:var(--muted);font-size:.8rem;border-top:1px solid var(--border);padding-top:1rem}
"""

def primary(v):
    """Extract the headline figure from a state value (int or dict)."""
    if isinstance(v, (int, float)):
        return float(v)
    for k in ("avg", "full", "project", "per_ft", "high", "low"):
        if k in v:
            return float(v[k])
    return float(next(iter(v.values())))

def money(v):
    return f"${v:,.0f}"

def state_page(cfg, code, val, sibs):
    name = STATES[code]
    val = primary(val)
    national = primary(cfg["national"])
    diff = (val - national) / national * 100
    cls = "pill down" if diff > 0 else "pill"
    word = "above" if diff > 0 else "below"
    q1 = f"What does {cfg['title'].lower()} cost in {name}?"
    a1 = f"The typical figure in {name} is {money(val)} for {cfg['metric_label'].lower()}, compared to a national average of {money(national)} — about {abs(diff):.0f}% {word} average."
    q2 = f"How does {name} compare to the national average?"
    a2 = a1
    faq = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
        {"@type":"Question","name":q1,"acceptedAnswer":{"@type":"Answer","text":a1}},
        {"@type":"Question","name":q2,"acceptedAnswer":{"@type":"Answer","text":a2}},
        {"@type":"Question","name":"When were these figures updated?","acceptedAnswer":{"@type":"Answer","text":f"These {cfg['title'].lower()} figures reflect {YEAR} data from {cfg['source']}."}}]}
    col = cfg["title"].replace("Cost by State","").replace(" by State","").strip()
    return f"""<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{cfg['title']} in {name} ({YEAR}) — Average {col} Costs | ToolAspect</title>
<meta name="description" content="{cfg['title']} in {name}: typical cost is {money(val)} vs the national average of {money(national)}. See how {name} compares, with the full 50-state table and a free calculator.">
<link rel="canonical" href="{BASE}/{cfg['hub']}/{code}/">
<script type="application/ld+json">{json.dumps(faq)}</script>
<script src="/shared/domain-redirect.js"></script><script src="/shared/nav.js" defer></script>
<style>{CSS}</style></head><body><div class="wrap">
<h1>{cfg['title']} in {name} ({YEAR})</h1>
<p class="sub">{cfg['metric_label']} — how {name} stacks up against all 50 states.</p>
<div class="hero">
  <div>{name} average</div><div class="big">{money(val)}</div>
  <span class="{cls}">{abs(diff):.0f}% {word} the national average of {money(national)}</span>
</div>
<h2>{name} vs national average</h2>
<table><tr><th>Metric</th><th>{name}</th><th>National average</th></tr>
<tr><td>{cfg['metric_label']}</td><td><b>{money(val)}</b></td><td>{money(national)}</td></tr></table>
<h2>Estimate your own numbers</h2>
<p>Use the free <a href="/{cfg['tool']}/">{col.lower()} calculator</a> to plug in your own situation — these state averages are a starting point, not a quote.</p>
<h2>{cfg['title']} — all 50 states</h2>
<ul class="links">{''.join(f'<li><a href="/{cfg["hub"]}/{c}/">{STATES[c]}</a></li>' for c in sorted(STATES) if c in cfg_states)}</ul>
<h2>Related by-state guides</h2>
<ul class="links">{''.join(f'<li><a href="/{s}/">{s.replace("-"," ").title()}</a></li>' for s in sibs)}</ul>
<p>More: <a href="/guides/">guides</a> · <a href="/all-tools/">all tools</a> · <a href="/{cfg["hub"]}/">{cfg["title"]} hub</a></p>
<footer>Data: <a href="{cfg['source_url']}" rel="nofollow">{cfg['source']}</a> · Updated {TODAY.isoformat()} · Part of <a href="/">ToolAspect</a>, 2,000+ free tools.</footer>
</div></body></html>"""

def hub_page(cfg):
    nat = primary(cfg["national"])
    rows = "".join(f"<tr><td>{STATES[c]}</td><td>{money(primary(v))}</td><td>{'+' if primary(v)>nat else ''}{(primary(v)-nat)/nat*100:.0f}%</td></tr>"
                   for c, v in sorted(cfg["states"].items(), key=lambda kv: primary(kv[1])) if c in STATES)
    return f"""<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{cfg['title']} ({YEAR}) — All 50 States Ranked | ToolAspect</title>
<meta name="description" content="{cfg['title']} ranked for all 50 states, {YEAR}. National average {money(nat)}. Click any state for details and a free calculator.">
<link rel="canonical" href="{BASE}/{cfg['hub']}/">
<script src="/shared/domain-redirect.js"></script><script src="/shared/nav.js" defer></script>
<style>{CSS}</style></head><body><div class="wrap">
<h1>{cfg['title']} ({YEAR})</h1>
<p class="sub">{cfg['metric_label']}. National average: <b>{money(nat)}</b>. Updated {TODAY.isoformat()}.</p>
<h2>All 50 states, cheapest to most expensive</h2>
<table><tr><th>State</th><th>Average</th><th>vs national</th></tr>{rows}</table>
<p>Free tool: <a href="/{cfg['tool']}/">{cfg['title'].replace(' by State','').replace('Cost by State','')} calculator</a> · <a href="/all-tools/">all tools</a></p>
<footer>Data: <a href="{cfg['source_url']}" rel="nofollow">{cfg['source']}</a> · Part of <a href="/">ToolAspect</a>.</footer>
</div></body></html>"""

hub_dirs = []
for f in sorted(glob.glob(str(REPO / "scripts/state-data/*.json"))):
    cfg = json.load(open(f))
    cfg_states = cfg["states"]
    hub = REPO / cfg["hub"]
    hub.mkdir(exist_ok=True)
    others = [json.load(open(x))["hub"] for x in glob.glob(str(REPO / "scripts/state-data/*.json")) if x != f]
    (hub / "index.html").write_text(hub_page(cfg))
    n = 0
    for key, val in cfg_states.items():
        code = key if len(key) == 2 else _CODE.get(key.lower())
        if code is None or code not in STATES: continue
        sibs = [o for o in others if (REPO / o).exists()][:2]
        (hub / code).mkdir(exist_ok=True)
        (hub / code / "index.html").write_text(state_page(cfg, code, val, sibs))
        n += 1
    hub_dirs.append(cfg["hub"])
    print(f"{cfg['hub']}: 1 hub + {n} state pages")

print(f"DONE: {len(hub_dirs)} hubs")
