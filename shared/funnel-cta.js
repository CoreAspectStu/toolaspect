/* ============================================================
   ToolAspect — Funnel CTA (shared/funnel-cta.js)
   Renders a branded product CTA card INTO existing .ad-slot divs
   based on a page→product mapping. Unmapped pages: .ad-slot is
   left untouched (ad fallback in ads.js continues).
   Include BEFORE or alongside ads.js; it marks the slot
   (data-funnel-cta) so ad scripts can skip it.
   Vanilla JS, no dependencies. Respects CSS vars
   (--surface, --border, --text, --muted, --primary).
   ============================================================ */
(function () {
  'use strict';

  var UTM_SOURCE = 'toolaspect';
  var UTM_CAMPAIGN = 'funnel';

  /* Products (domains verified from project docs 2026-08-27):
     veyzi.com · authaspect.com · objexi.com · propodoc.com · emuu.io */
  var PRODUCTS = {
    veyzi: {
      name: 'Veyzi',
      url: 'https://veyzi.com',
      tagline: 'The creator business platform — monetize, manage and grow your audience in one place.',
      cta: 'Explore Veyzi',
      secondary: {
        name: 'authAspect',
        url: 'https://authaspect.com',
        line: 'Protect your content: watermarking, provenance & DMCA takedowns → authAspect'
      }
    },
    authaspect: {
      name: 'authAspect',
      url: 'https://authaspect.com',
      tagline: 'Image copyright protection for creators — watermarking, provenance and DMCA detection & takedown.',
      cta: 'Protect your images'
    },
    objexi: {
      name: 'Objexi',
      url: 'https://objexi.com',
      tagline: 'Object Intelligence Platform — give any physical object an AI layer, accessed by QR.',
      cta: 'Discover Objexi'
    },
    propodoc: {
      name: 'PropoDoc',
      url: 'https://propodoc.com',
      tagline: 'AI-powered proposals and documents — generate invoices, quotes and more in seconds.',
      cta: 'Try PropoDoc'
    },
    emuu: {
      name: 'Emuu',
      url: 'https://emuu.io',
      tagline: 'AI receptionist that answers calls, books appointments and screens candidates 24/7.',
      cta: 'Meet Emuu'
    }
  };

  /* Ordered page→product rules: first match wins.
     Each rule: { match: [path prefixes or slug prefixes], product: key } */
  var RULES = [
    /* Emuu — AI receptionist / recruiting screening */
    { match: ['ai-receptionist', 'recruiting-screening'], product: 'emuu' },

    /* Objexi — QR codes */
    { match: ['qr-'], product: 'objexi' },

    /* authAspect — image tools + watermark/exif/metadata pages */
    {
      match: [
        'image-compressor', 'image-tools', 'image-converter', 'image-resizer',
        'photo-', 'watermark', 'image-watermark', 'exif', 'metadata', 'exif-viewer', 'image-metadata', 'c2pa', 'provenance',
        'picture-', 'crop-image', 'reverse-image', 'dmca-'
      ],
      product: 'authaspect'
    },

    /* PropoDoc — business documents */
    {
      match: [
        'invoice', 'quote', 'quotation', 'cover-letter', 'resume', 'cv-',
        'form-builder', 'business-tools', 'proposal', 'contract', 'estimate-',
        'statement-of-work', 'sow-'
      ],
      product: 'propodoc'
    },

    /* Veyzi — creator cluster */
    {
      match: [
        'youtube', 'tiktok', 'twitch', 'spotify', 'podcast', 'engagement-rate',
        'follower-growth', 'influencer', 'hashtag', 'creator-tools',
        'creator-earnings', 'social-media', 'instagram', 'kick-', 'patreon',
        'link-in-bio'
      ],
      product: 'veyzi'
    }
  ];

  function pagePath() {
    var p = window.location.pathname.replace(/\/+$/, '');
    return p.charAt(0) === '/' ? p.slice(1) : p;
  }

  /* Returns product key or null. Matches rule prefixes against the full
     path and against the last path segment (the page slug). */
  function resolveProduct(path) {
    var slug = path.split('/').filter(Boolean).pop() || '';
    for (var i = 0; i < RULES.length; i++) {
      var prefixes = RULES[i].match;
      for (var j = 0; j < prefixes.length; j++) {
        var pfx = prefixes[j];
        if (path.indexOf(pfx) === 0 || slug.indexOf(pfx) === 0 ||
            (path.indexOf('/' + pfx) !== -1)) {
          return RULES[i].product;
        }
      }
    }
    return null;
  }

  function buildUrl(base, slug) {
    var sep = base.indexOf('?') === -1 ? '?' : '&';
    return base + sep + 'utm_source=' + encodeURIComponent(UTM_SOURCE) +
      '&utm_campaign=' + encodeURIComponent(UTM_CAMPAIGN) +
      '&utm_content=' + encodeURIComponent(slug);
  }

  function renderCard(slot, productKey, slug) {
    var p = PRODUCTS[productKey];
    var url = buildUrl(p.url, slug);

    var card = document.createElement('div');
    card.className = 'funnel-cta';
    card.style.cssText =
      'display:flex;flex-direction:column;align-items:center;gap:8px;' +
      'background:var(--surface,#fff);border:1px solid var(--border,#ddd);' +
      'border-radius:14px;padding:28px 20px;text-align:center;margin:20px 0;';

    var name = document.createElement('strong');
    name.textContent = p.name;
    name.style.cssText = 'font-size:1.05rem;color:var(--text,inherit);';

    var tag = document.createElement('p');
    tag.textContent = p.tagline;
    tag.style.cssText =
      'margin:0;font-size:.88rem;line-height:1.5;color:var(--muted,#666);';

    var btn = document.createElement('a');
    btn.href = url;
    btn.target = '_blank';
    btn.rel = 'noopener';
    btn.textContent = p.cta;
    btn.style.cssText =
      'display:inline-block;margin-top:6px;padding:10px 22px;border-radius:10px;' +
      'background:var(--primary,#2563eb);color:#fff;text-decoration:none;' +
      'font-weight:600;font-size:.92rem;';

    card.appendChild(name);
    card.appendChild(tag);
    card.appendChild(btn);

    /* Veyzi primary cards carry an authAspect secondary line */
    if (productKey === 'veyzi' && p.secondary) {
      var sec = document.createElement('p');
      var secLink = document.createElement('a');
      secLink.href = buildUrl(p.secondary.url, slug);
      secLink.target = '_blank';
      secLink.rel = 'noopener';
      secLink.textContent = p.secondary.name;
      secLink.style.cssText = 'color:var(--primary,#2563eb);';
      sec.appendChild(document.createTextNode(p.secondary.line.replace(p.secondary.name, '') || ''));
      sec.appendChild(secLink);
      sec.style.cssText =
        'margin:6px 0 0;font-size:.8rem;color:var(--muted,#666);';
      card.appendChild(sec);
    }

    /* Empty the placeholder ("Advertisement") and insert our card,
       keeping the slot element in place. */
    while (slot.firstChild) slot.removeChild(slot.firstChild);
    slot.style.border = 'none';
    slot.style.background = 'transparent';
    slot.style.padding = '0';
    slot.appendChild(card);
    slot.dataset.funnelCta = productKey;
  }

  function init() {
    var path = pagePath();
    var productKey = resolveProduct(path);
    if (!productKey) return; /* unmapped: leave .ad-slot untouched */

    var slug = path.split('/').filter(Boolean).pop() || 'home';
    var slots = document.querySelectorAll('.ad-slot');
    Array.prototype.forEach.call(slots, function (slot) {
      if (slot.dataset.funnelCta || slot.dataset.adsenseInit) return;
      renderCard(slot, productKey, slug);
    });
  }

  /* Run immediately (this script is included in <body> before ads.js,
     so .ad-slot exists and we claim it before ads.js can). Also re-run
     on DOMContentLoaded as a safety net for late-parsed markup. */
  init();
  document.addEventListener('DOMContentLoaded', init);
})();
