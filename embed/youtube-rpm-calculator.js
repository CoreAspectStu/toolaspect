/*!
 * ToolAspect YouTube RPM Calculator Embed
 * Install: <div id="ta-youtube-rpm-calculator"></div>
 *          <script src="https://toolaspect.com/embed/youtube-rpm-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-youtube-rpm-calculator';
  var BASE = 'https://toolaspect.com/youtube-rpm-calculator/';

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
    + '.ta-embed-result{text-align:center;padding:20px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:1.9rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.9rem;margin-top:6px}'
    + '.ta-embed-line{font-size:.92rem;margin-top:8px;color:var(--ta-text)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'youtube-rpm-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="youtube-rpm-calculator"]')) {
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
    + '<div class="ta-embed-title">YouTube RPM Calculator</div>'
    + '<div class="ta-embed-subtitle">Revenue per 1,000 views by niche and country</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Niche</label><select class="ta-niche">'
    + '<option value="finance">Finance ($5–15 US)</option><option value="insurance">Insurance / Legal ($8–20 US)</option>'
    + '<option value="tech">Tech ($3–8 US)</option><option value="realestate">Real Estate ($5–12 US)</option>'
    + '<option value="education">Education ($3–7 US)</option><option value="gaming" selected>Gaming ($1–4 US)</option>'
    + '<option value="entertainment">Entertainment ($1–3 US)</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Monthly views</label><input type="number" class="ta-views" value="250000" min="0" step="10000"></div>'
    + '</div>'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Audience country</label><select class="ta-geo">'
    + '<option value="US" selected>United States</option><option value="Nordics">Nordics</option><option value="UK">UK</option>'
    + '<option value="AU">Australia</option><option value="CA">Canada</option><option value="DE">Germany</option>'
    + '<option value="JP">Japan</option><option value="MX">Mexico</option><option value="BR">Brazil</option>'
    + '<option value="PH">Philippines</option><option value="SEA">SE Asia</option><option value="IN">India</option><option value="NG">Nigeria</option></select></div>'
    + '<div class="ta-embed-form-group"><label>Second country share (%) — 0 if none</label><input type="number" class="ta-share2" value="0" min="0" max="100" step="5"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result">'
    + '<div class="ta-embed-big ta-rpm">—</div>'
    + '<div class="ta-embed-sub ta-sub"></div>'
    + '<div class="ta-embed-line ta-mo"></div>'
    + '<div class="ta-embed-line ta-yr"></div>'
    + '</div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var NICHES = { finance: [5, 15], insurance: [8, 20], tech: [3, 8], realestate: [5, 12], education: [3, 7], gaming: [1, 4], entertainment: [1, 3] };
  var GEO = { US: 1.00, Nordics: 0.85, UK: 0.80, AU: 0.75, CA: 0.70, DE: 0.65, JP: 0.55, MX: 0.30, BR: 0.25, PH: 0.20, SEA: 0.18, IN: 0.15, NG: 0.12 };

  function money(n) { return '$' + Math.round(n).toLocaleString('en-US'); }
  function fmtRpm(n) { return '$' + (n >= 10 ? n.toFixed(1) : n.toFixed(2)); }

  function calc() {
    var niche = root.querySelector('.ta-niche').value;
    var views = parseFloat(root.querySelector('.ta-views').value) || 0;
    var s2 = Math.min(100, Math.max(0, parseFloat(root.querySelector('.ta-share2').value) || 0)) / 100;
    var g1 = GEO[root.querySelector('.ta-geo').value];
    var g2 = GEO.IN; // second country defaults to India when a share is set
    var factor = s2 > 0 ? g1 * (1 - s2) + g2 * s2 : g1;
    var band = NICHES[niche];
    var lo = band[0] * factor, hi = band[1] * factor;
    var units = views / 1000;
    root.querySelector('.ta-rpm').textContent = fmtRpm(lo) + ' – ' + fmtRpm(hi);
    root.querySelector('.ta-sub').textContent = 'estimated RPM (audience factor ' + factor.toFixed(3) + ')';
    root.querySelector('.ta-mo').innerHTML = views > 0 ? 'Monthly: <strong>' + money(lo * units) + ' – ' + money(hi * units) + '</strong>' : '';
    root.querySelector('.ta-yr').innerHTML = views > 0 ? 'Annual: <strong>' + money(lo * units * 12) + ' – ' + money(hi * units * 12) + '</strong>' : '';
  }

  root.addEventListener('input', calc);
  root.addEventListener('change', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.youtubeRpmCalculator = { recalc: calc };
})();
