import { SectionIntro } from './SectionIntro'

const quotes = [
  {
    text: "OrbitGrant prepped me for interviews, optimized my resume, and helped me land a role in under three months. I've never had a firm actually in my corner like this.",
    author: 'L.M.',
    role: 'Senior engineer',
  },
  {
    text: 'We needed focused support — not endless applications. OrbitGrant structured my bidding strategy and I had multiple interviews within weeks.',
    author: 'A.K.',
    role: 'Mid-level developer',
  },
  {
    text: 'The interview coaching was the difference. System design mocks and behavioral prep gave me confidence I did not have on my own.',
    author: 'D.R.',
    role: 'Full-stack engineer',
  },
]

export function Testimonials() {
  return (
    <section className="section-block">
      <div className="container-narrow">
        <SectionIntro title="What members say." align="center" />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.author}
              className="flex h-full flex-col rounded-2xl border border-border bg-background p-6"
            >
              <svg
                className="size-5 text-brand"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.016 3.016 0 01-3.016 3.016c-1.798 0-3.016-1.427-3.016-3.016 0-1.33.445-2.036.786-2.429zm9 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.016 3.016 0 01-3.016 3.016c-1.798 0-3.016-1.427-3.016-3.016 0-1.33.445-2.036.786-2.429z" />
              </svg>
              <blockquote className="mt-4 flex-1 text-sm leading-7">{q.text}</blockquote>
              <figcaption className="mt-6 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{q.author}</span>
                <span aria-hidden> · </span>
                <span>{q.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
