import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaPhone } from 'react-icons/fa'
import { GARAGE } from '../../constants/data'

export default function CTABanner() {
  return (
    <section className="py-20 bg-primary-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-2">
              Intervention Rapide
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3">
              Besoin d'un Devis ?
            </h2>
            <p className="text-white/80 text-lg max-w-md">
              Contactez-nous maintenant et obtenez votre devis gratuit en moins de 24 heures.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Devis Gratuit → rouge au hover comme tous les autres boutons */}
            <Link
              to="/contact"
              className="bg-white text-primary-700 font-display font-semibold
                         px-8 py-4 rounded-xl transition-all duration-300
                         hover:bg-accent hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-accent/30
                         active:bg-accent active:text-white active:scale-95
                         flex items-center gap-2"
            >
              Devis Gratuit <FaArrowRight size={13} />
            </Link>

            {/* Appeler → rouge au hover */}
            <a
              href={`tel:${GARAGE.phone}`}
              className="border-2 border-white text-white font-display font-semibold
                         px-8 py-4 rounded-xl transition-all duration-300
                         hover:bg-accent hover:border-accent hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-accent/30
                         active:bg-accent active:border-accent active:scale-95
                         flex items-center gap-2"
            >
              <FaPhone size={13} /> Appeler
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
