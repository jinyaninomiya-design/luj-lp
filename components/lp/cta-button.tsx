import React from 'react'

interface CTAButtonProps {
  href?: string
  children: React.ReactNode
  className?: string
  size?: 'normal' | 'large'
}

export default function CTAButton({ href = '#reservation', children, className = '', size = 'normal' }: CTAButtonProps) {
  const sizeClasses = size === 'large' ? 'px-8 py-4 text-lg font-bold' : 'px-6 py-3 text-base font-semibold'
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors shadow-md hover:shadow-lg ${sizeClasses} ${className}`}
    >
      {children}
    </a>
  )
}
