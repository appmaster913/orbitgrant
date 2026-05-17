import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

const variants = {
  primary:
    'bg-cyan-400 text-ink font-semibold hover:bg-cyan-300 shadow-lg shadow-cyan-500/20',
  secondary:
    'bg-white/10 text-white font-medium hover:bg-white/15 border border-white/10',
  outline:
    'border border-cyan-400/50 text-cyan-300 font-medium hover:bg-cyan-400/10',
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
