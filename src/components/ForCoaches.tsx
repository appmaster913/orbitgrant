import { Button } from './Button'
import { SectionIntro } from './SectionIntro'

const coachBenefits = [
  'Earn by helping candidates succeed',
  'Work with global IT professionals',
  'Flexible, remote collaboration',
]

export function ForCoaches() {
  return (
    <section id="coaches" className="section-block">
      <div className="container-narrow">
        <div className="grid gap-12 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-orange-50 via-background to-slate-50 p-10 lg:grid-cols-2 lg:items-center lg:p-16">
          <div>
            <SectionIntro
              label="For experts"
              title="Become a professional career coach"
              description="Join our platform as a resume expert, interviewer, or technical mentor."
            />
          </div>

          <div>
            <ul className="space-y-4">
              {coachBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm leading-6">
                  <span className="size-2 shrink-0 rounded-full bg-brand" />
                  {benefit}
                </li>
              ))}
            </ul>
            <Button href="#contact" variant="outline" size="lg" className="mt-10">
              Apply as Coach
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
