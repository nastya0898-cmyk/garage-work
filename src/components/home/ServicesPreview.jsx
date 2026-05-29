import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaWrench, FaCar, FaTools, FaTachometerAlt, FaSnowflake, FaGasPump, FaArrowRight } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '../../utils/animations'
import SectionTitle from '../ui/SectionTitle'
import { SERVICES } from '../../constants/data'

const ICONS = { FaWrench, FaCar, FaTools, FaTachometerAlt, FaSnowflake, FaGasPump }

export default function ServicesPreview() {
  const preview = SERVICES.slice(0, 6)

  return (
    <section className="py-24 bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-14">
          <SectionTitle
            subtitle="Ce que nous faisons"
            title="Nos Services"
            description="De l'entretien courant aux réparations complexes, notre équipe qualifiée s'occupe de tout."
            center
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {preview.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="card-dark p-6 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center mb-4
                                group-hover:bg-primary-500 transition-colors duration-300">
                  {Icon && <Icon className="text-primary-500 group-hover:text-white transition-colors duration-300" size={20} />}
                </div>
                <h3 className="font-display font-semibold text-white text-xl mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                <p className="text-primary-500 font-semibold text-sm">{service.price}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-outline">
            Voir Tous les Services <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
