export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 text-xs font-bold text-ink">
            TP
          </span>
          <span className="font-semibold text-white">TalentPool</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <a
            href="#contact"
            className="text-sm text-[var(--color-muted)] hover:text-cyan-300 transition-colors"
          >
            Contact
          </a>
          <a
            href="mailto:contact@talentpool.com"
            className="text-sm text-[var(--color-muted)] hover:text-cyan-300 transition-colors"
          >
            contact@talentpool.com
          </a>
          <p className="text-sm text-[var(--color-muted)]">
            © {new Date().getFullYear()} TalentPool
          </p>
        </div>
      </div>
    </footer>
  )
}
