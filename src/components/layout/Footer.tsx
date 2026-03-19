export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold text-text-primary">
              Matias Fuentes
            </p>
            <p className="mt-1 font-body text-sm text-text-secondary">
              © {currentYear} Built with Next.js
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/mjfuentes"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-text-secondary transition-colors hover:text-accent-primary"
            >
              GitHub
            </a>
            <a
              href="https://kerplunk.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-text-secondary transition-colors hover:text-accent-primary"
            >
              Kerplunk Studio
            </a>
            <a
              href="mailto:mati@kerplunk.studio"
              className="font-body text-sm text-text-secondary transition-colors hover:text-accent-primary"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
