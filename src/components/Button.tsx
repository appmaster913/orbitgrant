import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

const variants = {
  primary:
    'bg-foreground text-background font-medium hover:opacity-90',
  secondary:
    'border border-border bg-transparent text-foreground font-medium hover:bg-muted',
  outline:
    'border border-brand/40 text-brand font-medium hover:bg-orange-50',
  ghost:
    'bg-transparent text-foreground font-medium hover:bg-muted',
}

export function Button({
  children,
  href = '#',
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 ${sizes[size]} ${variants[variant]} ${className}`

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  )
}
