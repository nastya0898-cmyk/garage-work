import { motion } from 'framer-motion'
import { fadeInUp } from '../../utils/animations'

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
