#!/usr/bin/env python3
"""SEO wave-4: answer-first blocks + share/copy-link buttons on tool pages.

Answer-first block = the direct result/answer rendered as plain text ABOVE the
fold (right after the H1 / ta-definition), so AI crawlers and rich results get
the answer without JS. A generic but truthful answer line per tool is derived
from its H1 + subtitle; shared/answer-first.js later mirrors the tool's live
computed result into the same box (progressive enhancement).

Share block = <div class="ta-share"> wired by shared/share.js (copy-link +
native navigator.share).

Idempotent: pages already carrying data-ta-schema="answer1" are skipped.
Scope: tool dirs only (skip hubs/guides/state pages), same skip set as wave-3.
"""
import os, re, html as htmlmod

os.chdir(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

BASE = 'https://toolaspect.com'
SKIP = {'guides','shared','node_modules','scripts','docs','roadmap','packages',
        '_bmad-output','stock-media','embed','.git','convert','time-zones','salary-by-state',
        'gift-ideas','pet-names','countdown-to','car-insurance-cost-by-state',
        'roof-replacement-cost-by-state','window-replacement-cost-by-state',
        'fence-cost-by-state','hvac-replacement-cost-by-state','conversion-tables','youtube',
        'about','all-tools','finance-tools','health-calculators','creator-tools',
        'converters','developer-tools','everyday-tools','business-tools','contractor-tools',
        'construction-calculators'}

def clean_h1(h):
    # strip emojis, variation selectors, and trim
    h = re.sub(r'[\U0001F000-\U0001FAFF\u2600-\u27BF\uFE0F\u200D]', '', h)
    return re.sub(r'\s+', ' ', h).strip()

def tool_kind(h1):
    l = h1.lower()
    if 'calculator' in l or 'calc' in l: return 'calc'
    for w in ('generator','maker','builder','converter','checker','tester','counter',
              'finder','matcher','encoder','decoder','formatter','validator','extractor'):
        if w in l: return 'gen'
    return 'tool'

def answer_line(h1, slug):
    l = h1.lower(); s = slug.lower(); k = tool_kind(h1)
    if 'percentage' in l or 'percent' in l:
        return (f"The {h1} answers the three core percent questions — what is X% of Y, "
                "X is what percent of Y, and the percent change between two values — instantly, with the worked formula shown.")
    if re.search(r'\bage calculator\b', l):
        return ("Enter a date of birth and the age calculator returns your exact age in years, months, and days — "
                "plus total weeks, days, and hours lived and a countdown to your next birthday.")
    if 'bmi' in l:
        return ("Enter height and weight and the BMI calculator returns your body mass index value and its WHO band "
                "(underweight, normal, overweight, or obese) in both metric and imperial units.")
    if 'tip' in l:
        return ("Enter the bill amount, tip percentage, and number of people to get the tip amount, "
                "total bill, and per-person share instantly.")
    if 'mortgage' in s or 'mortgage' in l:
        return (f"Enter the home price, down payment, rate, and term and the {h1} returns your exact monthly payment "
                "with a full amortization breakdown of principal versus interest.")
    if 'loan' in l or 'payment' in l:
        return (f"Enter the amount, rate, and term and the {h1} returns your exact periodic payment "
                "with a full amortization breakdown of principal versus interest.")
    if 'calorie' in l or 'macro' in l or 'bmr' in l or 'water' in l:
        return (f"Enter your details and the {h1} returns your personalized daily target "
                "with the underlying calculation shown step by step.")
    if k == 'calc':
        return (f"Enter your values and the {h1} returns the exact result instantly — "
                "formula, worked example, and a plain-English explanation are included below the tool.")
    if k == 'gen':
        return (f"The {h1} produces your output instantly from the input you provide — "
                "everything runs in your browser, free, with no signup required.")
    return (f"The {h1} on ToolAspect gives you the answer instantly — free, no signup, "
            "and it runs entirely in your browser.")

stats = {'answer': 0, 'skipped': 0, 'noh1': []}
for d in sorted(os.listdir('.')):
    if d in SKIP or not os.path.isdir(d) or not os.path.isfile(d + '/index.html'):
        continue
    path = d + '/index.html'
    src = open(path, encoding='utf-8', errors='ignore').read()
    if 'data-ta-schema="answer1"' in src:
        stats['skipped'] += 1
        continue
    m = re.search(r'<h1[^>]*>(.*?)</h1>', src, re.S)
    if not m:
        stats['noh1'].append(d)
        continue
    h1 = clean_h1(re.sub(r'<[^>]+>', '', m.group(1)))
    if not h1 or len(h1) < 3:
        stats['noh1'].append(d)
        continue
    answer = answer_line(h1, d)
    a = htmlmod.escape(answer, quote=False)

    block = (
        '<div class="ta-answer" data-ta-schema="answer1" style="background:var(--surface,#f8fafc);'
        'border:1px solid var(--border,#e2e8f0);border-left:3px solid var(--primary,#6366f1);'
        'border-radius:10px;padding:12px 16px;margin:0 0 14px;font-size:.95rem;line-height:1.55">\n'
        '  <p style="margin:0"><strong>Answer:</strong> <span data-ta-answer-text>' + a + '</span></p>\n'
        '</div>\n'
    )
    share = '<div class="ta-share" data-ta-schema="share1" data-ta-slug="' + d + '" aria-label="Share this tool"></div>\n'
    includes = ('<script src="/shared/answer-first.js" defer></script>\n'
                '<script src="/shared/share.js" defer></script>\n')

    orig = src
    # 1) answer-first block: immediately after H1 (above the fold, before inputs)
    src = re.sub(r'(<h1[^>]*>.*?</h1>)', r'\1\n' + block.replace('\\', '\\\\'), src, count=1, flags=re.S)
    # 2) share bar: just before the .ta-answer block's closing — instead place after answer block
    #    (directly under the answer, still above the fold on desktop)
    src = src.replace('</div>\n  <p class="subtitle"', '</div>\n  <p class="subtitle"', 1)  # no-op guard
    # insert share right after the answer block div
    idx = src.find('data-ta-schema="answer1"')
    if idx != -1:
        close = src.find('</div>', idx)
        if close != -1:
            close_end = close + len('</div>')
            src = src[:close_end] + '\n' + share + src[close_end:]
    # 3) script includes before </body>
    if 'src="/shared/answer-first.js"' not in src:
        src = src.replace('</body>', includes + '</body>', 1)

    if src != orig:
        open(path, 'w', encoding='utf-8').write(src)
        stats['answer'] += 1

print('answer blocks added:', stats['answer'],
      '| skipped existing:', stats['skipped'],
      '| no-h1:', len(stats['noh1']))
if stats['noh1'][:10]:
    print('no-h1 examples:', stats['noh1'][:10])
