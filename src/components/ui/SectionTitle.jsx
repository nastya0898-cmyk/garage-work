import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

export default function SectionTitle({ subtitle, title, highlight, description, center = false, light = false }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={center ? 'text-center' : ''}
    >
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <h2 className={`section-title mb-5 ${light ? 'text-dark-900' : 'text-white'}`}>
        {title}{' '}
        {highlight && <span className="text-primary-500">{highlight}</span>}
      </h2>
      {description && (
        <p className={`text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-gray-600' : 'text-gray-400'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
