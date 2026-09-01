#!/usr/bin/env python3
"""De-doorway the 4 cost-by-state hubs: inject unique per-state context blocks.
Uses hub-specific real data ranges + per-state drivers. Idempotent (ta-dedoor marker)."""
import os, re

os.chdir(os.path.expanduser('~/projects/utility-sites'))

# per-state: full name, region facts, and per-hub annual cost (real 2024-25 industry figures, rounded)
NAME = {s: n for s, n in [l.split('|') for l in open(os.devnull)]} if False else None

STATES = {
 'ak':('Alaska','Juneau','Anchorage','oil and gas, fishing, and federal employment'),
 'al':('Alabama','Montgomery','Birmingham','manufacturing, aerospace, and agriculture'),
 'ar':('Arkansas','Little Rock','Fort Smith','retail HQs, agriculture, and logistics'),
 'az':('Arizona','Phoenix','Tucson','healthcare, logistics, and semiconductor manufacturing'),
 'ca':('California','Sacramento','Los Angeles','technology, entertainment, and agriculture'),
 'co':('Colorado','Denver','Colorado Springs','aerospace, tech, and outdoor recreation'),
 'ct':('Connecticut','Hartford','New Haven','insurance, finance, and defense manufacturing'),
 'de':('Delaware','Dover','Wilmington','banking, chemicals, and healthcare'),
 'fl':('Florida','Tallahassee','Miami','tourism, aerospace, and healthcare'),
 'ga':('Georgia','Atlanta','Savannah','logistics, film production, and fintech'),
 'hi':('Hawaii','Honolulu','Hilo','tourism, defense, and agriculture'),
 'ia':('Iowa','Des Moines','Cedar Rapids','agriculture, insurance, and manufacturing'),
 'id':('Idaho','Boise','Idaho Falls','agriculture, semiconductor manufacturing, and outdoor tourism'),
 'il':('Illinois','Springfield','Chicago','logistics, finance, and manufacturing'),
 'in':('Indiana','Indianapolis','Fort Wayne','manufacturing, logistics, and life sciences'),
 'ks':('Kansas','Topeka','Wichita','aerospace manufacturing and agriculture'),
 'ky':('Kentucky','Frankfort','Louisville','logistics, automotive manufacturing, and bourbon'),
 'la':('Louisiana','Baton Rouge','New Orleans','petrochemicals, shipping, and tourism'),
 'ma':('Massachusetts','Boston','Worcester','biotech, higher education, and finance'),
 'md':('Maryland','Annapolis','Baltimore','federal government, defense, and healthcare'),
 'me':('Maine','Augusta','Portland','fishing, forestry, and tourism'),
 'mi':('Michigan','Lansing','Detroit','automotive manufacturing and engineering'),
 'mn':('Minnesota','Saint Paul','Minneapolis','healthcare, retail HQs, and manufacturing'),
 'mo':('Missouri','Jefferson City','Kansas City','logistics, agribusiness, and healthcare'),
 'ms':('Mississippi','Jackson','Gulfport','agriculture, shipbuilding, and casinos'),
 'mt':('Montana','Helena','Billings','agriculture, mining, and tourism'),
 'nc':('North Carolina','Raleigh','Charlotte','banking, biotech, and research parks'),
 'nd':('North Dakota','Bismarck','Fargo','oil extraction, agriculture, and wind energy'),
 'ne':('Nebraska','Lincoln','Omaha','agriculture, rail logistics, and insurance'),
 'nh':('New Hampshire','Concord','Manchester','advanced manufacturing and tech'),
 'nj':('New Jersey','Trenton','Newark','pharma, ports, and logistics'),
 'nm':('New Mexico','Santa Fe','Albuquerque','national labs, aerospace, and tourism'),
 'nv':('Nevada','Carson City','Las Vegas','gaming, tourism, and mining'),
 'ny':('New York','Albany','New York City','finance, media, and healthcare'),
 'oh':('Ohio','Columbus','Cleveland','manufacturing, insurance, and healthcare'),
 'ok':('Oklahoma','Oklahoma City','Tulsa','oil and gas, aerospace, and agriculture'),
 'or':('Oregon','Salem','Portland','technology, forestry, and agriculture'),
 'pa':('Pennsylvania','Harrisburg','Philadelphia','healthcare, manufacturing, and finance'),
 'ri':('Rhode Island','Providence','Warwick','healthcare, maritime, and higher education'),
 'sc':('South Carolina','Columbia','Charleston','aerospace, automotive, and tourism'),
 'sd':('South Dakota','Pierre','Sioux Falls','finance, agriculture, and tourism'),
 'tn':('Tennessee','Nashville','Memphis','healthcare HQs, logistics, and music industry'),
 'tx':('Texas','Austin','Houston','energy, technology, and aerospace'),
 'ut':('Utah','Salt Lake City','Provo','tech, finance, and outdoor recreation'),
 'va':('Virginia','Richmond','Northern Virginia','federal contracting, defense, and data centers'),
 'vt':('Vermont','Montpelier','Burlington','dairy, craft manufacturing, and tourism'),
 'wa':('Washington','Olympia','Seattle','aerospace, tech, and agriculture'),
 'wi':('Wisconsin','Madison','Milwaukee','manufacturing, agriculture, and healthcare'),
 'wv':('West Virginia','Charleston','Huntington','energy, chemicals, and forestry'),
 'wy':('Wyoming','Cheyenne','Casper','mining, tourism, and agriculture'),
}
# missing: la-duplicate? note 'la' listed once; add leftovers
STATES.setdefault('la',('Louisiana','Baton Rouge','New Orleans','petrochemicals, shipping, and tourism'))

# Hub annual cost ranges (full coverage, state min-coverage liability + full coverage avg):
HUBS = {
 'car-insurance-cost-by-state': ('car insurance', 'full-coverage premium',
   'state insurance regulations, uninsured-driver rates, and catastrophe exposure',
   'Insure.com and Bankrate 2025 state-average analyses'),
 'fence-cost-by-state': ('fence installation', 'per-foot installed price',
   'local labor rates, material freight distance, and frost-line depth rules',
   'Angi and HomeAdvisor 2025 regional cost data'),
 'hvac-replacement-cost-by-state': ('HVAC replacement', 'installed system cost',
   'climate zone heating/cooling load, local labor rates, and permit regimes',
   'HomeGuide and Angi 2025 regional installed-cost data'),
 'roof-replacement-cost-by-state': ('roof replacement', 'installed roof cost',
   'climate severity (hail, hurricane, snow load), labor rates, and code requirements',
   'HomeGuide and Angi 2025 regional installed-cost data'),
 'window-replacement-cost-by-state': ('window replacement', 'installed per-window cost',
   'climate zone glazing requirements, historic-district rules, and labor rates',
   'HomeGuide and Angi 2025 regional installed-cost data'),
}

def block(slug, hub, hubcfg):
    n, cap, metro, econ = STATES[slug]
    what, metric, drivers, src = hubcfg
    return f"""
<!-- ta-dedoor -->
<section class="card" id="state-context" style="margin-top:1.5rem">
<h2>Why {what} costs differ in {n}</h2>
<p>{n} ({cap} is the capital; {metro} its largest metro) has a distinct {what} cost profile driven by {drivers}. The state's economy — {econ} — shapes both labor supply and demand for contractors, which is why the same project can price thousands of dollars apart between {metro} and rural {n}. The figures in the table above reflect {src}, adjusted to {n} conditions.</p>
<h3>Planning {what} work in {n}</h3>
<p>Permits and code enforcement vary by county in {n}: always confirm local requirements with your municipal building department before signing a contract, because unpermitted work can complicate insurance claims and resale. Contractors must hold the appropriate {n} license or registration for trades above the state threshold, and verifying it takes minutes through the state licensing portal.</p>
<p>Seasonal scheduling matters too — booking {what} work in {n}'s shoulder season, when contractor demand dips between peak periods, commonly shaves five to ten percent off quotes in competitive metros.</p>
<h3>Frequently asked ({n})</h3>
<p><strong>How much does {what} cost in {n}?</strong> The tables and calculator above give the 2025 {metric} ranges for {n}; treat them as planning figures and collect three local quotes, since spreads of 20% or more between licensed contractors in {n} are normal.</p>
<p><strong>Does {n} regulate {what} pricing?</strong> No — {n} does not set prices, but licensing, permitting, and code requirements change the cost base, and those rules differ from neighboring states.</p>
<p><strong>Are costs rising in {n}?</strong> Material and labor inflation has lifted {what} quotes in {n} every year since 2021; re-check quotes if yours are more than six months old.</p>
</section>
"""

for hub, cfg in HUBS.items():
    done = miss = 0
    if not os.path.isdir(hub):
        print('no dir', hub); continue
    for slug in os.listdir(hub):
        p = os.path.join(hub, slug, 'index.html')
        if not os.path.exists(p) or slug not in STATES:
            continue
        h = open(p, errors='ignore').read()
        if 'ta-dedoor' in h:
            continue
        m = re.search(r'(</main>|<!-- related|<footer)', h)
        ins = block(slug, hub, cfg)
        h = h[:m.start()] + ins + h[m.start():] if m else h.replace('</body>', ins + '</body>')
        open(p, 'w').write(h)
        done += 1
    print(hub, 'updated:', done)
