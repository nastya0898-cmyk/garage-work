import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { GARAGE } from '../../constants/data'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={GARAGE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full
                 flex items-center justify-center shadow-2xl shadow-[#25D366]/40
                 hover:shadow-[#25D366]/60 transition-shadow duration-300"
      aria-label="Contacter sur WhatsApp"
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <FaWhatsapp className="text-white text-2xl relative z-10" />
    </motion.a>
  )
}
