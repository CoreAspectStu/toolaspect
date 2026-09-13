#!/usr/bin/env python3
"""Wave-5c: reference-table lane (times tables, ASCII, primes, roman numerals,
fraction-decimal-percent, HTTP codes, HTML entities). Static pages under
/reference/, idempotent. Pattern follows conversion-tables lane."""
import os, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'reference')
os.makedirs(OUT, exist_ok=True)

def primes_upto(n):
    sieve = [True]*(n+1); sieve[0]=sieve[1]=False
    for i in range(2,int(n**.5)+1):
        if sieve[i]:
            for j in range(i*i,n+1,i): sieve[j]=False
    return [i for i,v in enumerate(sieve) if v]

ROMAN=[(1000,'M'),(900,'CM'),(500,'D'),(400,'CD'),(100,'C'),(90,'XC'),(50,'L'),(40,'XL'),(10,'X'),(9,'IX'),(5,'V'),(4,'IV'),(1,'I')]
def to_roman(n):
    out=''
    for v,s in ROMAN:
        while n>=v: out+=s; n-=v
    return out

HTTP={100:'Continue',101:'Switching Protocols',200:'OK',201:'Created',202:'Accepted',204:'No Content',301:'Moved Permanently',302:'Found',304:'Not Modified',307:'Temporary Redirect',308:'Permanent Redirect',400:'Bad Request',401:'Unauthorized',403:'Forbidden',404:'Not Found',405:'Method Not Allowed',408:'Request Timeout',409:'Conflict',410:'Gone',418:"I'm a teapot",429:'Too Many Requests',500:'Internal Server Error',502:'Bad Gateway',503:'Service Unavailable',504:'Gateway Timeout'}

ENTITIES={'&amp;':'Ampersand','&lt;':'Less than','&gt;':'Greater than','&quot;':'Double quote','&apos;':'Apostrophe','&nbsp;':'Non-breaking space','&copy;':'Copyright','&reg;':'Registered trademark','&trade;':'Trademark','&hellip;':'Ellipsis','&mdash;':'Em dash','&ndash;':'En dash','&laquo;':'Left double angle quote','&raquo;':'Right double angle quote','&deg;':'Degree sign','&plusmn;':'Plus-minus','&times;':'Multiplication sign','&divide;':'Division sign','&micro;':'Micro sign','&para;':'Pilcrow','&sect;':'Section sign','&bull;':'Bullet','&dagger;':'Dagger','&euro;':'Euro sign','&pound;':'Pound sign','&yen;':'Yen sign','&cent;':'Cent sign','&alpha;':'Greek alpha','&beta;':'Greek beta','&pi;':'Pi','&infin;':'Infinity','&radic;':'Square root','&sum;':'Summation','&larr;':'Left arrow','&rarr;':'Right arrow'}

def times_row(n):
    return [n*i for i in range(1,13)]

TABLES = {}

# 1-12 times tables, one page each
for n in range(1,13):
    TABLES[f'{n}-times-table'] = {
        'title': f'{n} Times Table',
        'desc': f'Printable {n} times table from 1×{n} to 12×{n}, with the multiplication chart and pattern tips.',
        'intro': f'The {n} times table lists the products of {n} multiplied by 1 through 12: {n}×1={n}, {n}×2={n*2}, {n}×3={n*3} … {n}×12={n*12}.',
        'cols': [f'{n} × {i}' for i in range(1,13)],
        'rows': [['Answer']+[str(n*i) for i in range(1,13)]],
        'extra': [[f'{n} × {i}', str(n*i)] for i in range(1,13)],
    }

# fraction-decimal-percent
fr=[]
for d in range(2,13):
    from math import gcd
    for num in range(1,d):
        if gcd(num,d)==1:
            fr.append([f'{num}/{d}', f'{num/d:.6f}'.rstrip('0').rstrip('.'), f'{round(num/d*100,4):g}%'])
TABLES['fraction-decimal-percent-chart'] = {'title':'Fraction to Decimal to Percent Chart','desc':'Complete fraction, decimal and percent conversion chart for common fractions from 1/2 to 11/12.','intro':'Common fractions convert to decimals by division and to percents by multiplying the decimal by 100. For example, 1/2 = 0.5 = 50% and 1/4 = 0.25 = 25%.','cols':['Fraction','Decimal','Percent'],'rows':fr}

# ASCII codes
ascii_rows=[[str(i), chr(i), hex(i), ('Control' if i<32 else 'Printable')] for i in range(32,127)]
ctrl={0:'NUL',7:'BEL',8:'BS',9:'TAB',10:'LF',13:'CR',27:'ESC'}
ascii_rows += [[str(i),ctrl.get(i,'CTRL'),hex(i),'Control'] for i in sorted(ctrl)]
TABLES['ascii-codes-table']={'title':'ASCII Codes Table','desc':'Full printable ASCII table with decimal, hexadecimal and character codes, plus common control characters.','intro':'ASCII assigns each character a number: A is 65, a is 97, 0 is 48, and space is 32. Codes 0-31 are control characters like TAB (9) and LF (10).','cols':['Decimal','Character','Hex','Type'],'rows':ascii_rows}

# HTTP status codes
def http_class(c):
    if c < 200: return 'Informational'
    if c < 300: return 'Success'
    if c < 400: return 'Redirect'
    if c < 500: return 'Client error'
    return 'Server error'
TABLES['http-status-codes']={'title':'HTTP Status Codes List','desc':'Complete list of HTTP status codes with meanings: 1xx informational, 2xx success, 3xx redirect, 4xx client errors, 5xx server errors.','intro':'HTTP status codes tell the browser what happened: 200 means OK, 301 is a permanent redirect, 404 means not found, and 500 is a server error.','cols':['Code','Meaning','Class'],'rows':[[c,m,http_class(c)] for c,m in HTTP.items()]}

# primes
pr=primes_upto(1000)
TABLES['prime-numbers-list']={'title':'Prime Numbers List (1 to 1000)','desc':'Complete list of prime numbers up to 1000 — 168 primes in a printable reference table.','intro':'A prime number is divisible only by 1 and itself. There are 168 primes below 1000; the first ten are 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.','cols':['#','Prime','Prime','Prime','Prime'],'rows':[[str(i+1)]+[str(pr[i]) if i<len(pr) else '',str(pr[i+168]) if i+168<len(pr) else '',str(pr[i+336]) if i+336<len(pr) else '',str(pr[i+504]) if i+504<len(pr) else ''] for i in range(0,168,1) if i<len(pr)]}

# roman numerals
rn=[[str(i),to_roman(i)] for i in range(1,51)]
TABLES['roman-numerals-chart']={'title':'Roman Numerals Chart 1-50','desc':'Roman numerals 1 to 50 conversion chart with the rules for reading and writing Roman numbers.','intro':'Roman numerals use letters: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. For example, 2026 is MMXXVI.','cols':['Number','Roman','Number','Roman'],'rows':[[a,b,rn[i+25][0],rn[i+25][1]] for i,a,b in [(i,rn[i][0],rn[i][1]) for i in range(25)]]}

# HTML entities
TABLES['html-entities-chart']={'title':'HTML Entity Codes Chart','desc':'HTML special characters and entity references: ampersand, quotes, copyright, arrows, math symbols and more.','intro':'HTML entities let you display reserved characters: use &amp;amp; for &, &amp;lt; for <, and &amp;copy; for ©. Each entity has a numeric form like &#38;.','cols':['Entity','Character','Name'],'rows':[[e, e.replace('&','&amp;').replace('<','&lt;').replace('>','&gt;'), n] for e,n in ENTITIES.items()]}

# common conversions quick ref
conv=[['1 inch','2.54 cm'],['1 foot','30.48 cm'],['1 mile','1.609 km'],['1 pound','453.6 g'],['1 kg','2.205 lb'],['1 US gallon','3.785 L'],['1 imperial gallon','4.546 L'],['1 cup (US)','237 ml'],['1 mph','1.609 km/h'],['1 knot','1.852 km/h'],['0 °C','32 °F'],['100 °C','212 °F'],['1 bar','14.50 psi'],['1 hp','745.7 W'],['1 calorie','4.184 J']]
TABLES['common-conversions-cheat-sheet']={'title':'Common Unit Conversions Cheat Sheet','desc':'Everyday unit conversion cheat sheet: length, weight, volume, speed and temperature at a glance.','intro':'The most-used conversions: 1 inch = 2.54 cm, 1 kg = 2.205 lb, 1 US gallon = 3.785 L, and °F = °C × 9/5 + 32.','cols':['From','Equals','From','Equals'],'rows':[[conv[i][0],conv[i][1],conv[i+8][0] if i+8<len(conv) else '',conv[i+8][1] if i+8<len(conv) else ''] for i in range(8)]}

TPL = '''<!DOCTYPE html>
<html lang="en">
<head>
<script src="/shared/domain-redirect.js"></script>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title} | ToolAspect</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="https://toolaspect.com/reference/{slug}/">
<meta property="og:title" content="{title}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://toolaspect.com/reference/{slug}/">
<meta property="og:description" content="{desc}">
<meta property="og:site_name" content="ToolAspect">
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"Table","name":"{title}","about":"{title}","url":"https://toolaspect.com/reference/{slug}/"}}</script>
<script src="/shared/nav.js"></script>
<style>
.wrap{{max-width:860px;margin:0 auto;padding:2rem 1.5rem;position:relative;z-index:1}}
nav.breadcrumb{{font-size:.8rem;color:var(--muted);margin-bottom:12px}}
nav.breadcrumb a{{color:var(--muted)}}
h1{{font-size:1.5rem;font-weight:700;margin-bottom:6px}}
.ans{{background:var(--surface);border:1px solid var(--border);border-left:3px solid var(--primary);border-radius:10px;padding:14px 16px;margin:14px 0;font-size:.95rem;color:var(--text)}}
table{{width:100%;border-collapse:collapse;margin:16px 0;font-size:.85rem}}
th,td{{padding:6px 10px;text-align:left;border:1px solid var(--border)}}
th{{background:var(--bg-elevated);font-weight:600;font-size:.8rem}}
tr:nth-child(even){{background:var(--bg-elevated)}}
.seo{{margin-top:24px}}.seo h2{{font-size:1.05rem;font-weight:600;margin:14px 0 6px}}
.seo p{{color:var(--text-secondary);font-size:.88rem;line-height:1.7}}
.related{{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.5rem}}
.related a{{padding:.4rem .8rem;background:var(--surface);border:1px solid var(--border);border-radius:8px;font-size:.8rem;color:var(--text-secondary);text-decoration:none}}
</style>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-20E2JPEZ4Z"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){{dataLayer.push(arguments)}}gtag('js',new Date());gtag('config','G-20E2JPEZ4Z',{{'anonymize_ip':true}});</script>
</head>
<body>
<div class="wrap">
<nav class="breadcrumb"><a href="/">Home</a> › <a href="/reference/">Reference</a> › {title}</nav>
<h1>{title}</h1>
<div class="ans" data-ta-answer-text>{intro}</div>
{table_html}
<div class="seo">
<h2>About this table</h2>
<p>{desc}</p>
</div>
<div class="related">{related}</div>
</div>
</body>
</html>'''

def build_table(t):
    h='<table><thead><tr>'+''.join(f'<th>{c}</th>' for c in t['cols'])+'</tr></thead><tbody>'
    for r in t['rows']:
        h+='<tr>'+''.join(f'<td>{v}</td>' for v in r)+'</tr>'
    return h+'</tbody></table>'

def main():
    slugs=sorted(TABLES)
    related=''.join(f'<a href="/{s}/">{TABLES[s]["title"]}</a>' for s in slugs[:8])
    for slug,t in TABLES.items():
        d=os.path.join(OUT,slug); os.makedirs(d,exist_ok=True)
        html=TPL.format(slug=slug,title=t['title'],desc=t['desc'],intro=t['intro'],table_html=build_table(t),related=related)
        open(os.path.join(d,'index.html'),'w').write(html)
    # hub
    hub_items=''.join(f'<li><a href="/reference/{s}/">{TABLES[s]["title"]}</a></li>' for s in slugs)
    hub=TPL.format(slug='',title='Reference Tables',desc='Free printable reference tables: multiplication, ASCII, primes, Roman numerals, HTTP codes and unit conversions.',intro='Quick-reference tables for math, coding and everyday conversions — printable, copyable, and cited by AI assistants.',table_html='<ul style="columns:2;list-style:none">'+hub_items+'</ul>',related='')
    open(os.path.join(OUT,'index.html'),'w').write(hub)
    print(f'reference: {len(slugs)} tables + hub')

if __name__=='__main__':
    main()
