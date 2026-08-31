#!/bin/bash
# ToolAspect deploy script — regenerates sitemap, deploys, verifies, commits
set -e
cd ~/projects/utility-sites

echo "📋 Regenerating sitemap + llm.txt + roadmap..."
python3 scripts/gen-llm-txt.py
python3 scripts/gen-all-tools.py
python3 scripts/gen-roadmap.py
python3 -c "
import os, datetime
today = datetime.date.today().isoformat()
urls = []
for root, dirs, files in os.walk('.'):
    if 'node_modules' in root or '.git' in root: continue
    if 'index.html' not in files: continue
    path = root.replace('./', '').replace('.', '')
    if path == 'roadmap': continue  # internal build plan — not for crawlers/competitors
    if not path:
        url = 'https://toolaspect.com/'
        priority, freq = '1.0', 'daily'
    else:
        url = 'https://toolaspect.com/' + path + '/'
        if path in ['finance-tools','health-calculators','creator-tools','converters','developer-tools','everyday-tools','all-tools']:
            priority, freq = '0.9', 'weekly'
        elif path.startswith('convert/') or path.startswith('conversion-tables/'):
            priority, freq = '0.6', 'monthly'
        elif path.startswith('guides/'):
            priority, freq = '0.8', 'monthly'
        elif any(path.startswith(p) for p in ['time-zones/','salary-by-state/','gift-ideas/','pet-names/','countdown-to/','car-insurance-cost-by-state/','roof-replacement-cost-by-state/','window-replacement-cost-by-state/','fence-cost-by-state/','hvac-replacement-cost-by-state/']):
            priority, freq = '0.5', 'monthly'
        else:
            priority, freq = '0.7', 'weekly'
    urls.append((url, priority, freq))

xml = '<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n'
for url, prio, freq in urls:
    xml += f'  <url>\n    <loc>{url}</loc>\n    <lastmod>{today}</lastmod>\n    <changefreq>{freq}</changefreq>\n    <priority>{prio}</priority>\n  </url>\n'
xml += '</urlset>\n'
with open('sitemap.xml', 'w') as f:
    f.write(xml)
print(f'Sitemap: {len(urls)} URLs')
"

echo "🚀 Deploying to Cloudflare Pages..."
source ~/.secrets
CLOUDFLARE_API_TOKEN="" CLOUDFLARE_ACCOUNT_ID="$CLOUDFLARE_ACCOUNT_ID" npx wrangler pages deploy . --project-name=utility-sites --branch=main

echo "✅ Deploy complete"
