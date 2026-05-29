import { motion } from 'framer-motion'
import { staggerContainer, fadeInUp } from '../utils/animations'
import ContactSection from '../components/home/ContactSection'

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-gray-50">
        <div className="container-custom text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeInUp} className="section-subtitle">Parlons-en</motion.p>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              Contactez- <span className="text-primary-500">nous</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-xl mx-auto">
              Devis gratuit, prise de rendez-vous ou simple renseignement — nous sommes là pour vous.
            </motion.p>
          </motion.div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
