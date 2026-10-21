import { SiteHeader } from "@/components/lp/site-header"
import { Hero } from "@/components/lp/hero"
import { Reasons } from "@/components/lp/reasons"
import { Campus } from "@/components/lp/campus"
import { OpenCampus } from "@/components/lp/open-campus"
import { Faq } from "@/components/lp/faq"
import { Reservation } from "@/components/lp/reservation"
import { SiteFooter } from "@/components/lp/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />
      <main>
        <Hero />
        <Reasons />
        <Campus />
        <OpenCampus />
        <Faq />
        <Reservation />
      </main>
      <SiteFooter />
    </div>
  )
}
