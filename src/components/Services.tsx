import { SectionIntro } from './SectionIntro'

const services = [
  {
    title: 'Job Bidding Assistance',
    description:
      'We position your profile for the right roles and maximize interview opportunities — not spray-and-pray applications.',
    href: '#contact',
  },
  {
    title: 'Resume Engineering',
    description:
      'ATS-optimized resumes rewritten by industry experts so hiring managers actually read your story.',
    href: '#contact',
  },
  {
    title: 'Interview Coaching',
    description:
      'Mock interviews, system design prep, and behavioral training until you walk in confident.',
    href: '#contact',
  },
]

function ServiceIcon() {
  return (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}

export function Services() {
  return (
    <section id="services" className="section-block">
      <div className="container-narrow">
        <SectionIntro
          label="Three pillars of support"
          title="One network, one vetting bar, three ways we help you win."
          description="Whether you're breaking into tech, switching roles, or accelerating a senior move — we built a structured track for it."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-colors hover:border-foreground/20 hover:bg-muted/30"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-muted text-foreground">
                <ServiceIcon />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                Learn more
                <svg
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
