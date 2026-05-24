/* ============================================================
   UtilityHub — Stripe Checkout Integration  (stripe-checkout.js)
   Include via <script src="shared/stripe-checkout.js">
   Requires: window.STRIPE_PK  (set before this script)
   If no key present, checkout silently disables.
   ============================================================ */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     Guards — if no Stripe key, do nothing silently
     --------------------------------------------------------- */
  if (!window.STRIPE_PK) {
    window.StripeCheckout = {
      openCheckout: function () { console.warn('[StripeCheckout] No STRIPE_PK configured.'); },
      isAvailable: function () { return false; }
    };
    return;
  }

  /* ---------------------------------------------------------
     State
     --------------------------------------------------------- */
  var stripe = null;
  var _premium = false;

  /* ---------------------------------------------------------
     Load Stripe.js from CDN, then create instance
     --------------------------------------------------------- */
  loadStripe();

  function loadStripe() {
    if (window.Stripe) {
      stripe = window.Stripe(window.STRIPE_PK);
      return;
    }
    var s = document.createElement('script');
    s.src = 'https://js.stripe.com/v3';
    s.onload = function () {
      stripe = Stripe(window.STRIPE_PK);
    };
    s.onerror = function () {
      console.warn('[StripeCheckout] Failed to load Stripe.js');
    };
    document.head.appendChild(s);
  }

  /* ---------------------------------------------------------
     Public API — window.StripeCheckout
     --------------------------------------------------------- */
  window.StripeCheckout = {
    /**
     * Redirect to Stripe Checkout.
     * @param {string} planId   — The Stripe Price ID (price_xxx)
     * @param {string} toolName — Human-readable tool name for the session metadata
     */
    openCheckout: function (planId, toolName) {
      if (!stripe) {
        console.warn('[StripeCheckout] Stripe not loaded yet.');
        return;
      }
      if (!planId) {
        console.warn('[StripeCheckout] No planId provided.');
        return;
      }

      var currentUrl = window.location.href;

      stripe.redirectToCheckout({
        lineItems: [{ price: planId, quantity: 1 }],
        mode: 'subscription',
        successUrl: currentUrl + '?checkout=success',
        cancelUrl:  currentUrl + '?checkout=cancelled',
        clientReferenceId: getClientRef(),
        // Stripe auto-fills email if user is logged in
      }).then(function (result) {
        if (result.error) {
          console.warn('[StripeCheckout] Redirect error:', result.error.message);
          showToast(result.error.message, 'danger');
        }
      });
    },

    /**
     * Check if Stripe checkout is available.
     */
    isAvailable: function () {
      return !!stripe;
    },

    /**
     * Returns true if the current user is recognised as premium.
     */
    isPremium: function () {
      return _premium;
    }
  };

  /* ---------------------------------------------------------
     Listen for auth:premium event (from auth.js)
     --------------------------------------------------------- */
  document.addEventListener('auth:premium', function (e) {
    _premium = true;
    // Let the page know checkout succeeded and UI should unlock
    document.dispatchEvent(new CustomEvent('stripe:premium-unlocked', { detail: e.detail }));
    showToast('Premium unlocked! 🎉', 'success');
  });

  document.addEventListener('auth:logout', function () {
    _premium = false;
  });

  /* ---------------------------------------------------------
     Check URL for checkout=success on page load
     If present and user is logged in, verify premium status
     --------------------------------------------------------- */
  function checkReturnUrl() {
    var params = new URLSearchParams(window.location.search);
    if (params.get('checkout') === 'success') {
      // Clean up the URL
      params.delete('checkout');
      var clean = params.toString();
      var newUrl = window.location.pathname + (clean ? '?' + clean : '');
      history.replaceState(null, '', newUrl);
      showToast('Payment successful! Verifying your subscription…', 'info');
    }
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkReturnUrl);
  } else {
    checkReturnUrl();
  }

  /* ---------------------------------------------------------
     Helpers
     --------------------------------------------------------- */
  function getClientRef() {
    // Use Firebase UID if available, otherwise anonymous
    if (window.UtilityAuth && window.UtilityAuth.currentUser) {
      return window.UtilityAuth.currentUser.uid;
    }
    return 'anon_' + randomId();
  }

  function randomId() {
    return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
  }

  /**
   * Lightweight toast — reuses theme.css toast styles if available,
   * or creates a minimal inline version.
   */
  function showToast(msg, type) {
    type = type || 'info';
    var container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    var toast = document.createElement('div');
    toast.className = 'toast toast-' + type;
    toast.textContent = msg;
    container.appendChild(toast);

    // Auto-dismiss after 4 seconds
    setTimeout(function () {
      toast.classList.add('removing');
      setTimeout(function () { toast.remove(); }, 250);
    }, 4000);
  }

})();
