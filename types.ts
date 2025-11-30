export interface Service {
  title: string;
  description: string;
  price?: string;
  features: string[];
  icon: React.ElementType;
  highlight?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  stars: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export enum SectionId {
  HERO = 'hero',
  OFFER = 'offre',
  SERVICES = 'services',
  PROCESS = 'process',
  PRICING = 'tarifs',
  ABOUT = 'a-propos',
  CONTACT = 'contact'
}