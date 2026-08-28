/* ============================================================
   ToolAspect v3 — Shared Navigation (nav.js)
   Clean, minimal nav matching the homepage redesign.
   Self-rendering. Include via <script src="shared/nav.js">
   Auto-injects theme.css when loaded.
   ============================================================ */
(function () {
  'use strict';

  /* --- Resolve the shared/ base so CSS is always found correctly --- */
  var scripts = document.querySelectorAll('script[src]');
  var base = '';
  for (var i = 0; i < scripts.length; i++) {
    var m = scripts[i].src.match(/^(.*)shared\/nav\.js(\?.*)?$/);
    if (m) { base = m[1]; break; }
  }
  if (!base) base = './';

  /* --- Inject theme.css if not already present --- */
  var cssHref = base + 'shared/theme.css';
  var links = document.querySelectorAll('link[rel="stylesheet"]');
  var loaded = false;
  for (var j = 0; j < links.length; j++) {
    if (links[j].href.indexOf('shared/theme.css') !== -1) { loaded = true; break; }
  }
  if (!loaded) {
    var el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = cssHref;
    document.head.appendChild(el);
  }

  /* --- Tool definitions grouped by category --- */
  var categories = [
    {
      label: 'Finance',
      dot: '#10b981',
      tools: [
        { label: 'Finance Calculator',     href: '/finance-calculator/' },
        { label: 'Currency Converter',     href: '/currency-converter/', popular: true },
        { label: 'Crypto Converter',       href: '/crypto-converter/', popular: true },
        { label: 'Percentage Calculator',  href: '/percentage-calculator/', popular: true },
        { label: 'Compound Interest',      href: '/compound-interest-calculator/' },
        { label: 'Mortgage Calculator',    href: '/mortgage-calculator/' },
        { label: 'Loan Calculator',        href: '/loan-calculator/' },
        { label: 'BMI Calculator',         href: '/bmi-calculator/' },
        { label: 'Discount Calculator',    href: '/discount-calculator/' },
        { label: 'Sales Tax Calculator',   href: '/sales-tax-calculator/' },
        { label: 'Tip Calculator',         href: '/tip-calculator/' },
        { label: 'Hours Calculator',       href: '/hours-calculator/' },
      ]
    },
    {
      label: 'Developer',
      dot: '#5e6ad2',
      tools: [
        { label: 'JSON Formatter',    href: '/json-formatter/' },
        { label: 'Regex Tester',      href: '/regex-tester/' },
        { label: 'Base64 Encoder',    href: '/base64-encoder/' },
        { label: 'Cron Generator',    href: '/cron-generator/' },
        { label: 'UUID Generator',    href: '/uuid-generator/' },
        { label: 'Color Picker',      href: '/color-picker/' },
        { label: 'LLM Pricing Tracker', href: '/llm-pricing-tracker/', badge: 'New' },
      ]
    },
    {
      label: 'Text',
      dot: '#f59e0b',
      tools: [
        { label: 'Word Counter',      href: '/word-counter/' },
        { label: 'Case Converter',    href: '/case-converter/' },
        { label: 'Lorem Ipsum',       href: '/lorem-ipsum/' },
        { label: 'Word Unscrambler',  href: '/word-unscrambler/' },
      ]
    },
    {
      label: 'Generators',
      dot: '#f472b6',
      tools: [
        { label: 'QR Code Generator',  href: '/qr-code-generator/' },
        { label: 'Password Generator', href: '/password-generator/' },
        { label: 'Image Compressor',   href: '/image-compressor/' },
      ]
    },
    {
      label: 'Converters',
      dot: '#22d3ee',
      tools: [
        { label: 'Unit Converter', href: '/unit-converter/' },
        { label: 'Age Calculator', href: '/age-calculator/' },
      ]
    },
  /* ---- Categories added 2026-08-28 to cover full tool inventory ---- */
    {
      label: 'Creator & Monetization',
      dot: '#818cf8',
      tools: [
        { label: 'Creator Tools', href: '/creator-tools/' },
        { label: 'YoutubeEarnings', href: '/youtube-earnings-calculator/' },
        { label: 'YoutubeSponsorship', href: '/youtube-sponsorship-calculator/' },
        { label: 'YoutubeWatchTime', href: '/youtube-watch-time-calculator/' },
        { label: 'YoutubeThumbnailSize', href: '/youtube-thumbnail-size/' },
        { label: 'TiktokMoney', href: '/tiktok-money-calculator/' },
        { label: 'TwitchRevenue', href: '/twitch-revenue-calculator/' },
        { label: 'TwitchBit', href: '/twitch-bit-calculator/' },
        { label: 'SpotifyRoyalty', href: '/spotify-royalty-calculator/' },
        { label: 'PodcastEarnings', href: '/podcast-earnings-calculator/' },
        { label: 'CreatorEarnings', href: '/creator-earnings-calculator/' },
        { label: 'CreatorRevenueProjections', href: '/creator-revenue-projections/' },
        { label: 'OnlyfansEarnings', href: '/onlyfans-earnings-calculator/' },
        { label: 'OnlyfansPrice', href: '/onlyfans-price-calculator/' },
        { label: 'FanslyEarnings', href: '/fansly-earnings-calculator/' },
        { label: 'Loyalfans', href: '/loyalfans/' },
        { label: 'CustomContentPrice', href: '/custom-content-price-calculator/' },
        { label: 'ChurnRate', href: '/churn-rate-calculator/' },
        { label: 'EngagementRate', href: '/engagement-rate-calculator/' },
        { label: 'FollowerGrowth', href: '/follower-growth-calculator/' },
        { label: 'Influencer', href: '/influencer-calculator/' },
        { label: 'HashtagGenerator', href: '/hashtag-generator/' },
        { label: 'LinkInBio', href: '/link-in-bio/' },
      ]
    },
    {
      label: 'Image Protection',
      dot: '#818cf8',
      tools: [
        { label: 'Image Tools', href: '/image-tools/' },
        { label: 'ImageWatermark', href: '/image-watermark/' },
        { label: 'ReverseImageSearch', href: '/reverse-image-search/' },
        { label: 'FaceRecognitionSearch', href: '/face-recognition-search/' },
        { label: 'PimeyesAlternative', href: '/pimeyes-alternative/' },
        { label: 'AiImageDetector', href: '/ai-image-detector/' },
        { label: 'DuplicateImageFinder', href: '/duplicate-image-finder/' },
        { label: 'DeepfakeDetector', href: '/deepfake-detector/' },
        { label: 'ExifViewer', href: '/exif-viewer/' },
        { label: 'ImageMetadataRemover', href: '/image-metadata-remover/' },
        { label: 'DmcaTakedownCost', href: '/dmca-takedown-cost-calculator/' },
        { label: 'ImageCompressor', href: '/image-compressor/' },
      ]
    },
    {
      label: 'QR Codes',
      dot: '#818cf8',
      tools: [
        { label: 'QrCodeGenerator', href: '/qr-code-generator/' },
        { label: 'QrCodeScanner', href: '/qr-code-scanner/' },
        { label: 'QrCodeWithLogo', href: '/qr-code-with-logo/' },
        { label: 'QrCodeBatch', href: '/qr-code-batch/' },
      ]
    },
    {
      label: 'Construction',
      dot: '#818cf8',
      tools: [
        { label: 'Blow In Insulation', href: '/blow-in-insulation-calculator/' },
        { label: 'Insulation', href: '/insulation-calculator/' },
        { label: 'Electrical Load', href: '/electrical-load-calculator/' },
        { label: 'Contractor Tools', href: '/contractor-tools/' },
        { label: 'Tile', href: '/tile-calculator/' },
        { label: 'Concrete', href: '/concrete-calculator/' },
        { label: 'ConcreteBlock', href: '/concrete-block-calculator/' },
        { label: 'Brick', href: '/brick-calculator/' },
        { label: 'Gravel', href: '/gravel-calculator/' },
        { label: 'AggregateBase', href: '/aggregate-base-calculator/' },
        { label: 'Topsoil', href: '/topsoil-calculator/' },
        { label: 'Mulch', href: '/mulch-calculator/' },
        { label: 'Sod', href: '/sod-calculator/' },
        { label: 'Paint', href: '/paint-calculator/' },
        { label: 'Drywall', href: '/drywall-calculator/' },
        { label: 'Flooring', href: '/flooring-calculator/' },
        { label: 'Roofing', href: '/roofing-calculator/' },
        { label: 'RoofPitch', href: '/roof-pitch-calculator/' },
        { label: 'Siding', href: '/siding-calculator/' },
        { label: 'Fence', href: '/fence-calculator/' },
        { label: 'Deck', href: '/deck-calculator/' },
        { label: 'Stair', href: '/stair-calculator/' },
        { label: 'Lumber', href: '/lumber-calculator/' },
        { label: 'Rebar', href: '/rebar-calculator/' },
        { label: 'Paver', href: '/paver-calculator/' },
        { label: 'Asphalt', href: '/asphalt-calculator/' },
        { label: 'Epoxy', href: '/epoxy-calculator/' },
        { label: 'Excavation', href: '/excavation-calculator/' },
        { label: 'Sonotube', href: '/sonotube-calculator/' },
        { label: 'Shed', href: '/shed-calculator/' },
        { label: 'CrownMolding', href: '/crown-molding-calculator/' },
        { label: 'SoffitFascia', href: '/soffit-fascia-calculator/' },
        { label: 'Gutter', href: '/gutter-calculator/' },
        { label: 'WallFraming', href: '/wall-framing-calculator/' },
        { label: 'WindowRoughOpening', href: '/window-rough-opening-calculator/' },
      ]
    },
    {
      label: 'Home & Remodel Costs',
      dot: '#818cf8',
      tools: [
        { label: 'KitchenRemodelCost', href: '/kitchen-remodel-cost-calculator/' },
        { label: 'BathroomRemodelCost', href: '/bathroom-remodel-cost-calculator/' },
        { label: 'DeckCost', href: '/deck-cost-calculator/' },
        { label: 'FenceCost', href: '/fence-cost-calculator/' },
        { label: 'DrivewayPavingCost', href: '/driveway-paving-cost-calculator/' },
        { label: 'HvacReplacementCost', href: '/hvac-replacement-cost-calculator/' },
        { label: 'WaterHeaterCost', href: '/water-heater-cost-calculator/' },
        { label: 'WindowReplacementCost', href: '/window-replacement-cost-calculator/' },
        { label: 'RoofReplacementCost', href: '/roof-replacement-cost-calculator/' },
        { label: 'Countertop', href: '/countertop-calculator/' },
        { label: 'InvisalignCost', href: '/invisalign-cost-calculator/' },
        { label: 'VasectomyReversalCost', href: '/vasectomy-reversal-cost-calculator/' },
        { label: 'IncorporationCost', href: '/incorporation-cost-calculator/' },
      ]
    },
    {
      label: 'Auto & Transport',
      dot: '#f97316',
      tools: [
        { label: 'Auto Tools', href: '/auto-tools/' },
        { label: 'CarRepairCost', href: '/car-repair-cost-calculator/' },
        { label: 'CarShippingCost', href: '/car-shipping-cost-calculator/' },
        { label: 'CarWrapCost', href: '/car-wrap-cost-calculator/' },
        { label: 'CarAffordability', href: '/car-affordability-calculator/' },
        { label: 'AutoRefinance', href: '/auto-refinance-calculator/' },
        { label: 'ExtendedCarWarrantyCost', href: '/extended-car-warranty-cost-calculator/' },
        { label: 'Mpg', href: '/mpg-calculator/' },
      ]
    },
    {
      label: 'Health',
      dot: '#818cf8',
      tools: [
        { label: 'Deductible Vs Copay', href: '/deductible-vs-copay-calculator/' },
        { label: 'Bmi', href: '/bmi-calculator/' },
        { label: 'Bmr', href: '/bmr-calculator/' },
        { label: 'Macro', href: '/macro-calculator/' },
        { label: 'MacroSplit', href: '/macro-split-calculator/' },
        { label: 'Calorie', href: '/calorie-calculator/' },
        { label: 'CalorieDeficit', href: '/calorie-deficit-calculator/' },
        { label: 'BodyFat', href: '/body-fat-calculator/' },
        { label: 'IdealWeight', href: '/ideal-weight-calculator/' },
        { label: 'IdealProteinIntake', href: '/ideal-protein-intake-calculator/' },
        { label: 'WaterIntake', href: '/water-intake-calculator/' },
        { label: 'HydrationNeedsByWeight', href: '/hydration-needs-by-weight/' },
        { label: 'DogFood', href: '/dog-food-calculator/' },
        { label: 'HeartRateZone', href: '/heart-rate-zone-calculator/' },
        { label: 'GlucoseA1cConverter', href: '/glucose-a1c-converter/' },
        { label: 'Bac', href: '/bac-calculator/' },
        { label: 'DueDate', href: '/due-date-calculator/' },
        { label: 'Ovulation', href: '/ovulation-calculator/' },
        { label: 'PregnancyDueDate', href: '/pregnancy-due-date-calculator/' },
        { label: 'PregnancyWeekByWeek', href: '/pregnancy-week-by-week/' },
        { label: 'PregnancyWeightGain', href: '/pregnancy-weight-gain-calculator/' },
        { label: 'PregnancyWeightGainTwins', href: '/pregnancy-weight-gain-calculator-twins/' },
        { label: 'PlusSizePregnancyWeightGain', href: '/plus-size-pregnancy-weight-gain/' },
      ]
    },
    {
      label: 'Loans & Mortgage',
      dot: '#818cf8',
      tools: [
        { label: 'Mortgage', href: '/mortgage-calculator/' },
        { label: 'AutoLoan', href: '/auto-loan-calculator/' },
        { label: 'FhaLoan', href: '/fha-loan-calculator/' },
        { label: 'VaLoan', href: '/va-loan-calculator/' },
        { label: 'HelocPayment', href: '/heloc-payment-calculator/' },
        { label: 'HelocVsCashOutRefi', href: '/heloc-vs-cash-out-refi-calculator/' },
        { label: 'HomeEquity', href: '/home-equity-calculator/' },
        { label: 'Pmi', href: '/pmi-calculator/' },
        { label: 'ClosingCost', href: '/closing-cost-calculator/' },
        { label: 'RefinanceBreakEven', href: '/refinance-break-even-calculator/' },
        { label: 'AmortizationSchedule', href: '/amortization-schedule/' },
        { label: 'CarPayment', href: '/car-payment-calculator/' },
        { label: 'TitleLoanApr', href: '/title-loan-apr-calculator/' },
        { label: 'ExtendedCarWarrantyCost', href: '/extended-car-warranty-cost-calculator/' },
        { label: 'VinDecoder', href: '/vin-decoder/' },
        { label: 'LeasePayment', href: '/lease-payment-calculator/' },
        { label: 'Dti', href: '/dti-calculator/' },
        { label: 'RothConversion', href: '/roth-conversion-calculator/' },
      ]
    },
    {
      label: 'Student Loans',
      dot: '#818cf8',
      tools: [
        { label: 'RAP Payment', href: '/rap-student-loan-calculator/', badge: 'New' },
        { label: 'Student Loan Refinance', href: '/student-loan-refinance-calculator/' },
        { label: 'Loan Consolidation', href: '/student-loan-consolidation-calculator/' },
        { label: 'Private Student Loan', href: '/private-student-loan-calculator/' },
        { label: 'Student Loan Payoff', href: '/student-loan-payoff-calculator/' },
        { label: 'RAP at $30k Salary', href: '/rap-calculator-30000-salary/' },
        { label: 'RAP at $50k Salary', href: '/rap-calculator-50000-salary/' },
        { label: 'RAP at $80k Salary', href: '/rap-calculator-80000-salary/' },
      ]
    },
    {
      label: 'Insurance',
      dot: '#818cf8',
      tools: [
        { label: 'CarInsuranceEstimator', href: '/car-insurance-estimator/' },
        { label: 'LifeInsuranceNeeds', href: '/life-insurance-needs-calculator/' },
        { label: 'RentersInsurance', href: '/renters-insurance-calculator/' },
        { label: 'BoatInsuranceCost', href: '/boat-insurance-cost-calculator/' },
        { label: 'MotorcycleInsuranceCost', href: '/motorcycle-insurance-cost-calculator/' },
        { label: 'RvInsuranceCost', href: '/rv-insurance-cost-calculator/' },
        { label: 'FloodInsuranceCost', href: '/flood-insurance-cost-calculator/' },
        { label: 'EarthquakeInsuranceCost', href: '/earthquake-insurance-cost-calculator/' },
        { label: 'EarthquakeInsurance', href: '/earthquake-insurance-calculator/' },
        { label: 'DisabilityInsurance', href: '/disability-insurance-calculator/' },
        { label: 'UmbrellaInsurance', href: '/umbrella-insurance-calculator/' },
        { label: 'IdentityTheftProtection', href: '/identity-theft-protection-calculator/' },
      ]
    },
    {
      label: 'Legal & Settlements',
      dot: '#818cf8',
      tools: [
        { label: 'CarAccidentSettlement', href: '/car-accident-settlement-calculator/' },
        { label: 'Truck Accident Settlement', href: '/truck-accident-settlement-calculator/', badge: 'New' },
        { label: 'Diminished Value Claim', href: '/diminished-value-claim-calculator/', badge: 'New' },
        { label: 'Divorce Cost', href: '/divorce-cost-calculator/', badge: 'New' },
        { label: 'Speeding Ticket Cost', href: '/speeding-ticket-cost-calculator/', badge: 'New' },
        { label: 'Speeding Ticket: California', href: '/speeding-ticket-cost-california/' },
        { label: 'Speeding Ticket: Florida', href: '/speeding-ticket-cost-florida/' },
        { label: 'Speeding Ticket: Texas', href: '/speeding-ticket-cost-texas/' },
        { label: 'DogBiteSettlement', href: '/dog-bite-settlement-calculator/' },
        { label: 'SlipAndFallSettlement', href: '/slip-and-fall-settlement-calculator/' },
        { label: 'MotorcycleAccidentSettlement', href: '/motorcycle-accident-settlement-calculator/' },
        { label: 'UberLyftAccidentSettlement', href: '/uber-lyft-accident-settlement-calculator/' },
        { label: 'MedicalMalpracticeSettlement', href: '/medical-malpractice-settlement-calculator/' },
        { label: 'MesotheliomaSettlement', href: '/mesothelioma-settlement-calculator/' },
        { label: 'NursingHomeAbuseSettlement', href: '/nursing-home-abuse-settlement-calculator/' },
        { label: 'WorkersCompSettlement', href: '/workers-comp-settlement-calculator/' },
        { label: 'WorkersComp', href: '/workers-comp-calculator/' },
        { label: 'WrongfulTerminationSettlement', href: '/wrongful-termination-settlement-calculator/' },
        { label: 'WrongfulTerminationCompensation', href: '/wrongful-termination-compensation-calculator/' },
        { label: 'PainAndSuffering', href: '/pain-and-suffering-calculator/' },
        { label: 'Settlement', href: '/settlement-calculator/' },
        { label: 'LawsuitLoan', href: '/lawsuit-loan-calculator/' },
        { label: 'Alimony', href: '/alimony-calculator/' },
        { label: 'AlimonyCalifornia', href: '/alimony-calculator-california/' },
        { label: 'AlimonyTexas', href: '/alimony-calculator-texas/' },
        { label: 'ChildSupport', href: '/child-support-calculator/' },
      ]
    },
    {
      label: 'Tax & Payroll',
      dot: '#818cf8',
      tools: [
        { label: 'IncomeTax', href: '/income-tax-calculator/' },
        { label: 'CapitalGainsTax', href: '/capital-gains-tax-calculator/' },
        { label: 'SelfEmploymentTax', href: '/self-employment-tax-calculator/' },
        { label: 'EstimatedQuarterlyTax', href: '/estimated-quarterly-tax-calculator/' },
        { label: 'Payroll', href: '/payroll-calculator/' },
        { label: 'Overtime', href: '/overtime-calculator/' },
        { label: 'OvertimePayByState', href: '/overtime-pay-calculator-by-state/' },
        { label: 'Salary', href: '/salary-calculator/' },
        { label: 'HourlyToSalary', href: '/hourly-to-salary-calculator/' },
        { label: 'PropertyTax', href: '/property-tax-calculator/' },
        { label: 'SalesTax', href: '/sales-tax-calculator/' },
        { label: 'SocialSecurity', href: '/social-security-calculator/' },
        { label: 'SocialSecurityDisabilityBenefits', href: '/social-security-disability-benefits-calculator/' },
        { label: 'SocialSecurityDisabilityDenial', href: '/social-security-disability-denial-calculator/' },
        { label: 'Retirement', href: '/retirement-calculator/' },
        { label: '401k Match', href: '/401k-match-calculator/' },
        { label: 'Rmd', href: '/rmd-calculator/' },
        { label: 'FsaDeadline', href: '/fsa-deadline-calculator/' },
        { label: 'HsaContribution', href: '/hsa-contribution-calculator/' },
      ]
    },
    {
      label: 'Finance Extras',
      dot: '#818cf8',
      tools: [
        { label: 'Pascals Triangle', href: '/pascals-triangle/' },
        { label: 'Tip Splitter', href: '/tip-splitter/' },
        { label: 'Annuity', href: '/annuity-calculator/' },
        { label: 'NetWorth', href: '/net-worth-calculator/' },
        { label: 'Savings', href: '/savings-calculator/' },
        { label: 'Rent', href: '/rent-calculator/' },
        { label: 'FuelCost', href: '/fuel-cost-calculator/' },
        { label: 'CreditCardPayoff', href: '/credit-card-payoff/' },
        { label: 'CreditCardPayoff', href: '/credit-card-payoff-calculator/' },
        { label: 'Factoring', href: '/factoring-calculator/' },
        { label: 'Markup', href: '/markup-calculator/' },
        { label: 'Ratio', href: '/ratio-calculator/' },
        { label: 'Roi', href: '/roi-calculator/' },
        { label: 'Probability', href: '/probability-calculator/' },
        { label: 'SampleSize', href: '/sample-size-calculator/' },
        { label: 'Fraction', href: '/fraction-calculator/' },
        { label: 'Average', href: '/average-calculator/' },
        { label: 'PercentageChange', href: '/percentage-change-calculator/' },
        { label: 'QuadraticEquationSolver', href: '/quadratic-equation-solver/' },
        { label: 'Slope', href: '/slope-calculator/' },
        { label: 'StandardDeviation', href: '/standard-deviation-calculator/' },
        { label: 'Matrix', href: '/matrix-calculator/' },
        { label: 'Scientific', href: '/scientific-calculator/' },
        { label: 'MolarMass', href: '/molar-mass-calculator/' },
        { label: 'SigFig', href: '/sig-fig-calculator/' },
        { label: 'SolarSavings', href: '/solar-savings-calculator/' },
        { label: 'DateDifference', href: '/date-difference-calculator/' },
        { label: 'Age', href: '/age-calculator/' },
        { label: 'Gpa', href: '/gpa-calculator/' },
        { label: 'SatScore', href: '/sat-score-calculator/' },
      ]
    },
    {
      label: 'Business Docs',
      dot: '#818cf8',
      tools: [
        { label: 'InvoiceGenerator', href: '/invoice-generator/' },
        { label: 'QuoteEstimateBuilder', href: '/quote-estimate-builder/' },
        { label: 'ResumeBuilder', href: '/resume-builder/' },
        { label: 'CoverLetterGenerator', href: '/cover-letter-generator/' },
        { label: 'FormBuilder', href: '/form-builder/' },
        { label: 'BusinessTools', href: '/business-tools/' },
        { label: 'ContentCalendarPlanner', href: '/content-calendar-planner/' },
        { label: 'AiReceptionistCost', href: '/ai-receptionist-cost-calculator/' },
        { label: 'RecruitingScreeningRoi', href: '/recruiting-screening-roi-calculator/' },
      ]
    },
    {
      label: 'Developer',
      dot: '#818cf8',
      tools: [
        { label: 'JsonFormatter', href: '/json-formatter/' },
        { label: 'CsvToJson', href: '/csv-to-json/' },
        { label: 'SqlFormatter', href: '/sql-formatter/' },
        { label: 'YamlValidator', href: '/yaml-validator/' },
        { label: 'Base64Encoder', href: '/base64-encoder/' },
        { label: 'UrlEncoder', href: '/url-encoder/' },
        { label: 'HashGenerator', href: '/hash-generator/' },
        { label: 'UuidGenerator', href: '/uuid-generator/' },
        { label: 'JwtDecoder', href: '/jwt-decoder/' },
        { label: 'RegexTester', href: '/regex-tester/' },
        { label: 'CronGenerator', href: '/cron-generator/' },
        { label: 'RobotsTxtGenerator', href: '/robots-txt-generator/' },
        { label: 'MetaTagGenerator', href: '/meta-tag-generator/' },
        { label: 'SchemaGenerator', href: '/schema-generator/' },
        { label: 'SerpOptimizer', href: '/serp-optimizer/' },
        { label: 'DiffChecker', href: '/diff-checker/' },
        { label: 'TokenCounter', href: '/token-counter/' },
        { label: 'BinaryConverter', href: '/binary-converter/' },
        { label: 'MarkdownToHtml', href: '/markdown-to-html/' },
        { label: 'PromptLibrary', href: '/prompt-library/' },
        { label: 'LlmPricingTracker', href: '/llm-pricing-tracker/' },
        { label: 'DeveloperTools', href: '/developer-tools/' },
      ]
    },
    {
      label: 'Text & Everyday',
      dot: '#818cf8',
      tools: [
        { label: 'WordCounter', href: '/word-counter/' },
        { label: 'CaseConverter', href: '/case-converter/' },
        { label: 'CitationGenerator', href: '/citation-generator/' },
        { label: 'LoremIpsum', href: '/lorem-ipsum/' },
        { label: 'NumberToWords', href: '/number-to-words/' },
        { label: 'RomanNumeralConverter', href: '/roman-numeral-converter/' },
        { label: 'MilitaryTimeConverter', href: '/military-time-converter/' },
        { label: 'TimeZoneConverter', href: '/time-zone-converter/' },
        { label: 'UnitConverter', href: '/unit-converter/' },
        { label: 'ColorConverter', href: '/color-converter/' },
        { label: 'ColorPicker', href: '/color-picker/' },
        { label: 'ReadingTime', href: '/reading-time-calculator/' },
        { label: 'GiftIdeas', href: '/gift-ideas/' },
        { label: 'PetNameGenerator', href: '/pet-name-generator/' },
        { label: 'BabyNameGenerator', href: '/baby-name-generator/' },
        { label: 'DiceRoller', href: '/dice-roller/' },
        { label: 'CoinFlip', href: '/coin-flip/' },
        { label: 'RandomNumberGenerator', href: '/random-number-generator/' },
        { label: 'CountdownTimer', href: '/countdown-timer/' },
        { label: 'Stopwatch', href: '/stopwatch/' },
        { label: 'PomodoroTimer', href: '/pomodoro-timer/' },
        { label: 'Notepad', href: '/notepad/' },
        { label: 'TextTools', href: '/text-tools/' },
        { label: 'EverydayTools', href: '/everyday-tools/' },
      ]
    },
    {
      label: 'Charts & Design',
      dot: '#818cf8',
      tools: [
        { label: 'BarChartMaker', href: '/bar-chart-maker/' },
        { label: 'FlowchartMaker', href: '/flowchart-maker/' },
        { label: 'GanttChartMaker', href: '/gantt-chart-maker/' },
        { label: 'MindMapMaker', href: '/mind-map-maker/' },
        { label: 'OrgChartMaker', href: '/org-chart-maker/' },
        { label: 'KanbanBoard', href: '/kanban-board/' },
        { label: 'WordSearchMaker', href: '/word-search-maker/' },
        { label: 'BoxShadowGenerator', href: '/box-shadow-generator/' },
        { label: 'GradientGenerator', href: '/gradient-generator/' },
        { label: 'PlaceholderImage', href: '/placeholder-image/' },
        { label: 'WordsPerMinuteTest', href: '/words-per-minute-test/' },
        { label: 'VideoAspectRatio', href: '/video-aspect-ratio-calculator/' },
      ]
    },
  ];

  /* Flat list for search */
  var allTools = [];
  categories.forEach(function(c) { allTools = allTools.concat(c.tools); });

  /* --- Detect current path for active highlighting --- */
  var current = window.location.pathname.replace(/\/index\.html$/, '/');

  /* --- Build DOM --- */
  var nav = document.createElement('nav');
  nav.className = 'ta-nav';
  nav.innerHTML = buildHTML();

  /* Insert at top of body — body may not exist yet if this script is
     included from <head>, so defer to DOMContentLoaded in that case */
  function insertNav() {
    document.body.insertBefore(nav, document.body.firstChild);
  }

  /* --- Auto-inject ads.js for AdSense --- */
  if (document.body && !document.querySelector('script[src*="shared/ads.js"]')) {
    var adsScript = document.createElement('script');
    adsScript.src = base + 'shared/ads.js';
    document.body.appendChild(adsScript);
  }

  if (document.body) {
    insertNav();
  } else {
    document.addEventListener('DOMContentLoaded', insertNav);
  }

  /* --- Hamburger toggle --- */
  var hamburger = nav.querySelector('.ta-hamburger');
  var mobileMenu = nav.querySelector('.ta-mobile-menu');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.toggle('ta-open');
      hamburger.classList.toggle('ta-active');
    });
  }

  /* --- Search functionality --- */
  var searchInput = nav.querySelector('.ta-search-input');
  var searchResults = nav.querySelector('.ta-search-results');
  if (searchInput && searchResults) {
    searchInput.addEventListener('input', function() {
      var q = this.value.toLowerCase().trim();
      if (!q || q.length < 1) {
        searchResults.style.display = 'none';
        return;
      }
      var matches = allTools.filter(function(t) {
        return t.label.toLowerCase().indexOf(q) !== -1;
      }).slice(0, 6);
      if (matches.length === 0) {
        searchResults.innerHTML = '<div class="ta-sr-empty">No tools found</div>';
        searchResults.style.display = 'block';
        return;
      }
      searchResults.innerHTML = matches.map(function(t) {
        return '<a href="' + t.href + '">' + esc(t.label) + '</a>';
      }).join('');
      searchResults.style.display = 'block';
    });
    /* Close search on outside click */
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.ta-search-wrap')) {
        searchResults.style.display = 'none';
      }
    });
    /* Enter to go to first result */
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        var firstLink = searchResults.querySelector('a');
        if (firstLink) window.location.href = firstLink.href;
      }
    });
  }

  /* --- Cmd+K shortcut --- */
  document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });

  /* Close mobile menu on link click */
  var mobileLinks = nav.querySelectorAll('.ta-mobile-menu a');
  for (var k = 0; k < mobileLinks.length; k++) {
    mobileLinks[k].addEventListener('click', function () {
      mobileMenu.classList.remove('ta-open');
      hamburger.classList.remove('ta-active');
    });
  }

  /* --- Listen for auth events --- */
  document.addEventListener('auth:login', updateAuthUI);
  document.addEventListener('auth:logout', updateAuthUI);
  document.addEventListener('auth:premium', updateAuthUI);

  function updateAuthUI(e) {
    var right = nav.querySelector('.ta-right');
    if (!right) return;
    right.innerHTML = authHTML(e.detail || null);
    bindAuthDropdown(right);
  }

  function bindAuthDropdown(container) {
    var trigger = container.querySelector('.ta-avatar-trigger');
    var dd = container.querySelector('.ta-dropdown');
    if (!trigger || !dd) return;
    trigger.addEventListener('click', function (ev) {
      ev.stopPropagation();
      dd.classList.toggle('ta-dd-open');
    });
    document.addEventListener('click', function () {
      dd.classList.remove('ta-dd-open');
    });
  }

  /* Initial bind */
  bindAuthDropdown(nav.querySelector('.ta-right'));

  /* --- Helper HTML builders --- */
  function buildHTML() {
    /* Mobile menu categories */
    var mobileCats = categories.map(function(c) {
      var toolLinks = c.tools.map(function(t) {
        var badge = t.popular ? ' <span class="ta-badge-sm">🔥</span>' : (t.badge ? ' <span class="ta-badge-sm">' + esc(t.badge) + '</span>' : '');
        return '<a href="' + t.href + '">' + esc(t.label) + badge + '</a>';
      }).join('');
      return '<div class="ta-mobile-cat">' +
               '<div class="ta-mobile-cat-label"><span class="ta-cat-dot" style="background:' + c.dot + '"></span>' + esc(c.label) + '</div>' +
               '<div class="ta-mobile-cat-links">' + toolLinks + '</div>' +
             '</div>';
    }).join('');

    return '' +
      '<div class="ta-nav-inner">' +
        '<a class="ta-logo" href="/">' +
          '<span class="ta-logo-mark"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></span>' +
          'ToolAspect' +
        '</a>' +
        '<div class="ta-search-wrap">' +
          '<svg class="ta-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>' +
          '<input type="text" class="ta-search-input" placeholder="Search 290+ tools\u2026" autocomplete="off">' +
          '<span class="ta-kbd">\u2318K</span>' +
          '<div class="ta-search-results"></div>' +
        '</div>' +
        '<div class="ta-nav-links">' +
          '<a href="/">Tools</a>' +
          '<a href="/about.html">About</a>' +
          '<a href="https://github.com/CoreAspectStu/utility-sites">GitHub</a>' +
        '</div>' +
        '<div class="ta-right">' + authHTML(null) + '</div>' +
        '<button class="ta-hamburger" aria-label="Menu"><span></span><span></span><span></span></button>' +
      '</div>' +
      '<div class="ta-mobile-menu">' + mobileCats + '</div>';
  }

  function authHTML(user) {
    if (user && user.uid) {
      var avatar = user.photoURL || '';
      var name = user.displayName || user.email || 'User';
      var initials = name.charAt(0).toUpperCase();
      var avatarEl = avatar
        ? '<img src="' + escAttr(avatar) + '" alt="" class="ta-avatar-img">'
        : '<span class="ta-avatar-init">' + initials + '</span>';
      return '' +
        '<div class="ta-auth-wrap">' +
          '<button class="ta-avatar-trigger">' + avatarEl + '</button>' +
          '<div class="ta-dropdown">' +
            '<div class="ta-dd-header">' +
              '<div class="ta-dd-name">' + esc(name) + '</div>' +
              '<div class="ta-dd-email">' + esc(user.email || '') + '</div>' +
            '</div>' +
            '<a href="/account/" class="ta-dd-item">Manage Subscription</a>' +
            '<button class="ta-dd-item" onclick="document.dispatchEvent(new CustomEvent(\'auth:logout\'))">Sign Out</button>' +
          '</div>' +
        '</div>';
    }
    return '<button class="ta-signin" onclick="document.dispatchEvent(new CustomEvent(\'auth:show-login\'))">Sign In</button>';
  }

  function esc(s) { var d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function escAttr(s) { return String(s == null ? '' : s).replace(/[&"'<>]/g, function (c) { return { '&': '&amp;', '"': '&quot;', "'": '&#39;', '<': '&lt;', '>': '&gt;' }[c]; }); }

  /* --- Site-wide footer with legal links (only if page has no footer) --- */
  /* Defer until DOM is ready so we don't inject before page's own footer exists */
  function injectFooter() {
    if (document.querySelector('footer.ta-footer') || document.querySelector('footer:not(.ta-footer)')) return;
    var f = document.createElement('footer');
    f.className = 'ta-footer';
    f.innerHTML =
      '<p>\u00A9 ' + new Date().getFullYear() + ' ToolAspect \u2014 All tools run in your browser, no data collected.</p>' +
      '<div class="ta-footer-links">' +
        '<a href="/about.html">About</a>' +
        '<a href="/contact.html">Contact</a>' +
        '<a href="/privacy.html">Privacy</a>' +
        '<a href="/terms.html">Terms</a>' +
        '<a href="/disclaimer.html">Disclaimer</a>' +
        '<a href="/developer-tools/">Developer</a>' +
        '<a href="/guides/">Guides</a>' +
      '<a href="/all-tools/">All Tools</a>' +
      '<a href="/converters/">Converters</a>' +
      '<a href="/finance-tools/">Finance</a>' +
      '<a href="/health-calculators/">Health</a>' +
      '<a href="/insurance-tools/">Insurance</a>' +
      '<a href="/legal-tools/">Legal</a>' +
      '<a href="/convert/">Convert</a>' +
      '<a href="/all-tools/">All Tools</a>' +
      '<a href="/finance-tools/">Finance</a>' +
        '<a href="/text-tools/">Text</a>' +
      '</div>';
    var fStyle = document.createElement('style');
    fStyle.textContent =
      '.ta-footer{border-top:1px solid var(--border);padding:2.5rem 1.5rem;text-align:center;color:var(--muted);font-size:.8rem;position:relative;z-index:1}' +
      '.ta-footer a{color:var(--text-secondary);transition:color .15s}' +
      '.ta-footer a:hover{color:var(--text)}' +
      '.ta-footer-links{display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem 1.5rem;margin-top:.75rem}';
    document.head.appendChild(fStyle);
    document.body.appendChild(f);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }

  /* ============================================================
     Scoped CSS — v3 Nav (Linear/Raycast inspired)
     ============================================================ */
  var NAV_CSS = '' +
  '.ta-nav{' +
    'position:sticky;top:0;z-index:900;' +
    'background:rgba(8,9,10,0.72);' +
    'backdrop-filter:blur(20px) saturate(1.5);' +
    '-webkit-backdrop-filter:blur(20px) saturate(1.5);' +
    'border-bottom:1px solid var(--border);' +
  '}' +
  '.ta-nav-inner{' +
    'max-width:1180px;margin:0 auto;' +
    'display:flex;align-items:center;gap:1.25rem;' +
    'padding:0 1.5rem;height:60px;' +
  '}' +
  /* Logo */
  '.ta-logo{' +
    'font-size:1rem;font-weight:600;letter-spacing:-0.02em;' +
    'display:flex;align-items:center;gap:.5rem;color:var(--text);flex-shrink:0;' +
  '}' +
  '.ta-logo-mark{' +
    'width:24px;height:24px;border-radius:6px;' +
    'background:linear-gradient(135deg, var(--primary), var(--primary-light));' +
    'display:flex;align-items:center;justify-content:center;' +
    'box-shadow:0 0 12px rgba(99,102,241,.3);flex-shrink:0;' +
  '}' +
  /* Search */
  '.ta-search-wrap{' +
    'flex:1;max-width:380px;position:relative;display:flex;align-items:center;' +
  '}' +
  '.ta-search-icon{' +
    'position:absolute;left:.65rem;opacity:.4;pointer-events:none;flex-shrink:0;' +
  '}' +
  '.ta-search-input{' +
    'flex:1;width:100%;' +
    'background:rgba(255,255,255,.03);' +
    'border:1px solid var(--border);' +
    'border-radius:8px;' +
    'padding:.45rem .8rem .45rem 2rem;' +
    'color:var(--text);font-size:.85rem;font-family:var(--font-sans);' +
    'transition:border-color .2s,box-shadow .2s,background .2s;' +
  '}' +
  '.ta-search-input::placeholder{color:var(--muted)}' +
  '.ta-search-input:focus{' +
    'outline:none;' +
    'border-color:rgba(99,102,241,.3);' +
    'background:rgba(255,255,255,.04);' +
    'box-shadow:0 0 0 3px rgba(99,102,241,.08);' +
  '}' +
  '.ta-kbd{' +
    'position:absolute;right:.5rem;' +
    'font-family:var(--font-mono);font-size:.7rem;' +
    'padding:.1rem .35rem;border-radius:4px;' +
    'background:rgba(255,255,255,.06);border:1px solid var(--border);' +
    'color:var(--muted);pointer-events:none;' +
  '}' +
  '.ta-search-results{' +
    'position:absolute;top:calc(100% + 6px);left:0;right:0;' +
    'background:var(--surface);border:1px solid var(--border);' +
    'border-radius:8px;box-shadow:var(--shadow-lg);' +
    'display:none;z-index:960;overflow:hidden;padding:.4rem;' +
  '}' +
  '.ta-search-results a{' +
    'display:block;padding:.5rem .75rem;font-size:.85rem;' +
    'color:var(--text-secondary);border-radius:6px;' +
    'transition:background .12s,color .12s;' +
  '}' +
  '.ta-search-results a:hover{background:var(--primary-glow);color:var(--text)}' +
  '.ta-sr-empty{padding:.75rem;text-align:center;color:var(--muted);font-size:.82rem}' +
  /* Nav links */
  '.ta-nav-links{display:flex;gap:.25rem;margin-left:auto;align-items:center}' +
  '.ta-nav-links a{' +
    'font-size:.85rem;font-weight:500;color:var(--text-secondary);' +
    'padding:.4rem .7rem;border-radius:6px;' +
    'transition:color .15s,background .15s;' +
  '}' +
  '.ta-nav-links a:hover{color:var(--text);background:rgba(255,255,255,.04)}' +
  /* Right section */
  '.ta-right{flex-shrink:0;position:relative}' +
  '.ta-signin{' +
    'font-size:.82rem;font-weight:500;' +
    'padding:.4rem .9rem;border-radius:6px;' +
    'background:rgba(255,255,255,.05);border:1px solid var(--border);' +
    'color:var(--text-secondary);cursor:pointer;' +
    'transition:all .2s;' +
  '}' +
  '.ta-signin:hover{border-color:var(--border-hover);color:var(--text);background:rgba(255,255,255,.07)}' +
  /* Avatar */
  '.ta-avatar-trigger{' +
    'width:32px;height:32px;border-radius:50%;' +
    'border:1px solid var(--border);overflow:hidden;cursor:pointer;' +
    'background:var(--bg-elevated);display:flex;align-items:center;justify-content:center;' +
  '}' +
  '.ta-avatar-img{width:100%;height:100%;object-fit:cover}' +
  '.ta-avatar-init{font-size:.8rem;font-weight:600;color:var(--primary)}' +
  '.ta-dropdown{' +
    'position:absolute;right:0;top:calc(100% + 8px);' +
    'background:var(--surface);border:1px solid var(--border);border-radius:8px;' +
    'box-shadow:var(--shadow);min-width:200px;display:none;z-index:950;overflow:hidden;' +
  '}' +
  '.ta-dropdown.ta-dd-open{display:block}' +
  '.ta-dd-header{padding:.75rem;border-bottom:1px solid var(--border)}' +
  '.ta-dd-name{font-weight:600;font-size:.9rem}' +
  '.ta-dd-email{font-size:.75rem;color:var(--muted);margin-top:2px}' +
  '.ta-dd-item{' +
    'display:block;width:100%;text-align:left;' +
    'padding:.6rem .75rem;font-size:.85rem;color:var(--text);' +
    'background:none;border:none;cursor:pointer;transition:background .15s;' +
  '}' +
  '.ta-dd-item:hover{background:rgba(99,102,241,.06)}' +
  /* Hamburger */
  '.ta-hamburger{' +
    'display:none;background:none;border:none;cursor:pointer;' +
    'padding:4px;flex-direction:column;gap:4px;flex-shrink:0;' +
  '}' +
  '.ta-hamburger span{' +
    'display:block;width:20px;height:2px;background:var(--text);border-radius:1px;' +
    'transition:transform .2s,opacity .2s;' +
  '}' +
  '.ta-hamburger.ta-active span:nth-child(1){transform:rotate(45deg) translate(4px,4px)}' +
  '.ta-hamburger.ta-active span:nth-child(2){opacity:0}' +
  '.ta-hamburger.ta-active span:nth-child(3){transform:rotate(-45deg) translate(4px,-4px)}' +
  /* Mobile menu */
  '.ta-mobile-menu{' +
    'display:none;position:absolute;top:100%;left:0;right:0;' +
    'background:var(--bg-elevated);border-bottom:1px solid var(--border);' +
    'max-height:80vh;overflow-y:auto;-webkit-overflow-scrolling:touch;' +
    'padding:1rem;z-index:890;' +
  '}' +
  '.ta-mobile-menu.ta-open{display:block}' +
  '.ta-mobile-cat{margin-bottom:1.25rem}' +
  '.ta-mobile-cat-label{' +
    'font-size:.72rem;font-weight:600;color:var(--muted);' +
    'text-transform:uppercase;letter-spacing:.06em;' +
    'margin-bottom:.5rem;display:flex;align-items:center;gap:.4rem;' +
  '}' +
  '.ta-cat-dot{width:7px;height:7px;border-radius:50%;display:inline-block}' +
  '.ta-mobile-cat-links{display:flex;flex-direction:column;gap:.1rem}' +
  '.ta-mobile-cat-links a{' +
    'padding:.5rem .6rem;font-size:.88rem;color:var(--text-secondary);' +
    'border-radius:6px;transition:background .12s,color .12s;' +
  '}' +
  '.ta-mobile-cat-links a:hover{background:rgba(255,255,255,.04);color:var(--text)}' +
  '.ta-badge-sm{font-size:.7rem;margin-left:.2rem}' +
  /* Responsive */
  '@media(max-width:768px){' +
    '.ta-nav-links{display:none}' +
    '.ta-hamburger{display:flex}' +
    '.ta-search-wrap{max-width:none;flex:1}' +
    '.ta-right{display:none}' +
    '.ta-kbd{display:none}' +
  '}' +
  '@media(max-width:480px){' +
    '.ta-nav-inner{padding:0 1rem;height:54px}' +
  '}';

  /* Inject scoped styles — MUST be after NAV_CSS definition */
  var style = document.createElement('style');
  style.textContent = NAV_CSS;
  document.head.appendChild(style);

})();
/* EOF */
