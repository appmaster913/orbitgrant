import { Button } from './Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/80 via-background to-background" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-25" />

      <div className="container-narrow relative py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" />
            Private global career network
          </span>

          <h1 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            We stand with talent. We connect them with opportunity.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            OrbitGrant is a private global network for IT professionals — expert job bidding,
            resume optimization, and interview coaching until you land your next role.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#join" variant="primary" size="lg">
              Join OrbitGrant
            </Button>
            <Button href="#coaches" variant="secondary" size="lg">
              Become a Coach
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-slate-100 via-orange-50 to-slate-50 shadow-xl">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <p className="font-display text-4xl font-semibold tracking-tight text-brand sm:text-5xl">
                2–3 months
              </p>
              <p className="max-w-md text-sm text-muted-foreground sm:text-base">
                Average target to hire with structured bidding, resume engineering, and 1:1 interview prep.
              </p>
              <span className="rounded-2xl border border-border bg-background/80 px-5 py-3 text-sm text-muted-foreground shadow-md backdrop-blur">
                Private global talent ecosystem
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
