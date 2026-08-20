import molecularHero from './assets/nexacure/molecular-hero.png';

// Business configuration
export const config = {
  // Business Information
  businessName: 'NEXACURE PHARMA',
  businessType: 'PHARMACEUTICALS',
  tagline: 'Pharmaceutical-focused organization in Hyderabad.',
  established: '13 June 2023',
  establishedShort: '2023',

  // Contact Information - EDIT THESE
  whatsapp: '918639866876',
  email: 'support@nexacurepharma.in',
  
  // Business Hours - EDIT THESE
  // Address
  address: {
    businessName: 'NEXACURE PHARMA',
    street: '19-4-14/1/6, Back Side Amodi Garden',
    area: 'Bandlaguda, Chandrayangutta',
    circle: 'Circle 1',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '',
    country: 'India',
  },

  // Registration Details
  registration: {
    number: 'SEA/HYD/ACL/A4/1309297/2026',
    registeredDate: '11 April 2026',
    businessType: 'PHARMACEUTICALS',
    act: 'Telangana Shops & Establishments Act, 1988',
  },

  // Local image assets - no external image service is required.
  images: {
    hero: molecularHero,
  },

  // SEO
  seo: {
    title: 'NEXACURE PHARMA | Pharmaceutical Healthcare Solutions',
    description: 'NEXACURE PHARMA is a pharmaceutical-focused commercial establishment in Hyderabad, Telangana, India.',
    keywords: 'NEXACURE PHARMA, pharmaceuticals, Hyderabad, Telangana',
  },
};

// Service cards data
export const services = [
  {
    id: 1,
    icon: 'Pill',
    title: 'Medicine Enquiry',
    description: 'Need to check a medicine or make a pharmacy-related enquiry? Contact our team and share the details of your request.',
    cta: 'Make an Enquiry',
  },
  {
    id: 2,
    icon: 'ClipboardList',
    title: 'Prescription Enquiry',
    description: 'Submit your prescription through our enquiry form for pharmacy review.',
    cta: 'Submit Prescription',
  },
  {
    id: 3,
    icon: 'Heart',
    title: 'OTC Assistance',
    description: 'Get assistance with general over-the-counter product enquiries.',
    cta: 'Ask Us',
  },
  {
    id: 4,
    icon: 'Stethoscope',
    title: 'Healthcare Enquiries',
    description: 'Have a general pharmacy or healthcare product enquiry? We\'re here to help.',
    cta: 'Contact Us',
  },
  {
    id: 5,
    icon: 'Headphones',
    title: 'Customer Support',
    description: 'Reach out to our team for questions, requests, or assistance.',
    cta: 'Talk to Us',
  },
  {
    id: 6,
    icon: 'MessageCircle',
    title: 'General Pharmacy Assistance',
    description: 'Convenient communication for customers looking for pharmacy-related assistance.',
    cta: 'Get in Touch',
  },
];

// Why choose us features
export const whyChooseUs = [
  {
    icon: 'MapPin',
    title: 'Local & Accessible',
    description: 'Located in Bandlaguda, Chandrayangutta, Hyderabad.',
  },
  {
    icon: 'Calendar',
    title: 'Established',
    description: 'Serving customers since 2023.',
  },
  {
    icon: 'Users',
    title: 'Customer Focused',
    description: 'Designed around convenient and clear customer communication.',
  },
  {
    icon: 'CheckCircle',
    title: 'Professional Approach',
    description: 'A clean and professional pharmacy experience.',
  },
];

// Trust strip items
export const trustItems = [
  {
    number: '01',
    title: 'Serving Since 2023',
  },
  {
    number: '02',
    title: 'Local Hyderabad Pharmacy',
  },
  {
    number: '03',
    title: 'Customer-Focused Service',
  },
  {
    number: '04',
    title: 'Registered Establishment',
  },
];

// Approach cards
export const approachCards = [
  {
    icon: 'User',
    title: 'Customer First',
    description: 'Making pharmacy enquiries and communication simple, clear and convenient.',
  },
  {
    icon: 'Award',
    title: 'Professional Service',
    description: 'Providing a clean and professional environment for pharmacy-related assistance.',
  },
  {
    icon: 'Globe',
    title: 'Community Focused',
    description: 'Serving customers in and around Bandlaguda and Chandrayangutta, Hyderabad.',
  },
];
