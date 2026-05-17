import { useState, type FormEvent } from 'react'
import { SectionHeading } from './SectionHeading'

const CONTACT_EMAIL = 'contact@talentpool.com'

const inquiryTypes = [
  { value: 'talent', label: 'Join the Talent Pool' },
  { value: 'coach', label: 'Apply as a Coach' },
  { value: 'partnership', label: 'Partnership / Recruiting' },
  { value: 'general', label: 'General inquiry' },
]

const contactInfo = [
  {
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    label: 'Response time',
    value: 'Within 1–2 business days',
  },
]

const inputClass =
  'w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-3 text-white placeholder:text-[var(--color-muted)]/60 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors'

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
    const subject = `TalentPool — ${typeLabel}`
    const body = `Name: ${name}\nEmail: ${email}\nInquiry: ${typeLabel}\n\n${message}`

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    form.reset()
  }

  return (
    <section id="contact" className="py-24 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get in touch"
          description="Questions about joining the talent pool, becoming a coach, or partnering with us? Send a message and we'll get back to you."
        />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((item) => (
              <div key={item.label}>
                <p className="text-sm font-medium text-[var(--color-muted)] uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-lg text-white hover:text-cyan-300 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg text-white">{item.value}</p>
                )}
              </div>
            ))}

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                Prefer email? Reach us directly at{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/5 p-8 text-center">
                <p className="text-2xl mb-2" aria-hidden>
                  ✓
                </p>
                <h3 className="text-xl font-semibold text-white">Message ready to send</h3>
                <p className="mt-2 text-[var(--color-muted)]">
                  Your email app should open with your message. If it didn&apos;t, email us at{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-400 hover:text-cyan-300">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                      Name <span className="text-cyan-400">*</span>
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
                    <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                      Email <span className="text-cyan-400">*</span>
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
                  <label htmlFor="type" className="block text-sm font-medium text-white/90 mb-2">
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
                  <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your goals or question..."
                    className={`${inputClass} resize-y min-h-[140px]`}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold bg-cyan-400 text-ink hover:bg-cyan-300 shadow-lg shadow-cyan-500/20 transition-all duration-200"
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
