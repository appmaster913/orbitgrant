const footerLinks = {
  Services: [
    { label: 'Job Bidding', href: '#services' },
    { label: 'Resume Engineering', href: '#services' },
    { label: 'Interview Coaching', href: '#services' },
    { label: 'Private Network', href: '#network' },
  ],
  Company: [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Why us', href: '#why-us' },
    { label: 'For Coaches', href: '#coaches' },
    { label: 'Contact', href: '#contact' },
  ],
  People: [
    { label: 'Join OrbitGrant', href: '#join' },
    { label: 'Become a Coach', href: '#coaches' },
    { label: 'Get in touch', href: '#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/30">
      <div className="container-narrow py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5">
              <img src="/logo.png" alt="OrbitGrant" className="h-10 w-auto" />
              <span className="font-display text-lg font-bold tracking-tight">OrbitGrant</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              We stand with talent. We connect them with opportunity.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              <a
                href="mailto:contact@orbitgrant.com"
                className="underline underline-offset-4 hover:text-foreground"
              >
                contact@orbitgrant.com
              </a>
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} OrbitGrant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
