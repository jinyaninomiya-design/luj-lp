import React from 'react'

interface SectionHeadingProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  eyebrow?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, eyebrow, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase block mb-1">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600 text-sm md:text-base">{subtitle}</p>}
    </div>
  )
}

export default SectionHeading
