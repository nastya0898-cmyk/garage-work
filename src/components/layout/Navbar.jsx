import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import { NAV_LINKS, GARAGE } from '../../constants/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium font-display transition-colors duration-200
     after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary-500
     after:transition-all after:duration-300
     ${isActive ? 'text-primary-500 after:w-full' : 'text-gray-700 hover:text-gray-900 after:w-0 hover:after:w-full'}`

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md shadow-black/10 border-b border-gray-100'
          : 'bg-white'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo.png"
              alt="Garage Concorde"
              className="h-14 w-auto object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <NavLink key={l.path} to={l.path} end={l.path === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${GARAGE.phone}`}
               className="flex items-center gap-2 text-xs text-gray-500 hover:text-accent transition-colors">
              <FaPhone className="text-primary-500" size={11} />
              {GARAGE.phone}
            </a>
            <Link to="/contact" className="btn-primary text-sm px-5 py-2.5">
              Prendre rendez-vous
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 p-2 hover:text-primary-500 transition-colors"
            aria-label="Menu"
          >
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-md"
          >
            <nav className="container-custom py-5 flex flex-col gap-1">
              {NAV_LINKS.map(l => (
                <NavLink
                  key={l.path}
                  to={l.path}
                  end={l.path === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-display font-medium transition-all duration-200
                     ${isActive
                       ? 'bg-primary-500/10 text-primary-500 border border-primary-500/20'
                       : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                     }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 justify-center"
              >
                Prendre rendez-vous
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
