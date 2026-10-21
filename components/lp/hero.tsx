import Image from 'next/image'
import { ArrowRight, CalendarCheck, MapPin } from 'lucide-react'
import { CtaButton } from './cta-button'

const BADGES = [
  { label: '学費（オンライン特別プログラム）', value: '年120万円' },
  { label: '就職率（英語＋日本語）', value: 'ほぼ100%' },
  { label: '留学生の出身', value: '世界67カ国' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-secondary text-navy-deep">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,58,138,0.10),transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold-soft px-3 py-1 text-xs font-medium text-navy">
            <CalendarCheck className="size-3.5 text-gold" aria-hidden="true" />
            2027年1月開講予定 新オンライン大学・大学院特別プログラム
          </p>

          <h1 className="mt-6 text-balance text-3xl font-black leading-[1.3] tracking-tight text-navy md:text-5xl md:leading-[1.25]">
            <span className="bg-[linear-gradient(transparent_62%,rgba(245,158,11,0.45)_62%)]">{'世界67カ国'}</span>
            の仲間と学ぶ
            <br />
            東京の米国大学
          </h1>
          <p className="mt-5 text-pretty text-lg font-bold leading-relaxed md:text-2xl">
            <span className="rounded bg-navy px-1.5 py-0.5 font-display text-white">年120万円</span>
            から始める
            <br />
            <span className="inline-block">レイクランド大学ジャパン・キャンパス</span>
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-border bg-white px-4 py-3 text-sm shadow-sm md:text-base">
            <span className="font-bold">米国本校の学費</span>
            <ArrowRight className="size-4 text-gold" aria-hidden="true" />
            <span className="font-bold text-navy">日本校は半額、オンラインはさらに半額</span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              東京・両国
            </span>
          </div>

          <ul className="mt-6 grid grid-cols-3 gap-2 md:gap-3" aria-label="主な特長">
            {BADGES.map((badge, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center rounded-xl bg-white px-2 py-3 text-center text-navy shadow-sm ring-1 ring-border"
              >
                <span className="text-[11px] font-medium text-muted-foreground md:text-xs">{badge.label}</span>
                <span className="mt-0.5 text-sm font-black md:text-lg">{badge.value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start gap-3">
            <CtaButton className="w-full sm:w-auto" />
            <p className="text-xs text-muted-foreground">参加無料・手ぶらOK・LINE経由で受験料免除</p>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-white shadow-xl lg:aspect-[4/5]">
            <Image
              src="/images/hero.png"
              alt="国際色豊かな大学院生がディスカッションする教室の様子"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-navy px-5 py-4 text-white shadow-xl md:-left-6">
            <p className="text-xs text-white/70">米国ウィスコンシン州・1862年創立</p>
            <p className="font-display text-lg font-black">文部科学省認可の外国大学日本校</p>
          </div>
        </div>
      </div>
    </section>
  )
}
