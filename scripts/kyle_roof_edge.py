#!/usr/bin/env python3
"""Kyle Roof edge analysis: for each target page, scrape the SERP (DuckDuckGo),
find the 'best on-page' competitor (max Big-4 + zone coverage among pos 4-10,
excluding mega-authorities), and produce a term-count gap table vs our page.
Usage: kyle_roof_edge.py slug1 slug2 ... | --batch N (from audit report)
Output: docs/kyle-roof-edge-report.md (+ .json)
"""
import json, re, html, sys, urllib.request, urllib.parse, time
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUDIT = ROOT / "docs" / "kyle-roof-audit-report.json"
OUT_MD = ROOT / "docs" / "kyle-roof-edge-report.md"
OUT_JSON = ROOT / "docs" / "kyle-roof-edge-report.json"
UA = "Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0"
AUTHORITY = ("wikipedia.org", "rapidtables.com", "calculator.net", "google.com",
             "investopedia.com", "forbes.com", "nerdwallet.com", "bankrate.com",
             "youtube.com", "reddit.com", "amazon.com", "gigacalculator.com")

class P(HTMLParser):
    def __init__(self):
        super().__init__(); self.title=[]; self.h1=[]; self.h2=[]; self.h3=[]; self.para=[]
        self._z=None; self._b=[]
    def handle_starttag(self,t,a):
        if t in ("title","h1","h2","h3","p"): self._z=t; self._b=[]
    def handle_endtag(self,t):
        if t==self._z and self._z:
            txt=html.unescape(" ".join("".join(self._b).split()))
            {"title":self.title,"h1":self.h1,"h2":self.h2,"h3":self.h3,"p":self.para}[self._z].append(txt); self._z=None
    def handle_data(self,d):
        if self._z: self._b.append(d)

def fetch(url, timeout=15):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read(400000).decode("utf-8", "replace")

def serp_ddg(query):
    # Datacenter IP on core-control gets bot-challenged by DDG / geo-poisoned by Bing.
    # Route through the Oracle AU production box (clean residential-ish cloud IP) via SSH.
    import subprocess
    u = "https://html.duckduckgo.com/html/?q=" + urllib.parse.quote_plus(query)
    raw = subprocess.run(
        ["ssh", "-o", "ConnectTimeout=10", "-o", "BatchMode=yes", "oracle",
         f"curl -s --max-time 20 -A '{UA}' '{u}'"],
        capture_output=True, text=True, timeout=40).stdout
    links = re.findall(r'result__a" href="([^"]+)"', raw)
    out = []
    for href in links:
        m = re.search(r'uddg=([^&]+)', href)
        if not m: continue
        out.append(urllib.parse.unquote(m.group(1)))
    return out[:10]

def page_metrics(html_text, kw):
    p = P(); p.feed(html_text)
    title = p.title[0] if p.title else ""
    h1 = p.h1[0] if p.h1 else ""
    body = " ".join(p.para)
    kl = kw.lower()
    def c(z): return z.lower().count(kl)
    m = {
        "title_kw": c(title), "h1_kw": c(h1),
        "h2_kw": sum(c(h) for h in p.h2),
        "h3_kw": sum(c(h) for h in p.h3),
        "body_kw": body.lower().count(kl),
        "body_words": len(body.split()),
        "h1_eq_title": title.strip() == h1.strip(),
        "url_kw": kl.replace(" ", "") in "",  # filled by caller
    }
    return m, p

def big4_score(m):
    s = 0
    s += 3 if m["title_kw"] >= 1 else 0
    s += 2 if m["h1_kw"] >= 1 else 0
    s += 2 if m["body_kw"] >= 1 else 0
    s += 1 if m["url_kw"] else 0
    s += 1 if m["h1_eq_title"] else 0
    s += 1 if m["h2_kw"] >= 1 else 0
    return s

def analyze(slug_page):
    slug, ours_flags = slug_page
    kw = slug.replace("-", " ")
    our_html = (ROOT / slug / "index.html").read_text(errors="replace")
    ours, _ = page_metrics(our_html, kw)
    ours["url_kw"] = True
    try:
        urls = serp_ddg(kw)
    except Exception as e:
        return {"slug": slug, "kw": kw, "error": f"serp: {e}", "ours": ours}
    cands = []
    for i, u in enumerate(urls):
        if any(a in u for a in AUTHORITY): continue
        if "toolaspect.com" in u: continue
        try:
            ch = fetch(u)
        except Exception:
            continue
        cm, _ = page_metrics(ch, kw)
        cm["url_kw"] = kw.replace(" ", "") in u.lower().replace("-", "")
        cm["pos"] = i + 1
        cm["score"] = big4_score(cm)
        cm["url"] = u
        cands.append(cm)
        time.sleep(0.4)
    # Roof: best on-page often pos 4-10 — prefer best score among pos>=4, else best overall
    lower = [c for c in cands if c["pos"] >= 4]
    model = max(lower or cands, key=lambda c: c["score"], default=None)
    gaps = {}
    if model:
        for f in ("title_kw", "h1_kw", "h2_kw", "h3_kw", "body_kw"):
            gaps[f] = {"ours": ours[f], "model": model[f],
                       "delta": ours[f] - model[f]}
        gaps["h1_eq_title"] = {"ours": ours["h1_eq_title"], "model": model["h1_eq_title"]}
    return {"slug": slug, "kw": kw, "serp_n": len(urls), "cands_n": len(cands),
            "model": model, "ours": ours, "gaps": gaps}

def main():
    audit = json.load(open(AUDIT))
    args = sys.argv[1:]
    if args and args[0] == "--batch":
        n = int(args[1]) if len(args) > 1 else 50
        # Roof priority: calculators with open zone gaps, thinnest first (fastest wins)
        pages = [p for p in audit["pages"]
                 if p["kw"].endswith("calculator")
                 and set(p["flags"]) & {"title-missing-kw", "h1-missing-kw",
                                        "body-missing-kw"} or p["body_words"] < 600]
        pages = sorted(pages, key=lambda p: p["body_words"])[:n]
        targets = [(p["slug"], p["flags"]) for p in pages]
    else:
        targets = [(s, []) for s in args]
    results = []
    for slug, flags in targets:
        print(f"analyzing {slug}...", file=sys.stderr)
        r = analyze((slug, flags))
        results.append(r)
        time.sleep(0.5)
    OUT_MD.parent.mkdir(exist_ok=True)
    json.dump(results, open(OUT_JSON, "w"), indent=1)
    with open(OUT_MD, "w") as f:
        f.write(f"# Kyle Roof edge analysis — {len(results)} pages\n")
        f.write("Model = best-on-page competitor (SERP pos 4-10 preferred, authorities excluded)\n\n")
        f.write("| slug | model | pos | title_kw o/m | h1_kw o/m | h2_kw o/m | body_kw o/m | h1=title | actions |\n")
        f.write("|---|---|---|---|---|---|---|---|---|\n")
        for r in results:
            if "error" in r or not r.get("model"):
                f.write(f"| {r['slug']} | — | — | — | — | — | — | — | {r.get('error','no model')} |\n"); continue
            m, o, g = r["model"], r["ours"], r["gaps"]
            acts = []
            if g["title_kw"]["delta"] < 0: acts.append("+kw in title")
            if g["h1_kw"]["delta"] < 0: acts.append("+kw in h1")
            if g["h2_kw"]["delta"] < 0: acts.append("+kw in H2")
            if g["body_kw"]["delta"] < 0: acts.append(f"+{min(3, -g['body_kw']['delta'])}x kw in body")
            if g["body_kw"]["delta"] > 3: acts.append("reduce body kw")
            dom = re.sub(r"https?://(www\.)?", "", m["url"]).split("/")[0]
            f.write(f"| {r['slug']} | {dom} | {m['pos']} | {o['title_kw']}/{m['title_kw']} | "
                    f"{o['h1_kw']}/{m['h1_kw']} | {o['h2_kw']}/{m['h2_kw']} | "
                    f"{o['body_kw']}/{m['body_kw']} | {'=' if o['h1_eq_title'] else '≠'}/"
                    f"{'=' if m['h1_eq_title'] else '≠'} | {', '.join(acts) or 'aligned ✓'} |\n")
    print(f"done: {len(results)} -> {OUT_MD}")

if __name__ == "__main__":
    main()
