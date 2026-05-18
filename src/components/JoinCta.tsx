import { Button } from './Button'

export function JoinCta() {
  return (
    <section id="join" className="py-16">
      <div className="container-narrow">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-foreground p-8 text-background sm:p-12 lg:flex-row lg:items-center">
          <div>
            <h3 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
              Tell us who you are — talent or coach.
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-6 text-background/70 sm:text-base">
              We&apos;ll get back within 1–2 business days.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="!bg-background !text-foreground hover:!opacity-90"
            >
              Get in touch
            </Button>
            <Button
              href="#coaches"
              variant="secondary"
              size="lg"
              className="!border-background/30 !bg-transparent !text-background hover:!bg-background/10"
            >
              Apply as coach
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
