import { useState } from 'react'
import { Button } from './Button'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Network', href: '#network' },
  { label: 'Process', href: '#how-it-works' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-narrow flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img src="/logo.png" alt="OrbitGrant" className="h-10 w-auto" />
          <span className="font-display hidden text-lg font-bold tracking-tight text-foreground sm:inline">
            OrbitGrant
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button href="#coaches" variant="ghost" size="sm">
            Become a Coach
          </Button>
          <Button href="#join" variant="primary" size="sm">
            Join Now
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <>
                <path strokeLinecap="round" d="M4 5h16M4 12h16M4 19h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border lg:hidden">
          <div className="container-narrow flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-foreground hover:bg-muted"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <Button href="#coaches" variant="secondary" size="sm" className="flex-1">
                Coach
              </Button>
              <Button href="#join" variant="primary" size="sm" className="flex-1">
                Join
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
