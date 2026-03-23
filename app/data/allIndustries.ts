export interface IndustryItem {
  title: string
  slug: string
  icon: string
  accentColor: string
  description: string
  /** SEO meta description (doc-aligned) */
  metaDescription: string
  coverageChips: Array<{ label: string; slug: string }>
}

export const allIndustries: IndustryItem[] = [
  {
    title: 'Fintech & Digital Payments',
    slug: 'fintech-digital-payments',
    icon: 'mdi:credit-card-outline',
    accentColor: '#2563EB',
    description: 'Payment processors, neobanks, lending platforms, and embedded finance companies face a uniquely complex risk profile — combining cyber exposure with financial regulation and third-party dependency.',
    metaDescription:
      'Emerging risk insurance for fintech and digital payments: cyber, technology & AI liability, fraud, and governance coverage. Mokshya OS matches specialist markets to your business model.',
    coverageChips: [
      { label: 'Cyber & Infrastructure Risk', slug: 'cyber-infrastructure-risk' },
      { label: 'Technology & AI Liability', slug: 'technology-ai-liability' },
      { label: 'Fraud, Identity & Internal Risk', slug: 'fraud-identity-internal-risk' },
      { label: 'Governance & Leadership Risk', slug: 'governance-leadership-risk' },
    ],
  },
  {
    title: 'Web3 & Digital Assets',
    slug: 'web3-digital-assets',
    icon: 'mdi:link-variant',
    accentColor: '#0D9488',
    description: 'Crypto exchanges, DeFi protocols, DAOs, and NFT platforms operate in a high-velocity, low-precedent risk environment. Mokshya works with specialist markets to place coverage that actually fits.',
    metaDescription:
      'Web3 and digital asset insurance: DeFi, smart contracts, treasury, and fraud coverage placed with specialist markets. Mokshya OS for exchanges, DAOs, and NFT platforms.',
    coverageChips: [
      { label: 'Digital Asset & DeFi Risk', slug: 'digital-asset-defi-risk' },
      { label: 'Smart Contract Risk', slug: 'smart-contract-risk' },
      { label: 'Treasury & Liquidity Risk', slug: 'treasury-liquidity-risk' },
      { label: 'Fraud, Identity & Internal Risk', slug: 'fraud-identity-internal-risk' },
    ],
  },
  {
    title: 'AI & Autonomous Systems',
    slug: 'ai-autonomous-systems',
    icon: 'mdi:robot-outline',
    accentColor: '#B45309',
    description: 'Companies building or deploying AI models — in healthcare, finance, HR, legal, or autonomous systems — face liability questions that didn\'t exist five years ago. Mokshya is developing frameworks for this.',
    metaDescription:
      'AI and autonomous systems insurance: AI liability, tech E&O, and cyber coverage for healthcare, finance, HR, and robotics. Mokshya OS builds frameworks for high-stakes AI deployment.',
    coverageChips: [
      { label: 'AI & Autonomous Risk', slug: 'ai-autonomous-risk' },
      { label: 'Technology & AI Liability', slug: 'technology-ai-liability' },
      { label: 'Cyber & Infrastructure Risk', slug: 'cyber-infrastructure-risk' },
    ],
  },
  {
    title: 'SaaS & Cloud Infrastructure',
    slug: 'saas-cloud-infrastructure',
    icon: 'mdi:cloud-outline',
    accentColor: '#2563EB',
    description: 'Software companies, developer platforms, and cloud infrastructure providers carry significant liability for the systems their clients depend on. From uptime SLAs to data loss, Mokshya covers the modern stack.',
    metaDescription:
      'SaaS and cloud infrastructure insurance: technology liability, cyber risk, and operational resilience for uptime SLAs, APIs, and client data. Mokshya OS covers the modern stack.',
    coverageChips: [
      { label: 'Technology & AI Liability', slug: 'technology-ai-liability' },
      { label: 'Cyber & Infrastructure Risk', slug: 'cyber-infrastructure-risk' },
      { label: 'Operational Resilience Risk', slug: 'operational-resilience-risk' },
    ],
  },
  {
    title: 'Healthcare Technology',
    slug: 'healthcare-technology',
    icon: 'mdi:hospital-box-outline',
    accentColor: '#6D28D9',
    description: 'Digital health platforms, medical AI, telemedicine, and health data companies sit at the intersection of cyber, professional liability, and regulatory risk — all of which are evolving rapidly.',
    metaDescription:
      'Healthcare technology insurance: cyber, AI liability, medical decision support, and governance coverage for digital health, telemedicine, and health data platforms. Mokshya OS.',
    coverageChips: [
      { label: 'Cyber & Infrastructure Risk', slug: 'cyber-infrastructure-risk' },
      { label: 'Technology & AI Liability', slug: 'technology-ai-liability' },
      { label: 'AI & Autonomous Risk', slug: 'ai-autonomous-risk' },
      { label: 'Governance & Leadership Risk', slug: 'governance-leadership-risk' },
    ],
  },
  {
    title: 'Enterprise & Corporate',
    slug: 'enterprise-corporate',
    icon: 'mdi:office-building-outline',
    accentColor: '#0D2B4E',
    description: 'Listed companies, pre-IPO businesses, and large enterprises face governance, fraud, and cyber risks at scale — with regulatory scrutiny from the SEC, FCA, and global securities regulators.',
    metaDescription:
      'Enterprise and corporate emerging risk: D&O and governance, fraud and internal crime, cyber, and quantum readiness for listed and pre-IPO companies. Mokshya OS global placement.',
    coverageChips: [
      { label: 'Governance & Leadership Risk', slug: 'governance-leadership-risk' },
      { label: 'Fraud, Identity & Internal Risk', slug: 'fraud-identity-internal-risk' },
      { label: 'Cyber & Infrastructure Risk', slug: 'cyber-infrastructure-risk' },
      { label: 'Quantum Risk', slug: 'quantum-risk' },
    ],
  },
]

export function findIndustryBySlug(slug: string): IndustryItem | undefined {
  return allIndustries.find(i => i.slug === slug)
}
