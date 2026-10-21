import React from 'react'

interface SectionHeadingProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  description?: React.ReactNode
  eyebrow?: string
  centered?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  description,
  eyebrow,
  centered = true,
}: SectionHeadingProps) {
  const subContent = subtitle || description

  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-widest text-amber-600 uppercase block mb-1">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">{title}</h2>
      {subContent && <p className="mt-2 text-slate-600 text-sm md:text-base">{subContent}</p>}
    </div>
  )
}

export default SectionHeading
