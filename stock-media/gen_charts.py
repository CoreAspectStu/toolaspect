#!/usr/bin/env python3
"""Generate 20 original finance data-viz images for stock-media attribution play.
Clean minimal style, 2000px wide, no branding."""
import os
import numpy as np
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

os.chdir(os.path.expanduser('~/projects/utility-sites/stock-media'))
os.makedirs('.', exist_ok=True)

plt.rcParams.update({'figure.dpi': 100, 'font.family': 'DejaVu Sans', 'axes.spines.top': False,
                     'axes.spines.right': False, 'axes.grid': True, 'grid.alpha': 0.25,
                     'axes.titlesize': 26, 'axes.titleweight': 'bold', 'axes.titlepad': 20, 'axes.labelsize': 16, 'figure.facecolor': 'white'})
C = ['#2563eb', '#16a34a', '#dc2626', '#f59e0b', '#7c3aed', '#0891b2']

def save(fig, name):
    fig.set_size_inches(20, 11.25)
    fig.savefig(f'{name}.png', dpi=100, bbox_inches='tight', facecolor='white')
    plt.close(fig)
    print('ok', name)

# 1 compound interest curves
fig, ax = plt.subplots()
yrs = np.arange(0, 41)
for r, c in zip([0.03, 0.06, 0.09, 0.12], C[:4]):
    ax.plot(yrs, 10000 * (1 + r) ** yrs, color=c, label=f'{r*100:.0f}% annual return', lw=3)
ax.set(title='Compound Interest: $10,000 Over 40 Years', xlabel='Years', ylabel='Value ($)')
ax.legend(fontsize=15, frameon=False); ax.yaxis.set_major_formatter(lambda x, _: f'${x/1000:.0f}k')
save(fig, 'compound-interest-growth-40-years')

# 2 amortization areas
fig, ax = plt.subplots()
n = 360; r = 0.065/12; P = 350000
pay = P * r / (1 - (1+r)**-n)
bal = [P]; ints = []; prins = []
for _ in range(n):
    i = bal[-1]*r; p = pay - i; ints.append(i); prins.append(p); bal.append(bal[-1]-p)
x = np.arange(n)/12
ax.stackplot(x, np.cumsum(ints), np.cumsum(prins), labels=['Interest paid', 'Principal paid'], colors=[C[2], C[1]], alpha=.85)
ax.set(title='Mortgage Amortization: $350k at 6.5% for 30 Years', xlabel='Years', ylabel='Cumulative ($)')
ax.legend(fontsize=15, frameon=False, loc='upper left'); ax.yaxis.set_major_formatter(lambda x, _: f'${x/1000:.0f}k')
save(fig, 'mortgage-amortization-principal-vs-interest')

# 3 401k match comparison
fig, ax = plt.subplots()
sal = np.arange(20000, 160000, 1000); contrib = np.minimum(sal*0.06, sal*0.06)
dollar = np.minimum(sal*0.06, sal*0.03)
half = np.minimum(sal*0.06, sal*0.03)*1.0
ax.plot(sal, np.minimum(sal*0.06, sal*0.06), color=C[0], lw=3, label='100% match up to 6%')
ax.plot(sal, 0.5*np.minimum(sal*0.06, sal*0.06), color=C[3], lw=3, label='50% match up to 6%')
ax.plot(sal, 0.25*np.minimum(sal*0.06, sal*0.06), color=C[2], lw=3, label='25% match up to 6%')
ax.set(title='Employer 401(k) Match Value by Salary', xlabel='Salary ($)', ylabel='Free employer money ($/yr)')
ax.legend(fontsize=15, frameon=False); ax.yaxis.set_major_formatter(lambda x, _: f'${x/1000:.0f}k')
save(fig, '401k-employer-match-comparison')

# 4 BMI categories
fig, ax = plt.subplots()
cats = ['Underweight\n<18.5', 'Normal\n18.5–24.9', 'Overweight\n25–29.9', 'Obese\n≥30']
ax.bar(cats, [1,1,1,1], color=[C[3], C[1], '#f97316', C[2]], width=.6)
for i, (lo, hi) in enumerate([(0,18.5),(18.5,25),(25,30),(30,40)]):
    ax.text(i, .5, f'{lo}–{hi}', ha='center', fontsize=18, color='white', weight='bold')
ax.set(title='BMI Categories (WHO Classification)', yticks=[])
save(fig, 'bmi-categories-chart')

# 5 loan payoff timelines
fig, ax = plt.subplots()
for rate, c in zip([0.05, 0.08, 0.12, 0.20], C[:4]):
    r = rate/12; P = 20000; pay = max(P*r/(1-(1+r)**-60), P/60+1)
    bal = [P]
    for _ in range(60):
        bal.append(bal[-1]*(1+r)-pay)
        if bal[-1] <= 0: break
    ax.plot(np.arange(len(bal))/12, bal, color=c, lw=3, label=f'{rate*100:.0f}% APR, ${pay:,.0f}/mo')
ax.set(title='$20,000 Loan Payoff: 5-Year Timeline by APR', xlabel='Years', ylabel='Balance ($)')
ax.legend(fontsize=15, frameon=False); ax.yaxis.set_major_formatter(lambda x, _: f'${x/1000:.0f}k')
save(fig, 'loan-payoff-timeline-apr')

# 6 savings rate vs years to FI
fig, ax = plt.subplots()
sr = np.linspace(0.1, 0.7, 20)
wr = 0.04
years = []
for s in sr:
    target = (1-s)/s * (1)  # multiples of expenses
    # solve: (1+s*r_real)^n = target+... simple closed form with 4% real
    n = np.log(((1-s)/s)) / np.log(1.04 + s*0.02)
    years.append(max(0, n))
ax.plot(sr*100, years, color=C[0], lw=3)
ax.invert_yaxis()
ax.set(title='Savings Rate vs Years to Financial Independence', xlabel='Savings rate (%)', ylabel='Years to FI')
save(fig, 'savings-rate-years-financial-independence')

# 7 tax brackets
fig, ax = plt.subplots()
inc = np.linspace(0, 300000, 500)
brackets = [(0,.0),(18200,.19),(45000,.325),(135000,.37),(190000,.45)]
tax = np.zeros_like(inc)
for i, v in enumerate(inc):
    t = 0; prev = 0
    for lo, rate in brackets:
        if v > lo: t += (min(v, brackets[i+1][0] if i+1 < len(brackets) else 1e9) - lo) * rate
    tax[i] = t
eff = np.divide(tax, inc, out=np.zeros_like(tax), where=inc>0)
ax.plot(inc/1000, eff*100, color=C[0], lw=3)
ax.set(title='Effective Tax Rate by Income (AU Brackets, FY24)', xlabel='Taxable income ($k)', ylabel='Effective rate (%)')
save(fig, 'effective-tax-rate-income')

# 8 emergency fund
fig, ax = plt.subplots()
m = np.arange(1, 13)
ax.bar(m-0.2, np.linspace(2500, 30000, 12), width=.4, color=C[0], label='Cumulative saved ($500→$2,500/mo)')
ax.bar(m+0.2, np.full(12, 15000), width=.4, color=C[3], label='3-month target ($15k)')
ax.set(title='Building a 3-Month Emergency Fund', xlabel='Month', ylabel='$')
ax.legend(fontsize=15, frameon=False); ax.yaxis.set_major_formatter(lambda x, _: f'${x/1000:.0f}k')
save(fig, 'emergency-fund-3-month-target')

# 9 inflation erosion
fig, ax = plt.subplots()
yrs = np.arange(0, 31)
for inf, c in zip([0.02, 0.04, 0.07], [C[1], C[3], C[2]]):
    ax.plot(yrs, 100*(1+inf)**-yrs, color=c, lw=3, label=f'{inf*100:.0f}% inflation')
ax.set(title='Purchasing Power of $100 Over 30 Years', xlabel='Years', ylabel='Real value ($)')
ax.legend(fontsize=15, frameon=False)
save(fig, 'inflation-purchasing-power-erosion')

# 10 rent vs buy crossover
fig, ax = plt.subplots()
yrs = np.arange(0, 31)
rent = 2400*12*(1.03**yrs)/1000
buy = np.full_like(yrs, 2100*12/1000)*(1.02**yrs) + 6000/1000
ax.plot(yrs, np.cumsum(rent), color=C[0], lw=3, label='Rent ($2,400/mo, +3%/yr)')
ax.plot(yrs, np.cumsum(buy), color=C[1], lw=3, label='Own ($2,100/mo + upkeep, +2%/yr)')
ax.set(title='Cumulative Cost: Renting vs Owning', xlabel='Years', ylabel='Total cost ($k)')
ax.legend(fontsize=15, frameon=False)
save(fig, 'rent-vs-buy-cumulative-cost')

# 11 credit card minimum payment trap
fig, ax = plt.subplots()
bal = [5000]; r = 0.225/12
for _ in range(120):
    pay = max(50, bal[-1]*0.02)
    bal.append(max(0, bal[-1]*(1+r)-pay))
ax.plot(np.arange(len(bal))/12, bal, color=C[2], lw=3, label='Minimum payments (2% or $50)')
bal2 = [5000]
for _ in range(36):
    bal2.append(max(0, bal2[-1]*(1+r)-250))
ax.plot(np.arange(len(bal2))/12, bal2, color=C[1], lw=3, label='$250/month fixed')
ax.set(title='$5,000 Credit Card Balance at 22.5% APR', xlabel='Years', ylabel='Balance ($)')
ax.legend(fontsize=15, frameon=False); ax.yaxis.set_major_formatter(lambda x, _: f'${x/1000:.0f}k')
save(fig, 'credit-card-minimum-payment-trap')

# 12 rule of 72
fig, ax = plt.subplots()
rates = np.linspace(1, 15, 100)
ax.plot(rates, 72/rates, color=C[0], lw=3)
for rr in [2,4,6,8,12]:
    ax.annotate(f'{rr}% → {72/rr:.0f}y', (rr, 72/rr), fontsize=14, xytext=(8,0), textcoords='offset points')
ax.set(title='Rule of 72: Years to Double Your Money', xlabel='Annual return (%)', ylabel='Years')
save(fig, 'rule-of-72-doubling-time')

# 13 dividend snowball
fig, ax = plt.subplots()
yrs = np.arange(0, 31); val = [10000]
for _ in range(30): val.append(val[-1]*1.07 + 2400)
ax.plot(yrs, val, color=C[0], lw=3, label='$10k start + $200/mo, 7%/yr')
ax.fill_between(yrs, 0, val, color=C[0], alpha=.1)
ax.set(title='Investment Growth: $10k + $200/Month at 7%', xlabel='Years', ylabel='Portfolio ($)')
ax.legend(fontsize=15, frameon=False); ax.yaxis.set_major_formatter(lambda x, _: f'${x/1000:.0f}k')
save(fig, 'investment-growth-monthly-contributions')

# 14 debt snowball vs avalanche
fig, ax = plt.subplots()
mo = np.arange(0, 61)
snow = 30000*np.exp(-mo/22); aval = 30000*np.exp(-mo/19)
ax.plot(mo, snow, color=C[3], lw=3, label='Snowball (smallest balance first)')
ax.plot(mo, aval, color=C[0], lw=3, label='Avalanche (highest APR first)')
ax.set(title='$30k Debt Payoff: Snowball vs Avalanche', xlabel='Months', ylabel='Total debt ($)')
ax.legend(fontsize=15, frameon=False); ax.yaxis.set_major_formatter(lambda x, _: f'${x/1000:.0f}k')
save(fig, 'debt-snowball-vs-avalanche')

# 15 net worth percentile style age curve
fig, ax = plt.subplots()
ages = np.arange(20, 71, 5)
med = np.array([8, 25, 62, 110, 180, 260, 350, 420, 480, 520, 540])
p90 = med*4.2
ax.plot(ages, med, color=C[0], lw=3, label='Median')
ax.plot(ages, p90, color=C[1], lw=3, label='90th percentile')
ax.set(title='Net Worth by Age: Median vs 90th Percentile', xlabel='Age', ylabel='Net worth ($k)')
ax.legend(fontsize=15, frameon=False)
save(fig, 'net-worth-by-age-percentiles')

# 16 currency exchange spread
fig, ax = plt.subplots()
amt = np.linspace(100, 5000, 100)
ax.plot(amt, amt*0.015, color=C[2], lw=3, label='Airport kiosk (1.5%)')
ax.plot(amt, amt*0.005, color=C[3], lw=3, label='Bank card (0.5%)')
ax.plot(amt, amt*0.001, color=C[1], lw=3, label='Revolut/Wise (0.1%)')
ax.set(title='Currency Exchange Fees: Cost by Amount', xlabel='Amount exchanged ($)', ylabel='Fee ($)')
ax.legend(fontsize=15, frameon=False)
save(fig, 'currency-exchange-fee-comparison')

# 17 FIRE coast number
fig, ax = plt.subplots()
age = np.arange(25, 56)
coast = 25*(1.07**(65-age))*np.ones_like(age)
ax.plot(age, coast, color=C[0], lw=3)
ax.set(title='Coast FIRE: Already-Saved Amount by Age (Retire at 65)', xlabel='Age', ylabel='Needed today ($k)')
ax.yaxis.set_major_formatter(lambda x, _: f'${x/1000:.0f}k')
save(fig, 'coast-fire-savings-by-age')

# 18 car depreciation
fig, ax = plt.subplots()
yrs = np.arange(0, 11)
v = 40000*0.6*(0.85**(yrs-1)); v[0] = 40000
ax.plot(yrs, v, color=C[0], lw=3, marker='o')
ax.set(title='New Car Depreciation: $40k Vehicle', xlabel='Years', ylabel='Value ($)')
ax.yaxis.set_major_formatter(lambda x, _: f'${x/1000:.0f}k')
save(fig, 'car-depreciation-curve')

# 19 gas vs electric savings
fig, ax = plt.subplots()
km = np.linspace(5000, 30000, 100)
ax.plot(km/1000, km/100*14/100*2.0, color=C[2], lw=3, label='Petrol (8L/100km, $2.00/L)')
ax.plot(km/1000, km/100*16/100*0.35, color=C[1], lw=3, label='EV (16kWh/100km, $0.35/kWh)')
ax.set(title='Annual Fuel Cost: Petrol vs EV (Australia)', xlabel='Annual driving (thousand km)', ylabel='Fuel cost ($/yr)')
ax.legend(fontsize=15, frameon=False)
save(fig, 'petrol-vs-ev-fuel-cost')

# 20 latte factor
fig, ax = plt.subplots()
yrs = np.arange(0, 41)
save_m = 5.5*30
val = np.array([save_m*12*(((1.07**y)-1)/0.07) for y in yrs])
ax.plot(yrs, val, color=C[0], lw=3, label='$5.50/day invested at 7%')
ax.fill_between(yrs, 0, val, color=C[0], alpha=.1)
ax.set(title='The Latte Factor: $5.50/Day Invested for 40 Years', xlabel='Years', ylabel='Value ($)')
ax.legend(fontsize=15, frameon=False); ax.yaxis.set_major_formatter(lambda x, _: f'${x/1000:.0f}k')
save(fig, 'latte-factor-compound-savings')
print('ALL DONE')
