import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Services from '../components/sections/Services'
import Differentials from '../components/sections/Differentials'
import Partners from '../components/sections/Partners'
import Testimonials from '../components/sections/Testimonials'
import Location from '../components/sections/Location'
import CtaFinal from '../components/sections/CtaFinal'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Partners />
        <Testimonials />
        <Location />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
