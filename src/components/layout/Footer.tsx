import { contact } from '@/data/contact'

const linkClass =
  'font-semibold underline decoration-accent decoration-2 underline-offset-4 transition-colors duration-200 hover:text-accent'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-7xl px-5 pb-10 pt-8 lg:px-12">
      <div className="grid grid-cols-1 items-end gap-8 border-t-2 border-rule pt-6 lg:grid-cols-12">
        <p className="text-closer lg:col-span-8">Let&apos;s build something.</p>

        <div className="grid gap-2 text-sm lg:col-span-3 lg:col-start-10">
          <a href={`mailto:${contact.email}`} className={linkClass}>
            {contact.email}
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
          </a>
        </div>
      </div>

      <p className="mt-12 text-xs text-text-secondary">
        &copy; {currentYear} Matias Fuentes. Built with{' '}
        <a
          href="https://ccplus.run"
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-primary transition-colors duration-200 hover:text-accent"
        >
          cc+
        </a>
      </p>
    </footer>
  )
}
