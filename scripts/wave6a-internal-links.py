#!/usr/bin/env python3
"""Wave-6a: internal-link pass for reference/ + convert/ lanes (idempotent).

1. Adds a 'Reference tables' crosslink section to the /converters hub and to
   tool pages mapped in REF_MAP (before </body>).
2. Adds crosslinks FROM each reference/ page back to matching convert/ pairs
   and the converters hub (appended to the existing .related div).
3. Adds a related-units crosslink block to each new convert/<pair> page.
Marker: data-wave6a attr / idempotent string checks.
"""
import os, re, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MARK = 'data-wave6a'

def title_of(s):
    return s.replace('-', ' ').title()

# tool slug -> reference slugs
REF_MAP = {
    'unit-converter': ['common-conversions-cheat-sheet'],
    'percentage-calculator': ['common-conversions-cheat-sheet',
                              'fraction-decimal-percent-chart'],
    'fraction-calculator': ['fraction-decimal-percent-chart'],
    'scientific-calculator': ['common-conversions-cheat-sheet',
                              'fraction-decimal-percent-chart'],
    'roman-numeral-converter': ['roman-numerals-chart'],
    'binary-converter': ['ascii-codes-table'],
    'curl-converter': ['http-status-codes'],
}

# reference slug -> convert pair slugs (same unit family)
REF_TO_CONVERT = {
    'common-conversions-cheat-sheet': [
        'psi-to-bar', 'kilopascal-to-psi', 'calorie-to-joule',
        'joule-to-calorie', 'btu-to-kilojoule', 'degree-to-radian'],
    'fraction-decimal-percent-chart': [],
    'roman-numerals-chart': [],
    'ascii-codes-table': [],
    'http-status-codes': [],
}

def ref_block(refs, heading='Reference tables'):
    links = ' '.join(
        f'<a href="/reference/{r}/">{title_of(r)}</a>' for r in refs)
    return (f'<div class="related" {MARK} style="margin-top:24px">'
            f'<strong>{heading}:</strong> {links} '
            f'<a href="/reference/">All reference tables</a></div>')

def inject_before_body_end(path, html):
    if MARK in html:
        return None
    out = html.replace('</body>', html_inject(path) + '\n</body>', 1)
    return out if out != html else None

def html_inject(path):
    rel = os.path.relpath(path, ROOT)
    if rel == os.path.join('converters', 'index.html'):
        return ref_block(['common-conversions-cheat-sheet',
                          'fraction-decimal-percent-chart',
                          'roman-numerals-chart'],
                         'Reference tables')
    if rel.startswith('convert' + os.sep):
        name = os.path.basename(os.path.dirname(path))
        words = set(name.split('-')) - {'to', 'per', 'second'}
        sibs = []
        for d in sorted(os.listdir(os.path.join(ROOT, 'convert'))):
            if d == name:
                continue
            if words & (set(d.split('-')) - {'to', 'per', 'second'}):
                sibs.append(d)
        parts = []
        if sibs:
            links = ' '.join(f'<a href="/convert/{s}/">{title_of(s)}</a>'
                             for s in sibs[:6])
            parts.append(f'<div class="related" {MARK} style="margin-top:24px">'
                         f'<strong>Related conversions:</strong> {links}</div>')
        parts.append(f'<div class="related" {MARK} style="margin-top:12px">'
                     f'<strong>More:</strong> <a href="/unit-converter/">Unit Converter</a> '
                     f'<a href="/converters/">All converters</a> '
                     f'<a href="/reference/common-conversions-cheat-sheet/">Conversion cheat sheet</a></div>')
        return '\n'.join(parts)
    return ref_block(REF_MAP.get(rel.split(os.sep)[0], []))

def add_to_reference_pages():
    n = 0
    for path in glob.glob(os.path.join(ROOT, 'reference', '*', 'index.html')):
        rel = os.path.basename(os.path.dirname(path))
        if rel in ('index',):
            continue
        html = open(path, encoding='utf-8').read()
        pairs = REF_TO_CONVERT.get(rel, [])
        block = (f'<div class="related" {MARK} style="margin-top:16px">'
                 f'<strong>Convert:</strong> <a href="/converters/">All converters</a>')
        if pairs:
            block += ' ' + ' '.join(
                f'<a href="/convert/{p}/">{title_of(p)}</a>' for p in pairs)
        block += ' <a href="/unit-converter/">Unit Converter</a></div>'
        if MARK in html:
            continue
        if '</div>\n</body>' in html:
            html = html.replace('</div>\n</body>', '</div>\n' + block + '\n</body>', 1)
        else:
            html = html.replace('</body>', block + '\n</body>', 1)
        open(path, 'w', encoding='utf-8').write(html)
        n += 1
    return n

def add_to_tool_pages():
    n = 0
    # converters hub + REF_MAP tools
    targets = [os.path.join(ROOT, 'converters', 'index.html')]
    targets += [os.path.join(ROOT, s, 'index.html') for s in REF_MAP]
    targets += glob.glob(os.path.join(ROOT, 'convert', '*', 'index.html'))
    for path in targets:
        if not os.path.exists(path):
            continue
        html = open(path, encoding='utf-8').read()
        out = inject_before_body_end(path, html)
        if out:
            open(path, 'w', encoding='utf-8').write(out)
            n += 1
    return n

if __name__ == '__main__':
    a = add_to_reference_pages()
    b = add_to_tool_pages()
    print(f'wave6a: reference pages +{a}, tool/convert/hub pages +{b}')
