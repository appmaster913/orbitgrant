import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

const variants = {
  primary:
    'bg-cyan-500 text-white font-semibold hover:bg-cyan-600 shadow-lg shadow-cyan-500/25',
  secondary:
    'bg-slate-100 text-[var(--color-fg)] font-medium hover:bg-slate-200 border border-[var(--color-border)]',
  outline:
    'border border-cyan-600/40 text-cyan-700 font-medium hover:bg-cyan-50',
}

export function Button({
  children,
  href = '#',
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm transition-all duration-200 ${variants[variant]} ${className}`

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
