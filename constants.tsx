import { 
  BarChart3, 
  Megaphone, 
  MapPin, 
  Zap, 
  Target, 
  Search,
  TrendingUp,
  LayoutTemplate,
  MonitorPlay,
  PenTool,
  Smartphone
} from 'lucide-react';
import { Service, FAQItem, SectionId } from './types';

export const APP_NAME = "Social Flow";
export const BOOKING_LINK = "https://cal.com/social-flow/devis-express";
export const LOCATION = "Mantes-la-Jolie (78)";

export const SERVICES: Service[] = [
  {
    title: "Web & Expérience",
    description: "Des sites immersifs conçus pour capturer l'attention et convertir instantanément.",
    price: "À partir de 2000€",
    icon: LayoutTemplate,
    features: [
      "UX/UI Design Audacieux",
      "Développement Next.js ultra-rapide",
      "SEO Local Mantes & Yvelines",
      "Copywriting Persuasif",
      "Intégration Cal.com & CRM"
    ]
  },
  {
    title: "Trafic & Ads",
    description: "On injecte du carburant dans votre machine de vente. Résultats immédiats.",
    price: "Budget sur mesure",
    icon: Megaphone,
    features: [
      "Google Ads (Search & Maps)",
      "Social Ads (Meta/TikTok)",
      "Retargeting intelligent",
      "Landing Pages High-Converting",
      "Dashboard ROI temps réel"
    ]
  },
  {
    title: "Growth 360°",
    description: "L'accompagnement complet pour dominer votre secteur dans le 78.",
    price: "Dès 1500€/mois",
    icon: TrendingUp,
    highlight: true,
    features: [
      "Stratégie de Contenu (Reels/Photos)",
      "Gestion E-Réputation & Avis",
      "Consulting Marketing Hebdo",
      "Optimisation Continue (CRO)",
      "Exclusivité sectorielle locale"
    ]
  }
];

export const PROJECTS = [
  {
    client: "Jardin Prestige 78",
    category: "Site Web + SEO",
    image: "https://images.unsplash.com/photo-1558905540-21290159295b?q=80&w=1000&auto=format&fit=crop",
    result: "+40% de devis en 3 mois",
    description: "Refonte totale de l'identité digitale pour ce paysagiste haut de gamme à Saint-Germain-en-Laye."
  },
  {
    client: "Cabinet Dentaire Mantes",
    category: "Google Ads + Local",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    result: "Agenda complet à 4 semaines",
    description: "Campagne d'acquisition locale ciblée sur les implants et l'orthodontie adulte."
  },
  {
    client: "Batipro Yvelines",
    category: "Branding + Lead Gen",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
    result: "ROI x5 sur les Ads",
    description: "Création d'un tunnel de vente complet pour une entreprise de rénovation générale."
  }
];

export const PROCESS_STEPS = [
  {
    title: "Immersion",
    desc: "On ne devine pas. On analyse votre marché local (78) et vos concurrents pour trouver la faille.",
    icon: Search
  },
  {
    title: "Architecture",
    desc: "Design, copywriting, setup technique. On construit votre machine de guerre digitale.",
    icon: PenTool
  },
  {
    title: "Lancement",
    desc: "Mise en ligne et activation des leviers d'acquisition. C'est le moment de vérité.",
    icon: Zap
  },
  {
    title: "Dominance",
    desc: "Optimisation continue. On ne lâche rien tant que vous n'êtes pas #1 sur votre zone.",
    icon: Target
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Pourquoi une agence locale à Mantes (78) ?",
    answer: "Le digital est mondial, mais le business est local. Nous connaissons les codes, les quartiers et la mentalité des Yvelines. Cette proximité nous permet aussi de venir filmer vos chantiers ou vos locaux pour du contenu authentique."
  },
  {
    question: "Je n'ai pas le budget pour tout faire...",
    answer: "On ne vous vend pas de la poudre aux yeux. On commence par ce qui rapporte (Ads ou Refonte Site) pour générer du cash-flow, puis on réinvestit dans la croissance long terme (SEO/Contenu)."
  },
  {
    question: "Quelle garantie de résultats ?",
    answer: "Nous sommes obsédés par la data. Tout est tracké. Si une campagne ne marche pas, on la coupe. Si une page ne convertit pas, on la change. Vous avez accès à un tableau de bord transparent 24/7."
  },
  {
    question: "Les contrats sont-ils engageants ?",
    answer: "Site web : paiement unique (ou 3x). Marketing mensuel : engagement 6 mois minimum. Pourquoi ? Car le SEO et la notoriété prennent du temps à se construire, contrairement à la publicité payante."
  }
];

export const CLIENT_AVATARS = [
  { label: "Paysagistes", icon: "🌳" },
  { label: "Rénovation", icon: "🔨" },
  { label: "Santé / Bien-être", icon: "⚕️" },
  { label: "Avocats / Notaires", icon: "⚖️" }
];