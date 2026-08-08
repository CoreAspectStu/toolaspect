/* ============================================================
   ToolAspect — Freemium Gate  (gate.js)
   Include via <script src="shared/gate.js">
   If no window.PREMIUM_CONFIG, the gate silently disables.
   ============================================================ */
(function () {
  'use strict';
  if (!window.PREMIUM_CONFIG) return;

  var cfg = window.PREMIUM_CONFIG;
  var toolName = cfg.toolName || 'Pro', planId = cfg.planId || '';
  var price = cfg.price || '', features = cfg.features || [];
  var isPremium = false, gates = [], modalEl = null, modalBuilt = false;

  function boot() {
    if (window.UtilityAuth && typeof window.UtilityAuth.isPremium === 'function') {
      isPremium = window.UtilityAuth.isPremium();
    }
    var seen = new Set();
    function add(el) {
      if (seen.has(el)) return; seen.add(el);
      var pos = getComputedStyle(el).position;
      if (pos === 'static' || !pos) el.style.position = 'relative';
      var ov = document.createElement('div');
      ov.className = 'uh-gate';
      ov.innerHTML = '<div class="uh-gate-c"><svg class="uh-gate-lk" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg><span class="uh-gate-b">PRO</span></div>';
      ov.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); showModal(el); });
      el.appendChild(ov);
      gates.push({ el: el, overlay: ov });
    }
    document.querySelectorAll('.premium-feature').forEach(add);
    document.querySelectorAll('[data-premium="true"]').forEach(add);
    if (isPremium) unlockAll();
    document.addEventListener('auth:login', function () {
      if (window.UtilityAuth && window.UtilityAuth.isPremium()) { isPremium = true; unlockAll(); }
    });
    document.addEventListener('auth:premium', function () { isPremium = true; unlockAll(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalEl && modalEl.classList.contains('uh-mo-a')) closeModal();
    });
    injectCSS();
  }

  function unlockAll() {
    gates.forEach(function (g) { if (g.overlay.parentNode) g.overlay.parentNode.removeChild(g.overlay); });
    gates = [];
    if (document.getElementById('uh-pro-st')) return;
    var b = document.createElement('div'); b.id = 'uh-pro-st'; b.className = 'uh-pro-st';
    b.textContent = 'PRO'; b.title = 'Premium active'; document.body.appendChild(b);
  }

  function showModal(gatedEl) {
    if (isPremium) return;
    if (!modalBuilt) { buildModal(); modalBuilt = true; }
    var ef = gatedEl && gatedEl.getAttribute('data-premium-features');
    var df = features;
    if (ef) try { df = JSON.parse(ef); } catch (e) { /* keep default */ }
    var h = document.getElementById('uh-up-h');
    if (h) h.textContent = toolName + ' Pro';
    var ul = document.getElementById('uh-up-f');
    if (ul) ul.innerHTML = df.map(function (f) {
      return '<li><svg class="uh-ck" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>' + esc(f) + '</li>';
    }).join('');
    var pe = document.getElementById('uh-up-p');
    if (pe) pe.textContent = price;
    if (modalEl) modalEl.classList.add('uh-mo-a');
  }

  function buildModal() {
    modalEl = document.createElement('div');
    modalEl.className = 'uh-mo'; modalEl.id = 'uh-upgrade-modal';
    modalEl.innerHTML =
      '<div class="uh-mo-box">' +
        '<div class="uh-mo-hd"><h3 id="uh-up-h">' + esc(toolName) + ' Pro</h3><button class="uh-mo-x" aria-label="Close">&times;</button></div>' +
        '<div class="uh-mo-bd"><p class="uh-mo-sub">Unlock premium features:</p><ul id="uh-up-f">' +
          features.map(function (f) {
            return '<li><svg class="uh-ck" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>' + esc(f) + '</li>';
          }).join('') +
        '</ul></div>' +
        '<div class="uh-mo-ft"><div class="uh-mo-pr"><span id="uh-up-p">' + esc(price) + '</span></div>' +
        '<button class="uh-up-btn" id="uh-up-cta">Upgrade to Pro</button>' +
        '<a href="#" class="uh-up-lat" id="uh-up-lat">Maybe later</a></div>' +
      '</div>';
    modalEl.addEventListener('click', function (e) { if (e.target === modalEl) closeModal(); });
    modalEl.querySelector('.uh-mo-x').addEventListener('click', closeModal);
    modalEl.querySelector('#uh-up-lat').addEventListener('click', function (e) { e.preventDefault(); closeModal(); });
    modalEl.querySelector('#uh-up-cta').addEventListener('click', function () {
      if (window.StripeCheckout && window.StripeCheckout.openCheckout) window.StripeCheckout.openCheckout(planId, toolName);
      else if (typeof window.openCheckout === 'function') window.openCheckout(planId, toolName);
      else console.warn('[Gate] No checkout handler available.');
    });
    document.body.appendChild(modalEl);
  }

  function closeModal() { if (modalEl) modalEl.classList.remove('uh-mo-a'); }

  function injectCSS() {
    if (document.getElementById('uh-gate-css')) return;
    var s = document.createElement('style'); s.id = 'uh-gate-css';
    s.textContent =
      '.uh-gate{position:absolute;inset:0;background:rgba(15,17,23,.72);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;z-index:50;cursor:pointer;border-radius:inherit;transition:opacity .2s}' +
      '.uh-gate:hover{background:rgba(15,17,23,.85)}' +
      '.uh-gate-c{display:flex;flex-direction:column;align-items:center;gap:8px}' +
      '.uh-gate-lk{width:28px;height:28px;color:#6366f1;opacity:.85}' +
      '.uh-gate-b{background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:.7rem;font-weight:700;letter-spacing:.06em;padding:3px 10px;border-radius:9999px}' +
      '.uh-pro-st{position:fixed;bottom:16px;right:16px;z-index:9999;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:.65rem;font-weight:700;letter-spacing:.08em;padding:4px 12px;border-radius:9999px;pointer-events:none;box-shadow:0 2px 12px rgba(99,102,241,.35)}' +
      '.uh-mo{position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.6);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden;transition:opacity .25s,visibility .25s}' +
      '.uh-mo-a{opacity:1;visibility:visible}' +
      '.uh-mo-box{background:#1a1d27;border:1px solid #2a2d3a;border-radius:12px;width:90%;max-width:420px;overflow:hidden;box-shadow:0 24px 48px rgba(0,0,0,.4);transform:translateY(12px);transition:transform .25s}' +
      '.uh-mo-a .uh-mo-box{transform:translateY(0)}' +
      '.uh-mo-hd{display:flex;align-items:center;justify-content:space-between;padding:20px 24px 0}' +
      '.uh-mo-hd h3{margin:0;font-size:1.15rem;color:#e4e4e7;font-weight:600}' +
      '.uh-mo-x{background:none;border:none;font-size:1.4rem;color:#9ca3af;cursor:pointer;line-height:1;padding:0}' +
      '.uh-mo-x:hover{color:#e4e4e7}' +
      '.uh-mo-bd{padding:16px 24px 0}' +
      '.uh-mo-sub{margin:0 0 12px;font-size:.85rem;color:#9ca3af}' +
      '#uh-up-f{list-style:none;margin:0;padding:0}' +
      '#uh-up-f li{display:flex;align-items:center;gap:8px;padding:8px 0;color:#e4e4e7;font-size:.9rem;border-bottom:1px solid #2a2d3a}' +
      '#uh-up-f li:last-child{border-bottom:none}' +
      '.uh-ck{width:16px;height:16px;color:#6366f1;flex-shrink:0}' +
      '.uh-mo-ft{padding:20px 24px 24px;text-align:center}' +
      '.uh-mo-pr{margin-bottom:16px}' +
      '#uh-up-p{font-size:1.5rem;font-weight:700;color:#e4e4e7}' +
      '.uh-up-btn{display:block;width:100%;padding:12px 0;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;font-size:.95rem;font-weight:600;border:none;border-radius:8px;cursor:pointer;transition:opacity .2s,transform .1s}' +
      '.uh-up-btn:hover{opacity:.9}' +
      '.uh-up-btn:active{transform:scale(.98)}' +
      '.uh-up-lat{display:inline-block;margin-top:12px;color:#9ca3af;font-size:.82rem;text-decoration:none}' +
      '.uh-up-lat:hover{color:#e4e4e7;text-decoration:underline}';
    document.head.appendChild(s);
  }

  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
