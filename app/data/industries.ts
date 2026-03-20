export interface Industry {
  id: string
  tab: string
  title: string
  description: string
  icon: string
  image?: string
}

export const industries: Industry[] = [
  {
    id: 'aerospace',
    tab: 'Aerospace',
    title: 'Aerospace, Defense, & Manufacturing',
    description: 'Coverage for high-stakes industries where compliance, liability, and contracts leave no room for error.',
    icon: 'mdi:airplane',
    image: '/images/experties/harper_aerospace_defense_and_manufacturing.svg',
  },
  {
    id: 'tech',
    tab: 'Tech',
    title: 'Technology and Digital Innovation',
    description: 'Protection for software companies, AI developers, and platforms facing evolving cyber and regulatory risks.',
    icon: 'mdi:laptop',
    image: '/images/experties/harper_technology_and_innovation.svg',
  },
  {
    id: 'retail',
    tab: 'Retail',
    title: 'Consumer Goods & Retail',
    description: 'Product liability, recall, and reputation coverage for CPG, apparel, and retail—online or off.',
    icon: 'mdi:shopping',
    image: '/images/experties/harper_consumer_goods_and_retail.svg',
  },
  {
    id: 'transportation',
    tab: 'Transportation',
    title: 'Automotive & Transportation',
    description: 'Built for used car dealers, tow truck operators, service providers, logistics, and freight operations navigating modern mobility risks.',
    icon: 'mdi:car',
    image: '/images/experties/harper_automotive_and_transportation.svg',
  },
  {
    id: 'public',
    tab: 'Public',
    title: 'Public Sector',
    description: 'Tailored programs for local government and public entities with layered liability and regulatory needs.',
    icon: 'mdi:account-group',
  },
  {
    id: 'care',
    tab: 'Care',
    title: 'Care Providers',
    description: 'Insurance for daycares, adult care, nursing homes, and assisted living facilities.',
    icon: 'mdi:heart-pulse',
    image: '/images/experties/harper_care_providers.svg',
  },
  {
    id: 'hospitality',
    tab: 'Hospitality',
    title: 'Hospitality',
    description: 'Coverage tailored for hotels, bars, restaurants, taverns, and more, to protect an industry where service and safety go hand in hand.',
    icon: 'mdi:food-fork-drink',
    image: '/images/experties/harper_hospitality.svg',
  },
  {
    id: 'security',
    tab: 'Security',
    title: 'Security Guards',
    description: 'Protection for armed and unarmed security guards, covering the unique risks of keeping people and property safe.',
    icon: 'mdi:security',
    image: '/images/experties/harper_security_guards.svg',
  },
  {
    id: 'finances',
    tab: 'Finances',
    title: 'Professional & Financial Services',
    description: 'Sophisticated liability coverage for consultants, lawyers, advisors, and firms managing sensitive client trust.',
    icon: 'mdi:finance',
    image: '/images/experties/harper_professional_and_financial_services.svg',
  },
  {
    id: 'ventures',
    tab: 'Ventures',
    title: 'Emerging & Complex Ventures',
    description: 'Coverage for high-stakes industries where compliance, liability, and contracts leave no room for error.',
    icon: 'mdi:rocket-launch',
    image: '/images/experties/harper_emerging_and_complex_ventures.svg',
  },
]
