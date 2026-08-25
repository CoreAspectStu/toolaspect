#!/usr/bin/env python3
"""Generate /roadmap/ page: every tool + guide, categorised, with per-page quality scores
(SEO, AIO, content depth, internal links in/out, llm.txt coverage) and the pending
schedule with projected dates from the backlog. Run automatically via deploy.sh."""
import os, re, glob, json, datetime, html.parser

REPO = os.path.expanduser("~/projects/utility-sites")
BASE = "https://toolaspect.com"
TODAY = datetime.date.today()

# ── HTML title/desc grabber ──────────────────────────────────────────────
class Meta(html.parser.HTMLParser):
    def __init__(self):
        super().__init__(); self.t=""; self.d=""; self._m=None
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=="title" and not self.t: self._m="t"
        elif tag=="meta" and a.get("name")=="description": self.d=a.get("content") or ""
    def handle_data(self, data):
        if self._m=="t": self.t+=data
    def handle_endtag(self, tag):
        if tag=="title": self._m=None

def load(path):
    try: return open(path, encoding="utf-8", errors="ignore").read()
    except Exception: return ""

def first_date(slug):
    """First-commit date of a directory = ship date."""
    import subprocess
    try:
        out = subprocess.run(["git","log","--diff-filter=A","--format=%as","--",slug],
                             cwd=REPO, capture_output=True, text=True).stdout.strip().splitlines()
        return out[-1] if out else ""
    except Exception:
        return ""

# ── Category map ─────────────────────────────────────────────────────────
CATEGORY_DIRS = {
    "contractor-tools": ("Contractor & Construction", "Materials, concrete, framing — embeddable widget flagship"),
    "finance-tools": ("Finance", "Mortgages, loans, tax, salary, retirement"),
    "health-calculators": ("Health & Medical", "Fitness, pregnancy, medical costs"),
    "creator-tools": ("Creator Economy", "YouTube, TikTok, Twitch earnings"),
    "developer-tools": ("Developer", "Formatters, encoders, generators"),
    "everyday-tools": ("Everyday", "Counters, timers, converters"),
    "converters": ("Converters", "Units and currencies"),
}
def categorize(slug, h):
    for d,(name,_) in CATEGORY_DIRS.items():
        hub = load(os.path.join(REPO,d,"index.html"))
        if hub and f'/{slug}/' in hub: return d
    if "calculator" in slug and any(k in slug for k in ("mortgage","loan","tax","salary","insurance","debt","credit","retire","invest","pmi","heloc","refi","fha","va-","equity","closing","social-security","payroll","dti","amortiz","compound","savings","net-worth","roi","car-payment","income")): return "finance-tools"
    if any(k in slug for k in ("bmi","calorie","pregnan","macro","body","bmr","water","weight","due-date","ovulation","health","a1c","heart")): return "health-calculators"
    return "everyday-tools"

SKIP = {"guides","shared","docs","embed","convert","conversion-tables","time-zones",
        "salary-by-state","gift-ideas","pet-names","countdown-to","all-tools","roadmap",
        "_bmad-output","node_modules",".git",".wrangler","scripts"}

# ── Build the tool index with scores ─────────────────────────────────────
all_html = {}
tools = []
for d in sorted(os.listdir(REPO)):
    p = os.path.join(REPO, d, "index.html")
    if d.startswith((".", "_")) or d in SKIP or not os.path.isfile(p): continue
    h = load(p)
    all_html[d] = h
    m = Meta(); m.feed(h[:6000])
    body = h[h.find("<body"):] if "<body" in h else h
    words = len(re.sub(r"<[^>]+>"," ",body).split())
    title = re.sub(r"\s*[|–-]\s*(Free[^|]*\|)?\s*ToolAspect.*$","",m.t).strip() or d.replace("-"," ").title()
    desc = (m.d or "").split(".")[0][:140]
    has_table = "<table" in h
    has_faq_schema = "FAQPage" in h
    has_app_schema = "WebApplication" in h or "SoftwareApplication" in h
    n_jsonld = h.count("application/ld+json")
    ok_title = 15 <= len(m.t) <= 62
    ok_desc = 50 <= len(m.d or "") <= 160
    seo = sum([ok_title, ok_desc, n_jsonld>=2, has_app_schema]) * 25
    aio = sum([has_table, has_faq_schema, words>=900, len(re.findall(r"<h2",h))>=3]) * 25
    embed = os.path.exists(os.path.join(REPO,"embed",d+".js"))
    tools.append(dict(slug=d, title=title, desc=desc, words=words, seo=seo, aio=aio,
                      jsonld=n_jsonld, table=has_table, embed=embed, cat=categorize(d,h),
                      date=first_date(d)))

# internal inbound links per tool (grep all html for hrefs)
for t in tools:
    t["in"] = sum(1 for h in all_html.values() if f'/{t["slug"]}/' in h) - 1 if t["slug"] in all_html else 0
# guides linked to each tool
guide_dirs = [os.path.basename(os.path.dirname(g)) for g in glob.glob(os.path.join(REPO,"guides","*","index.html"))]
for t in tools:
    t["guide"] = next((g for g in guide_dirs if (t["slug"] or "").split("-calculator")[0].replace("-","") in g.replace("-","")), "")

# ── Coming soon: parse backlog waves in order ────────────────────────────
backlog = load(os.path.join(REPO,"docs","tool-backlog.md"))
pending = []
for line in backlog.splitlines():
    m = re.match(r"^([a-z0-9-]+) ?\| ?(\w+) ?\| ?([\w.-]+) ?\| ?\$?([\d.-]+) ?\| ?(.+)$", line)
    if m and not line.startswith("gh:"):
        slug, cat, typ, cpc, why = m.groups()
        if os.path.exists(os.path.join(REPO, slug)): continue
        pending.append(dict(slug=slug, cpc=cpc, why=why[:130], cat=cat))
BATCH = 10
for i, p in enumerate(pending[:24]):
    p["date"] = (TODAY + datetime.timedelta(days=1 + i//BATCH)).isoformat()

def chip(v, label):
    color = "#16a34a" if v>=75 else ("#d97706" if v>=50 else "#dc2626")
    return f'<span class="chip" title="{label}: {v}/100" style="background:{color}18;color:{color}">{label} {v}</span>'

def bar(v):
    color = "#16a34a" if v>=75 else ("#d97706" if v>=50 else "#dc2626")
    return f'<span class="bar"><i style="width:{v}%;background:{color}"></i></span>'

# ── Render ───────────────────────────────────────────────────────────────
sections = []
order = ["finance-tools","insurance","legal","health-calculators","contractor-tools",
         "creator-tools","developer-tools","everyday-tools","converters"]
bycat = {}
for t in tools: bycat.setdefault(t["cat"],[]).append(t)

jump = "".join(f'<a href="#{c}">{CATEGORY_DIRS.get(c,(c.title(),""))[0]}</a>' for c in order if bycat.get(c))
rows_out=[]
for cat in order:
    items = bycat.get(cat, [])
    if not items: continue
    name, sub = CATEGORY_DIRS.get(cat,(cat.title(),""))
    cards=[]
    for t in sorted(items, key=lambda x:-x["seo"]):
        status = f'<span class="st live">Live</span>'
        score = (t["seo"]+t["aio"])//2
        extras = []
        if t["embed"]: extras.append("Embed")
        if t["guide"]: extras.append("Guide↔")
        extra = "".join(f'<span class="tag">{e}</span>' for e in extras)
        meta_bits = [f"Live · {t['date'] or '—'}", f"{t['words']}w", f"{t['in']} in-links"]
        cards.append(f'''<div class="item">
  {status}<div class="body">
    <div class="title"><a href="{BASE}/{t['slug']}/">{html.escape(t['title'])}</a>{extra}</div>
    <div class="meta">{" · ".join(meta_bits)}</div>
    <div class="summary">{html.escape(t['desc'])}.</div>
    <div class="scores">{chip(t['seo'],"SEO")}{chip(t['aio'],"AIO")}{bar(score)}</div>
  </div></div>''')
    sections.append(f'<section id="{cat}"><h2>{name} <span class="count">{len(items)} live</span></h2><p class="cat-sub">{sub}</p>{"".join(cards)}</section>')

pending_html = []
for p in pending[:24]:
    est = f'~${p["cpc"]} CPC' if p["cpc"] not in ("low","") else ""
    d = p.get("date","queued")
    cls = "next" if d <= (TODAY+datetime.timedelta(days=2)).isoformat() else "soon"
    label = "Building" if cls=="next" else "Soon"
    pending_html.append(f'''<div class="item"><span class="st {cls}">{label}</span><div class="body">
  <div class="title">{p['slug'].replace('-',' ').title()}</div>
  <div class="meta">Scheduled {d} · {p['cat']} {est}</div>
  <div class="summary">{html.escape(p['why'])}</div></div></div>''')

n_tools = len(tools); n_guides = len(guide_dirs)
avg_seo = sum(t["seo"] for t in tools)//max(n_tools,1)
avg_aio = sum(t["aio"] for t in tools)//max(n_tools,1)
page = f'''<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Tool Roadmap — Every Calculator &amp; What's Next | ToolAspect</title>
<meta name="description" content="The complete ToolAspect directory: {n_tools} live calculators with quality scores, plus the build schedule for what's coming next. Updated daily.">
<link rel="canonical" href="{BASE}/roadmap/">
<style>
:root{{--bg:#f8fafc;--surface:#fff;--border:#e2e8f0;--text:#0f172a;--muted:#64748b;--accent:#2563eb}}
*{{box-sizing:border-box;margin:0;padding:0}}
body{{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--text);line-height:1.6}}
.wrap{{max-width:960px;margin:0 auto;padding:1.5rem 1rem 4rem}}
h1{{font-size:1.8rem;font-weight:800;letter-spacing:-.02em}}
.sub{{color:var(--muted);margin:.4rem 0 1rem}}
.stats{{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1rem}}
.stat{{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:.5rem 1rem;font-size:.85rem}}
.stat b{{font-size:1.1rem;display:block}}
.jump{{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1.5rem}}
.jump a{{font-size:.8rem;background:var(--surface);border:1px solid var(--border);border-radius:99px;padding:.3rem .8rem;color:var(--text);text-decoration:none}}
.jump a:hover{{border-color:var(--accent);color:var(--accent)}}
section{{margin-bottom:2.2rem}}
h2{{font-size:1.15rem;font-weight:700;display:flex;align-items:center;gap:.5rem}}
.count{{font-size:.72rem;color:var(--muted);background:#f1f5f9;padding:.15rem .55rem;border-radius:99px}}
.cat-sub{{color:var(--muted);font-size:.85rem;margin-bottom:.9rem}}
.item{{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:.85rem 1rem;margin-bottom:.55rem;display:flex;gap:.85rem}}
.st{{flex-shrink:0;font-size:.66rem;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:.25rem .5rem;border-radius:6px;margin-top:.2rem;height:fit-content}}
.st.live{{background:#dcfce7;color:#15803d}}.st.next{{background:#fef3c7;color:#b45309}}.st.soon{{background:#f1f5f9;color:#64748b}}
.title{{font-weight:600}}.title a{{color:var(--text);text-decoration:none}}.title a:hover{{color:var(--accent)}}
.meta{{font-size:.76rem;color:var(--muted)}}
.summary{{font-size:.85rem;color:#334155;margin-top:.2rem}}
.tag{{font-size:.66rem;background:#f1f5f9;border-radius:4px;padding:.1rem .35rem;margin-left:.4rem;color:var(--muted)}}
.scores{{display:flex;gap:.4rem;align-items:center;margin-top:.35rem;flex-wrap:wrap}}
.chip{{font-size:.68rem;font-weight:600;border-radius:5px;padding:.1rem .45rem}}
.bar{{width:70px;height:5px;background:#e2e8f0;border-radius:3px;overflow:hidden;display:inline-block}}
.bar i{{display:block;height:100%}}
.foot{{color:var(--muted);font-size:.8rem;border-top:1px solid var(--border);padding-top:1rem;margin-top:2rem}}
</style></head><body><div class="wrap">
<h1>Tool Roadmap</h1>
<p class="sub">Every ToolAspect tool and guide in one place — live pages with quality scores, and what's shipping next with dates. Updated automatically every day.</p>
<div class="stats">
<div class="stat"><b>{n_tools}</b>tools live</div>
<div class="stat"><b>{n_guides}</b>guides live</div>
<div class="stat"><b>{len(pending)}</b>queued in backlog</div>
<div class="stat"><b>{avg_seo}</b>avg SEO score</div>
<div class="stat"><b>{avg_aio}</b>avg AIO score</div>
</div>
<nav class="jump">{jump}<a href="#pending">Coming next →</a></nav>
{"".join(sections)}
<section id="pending"><h2>Coming Next <span class="count">{len(pending)} queued</span></h2>
<p class="cat-sub">Research-ranked build queue — ~10 ship per day. Dates are projections and shift as research reprioritises.</p>
{"".join(pending_html)}</section>
<p class="foot">SEO score = title/meta length, JSON-LD coverage, app schema · AIO score = data tables, FAQ schema, 900+ words, H2 depth · Links = internal inbound links · Generated {TODAY.isoformat()} · <a href="{BASE}/llm.txt">llm.txt</a></p>
</div></body></html>'''

out = os.path.join(REPO,"roadmap","index.html")
os.makedirs(os.path.dirname(out), exist_ok=True)
open(out,"w").write(page)
low = [t["slug"] for t in tools if t["seo"]<50 or t["aio"]<50]
json.dump({"generated":TODAY.isoformat(),"tools":n_tools,"avg_seo":avg_seo,"avg_aio":avg_aio,
           "low_quality":low,"pending":len(pending)}, open(os.path.join(REPO,"docs","roadmap-stats.json"),"w"), indent=1)
print(f"roadmap: {n_tools} tools, {n_guides} guides, {len(pending)} pending, avg SEO {avg_seo} AIO {avg_aio}, {len(low)} low-quality flagged")
