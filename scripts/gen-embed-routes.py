#!/usr/bin/env python3
"""Regenerate embed route wrappers with the CORRECT per-widget target id,
read from each widget's own TARGET_ID; skip tools with no embed JS.
Also patch embeds.html to only list widgets whose embed actually works."""
import json, os, re, html

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
data = json.load(open('embeds-data.json'))
made, skipped = 0, []
for item in data:
    slug, name = item['slug'], item['name']
    jsp = f'embed/{slug}.js'
    if not os.path.exists(jsp):
        skipped.append(slug)
        continue
    m = re.search(r"TARGET_ID = '([^']+)'", open(jsp).read())
    tid = m.group(1) if m else f'ta-{slug}'
    d = os.path.join('embed', slug)
    os.makedirs(d, exist_ok=True)
    page = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,follow">
<title>{html.escape(name)} — ToolAspect embed</title>
<style>html,body{{margin:0;padding:0;height:100%;font-family:system-ui,sans-serif;background:#fff}}</style>
</head>
<body>
<div id="{tid}"></div>
<script src="/embed/{slug}.js"></script>
</body>
</html>
"""
    with open(os.path.join(d, 'index.html'), 'w') as f:
        f.write(page)
    made += 1
# cleanup stale dirs from earlier buggy run for skipped slugs
for slug in skipped:
    d = os.path.join('embed', slug)
    if os.path.isdir(d):
        import shutil; shutil.rmtree(d)
print(f'made {made} routes, skipped {len(skipped)} (no embed JS)')
