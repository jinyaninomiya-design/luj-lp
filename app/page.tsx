import Hero from '@/components/lp/hero'
import OpenCampus from '@/components/lp/open-campus'
import Reservation from '@/components/lp/reservation'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
      <Hero />
      <OpenCampus />
      <Reservation />
    </main>
  )
}
