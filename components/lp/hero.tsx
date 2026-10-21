import React from 'react'
import CtaButton from './cta-button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-20 px-4">
      {/* 背景のグラデーション装飾 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs md:text-sm font-medium">
          <span>2027年1月開講予定 新オンライン大学・大学院特別プログラム</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-tight">
          世界67カ国の仲間と学ぶ<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
            東京の米国大学
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          <span className="text-amber-400 font-bold">年120万円</span> から始めるレイクランド大学ジャパン・キャンパス
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CtaButton size="large" className="w-full sm:w-auto shadow-lg shadow-amber-500/20" />
        </div>

        {/* 特長バッジ */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur">
            <span className="text-xs text-slate-400 block mb-1">学費（オンライン特別プログラム）</span>
            <span className="text-lg font-bold text-amber-400">年120万円</span>
          </div>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur">
            <span className="text-xs text-slate-400 block mb-1">就職率（英語 ＋ 日本語）</span>
            <span className="text-lg font-bold text-amber-400">ほぼ 100%</span>
          </div>
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur">
            <span className="text-xs text-slate-400 block mb-1">留学生の出身</span>
            <span className="text-lg font-bold text-amber-400">世界67カ国</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
