import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import { staggerContainer, fadeInLeft, fadeInRight } from '../../utils/animations'
import SectionTitle from '../ui/SectionTitle'
import { GARAGE } from '../../constants/data'

const INFO = [
  { icon: FaPhone, label: 'Téléphone', value: GARAGE.phone, href: `tel:${GARAGE.phone}` },
  { icon: FaEnvelope, label: 'Email', value: GARAGE.email, href: `mailto:${GARAGE.email}` },
  { icon: FaMapMarkerAlt, label: 'Adresse', value: `${GARAGE.address}, ${GARAGE.city}`, href: '#map' },
  { icon: FaWhatsapp, label: 'WhatsApp', value: 'Envoyer un message', href: GARAGE.whatsapp },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 900))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <SectionTitle
            subtitle="Parlons-en"
            title="Contactez-"
            highlight="nous"
            description="Besoin d'un devis, d'un rendez-vous ou d'un renseignement ? Nous vous répondons rapidement."
            center
            light
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-12">

          {/* Info cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {INFO.map(item => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={fadeInLeft}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 p-4 bg-gray-50 border border-gray-200
                           rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20
                                group-hover:bg-accent/10 group-hover:border-accent/30
                                flex items-center justify-center shrink-0 transition-colors duration-200">
                  <item.icon className="text-primary-500 group-hover:text-accent transition-colors duration-200" size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">{item.label}</p>
                  <p className="text-gray-900 text-sm font-semibold">{item.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div variants={fadeInLeft}
              className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <FaClock className="text-primary-500" size={14} />
                <p className="text-gray-900 text-sm font-semibold">Horaires d'ouverture</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-600 text-sm">{GARAGE.hours.weekdays}</p>
                <p className="text-gray-600 text-sm">{GARAGE.hours.friday}</p>
                <p className="text-gray-600 text-sm">{GARAGE.hours.saturday}</p>
                <p className="text-gray-400 text-sm">{GARAGE.hours.sunday}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center mx-auto mb-4">
                    <FaCheckCircle className="text-primary-500" size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Message Envoyé !</h3>
                  <p className="text-gray-500 mb-6">Nous vous contacterons dans les plus brefs délais.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }}
                          className="btn-primary">
                    Nouveau message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">Demande de Devis Gratuit</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Nom complet *</label>
                      <input type="text" name="name" required value={form.name} onChange={onChange}
                             placeholder="Jean Dupont" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Téléphone *</label>
                      <input type="tel" name="phone" required value={form.phone} onChange={onChange}
                             placeholder="021 000 00 00" className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Email</label>
                    <input type="email" name="email" value={form.email} onChange={onChange}
                           placeholder="jean@exemple.ch" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Service souhaité</label>
                    <select name="service" value={form.service} onChange={onChange} className="input-field">
                      <option value="">Sélectionner un service...</option>
                      <option>Réparation et entretien mécanique</option>
                      <option>Achat & Vente de véhicules d'occasion</option>
                      <option>Services spécialisés</option>
                      <option>Préparation d'expertise</option>
                      <option>Carrosserie</option>
                      <option>Covering</option>
                      <option>Montage écran et caméra de recul</option>
                      <option>Location de voiture</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">Message *</label>
                    <textarea name="message" required rows={4} value={form.message} onChange={onChange}
                              placeholder="Décrivez votre besoin ou problème..."
                              className="input-field resize-none" />
                  </div>
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                                 disabled={loading} className="btn-primary w-full justify-center py-4">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : 'Envoyer ma demande'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          id="map"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-gray-200 h-72 shadow-sm"
        >
          <iframe
            title="Garage Concorde Lausanne"
            src={GARAGE.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
