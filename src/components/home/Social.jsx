import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { fadeInUp } from '../../utils/animations'
import SectionTitle from '../ui/SectionTitle'
import AnimatedSocialLinks from '../ui/social-links'
import { GARAGE } from '../../constants/data'

/* ── TikTok icon component (remplace l'image brisée) ── */
function TikTokIcon({ size = 56 }) {
  return <SiTiktok size={size} className="text-black" />
}

/* ── AutoScout24 logo depuis /public/AutoScout24.jpeg ── */
const SOCIALS = [
  {
    name: 'Instagram',
    href: GARAGE.social.instagram,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png',
  },
  {
    name: 'TikTok',
    href: GARAGE.social.tiktok,
    iconComponent: TikTokIcon,   // ← composant React au lieu d'une URL
  },
  {
    name: 'AutoScout24',
    href: GARAGE.social.autoscout,
    image: '/AutoScout24.jpeg',  // ← image locale depuis public/
  },
]

export default function Social() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center mb-12">
          <SectionTitle
            subtitle="Restez connectés"
            title="Suivez-nous"
            highlight="en ligne"
            description="Actualités, véhicules disponibles et coulisses de l'atelier."
            center
            light
          />
        </div>

        {/* Animated hover links — texte gold → rouge */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative px-10 py-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm">
            <p className="text-center text-gray-400 text-xs uppercase tracking-[0.2em] mb-6 font-medium">
              Passez la souris sur un réseau
            </p>
            {/* dark prop supprimé — couleur gérée directement dans AnimatedSocialLinks */}
            <AnimatedSocialLinks socials={SOCIALS} />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
