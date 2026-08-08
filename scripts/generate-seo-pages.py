#!/usr/bin/env python3
"""
Programmatic SEO page generator for utility-sites.
Generates static pre-rendered HTML pages for high-traffic currency/crypto pairs.

URL structure:
  /convert/usd-to-eur/          — fiat to fiat
  /convert/btc-to-usd/          — crypto to fiat
  /convert/usdt-to-usd/         — stablecoin to fiat

Each page includes:
  - Real exchange rate (baked at build time)
  - Interactive converter widget (updates via CoinGecko API client-side)
  - SEO content: FAQs, common amounts, historical context
  - Schema.org structured data (WebApplication + FAQPage + BreadcrumbList)
  - Internal linking to related pairs

Run: python3 generate-seo-pages.py
Output: creates /convert/ directory with index pages and pair pages
"""

import json
import os
import sys
import time
import urllib.request
import urllib.error
from datetime import datetime, timezone

PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))
CONVERT_DIR = os.path.join(PROJECT_DIR, "convert")
ANALYTICS_ID = "087c548b-708c-42bf-9d9a-5704df7880f2"

# === CONFIG ===

# Top 20 crypto coins (by search volume, not just market cap)
CRYPTO_COINS = [
    ("bitcoin", "btc", "Bitcoin", "BTC"),
    ("ethereum", "eth", "Ethereum", "ETH"),
    ("tether", "usdt", "Tether", "USDT"),
    ("binancecoin", "bnb", "BNB", "BNB"),
    ("ripple", "xrp", "XRP", "XRP"),
    ("solana", "sol", "Solana", "SOL"),
    ("usd-coin", "usdc", "USD Coin", "USDC"),
    ("dogecoin", "doge", "Dogecoin", "DOGE"),
    ("tron", "trx", "TRON", "TRX"),
    ("chainlink", "link", "Chainlink", "LINK"),
    ("cardano", "ada", "Cardano", "ADA"),
    ("avalanche-2", "avax", "Avalanche", "AVAX"),
    ("polkadot", "dot", "Polkadot", "DOT"),
    ("matic-network", "matic", "Polygon", "MATIC"),
    ("litecoin", "ltc", "Litecoin", "LTC"),
    ("bitcoin-cash", "bch", "Bitcoin Cash", "BCH"),
    ("uniswap", "uni", "Uniswap", "UNI"),
    ("stellar", "xlm", "Stellar", "XLM"),
    ("monero", "xmr", "Monero", "XMR"),
    ("zcash", "zec", "Zcash", "ZEC"),
]

# Top 20 fiat currencies (by search volume)
FIAT_CURRENCIES = [
    ("usd", "USD", "US Dollar", "$"),
    ("eur", "EUR", "Euro", "€"),
    ("gbp", "GBP", "British Pound", "£"),
    ("jpy", "JPY", "Japanese Yen", "¥"),
    ("cny", "CNY", "Chinese Yuan", "¥"),
    ("inr", "INR", "Indian Rupee", "₹"),
    ("krw", "KRW", "Korean Won", "₩"),
    ("aud", "AUD", "Australian Dollar", "A$"),
    ("cad", "CAD", "Canadian Dollar", "C$"),
    ("chf", "CHF", "Swiss Franc", "Fr"),
    ("hkd", "HKD", "Hong Kong Dollar", "HK$"),
    ("sgd", "SGD", "Singapore Dollar", "S$"),
    ("brl", "BRL", "Brazilian Real", "R$"),
    ("mxn", "MXN", "Mexican Peso", "$"),
    ("rub", "RUB", "Russian Ruble", "₽"),
    ("zar", "ZAR", "South African Rand", "R"),
    ("try", "TRY", "Turkish Lira", "₺"),
    ("aed", "AED", "UAE Dirham", "د.إ"),
    ("sar", "SAR", "Saudi Riyal", "﷼"),
    ("thb", "THB", "Thai Baht", "฿"),
]

# Common amounts to show in conversion tables
COMMON_AMOUNTS = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000]

# === COINGECKO API ===

def fetch_price(coin_id, vs_currency):
    """Fetch current price from CoinGecko."""
    url = f"https://api.coingecko.com/api/v3/simple/price?ids={coin_id}&vs_currencies={vs_currency}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "utility-sites-bot/1.0"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
            if coin_id in data and vs_currency in data[coin_id]:
                return data[coin_id][vs_currency]
    except Exception as e:
        print(f"  Warning: Could not fetch {coin_id}/{vs_currency}: {e}")
    return None

def fetch_multiple_prices(coin_ids, vs_currencies):
    """Batch fetch prices from CoinGecko (more efficient)."""
    ids_str = ",".join(coin_ids)
    vs_str = ",".join(vs_currencies)
    url = f"https://api.coingecko.com/api/v3/simple/price?ids={ids_str}&vs_currencies={vs_str}"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "utility-sites-bot/1.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read())
    except Exception as e:
        print(f"  Error fetching batch prices: {e}")
        return {}

# === PAGE GENERATION ===

def generate_crypto_to_fiat_page(coin_id, coin_symbol, coin_name, coin_ticker,
                                   fiat_code, fiat_ticker, fiat_name, fiat_symbol, rate):
    """Generate a crypto-to-fiat conversion page (e.g., BTC to USD)."""
    slug = f"{coin_symbol}-to-{fiat_code}"
    title = f"{coin_ticker} to {fiat_ticker} Converter — Live {coin_name} Price"
    desc = f"Convert {coin_name} ({coin_ticker}) to {fiat_name} ({fiat_ticker}). Live exchange rate: 1 {coin_ticker} = {fiat_symbol}{rate:,.4f} {fiat_ticker}. Free, no signup."

    # Build conversion table
    amounts_html = ""
    for amt in COMMON_AMOUNTS:
        converted = amt * rate
        amounts_html += f'<tr><td><strong>{amt} {coin_ticker}</strong></td><td>{fiat_symbol}{converted:,.2f} {fiat_ticker}</td></tr>\n'

    # Build related pairs
    related = []
    for f_code, f_ticker, f_name, f_sym in FIAT_CURRENCIES[:6]:
        if f_code != fiat_code:
            related.append(f'<a href="/convert/{coin_symbol}-to-{f_code}/">{coin_ticker} to {f_ticker}</a>')
    for c_id, c_sym, c_name, c_ticker in CRYPTO_COINS[:6]:
        if c_sym != coin_symbol:
            related.append(f'<a href="/convert/{c_sym}-to-{fiat_code}/">{c_ticker} to {fiat_ticker}</a>')

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="https://utility-sites.pages.dev/convert/{slug}/">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<link rel="stylesheet" href="/shared/theme.css">
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"WebApplication","name":"{coin_ticker} to {fiat_ticker} Converter","description":"Convert {coin_name} to {fiat_name} with live rates.","url":"https://utility-sites.pages.dev/convert/{slug}/","applicationCategory":"FinanceApplication","offers":{{"@type":"Offer","price":"0","priceCurrency":"USD"}}}}</script>
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{{"@type":"Question","name":"What is 1 {coin_ticker} in {fiat_ticker}?","acceptedAnswer":{{"@type":"Answer","text":"1 {coin_ticker} = {fiat_symbol}{rate:,.4f} {fiat_ticker} based on current exchange rates."}}}},{{"@type":"Question","name":"How much is 100 {coin_ticker} worth in {fiat_ticker}?","acceptedAnswer":{{"@type":"Answer","text":"100 {coin_ticker} = {fiat_symbol}{100*rate:,.2f} {fiat_ticker}."}}}},{{"@type":"Question","name":"How to convert {coin_name} to {fiat_name}?","acceptedAnswer":{{"@type":"Answer","text":"Multiply the amount of {coin_ticker} by the current exchange rate ({rate:,.4f} {fiat_ticker} per {coin_ticker}). Use our converter above for real-time calculations."}}}}]}}</script>
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{{"@type":"ListItem","position":1,"name":"Home","item":"https://utility-sites.pages.dev/"}},{{"@type":"ListItem","position":2,"name":"{coin_ticker} to {fiat_ticker}","item":"https://utility-sites.pages.dev/convert/{slug}/"}}]}}</script>
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"HowTo","name":"Convert {coin_ticker} to {fiat_ticker}","step":[{{"@type":"HowToStep","text":"Enter the amount of {coin_ticker} you want to convert."}},{{"@type":"HowToStep","text":"The converter multiplies by the live exchange rate."}},{{"@type":"HowToStep","text":"See the result in {fiat_ticker} instantly."}}]}}</script>
<style>
.conv-box{{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.5rem;margin:1.5rem 0}}
.conv-row{{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}}
.conv-input{{flex:1;position:relative}}
.conv-input input{{width:100%;font-size:1.5rem;font-weight:700;padding:.75rem;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);color:var(--text)}}
.conv-input label{{font-size:.8rem;color:var(--muted);margin-bottom:.25rem;display:block}}
.conv-arrow{{font-size:1.5rem;color:var(--primary);flex-shrink:0}}
.rate-badge{{display:inline-block;background:rgba(99,102,241,.15);color:var(--primary-hover);padding:.25rem .75rem;border-radius:999px;font-size:.85rem;font-weight:600;margin-bottom:1rem}}
.conv-table{{width:100%;border-collapse:collapse;margin:1.5rem 0}}
.conv-table th{{text-align:left;padding:.6rem;border-bottom:2px solid var(--border);color:var(--muted);font-size:.8rem;text-transform:uppercase;letter-spacing:.05em}}
.conv-table td{{padding:.6rem;border-bottom:1px solid var(--border)}}
.conv-table tr:hover{{background:rgba(99,102,241,.05)}}
</style>
</head>
<body>
<script src="/shared/nav.js"></script>
<div class="page-container">
<div class="page-header">
<h1>{coin_ticker} to {fiat_ticker} Converter</h1>
<p>Convert {coin_name} to {fiat_name} with live exchange rates</p>
</div>

<div class="conv-box">
<div class="rate-badge">⚡ Live Rate: 1 {coin_ticker} = {fiat_symbol}{rate:,.4f} {fiat_ticker}</div>
<div class="conv-row">
<div class="conv-input">
<label>{coin_name} ({coin_ticker})</label>
<input type="number" id="cryptoAmount" value="1" min="0" step="any" oninput="convertCrypto()">
</div>
<div class="conv-arrow">→</div>
<div class="conv-input">
<label>{fiat_name} ({fiat_ticker})</label>
<input type="number" id="fiatAmount" value="{rate:,.2f}" min="0" step="any" oninput="convertFiat()">
</div>
</div>
<p style="text-align:center;color:var(--muted);font-size:.8rem;margin-top:.5rem">Rates update every 60 seconds via CoinGecko API</p>
</div>

<h2 style="font-size:1.3rem;font-weight:700;margin:2rem 0 .75rem">{coin_ticker} to {fiat_ticker} Conversion Table</h2>
<table class="conv-table">
<thead><tr><th>{coin_name} ({coin_ticker})</th><th>{fiat_name} ({fiat_ticker})</th></tr></thead>
<tbody>
{amounts_html}
</tbody>
</table>

<div class="content-section">
<h2>About {coin_name} ({coin_ticker})</h2>
<p>{coin_name} ({coin_ticker}) is one of the most traded cryptocurrencies in the world. The current exchange rate to {fiat_name} ({fiat_ticker}) is {fiat_symbol}{rate:,.4f}, updated continuously from CoinGecko market data.</p>
<p>Cryptocurrency prices are volatile. The rate shown here was accurate at build time but may have changed. Use the converter above for real-time rates.</p>
<h2>How to Convert {coin_ticker} to {fiat_ticker}</h2>
<p>Converting {coin_name} to {fiat_name} is simple: multiply your {coin_ticker} amount by the current exchange rate. For example, at a rate of {fiat_symbol}{rate:,.4f} per {coin_ticker}, 10 {coin_ticker} equals {fiat_symbol}{10*rate:,.2f} {fiat_ticker}.</p>
</div>

<div class="related-tools">
<h2>Related Conversions</h2>
<div class="related-links" style="display:flex;flex-wrap:wrap;gap:.5rem">
{chr(10).join(related)}
<a href="/crypto-converter/">🪙 All Crypto Converter</a>
<a href="/currency-converter/">💱 All Currency Converter</a>
</div>
</div>
</div>
<script>
var exchangeRate={rate};
function convertCrypto(){{var c=parseFloat(document.getElementById('cryptoAmount').value)||0;document.getElementById('fiatAmount').value=(c*exchangeRate).toFixed(2);}}
function convertFiat(){{var f=parseFloat(document.getElementById('fiatAmount').value)||0;document.getElementById('cryptoAmount').value=(f/exchangeRate).toFixed(8);}}
// Fetch live rate every 60s
fetch('https://api.coingecko.com/api/v3/simple/price?ids={coin_id}&vs_currencies={fiat_code}').then(r=>r.json()).then(d=>{{if(d['{coin_id}']&&d['{coin_id}']['{fiat_code}']){{exchangeRate=d['{coin_id}']['{fiat_code}'];convertCrypto();}}}}).catch(()=>{{}});
</script>
<script src="/shared/converter-dynamic.js"></script>
<script async defer data-website-id="{ANALYTICS_ID}" src="https://analytics.coreaspectai.com/script.js"></script>
</body>
</html>'''


def generate_fiat_to_fiat_page(from_code, from_ticker, from_name, from_symbol,
                                 to_code, to_ticker, to_name, to_symbol, rate):
    """Generate a fiat-to-fiat conversion page (e.g., USD to EUR)."""
    slug = f"{from_code}-to-{to_code}"
    title = f"{from_ticker} to {to_ticker} Converter — Live Exchange Rate"
    desc = f"Convert {from_name} ({from_ticker}) to {to_name} ({to_ticker}). Live rate: 1 {from_ticker} = {to_symbol}{rate:,.4f} {to_ticker}. Free online currency converter."

    amounts_html = ""
    for amt in COMMON_AMOUNTS:
        converted = amt * rate
        amounts_html += f'<tr><td><strong>{from_symbol}{amt} {from_ticker}</strong></td><td>{to_symbol}{converted:,.2f} {to_ticker}</td></tr>\n'

    related = []
    for f_code, f_ticker, f_name, f_sym in FIAT_CURRENCIES[:8]:
        if f_code != from_code and f_code != to_code:
            related.append(f'<a href="/convert/{from_code}-to-{f_code}/">{from_ticker} to {f_ticker}</a>')

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="https://utility-sites.pages.dev/convert/{slug}/">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<link rel="stylesheet" href="/shared/theme.css">
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"WebApplication","name":"{from_ticker} to {to_ticker} Converter","url":"https://utility-sites.pages.dev/convert/{slug}/","applicationCategory":"FinanceApplication","offers":{{"@type":"Offer","price":"0","priceCurrency":"USD"}}}}</script>
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{{"@type":"Question","name":"What is 1 {from_ticker} in {to_ticker}?","acceptedAnswer":{{"@type":"Answer","text":"1 {from_ticker} = {to_symbol}{rate:,.4f} {to_ticker}."}}}},{{"@type":"Question","name":"How much is 100 {from_ticker} in {to_ticker}?","acceptedAnswer":{{"@type":"Answer","text":"100 {from_ticker} = {to_symbol}{100*rate:,.2f} {to_ticker}."}}}}]}}</script>
<script type="application/ld+json">{{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{{"@type":"ListItem","position":1,"name":"Home","item":"https://utility-sites.pages.dev/"}},{{"@type":"ListItem","position":2,"name":"{from_ticker} to {to_ticker}","item":"https://utility-sites.pages.dev/convert/{slug}/"}}]}}</script>
<style>
.conv-box{{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.5rem;margin:1.5rem 0}}
.conv-row{{display:flex;align-items:center;gap:.75rem;margin-bottom:1rem}}
.conv-input{{flex:1;position:relative}}
.conv-input input{{width:100%;font-size:1.5rem;font-weight:700;padding:.75rem;background:var(--bg);border:1px solid var(--border);border-radius:var(--radius);color:var(--text)}}
.conv-input label{{font-size:.8rem;color:var(--muted);margin-bottom:.25rem;display:block}}
.conv-arrow{{font-size:1.5rem;color:var(--primary);flex-shrink:0}}
.rate-badge{{display:inline-block;background:rgba(99,102,241,.15);color:var(--primary-hover);padding:.25rem .75rem;border-radius:999px;font-size:.85rem;font-weight:600;margin-bottom:1rem}}
.conv-table{{width:100%;border-collapse:collapse;margin:1.5rem 0}}
.conv-table th{{text-align:left;padding:.6rem;border-bottom:2px solid var(--border);color:var(--muted);font-size:.8rem;text-transform:uppercase;letter-spacing:.05em}}
.conv-table td{{padding:.6rem;border-bottom:1px solid var(--border)}}
</style>
</head>
<body>
<script src="/shared/nav.js"></script>
<div class="page-container">
<div class="page-header">
<h1>{from_ticker} to {to_ticker} Converter</h1>
<p>Convert {from_name} to {to_name} with live exchange rates</p>
</div>

<div class="conv-box">
<div class="rate-badge">⚡ Live Rate: 1 {from_ticker} = {to_symbol}{rate:,.4f} {to_ticker}</div>
<div class="conv-row">
<div class="conv-input">
<label>{from_name} ({from_ticker})</label>
<input type="number" id="fromAmount" value="1" min="0" step="any" oninput="convertFrom()">
</div>
<div class="conv-arrow">→</div>
<div class="conv-input">
<label>{to_name} ({to_ticker})</label>
<input type="number" id="toAmount" value="{rate:,.2f}" min="0" step="any" oninput="convertTo()">
</div>
</div>
<p style="text-align:center;color:var(--muted);font-size:.8rem;margin-top:.5rem">Rates update every 60 seconds</p>
</div>

<h2 style="font-size:1.3rem;font-weight:700;margin:2rem 0 .75rem">{from_ticker} to {to_ticker} Conversion Table</h2>
<table class="conv-table">
<thead><tr><th>{from_name} ({from_ticker})</th><th>{to_name} ({to_ticker})</th></tr></thead>
<tbody>
{amounts_html}
</tbody>
</table>

<div class="content-section">
<h2>About the {from_ticker}/{to_ticker} Exchange Rate</h2>
<p>The exchange rate between the {from_name} and the {to_name} fluctuates throughout the day based on global forex markets. At the current rate, 1 {from_ticker} buys {to_symbol}{rate:,.4f} {to_ticker}.</p>
<p>Use the converter above for real-time calculations. The rate shown was last updated at build time and refreshes client-side every 60 seconds.</p>
</div>

<div class="related-tools">
<h2>Related Conversions</h2>
<div class="related-links" style="display:flex;flex-wrap:wrap;gap:.5rem">
{chr(10).join(related)}
<a href="/currency-converter/">💱 All Currency Converter</a>
</div>
</div>
</div>
<script>
var exchangeRate={rate};
function convertFrom(){{var f=parseFloat(document.getElementById('fromAmount').value)||0;document.getElementById('toAmount').value=(f*exchangeRate).toFixed(2);}}
function convertTo(){{var t=parseFloat(document.getElementById('toAmount').value)||0;document.getElementById('fromAmount').value=(t/exchangeRate).toFixed(4);}}
</script>
<script src="/shared/converter-dynamic.js"></script>
<script async defer data-website-id="{ANALYTICS_ID}" src="https://analytics.coreaspectai.com/script.js"></script>
</body>
</html>'''


def generate_convert_index(crypto_pages, fiat_pages):
    """Generate index page for /convert/ listing all available pairs."""
    crypto_links = ""
    for slug, title in sorted(crypto_pages):
        crypto_links += f'<a href="/convert/{slug}/" class="tool-card"><span class="icon">🪙</span><h2>{title}</h2><span class="open">Convert →</span></a>\n'

    fiat_links = ""
    for slug, title in sorted(fiat_pages):
        fiat_links += f'<a href="/convert/{slug}/" class="tool-card"><span class="icon">💱</span><h2>{title}</h2><span class="open">Convert →</span></a>\n'

    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Currency & Crypto Conversion Rates — Free Converters</title>
<meta name="description" content="Free currency and cryptocurrency conversion tables. Convert BTC, ETH, USDT to USD, EUR, GBP and more with live rates.">
<link rel="canonical" href="https://utility-sites.pages.dev/convert/">
<link rel="stylesheet" href="/shared/theme.css">
</head>
<body>
<script src="/shared/nav.js"></script>
<div class="page-container">
<div class="page-header">
<h1>Currency Conversion Rates</h1>
<p>Live exchange rates for crypto and fiat currencies</p>
</div>

<h2 style="font-size:1.3rem;font-weight:700;margin:2rem 0 1rem">Crypto to Fiat</h2>
<div class="tools-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.75rem">
{crypto_links}
</div>

<h2 style="font-size:1.3rem;font-weight:700;margin:2rem 0 1rem">Fiat to Fiat</h2>
<div class="tools-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.75rem">
{fiat_links}
</div>
</div>
<script async defer data-website-id="{ANALYTICS_ID}" src="https://analytics.coreaspectai.com/script.js"></script>
</body>
</html>'''


def main():
    os.makedirs(CONVERT_DIR, exist_ok=True)

    # === CRYPTO TO FIAT PAGES ===
    # Top 20 coins × Top 10 fiat = 200 pages
    crypto_fiat_count = 0
    crypto_pages_meta = []  # (slug, title) for index

    print("=== Fetching crypto prices (batch) ===")
    coin_ids = [c[0] for c in CRYPTO_COINS]
    fiat_codes = [f[0] for f in FIAT_CURRENCIES[:10]]  # top 10 fiat
    prices = fetch_multiple_prices(coin_ids, fiat_codes)

    for coin_id, coin_sym, coin_name, coin_ticker in CRYPTO_COINS:
        for fiat_code, fiat_ticker, fiat_name, fiat_symbol in FIAT_CURRENCIES[:10]:
            rate = prices.get(coin_id, {}).get(fiat_code)
            if not rate:
                continue

            slug = f"{coin_sym}-to-{fiat_code}"
            html = generate_crypto_to_fiat_page(
                coin_id, coin_sym, coin_name, coin_ticker,
                fiat_code, fiat_ticker, fiat_name, fiat_symbol, rate
            )

            page_dir = os.path.join(CONVERT_DIR, slug)
            os.makedirs(page_dir, exist_ok=True)
            with open(os.path.join(page_dir, "index.html"), 'w') as f:
                f.write(html)
            crypto_pages_meta.append((slug, f"{coin_ticker} to {fiat_ticker}"))
            crypto_fiat_count += 1

        # Rate limit: CoinGecko free API allows ~30 calls/min
        if crypto_fiat_count % 50 == 0:
            print(f"  Generated {crypto_fiat_count} crypto-fiat pages so far...")

    print(f"Crypto to fiat: {crypto_fiat_count} pages")

    # === FIAT TO FIAT PAGES ===
    # Top 10 fiat × Top 10 fiat (minus same) = ~90 pages
    fiat_fiat_count = 0
    fiat_pages_meta = []

    print("\n=== Fetching fiat prices ===")
    # Use USDC (tracks USD 1:1) as proxy to get all fiat rates in one API call
    fiat_rates = {}
    fiat_codes_str = ",".join([f[0] for f in FIAT_CURRENCIES[:10]])
    try:
        url = f"https://api.coingecko.com/api/v3/simple/price?ids=usd-coin&vs_currencies={fiat_codes_str}"
        req = urllib.request.Request(url, headers={"User-Agent": "utility-sites-bot/1.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read())
            fiat_rates = data.get("usd-coin", {})
            print(f"  Got rates for {len(fiat_rates)} fiat currencies")
    except Exception as e:
        print(f"  Warning: Could not fetch fiat rates: {e}")

    # If we got rates, generate pages
    for from_code, from_ticker, from_name, from_symbol in FIAT_CURRENCIES[:10]:
        for to_code, to_ticker, to_name, to_symbol in FIAT_CURRENCIES[:10]:
            if from_code == to_code:
                continue
            # Calculate cross rate: from→USD→to
            from_usd = fiat_rates.get(from_code)
            to_usd = fiat_rates.get(to_code)
            if not from_usd or not to_usd:
                continue
            rate = to_usd / from_usd

            slug = f"{from_code}-to-{to_code}"
            html = generate_fiat_to_fiat_page(
                from_code, from_ticker, from_name, from_symbol,
                to_code, to_ticker, to_name, to_symbol, rate
            )

            page_dir = os.path.join(CONVERT_DIR, slug)
            os.makedirs(page_dir, exist_ok=True)
            with open(os.path.join(page_dir, "index.html"), 'w') as f:
                f.write(html)
            fiat_pages_meta.append((slug, f"{from_ticker} to {to_ticker}"))
            fiat_fiat_count += 1

    print(f"Fiat to fiat: {fiat_fiat_count} pages")

    # === GENERATE INDEX ===
    index_html = generate_convert_index(crypto_pages_meta, fiat_pages_meta)
    with open(os.path.join(CONVERT_DIR, "index.html"), 'w') as f:
        f.write(index_html)
    print(f"Index page generated")

    # === SUMMARY ===
    total = crypto_fiat_count + fiat_fiat_count
    print(f"\n{'='*50}")
    print(f"TOTAL PAGES GENERATED: {total}")
    print(f"  Crypto to fiat: {crypto_fiat_count}")
    print(f"  Fiat to fiat: {fiat_fiat_count}")
    print(f"{'='*50}")
    return total


if __name__ == "__main__":
    main()
