/**
 * Dynamic Content Engine for Converter Pages
 * 
 * When a user types an amount:
 * 1. Updates the conversion table to show their amount
 * 2. Updates the page heading to include their number
 * 3. Updates the rate badge
 * 4. Updates meta description for social sharing
 * 5. Updates the URL with ?amount=X (shareable)
 * 6. Adds their query as a highlighted row in the table
 * 
 * This creates infinite content variations from a single page template.
 */

(function() {
  'use strict';

  // Parse the pair from the URL: /convert/btc-to-usd/
  var path = window.location.pathname;
  var match = path.match(/\/convert\/([^/]+)\/?/);
  if (!match) return;
  
  var slug = match[1];
  var parts = slug.split('-to-');
  if (parts.length !== 2) return;
  
  var fromTicker = parts[0].toUpperCase();
  var toTicker = parts[1].toUpperCase();
  
  // Read the baked-in exchange rate from the inline script
  var rate = window.exchangeRate || 0;
  if (!rate) return;

  // Get DOM elements
  var cryptoInput = document.getElementById('cryptoAmount') || document.getElementById('fromAmount');
  var fiatInput = document.getElementById('fiatAmount') || document.getElementById('toAmount');
  var h1 = document.querySelector('h1');
  var rateBadge = document.querySelector('.rate-badge');
  var convTable = document.querySelector('.conv-table tbody');
  var metaDesc = document.querySelector('meta[name="description"]');
  var pageTitle = document.querySelector('title');
  var ogDesc = document.querySelector('meta[property="og:description"]');

  // Detect which input is crypto vs fiat based on which one exists
  var isCryptoPage = !!document.getElementById('cryptoAmount');
  var cryptoField = isCryptoPage ? document.getElementById('cryptoAmount') : document.getElementById('fromAmount');
  var fiatField = isCryptoPage ? document.getElementById('fiatAmount') : document.getElementById('toAmount');

  // Get currency symbols
  var fromSymbol = fromTicker;
  var toSymbol = toTicker;
  var fromName = h1 ? h1.textContent.split(' to ')[0].replace(' Converter', '') : fromTicker;
  var toName = h1 ? h1.textContent.split(' to ')[1]?.replace(' Converter', '') : toTicker;

  // Try to extract symbols from the page
  var rateText = rateBadge ? rateBadge.textContent : '';
  var symbolMatch = rateText.match(/=\s*([^0-9]+)/);
  if (symbolMatch) toSymbol = symbolMatch[1].trim();

  // Original values for restore
  var originalH1 = h1 ? h1.textContent : '';
  var originalDesc = metaDesc ? metaDesc.content : '';
  var originalTitle = pageTitle ? pageTitle.textContent : '';

  // Read amount from URL on load
  function getAmountFromURL() {
    var params = new URLSearchParams(window.location.search);
    var amt = parseFloat(params.get('amount'));
    return isNaN(amt) || amt <= 0 ? null : amt;
  }

  // Update URL with amount (replaceState, no reload)
  function updateURL(amount) {
    var url = window.location.pathname;
    if (amount && amount > 0 && amount !== 1) {
      url += '?amount=' + amount;
    }
    window.history.replaceState({}, '', url);
  }

  // Format numbers nicely
  function fmt(num) {
    if (num >= 1e9) return (num / 1e9).toFixed(2) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
    if (num >= 1e4) return num.toLocaleString('en-US', {maximumFractionDigits: 0});
    if (num >= 1) return num.toLocaleString('en-US', {maximumFractionDigits: 2});
    return num.toFixed(4);
  }

  // Add/update a "Your Conversion" highlighted row at top of table
  function updateHighlightRow(amount) {
    if (!convTable) return;
    var existing = document.getElementById('yourRow');
    if (amount === 1 || !amount) {
      if (existing) existing.remove();
      return;
    }
    var converted = amount * rate;
    var row = existing || document.createElement('tr');
    row.id = 'yourRow';
    row.style.background = 'rgba(99,102,241,0.15)';
    row.style.fontWeight = '700';
    row.innerHTML = '<td><strong>' + fmt(amount) + ' ' + fromTicker + '</strong> ← your input</td>' +
                     '<td><strong>' + fmt(converted) + ' ' + toTicker + '</strong></td>';
    if (!existing) {
      convTable.insertBefore(row, convTable.firstChild);
    }
  }

  // Update all dynamic content based on amount
  function updateDynamicContent(amount) {
    var converted = amount * rate;

    // Update H1
    if (h1) {
      if (amount === 1) {
        h1.textContent = originalH1;
      } else {
        h1.textContent = fmt(amount) + ' ' + fromTicker + ' to ' + toTicker;
      }
    }

    // Update page title
    if (pageTitle) {
      if (amount === 1) {
        pageTitle.textContent = originalTitle;
      } else {
        pageTitle.textContent = fmt(amount) + ' ' + fromTicker + ' = ' + fmt(converted) + ' ' + toTicker + ' | Converter';
      }
    }

    // Update meta description
    if (metaDesc) {
      if (amount === 1) {
        metaDesc.content = originalDesc;
      } else {
        metaDesc.content = fmt(amount) + ' ' + fromTicker + ' = ' + fmt(converted) + ' ' + toTicker + '. Live exchange rate converter. Free, no signup.';
      }
    }

    if (ogDesc && amount !== 1) {
      ogDesc.content = fmt(amount) + ' ' + fromTicker + ' = ' + fmt(converted) + ' ' + toTicker + '.';
    }

    // Update rate badge
    if (rateBadge) {
      rateBadge.textContent = '⚡ Live Rate: 1 ' + fromTicker + ' = ' + fmt(rate) + ' ' + toTicker;
    }

    // Update table highlight
    updateHighlightRow(amount);

    // Update URL
    updateURL(amount);
  }

  // Hook into the existing converter inputs
  function hookInputs() {
    if (cryptoField) {
      var origOnInput = cryptoField.oninput;
      cryptoField.addEventListener('input', function() {
        var val = parseFloat(cryptoField.value);
        if (!isNaN(val) && val > 0) {
          updateDynamicContent(val);
        }
      });
    }
    if (fiatField) {
      fiatField.addEventListener('input', function() {
        var val = parseFloat(fiatField.value);
        if (!isNaN(val) && val > 0) {
          var cryptoAmt = val / rate;
          updateDynamicContent(cryptoAmt);
        }
      });
    }
  }

  // On load: check URL for amount
  function init() {
    hookInputs();
    var urlAmount = getAmountFromURL();
    if (urlAmount) {
      if (cryptoField) cryptoField.value = urlAmount;
      // Trigger conversion
      if (typeof convertCrypto === 'function') convertCrypto();
      else if (typeof convertFrom === 'function') convertFrom();
      updateDynamicContent(urlAmount);
    }
  }

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
