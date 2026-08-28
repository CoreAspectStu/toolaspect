/*!
 * ToolAspect Anniversary Gifts by Year Embed
 * Install: <div id="ta-anniversary-gifts-by-year"></div>
 *          <script src="https://toolaspect.com/embed/anniversary-gifts-by-year.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-anniversary-gifts-by-year';
  var BASE = 'https://toolaspect.com/anniversary-gifts-by-year/';

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
    + '.ta-embed-result{text-align:center;padding:22px;background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;margin-bottom:12px}'
    + '.ta-embed-big{font-size:2rem;font-weight:700;color:var(--ta-accent)}'
    + '.ta-embed-sub{color:var(--ta-muted);font-size:.92rem;margin-top:6px}'
    + '.ta-embed-row{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:14px}'
    + '.ta-embed-chip{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:8px 12px;font-size:.8rem}'
    + '.ta-embed-chip b{display:block;font-size:.66rem;color:var(--ta-muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:2px}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'anniversary-gifts-by-year');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="anniversary-gifts-by-year"]')) {
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
    + '<div class="ta-embed-title">Anniversary Gifts by Year</div>'
    + '<div class="ta-embed-subtitle">Traditional &amp; modern themes, gemstone, and flower</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-group"><label>Anniversary year (1-100)</label><input type="number" class="ta-year" value="25" min="1" max="100" step="1"></div>'
    + '</div>'
    + '<div class="ta-embed-result"></div>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  var resultEl = root.querySelector('.ta-embed-result');

  var FULL={1:['Paper','Clocks','Gold (metal)','Carnation'],2:['Cotton','China','Garnet','Cosmos'],3:['Leather','Crystal or glass','Pearl','Sunflower'],4:['Fruit or flowers','Appliances','Blue topaz','Geranium'],5:['Wood','Silverware','Sapphire','Daisy'],6:['Candy or iron','Wood objects','Amethyst','Calla lily'],7:['Wool or copper','Desk sets','Onyx','Freesia'],8:['Pottery or bronze','Linen or lace','Tourmaline','Clematis'],9:['Willow or pottery','Leather goods','Lapis lazuli','Poppy'],10:['Tin or aluminum','Diamond jewelry','Diamond','Daffodil'],11:['Steel','Fashion jewelry','Turquoise','Morning glory'],12:['Silk or linen','Pearls','Jade','Peony'],13:['Lace','Textiles or faux furs','Citrine','Chrysanthemum'],14:['Ivory (elephant-themed today)','Gold jewelry','Opal','Dahlia'],15:['Crystal','Watches','Ruby','Rose'],16:['Wax','Silver holloware','Peridot','Statice'],17:['Furniture','Furniture','Carnelian','Red carnation'],18:['Porcelain','Porcelain',"Cat's eye",'—'],19:['Bronze','Bronze','Aquamarine','Bronze chrysanthemum'],20:['China','Platinum','Emerald','Aster'],25:['Sterling silver','Sterling silver','Silver (metal)','Iris'],30:['Pearl','Diamond','Pearl','Lily'],35:['Coral','Jade','Emerald','Coral rose'],40:['Ruby','Ruby','Ruby','Gladioli'],45:['Sapphire','Sapphire','Sapphire','Blue iris'],50:['Gold','Gold','Gold (metal)','Yellow rose & violet'],55:['Emerald','Emerald','Alexandrite','Green calla lily'],60:['Diamond','Diamond','Diamond','Orchid']};
  var HALLMARK={21:'Fire',22:'Water',23:'Air',24:'Stone',26:'Art',27:'Music',28:'Linens',29:'Tools',31:'Travel',32:'Bronze',33:'Iron',34:'Food',36:'Antiques',37:'Books',38:'Luck',39:'Laughter',41:'Office or desk decor',42:'Clocks or watches',43:'Entertainment',44:'Electronics',46:'Games',47:'Garden or plants',48:'Home improvement',49:'Copper',51:'Photos or cameras',52:'Bath or spa',53:'Plastic',54:'Glass',56:'Day',57:'Night',58:'Faith and hope',59:'Charity'};
  var MS={25:'Silver',30:'Pearl',35:'Coral / Jade',40:'Ruby',45:'Sapphire',50:'Gold',55:'Emerald',60:'Diamond'};
  function ordinal(n){var s=['th','st','nd','rd'],v=n%100;return n+(s[(v-20)%10]||s[v]||s[0]);}

  function calc() {
    var y = parseInt(root.querySelector('.ta-year').value, 10);
    if (!y || y < 1) {
      resultEl.innerHTML = '<div class="ta-embed-big">—</div><div class="ta-embed-sub">Enter a year from 1 to 100</div>';
      return;
    }
    var name = MS[y] ? ' — ' + MS[y] : '';
    var d = FULL[y];
    var html = '<div class="ta-embed-big">' + ordinal(y) + name + '</div>';
    if (d) {
      html += '<div class="ta-embed-row">'
        + '<div class="ta-embed-chip"><b>Traditional</b>' + d[0] + '</div>'
        + '<div class="ta-embed-chip"><b>Modern</b>' + d[1] + '</div>'
        + '<div class="ta-embed-chip"><b>Gemstone</b>' + d[2] + '</div>'
        + '<div class="ta-embed-chip"><b>Flower</b>' + d[3] + '</div>'
        + '</div>';
    } else {
      var t = HALLMARK[y] || (y > 60 ? 'Start the list over' : '—');
      html += '<div class="ta-embed-sub">Hallmark theme: <strong>' + t + '</strong> (see full list for adjacent milestone years)</div>';
    }
    resultEl.innerHTML = html;
  }

  root.addEventListener('input', calc);
  calc();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.anniversaryGiftsByYear = { recalc: calc };
})();
