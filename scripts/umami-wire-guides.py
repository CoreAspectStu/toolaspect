#!/usr/bin/env python3
"""Wire Umami + events into nested pages (guides/*/, any */*/index.html).
Same payloads as umami-wire.py; idempotent."""
import re
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
UMAMI = ('<script async defer data-website-id="087c548b-708c-42bf-9d9a-5704df7880f2" '
         'src="https://analytics.coreaspectai.com/script.js"></script>')
TRACKER = open(ROOT / "scripts" / "umami-tracker.html").read()
stats = {"umami": 0, "trk": 0}
files = list(ROOT.glob("guides/*/index.html"))
for f in files:
    raw = f.read_text(errors="replace"); orig = raw
    if "analytics.coreaspectai.com/script.js" not in raw:
        m = re.search(r"</head>", raw)
        if m: raw = raw[:m.start()] + UMAMI + "\n" + raw[m.start():]; stats["umami"] += 1
    if "guide-to-tool" not in raw and "tool-used" not in raw:
        m = re.search(r"</body>", raw)
        if m: raw = raw[:m.start()] + TRACKER + "\n" + raw[m.start():]; stats["trk"] += 1
    if raw != orig: f.write_text(raw)
print(stats, "files:", len(files))
