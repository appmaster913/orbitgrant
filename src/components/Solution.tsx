import { SectionHeading } from './SectionHeading'

const offerings = [
  'Professional job application bidding support',
  'Resume optimization by industry experts',
  'Technical interview coaching',
  'Career switching guidance (junior → senior transitions)',
  'Global talent-to-company matching system',
]

export function Solution() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Our approach"
          title="A Private Global Career Acceleration Network"
          description="We connect IT professionals with a structured ecosystem designed to get them hired faster."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[var(--color-muted)] mb-6">Our platform provides:</p>
            <ul className="space-y-4">
              {offerings.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-[var(--color-fg)]/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-2xl border border-[var(--color-border)] bg-gradient-to-br from-white to-slate-50 p-8 lg:p-10 shadow-sm">
            <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            <p className="font-serif text-2xl sm:text-3xl text-[var(--color-fg)] leading-snug">
              We don&apos;t just help you apply —{' '}
              <span className="text-cyan-600">we help you win offers.</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Resume', 'Interview', 'Bidding', 'Matching'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--color-border)] bg-slate-50 px-4 py-1.5 text-sm text-[var(--color-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
