import { useState, type FormEvent } from 'react'
import { SectionIntro } from './SectionIntro'

const CONTACT_EMAIL = 'contact@orbitgrant.com'

const inquiryTypes = [
  { value: 'talent', label: 'Join OrbitGrant' },
  { value: 'coach', label: 'Apply as a Coach' },
  { value: 'partnership', label: 'Partnership / Recruiting' },
  { value: 'general', label: 'General inquiry' },
]

const inputClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const type = String(data.get('type') ?? '')
    const message = String(data.get('message') ?? '').trim()

    if (!name || !email || !message) {
      setError('Please fill in all required fields.')
      return
    }

    const typeLabel = inquiryTypes.find((t) => t.value === type)?.label ?? type
    const subject = `OrbitGrant — ${typeLabel}`
    const body = `Name: ${name}\nEmail: ${email}\nInquiry: ${typeLabel}\n\n${message}`

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    form.reset()
  }

  return (
    <section id="contact" className="section-block border-t border-border">
      <div className="container-narrow">
        <SectionIntro
          label="Contact"
          title="Get in touch"
          description="Questions about joining OrbitGrant, becoming a coach, or partnering with us? Send a message and we'll get back to you."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Email
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-1 block text-lg hover:text-brand"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Response time
              </p>
              <p className="mt-1 text-lg">Within 1–2 business days</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-border bg-muted/30 p-8 text-center">
                <p className="text-2xl" aria-hidden>
                  ✓
                </p>
                <h3 className="mt-2 text-xl font-semibold">Message ready to send</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your email app should open with your message. If it didn&apos;t, email{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-brand hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Name <span className="text-brand">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Email <span className="text-brand">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="mb-2 block text-sm font-medium">
                    Inquiry type
                  </label>
                  <select id="type" name="type" defaultValue="talent" className={inputClass}>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message <span className="text-brand">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your goals or question..."
                    className={`${inputClass} min-h-[140px] resize-y`}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-base font-medium text-background transition-opacity hover:opacity-90"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
