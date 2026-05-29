import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      transition={{ duration: 0.3 }}
      className={`card-dark p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}
