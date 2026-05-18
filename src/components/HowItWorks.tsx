import { SectionIntro } from './SectionIntro'

const steps = [
  {
    step: '01',
    title: 'Join OrbitGrant',
    description: 'Create your profile with skills, experience, and career goals.',
    icon: 'upload',
  },
  {
    step: '02',
    title: 'Get matched with experts',
    description: 'Connect with resume coaches, job strategists, and interview mentors.',
    icon: 'video',
  },
  {
    step: '03',
    title: 'Land interviews faster',
    description:
      'We optimize applications and prep you for interviews until you get hired.',
    icon: 'send',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-block">
      <div className="container-narrow">
        <SectionIntro
          label="Short hiring process"
          title="From join to interviews in weeks, not months."
          description="No endless screening loops. One profile, expert matching, and structured support until you land an offer."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((item) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-border bg-background p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Step {item.step}
              </span>
              <h3 className="mt-3 text-base font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
