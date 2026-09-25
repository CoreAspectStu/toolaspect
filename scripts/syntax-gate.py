import re, glob, subprocess, os, json
# Scan all pages: check only non-empty, non-src <script> blocks that are NOT type="application/ld+json" or data blocks
os.chdir('/data/projects/utility-sites')
broken=[]
checked=0
for p in glob.glob('*/index.html'):
    try:
        html=open(p,encoding='utf-8').read()
    except Exception:
        continue
    for i,m in enumerate(re.finditer(r'<script([^>]*)>([\s\S]*?)</script>', html)):
        attrs, body = m.group(1), m.group(2).strip()
        if 'src=' in attrs: continue
        if 'ld+json' in attrs or 'type=' in attrs and 'javascript' not in attrs: continue
        if not body: continue
        checked+=1
        open('/tmp/chk_s.js','w').write(body)
        r=subprocess.run(['node','--check','/tmp/chk_s.js'],capture_output=True)
        if r.returncode!=0 and 'SyntaxError' in r.stderr.decode():
            err=[l for l in r.stderr.decode().split('\n') if 'SyntaxError' in l]
            broken.append((p, err[0][:130] if err else '?'))
print('blocks checked:', checked, 'BROKEN:', len(broken))
seen=set()
for b in broken:
    if b[0] not in seen:
        seen.add(b[0])
        print(b)
