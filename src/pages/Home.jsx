import Hero from '../components/home/Hero'
import WhyUs from '../components/home/WhyUs'
import GallerySection from '../components/home/Gallery'
import Testimonials from '../components/home/Testimonials'
import CTABanner from '../components/home/CTABanner'
import Social from '../components/home/Social'
import ContactSection from '../components/home/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <GallerySection />
      <Testimonials />
      <CTABanner />
      <Social />
      <ContactSection />
    </>
  )
}
