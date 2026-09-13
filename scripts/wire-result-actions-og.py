#!/usr/bin/env python3
"""Wire site features across all tool pages (idempotent):

1. Inject <script src="/shared/result-actions.js"> after nav.js/funnel-cta.js
   if not already present. (Every page with a shared script include.)
2. Point og:image at /og/<slug>.png when that image exists; add
   og:image:width/height + twitter:image + summary_large_image.

Usage: python3 scripts/wire-result-actions-og.py
"""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = {'node_modules', '.git', 'shared', 'og', 'docs', 'scripts',
             'roadmap', '_bmad-output', 'state-data', 'packages'}


def wire(html: str, slug: str, has_og_img: bool):
    changed = []

    # 1. result-actions.js after the last shared script include
    if 'result-actions.js' not in html:
        m = list(re.finditer(r'<script src="[^"]*shared/(?:ads|funnel-cta|nav)\.js"></script>\s*', html))
        tag = '\n<script src="/shared/result-actions.js"></script>'
        if m:
            last = m[-1]
            html = html[:last.end()] + tag + html[last.end():]
        else:
            html = html.replace('</body>', tag + '\n</body>')
        changed.append('result-actions')

    # 2. per-tool og:image
    if has_og_img:
        og_url = f'https://toolaspect.com/og/{slug}.png'
        needs_og = f'content="{og_url}"' not in html and '/og/{slug}.png' not in html
        needs_tw = ('twitter:image' in html and 'content="' + og_url + '"' not in
                    (re.search(r'<meta name="twitter:image"[^>]*>', html).group(0) if re.search(r'<meta name="twitter:image"[^>]*>', html) else ''))
        if needs_tw and 'twitter:card' in html:
            html = re.sub(r'<meta name="twitter:image"[^>]*>',
                          '<meta name="twitter:image" content="' + og_url + '">', html, count=1)
            changed.append('og-image')
        if needs_og:
            # replace existing og:image (generic) or insert after twitter:card/description
            html = re.sub(r'<meta property="og:image"[^>]*>',
                          f'<meta property="og:image" content="{og_url}">', html, count=1)
            if f'/og/{slug}.png' not in html:
                # no existing og:image — insert before </head>
                ins = (f'\n<meta property="og:image" content="{og_url}">'
                       f'\n<meta property="og:image:width" content="1200">'
                       f'\n<meta property="og:image:height" content="630">')
                html = html.replace('</head>', ins + '\n</head>', 1)
            else:
                # ensure width/height follow; twitter card
                if 'og:image:width' not in html:
                    html = re.sub(r'(<meta property="og:image"[^>]*>)',
                                  r'\1\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">',
                                  html, count=1)
            # upgrade twitter card to large image
            if 'twitter:card' in html and 'summary_large_image' not in html:
                html = re.sub(r'<meta name="twitter:card"[^>]*>',
                              '<meta name="twitter:card" content="summary_large_image">', html)
                changed.append('twitter-card')
            if 'twitter:card' in html:
                if 'twitter:image' not in html:
                    html = re.sub(r'(<meta name="twitter:card"[^>]*>)',
                                  r'\1\n<meta name="twitter:image" content="' + og_url + '">', html, count=1)
                else:
                    html = re.sub(r'<meta name="twitter:image"[^>]*>',
                                  '<meta name="twitter:image" content="' + og_url + '">', html, count=1)
            changed.append('og-image')

    return html, changed


def main():
    stats = {'pages': 0, 'ra': 0, 'og': 0}
    for d in sorted(os.listdir(ROOT)):
        p = os.path.join(ROOT, d, 'index.html')
        if not os.path.isfile(p) or d in SKIP_DIRS or d.startswith('.'):
            continue
        html = open(p, encoding='utf-8', errors='surrogateescape').read()
        has_og = os.path.exists(os.path.join(ROOT, 'og', d + '.png'))
        new, changed = wire(html, d, has_og)
        if changed:
            open(p, 'w', encoding='utf-8', errors='surrogateescape').write(new)
            if 'result-actions' in changed: stats['ra'] += 1
            if 'og-image' in changed: stats['og'] += 1
        stats['pages'] += 1
    print(f"pages={stats['pages']} result-actions wired={stats['ra']} og-image set={stats['og']}")


if __name__ == '__main__':
    main()
