import Image from 'next/image'
import { Check, Globe2, HeartHandshake } from 'lucide-react'
import { SectionHeading } from './section-heading'

const STATS = [
  { value: '67カ国', label: '留学生の出身国' },
  { value: 'ほぼ100%', label: '就職率（英語＋日本語）' },
  { value: '年120万円', label: 'オンライン特別プログラム学費' },
]

const SUPPORT_ITEMS = [
  '15〜20名の少人数制クラスで、教授との距離が近い',
  '先輩学生チューターに予約制で相談できる',
  '英語に不安があれば英語スキルアップコース（EAP）で準備できる',
  'LINEからのアクセスで、受験料免除＋出願手続きの丁寧なサポート',
]

export function Campus() {
  return (
    <section id="campus" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Campus & Support"
          title={
            <>
              {'世界の縮図のような学びの場が、'}
              <br className="sm:hidden" />
              {'東京・両国にあります'}
            </>
          }
          description="米国人学生や世界各国からの留学生と学びながら、伝統文化と最先端が共存する東京での大学生活を楽しめます。"
        />

        <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-3 divide-x divide-border rounded-2xl bg-secondary py-5">
          {STATS.map((stat, index) => (
            <div key={index} className="flex flex-col-reverse items-center px-2 text-center">
              <dt className="mt-1 text-[11px] text-muted-foreground md:text-sm">{stat.label}</dt>
              <dd className="text-xl font-black text-navy md:text-3xl">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/campus.png"
              alt="明るく開放的なキャンパスのロビー"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-navy text-gold">
              <Globe2 className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-navy md:text-2xl">伝統文化と最先端の東京を満喫</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              キャンパスは墨田区両国。安全・安心な日本にいながら、外国人観光客にも人気の伝統的な日本文化や、秋葉原などの最先端の魅力を楽しめます。墨田区との連携協定により、地域の文化・スポーツイベントにも参加できます。
            </p>
          </div>
        </div>

        <div className="mt-14 grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="md:order-2 relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/support.png"
              alt="日本人スタッフが学生と個別に相談している様子"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="md:order-1">
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gold text-navy-deep">
              <HeartHandshake className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl font-bold text-navy md:text-2xl">入学前から入学後まで、親身にサポート</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              少人数制だからこそ、一人ひとりに寄り添った指導とサポートが受けられます。
            </p>
            <ul className="mt-5 grid gap-3">
              {SUPPORT_ITEMS.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
