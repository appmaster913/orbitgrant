import { Button } from './Button'
import { SectionIntro } from './SectionIntro'

const items = [
  'IT professionals ready to accelerate their career with structured support.',
  'Engineers who want expert help with resumes, bidding, and interviews.',
  'Candidates open to private, curated introductions — not public job boards.',
  'Coaches and mentors who want to help talent succeed globally.',
]

export function Qualifications() {
  return (
    <section className="section-block border-t border-border bg-muted/20">
      <div className="container-narrow">
        <SectionIntro
          label="Who we work with"
          title="Low, clear bar to join."
          description="If this is you, we want to talk. No pedigree filter — we evaluate on actual work and goals."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-border bg-background p-5"
            >
              <svg
                className="mt-0.5 size-5 shrink-0 text-brand"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" />
              </svg>
              <p className="text-sm leading-6">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button href="#join" variant="primary" size="lg">
            Join OrbitGrant
          </Button>
        </div>
      </div>
    </section>
  )
}
