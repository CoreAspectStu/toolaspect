#!/usr/bin/env python3
"""Wave-5a: FAQPage JSON-LD to 100% tool-page coverage.

Priority of FAQ sourcing per page:
  1. existing <div class="faq-item"><h3>Q</h3><p>A</p></div> blocks
  2. <strong>Q?</strong> ... <p>A</p> pairs under a FAQ-ish heading
  3. matched guide content (slug similarity, wave-3 pattern) Q/A pairs
  4. per-tool-type templates (keyword bank) / generic tool fallback

Injects: FAQPage JSON-LD (marker data-ta-schema="faq1") before </head>,
plus a visible FAQ section (if the page has none) with inline scoped CSS.
Idempotent: pages already carrying faq1 are skipped entirely.
"""
import difflib, html as htmlmod, json, os, re, sys

BASE = 'https://toolaspect.com'
MAXQ = 4  # 2-4 FAQs

skip = {'guides','shared','node_modules','scripts','docs','roadmap','packages',
        '_bmad-output','stock-media','embed','.git','convert','time-zones','salary-by-state',
        'gift-ideas','pet-names','countdown-to','__unused__',
        '__unused__','__unused__',
        '__unused1__','__unused__','conversion-tables','youtube'}
tools = sorted(d for d in os.listdir('.')
               if os.path.isdir(d) and os.path.isfile(d+'/index.html') and d not in skip)
guides = os.listdir('guides') if os.path.isdir('guides') else []

TAG = re.compile(r'<[^>]+>')
def clean(s):
    s = htmlmod.unescape(TAG.sub('', s)).strip()
    return re.sub(r'\s+', ' ', s)

def title_of(slug, src):
    m = re.search(r'<title>(.*?)</title>', src, re.S)
    t = clean(m.group(1)) if m else slug.replace('-', ' ').title()
    return re.sub(r'\s*[|–-]\s*ToolAspect.*$', '', t).strip() or slug.replace('-', ' ').title()

# ---- source 1: faq-item divs -------------------------------------------
FAQ_ITEM = re.compile(r'<div class="faq-item"[^>]*>\s*<h3[^>]*>(.*?)</h3>\s*<p[^>]*>(.*?)</p>\s*</div>', re.S)
def from_faq_items(src):
    return [(clean(q), clean(a)) for q, a in FAQ_ITEM.findall(src) if clean(q) and clean(a)]

# ---- source 2: strong QA pairs -----------------------------------------
STRONG_QA = re.compile(r'<p[^>]*>\s*<strong>([^<]{8,140}?\?)</strong>\s*</p>\s*<(?:p|div)[^>]*>(.*?)</(?:p|div)>', re.S)
def from_strong_qa(src):
    return [(clean(q), clean(a)) for q, a in STRONG_QA.findall(src)
            if clean(q) and len(clean(a)) > 30]

# ---- source 3: matched guide -------------------------------------------
def guide_qa(slug):
    m = difflib.get_close_matches(slug, guides, n=1, cutoff=0.55)
    if not m:
        return []
    try:
        g = open(f'guides/{m[0]}/index.html', encoding='utf-8').read()
    except OSError:
        return []
    qa = from_faq_items(g) or from_strong_qa(g)
    return qa[:MAXQ]

# ---- source 4: templates -----------------------------------------------
def T(q, a): return (q, a)
TEMPLATES = [
 ('mortgage', lambda n: [T(f'How much house can I afford with this mortgage calculator?',
    'Enter your monthly income, debts, down payment, and loan terms. A common guideline is that total housing costs should stay under 28% of gross monthly income, and total debt under 36% — the calculator applies these ratios to your numbers.'),
   T('How is a monthly mortgage payment calculated?',
    'Payment = P · r · (1+r)^n / ((1+r)^n − 1), where P is principal, r is the monthly interest rate (annual rate ÷ 12), and n the number of payments. Property taxes, insurance, and PMI are added on top of principal and interest.')]),
 ('percentage', lambda n: [T('How do I calculate a percentage of a number?',
    'Multiply the number by the percentage divided by 100. For example, 15% of 240 = 240 × 0.15 = 36. The calculator handles this instantly for any value and percentage, including reverse and percentage-change problems.'),
   T('How do I calculate percentage change between two numbers?',
    'Percentage change = (new − old) ÷ old × 100. A positive result is an increase, negative a decrease. For example, going from 80 to 100 is a 25% increase.')]),
 ('tip', lambda n: [T('How much should I tip?',
    '15–20% is customary for table service in the US, with 18–20% typical for good service. The calculator splits the tip and total across any number of people.'),
   T('How do I calculate tip on a bill?',
    'Multiply the bill by the tip percentage as a decimal (e.g., 18% → 0.18), then add it to the bill for the total. The calculator does this and per-person amounts automatically.')]),
 ('bmi|bmr|tdee|calorie|macro', lambda n: [T('What is a healthy range for this measurement?',
    'For BMI, 18.5–24.9 is considered the normal range, 25–29.9 overweight, and 30+ obese. BMI is a screening tool, not a diagnosis — athletes with high muscle mass can score high without excess fat. Always interpret alongside body composition and clinical advice.')]),
 ('loan|amortiz|refinanc|apr|interest', lambda n: [T('How is interest on a loan calculated?',
    'Most installment loans use amortization: each monthly payment covers the month\'s interest (remaining balance × rate ÷ 12) plus enough principal to pay the loan off over the term. Early payments are interest-heavy; later ones principal-heavy.')]),
 ('calorie|macro|protein', lambda n: [T('How accurate are calorie and macro estimates?',
    'Formulas like Mifflin-St Jeor estimate within roughly 10% for most people. Use the number as a starting point, track weight change over 2–3 weeks, and adjust intake based on real results.')]),
 ('converter|convert|currency|crypto|exchange', lambda n: [T('How often do exchange rates update?',
    'Rates used by the calculator refresh periodically and are indicative only — actual rates from your bank or exchange include a spread or fee, typically 0.5–3% off the mid-market rate.')]),
 ('generator|maker|creator', lambda n: [T(f'Is the {n.lower()} free to use?',
    f'Yes — the {n.lower()} runs entirely in your browser, needs no signup, and your data never leaves your device.'),
   T(f'How does the {n.lower()} work?',
    f'Enter your inputs or configure the options and the {n.lower()} produces output instantly, client-side, with no page reloads.')]),
 ('test|speed|checker|measure', lambda n: [T(f'How accurate is the {n.lower()}?',
    f'Results depend on your device and environment — run the {n.lower()} a few times and treat the median as your true figure rather than any single reading.')]),
 ('age|date|time|countdown|duration', lambda n: [T('How is age or duration calculated?',
    'Full years/months/days are counted calendar-wise — e.g., from Feb 28 to Mar 1 is one day in a non-leap year but two days when Feb 29 exists. The calculator uses exact calendar arithmetic, not a fixed 365-day year.')]),
 ('area|volume|sq|feet|meter|tile|paint|concrete|asphalt|gravel|mulch|sod', lambda n: [T('What waste factor should I add?',
    'Add 10% over the measured area for standard layouts, 15% for diagonal or patterned ones, and up to 20% for large-format or natural material — the surplus covers cuts, breakage, and future repairs.')]),
 ('salary|hourly|paycheck|tax|income|wage|raise|pto', lambda n: [T('Is this calculation the same as my paycheck?',
    'It is an estimate. Actual pay depends on withholding elections, pre-tax deductions, state rules, and filing status — use the result as a planning figure, not a payroll guarantee.')]),
 ('password|uuid|hash|random|qr|barcode', lambda n: [T(f'Is the {n.lower()} secure to use?',
    f'Yes — the {n.lower()} runs entirely in your browser. Nothing is transmitted or stored on a server, so sensitive values never leave your device.')]),
 ('roof|fence|deck|kitchen|bathroom|remodel|cost|price|budget|wedding|party', lambda n: [T(f'How accurate are the {n.lower()} estimates?',
    'Estimates are based on typical ranges for materials and labor. Your final cost varies with location, material grade, site conditions, and local labor rates — get 2–3 quotes before committing.')]),
 ('pregnancy|due|ovulation|fertility', lambda n: [T('How is the date estimated?',
    'Estimates use standard clinical rules (e.g., Naegele\'s rule for due dates: 280 days from the last menstrual period). Ultrasound dating in the first trimester is more accurate and can shift the estimate.')]),
]
def from_template(slug, name):
    for pat, fn in TEMPLATES:
        if re.search(pat, slug):
            try:
                return fn(name)
            except Exception:
                return []
    return []

GENERIC = lambda n: [
 T(f'How do I use the {n}?',
  f'Enter your values in the input fields and the result updates instantly — no signup or download required. The {n} runs entirely in your browser.'),
 T(f'Is the {n} free?',
  f'Yes, the {n} on ToolAspect is completely free to use, with no limits, accounts, or watermarks.'),
 T(f'How accurate are the results from the {n}?',
  f'The {n} uses standard formulas applied to the numbers you enter. Results are as accurate as your inputs — double-check critical decisions against a professional source.'),
]

FAQ_CSS = ('<style data-ta-schema="faqcss">.ta-faq{margin:32px 0}'
           '.ta-faq h2{font-size:1.15rem;font-weight:700;margin-bottom:8px}'
           '.ta-faq .faq-item{padding:12px 0;border-bottom:1px solid #e5e7eb}'
           '.ta-faq .faq-item:last-child{border-bottom:none}'
           '.ta-faq .faq-item h3{font-size:.95rem;font-weight:600;margin:0 0 6px}'
           '.ta-faq .faq-item p{font-size:.88rem;line-height:1.7;margin:0}'
           '@media(details){.ta-faq details summary{cursor:pointer;list-style:none}}'
           '.ta-faq summary::-webkit-details-marker{display:none}</style>\n')

def faq_block(qas, name):
    items = ''.join(
        f'<details class="faq-item"{(" open" if i == 0 else "")}><summary><h3>{htmlmod.escape(q)}</h3></summary>'
        f'<p>{htmlmod.escape(a)}</p></details>'
        for i, (q, a) in enumerate(qas))
    return (f'<section class="ta-faq" data-ta-schema="faq-vis1" aria-label="Frequently asked questions">'
            f'<h2>Frequently Asked Questions</h2>{items}</section>\n')

stats = {'schema_injected': 0, 'visible_added': 0, 'src_items': 0, 'src_strong': 0,
         'src_guide': 0, 'src_template': 0, 'src_generic': 0, 'skipped_existing': 0}
noqa = []
for slug in tools:
    path = f'{slug}/index.html'
    src = open(path, encoding='utf-8').read()
    if 'data-ta-schema="faq1"' in src:
        stats['skipped_existing'] += 1
        continue
    # skip pages that already have FAQPage JSON-LD from another generator: mark covered
    if '"@type":"FAQPage"' in src or '"@type": "FAQPage"' in src:
        stats['skipped_existing'] += 1
        continue

    name = title_of(slug, src)
    qas, srcd = from_faq_items(src), 'items'
    if not qas:
        qas, srcd = from_strong_qa(src), 'strong'
    if not qas:
        qas, srcd = guide_qa(slug), 'guide'
    if not qas:
        qas, srcd = from_template(slug, name), 'template'
    if not qas:
        qas, srcd = GENERIC(name), 'generic'
    if len(qas) < 2:
        for extra in GENERIC(name):
            if len(qas) >= 2:
                break
            if all(extra[0] != q for q, _ in qas):
                qas.append(extra)
    qas = qas[:MAXQ]
    if not qas:
        noqa.append(slug)
        continue

    schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q,
             "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in qas
        ],
    }
    blob = json.dumps(schema, ensure_ascii=False, separators=(',', ':'))
    ld = ('<script type="application/ld+json" data-ta-schema="faq1">'
          + blob.replace('</', '<\\/') + '</script>\n')
    assert '</script' not in blob

    src = src.replace('</head>', ld + '</head>', 1)

    has_visible = '<div class="faq-item"' in src or '<details class="faq-item"' in src
    if not has_visible:
        block = faq_block(qas, name)
        css = '' if 'faq-item{' in src else FAQ_CSS
        injected = False
        for anchor in ('<h2>Related tools', '<h2 id="related', 'class="related', '</article>', '</main>'):
            i = src.find(anchor)
            if i != -1:
                src = src[:i] + css + block + src[i:]
                injected = True
                break
        if not injected:
            src = src.replace('</body>', css + block + '</body>', 1)
        stats['visible_added'] += 1

    open(path, 'w', encoding='utf-8').write(src)
    stats['schema_injected'] += 1
    stats['src_' + (srcd if srcd in ('items', 'strong', 'guide', 'template') else 'generic')] += 1

print(json.dumps(stats, indent=1))
if noqa:
    print('NO FAQ POSSIBLE:', noqa)
