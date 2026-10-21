import { Plus } from 'lucide-react'
import { SectionHeading } from './section-heading'

const FAQ_GROUPS = [
  {
    category: '学費・費用',
    items: [
      {
        q: '学費はいくらですか？',
        a: '2027年1月開講予定の「新オンライン大学・大学院特別プログラム」は年120万円です。LUJの通常の学費は米国本校の半額で、オンライン授業はそのさらに半額に設定されています。',
      },
      {
        q: 'オンライン特別プログラムは、延長して受講できますか？',
        a: '何年でも延長して受講できます。たとえば8年かけて卒業する場合は、年60万円（月5万円）の負担で学べます。',
      },
      {
        q: '受験料はかかりますか？',
        a: 'LINEからアクセスしていただくと、受験料が免除されます。出願手続きの丁寧なサポートも受けられます。',
      },
    ],
  },
  {
    category: '授業・英語',
    items: [
      {
        q: '授業はすべて英語ですか？ついていけるか不安です。',
        a: '授業はすべて英語で行われます。不安のある方には、英語スキルアップコース（EAP）があります。最長1年間で、4カ月単位でLUJの推奨基準の英語スコアに達すれば、通常コースへ移行できます。',
      },
      {
        q: 'クラスの人数や、学生の構成を教えてください。',
        a: 'クラスは15〜20名の少人数制です。学生は米国人学生が約30%、日本人学生が約20%で、世界67カ国から留学生が集まっています。先輩学生チューターへの予約制の相談制度もあります。',
      },
    ],
  },
  {
    category: '進路・編入',
    items: [
      {
        q: '卒業後の就職実績は？',
        a: '英語と日本語の両方ができる卒業生は、日本の大企業を中心に就職率ほぼ100%です。アクセンチュア、ANA、NHK、文化放送、コストコ、ペニンシュラホテル、星野リゾートなどへの就職実績があります。',
      },
      {
        q: '米国本校や姉妹校への編入はできますか？',
        a: '1年以上LUJで学んだ後、ウィスコンシン州の米国本校やヴァージニア州の姉妹校に編入できます。編入後も日本の学費が適用され、学費を節約できます。卒業証書・学位は米国本校と同じで、日本校との記載はありません。',
      },
    ],
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading eyebrow="FAQ" title="よくある質問" />

        <div className="mt-12 grid gap-10">
          {FAQ_GROUPS.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="mb-4 inline-flex rounded-full bg-navy px-4 py-1 text-sm font-bold text-white">
                {group.category}
              </h3>
              <div className="grid gap-3">
                {group.items.map((item, itemIndex) => (
                  <details
                    key={itemIndex}
                    className="group rounded-2xl bg-card ring-1 ring-border transition-shadow open:shadow-md"
                  >
                    <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 font-bold text-navy [&::-webkit-details-marker]:hidden">
                      <span className="font-display text-lg font-black text-gold" aria-hidden="true">
                        Q
                      </span>
                      <span className="flex-1 text-sm md:text-base">{item.q}</span>
                      <Plus
                        className="size-5 shrink-0 text-navy transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      />
                    </summary>
                    <div className="flex gap-3 border-t border-border px-5 py-4">
                      <span className="font-display text-lg font-black text-navy" aria-hidden="true">
                        A
                      </span>
                      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
