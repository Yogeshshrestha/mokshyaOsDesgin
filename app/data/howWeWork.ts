/** Figma: Mokshya-os — How we work page (node 32177:9192) */

export const howWeWorkHero = {
  eyebrow: 'The Kavaach approach',
  titleLines: ['Two lenses. One dataset.', 'Coverage that actually pays.'],
  quoteLines: [
    '"Most placements fail at claim time because the submission',
    'never reflected how the risk actually operates. Ours do."',
  ],
  primaryCta: { label: 'Enter the Platform', to: '#' },
  secondaryCta: { label: 'See cyber in detail', to: '/coverages' },
}

export interface MethodologyColumn {
  id: string
  lensLabel: string
  title: string
  variant: 'security' | 'risk' | 'gap'
  items: { type: 'check' | 'x'; title: string; subtitle?: string }[]
}

export const methodologyColumns: MethodologyColumn[] = [
  {
    id: 'technical',
    lensLabel: 'Security Lens (CISO)',
    title: 'Technical Signal',
    variant: 'security',
    items: [
      { type: 'check', title: 'CVE management and patch cycles' },
      { type: 'check', title: 'MFA deployment density' },
      { type: 'check', title: 'Endpoint telemetry (EDR/XDR)' },
    ],
  },
  {
    id: 'financial',
    lensLabel: 'Risk Lens (CRO)',
    title: 'Financial Exposure',
    variant: 'risk',
    items: [
      { type: 'check', title: 'Premium efficiency & ROI' },
      { type: 'check', title: 'Policy limits vs. PML' },
      { type: 'check', title: 'Business interruption volatility' },
    ],
  },
  {
    id: 'gap',
    lensLabel: 'The Gap',
    title: 'What gets lost',
    variant: 'gap',
    items: [
      {
        type: 'x',
        title: 'Unquantified Financial Cost',
        subtitle: 'Technical fixes without risk context.',
      },
      {
        type: 'x',
        title: 'Denial Risk',
        subtitle: 'Incorrectly stated controls during claims.',
      },
      {
        type: 'x',
        title: 'Hidden Exposure',
        subtitle: 'Supply chain signals ignored.',
      },
    ],
  },
]

export const methodologyIntro = {
  eyebrow: 'The methodology',
  heading: 'Bridging the divide.',
  bodyLines: [
    'Traditional insurance relies on static questionnaires. We bridge the gap between',
    'technical reality and financial exposure using the Mokshya OS signal platform.',
  ],
}

export interface TimelineStep {
  n: number
  label: string
  title: string
  bodyLines: string[]
  chip: string
  /** Pill on left or right side of timeline */
  timing?: string
  timingSide: 'left' | 'right'
  /** Content aligns left or right of axis */
  contentSide: 'left' | 'right'
}

export const platformTimeline = {
  eyebrow: 'The platform',
  heading: 'From first question to bound policy',
  steps: [
    {
      n: 1,
      label: 'ASSESS',
      title: '',
      bodyLines: ['High-level environmental scoping and risk profiling.'],
      chip: 'PRIMARY CONTEXT',
      timing: '8 min',
      timingSide: 'left',
      contentSide: 'right',
    },
    {
      n: 2,
      label: 'VERIFY',
      title: '',
      bodyLines: ['Technical signal ingestion across 20 security', 'domains.'],
      chip: 'API INTEGRATION',
      timing: '5 min',
      timingSide: 'right',
      contentSide: 'left',
    },
    {
      n: 3,
      label: 'QUANTIFY',
      title: '',
      bodyLines: ['Generation of the Management Risk Index (MRI)', 'score.'],
      chip: 'MOKSHYA OS',
      timing: 'Instant MRI',
      timingSide: 'left',
      contentSide: 'right',
    },
    {
      n: 4,
      label: 'COMPARE',
      title: '',
      bodyLines: ["Automated quote requests to Lloyd's and domestic", 'syndicates.'],
      chip: 'MARKET BENCHMARK',
      timing: 'Days',
      timingSide: 'right',
      contentSide: 'left',
    },
    {
      n: 5,
      label: 'BUY',
      title: '',
      bodyLines: ['Final binding through the Kavaach digital dashboard.'],
      chip: 'FULLY BOUND',
      timing: 'Minutes',
      timingSide: 'left',
      contentSide: 'right',
    },
  ] satisfies TimelineStep[],
  promise: {
    eyebrow: 'The Kavaach Promise',
    statLine: {
      before: 'The industry average for cyber claim denial stands at ',
      stat: '67%',
      after: '.',
    },
    bodyLines: [
      'Our verified signal approach reduces this exposure by ensuring the policy matches the technical reality from',
      'Day 1.',
    ],
  },
}

export interface VerificationRow {
  label: 'Claimed' | 'Verified'
  value: string
  tone: 'green' | 'red' | 'orange'
}

export interface SignalCard {
  id: string
  title: string
  provider: string
  badge: string
  rows: VerificationRow[]
}

export const signalCards: SignalCard[] = [
  {
    id: 'identity',
    title: 'Identity',
    provider: 'Provider: Okta',
    badge: 'RF-C01',
    rows: [
      { label: 'Claimed', value: '100% MFA', tone: 'green' },
      { label: 'Verified', value: '82% Active', tone: 'red' },
    ],
  },
  {
    id: 'backup',
    title: 'Backup',
    provider: 'Provider: Veeam',
    badge: 'RF-C02',
    rows: [
      { label: 'Claimed', value: 'Daily', tone: 'green' },
      { label: 'Verified', value: 'Unencrypted', tone: 'orange' },
    ],
  },
  {
    id: 'endpoint',
    title: 'Endpoint',
    provider: 'Provider: CrowdStrike',
    badge: 'RF-C03',
    rows: [
      { label: 'Claimed', value: 'Active', tone: 'green' },
      { label: 'Verified', value: '12 Offline', tone: 'red' },
    ],
  },
]

export const signalIntelligence = {
  heading: 'What we mean by signal intelligence',
  introLines: [
    'A signal is more than a checkbox. We verify core controls—MFA, backup immutability, and EDR',
    'health—to build a defensible risk narrative for underwriters.',
  ],
}

export interface SignalStrip {
  title: string
  subtitle: string
  impact: string
  fromValue: string
  toValue: string
}

export const signalStrips: SignalStrip[] = [
  {
    title: 'Enforce Admin MFA',
    subtitle: 'Removes Privileged Access risk',
    impact: '↑ Tier 1',
    fromValue: '1.3x',
    toValue: '1.0x',
  },
  {
    title: 'Air-gap Backup Vaults',
    subtitle: 'Prevents Ransomware total-loss',
    impact: '↑ Tier 2',
    fromValue: '1.1x',
    toValue: '0.95x',
  },
]

export interface ComparisonRow {
  traditional: string
  dimension: string
  kavaach: string
  highlight?: boolean
}

export const comparisonTable = {
  heading: 'How this compares',
  columns: {
    traditional: 'Traditional Broker',
    dimension: 'Dimension',
    kavaach: 'Kavaach Platform',
  },
  rows: [
    {
      traditional: '200+ manual rows, annual',
      dimension: 'Questionnaire',
      kavaach: '8-min technical scoping',
    },
    {
      traditional: 'Subjective, point-in-time',
      dimension: 'Data Quality',
      kavaach: 'Continuous technical signal',
    },
    {
      traditional: '4-6 weeks iterative',
      dimension: 'Time to Quote',
      kavaach: 'Instant MRI, 3-day bind',
    },
    {
      traditional: 'Generic summaries',
      dimension: 'Board Reporting',
      kavaach: 'Financial exposure MRI',
    },
    {
      traditional: '67% denial rate avg',
      dimension: 'Claim Outcome',
      kavaach: 'Claims-defensible dataset',
      highlight: true,
    },
  ] satisfies ComparisonRow[],
}

export interface OutputCard {
  id: string
  audience: string
  title: string
  descriptionLines: string[]
  variant: 'teal' | 'red'
}

export const platformOutputs = {
  heading: 'What comes out of the platform',
  subtitle: 'Structured intelligence for every stakeholder.',
  cards: [
    {
      id: 'mri',
      audience: 'CFO, Board',
      title: 'Financial Exposure MRI',
      descriptionLines: [
        'Deterministic dollar-value model of probable',
        'maximum loss across primary attack vectors.',
      ],
      variant: 'teal',
    },
    {
      id: 'red-flag',
      audience: 'CISO, Security',
      title: 'Red Flag Audit',
      descriptionLines: [
        'Direct mapping of technical control failures to',
        'specific policy exclusion risks.',
      ],
      variant: 'red',
    },
    {
      id: 'gap-analysis',
      audience: 'Risk Manager',
      title: 'Coverage Gap Analysis',
      descriptionLines: [
        'Side-by-side comparison of current policy',
        'wording vs. the verified environment.',
      ],
      variant: 'teal',
    },
    {
      id: 'roi',
      audience: 'CFO',
      title: 'Premium ROI Table',
      descriptionLines: [
        'Quantification of how technical improvements',
        'lower insurance costs over 12 months.',
      ],
      variant: 'teal',
    },
    {
      id: 'submission',
      audience: 'Underwriter',
      title: 'Structured Submission',
      descriptionLines: [
        "Machine-readable dataset used to secure Tier-1",
        "terms from Lloyd's syndicates.",
      ],
      variant: 'teal',
    },
    {
      id: 'quarterly',
      audience: 'Board',
      title: 'Quarterly Summary',
      descriptionLines: [
        'High-level risk posture over time, mapped against',
        'industry peer benchmarks.',
      ],
      variant: 'teal',
    },
  ] satisfies OutputCard[],
}

export const finalCta = {
  heading: 'Ready to see your MRI score?',
  bodyLines: [
    'Stop guessing on your cyber insurance. Get the technical validation',
    'you need to protect your balance sheet.',
  ],
  buttonLabel: 'Start your cyber assessment',
  buttonTo: '/coverages#quote',
}
