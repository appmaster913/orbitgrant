import { SectionHeading } from './SectionHeading'

const painPoints = [
  'Overcrowded job markets',
  'Weak resume positioning',
  'Lack of interview preparation',
  'No access to insider opportunities',
  'Ineffective job application strategies',
]

export function Problem() {
  return (
    <section className="py-24 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="The challenge"
          title="Breaking into tech is harder than ever"
          description="Thousands of skilled developers struggle to land roles due to:"
        />

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {painPoints.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 rounded-xl border border-red-400/10 bg-red-400/5 px-5 py-4"
            >
              <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-400/20 text-red-400 text-xs">
                ✕
              </span>
              <span className="text-white/90">{point}</span>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-lg text-[var(--color-muted)] max-w-2xl mx-auto">
          Even experienced engineers often get stuck between jobs for{' '}
          <span className="text-white font-medium">months</span>.
        </p>
      </div>
    </section>
  )
}
