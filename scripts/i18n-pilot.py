#!/usr/bin/env python3
"""i18n L0 pilot — 20 top pages x 3 languages (es, de, pt-BR).
Creates /<lang>/<slug>/index.html from the English page:
- translates visible text nodes via dictionary (nav/labels/chrome) + page h1/h2/h3/p/li
  using the GLM lane (127.0.0.1:8799) with a strict JSON protocol
- injects hreflang cluster into BOTH the translated page and the English source
- idempotent via data-i18n-pilot marker; skips pages already done"""
import os, re, json, urllib.request, sys, html as htmllib

ROOT = os.environ.get("TA_ROOT") or os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PILOT_PAGES = ["percentage-calculator","bmi-calculator","age-calculator","tip-calculator","mortgage-calculator",
"unit-converter","json-formatter","word-counter","currency-converter","compound-interest-calculator",
"loan-calculator","discount-calculator","vat-calculator","sales-tax-calculator","date-difference-calculator",
"hours-calculator","bmr-calculator","calorie-calculator","gpa-calculator","random-number-generator"]
LANGS = {"es":"es","de":"de","pt":"pt-br"}  # dir -> hreflang code
GLM = "http://127.0.0.1:8799/api/CODING/paas/v4/chat/completions"

def glm_translate(items, lang):
    """items: list of strings. GLM first; Google translate endpoint as fallback."""
    tgt = {"es": "es", "de": "de", "pt": "pt"}.get(lang, lang)
    try:
        prompt = ("Translate each UI/text string to %s. Keep HTML entities, numbers, formulas, "
                  "product name 'ToolAspect' unchanged. Return ONLY a JSON array of translations, "
                  "same length and order.\n\n%s" % (lang, json.dumps(items, ensure_ascii=False)))
        body = json.dumps({"model":"glm-4.7","messages":[{"role":"user","content":prompt}],"max_tokens":8000,"temperature":0.2}).encode()
        req = urllib.request.Request(GLM, data=body, headers={"Content-Type":"application/json","Authorization":"Bearer dummy"})
        with urllib.request.urlopen(req, timeout=180) as r:
            out = json.loads(r.read())["choices"][0]["message"]["content"]
        m = re.search(r"\[.*\]", out, re.S)
        if not m:
            raise RuntimeError("GLM returned no JSON array: " + out[:200])
        arr = json.loads(m.group(0))
        if len(arr) == len(items):
            return arr
    except Exception:
        pass
    # fallback: Google translate (free endpoint, batches via q params)
    import urllib.parse, urllib.request, time as _t
    out = []
    for s in items:
        q = urllib.parse.quote(s)
        url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl={tgt}&dt=t&q={q}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        for attempt in range(6):
            try:
                with urllib.request.urlopen(req, timeout=20) as r:
                    data = json.loads(r.read())
                break
            except urllib.error.HTTPError as e:
                if e.code == 429 and attempt < 5:
                    _t.sleep(20 * (attempt + 1)); continue
                raise
        out.append("".join(seg[0] for seg in data[0]))
        _t.sleep(2.0)
    return out

TRANS_RE = re.compile(r'>([^<>{}\n]{6,300})<')

def extract_strings(doc):
    """visible text runs in body, excluding scripts/styles/input values/json-ld."""
    doc = re.sub(r'<script.*?</script>|<style.*?</style>', '', doc, flags=re.S)
    return list(dict.fromkeys(m.group(1).strip() for m in TRANS_RE.finditer(doc)
                              if m.group(1).strip() and not m.group(1).strip().startswith('{')))

def hreflang_cluster(slug):
    urls = ['<link rel="alternate" hreflang="en" href="https://toolaspect.com/%s/" />' % slug]
    for d, code in LANGS.items():
        urls.append('<link rel="alternate" hreflang="%s" href="https://toolaspect.com/%s/%s/" />' % (code, d, slug))
    urls.append('<link rel="alternate" hreflang="x-default" href="https://toolaspect.com/%s/" />' % slug)
    return "\n".join(urls)

def main():
    only_lang = sys.argv[1] if len(sys.argv) > 1 else None
    for slug in PILOT_PAGES:
        src = os.path.join(ROOT, slug, "index.html")
        if not os.path.exists(src):
            print("skip (missing)", slug); continue
        doc = open(src, encoding="utf-8").read()
        # add hreflang cluster to English source (idempotent)
        if 'hreflang="es"' not in doc:
            doc = doc.replace("</head>", hreflang_cluster(slug) + "\n</head>", 1)
            open(src, "w", encoding="utf-8").write(doc)
            print(slug, "EN hreflang added")
        for d in LANGS:
            if only_lang and d != only_lang: continue
            out_dir = os.path.join(ROOT, d, slug)
            out_f = os.path.join(out_dir, "index.html")
            if os.path.exists(out_f):
                print(d, slug, "exists"); continue
            strings = extract_strings(doc)
            if not strings:
                print(d, slug, "no strings?!"); continue
            # translate in chunks of 40
            trans = {}
            for i in range(0, len(strings), 40):
                chunk = strings[i:i+40]
                for s, t in zip(chunk, glm_translate(chunk, d)):
                    trans[s] = t
            tdoc = doc
            def repl(m):
                s = m.group(1).strip()
                return ">" + trans.get(s, m.group(1)) + "<" if s in trans and trans[s] != s else m.group(0)
            tdoc = re.sub(r'<script.*?</script>|<style.*?</style>', lambda m: m.group(0), tdoc, flags=re.S)  # keep as-is marker
            tdoc = TRANS_RE.sub(repl, tdoc)
            tdoc = tdoc.replace('data-i18n-pilot=""', '')
            # canonical + lang attr
            tdoc = re.sub(r'<html lang="en"', f'<html lang="{d}"', tdoc)
            tdoc = re.sub(r'<link rel="canonical" href="https://toolaspect.com/%s/"' % slug,
                          f'<link rel="canonical" href="https://toolaspect.com/{d}/{slug}/"', tdoc)
            os.makedirs(out_dir, exist_ok=True)
            open(out_f, "w", encoding="utf-8").write(tdoc)
            print(d, slug, "written", len(trans), "strings")

if __name__ == "__main__":
    main()
