/**
 * ProjectCard — premium automotive service card
 * Props:
 *   service  — { title, description, image, fallback, tag, lucideIcon }
 *   index    — position in grid (for stagger delay)
 *   light    — true = white card / yellow border → red on hover
 *              false (default) = dark luxury card
 */
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ service, index = 0, light = false }) {
  const [imgErr, setImgErr] = useState(false)
  const Icon = service.lucideIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.09, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7 }}
      className={`
        group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-400
        ${light
          ? 'bg-white border-2 border-primary-500 hover:border-accent shadow-sm hover:shadow-xl hover:shadow-accent/15'
          : 'bg-[#06061a] border border-white/[0.07] hover:border-primary-500/40 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
        }
      `}
    >
      {/* ── Image ── */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={imgErr ? service.fallback : service.image}
          alt={service.title}
          onError={() => setImgErr(true)}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.09 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        />

        {/* overlay */}
        <div className={`absolute inset-0 ${
          light
            ? 'bg-gradient-to-t from-black/30 via-black/10 to-transparent'
            : 'bg-gradient-to-t from-[#06061a] via-[#06061a]/55 to-transparent'
        }`} />

        {/* hover tint */}
        <div className={`absolute inset-0 transition-colors duration-700 ${
          light
            ? 'bg-accent/0 group-hover:bg-accent/8'
            : 'bg-primary-500/0 group-hover:bg-primary-500/10'
        }`} />

        {/* Tag badge */}
        <div className="absolute top-4 left-4">
          <span className={`
            px-3 py-1 rounded-full text-[10px] font-display font-bold uppercase tracking-[0.18em]
            ${light
              ? 'bg-white/80 backdrop-blur-md border border-primary-500/30 text-primary-700'
              : 'bg-black/50 backdrop-blur-lg border border-white/10 text-gray-300'
            }
          `}>
            {service.tag || 'Service'}
          </span>
        </div>

        {/* Index number */}
        <span className={`
          absolute top-3 right-4 font-display font-black text-5xl select-none leading-none
          ${light ? 'text-black/[0.06]' : 'text-white/[0.06]'}
        `}>
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* ── Content ── */}
      <div className="px-6 pt-5 pb-6 relative">

        {/* Icon + Title */}
        <div className="flex items-start gap-3 mb-3">
          <div className={`
            w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5
            transition-all duration-400
            ${light
              ? 'bg-primary-500/10 border border-primary-500/25 group-hover:bg-accent group-hover:border-accent'
              : 'bg-primary-500/10 border border-primary-500/20 group-hover:bg-primary-500 group-hover:border-primary-500'
            }
          `}>
            {Icon && (
              <Icon
                size={17}
                className={`transition-colors duration-400 ${
                  light
                    ? 'text-primary-600 group-hover:text-white'
                    : 'text-primary-400 group-hover:text-white'
                }`}
              />
            )}
          </div>

          <h3 className={`
            font-display font-bold text-[1.05rem] leading-snug pt-1.5 transition-colors duration-300
            ${light
              ? 'text-primary-500 group-hover:text-accent'
              : 'text-white group-hover:text-primary-300'
            }
          `}>
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-5 pl-[52px] ${
          light ? 'text-gray-500' : 'text-gray-500'
        }`}>
          {service.description}
        </p>

        {/* CTA */}
        <div className="pl-[52px]">
          <Link
            to="/contact"
            className={`inline-flex items-center gap-1 text-xs font-display font-semibold
                        transition-colors duration-200
                        ${light ? 'text-primary-600 hover:text-accent' : 'text-primary-500 hover:text-white'}`}
          >
            Devis gratuit <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Bottom shimmer */}
        <div className={`
          absolute bottom-0 left-6 right-6 h-px
          bg-gradient-to-r from-transparent via-${light ? 'accent' : 'primary-500'} to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        `}
          style={{
            background: light
              ? 'linear-gradient(to right, transparent, #FF0000, transparent)'
              : 'linear-gradient(to right, transparent, #d4a62f, transparent)',
          }}
        />
      </div>

      {/* Corner glow */}
      <div className={`
        absolute -bottom-12 -right-12 w-36 h-36 rounded-full blur-2xl pointer-events-none
        opacity-0 group-hover:opacity-100 transition-opacity duration-500
        ${light ? 'bg-accent/10' : 'bg-primary-500/8'}
      `} />
    </motion.div>
  )
}
