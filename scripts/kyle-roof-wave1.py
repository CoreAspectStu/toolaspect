#!/usr/bin/env python3
"""Kyle Roof Wave 1: fix 'body-missing-kw' pages.
Adds one natural sentence containing the exact target keyword to the first
paragraph of each flagged page. Never touches title/H1/URL. Skips nav hubs
(<50 body words). Idempotent: skips pages already containing exact kw in body.
"""
import json, re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
audit = json.load(open(ROOT / "docs" / "kyle-roof-audit-report.json"))
flagged = {p["slug"]: p for p in audit["pages"] if "body-missing-kw" in p["flags"]}

TEMPLATES = [
    ("calculator", "Use this free {kw} to get an instant answer in your browser — no sign-up needed."),
    ("test", "Run the {kw} below directly in your browser — it takes about ten seconds."),
    ("checker", "This free {kw} gives you an instant answer right here on the page."),
    ("chart", "The {kw} below gives you the numbers at a glance, with no scrolling games."),
    ("generator", "This free {kw} builds your result instantly — nothing to install."),
    ("converter", "This free {kw} converts your values instantly, right in the browser."),
    ("tracker", "This free {kw} runs entirely in your browser and updates as you go."),
    ("maker", "This free {kw} builds your result instantly — no account required."),
    ("gifts", "This {kw} guide breaks down every option so you can pick with confidence."),
    ("guide", "This {kw} walkthrough covers everything you need, step by step."),
]
GENERIC = "This free {kw} works instantly in your browser — no sign-up, no downloads."

P_RE = re.compile(r"(<p[^>]*>)(.*?)(</p>)", re.S | re.I)

def sentence_for(kw):
    kl = kw.lower()
    for suf, tpl in TEMPLATES:
        if kl.endswith(suf) or kl == suf or f" {suf}" in kl.split()[-2:]:
            return tpl.format(kw=kw)
    # contains-keyword fallbacks (e.g. 'anniversary gifts by year')
    for suf, tpl in TEMPLATES:
        if suf in kl:
            return tpl.format(kw=kw)
    return GENERIC.format(kw=kw)

fixed, skipped = [], []
for slug, p in sorted(flagged.items()):
    f = ROOT / slug / "index.html"
    if not f.exists():
        skipped.append((slug, "no file")); continue
    raw = f.read_text(errors="replace")
    # idempotency: check body paragraphs only
    paras = P_RE.findall(raw)
    body = " ".join(m[1] for m in paras)
    if p["kw"].lower() in re.sub(r"<[^>]+>", "", body).lower():
        skipped.append((slug, "already has kw")); continue
    if p["body_words"] < 50:
        skipped.append((slug, "thin/nav hub")); continue
    m = P_RE.search(raw)
    if not m:
        skipped.append((slug, "no <p>")); continue
    sent = sentence_for(p["kw"])
    new_p = m.group(1) + sent + " " + m.group(2).lstrip() + m.group(3)
    raw2 = raw[:m.start()] + new_p + raw[m.end():]
    f.write_text(raw2)
    fixed.append(slug)

print(f"fixed: {len(fixed)}  skipped: {len(skipped)}")
for s, why in skipped: print("  skip:", s, "-", why)
