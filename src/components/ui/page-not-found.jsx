import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

/* ────────────────────────────────────────────
   404 Page — Garage Concorde
   Couleurs : fond warm-cream #FAF6F2, or #d4a62f, texte sombre
   ──────────────────────────────────────────── */
export default function NotFoundPage() {
  return (
    <div
      className="w-full h-screen overflow-x-hidden flex justify-center items-center relative"
      style={{ backgroundColor: '#FAF6F2' }}
    >
      <CircleAnimation />
      <CharactersAnimation />
      <MessageDisplay />
    </div>
  )
}

/* ── 1. Message central ── */
function MessageDisplay() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="absolute flex flex-col justify-center items-center w-[90%] h-[90%] z-[100]">
      <div
        className={`flex flex-col items-center transition-opacity duration-700 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Label */}
        <p className="text-sm font-display font-semibold uppercase tracking-[0.2em] text-gray-500 mb-4">
          Erreur Technique
        </p>

        {/* 404 */}
        <div
          className="font-display font-black leading-none mb-4 select-none"
          style={{ fontSize: 'clamp(80px, 18vw, 160px)', color: '#d4a62f' }}
        >
          404
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-800 mb-3 text-center">
          Page non trouvée
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-500 text-center max-w-md leading-relaxed mb-10 px-4">
          La page que vous recherchez a peut-être été supprimée, renommée ou
          est temporairement indisponible.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Retour — outlined → rouge au hover */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-display font-semibold text-base
                       border-2 border-gray-400 text-gray-700
                       hover:bg-accent hover:border-accent hover:text-white
                       hover:scale-105 hover:shadow-xl hover:shadow-accent/25
                       active:scale-95 transition-all duration-300"
          >
            <IconArrowLeft />
            Retour
          </button>

          {/* Accueil — filled gold → rouge au hover */}
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-display font-semibold text-base
                       text-white hover:scale-105 hover:shadow-xl
                       active:scale-95 transition-all duration-300"
            style={{
              backgroundColor: '#d4a62f',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#FF0000'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,0,0,0.25)' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#d4a62f'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <IconHome />
            Accueil
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── 2. Personnages animés ── */
function CharactersAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const figures = [
      {
        top: '0%',
        src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
        transform: 'rotateZ(-90deg)',
        speedX: 1500,
      },
      {
        top: '10%',
        src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick1.svg',
        speedX: 3000,
        speedRotation: 2000,
      },
      {
        top: '20%',
        src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick2.svg',
        speedX: 5000,
        speedRotation: 1000,
      },
      {
        top: '25%',
        src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
        speedX: 2500,
        speedRotation: 1500,
      },
      {
        top: '35%',
        src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick0.svg',
        speedX: 2000,
        speedRotation: 300,
      },
      {
        bottom: '5%',
        src: 'https://raw.githubusercontent.com/RicardoYare/imagenes/9ef29f5bbe075b1d1230a996d87bca313b9b6a63/sticks/stick3.svg',
        speedX: 0,
      },
    ]

    if (ref.current) ref.current.innerHTML = ''

    figures.forEach((fig, i) => {
      const img = document.createElement('img')
      img.style.cssText = 'position:absolute;width:18%;height:18%;'
      if (fig.top) img.style.top = fig.top
      if (fig.bottom) img.style.bottom = fig.bottom
      img.src = fig.src
      if (fig.transform) img.style.transform = fig.transform
      ref.current?.appendChild(img)

      if (i === 5) return
      img.animate([{ left: '100%' }, { left: '-20%' }], {
        duration: fig.speedX,
        easing: 'linear',
        fill: 'forwards',
      })
      if (i === 0 || !fig.speedRotation) return
      img.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-360deg)' }],
        { duration: fig.speedRotation, iterations: Infinity, easing: 'linear' }
      )
    })

    return () => { if (ref.current) ref.current.innerHTML = '' }
  }, [])

  return <div ref={ref} className="absolute w-[99%] h-[95%]" />
}

/* ── 3. Cercles animés sur canvas ── */
function CircleAnimation() {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const timerRef = useRef(0)
  const circlesRef = useRef([])

  const init = canvas => {
    circlesRef.current = []
    for (let i = 0; i < 300; i++) {
      circlesRef.current.push({
        x: Math.random() * (canvas.width * 1.8) + canvas.width * 1.2,
        y: Math.random() * (canvas.height * 1.2) - canvas.height * 0.1,
        size: canvas.width / 1000,
      })
    }
  }

  const draw = canvas => {
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    timerRef.current++
    ctx.setTransform(1, 0, 0, 1, 0, 0)

    const dx = canvas.width / 80
    const grow = canvas.width / 1000

    /* Couleur or/sable du site au lieu de blanc sur noir */
    ctx.fillStyle = 'rgba(212, 166, 47, 0.35)'
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    circlesRef.current.forEach(c => {
      ctx.beginPath()
      if (timerRef.current < 65) {
        c.x -= dx
        c.size += grow
      } else if (timerRef.current < 500) {
        c.x -= dx * 0.02
        c.size += grow * 0.2
      }
      ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2)
      ctx.fill()
    })

    if (timerRef.current < 500) {
      rafRef.current = requestAnimationFrame(() => draw(canvas))
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    timerRef.current = 0
    init(canvas)
    draw(canvas)

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      timerRef.current = 0
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      const ctx = canvas.getContext('2d')
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height)
      init(canvas)
      draw(canvas)
    }

    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

/* ── Icônes inline ── */
function IconArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
    </svg>
  )
}

function IconHome() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}
