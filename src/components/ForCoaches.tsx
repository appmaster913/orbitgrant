import { Button } from './Button'

const coachBenefits = [
  'Earn by helping candidates succeed',
  'Work with global IT professionals',
  'Flexible, remote collaboration',
]

export function ForCoaches() {
  return (
    <section id="coaches" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/80 via-[var(--color-surface-elevated)] to-[var(--color-surface)] p-10 lg:p-16">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"
            aria-hidden
          />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-indigo-300 text-sm font-semibold tracking-widest uppercase mb-3">
                For experts
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white leading-tight">
                Become a Professional Career Coach
              </h2>
              <p className="mt-4 text-lg text-[var(--color-muted)] leading-relaxed">
                Join our platform as a resume expert, interviewer, or technical mentor.
              </p>
            </div>

            <div>
              <ul className="space-y-4 mb-10">
                {coachBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-white/90">
                    <span className="h-2 w-2 rounded-full bg-indigo-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Button href="#apply-coach" variant="outline" className="text-base px-8 py-3.5">
                Apply as Coach
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
