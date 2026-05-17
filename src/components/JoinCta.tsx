import { Button } from './Button'

export function JoinCta() {
  return (
    <section id="join" className="py-20 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
          Ready to accelerate your tech career?
        </h2>
        <p className="mt-4 text-lg text-[var(--color-muted)]">
          Join thousands of IT professionals in our private global network.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="#join" variant="primary" className="w-full sm:w-auto text-base px-8 py-3.5">
            Join the Talent Pool
          </Button>
          <Button href="#coaches" variant="secondary" className="w-full sm:w-auto text-base px-8 py-3.5">
            Become a Coach
          </Button>
        </div>
      </div>
    </section>
  )
}
