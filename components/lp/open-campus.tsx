import React from 'react'
import SectionHeading from './section-heading'

export default function OpenCampus() {
  return (
    <section id="open-campus" className="py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Open Campus"
          title="まずは無料のオープンキャンパスへ"
          description="実際のキャンパスの雰囲気や、教授・スタッフとの距離の近さを、ぜひ体感してください。"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* 開催日程 */}
          <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6 md:p-8 backdrop-blur">
            <h3 className="text-lg font-bold text-amber-400 mb-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
              開催日程
            </h3>
            <ul className="space-y-4 text-sm md:text-base">
              <li className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                <span className="font-semibold text-slate-200">2026年11月15日(土)</span>
                <span className="text-amber-300 font-mono">13:00 - 15:00</span>
              </li>
              <li className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                <span className="font-semibold text-slate-200">2026年12月06日(日)</span>
                <span className="text-amber-300 font-mono">13:00 - 15:00</span>
              </li>
            </ul>
            <p className="mt-6 text-xs text-slate-400">
              ※個別相談・保護者様のみのご参加も可能です。
            </p>
          </div>

          {/* 当日の流れ */}
          <div className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6 md:p-8 backdrop-blur">
            <h3 className="text-lg font-bold text-amber-400 mb-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
              当日の流れ
            </h3>
            <ol className="space-y-4 text-sm">
              <li className="flex gap-4">
                <span className="font-mono text-amber-400 font-bold">01</span>
                <div>
                  <h4 className="font-semibold text-slate-200">キャンパス見学 & 大学説明</h4>
                  <p className="text-xs text-slate-400 mt-1">施設のご案内と大学の特長を分かりやすく説明します。</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-amber-400 font-bold">02</span>
                <div>
                  <h4 className="font-semibold text-slate-200">模擬授業の体験</h4>
                  <p className="text-xs text-slate-400 mt-1">実際の授業の雰囲気や英語での学びを体感いただけます。</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-amber-400 font-bold">03</span>
                <div>
                  <h4 className="font-semibold text-slate-200">個別相談コーナー</h4>
                  <p className="text-xs text-slate-400 mt-1">入試・学費・キャリア等、何でもお気軽にご相談ください。</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
