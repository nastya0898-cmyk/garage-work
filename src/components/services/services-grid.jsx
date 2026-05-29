/**
 * ServicesGrid — Garage Concorde
 * Images: /public/services/ (noms simples sans caractères spéciaux)
 * Props:
 *   limit  — afficher seulement les N premières cartes
 *   light  — true = style blanc/jaune → rouge au hover
 */
import { motion } from 'framer-motion'
import {
  Wrench, Car, Settings, ClipboardList,
  Paintbrush, Layers, Camera, Key,
} from 'lucide-react'
import ProjectCard from '../ui/project-card'
import { staggerContainer } from '../../utils/animations'

const SERVICES_DATA = [
  {
    id: 1,
    title: 'Réparation et entretien mécanique',
    description:
      "Diagnostic, réparation et entretien de tous types de véhicules. Vidange, pneus, révision moteur – toutes marques.",
    tag: 'Mécanique',
    lucideIcon: Wrench,
    image: '/services/mecanique.jpg',
    fallback: '/WhatsApp-Image-2025-02-26-a-08.50.42_226674d8.webp',
  },
  {
    id: 2,
    title: "Achat & Vente de véhicules d'occasion",
    description:
      "Large sélection de véhicules d'occasion de qualité. Reprise et vente avec garantie professionnelle.",
    tag: 'Achat & Vente',
    lucideIcon: Car,
    image: '/services/achat-vente.jpg',
    fallback: '/WhatsApp-Image-2025-02-26-a-11.42.01_ab68bdf9.webp',
  },
  {
    id: 3,
    title: 'Services spécialisés',
    description:
      "Services automobiles spécialisés adaptés à vos besoins. Équipements de pointe et techniciens certifiés.",
    tag: 'Spécialisé',
    lucideIcon: Settings,
    image: '/services/services-specialises.jpg',
    fallback: '/Design-sans-titre.webp',
  },
  {
    id: 4,
    title: "Préparation d'expertise",
    description:
      "Préparation complète de votre véhicule pour le contrôle technique. Mise en conformité assurée.",
    tag: 'Expertise',
    lucideIcon: ClipboardList,
    image: '/services/expertise.jpg',
    fallback: '/WhatsApp-Image-2025-02-21-a-07.19.43_09d11ffd-Photoroom.webp',
  },
  {
    id: 5,
    title: 'Carrosserie',
    description:
      "Réparation carrosserie et peinture de haute qualité. Remise en état après accident avec finition impeccable.",
    tag: 'Carrosserie',
    lucideIcon: Paintbrush,
    image: '/services/svc-carrosserie.jpg',
    fallback: '/WhatsApp-Image-2025-02-26-a-08.50.42_226674d8.webp',
  },
  {
    id: 6,
    title: 'Covering',
    description:
      "Habillage complet ou partiel de votre véhicule. Large choix de films et finitions pour personnaliser votre auto.",
    tag: 'Covering',
    lucideIcon: Layers,
    image: '/services/svc-covering.jpg',
    fallback: '/Design-sans-titre.webp',
  },
  {
    id: 7,
    title: 'Montage écran et caméra de recul',
    description:
      "Installation professionnelle d'écrans multimédias et caméras de recul pour améliorer sécurité et confort.",
    tag: 'Multimédia',
    lucideIcon: Camera,
    image: '/services/svc-camera.jpg',
    fallback: '/WhatsApp-Image-2025-02-26-a-11.42.01_ab68bdf9.webp',
  },
  {
    id: 8,
    title: 'Location de voiture',
    description:
      "Service de location de véhicules de remplacement pendant la durée de vos réparations.",
    tag: 'Location',
    lucideIcon: Key,
    image: '/services/svc-location.jpg',
    fallback: '/WhatsApp-Image-2025-02-21-a-07.19.43_09d11ffd-Photoroom.webp',
  },
]

export default function ServicesGrid({ limit, light = false }) {
  const items = limit ? SERVICES_DATA.slice(0, limit) : SERVICES_DATA

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {items.map((service, i) => (
        <ProjectCard key={service.id} service={service} index={i} light={light} />
      ))}
    </motion.div>
  )
}
