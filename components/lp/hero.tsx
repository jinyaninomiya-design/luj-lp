import React from 'react'

export default function Hero() {
  return (
    <section className="relative bg-white text-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* バッジ */}
        <div className="inline-block mb-6">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
            2027年1月開講予定 新オンライン大学・大学院特別プログラム
          </span>
        </div>

        {/* メインタイトル */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
          世界67カ国の仲間と学ぶ<br />
          <span className="text-amber-600">東京の米国大学</span>
        </h1>

        {/* サブタイトル */}
        <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          <span className="font-bold text-amber-600">年120万円</span> から始めるレイクランド大学ジャパン・キャンパス
        </p>

        {/* CTAボタン */}
        <div className="mb-12">
          <a
            href="#reservation"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-full text-lg shadow-md hover:shadow-lg transition-all"
          >
            無料 オープンキャンパスに参加する
          </a>
        </div>

        {/* 実績カード3列 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl">
            <p className="text-xs text-slate-500 font-medium mb-1">学費（オンライン特別プログラム）</p>
            <p className="text-xl font-bold text-slate-900">年120万円</p>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl">
            <p className="text-xs text-slate-500 font-medium mb-1">就職率（英語 ＋ 日本語）</p>
            <p className="text-xl font-bold text-slate-900">ほぼ 100%</p>
          </div>
          <div className="bg-slate-50 border border-slate-200/80 p-5 rounded-2xl">
            <p className="text-xs text-slate-500 font-medium mb-1">留学生の出身</p>
            <p className="text-xl font-bold text-slate-900">世界67カ国</p>
          </div>
        </div>
      </div>
    </section>
  )
}
