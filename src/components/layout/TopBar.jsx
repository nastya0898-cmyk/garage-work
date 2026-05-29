import { FaStar } from 'react-icons/fa'

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[61] bg-accent text-white h-9 flex items-center justify-center">
      <p className="text-[11px] sm:text-xs font-display font-semibold tracking-widest uppercase flex items-center gap-2">
        <FaStar size={8} />
        Plus de 20 ans d'expérience au service de votre automobile à Lausanne
        <FaStar size={8} />
      </p>
    </div>
  )
}
