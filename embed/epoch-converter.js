/*!
 * ToolAspect Epoch Converter Embed
 * Install: <div id="ta-epoch-converter"></div>
 *          <script src="https://toolaspect.com/embed/epoch-converter.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-epoch-converter';
  var BASE = 'https://toolaspect.com/epoch-converter/';

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
    + 'border-radius:8px;padding:10px 12px;font-size:.9rem;font-family:inherit;outline:none;font-variant-numeric:tabular-nums}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-mode-toggle{display:flex;gap:6px;margin-bottom:14px;justify-content:center}'
    + '.ta-embed-mode-btn{background:var(--ta-surface);border:1px solid var(--ta-border);color:var(--ta-muted);border-radius:8px;'
    + 'padding:7px 16px;font-size:.82rem;cursor:pointer;font-family:inherit}'
    + '.ta-embed-mode-btn.ta-active{background:rgba(37,99,235,.1);border-color:var(--ta-accent);color:var(--ta-text);font-weight:600}'
    + '.ta-embed-root[data-theme="dark"] .ta-embed-mode-btn.ta-active{background:rgba(96,165,250,.12)}'
    + '.ta-embed-now{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:10px 12px;margin-bottom:14px;'
    + 'text-align:center;font-size:.82rem;color:var(--ta-muted);font-variant-numeric:tabular-nums}'
    + '.ta-embed-now b{color:var(--ta-accent);font-size:1.05rem}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.7rem;font-weight:700;color:var(--ta-accent);font-variant-numeric:tabular-nums}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'epoch-converter');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="epoch-converter"]')) {
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
    + '<div class="ta-embed-title">Epoch Converter</div>'
    + '<div class="ta-embed-subtitle">Unix timestamp to human date, and back</div>'
    + '<div class="ta-embed-now">Current epoch: <b class="ta-now">—</b></div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-mode-toggle">'
    + '<button type="button" class="ta-embed-mode-btn ta-active" data-unit="s">Seconds</button>'
    + '<button type="button" class="ta-embed-mode-btn" data-unit="ms">Milliseconds</button>'
    + '</div>'
    + '<div class="ta-embed-form-group"><label>Epoch timestamp</label><input type="number" class="ta-epoch" value="1735689600" step="1"></div>'
    + '<div class="ta-embed-form-group"><label>Date → epoch</label><input type="datetime-local" class="ta-dt" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');
  var unit = 's';

  function pad(n){n=String(n);while(n.length<2)n='0'+n;return n;}
  function tick(){
    root.querySelector('.ta-now').textContent = Math.floor(Date.now()/1000).toLocaleString('en-US');
  }
  setInterval(tick,1000);tick();

  function calc() {
    var v = parseFloat(root.querySelector('.ta-epoch').value);
    var dtv = root.querySelector('.ta-dt').value;
    var html = '';
    if (!isNaN(v)) {
      var d = new Date(unit === 's' ? v * 1000 : v);
      if (!isNaN(d.getTime())) {
        var iso = d.toISOString().replace('.000Z','Z');
        var utc = d.getUTCFullYear()+'-'+pad(d.getUTCMonth()+1)+'-'+pad(d.getUTCDate())+' '+pad(d.getUTCHours())+':'+pad(d.getUTCMinutes())+':'+pad(d.getUTCSeconds())+' UTC';
        html += '<div class="ta-embed-big">' + iso + '</div>'
          + '<div class="ta-embed-sub">UTC: ' + utc + '</div>'
          + '<div class="ta-embed-sub">Local: ' + d.toLocaleString('en-US',{dateStyle:'medium',timeStyle:'medium'}) + '</div>';
      }
    }
    if (dtv) {
      var d2 = new Date(dtv);
      if (!isNaN(d2.getTime())) {
        html += '<div class="ta-embed-sub">Entered date as epoch: <strong>' + Math.floor(d2.getTime()/1000) + '</strong> s (' + d2.getTime() + ' ms, local time)</div>';
      }
    }
    resultEl.innerHTML = html || '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter a timestamp or a date</div>';
  }

  root.addEventListener('input', calc);
  root.querySelector('.ta-embed-mode-toggle').addEventListener('click', function (e) {
    var btn = e.target.closest('.ta-embed-mode-btn');
    if (!btn) return;
    unit = btn.getAttribute('data-unit');
    root.querySelectorAll('.ta-embed-mode-btn').forEach(function (b) { b.classList.remove('ta-active'); });
    btn.classList.add('ta-active');
    calc();
  });
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.epochConverter = { recalc: calc };
})();
