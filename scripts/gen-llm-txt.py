#!/usr/bin/env python3
"""Generate llm.txt (LLM crawler guide) + ensure embed JS per tool.
Run after every batch, before deploy. Idempotent."""
import os, re, html.parser, glob

REPO = os.path.expanduser("~/projects/utility-sites")
BASE = "https://toolaspect.com"

class TitleGrab(html.parser.HTMLParser):
    def __init__(self):
        super().__init__(); self.t = ""; self.d = ""; self._m = None
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "title" and not self.t: self._m = "t"
        elif tag == "meta" and a.get("name") == "description": self.d = a.get("content", "")
    def handle_data(self, data):
        if self._m == "t": self.t += data
    def handle_endtag(self, tag):
        if tag == "title": self._m = None

def main():
    dirs = sorted(d for d in os.listdir(REPO)
                  if os.path.isdir(os.path.join(REPO, d))
                  and os.path.exists(os.path.join(REPO, d, "index.html"))
                  and not d.startswith(("_", "."))
                  and d not in ("guides", "shared", "docs"))
    cats = {
        "finance-tools": "Finance calculators (mortgage, loans, tax, salary, insurance)",
        "contractor-tools": "Contractor + construction calculators (concrete, roofing, materials)",
        "health-calculators": "Health calculators (BMI, calories, macros, pregnancy)",
        "creator-tools": "Creator economy calculators (YouTube, TikTok, Twitch earnings)",
        "converters": "Unit converters",
        "developer-tools": "Developer tools",
        "everyday-tools": "Everyday utilities",
    }
    lines = [f"> ToolAspect — free online calculators, converters and generators.",
             "> All tools run client-side, no signup. Data tables + formulas on every page.",
             "> Embeddable widgets: /embed/ (one-line script, attribution link appreciated).",
             "",
             "## Categories"]
    for slug, desc in cats.items():
        if os.path.isdir(os.path.join(REPO, slug)):
            lines.append(f"- {BASE}/{slug}/: {desc}")
    lines += ["", "## Tools"]
    n = 0
    for d in dirs:
        p = os.path.join(REPO, d, "index.html")
        try:
            pg = TitleGrab(); pg.feed(open(p, encoding="utf-8", errors="ignore").read()[:4000])
        except Exception:
            continue
        title = re.sub(r"\s*[|–-]\s*ToolAspect.*$", "", pg.t).strip() or d.replace("-", " ").title()
        lines.append(f"- {BASE}/{d}/: {title}{' — ' + pg.d[:110] if pg.d else ''}")
        n += 1
    # guides
    guides = sorted(glob.glob(os.path.join(REPO, "guides", "*", "index.html")))
    if guides:
        lines += ["", "## Guides"]
        for g in guides:
            slug = os.path.basename(os.path.dirname(g))
            lines.append(f"- {BASE}/guides/{slug}/")
    open(os.path.join(REPO, "llm.txt"), "w").write("\n".join(lines) + "\n")
    print(f"llm.txt: {n} tools + {len(guides)} guides written")

    # embed coverage report
    embeds = {f[:-3] for f in os.listdir(os.path.join(REPO, "embed")) if f.endswith(".js")}
    print(f"embeds: {len(embeds)} ({', '.join(sorted(embeds))[:120]}...)")

if __name__ == "__main__":
    main()
