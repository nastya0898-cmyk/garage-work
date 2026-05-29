import { motion } from 'framer-motion'
import {
  FaShieldAlt, FaUserTie, FaClock, FaBuilding, FaStar, FaMicrochip
} from 'react-icons/fa'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../../utils/animations'
import SectionTitle from '../ui/SectionTitle'
import { STATS, ADVANTAGES } from '../../constants/data'
import { useCounter } from '../../hooks/useCounter'

const ICONS = { FaShieldAlt, FaUserTie, FaClock, FaBuilding, FaStar, FaMicrochip }

function StatItem({ stat }) {
  const { count, ref } = useCounter(stat.value)
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-5xl md:text-6xl font-black text-primary-500 leading-none">
        {count}{stat.suffix}
      </p>
      <p className="text-gray-500 text-sm mt-2 font-medium">{stat.label}</p>
    </div>
  )
}

export default function WhyUs() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full
                      bg-primary-500/4 blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 pb-20 border-b border-gray-200"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={fadeInUp}>
              <StatItem stat={s} />
            </motion.div>
          ))}
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/Design-sans-titre.webp"
                alt="Atelier Garage Concorde"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              className="absolute -bottom-5 -right-5 bg-primary-500 text-white p-5 rounded-2xl shadow-2xl shadow-primary-500/30"
            >
              <p className="font-display text-4xl font-black leading-none">20+</p>
              <p className="text-sm font-semibold mt-1">Ans d'expertise</p>
            </motion.div>

            {/* Partner logos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 mt-14"
            >
              <img src="/lease force.png" alt="Lease Force" className="h-16 object-contain" />
              <img src="/quality one garantie.png" alt="Quality One Garantie" className="h-16 object-contain" />
            </motion.div>
          </motion.div>

          {/* Text + advantages */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <SectionTitle
                subtitle="Pourquoi nous choisir"
                title="Un Garage de"
                highlight="Confiance"
                description="Nous combinons expertise technique, honnêteté et service client irréprochable pour votre satisfaction totale."
                light
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {ADVANTAGES.map(adv => {
                const Icon = ICONS[adv.icon]
                return (
                  <motion.div key={adv.title} variants={fadeInUp}
                    className="flex gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-primary-500/30 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
                      {Icon && <Icon className="text-primary-500" size={16} />}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-gray-900 text-sm mb-0.5">{adv.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{adv.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
