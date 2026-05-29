export const NAV_LINKS = [
  { label: 'Accueil', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Galerie', path: '/galerie' },
  { label: 'À Propos', path: '/a-propos' },
  { label: 'Contact', path: '/contact' },
]

export const GARAGE = {
  name: 'Garage Concorde Sàrl',
  tagline: 'Votre garage automobile premium à Lausanne',
  phone: '021 624 73 35',
  phoneRaw: '+41216247335',
  email: 'info@garage-concorde.ch',
  address: "Avenue d'Echallens 4A",
  city: '1004 Lausanne',
  country: 'Suisse',
  hours: {
    weekdays: 'Lun – Jeu : 8h00 – 18h30',
    friday:   'Ven : 8h00 – 17h30',
    saturday: 'Sam : 8h00 – 12h00',
    sunday:   'Dimanche : Fermé',
  },
  social: {
    instagram: 'https://www.instagram.com/garageconcorde/',
    tiktok: 'https://www.tiktok.com/@garage_concorde',
    autoscout: 'https://www.autoscout24.ch/fr/s/seller-1173342',
  },
  whatsapp: 'https://wa.me/41216247335',
  mapsEmbed: "https://maps.google.com/maps?q=Avenue+d'Echallens+4A+1004+Lausanne+Switzerland&t=&z=16&ie=UTF8&iwloc=&output=embed",
}

export const SERVICES = [
  {
    id: 1,
    icon: 'FaCar',
    title: 'Véhicules Accidentés',
    description: "Remise en état professionnelle après accident. Carrosserie et peinture de haute qualité, toutes marques.",
  },
  {
    id: 2,
    icon: 'FaGlobe',
    title: 'Véhicules pour Exportation',
    description: "Préparation et export de véhicules vers l'international avec tous les documents nécessaires.",
  },
  {
    id: 3,
    icon: 'FaTools',
    title: 'Problèmes Mécaniques',
    description: "Diagnostic et réparation de tous types de problèmes mécaniques, toutes marques confondues.",
  },
  {
    id: 4,
    icon: 'FaExclamationTriangle',
    title: "Véhicules Hors d'État",
    description: "Reprise et remise en état de véhicules hors d'usage. Toutes conditions acceptées.",
  },
  {
    id: 5,
    icon: 'FaTachometerAlt',
    title: 'Diagnostic Automobile',
    description: "Analyse électronique complète avec équipement de pointe pour tous types de véhicules.",
  },
  {
    id: 6,
    icon: 'FaWrench',
    title: 'Réparation Moteur',
    description: "Réparation et révision complète de moteurs toutes marques avec garantie de qualité.",
  },
  {
    id: 7,
    icon: 'FaOilCan',
    title: 'Vidange',
    description: "Vidange et remplacement des fluides avec les meilleures huiles et filtres du marché.",
  },
  {
    id: 8,
    icon: 'FaCog',
    title: 'Changement de Pneus',
    description: "Montage, équilibrage et géométrie de précision pour tous types de pneumatiques.",
  },
]

export const STATS = [
  { value: 20, suffix: '+', label: "Ans d'expérience" },
  { value: 5000, suffix: '+', label: 'Clients satisfaits' },
  { value: 98, suffix: '%', label: 'Taux de satisfaction' },
  { value: 24, suffix: 'h', label: 'Délai moyen' },
]

export const ADVANTAGES = [
  {
    icon: 'FaShieldAlt',
    title: 'Expertise Professionnelle',
    description: "Notre équipe certifiée maîtrise les dernières technologies automobiles.",
  },
  {
    icon: 'FaUserTie',
    title: 'Équipe Expérimentée',
    description: "Plus de 20 ans d'expérience dans la réparation toutes marques.",
  },
  {
    icon: 'FaClock',
    title: 'Service Rapide',
    description: "Interventions rapides et respectueuses des délais convenus.",
  },
  {
    icon: 'FaBuilding',
    title: 'Garage Moderne',
    description: "Équipements de dernière génération dans un atelier ultramoderne.",
  },
  {
    icon: 'FaStar',
    title: 'Véhicules Premium',
    description: "Spécialistes des marques premium : Mercedes, BMW, Audi et plus.",
  },
  {
    icon: 'FaMicrochip',
    title: 'Technologie Moderne',
    description: "Diagnostic électronique avancé sur tous types de véhicules récents.",
  },
]

export const GALLERY = [
  {
    id: 1,
    src: '/WhatsApp-Image-2025-02-26-a-08.50.42_226674d8.webp',
    alt: 'Garage Concorde – Lausanne',
    category: 'exterieur',
    span: 'large',
  },
  {
    id: 2,
    src: '/Design-sans-titre.webp',
    alt: 'Atelier moderne',
    category: 'atelier',
    span: 'tall',
  },
  {
    id: 3,
    src: '/WhatsApp-Image-2025-02-26-a-11.42.01_ab68bdf9.webp',
    alt: 'Mercedes AMG C63',
    category: 'vehicules',
    span: 'normal',
  },
  {
    id: 4,
    src: '/WhatsApp-Image-2025-02-21-a-07.19.43_09d11ffd-Photoroom.webp',
    alt: 'Réception Garage Concorde',
    category: 'interieur',
    span: 'normal',
  },
  {
    id: 5,
    src: '/Design-sans-titre-1.webp',
    alt: 'Garage Concorde',
    category: 'exterieur',
    span: 'normal',
  },
  {
    id: 6,
    src: '/PHOTO-2025-02-24-16-13-41.webp',
    alt: 'Atelier Concorde',
    category: 'atelier',
    span: 'normal',
  },
  {
    id: 7,
    src: '/WhatsApp-Image-2025-02-24-a-16.14.36_09b13d36.webp',
    alt: 'Véhicule en réparation',
    category: 'vehicules',
    span: 'normal',
  },
  {
    id: 8,
    src: '/WhatsApp-Image-2025-02-26-a-11.42.01_cbc5b48c.webp',
    alt: 'Garage Concorde',
    category: 'exterieur',
    span: 'normal',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ahmed B.',
    rating: 5,
    comment: "Service exceptionnel ! Mon véhicule a été réparé en temps record. Équipe professionnelle et accueil irréprochable.",
    vehicle: 'Mercedes C63 AMG',
  },
  {
    id: 2,
    name: 'Sophie L.',
    rating: 5,
    comment: "Devis précis, travail soigné, prix honnête. Le meilleur garage de Lausanne sans hésitation !",
    vehicle: 'BMW Série 5',
  },
  {
    id: 3,
    name: 'Marc V.',
    rating: 5,
    comment: "Garage ultra-moderne avec des équipements de pointe. Personnel compétent et très à l'écoute.",
    vehicle: 'Audi Q7',
  },
]
