const benefits = [
  'Faster hiring cycles (2–3 months average target)',
  'Higher interview conversion rate',
  'Personalized career strategy',
  'Global network of IT professionals & recruiters',
  'Continuous support until placement',
]

export function ValueProposition() {
  return (
    <section id="why-us" className="py-24 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Value
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight text-white font-semibold tracking-tight">
              Why choose us?
            </h2>
          </div>

          <ul className="space-y-5">
            {benefits.map((benefit, i) => (
              <li
                key={benefit}
                className="flex items-center gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-6 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400 font-semibold text-sm">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-white/90">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
