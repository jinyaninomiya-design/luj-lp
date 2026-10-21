import React from 'react'

interface SectionHeadingProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
  description?: React.ReactNode
  eyebrow?: string
  centered?: boolean
  tone?: 'light' | 'dark'
}

export function SectionHeading({
  title,
  subtitle,
  description,
  eyebrow,
  centered = true,
  tone = 'light',
}: SectionHeadingProps) {
  const subContent = subtitle || description
  const isDark = tone === 'dark'

  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase block mb-1">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-2xl md:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subContent && (
        <p className={`mt-2 text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subContent}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
