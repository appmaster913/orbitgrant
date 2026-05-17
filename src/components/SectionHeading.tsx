type SectionHeadingProps = {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl mb-14 ${alignClass}`}>
      {label && (
        <p className="text-cyan-600 text-sm font-semibold tracking-widest uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-[var(--color-fg)] font-semibold tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  )
}
