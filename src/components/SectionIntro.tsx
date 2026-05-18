type SectionIntroProps = {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionIntro({
  label,
  title,
  description,
  align = 'left',
}: SectionIntroProps) {
  const alignClass = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'

  return (
    <div className={alignClass}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
      )}
      <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
