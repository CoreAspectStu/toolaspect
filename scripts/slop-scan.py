#!/usr/bin/env python3
"""slop-scan.py — audit every page for content/layout/ad/responsive issues.
Outputs slop-report.json with per-page findings."""
import os, re, json, html

ROOT = os.environ.get("TA_ROOT", "/home/stu/projects/utility-sites")
BAD_ANSWER = re.compile(r'>Answer:\s*The ([^<]{0,60}?) (?:gives you|calculator)', re.I)
findings = []
pages = []
for dirpath, dirs, files in os.walk(ROOT):
    dirs[:] = [d for d in dirs if d not in ('.git','node_modules','scripts','shared','assets','embed')]
    if 'index.html' not in files: continue
    rel = os.path.relpath(os.path.join(dirpath,'index.html'), ROOT)
    if rel.startswith('.'): continue
    pages.append(rel)

for rel in pages:
    f = os.path.join(ROOT, rel)
    d = open(f, encoding='utf-8', errors='ignore').read()
    url = 'https://toolaspect.com/' + rel.replace('index.html','').replace(os.sep,'/')
    issues = []
    title = (re.search(r'<title>([^<]*)</title>', d) or [None,''])[1]
    # 1. nonsense template chrome: "Answer:" boilerplate on non-calculator pages
    slug = rel.split(os.sep)[0]
    is_calc = bool(re.search(r'calculator|converter|generator|formatter|tester|encoder|lookup|counter|unscrambler|viewer|maker|repair|splitter', slug, re.I))
    if BAD_ANSWER.search(d) and not is_calc:
        issues.append('template-answer-chrome')
    # 2. FAQ mismatch heuristic: FAQ section present — check its questions relate to title keywords
    faq_qs = re.findall(r'<h3[^>]*>([^<]{15,120})\?</h3>', d) or re.findall(r'"[^"]{15,120}\?"\s*,\s*"acceptedAnswer', d)
    if faq_qs and title:
        kw = set(re.findall(r'[a-z]{4,}', title.lower())) - {'toolaspect','free','online'}
        hits = sum(1 for q in faq_qs if any(k in q.lower() for k in kw))
        if faq_qs and hits == 0 and not is_calc:
            issues.append(f'faq-mismatch({len(faq_qs)}q,0kw)')
    # 3. missing viewport (mobile responsiveness)
    if 'name="viewport"' not in d: issues.append('no-viewport')
    # 4. ad slots present? (should be on all pages)
    if 'ad-slot' not in d and 'adsbygoogle' not in d and '/shared/ads.js' not in d:
        issues.append('no-ad-slot')
    # 5. header/footer presence
    if '<header' not in d and 'class="header' not in d and 'class="nav' not in d and 'site-header' not in d: issues.append('no-header')
    if '<footer' not in d and 'class="footer' not in d and 'site-footer' not in d: issues.append('no-footer')
    # 6. canonical + title sanity
    if 'rel="canonical"' not in d: issues.append('no-canonical')
    if not title or 'ToolAspect' not in title: issues.append('bad-title')
    if issues:
        findings.append({'page': rel, 'url': url, 'issues': issues})

print('pages scanned:', len(pages))
print('pages with issues:', len(findings))
from collections import Counter
c = Counter(i for x in findings for i in x['issues'])
for k,v in c.most_common(): print(f'{v:5d}  {k}')
json.dump({'scanned': len(pages), 'findings': findings}, open('/tmp/slop-report.json','w'), indent=1)
print('full report: /tmp/slop-report.json')
