export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-display text-3xl italic text-text-primary">
              Let&apos;s build something.
            </p>
            <a
              href="mailto:mati@kerplunk.studio"
              className="mt-4 inline-block text-lg text-text-secondary underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-text-primary hover:decoration-accent"
            >
              mati@kerplunk.studio
            </a>
          </div>

          <div className="flex gap-8 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <a
              href="https://github.com/mjfuentes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              GitHub
            </a>
            <a
              href="https://kerplunk.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              Kerplunk
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <p className="text-xs text-text-muted">
            &copy; {currentYear} Matias Fuentes. Built with{' '}
            <a
              href="https://ccplus.run"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              cc+
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
