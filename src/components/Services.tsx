import { SectionHeading } from './SectionHeading'

const services = [
  {
    icon: '🎯',
    title: 'Job Bidding Assistance',
    description:
      'We position your profile for the right roles and maximize interview opportunities.',
  },
  {
    icon: '📄',
    title: 'Resume Engineering',
    description:
      'We rewrite and optimize your resume for ATS systems and hiring managers.',
  },
  {
    icon: '🧠',
    title: 'Interview Coaching',
    description:
      'Mock interviews, system design prep, and behavioral training.',
  },
  {
    icon: '🌍',
    title: 'Global Job Network',
    description:
      'Access to international opportunities through our private talent ecosystem.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading label="Services" title="What We Offer" />

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-[var(--color-border)] bg-white p-8 shadow-sm hover:border-cyan-300 hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl" role="img" aria-hidden>
                {service.icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[var(--color-fg)] group-hover:text-cyan-600 transition-colors">
                {service.title}
              </h3>
              <p className="mt-3 text-[var(--color-muted)] leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
