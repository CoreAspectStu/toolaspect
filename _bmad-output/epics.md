# Utility Sites — Epics & Stories

**Status:** Ready for Implementation
**Total:** 6 Epics, 28 Stories
**Created:** 2026-05-24

---

## Requirements Inventory

### Functional Requirements
| ID | Requirement | Priority |
|----|-------------|----------|
| FR-01 | Payment Infrastructure (Stripe) | P0 |
| FR-02 | Freemium Tier System | P0 |
| FR-03 | User Accounts (Firebase Auth) | P0 |
| FR-04 | SEO Content Engine | P1 |
| FR-05 | Revenue Dashboard | P1 |
| FR-06 | Custom Domains | P2 |
| FR-07 | Affiliate Program | P2 |
| FR-08 | Build-in-Public Pipeline | P2 |
| FR-09 | Email Capture & Nurture | P2 |
| FR-10 | Google Search Console Integration | P1 |
| FR-11 | AdSense Integration | P1 |
| FR-12 | Cross-Selling | P1 |

### Non-Functional Requirements
| ID | Requirement |
|----|-------------|
| NFR-01 | Performance: <2s load, Lighthouse ≥90 |
| NFR-02 | Zero hosting cost (Cloudflare Pages free) |
| NFR-03 | Margin: 95%+, max $50/month ops |
| NFR-04 | WCAG 2.1 AA accessibility |
| NFR-05 | HTTPS everywhere, JWT auth, no PII client-side |
| NFR-06 | Dark theme consistency across all tools |

---

## Epic List

| # | Epic | User Outcome | Stories | FR Coverage |
|---|------|-------------|---------|-------------|
| 1 | **Payment & Auth Foundation** | Users can create accounts and pay for premium features | 5 | FR-01, FR-02, FR-03 |
| 2 | **Paid Tier Implementation** | Top 5 tools have premium features worth paying for | 5 | FR-02 |
| 3 | **SEO & Content Engine** | 40+ articles/month driving organic traffic to all tools | 5 | FR-04, FR-10 |
| 4 | **Growth & Retention** | Users stay engaged and refer others | 5 | FR-07, FR-08, FR-09, FR-12 |
| 5 | **AdSense & Monetization** | All tools generate ad revenue alongside subscriptions | 4 | FR-05, FR-11 |
| 6 | **Domain & Branding** | Professional domain presence building SEO authority | 4 | FR-06 |

---

## Epic 1: Payment & Auth Foundation

**Goal:** Users can create accounts and purchase premium subscriptions on any tool.

**Dependencies:** None (foundational)

### Story 1.1: Shared UI Component System

As a developer,
I want a shared component library (auth, payment, nav, footer),
So that all 10 tools have consistent UI and single-point updates.

**Acceptance Criteria:**

**Given** the shared directory exists at `/shared/`
**When** any tool page loads
**Then** it loads `shared/theme.css`, `shared/auth.js`, `shared/stripe-checkout.js`, and `shared/nav.js`
**And** all components render with consistent dark theme

**Architecture ref:** ADR-005

### Story 1.2: Firebase Auth Integration

As a user,
I want to create an account with email/password or Google OAuth,
So that I can access premium features across all tools.

**Acceptance Criteria:**

**Given** a user visits any tool
**When** they click "Sign In"
**Then** a modal appears offering email/password and Google OAuth
**And** successful login shows their avatar in the nav
**And** their auth state persists across page loads (JWT)
**And** custom claims reflect their subscription status

**Architecture ref:** ADR-002

### Story 1.3: Stripe Account & Product Setup

As a business owner,
I want Stripe configured with products and pricing for each tool,
So that users can purchase subscriptions.

**Acceptance Criteria:**

**Given** Stripe account is created
**When** products are configured
**Then** 7 products exist (5 paid tools × individual + bundle option)
**And** each has a monthly price ($2-7/mo) and annual price (2 months free)
**And** Stripe Customer Portal is enabled for self-service
**And** test mode works end-to-end

**Architecture ref:** ADR-001

### Story 1.4: Cloudflare Functions for Webhooks

As a developer,
I want Cloudflare Functions handling Stripe webhooks,
So that subscription changes update Firebase custom claims automatically.

**Acceptance Criteria:**

**Given** a Stripe webhook fires (checkout.session.completed, customer.subscription.updated, etc.)
**When** the Function receives it
**Then** it verifies the webhook signature
**And** updates Firebase custom claims for the user
**And** logs the event for audit
**And** returns 200 within 5 seconds

**Architecture ref:** ADR-003

### Story 1.5: Freemium Gate Component

As a user,
I want to see premium features greyed out with an upgrade prompt,
So that I understand what I'm missing and can easily upgrade.

**Acceptance Criteria:**

**Given** a free-tier user views premium features
**When** they interact with a gated element
**Then** an upgrade modal appears with pricing and "Upgrade" CTA
**And** clicking "Upgrade" initiates Stripe Checkout
**And** premium features unlock immediately after payment (no refresh needed)

**Architecture ref:** ADR-006

---

## Epic 2: Paid Tier Implementation

**Goal:** Top 5 tools have premium features worth paying for.

**Dependencies:** Epic 1

### Story 2.1: Finance Calculator — Pro Tier

As a finance professional,
I want advanced calculators, PDF export, and comparison tables,
So that I can make complex financial decisions efficiently.

**Acceptance Criteria:**

**Given** a premium user opens Finance Calculator
**When** they access the Pro tab
**Then** they see: ROI Calculator, Tax Estimator, Investment Comparator, Refinance Analyzer
**And** any calculation can be exported as a formatted PDF
**And** side-by-side comparison of up to 3 loan scenarios works
**And** amortization schedule shows interactive chart + exportable table

**Architecture ref:** ADR-006, FR-02

### Story 2.2: JSON Formatter — Pro Tier

As a developer,
I want batch validation, API testing, and schema validation,
So that I can validate and transform data at scale.

**Acceptance Criteria:**

**Given** a premium user opens JSON Formatter
**When** they access Pro features
**Then** they can paste multiple JSON documents and validate all at once
**And** they can enter a URL and test API responses with JSON validation
**And** they can validate JSON against a JSON Schema
**And** they can save and name schemas for reuse

**Architecture ref:** ADR-006, FR-02

### Story 2.3: Image Compressor — Pro Tier

As a content creator,
I want batch processing, WebP conversion, and watermarking,
So that I can optimize images for web at scale.

**Acceptance Criteria:**

**Given** a premium user opens Image Compressor
**When** they access Pro features
**Then** they can drag-drop up to 50 images for batch compression
**And** they can choose output format (JPEG, PNG, WebP)
**And** they can add a custom text watermark with position control
**And** they can set resize presets (Instagram, Twitter, Facebook, custom)
**And** they can download all as a ZIP

**Architecture ref:** ADR-006, FR-02

### Story 2.4: QR Code Generator — Pro Tier

As a marketer,
I want bulk QR generation, custom designs, and analytics,
So that I can create branded QR codes at scale.

**Acceptance Criteria:**

**Given** a premium user opens QR Code Generator
**When** they access Pro features
**Then** they can upload a CSV of URLs and generate QR codes for all
**And** they can customize QR code colors, add a logo overlay
**And** they can choose from 10 design templates (rounded, dotted, gradient)
**And** they can download all as PNGs or SVGs

**Architecture ref:** ADR-006, FR-02

### Story 2.5: Password Generator — Pro Tier

As a security-conscious user,
I want bulk generation, custom policies, and breach checking,
So that I can manage credentials for my organization.

**Acceptance Criteria:**

**Given** a premium user opens Password Generator
**When** they access Pro features
**Then** they can generate 100+ passwords with custom policies in one click
**And** they can define character requirements (min uppercase, min symbols, etc.)
**And** they can check passwords against Have I Been Pwned API (k-anonymity)
**And** they can export as CSV or JSON

**Architecture ref:** ADR-006, FR-02

---

## Epic 3: SEO & Content Engine

**Goal:** 40+ SEO articles/month driving organic traffic to all tools.

**Dependencies:** None (can run parallel with Epic 1-2)

### Story 3.1: GSC API Integration

As a marketer,
I want daily automated pulls of Google Search Console data,
So that I can track rankings, impressions, and CTR per tool.

**Acceptance Criteria:**

**Given** GSC API is authenticated
**When** the daily cron runs at 2am
**Then** it pulls queries, positions, impressions, CTR for each tool URL
**And** stores data in Qdrant with date partitioning
**And** flags significant rank changes (>5 position delta)

**Architecture ref:** ADR-004, FR-10

### Story 3.2: Keyword Research Pipeline

As a marketer,
I want automated long-tail keyword discovery per tool,
So that content targets high-potential search terms.

**Acceptance Criteria:**

**Given** GSC data and competitor analysis
**When** the weekly keyword cron runs
**Then** it generates a prioritized list of 50+ keywords per tool
**And** ranks by search volume × difficulty × relevance
**And** identifies content gaps (keywords we don't rank for yet)

**Architecture ref:** ADR-004, FR-04

### Story 3.3: Article Generation Pipeline

As a content creator,
I want 2-3 SEO articles generated daily targeting specific keywords,
So that organic traffic compounds month over month.

**Acceptance Criteria:**

**Given** a keyword list and article template
**When** the daily content cron runs (6am XPS)
**Then** it generates 2-3 articles (1,500-2,500 words each)
**And** each article targets a specific long-tail keyword
**And** articles include proper H1/H2/H3, meta description, internal links
**And** articles are saved as HTML pages ready for deployment

**Architecture ref:** ADR-004, FR-04

### Story 3.4: Content Auto-Deploy

As a developer,
I want generated articles auto-deployed to Cloudflare Pages,
So that content goes live without manual intervention.

**Acceptance Criteria:**

**Given** new articles exist in the content directory
**When** the deploy cron runs
**Then** it commits new articles to the git repo
**And** triggers Cloudflare Pages deployment
**And** verifies the new URLs return 200
**And** submits new URLs to Google via Indexing API

**Architecture ref:** ADR-003, FR-04

### Story 3.5: Weekly SEO Report

As a business owner,
I want a weekly SEO performance report in Mattermost,
So that I can track traffic growth and content ROI.

**Acceptance Criteria:**

**Given** GSC data and analytics
**When** the weekly report cron runs (Monday 9am)
**Then** it posts a formatted report to #project-utility-sites
**And** report includes: top keywords, position changes, traffic trends, new articles, top performing content
**And** highlights opportunities (high-impression low-CTR queries)

**Architecture ref:** ADR-008, FR-05

---

## Epic 4: Growth & Retention

**Goal:** Users stay engaged, upgrade, and refer others.

**Dependencies:** Epic 1 (auth + payments)

### Story 4.1: Email Capture & Nurture

As a marketer,
I want to collect emails and run automated drip campaigns,
So that free users are nurtured toward paid conversion.

**Acceptance Criteria:**

**Given** a free user uses any tool
**When** they complete an action
**Then** a non-intrusive banner offers "Save your work — free account"
**And** captured emails enter a drip sequence (3 emails over 7 days)
**And** each email highlights premium features relevant to the tool used

**Architecture ref:** FR-09

### Story 4.2: Affiliate Program Setup

As a promoter,
I want to earn 20% of revenue from users I refer,
So that I'm incentivized to promote these tools.

**Acceptance Criteria:**

**Given** Stripe Customer Portal has affiliate tracking enabled
**When** a referred user subscribes
**Then** the referrer gets 20% of monthly revenue for 12 months
**And** affiliates can view their dashboard with clicks, conversions, earnings
**And** payouts happen monthly via Stripe Connect

**Architecture ref:** FR-07

### Story 4.3: Build-in-Public Pipeline

As a founder,
I want daily X/Twitter post drafts about revenue and features,
So that I can build an audience without spending time writing.

**Acceptance Criteria:**

**Given** revenue and traffic data available
**When** the daily cron runs (8am)
**Then** it generates 2-3 tweet drafts about: revenue milestone, new feature, traffic growth, or user win
**And** sends them to Stu via Telegram for approval
**And** approved tweets can be posted via xurl CLI

**Architecture ref:** ADR-008, FR-08

### Story 4.4: Cross-Sell Widgets

As a user,
I want to discover related tools while using one tool,
So that I can find additional utilities I need.

**Acceptance Criteria:**

**Given** a user is on any tool page
**When** they scroll to the bottom or complete an action
**Then** 2-3 related tools are suggested with icons and descriptions
**And** clicking navigates to the related tool
**And** suggestions are contextually relevant (Finance → Currency, JSON → Regex, etc.)

**Architecture ref:** FR-12

### Story 4.5: Product Hunt Launch

As a founder,
I want to launch Finance Calculator on Product Hunt,
So that I get an initial burst of users and backlinks.

**Acceptance Criteria:**

**Given** Finance Calculator has a polished free + paid tier
**When** launch day arrives
**Then** Product Hunt page is live with screenshots, demo, and compelling copy
**And** first-day target: 100+ upvotes, 50+ comments, top 5 position
**And** all tools link back to the PH page for social proof

**Architecture ref:** FR-08

---

## Epic 5: AdSense & Monetization

**Goal:** All tools generate ad revenue alongside subscriptions.

**Dependencies:** Custom domain (Epic 6) recommended for AdSense approval

### Story 5.1: AdSense Account Setup

As a business owner,
I want Google AdSense approved and serving ads on all 10 tools,
So that free users generate passive revenue.

**Acceptance Criteria:**

**Given** custom domain is live with real content
**When** AdSense application is submitted
**Then** Google approves the site within 2 weeks
**And** ad units are placed: 1 above fold, 1 between content, 1 sidebar
**And** ads don't block tool functionality or degrade UX

**Architecture ref:** FR-11

### Story 5.2: Revenue Dashboard

As a business owner,
I want a central view of all revenue streams,
So that I can make data-driven decisions about pricing and features.

**Acceptance Criteria:**

**Given** Stripe + AdSense data is available
**When** I view the dashboard (Mattermost weekly report)
**Then** I see: MRR, total subscribers, AdSense revenue, tool-by-tool breakdown
**And** I see conversion rates (free → paid) per tool
**And** I see 30-day trend lines for each metric

**Architecture ref:** ADR-008, FR-05

### Story 5.3: Pricing A/B Testing

As a product manager,
I want to test different price points per tool,
So that I can find the revenue-maximizing price.

**Acceptance Criteria:**

**Given** at least 100 visitors/week per tool
**When** A/B test is configured
**Then** 50% of visitors see Price A, 50% see Price B
**And** conversion rates are tracked per variant
**And** after 2 weeks, winner is automatically promoted

**Architecture ref:** FR-05

### Story 5.4: Competitor Monitoring

As a business owner,
I want weekly alerts about competitor pricing and features,
So that I can stay competitive.

**Acceptance Criteria:**

**Given** a list of 5-10 competitors per tool
**When** the weekly cron runs (Friday 9am)
**Then** it checks competitor sites for pricing, feature, and ranking changes
**And** posts a summary to Mattermost with any actionable findings

**Architecture ref:** ADR-008, FR-05

---

## Epic 6: Domain & Branding

**Goal:** Professional domain presence building SEO authority.

**Dependencies:** None (can run parallel)

### Story 6.1: Primary Domain Registration

As a business owner,
I want a primary domain for the tool suite,
So that all tools share SEO authority and brand identity.

**Acceptance Criteria:**

**Given** domain options are researched
**When** primary domain is purchased
**Then** DNS points to Cloudflare Pages
**And** SSL is auto-provisioned by Cloudflare
**And** all tools are accessible via subdomain (toolname.primarydomain.com)

**Architecture ref:** ADR-007, FR-06

### Story 6.2: Tool Subdomain Routing

As a user,
I want each tool accessible via a memorable subdomain,
So that I can bookmark and return easily.

**Acceptance Criteria:**

**Given** primary domain is configured
**When** a user visits `finance.primarydomain.com`
**Then** the Finance Calculator loads
**And** navigation allows switching between tools
**And** each subdomain has its own meta tags for SEO

**Architecture ref:** ADR-007, FR-06

### Story 6.3: Redirect Domain Setup

As a marketer,
I want keyword-rich redirect domains pointing to each tool,
So that type-in traffic and brand searches reach the right tool.

**Acceptance Criteria:**

**Given** redirect domains are purchased
**When** a user visits `financecalculator.io`
**Then** they're 301-redirected to `finance.primarydomain.com`
**And** no redirect chains exist (single hop only)

**Architecture ref:** ADR-007, FR-06

### Story 6.4: Landing Page Upgrade

As a first-time visitor,
I want a compelling landing page that showcases all tools,
So that I understand the value and can find what I need.

**Acceptance Criteria:**

**Given** a user visits the primary domain
**When** the landing page loads
**Then** they see: hero section with value prop, tool grid with descriptions, social proof, and CTA
**And** the page is SEO-optimized with proper schema markup
**And** page loads in <2s on mobile

**Architecture ref:** FR-06

---

## FR Coverage Map

| FR | Epic | Story |
|----|------|-------|
| FR-01 | 1 | 1.3, 1.4 |
| FR-02 | 1, 2 | 1.5, 2.1, 2.2, 2.3, 2.4, 2.5 |
| FR-03 | 1 | 1.2 |
| FR-04 | 3 | 3.2, 3.3, 3.4 |
| FR-05 | 5 | 5.2, 5.3, 5.4 |
| FR-06 | 6 | 6.1, 6.2, 6.3, 6.4 |
| FR-07 | 4 | 4.2 |
| FR-08 | 4 | 4.3, 4.5 |
| FR-09 | 4 | 4.1 |
| FR-10 | 3 | 3.1 |
| FR-11 | 5 | 5.1 |
| FR-12 | 4 | 4.4 |

**Coverage:** 12/12 FRs mapped (100%)

---

## NFR Enforcement

| NFR | Enforced By |
|-----|-------------|
| NFR-01 | Story 1.1 (shared theme), Lighthouse CI in deploy pipeline |
| NFR-02 | ADR-003 (Cloudflare Pages free tier) |
| NFR-03 | Architecture constraint: no backend, Stripe-only processing |
| NFR-04 | Story 1.1 (shared theme with A11y), semantic HTML |
| NFR-05 | ADR-002 (Firebase JWT), ADR-001 (Stripe handles cards) |
| NFR-06 | Story 1.1 (shared theme.css) |
