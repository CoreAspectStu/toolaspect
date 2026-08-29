/*!
 * ToolAspect YouTube Title Generator Embed
 * Install: <div id="ta-youtube-title-generator"></div>
 *          <script src="https://toolaspect.com/embed/youtube-title-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-youtube-title-generator';
  var BASE = 'https://toolaspect.com/youtube-title-generator/';

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
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px}'
    + '.ta-embed-btn{width:100%;padding:11px;background:var(--ta-accent);border:none;border-radius:8px;color:#fff;font-weight:700;font-size:.9rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-list{list-style:none;padding:0;margin:0}'
    + '.ta-embed-list li{display:flex;align-items:center;gap:10px;padding:8px 2px;border-bottom:1px solid var(--ta-border);font-size:.88rem}'
    + '.ta-embed-list li:last-child{border-bottom:none}'
    + '.ta-score{flex-shrink:0;width:40px;height:40px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.85rem}'
    + '.ta-score.hi{background:rgba(34,197,94,.15);color:#16a34a;border:1px solid rgba(34,197,94,.35)}'
    + '.ta-score.mid{background:rgba(99,102,235,.14);color:#2563eb;border:1px solid rgba(99,102,235,.35)}'
    + '.ta-score.lo{background:rgba(234,179,8,.16);color:#a16207;border:1px solid rgba(234,179,8,.4)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'youtube-title-generator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="youtube-title-generator"]')) {
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
    + '<div class="ta-embed-title">YouTube Title Generator</div>'
    + '<div class="ta-embed-subtitle">Proven patterns, scored 0-100 for click appeal</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Your topic</label><input type="text" class="ta-topic" value="sourdough starter" maxlength="80"></div>'
    + '<div class="ta-embed-form-group"><label>Video style</label><select class="ta-style"><option value="general" selected>General</option><option value="list">List / tips</option><option value="beginner">Beginner</option><option value="review">Review</option><option value="money">Results</option></select></div>'
    + '</div>'
    + '<button type="button" class="ta-embed-btn ta-gen">Generate titles</button>'
    + '</div>'
    + '<div class="ta-embed-card"><ul class="ta-embed-list ta-list"></ul></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var POWER = ['secret','proven','ultimate','mistake','stop','never','why','how','best','worst','easy','fast','free','hidden','nobody','everyone','truth','actually','finally','before','vs'];
  var PATTERNS = {
    general: ['Why Your {t} Isn\'t Working (And How to Fix It)', 'How to Master {t} in 7 Days', 'The Truth About {t}', 'What Nobody Tells You About {t}', 'Stop Making These {t} Mistakes', '{t} Explained in 10 Minutes'],
    list: ['7 {t} Tips Nobody Tells You', '5 {t} Mistakes That Cost You Money', '9 {t} Tricks That Actually Work', '3 {t} Rules I Wish I Knew Sooner'],
    beginner: ['{t} for Beginners (Full Guide)', '{t} 101: Everything You Need to Know', 'The Only {t} Video You Need', 'How to Start {t} the Right Way'],
    review: ['{t}: Is It Worth It? (Honest Review)', 'The Best {t} in 2026, Tested', 'Cheap vs Expensive {t}: Which Wins?', 'I Tested Every {t} So You Don\'t Have To'],
    money: ['How I Made $1,000 With {t} in 30 Days', '{t} Actually Pays? My Real Numbers', 'The {t} Business Nobody Talks About', '30 Days of {t}: The Honest Results']
  };

  function scoreTitle(t) {
    var len = t.length;
    var lengthScore = len >= 40 && len <= 60 ? 100 : len < 40 ? Math.round(len / 40 * 100) : Math.round(Math.max(0, 100 - (len - 60) * 2.5));
    var tl = t.toLowerCase();
    var hits = POWER.filter(function (p) { return tl.indexOf(p) !== -1; }).length;
    var powerScore = Math.min(100, 40 + hits * 20);
    var numScore = /\d/.test(t) ? 100 : 50;
    var bracketScore = /[[(]/.test(t) ? 100 : 60;
    var caps = t.split(/\s+/).filter(function (w) { return w.length > 2 && w === w.toUpperCase() && /[A-Z]/.test(w); });
    var capsPenalty = Math.min(60, caps.length * 20);
    var raw = 0.35 * lengthScore + 0.25 * powerScore + 0.15 * numScore + 0.15 * bracketScore + 0.10 * 100;
    return Math.max(0, Math.round(raw - capsPenalty));
  }

  function capFirst(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function gen() {
    var t = root.querySelector('.ta-topic').value.trim() || 'sourdough starter';
    var style = root.querySelector('.ta-style').value;
    var list = root.querySelector('.ta-list');
    list.innerHTML = '';
    var titles = PATTERNS[style].map(function (p) { return p.replace('{t}', capFirst(t)); });
    titles.sort(function (a, b) { return scoreTitle(b) - scoreTitle(a); });
    titles.forEach(function (x) {
      var s = scoreTitle(x);
      var li = document.createElement('li');
      var badge = s >= 85 ? 'hi' : s >= 70 ? 'mid' : 'lo';
      li.innerHTML = '<div class="ta-score ' + badge + '">' + s + '</div><div>' + x.replace(/</g, '&lt;') + '</div>';
      list.appendChild(li);
    });
  }

  root.querySelector('.ta-gen').addEventListener('click', gen);
  root.querySelector('.ta-topic').addEventListener('keydown', function (e) { if (e.key === 'Enter') gen(); });
  root.querySelector('.ta-style').addEventListener('change', gen);
  gen();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.youtubeTitleGenerator = { recalc: gen };
})();
