import { ClipboardList, MailCheck, MousePointerClick } from 'lucide-react'
import { CtaButton } from './cta-button'

const FLOW = [
  { icon: MousePointerClick, label: '予約フォームを開く' },
  { icon: ClipboardList, label: '日程と情報を入力' },
  { icon: MailCheck, label: '確認メールを受信' },
]

export function Reservation() {
  return (
    <section id="reserve" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center text-white shadow-2xl md:px-12 md:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-gold/20 blur-3xl"
          />
          <p className="relative font-display text-sm font-bold uppercase tracking-[0.25em] text-gold">Reservation</p>
          <h2 className="relative mt-3 text-balance text-2xl font-black leading-snug md:text-4xl">
            {'まずは無料のオープンキャンパスで'}
            <br />
            {'LUJの学びを体感してください'}
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-pretty text-sm leading-relaxed text-white/80 md:text-base">
            予約は1分ほどで完了します。学費や英語への不安など、気になることはお気軽にご相談ください。
          </p>

          <ol className="relative mx-auto mt-8 grid max-w-2xl gap-3 text-left sm:grid-cols-3">
            {FLOW.map((step, index) => (
              <li key={index} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gold font-display text-sm font-black text-navy-deep">
                  {index + 1}
                </span>
                <span className="flex items-center gap-2 text-sm font-medium">
                  <step.icon className="size-4 shrink-0 text-gold" aria-hidden="true" />
                  {step.label}
                </span>
              </li>
            ))}
          </ol>

          <div className="relative mt-10">
            <CtaButton label="オープンキャンパスを予約する" className="w-full sm:w-auto sm:px-12 sm:py-5 sm:text-xl" />
          </div>
          <p className="relative mt-4 text-xs text-white/60">外部サイト（Microsoft Forms）が新しいタブで開きます</p>
        </div>
      </div>
    </section>
  )
}
