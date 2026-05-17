import { SectionHeading } from './SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Join OrbitGrant',
    description: 'Create your profile, skills, and career goals.',
  },
  {
    number: '02',
    title: 'Get Matched with Experts',
    description: 'You are connected with resume coaches and job strategists.',
  },
  {
    number: '03',
    title: 'Land Interviews Faster',
    description:
      'We optimize your applications and prepare you for interviews until you get hired.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Process"
          title="Your path to employment in 3 steps"
        />

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/40 to-cyan-400/0"
            aria-hidden
          />

          {steps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 text-center hover:border-cyan-400/30 transition-colors"
            >
              <span className="inline-block text-4xl font-bold text-cyan-400/30 mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-[var(--color-muted)] leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
