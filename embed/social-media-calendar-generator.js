/*!
 * ToolAspect Social Media Calendar Generator Embed
 * Install: <div id="ta-sm-calendar"></div>
 *          <script src="https://toolaspect.com/embed/social-media-calendar-generator.js"></script>
 * Options: add data-theme="dark" to the container div for dark theme.
 */
(function () {
  'use strict';
  var TARGET_ID = 'ta-sm-calendar';
  var BASE = 'https://toolaspect.com/social-media-calendar-generator/';

  var CSS = ''
    + '.ta-embed-root{--ta-bg:#f8fafc;--ta-surface:#ffffff;--ta-border:#e2e8f0;--ta-text:#0f172a;--ta-muted:#64748b;--ta-accent:#2563eb;'
    + 'font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;background:var(--ta-bg);color:var(--ta-text);'
    + 'line-height:1.6;max-width:640px;margin:0 auto;padding:4px;box-sizing:border-box;font-size:16px}'
    + '.ta-embed-root[data-theme="dark"]{--ta-bg:#0f172a;--ta-surface:#1e293b;--ta-border:#334155;--ta-text:#f1f5f9;--ta-muted:#94a3b8;--ta-accent:#60a5fa}'
    + '.ta-embed-root *,.ta-embed-root *::before,.ta-embed-root *::after{box-sizing:border-box}'
    + '.ta-embed-title{font-size:1.35rem;font-weight:700;text-align:center;margin:8px 0 2px;color:var(--ta-text)}'
    + '.ta-embed-subtitle{text-align:center;color:var(--ta-muted);margin-bottom:16px;font-size:.9rem}'
    + '.ta-embed-card{background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:12px;padding:16px;margin-bottom:14px}'
    + '.ta-embed-form-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}'
    + '.ta-embed-form-group label{display:block;font-size:.78rem;color:var(--ta-muted);margin-bottom:5px;font-weight:600;letter-spacing:.02em}'
    + '.ta-embed-form-group input,.ta-embed-form-group select{width:100%;background:var(--ta-bg);border:1px solid var(--ta-border);color:var(--ta-text);'
    + 'border-radius:8px;padding:9px 12px;font-size:.9rem;font-family:inherit;outline:none;color-scheme:light}'
    + '.ta-embed-form-group input:focus,.ta-embed-form-group select:focus{border-color:var(--ta-accent)}'
    + '.ta-embed-check{display:flex;flex-wrap:wrap;gap:12px;font-size:.82rem;margin-bottom:12px}'
    + '.ta-embed-check label{display:flex;align-items:center;gap:5px;cursor:pointer}'
    + '.ta-embed-check input{width:auto;accent-color:var(--ta-accent)}'
    + '.ta-embed-out{background:var(--ta-bg);border:1px solid var(--ta-border);border-radius:8px;padding:12px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;'
    + 'font-size:.75rem;line-height:1.6;white-space:pre;overflow-x:auto;max-height:280px;overflow-y:auto;margin-bottom:12px;color:var(--ta-text)}'
    + '.ta-embed-stats{font-size:.78rem;color:var(--ta-muted);margin-bottom:10px}'
    + '.ta-embed-btn{display:inline-block;background:var(--ta-accent);color:#fff;border:none;border-radius:8px;padding:9px 18px;font-size:.88rem;'
    + 'cursor:pointer;font-family:inherit;font-weight:600;margin:0 6px 10px 0}'
    + '.ta-embed-btn.ta-secondary{background:var(--ta-surface);color:var(--ta-text);border:1px solid var(--ta-border)}'
    + '.ta-embed-attrib{text-align:center;font-size:.72rem;margin-top:10px;color:var(--ta-muted)}'
    + '.ta-embed-attrib a{color:var(--ta-accent);text-decoration:none;font-weight:600}'
    + '.ta-embed-attrib a:hover{text-decoration:underline}'
    + '@media(max-width:480px){.ta-embed-form-row{grid-template-columns:1fr}}';

  var styleEl = document.createElement('style');
  styleEl.setAttribute('data-ta-embed', 'sm-calendar');
  styleEl.textContent = CSS;
  if (!document.querySelector('style[data-ta-embed="sm-calendar"]')) {
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
    + '<div class="ta-embed-title">Social Media Calendar Generator</div>'
    + '<div class="ta-embed-subtitle">A 30-day plan of post ideas from your niche</div>'
    + '<div class="ta-embed-card">'
    + '<div class="ta-embed-form-row">'
    + '<div class="ta-embed-form-group"><label>Niche</label><select class="ta-niche">'
    + '<option value="fitness" selected>Fitness &amp; Nutrition</option><option value="food">Food &amp; Recipes</option>'
    + '<option value="realestate">Real Estate</option><option value="saas">SaaS &amp; Tech</option>'
    + '<option value="ecommerce">E-commerce</option><option value="finance">Personal Finance</option>'
    + '<option value="beauty">Beauty &amp; Skincare</option><option value="travel">Travel</option>'
    + '</select></div>'
    + '<div class="ta-embed-form-group"><label>Posts per week</label><input type="number" class="ta-ppw" value="5" min="1" max="21"></div>'
    + '</div>'
    + '<div class="ta-embed-check">'
    + '<label><input type="checkbox" class="ta-plat" value="Instagram" data-time="13:00" checked> Instagram</label>'
    + '<label><input type="checkbox" class="ta-plat" value="TikTok" data-time="15:00" checked> TikTok</label>'
    + '<label><input type="checkbox" class="ta-plat" value="LinkedIn" data-time="11:00"> LinkedIn</label>'
    + '<label><input type="checkbox" class="ta-plat" value="X" data-time="10:00"> X</label>'
    + '</div>'
    + '</div>'
    + '<div class="ta-embed-stats">—</div>'
    + '<div class="ta-embed-out">Generate to see the plan</div>'
    + '<button type="button" class="ta-embed-btn ta-gen">Generate 30-day plan</button>'
    + '<button type="button" class="ta-embed-btn ta-secondary ta-copy">Copy as text</button>'
    + '<div class="ta-embed-attrib">Powered by <a href="' + BASE + '" target="_blank" rel="noopener">ToolAspect</a></div>';
  target.appendChild(root);

  // ── idea banks (subset of toolaspect.com/social-media-calendar-generator) ──
  var BANKS = {
    fitness: {
      edu: ['3 form fixes for your squat, one reel each', 'Protein myths: what 30g actually looks like on a plate', 'Progressive overload explained with two water jugs', 'Why your plateau is a recovery problem', 'The 10-minute mobility routine desk workers keep', 'Cardio vs lifting for fat loss: what research favors', 'Meal prep math: 5 dinners from one grocery run', 'Read a nutrition label in 15 seconds', 'Beginner to first pull-up: the 6-week ramp', 'Heart rate zones, decoded'],
      engage: ['Rate my form: followers send clips, I coach them', 'This or that: morning lift or evening lift?', 'Ask anything about training while cutting', 'Poll: what kills your gym consistency?', 'Duets welcome: do this warmup with me', 'Comment your gym stereotype, I will guess your split', 'Two truths and a lie: fitness edition', 'Caption this failed box jump'],
      promo: ['Client spot: 12 weeks, zero crash diets', 'Program enrollment opens Friday: what is inside', 'Free guide: grocery list for a cut', 'Before/after with the actual training log shown', 'Live Q&A: how coaching works, prices included'],
      fun: ['Gym fails compilation, respect the attempt', 'What your gym bag says about you', 'POV: leg day tomorrow', 'Gym characters, ranked by chaos']
    },
    food: {
      edu: ['The 5 pantry staples behind 20-minute dinners', 'Knife skills: 3 cuts that halve prep time', 'Why your pasta water matters more than the sauce', 'Salt, acid, fat, heat: fix any flat dish', 'How to store herbs so they last 10 days', 'The emergency pantry meal formula', 'Toast, upgraded: 4 balanced toppings', 'What "bake until golden" actually means'],
      engage: ['Rate my plating: weeknight edition', 'This or that: soup season or grill season?', 'Ask me the lazy version of any recipe', 'Poll: cilantro, yes or no', 'Remake my childhood favorite, badly: duet me', 'Comment your weirdest comfort food combo', 'Two truths and a lie: restaurant kitchen edition', 'Caption this souffle collapse'],
      promo: ['Cookbook launch week: behind the cover', 'Meal plan subscription: first week half off', 'Free download: the 20-minute dinner matrix', 'Kitchen gear I actually use (and the links)', 'Live cook-along: tickets and menu'],
      fun: ['Kitchen fails, volume 7', 'What your cast iron says about you', 'POV: you said "just a simple risotto"', 'Grocery store characters, ranked']
    },
    realestate: {
      edu: ['What $400K buys in this market right now', 'Closing costs itemized: who actually pays what', 'The inspection walkthrough: 8 red flags first', 'Rent vs buy at today’s rates: a real spreadsheet', 'How comp prices get chosen (and when they lie)', 'First-time buyer timeline: offer to keys in 45 days', 'Title insurance, explained without jargon', 'Escrow, explained with a pizza analogy'],
      engage: ['Guess the listing price: photo drop', 'This or that: fixer with land or turnkey tiny?', 'Ask a Realtor: bring your weird escrow questions', 'Poll: open house or private showing?', 'Comment the wildest thing you have seen at a showing', 'Rate my staging: $500 budget edition', 'Two truths and a lie: this listing’s history', 'Caption this 1970s bathroom'],
      promo: ['Just listed: open house Saturday, tour inside', 'Just sold: 6 days, 4 offers, the playbook', 'Buyer consult slots open this month', 'Free download: the 12-month buyer prep checklist', 'Market report: our zip code, this quarter'],
      fun: ['Listing photos that went too far with the wide angle', 'What your dream kitchen says about you', 'POV: the inspection is tomorrow', 'Open house characters, ranked']
    },
    saas: {
      edu: ['We cut onboarding from 9 steps to 3 — here is the data', 'Build vs buy: the spreadsheet we actually use', 'What support tickets taught us about pricing pages', 'A 5-minute audit: where trial users drop off', 'Latency budget: how we shaved 400ms', 'The API versioning policy I wish we had at v1', 'Pricing page teardown: 3 patterns that convert', 'How we write changelog entries people read'],
      engage: ['Poll: tabs or spaces (fight nicely)', 'Ask our CTO anything about the migration', 'This or that: dark mode default or respect the OS?', 'Comment the bug you fixed that made you proudest', 'Rate our empty states: be brutal', 'Two truths and a lie: our outage history', 'Caption this 3am Slack message', 'Duets: screen-record your workflow'],
      promo: ['Feature drop: what shipped this month', 'Webinar: migrate in an afternoon, live demo', 'Case study: 41% churn reduction', 'Free trial extended for the dev community', 'Beta program: early access to the new dashboard'],
      fun: ['Merge conflict haiku', 'What your editor theme says about you', 'POV: production on a Friday', 'Standup characters, ranked']
    },
    ecommerce: {
      edu: ['How we choose materials: supplier tour', 'Shipping, honestly: what free shipping does to margins', 'Sizing guide rebuilt: the returns data behind it', 'Packaging: why the box costs what it does', 'Behind the SKU: raw material to shelf in 90s', 'The 4 photos every product page needs', 'How we handle a defective unit, start to finish', 'Restock forecasting for humans'],
      engage: ['Pick the next colorway: poll final round', 'This or that: restock favorite or surprise drop?', 'Ask the founder anything about margins', 'Comment your order number, we roast our packing slip', 'Rate the prototype: two versions, one ships', 'Two truths and a lie: our bestseller’s origin', 'Caption the warehouse dog at work', 'Unboxing duets: show us your setup'],
      promo: ['Restock alert: the 3 bestsellers returning', 'Launch week: first 100 orders get the bundle price', 'Free shipping threshold experiment: this weekend', 'Gift guide: staff picks with real discounts', 'Refer-a-friend: how the credit actually works'],
      fun: ['Warehouse fails, unprompted', 'What your cart says about you', 'POV: the label printer at 4:59pm', 'Returns department characters, ranked']
    },
    finance: {
      edu: ['The 50/30/20 rule with real take-home numbers', 'High-yield savings vs CDs right now: the math', 'How expense ratios eat returns over 30 years', 'Credit score factors, ranked by weight', 'Debt avalanche vs snowball, same balances', 'What emergency fund size matches your job risk', 'Reading a paystub: the 6 lines that matter', 'Roth vs traditional: the bracket math in one page'],
      engage: ['Poll: budgeting app or spreadsheet?', 'Ask anything about the 50/30/20 rule', 'This or that: extra mortgage payment or invest it?', 'Comment your best inherited money habit', 'Rate my budget: percentage breakdown, be kind', 'Two truths and a lie: my worst purchases', 'Caption this grocery receipt', 'Duets: share your no-spend month rules'],
      promo: ['Free webinar: build a 1-page money plan', 'Course doors open: the 6-week money reset', 'Free download: the bill negotiation scripts', '1:1 consult slots: what we cover, what it costs', 'Newsletter: the weekly number that matters'],
      fun: ['Things I stopped buying and don’t miss', 'What your budgeting app says about you', 'POV: checking the market on a red day', 'Personal finance characters, ranked']
    },
    beauty: {
      edu: ['Ingredients that don’t mix: the cheat sheet', 'SPF reapplication over makeup: what works', 'The 3-step routine dermatologists keep repeating', 'How to read an INCI list', 'Retinol starter protocol: weeks 1-12', 'Why your expensive serum might be a $4 ingredient', 'Skin barrier repair: the minimal routine', 'Foundation shade matching in daylight'],
      engage: ['Rate my 5-minute face', 'This or that: minimal routine or full ritual?', 'Ask me anything: sensitive skin edition', 'Poll: fragrance in skincare, yes or no?', 'Duets: your morning routine, timed', 'Comment your holy grail under $15', 'Two truths and a lie: what is in my kit', 'Caption this eyeliner catastrophe'],
      promo: ['New shade launch: swatched on 6 skin tones', 'Restock: the cleanser that sells out', 'Free samples with orders this week', 'Live masterclass: 3 looks, 1 palette', 'Loyalty tier: how the points math works'],
      fun: ['Beauty fails: the beach perm incident', 'What your go-to lip shade says about you', 'POV: "one more coat"', 'Sephora characters, ranked']
    },
    travel: {
      edu: ['48 hours in a walkable city under $150/day', 'How to build a 14-day itinerary that doesn’t need a vacation after', 'Points vs cash: when each actually wins', 'Packing list for carry-on only: 10 days, tested', 'The seat selection map most people get wrong', 'Border paperwork: the 3 documents that save your trip', 'How to find the neighborhood locals eat in', 'Travel insurance: what is covered and what never is'],
      engage: ['Guess the city from one photo', 'This or that: mountains or coast?', 'Ask anything about long-term travel budgeting', 'Poll: window or aisle (defend yourself)', 'Comment the trip you would redo exactly the same', 'Rate my packing cube system', 'Two truths and a lie: missed flights edition', 'Caption this airport sunrise'],
      promo: ['Guide launch: my 14-day itinerary, discounted', 'Group trip: dates, price, what is included', 'Free download: the points starter checklist', 'Hotel partner rate: how to claim it', 'Photo preset pack: the travel set, on sale'],
      fun: ['Airport fails: the sprint to gate B47', 'What your carry-on says about you', 'POV: the hotel check-in at 1am', 'Tourist characters, ranked']
    }
  };
  var PILLAR_LABEL = { edu: 'Educational', engage: 'Engaging', promo: 'Promotional', fun: 'Entertaining' };
  var PLAN = null;

  function pad(x) { return (x < 10 ? '0' : '') + x; }
  function dist(n) { var out = [0, 0, 0, 0, 0, 0, 0]; for (var k = 0; k < n; k++) out[k % 7]++; return out; }
  function pillarCounts(N) {
    var mix = [['edu', 40], ['engage', 30], ['promo', 20], ['fun', 10]];
    var raw = mix.map(function (m) { return { k: m[0], exact: N * m[1] / 100, floor: Math.floor(N * m[1] / 100) }; });
    var rem = N - raw.reduce(function (a, r) { return a + r.floor; }, 0);
    raw.slice().sort(function (a, b) { return (b.exact - b.floor) - (a.exact - a.floor); }).slice(0, rem).forEach(function (r) { r.floor++; });
    return raw;
  }

  function gen() {
    var niche = root.querySelector('.ta-niche').value;
    var ppw = Math.max(1, Math.min(21, parseInt(root.querySelector('.ta-ppw').value, 10) || 5));
    var plats = Array.prototype.slice.call(root.querySelectorAll('.ta-plat:checked'));
    if (!plats.length) { root.querySelector('.ta-embed-stats').textContent = 'Tick at least one platform.'; return; }
    var per = dist(ppw), rows = [], pi = 0, start = new Date();
    var dow = (start.getDay() + 6) % 7;
    if (dow !== 0) start.setDate(start.getDate() + (7 - dow)); // coming Monday
    for (var i = 0; i < 30; i++) {
      var d = new Date(start.getTime() + i * 86400000);
      var w = (d.getDay() + 6) % 7;
      if (!per[w]) continue;
      var plat = plats[pi % plats.length]; pi++;
      rows.push({ date: d, plat: plat.value, time: plat.getAttribute('data-time') });
    }
    // interleave pillars without streaks
    var counts = pillarCounts(rows.length), guards = {};
    counts.forEach(function (c) { guards[c.k] = c.floor; });
    var order = ['edu', 'engage', 'edu', 'promo', 'edu', 'engage', 'edu', 'fun'], seq = [], t = 0;
    while (seq.length < rows.length && t < rows.length * 8) { var k = order[t % order.length]; if (guards[k] > 0) { seq.push(k); guards[k]--; } t++; }
    Object.keys(guards).forEach(function (k) { while (guards[k] > 0) { seq.push(k); guards[k]--; } });
    var bank = BANKS[niche], idx = { edu: 0, engage: 0, promo: 0, fun: 0 };
    rows.forEach(function (r, j) {
      var kk = seq[j], b = bank[kk];
      r.pillar = kk;
      r.idea = b[idx[kk] % b.length] + (idx[kk] >= b.length ? ' (fresh angle)' : '');
      idx[kk]++;
    });
    PLAN = rows;
    var txt = '# 30-day social media calendar (' + niche + ', ' + ppw + '/week)\n\n';
    var c2 = { edu: 0, engage: 0, promo: 0, fun: 0 };
    rows.forEach(function (r) {
      c2[r.pillar]++;
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][r.date.getDay()];
      txt += (r.date.getMonth() + 1) + '/' + r.date.getDate() + ' (' + days + ') ' + r.time + ' — ' + r.plat + ' [' + PILLAR_LABEL[r.pillar] + ']: ' + r.idea + '\n';
    });
    root.querySelector('.ta-embed-out').textContent = txt;
    root.querySelector('.ta-embed-stats').textContent = rows.length + ' posts — ' + c2.edu + ' educational / ' + c2.engage + ' engaging / ' + c2.promo + ' promotional / ' + c2.fun + ' entertaining';
  }

  root.querySelector('.ta-gen').addEventListener('click', gen);
  root.addEventListener('change', gen);
  root.addEventListener('input', gen);
  root.querySelector('.ta-copy').addEventListener('click', function () {
    if (PLAN && navigator.clipboard) navigator.clipboard.writeText(root.querySelector('.ta-embed-out').textContent);
    var b = this, orig = b.textContent;
    b.textContent = '✓ Copied';
    setTimeout(function () { b.textContent = orig; }, 1500);
  });

  gen();

  window.ToolAspectEmbeds = window.ToolAspectEmbeds || {};
  window.ToolAspectEmbeds.socialMediaCalendar = { recalc: gen };
})();
