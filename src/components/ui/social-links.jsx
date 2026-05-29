import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * AnimatedSocialLinks
 * Props:
 *   socials  – array of { name, href, image?, iconComponent? }
 *   Texte toujours gold (primary-500) → rouge au hover/clic
 *   iconComponent accepte un composant React (ex: SiTiktok) à la place d'une URL image
 */
const AnimatedSocialLinks = React.forwardRef(
  ({ socials, className = '', ...props }, ref) => {
    const [hovered, setHovered] = useState(null)
    const [rotation, setRotation] = useState(0)
    const [clicked, setClicked] = useState(false)

    const animation = {
      scale: clicked ? [1, 1.3, 1] : 1,
      transition: { duration: 0.3 },
    }

    useEffect(() => {
      const handle = () => {
        setClicked(true)
        setTimeout(() => setClicked(false), 200)
      }
      window.addEventListener('click', handle)
      return () => window.removeEventListener('click', handle)
    }, [])

    return (
      <div
        ref={ref}
        className={`flex flex-wrap items-center justify-center gap-0 ${className}`}
        {...props}
      >
        {socials.map((social, i) => {
          const IconComp = social.iconComponent
          return (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative cursor-pointer px-6 py-4 transition-opacity duration-200 group
                ${hovered && hovered !== social.name ? 'opacity-40' : 'opacity-100'}`}
              onMouseEnter={() => {
                setHovered(social.name)
                setRotation(Math.random() * 20 - 10)
              }}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setClicked(true)}
            >
              {/* Nom — gold → rouge au hover/clic */}
              <span className="block text-3xl md:text-4xl font-display font-bold transition-colors duration-200
                               text-primary-500 group-hover:text-accent">
                {social.name}
              </span>

              {/* Hover image / icon component */}
              <AnimatePresence>
                {hovered === social.name && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 flex h-full w-full items-center justify-center pointer-events-none"
                    animate={animation}
                  >
                    {IconComp ? (
                      /* React component (ex: SiTiktok) */
                      <motion.div
                        key={social.name}
                        className="w-16 h-16 flex items-center justify-center drop-shadow-2xl"
                        initial={{ y: -25, rotate: rotation, opacity: 0, filter: 'blur(3px)' }}
                        animate={{ y: -60, rotate: rotation * 0.6, opacity: 1, filter: 'blur(0px)' }}
                        exit={{ y: -25, opacity: 0, filter: 'blur(3px)' }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      >
                        <IconComp size={56} />
                      </motion.div>
                    ) : (
                      /* Image URL */
                      <motion.img
                        key={social.name}
                        src={social.image}
                        alt={social.name}
                        className="w-16 h-16 object-contain drop-shadow-2xl"
                        initial={{ y: -25, rotate: rotation, opacity: 0, filter: 'blur(3px)' }}
                        animate={{ y: -60, rotate: rotation * 0.6, opacity: 1, filter: 'blur(0px)' }}
                        exit={{ y: -25, opacity: 0, filter: 'blur(3px)' }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      />
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          )
        })}
      </div>
    )
  }
)

AnimatedSocialLinks.displayName = 'AnimatedSocialLinks'
export default AnimatedSocialLinks
