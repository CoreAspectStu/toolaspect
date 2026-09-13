/* ============================================================
   ToolAspect — Result Actions (shared/result-actions.js)
   Result-time engagement + traffic loop:
     1. Email-this-result button (mailto: with results text)
     2. Copy-permalink button (result stays shareable via URL)
     3. Print button (print-optimized stylesheet)
     4. Related-tools cross-links injected at result time from
        shared/related-index.json (category siblings).
   Self-rendering, vanilla JS, zero dependencies. Detects the
   page's result container (#results, #result, #output, .results,
   [class*=result]) and inserts the action bar right after it once
   content appears (MutationObserver fallback for dynamic tools).
   Include AFTER nav.js: <script src="/shared/result-actions.js"></script>
   ============================================================ */
(function () {
  'use strict';

  /* --- resolve base (works for /shared/ and ../shared/ includes) --- */
  var scripts = document.querySelectorAll('script[src]');
  var base = '';
  for (var i = 0; i < scripts.length; i++) {
    var m = scripts[i].src.match(/^(.*)shared\/result-actions\.js(\?.*)?$/);
    if (m) { base = m[1]; break; }
  }
  if (!base) base = '/';

  var slug = (location.pathname.replace(/^\/|\/$/g, '') || 'home');

  /* ---------- find result container ---------- */
  function findContainer() {
    var ids = ['results', 'result', 'output', 'calcResult', 'resultBox'];
    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      if (el && el.innerHTML.trim()) return el;
    }
    var sels = ['.result-card', '.results-grid', '.output-card', '.result',
                '[class*="result" i]'];
    for (var j = 0; j < sels.length; j++) {
      var els = document.querySelectorAll(sels[j]);
      if (els.length) {
        var last = els[els.length - 1];
        return last.closest('div[id],section,div[class]');
      }
    }
    return null;
  }

  /* ---------- collect result text ---------- */
  function resultText() {
    var c = findContainer();
    if (!c) return '';
    return c.innerText.replace(/\n{3,}/g, '\n\n').trim().slice(0, 1200);
  }

  function pageTitle() {
    var t = document.title.split('|')[0].split('–')[0].trim();
    return t || 'ToolAspect result';
  }

  /* ---------- styles ---------- */
  function injectCss() {
    if (document.getElementById('ta-result-actions-css')) return;
    var st = document.createElement('style');
    st.id = 'ta-result-actions-css';
    st.textContent =
      '.ra-bar{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin:16px 0 4px;padding:12px 14px;background:var(--surface,#f8fafc);border:1px solid var(--border,#e2e8f0);border-radius:12px}' +
      '.ra-btn{display:inline-flex;align-items:center;gap:.4rem;padding:.45rem .9rem;border-radius:8px;border:1px solid var(--border,#cbd5e1);background:var(--bg,#fff);color:var(--text,#0f172a);font-size:.85rem;font-weight:600;cursor:pointer;text-decoration:none}' +
      '.ra-btn:hover{border-color:var(--primary,#6366f1);color:var(--primary,#6366f1)}' +
      '.ra-label{font-size:.75rem;color:var(--muted,#64748b);margin-right:auto}' +
      '.ra-related{margin:6px 0 18px}' +
      '.ra-related a{display:inline-block;margin:3px 6px 3px 0;padding:.35rem .75rem;background:var(--surface,#f8fafc);border:1px solid var(--border,#e2e8f0);border-radius:8px;font-size:.82rem;color:var(--text-secondary,#475569);text-decoration:none}' +
      '.ra-related a:hover{border-color:var(--primary,#6366f1);color:var(--primary,#6366f1)}' +
      '@media print{.ra-bar,.ra-related,nav,.ad-slot,.funnel-cta,.site-footer{display:none!important}body{background:#fff}}';
    document.head.appendChild(st);
  }

  /* ---------- build the bar ---------- */
  function buildBar() {
    if (document.getElementById('ta-result-actions')) return;
    var c = findContainer();
    if (!c) return;
    var txt = resultText();
    if (!txt) return;

    var bar = document.createElement('div');
    bar.className = 'ra-bar';
    bar.id = 'ta-result-actions';

    var lbl = document.createElement('span');
    lbl.className = 'ra-label';
    lbl.textContent = 'Done? Keep or share this result:';
    bar.appendChild(lbl);

    var url = location.href.split('#')[0];

    var mail = document.createElement('a');
    mail.className = 'ra-btn';
    mail.href = 'mailto:?subject=' + encodeURIComponent(pageTitle() + ' — ToolAspect') +
      '&body=' + encodeURIComponent(txt + '\n\nCalculated with ' + pageTitle() + ':\n' + url + '\n');
    mail.textContent = '✉ Email this result';

    var copy = document.createElement('button');
    copy.className = 'ra-btn';
    copy.type = 'button';
    copy.textContent = '🔗 Copy link';
    copy.onclick = function () {
      var done = function () { copy.textContent = '✓ Copied!'; setTimeout(function () { copy.textContent = '🔗 Copy link'; }, 2000); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done);
      } else {
        var ta = document.createElement('textarea');
        ta.value = url; document.body.appendChild(ta); ta.select();
        try { document.execCommand('copy'); done(); } catch (e) {}
        document.body.removeChild(ta);
      }
    };

    var prn = document.createElement('button');
    prn.className = 'ra-btn';
    prn.type = 'button';
    prn.textContent = '🖨 Print / PDF';
    prn.onclick = function () { window.print(); };

    bar.appendChild(mail); bar.appendChild(copy); bar.appendChild(prn);
    c.insertAdjacentElement('afterend', bar);

    /* related tools at result time */
    fetch(base + 'shared/related-index.json', { credentials: 'omit' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (idx) {
        if (!idx || !idx[slug]) return;
        var rel = document.createElement('div');
        rel.className = 'ra-related';
        var h = document.createElement('div');
        h.style.cssText = 'font-size:.85rem;font-weight:600;margin:10px 0 2px';
        h.textContent = 'Next: related tools';
        rel.appendChild(h);
        idx[slug].slice(0, 6).forEach(function (s) {
          var a = document.createElement('a');
          a.href = base + s + '/';
          a.textContent = s.replace(/-/g, ' ').replace(/\b\w/g, function (ch) { return ch.toUpperCase(); });
          rel.appendChild(a);
        });
        bar.insertAdjacentElement('afterend', rel);
      })
      .catch(function () {});
  }

  injectCss();

  /* fire on ready + when results appear dynamically */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(buildBar, 400); });
  } else {
    setTimeout(buildBar, 400);
  }
  var tries = 0;
  var iv = setInterval(function () {
    tries++;
    if (document.getElementById('ta-result-actions') || tries > 25) { clearInterval(iv); return; }
    buildBar();
  }, 1200);
})();
