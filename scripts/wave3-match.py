#!/usr/bin/env python3
"""Wave-3: match tool dirs to guide dirs by slug similarity; write ranked list."""
import os, difflib, json

guides = [g for g in os.listdir('guides')]
skip = {'guides','shared','node_modules','scripts','docs','roadmap','packages',
        '_bmad-output','stock-media','embed','.git','convert','time-zones','salary-by-state',
        'gift-ideas','pet-names','countdown-to','car-insurance-cost-by-state',
        'roof-replacement-cost-by-state','window-replacement-cost-by-state',
        'fence-cost-by-state','hvac-replacement-cost-by-state','conversion-tables','youtube'}
tools = [d for d in os.listdir('.')
         if os.path.isdir(d) and os.path.isfile(d+'/index.html') and d not in skip]

pairs = []
for t in tools:
    m = difflib.get_close_matches(t, guides, n=1, cutoff=0.55)
    if m:
        pairs.append({'tool': t, 'guide': m[0],
                      'score': difflib.SequenceMatcher(None, t, m[0]).ratio()})
pairs.sort(key=lambda p: -p['score'])
json.dump(pairs, open('/tmp/wave3-pairs.json','w'), indent=0)
print(len(pairs))
for p in pairs[:10]:
    print(p['tool'], '->', p['guide'])
