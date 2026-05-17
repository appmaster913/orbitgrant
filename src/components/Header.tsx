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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[var(--color-ink)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 text-sm font-bold text-ink">
            TP
          </span>
          <span className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
            TalentPool
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--color-muted)] hover:text-white transition-colors"
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
            Join Pool
          </Button>
        </div>
      </div>
    </header>
  )
}
