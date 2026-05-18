import { Button } from './Button'
import { SectionIntro } from './SectionIntro'

const supports = [
  {
    title: 'Interview coaching',
    description:
      'We prep you for client interviews, review talking points, and run mock sessions.',
  },
  {
    title: 'Application strategy',
    description:
      'Job bidding and positioning so your profile lands in front of the right hiring managers.',
  },
  {
    title: 'Resume engineering',
    description:
      'ATS-ready resumes rewritten by experts who understand your target market.',
  },
  {
    title: 'Career aftercare',
    description:
      'Continuous support through offer negotiation and your first weeks on the job.',
  },
]

export function CandidateSupport() {
  return (
    <section className="section-block border-t border-border bg-muted/30">
      <div className="container-narrow">
        <SectionIntro
          label="We stand with candidates"
          title="Unlike traditional firms, we're on the candidate's side."
          description="Other firms optimize for client revenue and treat engineers as interchangeable. We invest in every candidate's success — because their success is our only compounding asset."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {supports.map((item) => (
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

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="#join" variant="primary">
            Join OrbitGrant
          </Button>
          <Button href="#contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  )
}
