import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeInUp } from '../utils/animations'
import CTABanner from '../components/home/CTABanner'
import ServicesGrid from '../components/services/services-grid'

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Header — fond blanc ── */}
      <section className="pt-36 pb-16 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #d4a62f 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeInUp} className="section-subtitle">
              Ce que nous proposons
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5"
            >
              Nos <span className="text-primary-500">Services</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              Une gamme complète de services automobiles réalisés par des techniciens
              certifiés avec des équipements de dernière génération.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Grille — fond blanc, rames jaunes → rouges au hover ── */}
      <section className="py-16 pb-24 bg-white relative">
        {/* subtle warm glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full
                        bg-primary-500/4 blur-[140px] pointer-events-none" />

        <div className="container-custom relative z-10">
          {/* light={true} → yellow border / yellow title → red on hover */}
          <ServicesGrid light={true} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-14"
          >
            <Link to="/contact" className="btn-primary text-base">
              Prendre rendez-vous <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
