#!/usr/bin/env python3
"""Regenerate /all-tools/ — the FULL indexed directory mirror of every tool,
guide and converter group for crawlers. NO scores, NO pending/schedule data
(that private stuff lives on /roadmap/, which stays deindexed).
Categorized, alphabetical, plain links. Run in deploy.sh (replaces stale page).
"""
import os, re, glob, datetime
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
BASE = "https://toolaspect.com"
TODAY = datetime.date.today().isoformat()

HUBS = {'roadmap','embed','guides','all-tools','convert','converters','best-free-online-tools-2026',
        'account','about','contact','privacy','terms','disclaimer','blog','okf-policy'}

def cat_of(slug):
    if "watermark" in slug: return "Documents & Images"  # before Health tuple: water- matches watermark
    for k, c in [
        (("bmi","calorie","pregnan","macro","body","bmr","water","weight","due-date","ovulation","health","a1c","heart"),"Health"),
        (("mortgage","loan","tax","interest","401k","ira","invest","retire","annuity","salary","paycheck","income","debt","credit","budget","saving","compound","amortiz","refinance","escrow","pmi","heloc","social-security","ssdi","alimony","settlement","legal","custody","copyright","infringement","damages","child-support","injury","workers","umbrella","disability","insurance"),"Finance, Insurance & Legal"),
        (("qr","barcode","invoice","estimate","quote","work-order","oee","mtbf","osha","jha","lockout","maintenance","toolbox","facility","equipment","downtime","depreciation","business","llm","ai-receptionist","recruiting"),"Business & Ops"),
        (("pdf","word-to","docx","excel-to","jpg-to","heic","image","favicon","background-remover","upscale","compress","watermark","crop","color","svg","bates","metadata-remover"),"Documents & Images"),
        (("json","xml","regex","base64","cron","uuid","color-picker","subnet","certificate","htaccess","robots","seo","meta","schema","sitemap","redirect","ssl","dns","header","api","hash","jwt","diff","format","minif","beautif","yaml","toml","csv","markdown","slug","text-case","lorem","word-count","readability","keyword","serp","backlink","utm","og-image","open-graph","twitter-card","llms","obfusc","phone-number","fake-name","fake-email","random-address","mock-data"),"Developer & SEO"),
        (("engagement","youtube","tiktok","instagram","social","creator","patreon","twitch","spotify","hashtag","thumbnail","aspect-ratio","content","influencer","boosty","rumble","sponsorship","podcast","newsletter","etsy","shopify","amazon","print-on-demand","kdp","merch","affiliate"),"Creator"),
        (("wedding","party","baby","pet","gift","anniversary","vacation","trip","travel","holiday","christmas","halloween","countdown","tdee","gpa","grade","study","homework","college","529","student","exam","sat","act"),"Life & Education"),
        (("auto","car","tire","mpg","fuel","gas","ev","hybrid","engine","vehicle","dealer","vin"),"Auto"),
        (("home","remodel","concrete","asphalt","deck","fence","lawn","garden","paint","roof","solar","hvac","furnace","ac ","water-heat","floor","window","door","insulation","foundation","landscap","gravel","mulch","sod","clean","moving","appliance"),"Home"),
    ]:
        if any(x in slug for x in k):
            return c
    return "Everyday Tools"

def title_of(d):
    idx = d / "index.html"
    if not idx.exists():
        return d.name.replace("-", " ").title()
    m = re.search(r"<title>([^<|]+)", idx.read_text(errors="ignore"))
    t = m.group(1).strip() if m else d.name
    t = re.sub(r"\s*—.*$|\s*-\s*ToolAspect.*$|\s*\|.*$", "", t).strip()
    t = re.sub(r"\s*Calculator\s*$", "", t).strip()
    return (t or d.name.replace("-", " ").title()).title()

# Collect tools
tools = {}
for p in REPO.glob("*/index.html"):
    slug = p.parent.name
    if slug in HUBS:
        continue
    tools[slug] = title_of(p.parent)

# Collect guides
guides = []
for p in (REPO / "guides").glob("*/index.html"):
    guides.append(p.parent.name)

n_convert = len(list((REPO / "convert").glob("*/index.html")))
cats = {}
for slug, title in tools.items():
    cats.setdefault(cat_of(slug), []).append((slug, title))

CAT_ORDER = ["Finance, Insurance & Legal", "Health", "Business & Ops", "Documents & Images",
             "Developer & SEO", "Creator", "Auto", "Home", "Life & Education", "Everyday Tools"]

sections = []
for c in CAT_ORDER:
    items = sorted(cats.get(c, []))
    if not items:
        continue
    cards = "\n".join(
        f'<a class="tc" href="/{s}/">{t}</a>' for s, t in items
    )
    sections.append(f"""
<section id="{c.lower().replace(',','').replace(' ','-').replace('&','and')}">
<h2>{c} <span class="n">({len(items)})</span></h2>
<div class="grid">{cards}</div>
</section>""")

guides_cards = "\n".join(
    f'<a class="tc" href="/guides/{g}/">{g.replace("-"," ").title()}</a>'
    for g in sorted(guides)
)

html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>All Tools — Complete Directory | ToolAspect</title>
<meta name="description" content="Complete directory of every free ToolAspect tool: {len(tools)} calculators and tools across finance, health, business, PDF, developer, creator and everyday categories. No signup.">
<link rel="canonical" href="{BASE}/all-tools/">
<meta property="og:title" content="All Tools — Complete Directory">
<meta property="og:description" content="Every free ToolAspect tool in one place — {len(tools)} tools, {n_convert} unit converters, plus in-depth guides.">
<meta property="og:url" content="{BASE}/all-tools/">
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"CollectionPage","name":"All Tools — Complete Directory","description":"Complete directory of every free ToolAspect tool.","url":"{BASE}/all-tools/","isPartOf":{{"@type":"WebSite","name":"ToolAspect","url":"{BASE}/"}}}}</script>
<script src="/shared/domain-redirect.js"></script>
<script src="/shared/auth.js" defer></script>
<style>
:root{{--bg:#0b0e14;--panel:#111524;--text:#e7eaf2;--muted:#8b93a7;--accent:#5eead4;--border:#1e2438}}
*{{box-sizing:border-box}}
body{{margin:0;font-family:system-ui,-apple-system,sans-serif;background:var(--bg);color:var(--text);line-height:1.5}}
.wrap{{max-width:1080px;margin:0 auto;padding:1.5rem 1rem 4rem}}
h1{{font-size:1.7rem;margin:.2rem 0}}
h2{{font-size:1.15rem;margin:2rem 0 .8rem;color:var(--accent)}}
.n{{color:var(--muted);font-weight:400;font-size:.85rem}}
.sub{{color:var(--muted);margin:0 0 1rem}}
.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px}}
.tc{{display:block;background:var(--panel);border:1px solid var(--border);border-radius:10px;padding:10px 12px;font-size:.88rem;color:var(--text);text-decoration:none}}
.tc:hover{{border-color:var(--accent)}}
.foot{{margin-top:3rem;color:var(--muted);font-size:.8rem}}
@media(max-width:640px){{.grid{{grid-template-columns:1fr 1fr}}.tc{{font-size:.8rem;padding:8px}}}}
</style>
</head>
<body>
<div class="wrap">
<h1>All Tools</h1>
<p class="sub">Every ToolAspect tool in one directory — {len(tools)} tools and {n_convert} unit converters, all free, no signup. Updated {TODAY}.</p>
{''.join(sections)}
<h2>Guides <span class="n">({len(guides)})</span></h2>
<div class="grid">{guides_cards}</div>
<p class="foot"><a href="/" style="color:var(--accent)">ToolAspect home</a> · <a href="/converters/" style="color:var(--accent)">All converters</a> · Updated automatically on every deploy.</p>
</div>
</body>
</html>"""

out = REPO / "all-tools" / "index.html"
out.write_text(html)
print(f"all-tools: {len(tools)} tools in {len([c for c in CAT_ORDER if cats.get(c)])} categories + {len(guides)} guides + {n_convert} converters noted")
