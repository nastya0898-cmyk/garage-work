import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExpand, FaArrowRight } from 'react-icons/fa'
import { staggerContainer, fadeInUp } from '../../utils/animations'
import SectionTitle from '../ui/SectionTitle'
import { GALLERY } from '../../constants/data'

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null)
  // На главной — первые 6 фото
  const preview = GALLERY.slice(0, 6)

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <SectionTitle
            subtitle="Notre atelier"
            title="Galerie"
            highlight="Photos"
            description="Découvrez notre atelier moderne et la qualité de nos interventions à travers nos photos."
            center
            light
          />
        </div>

        {/* Masonry — photos en taille réelle */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4"
        >
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              variants={fadeInUp}
              className="break-inside-avoid mb-4 group cursor-pointer relative rounded-2xl overflow-hidden
                         shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200
                         transition-all duration-300"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300
                              flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <FaExpand className="text-gray-800" size={14} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3
                              bg-gradient-to-t from-black/50 to-transparent
                              translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-display font-semibold text-sm">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lien vers galerie complète */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link to="/galerie" className="btn-outline">
            Voir toute la galerie <FaArrowRight size={13} />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="rounded-2xl max-h-[82vh] w-auto max-w-full object-contain shadow-2xl"
              />
              <p className="mt-3 text-gray-300 font-display text-sm">{lightbox.alt}</p>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 sm:top-3 sm:right-3 w-10 h-10 bg-white/10 backdrop-blur
                           rounded-full flex items-center justify-center text-white
                           hover:bg-accent transition-colors duration-200 shadow-lg"
              >
                <FaTimes size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
