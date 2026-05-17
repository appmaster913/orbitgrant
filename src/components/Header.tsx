import { Button } from './Button'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-white/90 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="group">
          <img
            src="/logo.png"
            alt="OrbitGrant"
            className="h-10 w-auto transition-opacity group-hover:opacity-90"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#coaches" variant="secondary" className="hidden sm:inline-flex !py-2.5 !px-5">
            Become a Coach
          </Button>
          <Button href="#join" variant="primary" className="!py-2.5 !px-5">
            Join Now
          </Button>
        </div>
      </div>
    </header>
  )
}
