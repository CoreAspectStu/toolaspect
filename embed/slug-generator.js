/*!
 * ToolAspect Slug Generator Embed
 * Install: <div id="ta-slug-generator"></div>
 *          <script src="https://toolaspect.com/embed/slug-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-slug-generator';
  var BASE = 'https://toolaspect.com/slug-generator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-check{display:flex;align-items:center;font-size:.85rem;color:var(--ta-text);cursor:pointer;gap:6px}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.35rem;font-weight:700;color:var(--ta-accent);word-break:break-all}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '.ta-embed-copy{margin-top:10px;padding:8px 18px;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'slug-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="slug-generator"]')) {
    (document.head || document.documentElement).appendChild(styleEl);
  }

  function findTarget() {
    var el = document.getElementById(TARGET_ID);
    if (el) return el;
    var cs = document.currentScript;
    if (cs && cs.previousElementSibling && cs.previousElementSibling.tagName === 'DIV') return cs.previousElementSibling;
    return null;
  }

  var target = findTarget();
  if (!target) {
    if (window.console) console.error('[ToolAspect] embed container #' + TARGET_ID + ' not found.');
    return;
  }

  var root = document.createElement('div');
  root.className = 'ta-embed-root';
  if (target.getAttribute('data-theme') === 'dark') root.setAttribute('data-theme', 'dark');
  root.innerHTML = ''
    + '<div class="ta-embed-title">Slug Generator</div>'
    + '<div class="ta-embed-subtitle">Turn any title into a clean URL slug</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Title or phrase</label><input type="text" class="ta-title" value="10 Tips for a Better Café Résumé in 2026!" spellcheck="false"></div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Separator</label><select class="ta-sep"><option value="-" selected>Hyphen</option><option value="_">Underscore</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Max length (0 = none)</label><input type="number" class="ta-maxlen" value="0" min="0" step="5"></div>'
    + '<div class="ta-embed-form-group"><label>Stopwords</label><label class="ta-embed-check"><input type="checkbox" class="ta-stop"> Drop a, the, of…</label></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"><div class="ta-embed-big ta-out">—</div><div class="ta-embed-sub ta-sub">type a title above</div>'
    + '<button type="button" class="ta-embed-copy">Copy slug</button></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function slugify(title, opts) {
    opts = opts || {};
    var sep = opts.sep || '-';
    var esc = sep === '-' ? '-' : '_';
    var s = (title || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
    s = s.toLowerCase();
    s = s.replace(/['’`ʼ]/g, '');
    s = s.replace(/&/g, ' and ');
    s = s.replace(/[^a-z0-9]+/gi, esc);
    s = s.replace(new RegExp(esc + '{2,}', 'g'), esc);
    s = s.replace(new RegExp('^' + esc + '+|' + esc + '+$', 'g'), '');
    if (opts.stopwords) {
      var STOP = {a:1,an:1,the:1,and:1,or:1,of:1,in:1,on:1,to:1,for:1,is:1,it:1,with:1,from:1,at:1,by:1,your:1};
      s = s.split(esc).filter(function (w) { return !STOP[w]; }).join(esc);
    }
    var maxlen = opts.maxlen || 0;
    if (maxlen > 0 && s.length > maxlen) {
      var cut = s.slice(0, maxlen);
      var li = cut.lastIndexOf(esc);
      if (li > 0) cut = cut.slice(0, li);
      s = cut;
    }
    return s;
  }

  function val(sel) {
    var el = root.querySelector(sel);
    if (!el) return '';
    if (el.type === 'checkbox') return el.checked;
    return el.value;
  }

  function calc() {
    var slug = slugify(val('.ta-title'), {
      sep: val('.ta-sep') || '-',
      maxlen: parseFloat(val('.ta-maxlen')) || 0,
      stopwords: val('.ta-stop')
    });
    root.querySelector('.ta-out').textContent = slug || '—';
    var words = slug ? slug.split(/[-_]/).filter(Boolean).length : 0;
    root.querySelector('.ta-sub').textContent = slug
      ? words + ' words · ' + slug.length + ' characters'
      : 'type a title above';
  }

  root.querySelector('.ta-embed-copy').addEventListener('click', function () {
    var t = root.querySelector('.ta-out').textContent;
    if (t && t !== '—' && navigator.clipboard) navigator.clipboard.writeText(t).catch(function () {});
  });

  root.querySelectorAll('input,select').forEach(function (el) {
    el.addEventListener('input', calc);
    el.addEventListener('change', calc);
  });
  calc();
})();
