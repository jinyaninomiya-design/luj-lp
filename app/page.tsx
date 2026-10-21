import Header from '../components/lp/header'
import Hero from '../components/lp/hero'
import WhyUs from '../components/lp/why-us'
import CampusSupport from '../components/lp/campus-support'
import OpenCampus from '../components/lp/open-campus'
import Faq from '../components/lp/faq'
import Reservation from '../components/lp/reservation'
import Footer from '../components/lp/footer'
import FloatingCtaBar from '../components/lp/floating-cta-bar'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
      <Header />
      <Hero />
      <WhyUs />
      <CampusSupport />
      <OpenCampus />
      <Faq />
      <Reservation />
      <Footer />
      <FloatingCtaBar />
    </main>
  )
}
