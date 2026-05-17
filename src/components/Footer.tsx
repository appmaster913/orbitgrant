export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src="/logo.png" alt="OrbitGrant" className="h-8 w-auto" />
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <a
            href="#contact"
            className="text-sm text-[var(--color-muted)] hover:text-cyan-600 transition-colors"
          >
            Contact
          </a>
          <a
            href="mailto:contact@orbitgrant.com"
            className="text-sm text-[var(--color-muted)] hover:text-cyan-600 transition-colors"
          >
            contact@orbitgrant.com
          </a>
          <p className="text-sm text-[var(--color-muted)]">
            © {new Date().getFullYear()} OrbitGrant
          </p>
        </div>
      </div>
    </footer>
  )
}
