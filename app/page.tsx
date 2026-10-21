import Header from '@/components/header'
import Hero from '@/components/hero'
import WhyUs from '@/components/why-us'
import CampusSupport from '@/components/campus-support'
import OpenCampus from '@/components/open-campus'
import Faq from '@/components/faq'
import Reservation from '@/components/reservation'
import Footer from '@/components/footer'
import FloatingCtaBar from '@/components/floating-cta-bar'

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
