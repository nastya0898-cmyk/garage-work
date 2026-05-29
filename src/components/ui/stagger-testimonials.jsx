/**
 * StaggerTestimonials — Garage Concorde
 * Adapted from stagger-testimonials.tsx (TS → JS, CSS vars → brand colors)
 * Real customer reviews integrated.
 */
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

/* simple cn replacement — no shadcn required */
const cn = (...classes) => classes.filter(Boolean).join(' ')

const SQRT_5000 = Math.sqrt(5000) // ≈ 70.7 — length of diagonal cut line

/* ── Real Garage Concorde reviews ── */
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Je vous conseille ce garage. Il m'a réparé le pare-choc avant. C'est une équipe très professionnelle.",
    by: 'Yasin Heidari',
    rating: 5,
    imgSrc: 'https://i.pravatar.cc/150?img=11',
  },
  {
    tempId: 1,
    testimonial: 'Έχει καλές τιμές.',
    by: 'Petros k. Vosinas',
    rating: 4,
    imgSrc: 'https://i.pravatar.cc/150?img=12',
  },
  {
    tempId: 2,
    testimonial:
      "Garage propre et bien rangé, le patron et tout le personnel sont super, et pour l'entretien, ils savent vraiment ce qu'ils font.",
    by: 'Haitham Yassin',
    rating: 5,
    imgSrc: 'https://i.pravatar.cc/150?img=13',
  },
  {
    tempId: 3,
    testimonial:
      "Venue une demi-heure avant la fermeture pour un bras d'essuie-glace vandalisé. Réparation express, accueil au top, serviable.",
    by: 'Emma Schmidt',
    rating: 5,
    imgSrc: 'https://i.pravatar.cc/150?img=5',
  },
  {
    tempId: 4,
    testimonial:
      'Très bon garage, je vous conseille le chef, il est très sympa. Et les employés c\'est très professionnel.',
    by: 'Abdulhafiz Mensur',
    rating: 5,
    imgSrc: 'https://i.pravatar.cc/150?img=14',
  },
  {
    tempId: 5,
    testimonial: 'Super garage. Bon marché, efficace et sympas ! Merci 👍',
    by: 'Cyprien de Canson',
    rating: 5,
    imgSrc: 'https://i.pravatar.cc/150?img=15',
  },
  {
    tempId: 6,
    testimonial:
      'Super je suis toujours content ils sont très gentils parfait vraiment service bienfaits.',
    by: 'Guevara Efrin',
    rating: 5,
    imgSrc: 'https://i.pravatar.cc/150?img=17',
  },
]

/* ── Brand colors (replaces CSS variables) ── */
const COLOR = {
  primary: '#d4a62f',      // gold
  dark: '#ffffff',         // white (center card)
  border: '#e5e7eb',       // gray-200
  background: '#ffffff',
  accent: '#FF0000',       // red
}

/* ── Stars ── */
function Stars({ rating, light = false }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating
            ? (light ? 'text-white fill-white' : 'text-primary-500 fill-primary-500')
            : (light ? 'text-white/30' : 'text-gray-300')}
        />
      ))}
    </div>
  )
}

/* ── Single Card ── */
function TestimonialCard({ position, testimonial, handleMove, cardSize }) {
  const isCenter = position === 0

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        'absolute left-1/2 top-1/2 cursor-pointer border-2 p-6 transition-all duration-500 ease-in-out select-none outline-none focus:outline-none',
        isCenter
          ? 'z-10'
          : 'z-0 hover:scale-[1.02]',
      )}
      style={{
        width: cardSize,
        height: cardSize,
        backgroundColor: isCenter ? COLOR.dark : COLOR.background,
        borderColor: isCenter ? COLOR.primary : COLOR.border,
        clipPath:
          'polygon(44px 0%, calc(100% - 44px) 0%, 100% 44px, 100% 100%, calc(100% - 44px) 100%, 44px 100%, 0 100%, 0 0)',
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? `0px 8px 0px 4px ${COLOR.primary}`
          : '0px 2px 12px rgba(0,0,0,0.08)',
      }}
    >
      {/* Diagonal cut decoration */}
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 44,
          width: SQRT_5000,
          height: 2,
          backgroundColor: isCenter ? COLOR.primary : COLOR.border,
        }}
      />

      {/* Avatar */}
      <img
        src={testimonial.imgSrc}
        alt={testimonial.by}
        className="mb-3 h-12 w-10 object-cover object-top"
        style={{
          boxShadow: `3px 3px 0px ${isCenter ? 'rgba(255,255,255,0.15)' : COLOR.border}`,
        }}
      />

      {/* Stars */}
      <Stars rating={testimonial.rating} light={false} />

      {/* Quote */}
      <h3
        className="text-sm sm:text-base font-medium leading-snug text-gray-800"
      >
        "{testimonial.testimonial}"
      </h3>

      {/* Author */}
      <p
        className="absolute bottom-5 left-6 right-6 text-xs italic font-display text-gray-400"
      >
        — {testimonial.by}
      </p>
    </div>
  )
}

/* ── Main Component ── */
export function StaggerTestimonials() {
  const [cardSize, setCardSize] = useState(340)
  const [list, setList] = useState(testimonials)

  const handleMove = (steps) => {
    const next = [...list]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = next.shift()
        if (!item) return
        next.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = next.pop()
        if (!item) return
        next.unshift({ ...item, tempId: Math.random() })
      }
    }
    setList(next)
  }

  useEffect(() => {
    const update = () => {
      const { matches } = window.matchMedia('(min-width: 640px)')
      setCardSize(matches ? 340 : 270)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div className="relative w-full overflow-hidden" style={{ height: 580 }}>
      {list.map((t, index) => {
        const len = list.length
        const position = len % 2
          ? index - (len + 1) / 2
          : index - len / 2
        return (
          <TestimonialCard
            key={t.tempId}
            testimonial={t}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}

      {/* Navigation */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3 z-20">
        <button
          onClick={() => handleMove(-1)}
          className="flex h-12 w-12 items-center justify-center border-2 border-primary-500
                     bg-white text-primary-500
                     hover:bg-accent hover:border-accent hover:text-white
                     active:bg-accent active:border-accent active:text-white
                     transition-all duration-200 rounded-lg"
          aria-label="Avis précédent"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => handleMove(1)}
          className="flex h-12 w-12 items-center justify-center border-2 border-primary-500
                     bg-white text-primary-500
                     hover:bg-accent hover:border-accent hover:text-white
                     active:bg-accent active:border-accent active:text-white
                     transition-all duration-200 rounded-lg"
          aria-label="Avis suivant"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  )
}

export default StaggerTestimonials
