#!/usr/bin/env python3
"""Kyle Roof Wave 2: title/H1 exact-keyword fixes + edge-analysis actions.
- title-missing-kw: rebuild title as '<KW> — <orig descriptor> | ToolAspect'
- h1-missing-kw:     rewrite H1 as '<emoji> <KW>' (preserve leading emoji)
- edge body gaps:    add a 2nd natural kw sentence to first paragraph
- edge H2 gaps:      rename GENERIC section headings only (How it works/FAQ/etc)
Skips trivial/nav keywords. Idempotent. Never touches URLs.
"""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
audit = json.load(open(ROOT / "docs" / "kyle-roof-audit-report.json"))
edge = json.load(open(ROOT / "docs" / "kyle-roof-edge-report.json"))
SKIP_KW = {"about", "guides", "convert", "roadmap", "all tools", "home",
           "contact", "blog", "tools", "privacy", "terms", "editorial policy"}

def tc(kw):
    small = {"a","an","the","to","of","for","in","on","vs","by","and","or","is"}
    return " ".join(w if w in small else w.capitalize() for w in kw.split())

stats = {"title":0,"h1":0,"body2":0,"h2":0,"skip":[]}
edge_map = {e["slug"]: e for e in edge if e.get("model")}

for p in audit["pages"]:
    slug, kw = p["slug"], p["kw"]
    kl = kw.lower()
    if kl in SKIP_KW or len(kl) < 4:
        continue
    f = ROOT / slug / "index.html"
    if not f.exists(): continue
    raw = f.read_text(errors="replace")
    orig = raw
    KW = tc(kw)

    # --- title ---
    m = re.search(r"<title>(.*?)</title>", raw, re.S)
    if m and "title-missing-kw" in p["flags"]:
        t = m.group(1).strip()
        desc = re.sub(r"\s*[|–-]\s*ToolAspect\s*$", "", t).strip()
        # drop descriptor if it largely repeats the kw
        toks = set(kl.split()); dt = set(re.sub(r"[^a-z0-9 ]"," ",desc.lower()).split())
        if toks and len(toks & dt) / len(toks) > 0.6: desc = ""
        new_t = KW + (f" — {desc}" if desc else "") + " | ToolAspect"
        new_t = new_t[:95]
        raw = raw[:m.start(1)] + new_t + raw[m.end(1):]
        stats["title"] += 1

    # --- h1 ---
    m = re.search(r"<h1[^>]*>(.*?)</h1>", raw, re.S)
    if m and "h1-missing-kw" in p["flags"]:
        inner = m.group(1)
        em = re.match(r"\s*([\U0001F300-\U0001FAFF\u2600-\u27BF\u2190-\u21FF\u2B00-\u2BFF]+)\s*", inner)
        prefix = em.group(1) + " " if em else ""
        # strip inner tags for keyword, keep plain new h1
        raw = raw[:m.start(1)] + prefix + KW + raw[m.end(1):]
        stats["h1"] += 1

    # --- edge actions ---
    e = edge_map.get(slug)
    if e:
        g = e["gaps"]
        if g["body_kw"]["delta"] < 0:
            m = re.search(r"(<p[^>]*>)(.*?)(</p>)", raw, re.S)
            if m and raw[m.start(2):m.end(2)].lower().count(kl) < 2:
                sent = f" Bookmark this {kl} — it runs entirely in your browser and never stores your data."
                raw = raw[:m.end(2)] + sent + raw[m.end(2):]
                stats["body2"] += 1
        if g["h2_kw"]["delta"] < 0:
            GENERIC = ("how it works","how to use","faq","frequently asked",
                       "results","about this","instructions","tips")
            def h2sub(mm):
                txt = re.sub(r"<[^>]+>","",mm.group(2)).strip()
                if kl in txt.lower(): return mm.group(0)
                if any(g0 in txt.lower() for g0 in GENERIC):
                    return mm.group(1) + f"How to use the {KW}" + mm.group(3)
                return mm.group(0)
            before = raw
            raw = re.sub(r"(<h2[^>]*>)(.*?)(</h2>)", h2sub, raw, count=1, flags=re.S)
            if raw != before: stats["h2"] += 1

    if raw != orig:
        f.write_text(raw)

print(stats)
