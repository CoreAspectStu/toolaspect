# Affiliate Monetization Plan — ToolAspect Finance Cluster (draft v1)

## Principle
Never damage trust: affiliate placements only where a purchase decision already exists
(the user came to model a financial decision). No affiliate links on pure-utility tools
(tip calc, unit converters) — those stay ad-only.

## Tier 1 — high-intent money tools (affiliate now)
| Tool | User intent | Affiliate fit | Est. payout |
|---|---|---|---|
| auto-loan-calculator | about to borrow | rate-comparison tables (LendingTree-style) | $25–100/lead |
| mortgage cluster | buying soon | lender comparison widgets | $40–150/lead |
| annuity-calculator | retirement shopping | annuity/insurance quotes | $50–200/lead |
| 401k / 529 cluster | retirement planning | robo-advisors (Betterment/Wealthfront) | $50–100/signup |
| credit cluster (if any) | credit building | card comparison | $100–250/approval |

## Tier 2 — medium intent
pet insurance, home improvement cost calcs (lift-kit etc. → parts retailers: Amazon Associates 1–4%)

## Implementation (no code until approved)
1. One shared `/shared/affiliate.js` — renders a single styled "Compare offers" card
   below the tool result, clearly labeled, rel="sponsored nofollow".
2. Start with 2 tools (auto-loan, 401k-match) as a 2-week test. Track: card CTR,
   tool completion rate (must not drop >2%).
3. Networks: start Amazon Associates (instant approval) + one finance CPL network
   (LendingTree affiliate / CJ Finance) — application needs Stu's payment details.

## Rules
- FTC disclosure line above card.
- No auto-redirects, no interstitials.
- If AdSense/Raptive later objects, affiliate cards are removable in one line
  (shared JS include).
