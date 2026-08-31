#!/usr/bin/env python3
"""Wave: quotable definition boxes under H1 on top tool pages (idempotent)."""
import os, re

os.chdir(os.path.expanduser('~/projects/utility-sites'))

DEFS = {
 '401k-match-calculator': "A 401(k) match calculator tells you exactly how much free employer money you earn by contributing to your retirement plan, based on your salary and your employer's matching formula.",
 'mortgage-calculator': "A mortgage calculator estimates your monthly home-loan payment by combining the loan amount, interest rate, and term, and shows how much of each payment goes to principal versus interest.",
 'loan-calculator': "A loan calculator works out the monthly payment and total interest cost of any amortizing loan — personal, auto, or student — from the amount borrowed, rate, and repayment term.",
 'tip-calculator': "A tip calculator splits the bill and gratuity across any number of people, computing per-person totals and tip percentages instantly.",
 'compound-interest-calculator': "A compound interest calculator shows how an investment grows when interest earns interest, projecting future value from principal, rate, time, and contribution schedule.",
 'bmi-calculator': "A BMI calculator computes your body mass index — weight in kilograms divided by height in metres squared — and places it in the WHO underweight, normal, overweight, or obese ranges.",
 'calorie-calculator': "A calorie calculator estimates how many calories you burn per day (your TDEE) from your age, sex, height, weight, and activity level, forming the basis for weight-loss or muscle-gain targets.",
 'percentage-calculator': "A percentage calculator answers the three core percent questions — what is X% of Y, X is what percent of Y, and percent change from X to Y — without mental math.",
 'age-calculator': "An age calculator converts your date of birth into exact years, months, and days elapsed, optionally counting down to your next birthday.",
 'salary-calculator': "A salary calculator converts between hourly, weekly, monthly, and annual pay, accounting for hours per week and weeks per year, so job offers can be compared on the same basis.",
 'retirement-calculator': "A retirement calculator projects whether your current savings rate and expected returns will fund your target retirement income, and what age your money will run out or last until.",
 'savings-calculator': "A savings calculator projects the future balance of regular deposits, showing how principal plus interest compounds over months or years toward a savings goal.",
 'discount-calculator': "A discount calculator applies percentage markdowns to a price, returning the sale price and the amount saved — including stacked discounts.",
 'sales-tax-calculator': "A sales tax calculator adds or removes tax from a price, working both pre-tax to post-tax and reverse-extracting the tax portion from a total.",
 'gst-calculator': "A GST calculator adds or extracts Goods and Services Tax (10% in Australia) from any amount, in both tax-inclusive and tax-exclusive directions.",
 'vat-calculator': "A VAT calculator adds or removes Value Added Tax at any national rate, converting between net and gross prices.",
 'income-tax-calculator': "An income tax calculator estimates the tax payable on your income using bracket rates, showing marginal and effective rates and take-home pay.",
 'water-intake-calculator': "A water intake calculator estimates your daily hydration needs in litres from body weight, activity level, and climate.",
 'bmr-calculator': "A BMR calculator estimates your basal metabolic rate — the calories your body burns at complete rest — using the Mifflin-St Jeor or Harris-Benedict equations.",
 'macro-calculator': "A macro calculator splits your daily calorie target into protein, carbohydrate, and fat grams in a ratio matched to your goal — cutting, maintaining, or building muscle.",
 'hourly-to-salary-calculator': "An hourly-to-salary calculator converts an hourly wage into equivalent weekly, monthly, and annual income based on your working hours.",
 'car-payment-calculator': "A car payment calculator computes monthly auto-loan repayments from vehicle price, deposit, trade-in, interest rate, and loan term.",
 'rent-vs-buy-calculator': "A rent vs buy calculator compares the long-term cost of renting against buying a home, factoring price growth, mortgage interest, maintenance, and opportunity cost of a deposit.",
 'markup-calculator': "A markup calculator converts between cost and selling price using markup and margin percentages, keeping gross-margin math consistent.",
 'percentage-increase-calculator': "A percentage increase calculator measures relative growth between two values — the percent change formula (new minus old, over old, times 100).",
}

added = skipped = 0
for slug, d in DEFS.items():
    fp = f'{slug}/index.html'
    if not os.path.exists(fp): continue
    h = open(fp, errors='ignore').read()
    if 'class="ta-definition"' in h: skipped += 1; continue
    newh, n = re.subn(r'(<h1[^>]*>.*?</h1>)', r'\1<p class="ta-definition" style="font-size:1rem;color:#334155;margin:8px 0 14px">' + d + '</p>', h, count=1, flags=re.S)
    if n:
        open(fp, 'w').write(newh)
        added += 1
print(f'definition boxes: {added} added, {skipped} already present')
