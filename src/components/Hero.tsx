import { Button } from './Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-sm text-cyan-300 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Private global career network
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
          Global Talent Network for{' '}
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            IT Professionals
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-[var(--color-muted)] max-w-2xl mx-auto leading-relaxed">
          Fast-track your tech career with expert job bidding, resume optimization,
          and interview coaching — all in one private global platform.
        </p>

        <p className="mt-4 text-base text-white/70 font-medium">
          Get hired in 2–3 months with structured professional support.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#join" variant="primary" className="w-full sm:w-auto text-base px-8 py-3.5">
            Join OrbitGrant
          </Button>
          <Button href="#coaches" variant="secondary" className="w-full sm:w-auto text-base px-8 py-3.5">
            Become a Coach
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto border-t border-white/10 pt-10">
          {[
            { value: '2–3', label: 'months avg. to hire' },
            { value: 'Global', label: 'talent network' },
            { value: '1:1', label: 'expert support' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl sm:text-3xl font-semibold text-white">{stat.value}</p>
              <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
