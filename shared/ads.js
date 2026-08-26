/* ============================================================
   ToolAspect — AdSense Integration (ads.js)
   Replaces .ad-slot divs with Google AdSense units.
   Include AFTER nav.js: <script src="shared/ads.js"></script>
   ============================================================ */
(function () {
  'use strict';

  var PUBLISHER_ID = 'ca-pub-XXXXXXXXXXXXXXXX'; /* ← Replace with your ID */

  /* Inject AdSense loader once */
  var adsenseLoaded = document.querySelector('script[src*="adsbygoogle.js"]');
  if (!adsenseLoaded) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + PUBLISHER_ID;
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }

  /* Ad format presets by slot position */
  var FORMATS = {
    'top':      { format: 'auto', fullWidth: true, slot: '1111111111', minHeight: 90 },
    'middle':   { format: 'auto', fullWidth: true, slot: '2222222222', minHeight: 250 },
    'bottom':   { format: 'auto', fullWidth: true, slot: '3333333333', minHeight: 90 },
    'sidebar':  { format: 'vertical', fullWidth: false, slot: '4444444444', minHeight: 600 }
  };

  /* Replace each .ad-slot with a real AdSense ins element */
  function initAds() {
    var slots = document.querySelectorAll('.ad-slot');
    slots.forEach(function (slot, i) {
      if (slot.dataset.adsenseInit) return;
      if (slot.dataset.funnelCta) return; /* funnel-cta.js claimed this slot */
      slot.dataset.adsenseInit = '1';

      /* Determine position based on location in page */
      var pos = 'middle';
      var allSiblings = Array.from(slot.parentElement.children);
      var idx = allSiblings.indexOf(slot);
      if (idx < 2) pos = 'top';
      else if (idx >= allSiblings.length - 3) pos = 'bottom';

      var fmt = FORMATS[pos] || FORMATS.middle;

      /* Clear placeholder content */
      slot.innerHTML = '';
      slot.style.cssText = 'display:block;text-align:center;margin:20px auto;min-height:' + fmt.minHeight + 'px;width:100%;max-width:100%;';

      /* Create the AdSense ins element */
      var ins = document.createElement('ins');
      ins.className = 'adsbygoogle';
      ins.style.cssText = 'display:block';
      ins.setAttribute('data-ad-client', PUBLISHER_ID);
      ins.setAttribute('data-ad-slot', fmt.slot);
      ins.setAttribute('data-ad-format', fmt.format);
      ins.setAttribute('data-full-width-responsive', fmt.fullWidth ? 'true' : 'false');
      slot.appendChild(ins);

      /* Push to AdSense queue */
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAds);
  } else {
    initAds();
  }
})();
