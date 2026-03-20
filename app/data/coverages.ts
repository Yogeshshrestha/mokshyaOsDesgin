export interface Coverage {
  id: string
  title: string
  description: string
  icon: string
  image?: string
}

export const coverages: Coverage[] = [
  {
    id: 'equipment',
    title: 'Equipment',
    description: 'Protect the tools and machinery your business depends on, from job site equipment to specialized instruments.',
    icon: 'mdi:wrench',
  },
  {
    id: 'errors-and-omissions',
    title: 'Errors and Omissions',
    description: 'Shield your business from claims of negligence, mistakes, or failure to deliver professional services as promised.',
    icon: 'mdi:file-alert',
    image: '/images/offers/harper_professional_liability.svg',
  },
  {
    id: 'general-liability',
    title: 'General Liability',
    description: 'The foundational coverage every business needs — protection against third-party bodily injury, property damage, and advertising claims.',
    icon: 'mdi:shield-check',
    image: '/images/offers/harper_general_liability.svg',
  },
  {
    id: 'liquor-liability',
    title: 'Liquor Liability',
    description: 'Essential for businesses that serve, sell, or distribute alcohol — covering claims arising from alcohol-related incidents.',
    icon: 'mdi:glass-cocktail',
  },
  {
    id: 'medical-malpractice',
    title: 'Medical Malpractice',
    description: 'Coverage for healthcare providers against claims of errors, negligence, or omissions in patient care.',
    icon: 'mdi:hospital-box',
  },
  {
    id: 'product-liability',
    title: 'Product Liability',
    description: 'Protection for manufacturers, distributors, and retailers against claims from defective or harmful products.',
    icon: 'mdi:package-variant-closed',
  },
  {
    id: 'professional-liability',
    title: 'Professional Liability',
    description: 'Covers claims of professional negligence, errors, or omissions that result in financial loss to your clients.',
    icon: 'mdi:briefcase-check',
    image: '/images/offers/harper_professional_liability.svg',
  },
  {
    id: 'surety-bonds',
    title: 'Surety Bonds',
    description: 'Guarantee bond payments to secure contracts, meet licensing requirements, and build client confidence.',
    icon: 'mdi:handshake',
    image: '/images/offers/harper_bond_service.svg',
  },
  {
    id: 'umbrella',
    title: 'Umbrella',
    description: 'Extra liability protection that kicks in when your primary policy limits are exceeded — essential for high-exposure businesses.',
    icon: 'mdi:umbrella',
    image: '/images/offers/harper_umbrella.svg',
  },
  {
    id: 'workers-compensation',
    title: 'Workers Compensation',
    description: 'Mandatory coverage that protects employees injured on the job and shields your business from related lawsuits.',
    icon: 'mdi:hard-hat',
  },
]
