'use client'

import { useState } from 'react'
import { contact } from '@/data/contact'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
] as const

const linkClass =
  'text-label text-[0.8125rem] text-text-primary transition-colors duration-200 hover:text-accent'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b-2 border-rule px-5 py-4 lg:px-12">
        <a href="#" className={linkClass}>
          Matias Fuentes
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${contact.email}`}
            className="text-label bg-accent px-4 py-2 text-[0.8125rem] text-on-accent transition-colors duration-200 hover:bg-accent-hover"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="flex h-6 w-6 flex-col justify-center gap-1.5">
            <span
              className={`h-0.5 w-full bg-text-primary transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-[4px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-full bg-text-primary transition-transform duration-300 ${
                isMenuOpen ? '-translate-y-[4px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-b-2 border-rule bg-background md:hidden">
            <div className="flex flex-col gap-5 px-5 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-heading text-3xl leading-none uppercase transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${contact.email}`}
                className="text-heading text-3xl leading-none uppercase text-accent"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
