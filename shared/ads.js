/* ToolAspect ad lane — placeholder→live upgrader.
   To go live after AdSense approval:
   1. Create ad units in AdSense, note their slot IDs.
   2. Set enabled:true and fill SLOT_IDS below (or window.TA_ADS before this script).
   3. Deploy. Placeholders upgrade automatically. */
(function () {
  var cfg = window.TA_ADS || {};
  var DEFAULTS = {
    enabled: false, // ← flip on approval day
    client: 'ca-pub-7079002297203024',
    slotIds: {
      'tool-top': '',     // above the tool — highest CTR
      'tool-result': '',   // 728x90 / responsive below tool result
      'tool-sidebar': '',  // 300x250 sidebar
      'guide-inline': ''   // in-article responsive
    }
  };
  for (var k in DEFAULTS) if (!(k in cfg)) cfg[k] = DEFAULTS[k];
  window.TA_ADS = cfg;

  function upgrade() {
    var nodes = document.querySelectorAll('.ad-slot[data-slot]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var kind = el.getAttribute('data-slot');
      var slotId = cfg.slotIds[kind];
      if (!cfg.enabled || !slotId) continue; // stays a dashed placeholder
      var ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.display = 'block';
      ins.setAttribute('data-ad-client', cfg.client);
      ins.setAttribute('data-ad-slot', slotId);
      ins.setAttribute('data-ad-format', 'auto');
      ins.setAttribute('data-full-width-responsive', 'true');
      el.innerHTML = '';
      el.classList.add('is-live');
      el.appendChild(ins);
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', upgrade);
  } else upgrade();
})();
