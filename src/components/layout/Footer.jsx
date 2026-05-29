import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaClock } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { NAV_LINKS, GARAGE } from '../../constants/data'

export default function Footer() {
  const year = new Date().getFullYear()

  /* shared link style — gray → red on hover/click */
  const linkCls =
    'text-gray-400 hover:text-accent active:text-accent text-sm transition-colors duration-200 flex items-center gap-2'

  return (
    <footer className="bg-white border-t border-gray-200">

      {/* ── Top bar — subtle gold strip ── */}
      <div className="bg-primary-500/8 border-b border-primary-500/20">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-800 font-display font-semibold text-sm">
            Besoin d'un devis ? Contactez-nous maintenant.
          </p>
          <a
            href={`tel:${GARAGE.phone}`}
            className="btn-primary text-sm px-5 py-2.5"
          >
            {GARAGE.phone}
          </a>
        </div>
      </div>

      {/* ── Main columns ── */}
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex mb-5">
              <img
                src="/logo.png"
                alt="Garage Concorde"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre garage automobile de confiance à Lausanne depuis plus de 20 ans.
              Qualité, rapidité et transparence.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaInstagram, href: GARAGE.social.instagram, label: 'Instagram' },
                { icon: SiTiktok, href: GARAGE.social.tiktok, label: 'TikTok' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-center justify-center
                             text-primary-500 hover:bg-accent hover:border-accent hover:text-white
                             active:bg-accent active:border-accent active:text-white transition-all duration-200"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-primary-500 mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map(l => (
                <li key={l.path}>
                  <Link to={l.path} className={linkCls}>
                    <span className="w-1 h-1 rounded-full bg-primary-500/60 shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-primary-500 mb-5 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                'Réparation mécanique',
                "Achat & Vente",
                'Carrosserie',
                'Covering',
                "Préparation expertise",
                'Location voiture',
              ].map(s => (
                <li key={s}>
                  <Link to="/services" className={linkCls}>
                    <span className="w-1 h-1 rounded-full bg-primary-500/60 shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-primary-500 mb-5 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <FaMapMarkerAlt className="text-primary-500 mt-0.5 shrink-0" size={13} />
                <span>
                  {GARAGE.address}
                  <br />
                  {GARAGE.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${GARAGE.phone}`}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-accent active:text-accent transition-colors"
                >
                  <FaPhone className="text-primary-500 shrink-0" size={13} />
                  {GARAGE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${GARAGE.email}`}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-accent active:text-accent transition-colors"
                >
                  <FaEnvelope className="text-primary-500 shrink-0" size={13} />
                  {GARAGE.email}
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-4 p-3 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <FaClock className="text-primary-500" size={11} />
                <p className="text-xs font-semibold text-gray-700">Horaires d'ouverture</p>
              </div>
              <p className="text-xs text-gray-400">{GARAGE.hours.weekdays}</p>
              <p className="text-xs text-gray-400">{GARAGE.hours.friday}</p>
              <p className="text-xs text-gray-400">{GARAGE.hours.saturday}</p>
              <p className="text-xs text-gray-300">{GARAGE.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {year} Garage Concorde Sàrl. Tous droits réservés.</p>
          <p>Avenue d'Echallens 4A — 1004 Lausanne, Suisse</p>
        </div>
      </div>
    </footer>
  )
}
