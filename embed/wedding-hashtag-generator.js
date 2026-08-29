/*!
 * ToolAspect Wedding Hashtag Generator Embed
 * Install: <div id="ta-wedding-hashtag-generator"></div>
 *          <script src="https://toolaspect.com/embed/wedding-hashtag-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-wedding-hashtag-generator';
  var BASE = 'https://toolaspect.com/wedding-hashtag-generator/';

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
    + '.ta-embed-form-group input{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-btn{width:100%;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:11px;font-size:.95rem;'
    + 'font-weight:700;font-family:inherit;cursor:pointer}'
    + '.ta-embed-btn:hover{filter:brightness(1.08)}'
    + '.ta-embed-tags{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin-top:12px}'
    + '.ta-embed-tag{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px;text-align:center;cursor:pointer;'
    + 'font-weight:700;font-size:.92rem;word-break:break-all}'
    + '.ta-embed-tag:hover{border-color:var(--ta-accent)}'
    + '.ta-embed-tag .k{display:block;font-size:.62rem;color:var(--ta-muted);font-weight:600;text-transform:uppercase;letter-spacing:.05em;margin-top:3px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'wedding-hashtag-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="wedding-hashtag-generator"]')) {
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
    + '<div class="ta-embed-title">Wedding Hashtag Generator</div>'
    + '<div class="ta-embed-subtitle">Mashups, puns and classics from both surnames</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Your surname</label><input type="text" class="ta-s1" value="Smith" maxlength="20"></div>'
    + '<div class="ta-embed-form-group"><label>Partner’s surname</label><input type="text" class="ta-s2" value="Johnson" maxlength="20"></div>'
    + '</div>'
    + '<button type="button" class="ta-embed-btn">Generate Hashtags</button>'
    + '<div class="ta-embed-tags"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  function clean(s) { return (s || '').trim().replace(/[^a-zA-Z]/g, ''); }
  function cap(s) { s = clean(s); return s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : ''; }
  function lcase(s) { return s.toLowerCase(); }
  function tail(w) {
    var re = /[aeiou]+/gi, m, groups = [];
    while ((m = re.exec(w)) !== null) groups.push(m.index);
    if (groups.length === 0) return w;
    var i = groups[groups.length - 1];
    if (i > 0 && /[bcdfghjklmnpqrstvwxyz]/i.test(w[i - 1])) i = i - 1;
    if (i <= 0) return w;
    return w.slice(i);
  }
  function head(w) { return w.slice(0, w.length - tail(w).length); }
  function plural(s) {
    if (/[sxz]$|ch$|sh$/i.test(s)) return s + 'es';
    if (/[^aeiou]y$/i.test(s)) return s.slice(0, -1) + 'ies';
    return s + 's';
  }
  function blends(s1, s2) {
    var out = [];
    function ok(x) {
      if (!x) return null;
      if (x.length < 5 || x.length > 13) return null;
      if (!/[aeiou]/i.test(x)) return null;
      if (/(.)\1\1/.test(x)) return null;
      if (lcase(x) === lcase(s1) || lcase(x) === lcase(s2)) return null;
      return x;
    }
    var t1 = tail(s1), t2 = tail(s2);
    if (t2.length >= 3) out.push({ t: ok(cap(s1 + t2)), k: 'mashup' });
    if (t1.length >= 3) out.push({ t: ok(cap(s2 + t1)), k: 'mashup' });
    out.push({ t: ok(cap(head(s1) + s2)), k: 'mashup' });
    out.push({ t: ok(cap(head(s2) + s1)), k: 'mashup' });
    return out.filter(function (o) { return o.t; }).filter(function (o, i, a) { return a.findIndex(function (y) { return lcase(y.t) === lcase(o.t); }) === i; });
  }
  var PUN_RULES = [
    [/son$/i, '{p}AndOnly'], [/bell$/i, 'ForWhomThe{s}Tolls'], [/berry$/i, 'HappilyEver{s}'],
    [/wood$/i, 'WoodYouBeMine'], [/wood$/i, 'OutOfThe{s}s'], [/love$/i, 'AllYouNeedIs{s}'],
    [/rose$/i, 'StopAndSmellThe{s}'], [/stone$/i, 'SetIn{s}'], [/moon$/i, 'OverThe{p}'],
    [/moon$/i, '{p}AndBack'], [/star$/i, '{p}Struck'], [/well$/i, 'Wishing{p}Well'],
    [/day$/i, 'SaveThe{p}'], [/day$/i, '{s}ToRemember'], [/ton$/i, '{s}TonOfLove'],
    [/hart$/i, '{p}AndSoul'], [/heart$/i, '{p}AndSoul'], [/young$/i, 'Forever{s}'],
    [/land$/i, '{s}OfLove'], [/man$/i, '{s}OfTheHour'], [/er$/i, 'The{s}TheBetter']
  ];
  var PUN_GENERIC = ['{s}EverAfter', 'HappilyEver{s}', 'MeetThe{P}', 'The{P}SayIDo', '{s}Hitched', 'ToHaveAndTo{s}', '{s}AndOrder', 'TwoBecome{P}'];
  function puns(s1, s2) {
    var out = [];
    function sub(t, s, p) { return t.replace(/\{s\}/g, s).replace(/\{p\}/g, p || s).replace(/\{P\}/g, plural(s)); }
    [s1, s2].forEach(function (s) {
      PUN_RULES.forEach(function (r) {
        if (r[0].test(s)) out.push({ t: sub(r[1], s, s.replace(r[0], '')), k: 'pun' });
      });
    });
    var joint = s1.length <= s2.length ? cap(s1) + cap(s2) : cap(s2) + cap(s1);
    PUN_GENERIC.forEach(function (t) { out.push({ t: sub(t, joint), k: 'pun' }); });
    return out.filter(function (o, i, a) { return a.findIndex(function (y) { return lcase(y.t) === lcase(o.t); }) === i; });
  }
  function classics(s1, s2) {
    var out = [];
    if (lcase(s1) !== lcase(s2)) {
      out.push({ t: cap(s1) + cap(s2), k: 'classic' });
      out.push({ t: cap(s2) + cap(s1), k: 'classic' });
      out.push({ t: 'The' + cap(plural(s1)), k: 'classic' });
      out.push({ t: 'The' + cap(plural(s2)), k: 'classic' });
      out.push({ t: 'MeetThe' + cap(plural(s1)), k: 'classic' });
      out.push({ t: cap(s1) + 'And' + cap(s2), k: 'classic' });
    } else {
      out.push({ t: 'The' + cap(plural(s1)), k: 'classic' });
      out.push({ t: 'MeetThe' + cap(plural(s1)), k: 'classic' });
    }
    return out.filter(function (o, i, a) { return a.findIndex(function (y) { return lcase(y.t) === lcase(o.t); }) === i; });
  }

  var tagsEl = root.querySelector('.ta-embed-tags');
  var offset = 0;

  function render() {
    var s1 = cap(root.querySelector('.ta-s1').value);
    var s2 = cap(root.querySelector('.ta-s2').value);
    if (!s1 && !s2) { tagsEl.innerHTML = ''; return; }
    if (!s1) s1 = s2; if (!s2) s2 = s1;
    var same = lcase(s1) === lcase(s2);
    var all = classics(s1, s2).concat(same ? [] : blends(s1, s2), puns(s1, s2));
    var uniq = all.filter(function (o, i, a) { return a.findIndex(function (y) { return lcase(y.t) === lcase(o.t); }) === i; });
    uniq.sort(function (a, b) { return a.t.length - b.t.length; });
    var out = [], idx = uniq.length ? offset % uniq.length : 0;
    for (var k = 0; k < Math.min(8, uniq.length); k++) out.push(uniq[(idx + k) % uniq.length]);
    tagsEl.innerHTML = out.map(function (o) {
      return '<div class="ta-embed-tag" data-tag="#' + o.t + '">#' + o.t + '<span class="k">' + o.k + '</span></div>';
    }).join('');
  }

  root.addEventListener('input', function () { offset = 0; render(); });
  root.querySelector('.ta-embed-btn').addEventListener('click', function () { render(); offset++; });
  tagsEl.addEventListener('click', function (e) {
    var tag = e.target.closest('.ta-embed-tag');
    if (!tag) return;
    var val = tag.getAttribute('data-tag');
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(val);
    } else if (window.prompt) {
      window.prompt('Copy your hashtag:', val);
    }
  });

  render();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.weddingHashtagGenerator = { recalc: render };
})();
