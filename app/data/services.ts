export interface Service {
  id: string
  title: string
  description: string
  icon: string
  image: string
}

/** Order matches Figma (Mokshya-os): row1 L→R, then row2 L→R — 4×2 grid */
export const services: Service[] = [
  {
    id: 'cyber',
    title: 'Cyber insurance',
    description: 'Defense against data breaches and digital threats.',
    icon: 'mdi:shield-lock',
    image: '/images/offers/harper_cyber.svg',
  },
  {
    id: 'bonds',
    title: 'Bonds',
    description: 'Guarantee bond payments to secure contracts and financing.',
    icon: 'mdi:handshake',
    image: '/images/offers/harper_bond_service.svg',
  },
  {
    id: 'commercial-property',
    title: 'Commercial property insurance',
    description: 'Safeguard buildings, equipment, and inventory',
    icon: 'mdi:office-building',
    image: '/images/offers/harper_commercial_property.svg',
  },
  {
    id: 'umbrella',
    title: 'Umbrella insurance',
    description: 'Extra protection for when the unexpected happens.',
    icon: 'mdi:umbrella',
    image: '/images/offers/harper_umbrella.svg',
  },
  {
    id: 'commercial-auto',
    title: 'Commercial auto insurance',
    description: 'From one vehicle to a full fleet.',
    icon: 'mdi:truck',
    image: '/images/offers/harper_commercial_auto.svg',
  },
  {
    id: 'garage-liability',
    title: 'Garage liability insurance',
    description: 'Protection for servicing, storing, or moving vehicles.',
    icon: 'mdi:garage',
    image: '/images/offers/harper_garage_liability.svg',
  },
  {
    id: 'professional-liability',
    title: 'Professional Liability insurance',
    description: '100% success placing tech E&O with no AI exclusions',
    icon: 'mdi:briefcase-check',
    image: '/images/offers/harper_professional_liability.svg',
  },
  {
    id: 'general-liability',
    title: 'General liability insurance',
    description: 'The right protection, no boilerplate fluff',
    icon: 'mdi:shield-check',
    image: '/images/offers/harper_general_liability.svg',
  },
]
