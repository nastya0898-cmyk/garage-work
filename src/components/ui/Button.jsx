import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-outline'

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${base} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
