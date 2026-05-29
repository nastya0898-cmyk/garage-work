import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaPhone, FaStar } from 'react-icons/fa'
import { GARAGE } from '../../constants/data'
import { staggerContainer, fadeInUp } from '../../utils/animations'

export default function Hero() {
  const particles = useMemo(() =>
    [...Array(18)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      dur: 5 + Math.random() * 5,
      delay: Math.random() * 4,
    })), [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Photo de fond — floutée */}
      <div className="absolute inset-0">
        <img
          src="/headphoto.jpg"
          alt="Garage Concorde"
          className="w-full h-full object-cover scale-110"
          style={{
            objectPosition: 'center center',
            filter: 'blur(3px) brightness(0.55)',
          }}
        />
        {/* Overlay neutre léger — sans bleu */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Particules dorées */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(p => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-primary-500"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px` }}
            animate={{ y: [0, -20, 0], opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Halo doré */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-primary-500/10 blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10 pt-24 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-7">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary-500 text-xs" />)}
            </div>
            <span className="text-gray-300 text-sm">+5000 clients satisfaits</span>
            <span className="px-2 py-0.5 bg-primary-500/15 border border-primary-500/40 rounded-full text-primary-400 text-xs font-display font-semibold">
              Lausanne
            </span>
          </motion.div>

          {/* Titre */}
          <motion.h1 variants={fadeInUp}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
            Votre garage{' '}
            <span className="text-primary-400" style={{ textShadow: '0 0 40px rgba(212,166,47,0.5)' }}>
              automobile
            </span>
            <br />premium à Lausanne
          </motion.h1>

          {/* Sous-titre */}
          <motion.p variants={fadeInUp}
            className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Réparation, entretien, diagnostic et véhicules premium avec un service professionnel et moderne.
          </motion.p>

          {/* Boutons */}
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-12">
            <Link to="/contact" className="btn-primary text-base">
              Prendre rendez-vous <FaArrowRight size={13} />
            </Link>
            <Link to="/services" className="btn-glass text-base">
              Découvrir nos services
            </Link>
          </motion.div>

          {/* Téléphone */}
          <motion.a
            variants={fadeInUp}
            href={`tel:${GARAGE.phone}`}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl
                       bg-white/10 backdrop-blur-md border border-white/20
                       hover:border-accent/60 transition-all duration-300 group"
          >
            <div className="w-9 h-9 rounded-full bg-primary-500/20 border border-primary-500/40
                            flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors duration-300">
              <FaPhone className="text-primary-400 group-hover:text-white transition-colors" size={13} />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] uppercase tracking-wider font-medium">Appelez-nous</p>
              <p className="text-white font-display font-semibold text-lg leading-tight">{GARAGE.phone}</p>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
