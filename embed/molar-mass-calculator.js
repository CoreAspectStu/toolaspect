/*!
 * ToolAspect Molar Mass Calculator Embed
 * Install: <div id="ta-molar-mass-calculator"></div>
 *          <script src="https://toolaspect.com/embed/molar-mass-calculator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-molar-mass-calculator';
  var BASE = 'https://toolaspect.com/molar-mass-calculator/';

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
    + 'border-radius:8px;padding:10px 12px;font-size:1.05rem;font-family:ui-monospace,Menlo,Consolas,monospace;outline:none;letter-spacing:.03em}'
    + '.ta-embed-form-group input:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}'
    + '.ta-embed-form-row.two{grid-template-columns:1fr 1fr}'
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2.2rem;font-weight:700;color:var(--ta-accent);font-variant-numeric:tabular-nums}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-breakdown{margin-top:12px;font-size:.82rem;color:var(--ta-muted);text-align:left;line-height:1.7}'
    + '.ta-embed-breakdown span{display:inline-block;margin:0 6px 2px 0;background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:6px;padding:2px 8px;white-space:nowrap}'
    + '.ta-embed-range{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}'
    + '.ta-embed-range div{background:var(--ta-bg);border-radius:8px;padding:10px}'
    + '.ta-embed-range .rl{font-size:.72rem;color:var(--ta-muted);margin-bottom:2px}'
    + '.ta-embed-range .rv{font-size:1.05rem;font-weight:700}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:520px){.ta-embed-form-row{grid-template-columns:1fr 1fr}.ta-embed-range{grid-template-columns:1fr 1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'molar-mass-calculator');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="molar-mass-calculator"]')) {
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
    + '<div class="ta-embed-title">Molar Mass Calculator</div>'
    + '<div class="ta-embed-subtitle">Any formula: parentheses, coefficients, hydrates</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Chemical formula</label><input type="text" class="ta-formula" value="C6H12O6" spellcheck="false" autocomplete="off" placeholder="e.g. Ca(OH)2"></div>'
    + '<div class="ta-embed-form-row two">'
    + '<div class="ta-embed-form-group"><label>Mass (g)</label><input type="number" class="ta-grams" value="25" min="0" step="0.1"></div>'
    + '<div class="ta-embed-form-group"><label>&nbsp;</label><input type="text" class="ta-fill" value="" disabled placeholder="moles shown below" style="opacity:.6"></div>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var AW = {H:1.008,He:4.003,Li:6.94,Be:9.012,B:10.81,C:12.011,N:14.007,O:15.999,F:18.998,Ne:20.180,Na:22.990,Mg:24.305,Al:26.982,Si:28.085,P:30.974,S:32.06,Cl:35.45,Ar:39.948,K:39.098,Ca:40.078,Sc:44.956,Ti:47.867,V:50.942,Cr:51.996,Mn:54.938,Fe:55.845,Co:58.933,Ni:58.693,Cu:63.546,Zn:65.38,Ga:69.723,Ge:72.630,As:74.922,Se:78.971,Br:79.904,Kr:83.798,Rb:85.468,Sr:87.62,Y:88.906,Zr:91.224,Nb:92.906,Mo:95.95,Tc:98,Ru:101.07,Rh:102.91,Pd:106.42,Ag:107.87,Cd:112.41,In:114.82,Sn:118.71,Sb:121.76,Te:127.60,I:126.90,Xe:131.29,Cs:132.91,Ba:137.33,La:138.91,Ce:140.12,Pr:140.91,Nd:144.24,Pm:145,Sm:150.36,Eu:151.96,Gd:157.25,Tb:158.93,Dy:162.50,Ho:164.93,Er:167.26,Tm:168.93,Yb:173.05,Lu:174.97,Hf:178.49,Ta:180.95,W:183.84,Re:186.21,Os:190.23,Ir:192.22,Pt:195.08,Au:196.97,Hg:200.59,Tl:204.38,Pb:207.2,Bi:208.98,Po:209,At:210,Rn:222,Fr:223,Ra:226,Ac:227,Th:232.04,Pa:231.04,U:238.03};

  function parseFormula(formula) {
    var s = formula.replace(/\s+/g, '').replace(/[·.*~]/g, '.');
    var i = 0;
    function parseGroup() {
      var counts = {}, order = [];
      function add(el, n) { if (!(el in counts)) { counts[el] = 0; order.push(el); } counts[el] += n; }
      while (i < s.length && s[i] !== ')') {
        if (s[i] === '.') { i++; var inner = parseCoef(); for (var k = 0; k < inner.order.length; k++) add(inner.order[k], inner.counts[inner.order[k]]); continue; }
        if (s[i] === '(') { i++; var g = parseGroup(); if (s[i] !== ')') throw new Error('Missing closing parenthesis'); i++; var m = ''; while (i < s.length && s[i] >= '0' && s[i] <= '9') m += s[i++]; var mult = m ? parseInt(m, 10) : 1; for (var j = 0; j < g.order.length; j++) add(g.order[j], g.counts[g.order[j]] * mult); continue; }
        var t = s.slice(i).match(/^([A-Z][a-z]?)/);
        if (!t) throw new Error('Unexpected character "' + s[i] + '"');
        var el = t[1]; i += el.length;
        var d = ''; while (i < s.length && s[i] >= '0' && s[i] <= '9') d += s[i++];
        if (!(el in AW)) throw new Error('Unknown element "' + el + '"');
        add(el, d ? parseInt(d, 10) : 1);
      }
      return { counts: counts, order: order };
    }
    function parseCoef() {
      var m = ''; while (i < s.length && s[i] >= '0' && s[i] <= '9') m += s[i++];
      var k = m ? parseInt(m, 10) : 1;
      var g = parseGroup();
      if (k !== 1) for (var j = 0; j < g.order.length; j++) g.counts[g.order[j]] *= k;
      return g;
    }
    var res = parseCoef();
    if (i < s.length) throw new Error('Unexpected "' + s[i] + '"');
    return res;
  }

  function calc() {
    var formula = root.querySelector('.ta-formula').value;
    var grams = parseFloat(root.querySelector('.ta-grams').value);
    try {
      var g = parseFormula(formula);
      if (!formula.trim()) throw new Error('Enter a formula');
      var total = 0, chips = '';
      for (var j = 0; j < g.order.length; j++) {
        var el = g.order[j], n = g.counts[el], st = AW[el] * n;
        total += st;
        chips += '<span>' + el + ': ' + n + ' × ' + AW[el].toFixed(3) + ' = ' + st.toFixed(3) + '</span>';
      }
      var moles = isFinite(grams) && grams >= 0 ? (grams / total) : NaN;
      resultEl.innerHTML =
        '<div class="ta-embed-big">' + (total >= 1000 ? total.toFixed(1) : total.toFixed(3)) + ' g/mol</div>'
        + '<div class="ta-embed-sub">' + formula.trim() + ' · one mole = 6.022 × 10²³ formula units</div>'
        + '<div class="ta-embed-breakdown">' + chips + '</div>'
        + (isFinite(moles)
          ? '<div class="ta-embed-range"><div><div class="rl">Moles in ' + grams + ' g</div><div class="rv">' + moles.toFixed(4) + ' mol</div></div>'
            + '<div><div class="rl">Particles</div><div class="rv">' + (moles * 6.022e23).toExponential(3).replace('e+', ' × 10^') + '</div></div></div>'
          : '');
    } catch (e) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">' + e.message + '</div>';
    }
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.molarMassCalculator = { recalc: calc };
})();
