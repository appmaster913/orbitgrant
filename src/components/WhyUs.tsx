import { Button } from './Button'
import { SectionIntro } from './SectionIntro'

const reasons = [
  {
    title: 'Candidate-first',
    description: 'Active interview and delivery support, not just placement.',
  },
  {
    title: 'Private network',
    description: 'Curated introductions — not a noisy public job board.',
  },
  {
    title: 'Expert coaching',
    description: 'Resume, bidding, and interview prep from practitioners.',
  },
  {
    title: 'Faster cycles',
    description: '2–3 month average hiring target with structured support.',
  },
  {
    title: 'Global reach',
    description: 'IT professionals and opportunities across international markets.',
  },
  {
    title: 'Until placement',
    description: 'Continuous 1:1 support through offer and onboarding.',
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="section-block bg-muted/20">
      <div className="container-narrow">
        <SectionIntro
          label="Why OrbitGrant"
          title="Built differently, on purpose."
          description="Traditional firms optimize for volume. We optimize for candidate success — supported candidates deliver and stay."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-muted text-foreground">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Button href="#contact" variant="primary">
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  )
}
