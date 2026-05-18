import { Button } from './Button'
import { SectionIntro } from './SectionIntro'

export function PrivateNetwork() {
  return (
    <section id="network" className="section-block">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionIntro
              label="Private network"
              title="A global career acceleration network."
              description="Many opportunities run privately — NDA-first introductions, curated matching, and no public job-board noise. Engineers, coaches, and hiring partners connect through one trusted hub."
            />
            <div className="mt-6">
              <Button href="#join" variant="primary">
                Join the network
              </Button>
            </div>
          </div>

          <div
            className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-muted"
            role="img"
            aria-label="Diagram of the OrbitGrant network connecting engineers, coaches, and opportunities"
          >
            <svg viewBox="0 0 500 500" className="size-full text-brand" fill="none" aria-hidden>
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="55%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="500" height="500" fill="url(#hubGlow)" />
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i / 12) * Math.PI * 2
                const x = 250 + Math.cos(angle) * 180
                const y = 250 + Math.sin(angle) * 180
                return (
                  <g key={i}>
                    <line
                      x1="250"
                      y1="250"
                      x2={x}
                      y2={y}
                      stroke="currentColor"
                      strokeOpacity="0.2"
                      strokeWidth="1"
                    />
                    <circle cx={x} cy={y} r="8" fill="currentColor" fillOpacity="0.6" />
                  </g>
                )
              })}
              <circle cx="250" cy="250" r="36" fill="currentColor" />
              <circle cx="250" cy="250" r="26" fill="var(--color-background)" />
              <text
                x="250"
                y="256"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                fill="currentColor"
              >
                OG
              </text>
            </svg>
            <p className="pointer-events-none absolute bottom-6 left-0 right-0 text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              OrbitGrant hub
            </p>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-6 rounded-2xl border border-border bg-muted/30 p-8 sm:grid-cols-4">
          {[
            { label: 'avg. months to hire', value: '2–3' },
            { label: 'global reach', value: 'Worldwide' },
            { label: 'expert support', value: '1:1' },
            { label: 'coaching until placed', value: '100%' },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="font-display mt-2 text-3xl tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
