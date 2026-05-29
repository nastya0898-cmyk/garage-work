import { motion } from 'framer-motion'
import { FaHandshake, FaTrophy, FaUsers, FaLeaf } from 'react-icons/fa'
import { staggerContainer, fadeInUp, fadeInLeft } from '../utils/animations'
import SectionTitle from '../components/ui/SectionTitle'
import CTABanner from '../components/home/CTABanner'
import { STATS } from '../constants/data'

const VALUES = [
  { icon: FaHandshake, title: 'Honnêteté', description: "Devis transparent, tarifs clairs. Pas de mauvaises surprises, jamais." },
  { icon: FaTrophy, title: 'Excellence', description: "Nous visons la perfection dans chaque intervention, grande ou petite." },
  { icon: FaUsers, title: 'Proximité', description: "Un accueil personnalisé et une équipe véritablement à votre écoute." },
  { icon: FaLeaf, title: 'Responsabilité', description: "Gestion écologique des déchets et fluides automobiles." },
]

export default function About() {
  return (
    <>
      <section className="pt-36 pb-20 bg-gray-50 relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.p variants={fadeInUp} className="section-subtitle">Notre histoire</motion.p>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-5">
              À <span className="text-primary-500">Propos</span> de Nous
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              Depuis plus de 20 ans, Garage Concorde Sàrl accompagne les conducteurs lausannois avec expertise et passion.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={fadeInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img src="/WhatsApp-Image-2025-02-26-a-08.50.42_226674d8.webp" alt="Garage Concorde"
                     className="w-full h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeInUp}>
                <SectionTitle subtitle="Qui sommes-nous" title="20 Ans de" highlight="Passion" light />
              </motion.div>
              <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed mt-5 mb-4">
                Fondé à Lausanne, Garage Concorde Sàrl s'est imposé comme le garage de référence pour les conducteurs exigeants. Notre équipe de techniciens certifiés intervient sur toutes les marques avec le même niveau d'exigence.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-gray-600 leading-relaxed mb-8">
                Spécialistes des véhicules premium — Mercedes, BMW, Audi — nous proposons également la reprise, la vente et l'exportation de véhicules dans les meilleures conditions.
              </motion.p>
              <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
                {STATS.map(s => (
                  <div key={s.label} className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center shadow-sm">
                    <p className="font-display text-3xl font-black text-primary-500">{s.value}{s.suffix}</p>
                    <p className="text-gray-500 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <SectionTitle subtitle="Nos engagements" title="Nos" highlight="Valeurs" center light />
          </div>
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {VALUES.map(v => (
              <motion.div key={v.title} variants={fadeInUp}
                className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-primary-500/30 hover:shadow-md transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-primary-500" size={20} />
                </div>
                <h3 className="font-display font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <SectionTitle subtitle="Ils nous font confiance" title="Nos" highlight="Partenaires" center light />
          </div>
          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-10"
          >
            <motion.div variants={fadeInUp} className="flex items-center justify-center p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300" style={{ minWidth: 200 }}>
              <img src="/lease force.png" alt="Lease Force" className="h-16 object-contain" />
            </motion.div>
            <motion.div variants={fadeInUp} className="flex items-center justify-center p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300" style={{ minWidth: 200 }}>
              <img src="/quality one garantie.png" alt="Quality One Garantie" className="h-16 object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
