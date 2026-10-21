import React from 'react'
import CtaButton from './cta-button'

export function ReservationSection() {
  return (
    <section id="reservation" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
        <span className="text-xs font-semibold tracking-widest text-amber-400 uppercase block mb-2">
          Reservation
        </span>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
          まずは無料のオープンキャンパスで<br />
          LUJの学びを体感してください
        </h2>
        <p className="text-sm md:text-base text-slate-300 mb-8 max-w-2xl mx-auto">
          参加無料・服装自由。保護者の方やご友人とのご参加も大歓迎です。
        </p>

        <div className="inline-block w-full sm:w-auto">
          <CtaButton size="large" className="w-full sm:w-auto shadow-xl hover:scale-105 transition-transform" />
        </div>
        <p className="mt-4 text-xs text-slate-400">※お申し込みは1分で完了します</p>
      </div>
    </section>
  )
}

export default ReservationSection
