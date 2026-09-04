#!/usr/bin/env node
/* Verification harness for the 2026-09-04 four-tool batch.
 * Runs the SHIPPED inline scripts and embed JS through DOM stubs and
 * asserts every published number. node scripts/verify-batch-0904.js
 */
'use strict';
const fs = require('fs');
const vm = require('vm');

let pass = 0, fail = 0;
function ok(cond, label) {
  if (cond) { pass++; console.log('  PASS ' + label); }
  else { fail++; console.log('  FAIL ' + label); }
}

/* ---------- tiny element stub ---------- */
function el(initial) {
  const e = {
    value: '', checked: false, textContent: '', innerHTML: '',
    className: '', style: { display: '' }, attrs: {},
    classList: {
      add() {}, remove() {}, contains() { return false; }
    },
    addEventListener() {}, appendChild() {}, setAttribute(k, v) { e.attrs[k] = v; },
    getAttribute(k) { return e.attrs[k] !== undefined ? e.attrs[k] : null; },
    offsetWidth: 0
  };
  return Object.assign(e, initial || {});
}

/* ---------- 1. TOOL PAGES: run the last inline <script> ---------- */
function runToolPage(slug, seed, extraStubs) {
  const html = fs.readFileSync(slug + '/index.html', 'utf8');
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  const inline = scripts[scripts.length - 1]; // the calculator script is the last bare <script>
  const ids = [...new Set([...inline.matchAll(/getElementById\('([^']+)'\)/g)].map(m => m[1]))];
  const byId = {};
  ids.forEach(id => { byId[id] = el(seed[id] || {}); });
  const ctx = {
    document: {
      getElementById: id => byId[id] || el(),
      createElement: () => el(),
      querySelector: () => null,
      currentScript: null
    },
    window: {}, console, Math, parseFloat, parseInt, isNaN
  };
  vm.createContext(ctx);
  vm.runInContext(inline + '\n;', ctx, { timeout: 5000 });
  if (extraStubs) extraStubs(ctx);
  return byId;
}

console.log('\n== lift-kit-cost-calculator ==');
{
  // default: half-ton, 4in, mid, $110/hr, alignment 125, no add-ons
  let r = runToolPage('lift-kit-cost-calculator', {
    liftType: { value: 'susp4' }, truck: { value: 'halfton' }, tier: { value: 'mid' },
    laborRate: { value: '110' }, install: { value: 'shop' }, alignCost: { value: '125' },
    addTires: { checked: false }, addWheels: { checked: false }, addSpeedo: { checked: false }
  });
  ok(r.partsVal.textContent === '$1,350', 'parts $1,350 (got ' + r.partsVal.textContent + ')');
  ok(r.laborVal.textContent === '$1,320', 'labor $1,320 (12h × $110)');
  ok(r.installVal.textContent === '$2,670', 'installed $2,670 — inside guide band $1,500-$3,500');
  ok(r.totalVal.textContent === '$2,795', 'total with alignment $2,795');
  ok(r.heroVal.textContent === '$2,795', 'hero shows $2,795');

  // worked example with tires: +$1,200 → $3,995
  r = runToolPage('lift-kit-cost-calculator', {
    liftType: { value: 'susp4' }, truck: { value: 'halfton' }, tier: { value: 'mid' },
    laborRate: { value: '110' }, install: { value: 'shop' }, alignCost: { value: '125' },
    addTires: { checked: true }, addWheels: { checked: false }, addSpeedo: { checked: false }
  });
  ok(r.totalVal.textContent === '$3,995', 'total with 35s $3,995');

  // jeep leveling budget @ $85/hr: 90 + 3×85 = $345 (guide band 250-600)
  r = runToolPage('lift-kit-cost-calculator', {
    liftType: { value: 'leveling' }, truck: { value: 'jeep' }, tier: { value: 'budget' },
    laborRate: { value: '85' }, install: { value: 'shop' }, alignCost: { value: '0' },
    addTires: { checked: false }, addWheels: { checked: false }, addSpeedo: { checked: false }
  });
  ok(r.totalVal.textContent === '$345', 'jeep leveling budget $345 — inside guide band $250-$600');

  // DIY 6in HD premium: parts only
  r = runToolPage('lift-kit-cost-calculator', {
    liftType: { value: 'susp6' }, truck: { value: 'hd' }, tier: { value: 'premium' },
    laborRate: { value: '110' }, install: { value: 'diy' }, alignCost: { value: '125' },
    addTires: { checked: false }, addWheels: { checked: false }, addSpeedo: { checked: false }
  });
  ok(r.totalVal.textContent === '$6,425', 'HD 6in premium DIY $6,425 (6300+125)');
  ok(r.laborVal.textContent === 'DIY — $0', 'DIY zeroes labor');

  // all 15 combos at mid/$110 sit inside guide-published bands
  const BANDS = {
    'leveling|jeep': [250, 600], 'leveling|halfton': [300, 900], 'leveling|hd': [400, 900],
    'body|jeep': [400, 1100], 'body|halfton': [400, 1100], 'body|hd': [400, 1100],
    'susp4|jeep': [1000, 3000], 'susp4|halfton': [1500, 3500], 'susp4|hd': [2000, 5000],
    'susp6|jeep': [3000, 7000], 'susp6|halfton': [3000, 7000], 'susp6|hd': [3000, 7000]
  };
  const TYPES = { leveling: 'leveling', body: 'body', susp2: 'susp2', susp4: 'susp4', susp6: 'susp6' };
  let allBands = true;
  for (const t of Object.values(TYPES)) for (const k of ['jeep', 'halfton', 'hd']) {
    const rr = runToolPage('lift-kit-cost-calculator', {
      liftType: { value: t }, truck: { value: k }, tier: { value: 'mid' },
      laborRate: { value: '110' }, install: { value: 'shop' }, alignCost: { value: '0' },
      addTires: { checked: false }, addWheels: { checked: false }, addSpeedo: { checked: false }
    });
    const v = parseInt(rr.installVal.textContent.replace(/[$,]/g, ''), 10);
    const band = BANDS[t + '|' + k];
    if (band && (v < band[0] || v > band[1])) { allBands = false; console.log('    out of band: ' + t + '/' + k + ' = ' + v + ' vs ' + band); }
  }
  ok(allBands, 'every mid-tier installed estimate lands inside guide bands (12 anchored combos)');
}

console.log('\n== llc-vs-scorp-calculator ==');
{
  let r = runToolPage('llc-vs-scorp-calculator', {
    profit: { value: '120000' }, salary: { value: '60000' }, sCosts: { value: '1200' }
  });
  ok(r.seVal.textContent === '$16,955', 'SE tax $16,955 (guide: 16,955)');
  ok(r.ficaVal.textContent === '$9,180', 'S corp payroll tax $9,180');
  ok(r.grossVal.textContent === '$7,775', 'gross saving $7,775');
  ok(r.heroVal.textContent.includes('6,575'), 'net saving +$6,575 after $1,200 costs');
  ok(r.verdictBox.textContent.includes('wins clearly'), 'verdict: wins clearly');

  // guide table rows reproduce
  for (const [p, s, se, fp] of [[60000, 35000, '$8,478', '$5,355'], [80000, 45000, '$11,304', '$6,885'], [200000, 90000, '$28,234', '$13,770']]) {
    r = runToolPage('llc-vs-scorp-calculator', { profit: { value: String(p) }, salary: { value: String(s) }, sCosts: { value: '1200' } });
    ok(r.seVal.textContent === se, 'SE ' + se + ' @ profit ' + p);
    ok(r.ficaVal.textContent === fp, 'FICA ' + fp + ' @ salary ' + s);
  }

  // salary >= profit branch
  r = runToolPage('llc-vs-scorp-calculator', { profit: { value: '50000' }, salary: { value: '50000' }, sCosts: { value: '1200' } });
  ok(r.heroVal.textContent === '—', 'salary = profit → no saving branch');

  // low-salary warning
  r = runToolPage('llc-vs-scorp-calculator', { profit: { value: '150000' }, salary: { value: '40000' }, sCosts: { value: '1200' } });
  ok(r.warnBox.textContent.toLowerCase().includes('reasonable-comp'), 'fires reasonable-comp flag at 27% salary ratio');
  // 200k/90k = 45% → no flag
  r = runToolPage('llc-vs-scorp-calculator', { profit: { value: '200000' }, salary: { value: '90000' }, sCosts: { value: '1200' } });
  ok(r.warnBox.textContent === '', 'no flag at 45% salary ratio');
}

console.log('\n== marriage-green-card-cost-calculator ==');
{
  let r = runToolPage('marriage-green-card-cost-calculator', {
    route: { value: 'aos' }, filing: { value: 'paper' }, atty: { value: 'none' },
    add765: { checked: true }, add131: { checked: true }, addMed: { checked: true }, addMisc: { checked: true }
  });
  ok(r.govVal.textContent === '$3,005', 'AOS paper full package $3,005 (guide headline)');
  ok(r.heroVal.textContent === '$3,330', 'DIY AOS all-in $3,330 — inside guide band $3,200-$3,600');

  r = runToolPage('marriage-green-card-cost-calculator', {
    route: { value: 'aos' }, filing: { value: 'online' }, atty: { value: 'none' },
    add765: { checked: true }, add131: { checked: true }, addMed: { checked: true }, addMisc: { checked: true }
  });
  ok(r.govVal.textContent === '$2,955', 'AOS online full package $2,955 (−$50)');

  r = runToolPage('marriage-green-card-cost-calculator', {
    route: { value: 'aos' }, filing: { value: 'paper' }, atty: { value: 'none' },
    add765: { checked: false }, add131: { checked: false }, addMed: { checked: false }, addMisc: { checked: false }
  });
  ok(r.govVal.textContent === '$2,115', 'AOS paper petition+GC only $2,115');

  r = runToolPage('marriage-green-card-cost-calculator', {
    route: { value: 'aos' }, filing: { value: 'online' }, atty: { value: 'none' },
    add765: { checked: false }, add131: { checked: false }, addMed: { checked: false }, addMisc: { checked: false }
  });
  ok(r.govVal.textContent === '$2,065', 'AOS online petition+GC only $2,065');

  r = runToolPage('marriage-green-card-cost-calculator', {
    route: { value: 'consular' }, filing: { value: 'paper' }, atty: { value: 'none' },
    add765: { checked: true }, add131: { checked: true }, addMed: { checked: true }, addMisc: { checked: true }
  });
  ok(r.govVal.textContent === '$1,235', 'consular $1,235 (guide: ~$1,235)');
  ok(r.heroVal.textContent === '$1,560', 'DIY consular all-in $1,560 — inside guide band $1,400-$1,800');

  r = runToolPage('marriage-green-card-cost-calculator', {
    route: { value: 'aos' }, filing: { value: 'paper' }, atty: { value: 'flat' },
    add765: { checked: true }, add131: { checked: true }, addMed: { checked: true }, addMisc: { checked: true }
  });
  ok(r.attyVal.textContent === '$3,500', 'attorney mid-band $3,500');
  ok(r.heroVal.textContent === '$6,830', 'attorney AOS all-in $6,830 — inside guide band $5,200-$8,600');

  r = runToolPage('marriage-green-card-cost-calculator', {
    route: { value: 'k1' }, filing: { value: 'paper' }, atty: { value: 'none' },
    add765: { checked: true }, add131: { checked: true }, addMed: { checked: true }, addMisc: { checked: true }
  });
  ok(r.govVal.textContent === '$3,505', 'K-1 paper government $3,505 (675+265+1440+260+630+235)');
  ok(r.heroVal.textContent === '$3,830', 'K-1 DIY all-in $3,830');
}

console.log('\n== marriage-name-change-cost-calculator ==');
{
  // worked example: FL stack — 3×15 copies, DL 25, DS-82 130, photo 15, title 15
  let r = runToolPage('marriage-name-change-cost-calculator', {
    state: { value: 'FL' }, copies: { value: '3' }, copyFee: { value: '15' },
    dlFee: { value: '25' }, passport: { value: 'renew' }, titleFee: { value: '15' },
    addPhoto: { checked: true }, addVehicle: { checked: true }, addKit: { checked: false }
  });
  ok(r.heroVal.textContent === '$230', 'FL worked example $230 (45+0+25+130+15+15)');
  ok(r.govVal.textContent === '$170', 'gov fees $170 (25+130+15)');
  ok(r.docVal.textContent === '$60', 'copies+photo $60');
  ok(r.kitVal.textContent === '$230 / $305', 'DIY vs +kit compare $230 / $305');

  // CA floor: DL 0, title 0
  r = runToolPage('marriage-name-change-cost-calculator', {
    state: { value: 'CA' }, copies: { value: '3' }, copyFee: { value: '15' },
    dlFee: { value: '0' }, passport: { value: 'renew' }, titleFee: { value: '0' },
    addPhoto: { checked: true }, addVehicle: { checked: true }, addKit: { checked: false }
  });
  ok(r.heroVal.textContent === '$190', 'CA stack $190 (45+130+15)');

  // passport DS-5504 free + no photo when skipping passport
  r = runToolPage('marriage-name-change-cost-calculator', {
    state: { value: 'other' }, copies: { value: '2' }, copyFee: { value: '5' },
    dlFee: { value: '15' }, passport: { value: 'skip' }, titleFee: { value: '15' },
    addPhoto: { checked: true }, addVehicle: { checked: false }, addKit: { checked: false }
  });
  ok(r.heroVal.textContent === '$25', 'skip-passport stack $25 (2×5+15, photo suppressed)');

  // fee lines render the free SS line
  r = runToolPage('marriage-name-change-cost-calculator', {
    state: { value: 'TX' }, copies: { value: '3' }, copyFee: { value: '15' },
    dlFee: { value: '11' }, passport: { value: 'renew' }, titleFee: { value: '15' },
    addPhoto: { checked: true }, addVehicle: { checked: true }, addKit: { checked: false }
  });
  ok(r.feeLines.innerHTML.includes('Social Security card (SS-5)</span><span class="fv">free'), 'SS line renders as free');
  ok(r.feeLines.innerHTML.includes('Total'), 'total row renders');
}

/* ---------- 2. EMBEDS: pre-seeded selector stubs ---------- */
function runEmbed(slug, seed) {
  const src = fs.readFileSync('embed/' + slug + '.js', 'utf8');
  const stubs = {};
  for (const [sel, init] of Object.entries(seed)) stubs[sel] = el(init);
  const target = el({ attrs: { theme: null } });
  const ctx = {
    document: {
      createElement: () => el(),
      getElementById: () => target,
      querySelector: () => null,
      head: el(),
      documentElement: el(),
      currentScript: null
    },
    window: { console: { error() {} } },
    console, Math, parseFloat, parseInt, isNaN
  };
  // root.querySelector('.ta-x') → our stub keyed by selector
  const realCreate = ctx.document.createElement;
  ctx.document.createElement = function (tag) {
    const e = realCreate(tag);
    if (tag === 'div' && e.className === undefined) return e;
    e.querySelector = sel => {
      if (sel.includes(' ') || sel.includes('.')) {
        const key = Object.keys(stubs).find(k => sel.includes(k)) || sel;
        return stubs[key] || el();
      }
      return stubs[sel] || el();
    };
    e.querySelectorAll = () => [];
    return e;
  };
  vm.createContext(ctx);
  vm.runInContext(src, ctx, { timeout: 5000 });
  return stubs;
}

console.log('\n== embeds ==');
{
  // lift kit embed default: same model as page → $2,795 with alignment
  let stubs = {
    '.ta-type': { value: 'susp4' }, '.ta-truck': { value: 'halfton' }, '.ta-tier': { value: 'mid' },
    '.ta-rate': { value: '110' }, '.ta-install': { value: 'shop' }, '.ta-align': { value: '125' },
    '.ta-tires': { checked: false }, '.ta-wheels': { checked: false }, '.ta-speedo': { checked: false },
    '.ta-embed-result': {}
  };
  stubs = runEmbed('lift-kit-cost-calculator', stubs);
  ok(stubs['.ta-embed-result'].innerHTML.includes('$2,795'), 'lift-kit embed renders $2,795 default');
  ok(stubs['.ta-embed-result'].innerHTML.includes('$1,350'), 'lift-kit embed parts $1,350');

  stubs = {
    '.ta-profit': { value: '120000' }, '.ta-salary': { value: '60000' }, '.ta-costs': { value: '1200' },
    '.ta-embed-result': {}
  };
  stubs = runEmbed('llc-vs-scorp-calculator', stubs);
  ok(stubs['.ta-embed-result'].innerHTML.includes('$6,575'), 'llc embed renders +$6,575/yr');
  ok(stubs['.ta-embed-result'].innerHTML.includes('$16,955'), 'llc embed SE $16,955');
  ok(stubs['.ta-embed-result'].innerHTML.includes('$9,180'), 'llc embed payroll $9,180');

  stubs = {
    '.ta-route': { value: 'aos' }, '.ta-filing': { value: 'paper' }, '.ta-atty': { value: 'none' },
    '.ta-765': { checked: true }, '.ta-131': { checked: true }, '.ta-med': { checked: true }, '.ta-misc': { checked: true },
    '.ta-embed-result': {}
  };
  stubs = runEmbed('marriage-green-card-cost-calculator', stubs);
  ok(stubs['.ta-embed-result'].innerHTML.includes('$3,330'), 'green-card embed renders $3,330 DIY AOS');
  ok(stubs['.ta-embed-result'].innerHTML.includes('$3,005'), 'green-card embed gov $3,005');

  stubs = {
    '.ta-state': { value: 'FL' }, '.ta-copies': { value: '3' }, '.ta-copyfee': { value: '15' },
    '.ta-dl': { value: '25' }, '.ta-pass': { value: 'renew' }, '.ta-title': { value: '15' },
    '.ta-photo': { checked: true }, '.ta-vehicle': { checked: true }, '.ta-kit': { checked: false },
    '.ta-embed-result': {}
  };
  stubs = runEmbed('marriage-name-change-cost-calculator', stubs);
  ok(stubs['.ta-embed-result'].innerHTML.includes('$230'), 'name-change embed renders $230 FL stack');
  ok(stubs['.ta-embed-result'].innerHTML.includes('free'), 'name-change embed notes SS is free');
}

/* ---------- 3. cross-file consistency ---------- */
console.log('\n== cross-file consistency ==');
{
  const liftPage = fs.readFileSync('lift-kit-cost-calculator/index.html', 'utf8').replace(/\s+/g, '');
  const liftEmb = fs.readFileSync('embed/lift-kit-cost-calculator.js', 'utf8').replace(/\s+/g, '');
  for (const frag of ['jeep:[90,280]', 'halfton:[100,400]', 'hd:[150,500]', 'susp4:{jeep:[600,1700],halfton:[700,2000],hd:[950,2600]']) {
    ok(liftPage.includes(frag) && liftEmb.includes(frag), 'lift parts matrix synced: ' + frag);
  }
  ok(liftPage.includes('susp4:12,susp6:15') && liftEmb.includes('hrs:12') && liftEmb.includes('hrs:15'), 'lift hours synced (page HOURS map ↔ embed hrs fields)');
  const gcPage = fs.readFileSync('marriage-green-card-cost-calculator/index.html', 'utf8').replace(/\s+/g, '');
  const gcEmb = fs.readFileSync('embed/marriage-green-card-cost-calculator.js', 'utf8').replace(/\s+/g, '');
  for (const fee of ['I485:1440', 'I765:260', 'I131:630', 'DS260:325', 'IMM:235', 'K:265']) {
    ok(gcPage.includes(fee) && gcEmb.includes(fee), 'green-card fee synced: ' + fee);
  }
  const ncPage = fs.readFileSync('marriage-name-change-cost-calculator/index.html', 'utf8').replace(/\s+/g, '');
  const ncEmb = fs.readFileSync('embed/marriage-name-change-cost-calculator.js', 'utf8').replace(/\s+/g, '');
  ok(ncPage.includes('CA:[0,0],IL:[5,15],TX:[11,15],NY:[15,15],FL:[25,15],OH:[25,15],PA:[29.50,0]') &&
     ncEmb.includes('CA:[0,0],IL:[5,15],TX:[11,15],NY:[15,15],FL:[25,15],OH:[25,15],PA:[29.50,0]'),
     'name-change state matrix synced page↔embed');
  const llcPage = fs.readFileSync('llc-vs-scorp-calculator/index.html', 'utf8').replace(/\s+/g, '');
  const llcEmb = fs.readFileSync('embed/llc-vs-scorp-calculator.js', 'utf8').replace(/\s+/g, '');
  ok(llcPage.includes('SS_BASE=184500') && llcEmb.includes('SS_BASE=184500'), '2026 wage base 184,500 synced page↔embed');
}

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
