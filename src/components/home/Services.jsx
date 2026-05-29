/**
 * Home → Services preview section
 * Shows first 6 cards (limit=6) then "Voir tous" → /services
 * All existing branding and section structure preserved.
 */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { fadeInUp } from '../../utils/animations'
import SectionTitle from '../ui/SectionTitle'
import ServicesGrid from '../services/services-grid'

export default function Services() {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* ambient glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full
                   bg-primary-500/5 blur-[130px] pointer-events-none"
      />

      <div className="container-custom relative z-10">
        {/* ── Section title — unchanged text ── */}
        <div className="text-center mb-14">
          <SectionTitle
            subtitle="Ce que nous faisons"
            title="Nos"
            highlight="Services"
            description="De l'entretien courant aux réparations complexes, notre équipe qualifiée s'occupe de votre véhicule avec expertise."
            center
          />
        </div>

        {/* ── Premium service cards (limit 6 on home page) ── */}
        <ServicesGrid limit={6} />

        {/* ── CTA — unchanged link ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-outline">
            Voir tous les services <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
