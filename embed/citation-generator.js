/*!
 * ToolAspect Citation Generator Embed
 * Install: <div id="ta-citation-generator"></div>
 *          <script src="https://toolaspect.com/embed/citation-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-citation-generator';
  var BASE = 'https://toolaspect.com/citation-generator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:18px;margin-bottom:14px}'
    + '.ta-embed-mode-toggle{display:flex;gap:6px;margin-bottom:14px;justify-content:center;flex-wrap:wrap}'
    + '.ta-embed-mode-btn{background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 16px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode-btn.ta-active{background:rgba(37,99,235,.1);border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-mode-btn.ta-active{background:rgba(96,165,250,.12)}'
    + '.ta-embed-form-group{margin-bottom:12px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-result{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:12px;padding:16px;margin-bottom:12px;position:relative}'
    + '.ta-embed-cite{font-size:1rem;line-height:1.8;font-family:Georgia,"Times New Roman",serif;color:var(--ta-text);text-indent:-1.6rem;padding-left:1.6rem;overflow-wrap:break-word}'
    + '.ta-embed-intext{margin-top:8px;color:var(--ta-muted);font-size:.85rem}'
    + '.ta-embed-copy{position:absolute;top:8px;right:8px;background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:6px;padding:4px 10px;font-size:.72rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}.ta-embed-form-row.two{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'citation-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="citation-generator"]')) {
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
    + '<div class="ta-embed-title">Citation Generator</div>'
    + '<div class="ta-embed-subtitle">APA 7, MLA 9, and Chicago — free, no signup</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-style="apa">APA 7</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-style="mla">MLA 9</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-style="chicago">Chicago</button>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Source type</label><select class="ta-type"><option value="journal" selected>Journal article</option><option value="book">Book</option><option value="website">Website</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Author 1 (Last, First)</label><input type="text" class="ta-a1" value="Brysbaert, Marc"></div>'
    + '<div class="ta-embed-form-group"><label>Author 2 (optional)</label><input type="text" class="ta-a2" placeholder="Smith, Jane"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Title</label><input type="text" class="ta-title" value="How many words do we read per minute? A meta-analysis of reading rate"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Journal / publisher / site</label><input type="text" class="ta-container" value="Journal of Memory and Language"></div>'
    + '<div class="ta-embed-form-group"><label>Volume</label><input type="text" class="ta-vol" value="109"></div>'
    + '<div class="ta-embed-form-group"><label>Pages</label><input type="text" class="ta-pages" value="104047"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Year</label><input type="text" class="ta-year" value="2019"></div>'
    + '<div class="ta-embed-form-group"><label>DOI</label><input type="text" class="ta-doi" value="10.1016/j.jml.2019.104047"></div>'
    + '<div class="ta-embed-form-group"><label>URL (if no DOI)</label><input type="text" class="ta-url" placeholder="https://..."></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<button type="button" class="ta-embed-copy">Copy</button>'
    + '<div class="ta-embed-cite"></div>'
    + '<div class="ta-embed-intext"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var style = 'apa', type = 'journal';
  var citeEl = root.querySelector('.ta-embed-cite');
  var intextEl = root.querySelector('.ta-embed-intext');

  function val(sel) { var el = root.querySelector(sel); return el ? el.value.trim() : ''; }
  function esc(s) { return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function parseAuthor(s) {
    s = (s || '').trim();
    if (!s) return null;
    if (s.indexOf(',') > -1) { var p = s.split(','); return { last: p[0].trim(), first: p.slice(1).join(',').trim() }; }
    var w = s.split(/\s+/);
    return w.length === 1 ? { last: w[0], first: '' } : { last: w[w.length - 1], first: w.slice(0, -1).join(' ') };
  }
  function initials(first) {
    return first.split(/\s+/).filter(Boolean).map(function (n) { return n.charAt(0).toUpperCase() + '.'; }).join(' ');
  }
  function pad(s) { s = (s || '').trim(); if (!s) return ''; return /\.$/.test(s) ? s + ' ' : s + '. '; }
  var KEEP = { 'US': 1, 'USA': 1, 'UK': 1, 'APA': 1, 'MLA': 1, 'NIH': 1, 'NASA': 1, 'DNA': 1, 'TV': 1, 'AI': 1, 'IQ': 1, 'GPA': 1 };
  function sentenceCase(t) {
    if (!t) return t;
    var capNext = true;
    return t.split(/(\s+)/).map(function (tok) {
      if (/^\s+$/.test(tok)) return tok;
      var m = tok.match(/[A-Za-z][A-Za-z'’-]*/);
      if (!m) return tok;
      var core = m[0], i = tok.indexOf(core);
      var lead = tok.slice(0, i), trail = tok.slice(i + core.length);
      var res;
      if (capNext || KEEP[core] || core.length <= 1 || /[A-Z]/.test(core.slice(1))) res = core;
      else if (core === 'A') res = 'a';
      else res = core.charAt(0) + core.slice(1).toLowerCase();
      capNext = false;
      if (/[.?!:]$/.test(trail)) capNext = true;
      return lead + res + trail;
    }).join('');
  }

  function calc() {
    type = (root.querySelector('.ta-type') || {}).value || 'journal';
    var list = [parseAuthor(val('.ta-a1')), parseAuthor(val('.ta-a2'))].filter(function (a) { return a && a.last; });
    var title = val('.ta-title'), container = val('.ta-container');
    var vol = val('.ta-vol'), pages = val('.ta-pages'), year = val('.ta-year') || 'n.d.';
    var doi = val('.ta-doi').replace(/^https?:\/\/(dx\.)?doi\.org\//i, '');
    var link = doi ? 'https://doi.org/' + doi : (val('.ta-url') ? (/^https?:\/\//.test(val('.ta-url')) ? val('.ta-url') : 'https://' + val('.ta-url')) : '');
    if (!title && !list.length) {
      citeEl.innerHTML = 'Fill in your source details';
      intextEl.innerHTML = '';
      return;
    }
    var html = '', intext = '';
    var aTitle = esc(title), c = esc(container);

    if (style === 'apa') {
      var a = list.map(function (x) { return x.last + (x.first ? ', ' + initials(x.first) : ''); });
      var aStr = a.length === 1 ? a[0] : a.slice(0, -1).join(', ') + ', & ' + a[a.length - 1];
      var st = esc(sentenceCase(title));
      if (type === 'journal') {
        html = pad(aStr) + '(' + esc(year) + '). ' + st + '. ' + (c ? '<em>' + c + '</em>' : '') + (vol ? ', <em>' + esc(vol) + '</em>' : '') + (pages ? ', ' + esc(pages) : '') + (link ? '. ' + esc(link) : '.');
      } else if (type === 'book') {
        html = pad(aStr) + '(' + esc(year) + '). <em>' + st + '</em>. ' + (c ? esc(c) : '') + '.';
      } else {
        html = pad(aStr) + '(' + esc(year) + '). <em>' + st + '</em>' + (c ? '. ' + c : '') + (link ? '. ' + esc(link) : '');
      }
      intext = list.length === 0 ? '("' + title.split(/\s+/).slice(0, 4).join(' ') + '", ' + year + ')'
        : list.length === 1 ? '(' + esc(list[0].last) + ', ' + year + ')'
        : list.length === 2 ? '(' + esc(list[0].last) + ' &amp; ' + esc(list[1].last) + ', ' + year + ')'
        : '(' + esc(list[0].last) + ' et al., ' + year + ')';
    } else if (style === 'mla') {
      var ma = list.length === 0 ? '' : list.length === 1 ? list[0].last + (list[0].first ? ', ' + list[0].first : '')
        : list.length === 2 ? list[0].last + (list[0].first ? ', ' + list[0].first : '') + ', and ' + (list[1].first ? list[1].first + ' ' : '') + list[1].last
        : list[0].last + ', et al.';
      if (type === 'journal') {
        var loc = [];
        if (vol) loc.push('vol. ' + esc(vol));
        if (year !== 'n.d.') loc.push(esc(year));
        if (pages) loc.push((pages.indexOf('-') > -1 ? 'pp. ' : 'p. ') + esc(pages));
        html = pad(ma) + '"' + aTitle + '." ' + (c ? '<em>' + c + '</em>' : '') + (loc.length ? ', ' + loc.join(', ') : '') + (link ? ', ' + esc(link) : '') + '.';
      } else if (type === 'book') {
        html = pad(ma) + '<em>' + aTitle + '</em>. ' + (c ? esc(c) : '') + (year !== 'n.d.' ? ', ' + esc(year) : '') + '.';
      } else {
        html = pad(ma) + '"' + aTitle + '." ' + (c ? '<em>' + c + '</em>' : '') + (link ? ', ' + esc(link) : '');
      }
      intext = list.length === 0 ? '("' + title.split(/\s+/).slice(0, 4).join(' ') + '")'
        : list.length === 1 ? '(' + esc(list[0].last) + (pages ? ' ' + esc(pages.split('-')[0]) : '') + ')'
        : list.length === 2 ? '(' + esc(list[0].last) + ' and ' + esc(list[1].last) + ')'
        : '(' + esc(list[0].last) + ' et al.)';
    } else {
      var ca = list.length === 0 ? '' : list.length === 1 ? list[0].last + (list[0].first ? ', ' + list[0].first : '')
        : list[0].last + (list[0].first ? ', ' + list[0].first : '') + ', and ' + (list[1].first ? list[1].first + ' ' : '') + list[1].last;
      if (type === 'journal') {
        html = pad(ca) + '"' + aTitle + '." ' + (c ? '<em>' + c + '</em> ' : '') + (vol ? esc(vol) : '') + ' (' + esc(year) + ')' + (pages ? ': ' + esc(pages) : '') + (link ? '. ' + esc(link) : '.');
      } else if (type === 'book') {
        html = pad(ca) + '<em>' + aTitle + '</em>. ' + (c ? esc(c) + ', ' : '') + esc(year) + '.';
      } else {
        html = pad(ca) + '"' + aTitle + '." ' + (c ? '<em>' + c + '</em>. ' : '') + (year !== 'n.d.' ? esc(year) + '. ' : '') + (link ? esc(link) : '');
      }
      intext = list.length === 0 ? '(' + title.split(/\s+/).slice(0, 4).join(' ') + ' ' + year + ')'
        : list.length === 1 ? '(' + esc(list[0].last) + ' ' + year + ')'
        : list.length === 2 ? '(' + esc(list[0].last) + ' and ' + esc(list[1].last) + ' ' + year + ')'
        : '(' + esc(list[0].last) + ' et al. ' + year + ')';
    }
    citeEl.innerHTML = html;
    intextEl.innerHTML = '<strong>In-text:</strong> ' + intext;
  }

  root.querySelector('.ta-embed-copy').addEventListener('click', function () {
    var b = root.querySelector('.ta-embed-copy');
    var text = citeEl.innerText + '\n' + intextEl.innerText;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { b.textContent = 'Copied'; setTimeout(function () { b.textContent = 'Copy'; }, 1500); });
    } else { b.textContent = 'Select & copy'; setTimeout(function () { b.textContent = 'Copy'; }, 1500); }
  });

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  root.querySelector('.ta-embed-mode-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-mode-btn');
    if (!btn) return;
    style = btn.getAttribute('data-style');
    root.querySelectorAll('.ta-embed-mode-btn').forEach(function (x) { x.classList.remove('ta-active'); });
    btn.classList.add('ta-active');
    calc();
  });

  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.citationGenerator = { recalc: calc };
})();
