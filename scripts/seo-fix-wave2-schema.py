#!/usr/bin/env python3
"""Wave 2: per-tool JSON-LD (WebApplication + FAQPage) on every real tool page.
Idempotent: skips pages that already have data-ta-schema marker."""
import os, re, json, html as H

os.chdir(os.path.expanduser('~/projects/utility-sites'))
SKIP = {'node_modules', '.git', 'packages', 'playwright-report', 'docs', 'scripts', 'roadmap', 'embed',
        'convert', 'conversion-tables'}  # converters: handled separately later if wanted
SITE = 'https://toolaspect.com'
MARK = 'data-ta-schema="v2"'

def faq_for(name):
    n = re.sub(r'[|—-].*$', '', name).strip()
    return [
        {"@type": "Question", "name": f"Is the {n} free?",
         "acceptedAnswer": {"@type": "Answer", "text": f"Yes, the {n} on ToolAspect is completely free, runs in your browser, and requires no signup."}},
        {"@type": "Question", "name": f"How does the {n} work?",
         "acceptedAnswer": {"@type": "Answer", "text": f"Enter your values and the {n} calculates results instantly on your device. Nothing is uploaded to a server."}},
    ]

added = 0
for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in SKIP]
    if 'index.html' not in files: continue
    path = root[2:]
    if path == '.' or '/' in path and path.split('/')[0] in ('guides', 'gift-ideas', 'salary-by-state', 'time-zones', 'pet-names', 'countdown-to'):
        pass
    fp = os.path.join(root, 'index.html')
    h = open(fp, errors='ignore').read()
    if 'Redirecting' in h[:500] or MARK in h: continue
    m = re.search(r'<title>(.*?)</title>', h, re.S)
    if not m: continue
    title = m.group(1).strip()
    name = re.sub(r'\s*[|—-]\s*ToolAspect\s*$', '', title)
    if not name or name.lower() in ('toolaspect',): continue
    md = re.search(r'<meta name="description" content="([^"]*)"', h)
    desc = md.group(1) if md else f'{name} — free online tool.'
    schema = {
        "@context": "https://schema.org",
        "@graph": [
            {"@type": "WebApplication", "name": name, "url": f"{SITE}/{path}/",
             "applicationCategory": "UtilitiesApplication", "operatingSystem": "Any",
             "browserRequirements": "Requires JavaScript",
             "offers": {"@type": "Offer", "price": "0", "priceCurrency": "USD"},
             "description": desc[:300]},
            {"@type": "FAQPage", "mainEntity": faq_for(name)},
        ]}
    blob = json.dumps(schema, ensure_ascii=False)
    tag = f'<script type="application/ld+json" {MARK}>{H.escape(blob, quote=False)}</script>'
    if '</head>' in h:
        h = h.replace('</head>', tag + '\n</head>', 1)
    else:
        h = h.replace('</title>', '</title>\n' + tag, 1)
    open(fp, 'w').write(h)
    added += 1
print(f'schema added to {added} pages')
