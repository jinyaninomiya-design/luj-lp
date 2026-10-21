import { MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep pb-28 pt-10 text-white/70 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="font-display font-bold text-white">Lakeland University — Japan Campus</p>
          <p className="mt-1 flex items-center gap-1">
            <MapPin className="size-4" aria-hidden="true" />
            東京都墨田区両国
          </p>
        </div>
        <p className="text-xs">{'© 2026 Lakeland University Japan Campus. All rights reserved.'}</p>
      </div>
    </footer>
  )
}
