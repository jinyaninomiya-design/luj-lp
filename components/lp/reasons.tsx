import { BadgeCheck, Briefcase, Languages, Users } from 'lucide-react'
import { SectionHeading } from './section-heading'

const REASONS = [
  {
    icon: Languages,
    worry: '授業が全部英語で、ついていけるか不安…',
    title: '英語力を鍛える環境と、EAPコース',
    body: '授業はすべて英語で行われ、4年間で英語力と国際的なコミュニケーション力が着実に身に付きます。不安がある方は、最長1年間の英語スキルアップコース（EAP）から始められ、4カ月単位で基準に達すれば通常コースへ移行できます。',
  },
  {
    icon: Briefcase,
    worry: '卒業後の就職は大丈夫？',
    title: '英語＋日本語で、就職率ほぼ100%',
    body: '英語と日本語の両方ができる卒業生は、日本の大企業を中心に就職率ほぼ100%。アクセンチュア、ANA、NHK、文化放送、コストコ、ペニンシュラホテル、星野リゾートなどへの就職実績があります。',
  },
  {
    icon: Users,
    worry: '大人数の授業で置いていかれたくない…',
    title: '15〜20名の少人数制で、親身に指導',
    body: '米国人教授をはじめ世界各国の優秀な教授陣が、15〜20名の少人数クラスで丁寧に指導。先輩学生チューターへの予約制の相談制度もあり、科目選択や授業のフォローアップも安心です。',
  },
]

export function Reasons() {
  return (
    <section id="reasons" className="scroll-mt-16 bg-navy-deep py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Why Us"
          title={
            <>
              {'LUJが'}
              <span className="text-gold">選ばれる</span>
              {'理由'}
            </>
          }
          description="英語への不安、就職、学びの環境。よくあるお悩みに、LUJはこうお応えします。"
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {REASONS.map((reason, index) => (
            <li
              key={index}
              className="relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-lg"
            >
              <div className="bg-navy/5 px-6 pb-5 pt-6">
                <p className="relative rounded-xl bg-white px-4 py-3 text-sm font-medium text-muted-foreground shadow-sm after:absolute after:-bottom-2 after:left-6 after:size-4 after:rotate-45 after:bg-white">
                  {`「${reason.worry}」`}
                </p>
              </div>
              <div className="flex flex-1 flex-col px-6 pb-7 pt-5">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <reason.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-xs font-bold tracking-widest text-gold">
                    POINT {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 flex items-start gap-2 text-lg font-bold text-navy">
                  <BadgeCheck className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
