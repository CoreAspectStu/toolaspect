#!/usr/bin/env python3
"""Wire Umami analytics + guide->calculator conversion events into every page.
- Injects the Umami script tag (if missing) into <head> of all */index.html.
- On guide pages (guides/*/index.html): adds outbound-click event on links to
  /<calculator>/ paths (data-umami-event="guide-to-tool").
- On calculator pages: fires "tool-used" event when a form inside the main
  tool container is submitted or its primary button clicked.
Idempotent; skips pages already tagged. NEVER touches content.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
UMAMI = ('<script async defer data-website-id="087c548b-708c-42bf-9d9a-5704df7880f2" '
         'src="https://analytics.coreaspectai.com/script.js"></script>')
TRACKER = """<script>
(function(){
  function ev(n){ try{ window.umami && window.umami.track(n); }catch(e){} }
  if (location.pathname.startsWith('/guides/')) {
    document.addEventListener('click', function(e){
      var a = e.target.closest && e.target.closest('a[href]');
      if (a && /^\\/[^\\/]/.test(a.getAttribute('href')) && !/^(\\/guides\\/|\\/all-tools\\/?$)/.test(a.getAttribute('href')))
        ev('guide-to-tool');
    }, true);
  } else {
    var t = document.querySelector('.tool, .ta-tool, main form, #tool');
    if (t) t.addEventListener('submit', function(){ ev('tool-used'); }, true);
    var fired = false;
    document.addEventListener('click', function(e){
      if (fired) return;
      var b = e.target.closest && e.target.closest('button, input[type=submit], input[type=button]');
      if (b && (b.type === 'submit' || /calc|compute|calculate|convert|generate|run|check/i.test(b.textContent || b.value || ''))) {
        fired = true; ev('tool-used');
      }
    }, true);
  }
})();
</script>"""

stats = {"umami_added": 0, "tracker_added": 0, "skipped": 0}
for f in ROOT.glob("*/index.html"):
    raw = f.read_text(errors="replace"); orig = raw
    if "analytics.coreaspectai.com/script.js" not in raw:
        m = re.search(r"</head>", raw)
        if m:
            raw = raw[:m.start()] + UMAMI + "\n" + raw[m.start():]
            stats["umami_added"] += 1
    if "guide-to-tool" not in raw and "tool-used" not in raw:
        m = re.search(r"</body>", raw)
        if m:
            raw = raw[:m.start()] + TRACKER + "\n" + raw[m.start():]
            stats["tracker_added"] += 1
    if raw == orig: stats["skipped"] += 1
    else: f.write_text(raw)
print(stats)
