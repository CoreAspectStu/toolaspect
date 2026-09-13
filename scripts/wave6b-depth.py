#!/usr/bin/env python3
"""Wave-6b: calc.net-style depth sections for 5 flagship pages (surgical append).
Adds: worked examples, common mistakes, when-to-use h3 blocks. Idempotent via
data-wave6b marker."""
import os, re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECTIONS = {
'bmi-calculator': """
<div class="seo" data-wave6b="depth">
<h2>BMI Reference: Examples and Mistakes</h2>
<h3>Worked examples</h3>
<p>A person 175 cm tall weighing 70 kg has a BMI of 70 &divide; (1.75 &times; 1.75) = <strong>22.9</strong> — normal weight. The same person at 90 kg has 90 &divide; 3.0625 = <strong>29.4</strong> — overweight, about 2.4 points from the obese threshold. In imperial units, a 5'9" (69 in, 110 lb-normal-range) person at 160 lb computes as 703 &times; 160 &divide; (69 &times; 69) = <strong>23.6</strong>.</p>
<h3>When to use BMI — and when not to</h3>
<p>BMI is a population-level screening tool, not a diagnosis. It is useful for tracking broad health trends and rough risk bands. It overestimates fatness in muscular people (athletes routinely score "overweight" at low body fat), underestimates it in older adults who have lost muscle, and says nothing about fat distribution — waist circumference adds that signal. Children use age-and-sex percentile charts (BMI-for-age), not the adult bands.</p>
<h3>Common mistakes</h3>
<p>1) Entering height in centimeters while the calculator is in imperial mode (or vice versa) — check the unit tab first. 2) Using total body weight during pregnancy and reading the bands as meaningful — pregnancy weight gain is expected and tracked differently. 3) Rounding height down ("I'm about 5'9"" when you're 5'7"") — a 2-inch error moves BMI by nearly a full point at the same weight. 4) Comparing your BMI to a friend's without accounting for frame and muscle mass differences.</p>
</div>
""",
'mortgage-calculator': """
<div class="seo" data-wave6b="depth">
<h2>Mortgage Math: Examples and Mistakes</h2>
<h3>Worked example</h3>
<p>A $400,000 home with 20% down ($80,000) leaves a $320,000 loan. At 6.5% over 30 years, the monthly principal-and-interest payment is 320,000 &times; [0.005417 &times; 1.005417<sup>360</sup>] &divide; [1.005417<sup>360</sup> &minus; 1] &asymp; <strong>$2,023</strong>. Adding $200/month of extra principal cuts roughly 7 years off the term and saves over $100,000 of interest — model it with the extra-payments field above.</p>
<h3>When to use this calculator</h3>
<p>Use it to compare loan scenarios before you talk to lenders: different rates, terms, down payments, and extra-payment plans. It computes principal and interest only — your real monthly payment also includes property tax, homeowners insurance, and (below 20% down) PMI, which lenders bundle into an APR-based estimate.</p>
<h3>Common mistakes</h3>
<p>1) Entering the home price instead of the loan amount — the calculator subtracts the down payment for you, so enter the price. 2) Comparing loans on rate alone: a 6.5% 30-year and a 6.0% 15-year produce wildly different total costs — always compare total interest, not just the monthly figure. 3) Forgetting closing costs (2&ndash;5% of the loan) when budgeting the cash you need at signing. 4) Assuming the payment stays flat in an ARM — this calculator models fixed rates.</p>
</div>
""",
'tip-calculator': """
<div class="seo" data-wave6b="depth">
<h2>Tip Math: Examples and Mistakes</h2>
<h3>Worked examples</h3>
<p>A $84.50 bill at 18% with 3 people splitting: tip = 84.50 &times; 0.18 = <strong>$15.21</strong>, total = $99.71, per person = <strong>$33.24</strong>. Rounding up to a $100 total makes each share $33.33 — the round-up option above does this in one click. For a bar tab of $42 with great service, 20% is $8.40, and the classic "move the decimal and double it" shortcut gives the same answer: 10% = $4.20, doubled = $8.40.</p>
<h3>When to use it</h3>
<p>Restaurants, bars, taxis and rideshares, food delivery, hairdressers and barbers, hotel housekeeping (per-night), and tour guides. US sit-down restaurants expect 15&ndash;20%; many other countries expect nothing or a small service-included rounding — adjust the percentage to local norms.</p>
<h3>Common mistakes</h3>
<p>1) Tipping on the post-tax total when you intended pre-tax — decide which base you want and enter just that amount if needed. 2) Splitting the tip evenly when one person's dish was far larger — split the bill by actual orders and tip on the whole. 3) Forgetting that "split between" divides the <em>total</em> (bill + tip), not just the bill — that's what makes each share fair. 4) Mental-math double-tipping after the receipt already included a service charge — check the bill for "gratuity included" first.</p>
</div>
""",
}

for slug, sec in SECTIONS.items():
    f = os.path.join(ROOT, slug, 'index.html')
    h = open(f, encoding='utf-8').read()
    if 'data-wave6b' in h:
        print(slug, 'already patched')
        continue
    # insert before the FAQ section if present, else before </div> closing wrap
    for anchor in ['<h2>Frequently Asked Questions', '<div class="related-tools"', '</body>']:
        if anchor in h:
            h = h.replace(anchor, sec + '\n' + anchor, 1)
            break
    open(f, 'w', encoding='utf-8').write(h)
    print(slug, 'patched')
