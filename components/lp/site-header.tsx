import { GraduationCap } from 'lucide-react'
import { CtaButton } from './cta-button'

const NAV = [
  { href: '#reasons', label: '選ばれる理由' },
  { href: '#campus', label: 'キャンパス' },
  { href: '#open-campus', label: 'OC概要' },
  { href: '#faq', label: 'よくある質問' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2 text-navy">
          <span className="flex size-9 items-center justify-center rounded-lg bg-gold text-navy-deep">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-wide">Lakeland University</span>
            <span className="block text-[11px] text-muted-foreground">Japan Campus</span>
          </span>
        </a>
        <nav aria-label="ページ内ナビゲーション" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-sm text-navy/80">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-navy">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <CtaButton label="OC予約" size="md" className="hidden md:inline-flex" />
      </div>
    </header>
  )
}
