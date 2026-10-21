import { Building2, Clock, MessagesSquare, Shirt, Briefcase, Mic } from 'lucide-react'
import { OPEN_CAMPUS_DATES } from '@/lib/site'
import { SectionHeading } from './section-heading'

// TODO: 当日の流れ・所要時間は仮の内容です。実際のプログラムに合わせて修正してください。
const STEPS = [
  {
    icon: Building2,
    title: 'キャンパス見学',
    body: '国際色豊かなキャンパスの教室や施設を見学し、LUJの学びの環境を体感できます。',
    duration: '約30分',
  },
  {
    icon: Mic,
    title: '学校説明・プログラム紹介',
    body: 'LUJの特長、学費、就職実績、2027年1月開講予定のオンライン特別プログラムについてご説明します。',
    duration: '約40分',
  },
  {
    icon: MessagesSquare,
    title: '個別相談',
    body: '英語への不安、出願方法、学費など、気になることを個別にご相談いただけます。',
    duration: '約30分',
  },
]

export function OpenCampus() {
  return (
    <section id="open-campus" className="scroll-mt-16 bg-navy-deep py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Open Campus"
          title="まずは無料のオープンキャンパスへ"
          description="実際のキャンパスの雰囲気や、教授・スタッフとの距離の近さを、ぜひ体感してください。"
        />

        <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-bold text-navy-deep">
            <Briefcase className="size-4" aria-hidden="true" />
            手ぶらでOK
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2 text-sm font-bold text-navy-deep">
            <Shirt className="size-4" aria-hidden="true" />
            服装自由
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2 text-sm font-bold">
            参加無料
          </span>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-bold">
              <Clock className="size-5 text-gold" aria-hidden="true" />
              開催日程
            </h3>
            <ul className="mt-5 grid gap-3">
              {OPEN_CAMPUS_DATES.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-black">{item.date}</span>
                    <span className="text-sm text-white/70">{`(${item.day})`}</span>
                    <span className="ml-2 text-sm text-white/80">{item.time}</span>
                  </div>
                  <span
                    className={
                      item.highlight
                        ? 'shrink-0 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy-deep'
                        : 'shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white'
                    }
                  >
                    {item.status}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-white/60">※ 開催日程・内容は変更になる場合があります。最新情報は予約フォームをご確認ください。</p>
          </div>

          <div>
            <h3 className="text-lg font-bold">当日の流れ</h3>
            <ol className="mt-5 grid gap-4">
              {STEPS.map((step, index) => (
                <li key={index} className="relative flex gap-4 rounded-2xl bg-white p-5 text-foreground">
                  <div className="flex flex-col items-center">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-gold">
                      <step.icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="mt-2 font-display text-[11px] font-bold tracking-widest text-navy">
                      STEP {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-lg font-bold text-navy">{step.title}</p>
                      <span className="rounded-full bg-gold-soft px-2.5 py-0.5 text-xs font-medium text-navy">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
