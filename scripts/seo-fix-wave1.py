#!/usr/bin/env python3
"""Sitewide SEO fixer: OG tags, long titles, dup titles, multi-H1.
Idempotent - safe to re-run. Only edits non-redirect pages."""
import os, re

os.chdir(os.path.expanduser('~/projects/utility-sites'))
SKIP = {'node_modules', '.git', 'packages', 'playwright-report', 'docs', 'scripts', 'roadmap', 'embed'}
SITE = 'https://toolaspect.com'

fixed_og = fixed_title = fixed_h1 = 0

# --- dup-title fixes: differentiate the weaker pages ---
TITLE_OVERRIDES = {
    'due-date-calculator': 'Due Date Calculator — When Is My Baby Due? | ToolAspect',
    'credit-card-payoff': 'Credit Card Payoff Calculator — How Long to Pay Off Debt? | ToolAspect',
    'guides/credit-card-payoff-snowball-method': 'Snowball Method Calculator & Guide — Pay Off Cards Fastest | ToolAspect',
}

for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in SKIP]
    if 'index.html' not in files: continue
    path = root[2:]
    fp = os.path.join(root, 'index.html')
    h = open(fp, errors='ignore').read()
    if 'Redirecting' in h[:500]: continue  # redirect stubs are correct as-is
    orig = h

    m = re.search(r'<title>(.*?)</title>', h, re.S)
    title = m.group(1).strip() if m else ''

    # 1. title overrides for dup clusters
    if path in TITLE_OVERRIDES:
        h = re.sub(r'<title>.*?</title>', f'<title>{TITLE_OVERRIDES[path]}</title>', h, count=1, flags=re.S)
        fixed_title += 1

    # 2. trim long titles (>65): keep head, move tail into title only if short
    m = re.search(r'<title>(.*?)</title>', h, re.S)
    title = m.group(1).strip() if m else ''
    if len(title) > 72 and path not in TITLE_OVERRIDES:
        # trim before " | ToolAspect" suffix if present
        mm = re.match(r'^(.*?)\s*[|—-]\s*ToolAspect\s*$', title)
        if mm and len(mm.group(1)) > 60:
            new_head = mm.group(1)[:57].rstrip(' —-|,')
            h = re.sub(r'<title>.*?</title>', f'<title>{new_head} | ToolAspect</title>', h, count=1, flags=re.S)
            fixed_title += 1

    # 3. OG tags: insert after canonical if no og:title
    if 'og:title' not in h:
        m = re.search(r'<title>(.*?)</title>', h, re.S)
        title = m.group(1).strip() if m else 'ToolAspect'
        # strip trailing " | ToolAspect" for og:title
        og_t = re.sub(r'\s*[|—-]\s*ToolAspect\s*$', '', title)
        md = re.search(r'<meta name="description" content="([^"]*)"', h)
        og_d = md.group(1) if md else 'Free online calculator tools.'
        og = (f'\n<meta property="og:title" content="{og_t}">\n'
              f'<meta property="og:type" content="website">\n'
              f'<meta property="og:url" content="{SITE}/{path}/">\n'
              f'<meta property="og:description" content="{og_d[:160]}">\n'
              f'<meta property="og:site_name" content="ToolAspect">')
        if '<link rel="canonical"' in h:
            h = re.sub(r'(<link rel="canonical"[^>]*>)', r'\1' + og, h, count=1)
        else:
            h = h.replace('</title>', '</title>' + og, 1)
        fixed_og += 1

    if h != orig:
        open(fp, 'w').write(h)

# 4. find + fix the multi-H1 page
for root, dirs, files in os.walk('.'):
    dirs[:] = [d for d in dirs if d not in SKIP]
    if 'index.html' not in files: continue
    fp = os.path.join(root, 'index.html')
    h = open(fp, errors='ignore').read()
    if 'Redirecting' in h[:500]: continue
    h1s = re.findall(r'<h1[^>]*>', h)
    if len(h1s) > 1:
        # demote subsequent h1 to h2
        parts = re.split(r'(<h1[^>]*>.*?</h1>)', h, flags=re.S)
        seen = 0
        for i, part in enumerate(parts):
            if part.startswith('<h1'):
                seen += 1
                if seen > 1:
                    parts[i] = re.sub(r'<h1', '<h2', re.sub(r'</h1>', '</h2>', part))
        open(fp, 'w').write(''.join(parts))
        fixed_h1 += 1
        print('multi-h1 fixed:', root[2:])

print(f'OG added: {fixed_og}, titles fixed: {fixed_title}, h1 fixed: {fixed_h1}')
