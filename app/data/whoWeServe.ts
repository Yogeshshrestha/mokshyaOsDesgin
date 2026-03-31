/** Who we serve — Figma Mokshya-os (node 32184:14899) */

export const whoWeServeHero = {
  eyebrow: 'The Kavaach approach',
  titleLines: ['Six Audiences. One Platform.', 'Each with a job to do.'],
  bodyItalic:
    'Cyber coverage is live for instant bind. AI, digital asset, quantum, and governance placement in development. Select your role to enter.',
  primaryCta: { label: 'Enter Cyber Management', to: '/coverages#quote' },
  secondaryCta: { label: 'How it Works', to: '/how-we-work' },
}

export type AudienceAccent =
  | 'buyer'
  | 'broker'
  | 'underwriter'
  | 'cro'
  | 'board'
  | 'reinsurer'

export interface AudienceCard {
  id: string
  accent: AudienceAccent
  initials: string
  title: string
  roles: string[]
  quote: string
  bullets: string[]
  ctaLabel: string
  ctaTo: string
}

export const whoWeServeAudiences: AudienceCard[] = [
  {
    id: 'buyer',
    accent: 'buyer',
    initials: 'RO',
    title: 'Buyer (Risk Owner)',
    roles: ['CFO', 'CRO', 'RISK OWNER'],
    quote:
      'The board is asking what a cyberattack would cost, but our risk posture changes every hour.',
    bullets: [
      'Real-time quantification of financial exposure.',
      'Automated insurance renewals with pre-filled telemetry.',
      'Direct line to technical mitigation grants.',
    ],
    ctaLabel: 'Enter Buyer Portal',
    ctaTo: '#',
  },
  {
    id: 'broker',
    accent: 'broker',
    initials: 'BK',
    title: 'Broker',
    roles: ['ACCOUNT EXEC', 'BROKER ASSISTANT'],
    quote:
      'PDF questionnaires. Slow submissions. We need to be advisors, not data entry clerks.',
    bullets: [
      'Instant quote generation for mid-market risks',
      'Benchmarking tools against peer risk profiles',
      'White-labeled reports for client advisory',
    ],
    ctaLabel: 'ENTER BROKER WORKSPACE',
    ctaTo: '#',
  },
  {
    id: 'underwriter',
    accent: 'underwriter',
    initials: 'UW',
    title: 'Underwriter',
    roles: ['UNDERWRITER', 'SENIOR UNDERWRITER'],
    quote:
      'Submissions that don\'t reflect actual posture lead to mis-pricing. We need signals, not noise.',
    bullets: [
      'Verified telemetry direct from the client stack',
      'Active monitoring alerts on insured portfolio',
      'Algorithmic triage for high-volume submissions',
    ],
    ctaLabel: 'ENTER UNDERWRITER CONSOLE',
    ctaTo: '#',
  },
  {
    id: 'cro',
    accent: 'cro',
    initials: 'CR',
    title: 'CRO / Risk Owner',
    roles: ['CHIEF RISK OFFICER'],
    quote:
      'Cyber sits in ten buckets and provides no unified view of enterprise resilience.',
    bullets: [
      'Integrated dashboard for all risk sectors',
      'Scenario stress testing for systemic changes',
      'Attestation readiness for global regulations',
    ],
    ctaLabel: 'ENTER CRO DASHBOARD',
    ctaTo: '#',
  },
  {
    id: 'board',
    accent: 'board',
    initials: 'BD',
    title: 'Board / Executive',
    roles: ['DIRECTOR', 'C-SUITE', 'BOARD MEMBER'],
    quote:
      'We receive CISO reports we don\'t understand. We need the bottom-line impact.',
    bullets: [
      'Financial-grade governance dashboards',
      'Clarity on the cost of remaining cyber',
      'Continuous monitoring of enterprise risk thresholds',
    ],
    ctaLabel: 'ENTER BOARD VIEW',
    ctaTo: '#',
  },
  {
    id: 'reinsurer',
    accent: 'reinsurer',
    initials: 'RE',
    title: 'Reinsurer',
    roles: ['PORTFOLIO MANAGER', 'TREATY UNDERWRITER'],
    quote:
      'Cyber aggregation is opaque. We need to see through the treaties to the actual endpoints.',
    bullets: [
      'Unified data format for treaty performance',
      'Real-time systemic accumulation modeling',
      'Transparent risk reporting across whole portfolios',
    ],
    ctaLabel: 'ENTER REINSURER PORTAL',
    ctaTo: '#',
  },
]

export const whoWeServeSecondaryCta = {
  heading: 'Unsure where you fit?',
  body:
    'Contact our Sentinel team for a guided onboarding experience across your entire organization.',
  buttonLabel: 'Contact Sentinel',
  buttonTo: 'mailto:hello@mokshya.io',
}
