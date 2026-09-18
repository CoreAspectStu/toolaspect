import re
pages=[]
for l in open('/tmp/laneB-remaining-2.txt'):
    l=l.strip()
    if not l: continue
    parts=l.split('|'); pages.append(parts[-1] if len(parts)>1 else parts[0])
STOP=set('the what whats how does why when where which who whom this that with from your theirs about into online free best much guide explained difference between should would could will there here'.split())
def stem(w):
    for suf in ('ies','es','s','ing','ed'):
        if len(w)>len(suf)+3 and w.endswith(suf):
            return w[:len(w)-len(suf)]
    return w
def kws(s):
    s=s.lower()
    out=set(stem(w) for w in re.findall(r'[a-z]{5,}',s) if w not in STOP)
    for a in re.findall(r'\b[A-Z]{2,6}\b',s): out.add(a)
    return out
for p in pages:
    h=open(p+'/index.html').read()
    t=re.search(r'<title>(.*?)</title>',h,re.S); h1=re.search(r'<h1[^>]*>(.*?)</h1>',h,re.S)
    title=re.sub(r'<[^>]+>','',(t.group(1) if t else '')+' '+(h1.group(1) if h1 else ''))
    tk=kws(title)
    qs=[re.sub(r'<[^>]+>','',(a or b)).strip() for a,b in re.findall(r'<summary[^>]*>(.*?)</summary>|<div class="faq-item"><h3>(.*?)</h3>',h,re.S)]
    j=re.search(r'data-ta-schema="faq1"[^>]*>(.*?)</script>',h,re.S)
    jqs=re.findall(r'"name"\s*:\s*"([^"]+)"',j.group(1)) if j else []
    bad=[q for q in qs if not (kws(q)&tk)]
    print(p,'|',len(qs),'| off:',len(bad),'| ld:',len(jqs),'| ldmatch:',qs==jqs)
    print('   TITLE:',title.strip()[:85])
    for b in bad: print('   OFF:',b[:100])
