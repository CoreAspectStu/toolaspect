#!/usr/bin/env python3
"""Wave-3 'steal the good shit': inject HowTo JSON-LD (howto1) + rating widget
(rating1) into the top-150 tool pages with a matching guide.

Idempotent: skips pages already carrying howto1/rating1 markers or any HowTo
JSON-LD. Steps derived from generic tool usage (enter values -> adjust options
-> read result) with a cite to the matched guide URL.
"""
import json, os, re, html as htmlmod

BASE = 'https://toolaspect.com'
pairs = json.load(open('/tmp/wave3-pairs.json'))
# top 150 by score
pairs = pairs[:150]

stats = {'howto': 0, 'widget': 0, 'skipped': []}

def make_tool_name(slug):
    return slug.replace('-', ' ').replace(' calculator', ' Calculator').title()

for p in pairs:
    tool, guide = p['tool'], p['guide']
    path = f'{tool}/index.html'
    src = open(path, encoding='utf-8').read()
    orig = src

    if 'data-ta-schema="howto1"' in src or re.search(r'"@type":\s*"HowTo"', src):
        stats['skipped'].append(tool)
        continue

    name = make_tool_name(tool)
    guide_url = f'{BASE}/guides/{guide}/'
    howto = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": f"How to Use the {name}",
        "description": f"Step-by-step instructions for using the {name.lower()} on ToolAspect, with tips from our {guide.replace('-',' ')} guide.",
        "totalTime": "PT1M",
        "step": [
            {"@type": "HowToStep", "position": 1,
             "name": "Enter your values",
             "text": f"Open the {name.lower()} and fill in the input fields with your own numbers or details."},
            {"@type": "HowToStep", "position": 2,
             "name": "Adjust the options",
             "text": "Tune any optional settings (percentages, units, or split options) so they match your situation."},
            {"@type": "HowToStep", "position": 3,
             "name": "Read your result",
             "text": "The result updates instantly as you type — read the calculated output below the inputs.",
             "url": guide_url},
            {"@type": "HowToStep", "position": 4,
             "name": "Learn more",
             "text": f"For background, formulas, and worked examples, see our guide: {guide_url}",
             "url": guide_url},
        ],
    }
    blob = json.dumps(howto, ensure_ascii=False, separators=(',', ':'))
    howto_html = (
        '<script type="application/ld+json" data-ta-schema="howto1">'
        + blob.replace('</', '<\\/') + '</script>\n'
    )
    widget = (
        '<div class="ta-rating" data-ta-schema="rating1" data-ta-slug="'
        + tool + '" aria-label="Rate this tool"></div>\n'
    )
    include = '<script src="/shared/ratings.js" defer></script>\n'

    # 1) HowTo block: insert before the first </head>
    src = src.replace('</head>', howto_html + '</head>', 1)

    # 2) Widget: after the tool-result ad slot if present, else before results/SEO section
    anchor = 'data-slot="tool-result"'
    if anchor in src:
        m = re.search(r'<div class="ad-slot"[^>]*data-slot="tool-result"[^>]*>.*?</div>', src, re.S)
        if m:
            src = src[:m.end()] + '\n' + widget + src[m.end():]
        else:
            src = src.replace('</body>', widget + '</body>', 1)
    else:
        # fall back: after .results div block or before seo content
        if '<div class="seo"' in src:
            src = src.replace('<div class="seo"', widget + '<div class="seo"', 1)
        else:
            src = src.replace('</body>', widget + '</body>', 1)

    # 3) ratings.js include: right before the beacon/analytics or </body>
    if 'src="/shared/ratings.js"' not in src:
        src = src.replace('</body>', include + '</body>', 1)

    if src != orig:
        open(path, 'w', encoding='utf-8').write(src)
        stats['howto'] += 1
        stats['widget'] += 1

print(json.dumps({'pages_modified': stats['howto'],
                  'widgets': stats['widget'],
                  'skipped_existing': len(stats['skipped'])}, indent=1))
