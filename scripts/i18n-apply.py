#!/usr/bin/env python3
"""apply pre-translated dictionary to build de/pt pages (dicts written by the chat LLM).
usage: i18n-apply.py <lang> <dict.json>"""
import os, re, json, sys, importlib.util
lang = sys.argv[1]; trans = json.load(open(sys.argv[2]))
spec = importlib.util.spec_from_file_location("p", os.path.join(os.path.dirname(__file__), "i18n-pilot.py"))
m = importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
for slug in m.PILOT_PAGES:
    src = os.path.join(m.ROOT, slug, "index.html")
    if not os.path.exists(src): print("skip", slug); continue
    doc = open(src, encoding="utf-8").read()
    out_f = os.path.join(m.ROOT, lang, slug, "index.html")
    if os.path.exists(out_f): print(lang, slug, "exists"); continue
    def repl(mm):
        s = mm.group(1).strip()
        return ">" + trans[s] + "<" if s in trans and trans[s] != s else mm.group(0)
    tdoc = m.TRANS_RE.sub(repl, doc)
    tdoc = re.sub(r'<html lang="en"', f'<html lang="{lang}"', tdoc)
    tdoc = re.sub(r'<link rel="canonical" href="https://toolaspect.com/%s/"' % slug,
                  f'<link rel="canonical" href="https://toolaspect.com/{lang}/{slug}/"', tdoc)
    os.makedirs(os.path.dirname(out_f), exist_ok=True)
    open(out_f, "w", encoding="utf-8").write(tdoc)
    print(lang, slug, "written")
