/* ============================================================
   ToolAspect v3 — Shared Navigation (nav.js)
   Clean, minimal nav matching the homepage redesign.
   Self-rendering. Include via <script src="shared/nav.js">
   Auto-injects theme.css when loaded.
   ============================================================ */
(function () {
  'use strict';

  /* --- Resolve the shared/ base so CSS is always found correctly --- */
  var scripts = document.querySelectorAll('script[src]');
  var base = '';
  for (var i = 0; i < scripts.length; i++) {
    var m = scripts[i].src.match(/^(.*)shared\/nav\.js(\?.*)?$/);
    if (m) { base = m[1]; break; }
  }
  if (!base) base = './';

  /* --- Inject theme.css if not already present --- */
  var cssHref = base + 'shared/theme.css';
  var links = document.querySelectorAll('link[rel="stylesheet"]');
  var loaded = false;
  for (var j = 0; j < links.length; j++) {
    if (links[j].href.indexOf('shared/theme.css') !== -1) { loaded = true; break; }
  }
  if (!loaded) {
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = cssHref;
    document.head.appendChild(el);
  }

  /* --- Tool definitions grouped by category --- */
  var categories = [
    {
      label: 'Finance',
      dot: '#10b981',
      tools: [
        { label: 'Finance Calculator',     href: '/finance-calculator/' },
        { label: 'Currency Converter',     href: '/currency-converter/', popular: true },
        { label: 'Crypto Converter',       href: '/crypto-converter/', popular: true },
        { label: 'Percentage Calculator',  href: '/percentage-calculator/', popular: true },
        { label: 'Compound Interest',      href: '/compound-interest-calculator/' },
        { label: 'Mortgage Calculator',    href: '/mortgage-calculator/' },
        { label: 'Loan Calculator',        href: '/loan-calculator/' },
        { label: 'BMI Calculator',         href: '/bmi-calculator/' },
        { label: 'Discount Calculator',    href: '/discount-calculator/' },
        { label: 'Sales Tax Calculator',   href: '/sales-tax-calculator/' },
        { label: 'Tip Calculator',         href: '/tip-calculator/' },
        { label: 'Hours Calculator',       href: '/hours-calculator/' },
      ]
    },
    {
      label: 'Developer',
      dot: '#5e6ad2',
      tools: [
        { label: 'JSON Formatter',    href: '/json-formatter/' },
        { label: 'Regex Tester',      href: '/regex-tester/' },
        { label: 'Base64 Encoder',    href: '/base64-encoder/' },
        { label: 'Cron Generator',    href: '/cron-generator/' },
        { label: 'UUID Generator',    href: '/uuid-generator/' },
        { label: 'Color Picker',      href: '/color-picker/' },
        { label: 'LLM Pricing Tracker', href: '/llm-pricing-tracker/', badge: 'New' },
      ]
    },
    {
      label: 'Text',
      dot: '#f59e0b',
      tools: [
        { label: 'Word Counter',      href: '/word-counter/' },
        { label: 'Case Converter',    href: '/case-converter/' },
        { label: 'Lorem Ipsum',       href: '/lorem-ipsum/' },
        { label: 'Word Unscrambler',  href: '/word-unscrambler/' },
      ]
    },
    {
      label: 'Generators',
      dot: '#f472b6',
      tools: [
        { label: 'QR Code Generator',  href: '/qr-code-generator/' },
        { label: 'Password Generator', href: '/password-generator/' },
        { label: 'Image Compressor',   href: '/image-compressor/' },
      ]
    },
    {
      label: 'Converters',
      dot: '#22d3ee',
      tools: [
        { label: 'Unit Converter', href: '/unit-converter/' },
        { label: 'Age Calculator', href: '/age-calculator/' },
      ]
    },
  ];

  /* Flat list for search */
  var allTools = [];
  categories.forEach(function(c) { allTools = allTools.concat(c.tools); });

  /* --- Detect current path for active highlighting --- */
  var current = window.location.pathname.replace(/\/index\.html$/, '/');

  /* --- Build DOM --- */
  var nav = document.createElement('nav');
  nav.className = 'ta-nav';
  nav.innerHTML = buildHTML();

  /* Insert at top of body — body may not exist yet if this script is
     included from <head>, so defer to DOMContentLoaded in that case */
  function insertNav() {
    document.body.insertBefore(nav, document.body.firstChild);
  }

  /* --- Auto-inject ads.js for AdSense --- */
  if (document.body && !document.querySelector('script[src*="shared/ads.js"]')) {
    var adsScript = document.createElement('script');
    adsScript.src = base + 'shared/ads.js';
    document.body.appendChild(adsScript);
  }

  if (document.body) {
    insertNav();
  } else {
    document.addEventListener('DOMContentLoaded', insertNav);
  }

  /* --- Hamburger toggle --- */
  var hamburger = nav.querySelector('.ta-hamburger');
  var mobileMenu = nav.querySelector('.ta-mobile-menu');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('ta-open');
      hamburger.classList.toggle('ta-active');
    });
  }

  /* --- Search functionality --- */
  var searchInput = nav.querySelector('.ta-search-input');
  var searchResults = nav.querySelector('.ta-search-results');
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      var q = this.value.toLowerCase().trim();
      if (!q || q.length < 1) {
        searchResults.style.display = 'none';
        return;
      }
      var matches = allTools.filter(function(t) {
        return t.label.toLowerCase().indexOf(q) !== -1;
      }).slice(0, 6);
      if (matches.length === 0) {
        searchResults.innerHTML = '<div class="ta-sr-empty">No tools found</div>';
        searchResults.style.display = 'block';
        return;
      }
      searchResults.innerHTML = matches.map(function(t) {
        return '<a href="' + t.href + '">' + esc(t.label) + '</a>';
      }).join('');
      searchResults.style.display = 'block';
    });
    /* Close search on outside click */
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.ta-search-wrap')) {
        searchResults.style.display = 'none';
      }
    });
    /* Enter to go to first result */
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        var firstLink = searchResults.querySelector('a');
        if (firstLink) window.location.href = firstLink.href;
      }
    });
  }

  /* --- Cmd+K shortcut --- */
  document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });

  /* Close mobile menu on link click */
  var mobileLinks = nav.querySelectorAll('.ta-mobile-menu a');
  for (var k = 0; k < mobileLinks.length; k++) {
    mobileLinks[k].addEventListener('click', function () {
      mobileMenu.classList.remove('ta-open');
      hamburger.classList.remove('ta-active');
    });
  }

  /* --- Listen for auth events --- */
  document.addEventListener('auth:login', updateAuthUI);
  document.addEventListener('auth:logout', updateAuthUI);
  document.addEventListener('auth:premium', updateAuthUI);

  function updateAuthUI(e) {
    var right = nav.querySelector('.ta-right');
    if (!right) return;
    right.innerHTML = authHTML(e.detail || null);
    bindAuthDropdown(right);
  }

  function bindAuthDropdown(container) {
    var trigger = container.querySelector('.ta-avatar-trigger');
    var dd = container.querySelector('.ta-dropdown');
    if (!trigger || !dd) return;
    trigger.addEventListener('click', function (ev) {
      ev.stopPropagation();
      dd.classList.toggle('ta-dd-open');
    });
    document.addEventListener('click', function () {
      dd.classList.remove('ta-dd-open');
    });
  }

  /* Initial bind */
  bindAuthDropdown(nav.querySelector('.ta-right'));

  /* --- Helper HTML builders --- */
  function buildHTML() {
    /* Mobile menu categories */
    var mobileCats = categories.map(function(c) {
      var toolLinks = c.tools.map(function(t) {
        var badge = t.popular ? ' <span class="ta-badge-sm">🔥</span>' : (t.badge ? ' <span class="ta-badge-sm">' + esc(t.badge) + '</span>' : '');
        return '<a href="' + t.href + '">' + esc(t.label) + badge + '</a>';
      }).join('');
      return '<div class="ta-mobile-cat">' +
               '<div class="ta-mobile-cat-label"><span class="ta-cat-dot" style="background:' + c.dot + '"></span>' + esc(c.label) + '</div>' +
               '<div class="ta-mobile-cat-links">' + toolLinks + '</div>' +
             '</div>';
    }).join('');

    return '' +
      '<div class="ta-nav-inner">' +
        '<a class="ta-logo" href="/">' +
          '<span class="ta-logo-mark"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></span>' +
          'ToolAspect' +
        '</a>' +
        '<div class="ta-search-wrap">' +
          '<svg class="ta-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>' +
          '<input type="text" class="ta-search-input" placeholder="Search 28 tools\u2026" autocomplete="off">' +
          '<span class="ta-kbd">\u2318K</span>' +
          '<div class="ta-search-results"></div>' +
        '</div>' +
        '<div class="ta-nav-links">' +
          '<a href="/">Tools</a>' +
          '<a href="/about.html">About</a>' +
          '<a href="https://github.com/CoreAspectStu/utility-sites">GitHub</a>' +
        '</div>' +
        '<div class="ta-right">' + authHTML(null) + '</div>' +
        '<button class="ta-hamburger" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '</div>' +
      '<div class="ta-mobile-menu">' + mobileCats + '</div>';
  }

  function authHTML(user) {
    if (user && user.uid) {
      var avatar = user.photoURL || '';
      var name = user.displayName || user.email || 'User';
      var initials = name.charAt(0).toUpperCase();
      var avatarEl = avatar
        ? '<img src="' + escAttr(avatar) + '" alt="" class="ta-avatar-img">'
        : '<span class="ta-avatar-init">' + initials + '</span>';
      return '' +
        '<div class="ta-auth-wrap">' +
          '<button class="ta-avatar-trigger">' + avatarEl + '</button>' +
          '<div class="ta-dropdown">' +
            '<div class="ta-dd-header">' +
              '<div class="ta-dd-name">' + esc(name) + '</div>' +
              '<div class="ta-dd-email">' + esc(user.email || '') + '</div>' +
            '</div>' +
            '<a href="/account/" class="ta-dd-item">Manage Subscription</a>' +
            '<button class="ta-dd-item" onclick="document.dispatchEvent(new CustomEvent(\'auth:logout\'))">Sign Out</button>' +
          '</div>' +
        '</div>';
    }
    return '<button class="ta-signin" onclick="document.dispatchEvent(new CustomEvent(\'auth:show-login\'))">Sign In</button>';
  }

  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function escAttr(s) { return String(s == null ? '' : s).replace(/[&"'<>]/g, function (c) { return { '&': '&amp;', '"': '&quot;', "'": '&#39;', '<': '&lt;', '>': '&gt;' }[c]; }); }

  /* --- Site-wide footer with legal links (only if page has no footer) --- */
  /* Defer until DOM is ready so we don't inject before page's own footer exists */
  function injectFooter() {
    if (document.querySelector('footer.ta-footer') || document.querySelector('footer:not(.ta-footer)')) return;
    var f = document.createElement('footer');
    f.className = 'ta-footer';
    f.innerHTML =
      '<p>\u00A9 ' + new Date().getFullYear() + ' ToolAspect \u2014 All tools run in your browser, no data collected.</p>' +
      '<div class="ta-footer-links">' +
        '<a href="/about.html">About</a>' +
        '<a href="/roadmap/">Roadmap</a>' +
        '<a href="/contact.html">Contact</a>' +
        '<a href="/privacy.html">Privacy</a>' +
        '<a href="/terms.html">Terms</a>' +
        '<a href="/disclaimer.html">Disclaimer</a>' +
        '<a href="/developer-tools/">Developer</a>' +
        '<a href="/finance-tools/">Finance</a>' +
        '<a href="/text-tools/">Text</a>' +
      '</div>';
    var fStyle = document.createElement('style');
    fStyle.textContent =
      '.ta-footer{border-top:1px solid var(--border);padding:2.5rem 1.5rem;text-align:center;color:var(--muted);font-size:.8rem;position:relative;z-index:1}' +
      '.ta-footer a{color:var(--text-secondary);transition:color .15s}' +
      '.ta-footer a:hover{color:var(--text)}' +
      '.ta-footer-links{display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem 1.5rem;margin-top:.75rem}';
    document.head.appendChild(fStyle);
    document.body.appendChild(f);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }

  /* ============================================================
     Scoped CSS — v3 Nav (Linear/Raycast inspired)
     ============================================================ */
  var NAV_CSS = '' +
  '.ta-nav{' +
    'position:sticky;top:0;z-index:900;' +
    'background:rgba(8,9,10,0.72);' +
    'backdrop-filter:blur(20px) saturate(1.5);' +
    '-webkit-backdrop-filter:blur(20px) saturate(1.5);' +
    'border-bottom:1px solid var(--border);' +
  '}' +
  '.ta-nav-inner{' +
    'max-width:1180px;margin:0 auto;' +
    'display:flex;align-items:center;gap:1.25rem;' +
    'padding:0 1.5rem;height:60px;' +
  '}' +
  /* Logo */
  '.ta-logo{' +
    'font-size:1rem;font-weight:600;letter-spacing:-0.02em;' +
    'display:flex;align-items:center;gap:.5rem;color:var(--text);flex-shrink:0;' +
  '}' +
  '.ta-logo-mark{' +
    'width:24px;height:24px;border-radius:6px;' +
    'background:linear-gradient(135deg, var(--primary), var(--primary-light));' +
    'display:flex;align-items:center;justify-content:center;' +
    'box-shadow:0 0 12px rgba(99,102,241,.3);flex-shrink:0;' +
  '}' +
  /* Search */
  '.ta-search-wrap{' +
    'flex:1;max-width:380px;position:relative;display:flex;align-items:center;' +
  '}' +
  '.ta-search-icon{' +
    'position:absolute;left:.65rem;opacity:.4;pointer-events:none;flex-shrink:0;' +
  '}' +
  '.ta-search-input{' +
    'flex:1;width:100%;' +
    'background:rgba(255,255,255,.03);' +
    'border:1px solid var(--border);' +
    'border-radius:8px;' +
    'padding:.45rem .8rem .45rem 2rem;' +
    'color:var(--text);font-size:.85rem;font-family:var(--font-sans);' +
    'transition:border-color .2s,box-shadow .2s,background .2s;' +
  '}' +
  '.ta-search-input::placeholder{color:var(--muted)}' +
  '.ta-search-input:focus{' +
    'outline:none;' +
    'border-color:rgba(99,102,241,.3);' +
    'background:rgba(255,255,255,.04);' +
    'box-shadow:0 0 0 3px rgba(99,102,241,.08);' +
  '}' +
  '.ta-kbd{' +
    'position:absolute;right:.5rem;' +
    'font-family:var(--font-mono);font-size:.7rem;' +
    'padding:.1rem .35rem;border-radius:4px;' +
    'background:rgba(255,255,255,.06);border:1px solid var(--border);' +
    'color:var(--muted);pointer-events:none;' +
  '}' +
  '.ta-search-results{' +
    'position:absolute;top:calc(100% + 6px);left:0;right:0;' +
    'background:var(--surface);border:1px solid var(--border);' +
    'border-radius:8px;box-shadow:var(--shadow-lg);' +
    'display:none;z-index:960;overflow:hidden;padding:.4rem;' +
  '}' +
  '.ta-search-results a{' +
    'display:block;padding:.5rem .75rem;font-size:.85rem;' +
    'color:var(--text-secondary);border-radius:6px;' +
    'transition:background .12s,color .12s;' +
  '}' +
  '.ta-search-results a:hover{background:var(--primary-glow);color:var(--text)}' +
  '.ta-sr-empty{padding:.75rem;text-align:center;color:var(--muted);font-size:.82rem}' +
  /* Nav links */
  '.ta-nav-links{display:flex;gap:.25rem;margin-left:auto;align-items:center}' +
  '.ta-nav-links a{' +
    'font-size:.85rem;font-weight:500;color:var(--text-secondary);' +
    'padding:.4rem .7rem;border-radius:6px;' +
    'transition:color .15s,background .15s;' +
  '}' +
  '.ta-nav-links a:hover{color:var(--text);background:rgba(255,255,255,.04)}' +
  /* Right section */
  '.ta-right{flex-shrink:0;position:relative}' +
  '.ta-signin{' +
    'font-size:.82rem;font-weight:500;' +
    'padding:.4rem .9rem;border-radius:6px;' +
    'background:rgba(255,255,255,.05);border:1px solid var(--border);' +
    'color:var(--text-secondary);cursor:pointer;' +
    'transition:all .2s;' +
  '}' +
  '.ta-signin:hover{border-color:var(--border-hover);color:var(--text);background:rgba(255,255,255,.07)}' +
  /* Avatar */
  '.ta-avatar-trigger{' +
    'width:32px;height:32px;border-radius:50%;' +
    'border:1px solid var(--border);overflow:hidden;cursor:pointer;' +
    'background:var(--bg-elevated);display:flex;align-items:center;justify-content:center;' +
  '}' +
  '.ta-avatar-img{width:100%;height:100%;object-fit:cover}' +
  '.ta-avatar-init{font-size:.8rem;font-weight:600;color:var(--primary)}' +
  '.ta-dropdown{' +
    'position:absolute;right:0;top:calc(100% + 8px);' +
    'background:var(--surface);border:1px solid var(--border);border-radius:8px;' +
    'box-shadow:var(--shadow);min-width:200px;display:none;z-index:950;overflow:hidden;' +
  '}' +
  '.ta-dropdown.ta-dd-open{display:block}' +
  '.ta-dd-header{padding:.75rem;border-bottom:1px solid var(--border)}' +
  '.ta-dd-name{font-weight:600;font-size:.9rem}' +
  '.ta-dd-email{font-size:.75rem;color:var(--muted);margin-top:2px}' +
  '.ta-dd-item{' +
    'display:block;width:100%;text-align:left;' +
    'padding:.6rem .75rem;font-size:.85rem;color:var(--text);' +
    'background:none;border:none;cursor:pointer;transition:background .15s;' +
  '}' +
  '.ta-dd-item:hover{background:rgba(99,102,241,.06)}' +
  /* Hamburger */
  '.ta-hamburger{' +
    'display:none;background:none;border:none;cursor:pointer;' +
    'padding:4px;flex-direction:column;gap:4px;flex-shrink:0;' +
  '}' +
  '.ta-hamburger span{' +
    'display:block;width:20px;height:2px;background:var(--text);border-radius:1px;' +
    'transition:transform .2s,opacity .2s;' +
  '}' +
  '.ta-hamburger.ta-active span:nth-child(1){transform:rotate(45deg) translate(4px,4px)}' +
  '.ta-hamburger.ta-active span:nth-child(2){opacity:0}' +
  '.ta-hamburger.ta-active span:nth-child(3){transform:rotate(-45deg) translate(4px,-4px)}' +
  /* Mobile menu */
  '.ta-mobile-menu{' +
    'display:none;position:absolute;top:100%;left:0;right:0;' +
    'background:var(--bg-elevated);border-bottom:1px solid var(--border);' +
    'max-height:80vh;overflow-y:auto;-webkit-overflow-scrolling:touch;' +
    'padding:1rem;z-index:890;' +
  '}' +
  '.ta-mobile-menu.ta-open{display:block}' +
  '.ta-mobile-cat{margin-bottom:1.25rem}' +
  '.ta-mobile-cat-label{' +
    'font-size:.72rem;font-weight:600;color:var(--muted);' +
    'text-transform:uppercase;letter-spacing:.06em;' +
    'margin-bottom:.5rem;display:flex;align-items:center;gap:.4rem;' +
  '}' +
  '.ta-cat-dot{width:7px;height:7px;border-radius:50%;display:inline-block}' +
  '.ta-mobile-cat-links{display:flex;flex-direction:column;gap:.1rem}' +
  '.ta-mobile-cat-links a{' +
    'padding:.5rem .6rem;font-size:.88rem;color:var(--text-secondary);' +
    'border-radius:6px;transition:background .12s,color .12s;' +
  '}' +
  '.ta-mobile-cat-links a:hover{background:rgba(255,255,255,.04);color:var(--text)}' +
  '.ta-badge-sm{font-size:.7rem;margin-left:.2rem}' +
  /* Responsive */
  '@media(max-width:768px){' +
    '.ta-nav-links{display:none}' +
    '.ta-hamburger{display:flex}' +
    '.ta-search-wrap{max-width:none;flex:1}' +
    '.ta-right{display:none}' +
    '.ta-kbd{display:none}' +
  '}' +
  '@media(max-width:480px){' +
    '.ta-nav-inner{padding:0 1rem;height:54px}' +
  '}';

  /* Inject scoped styles — MUST be after NAV_CSS definition */
  var style = document.createElement('style');
  style.textContent = NAV_CSS;
  document.head.appendChild(style);

})();
/* EOF */
