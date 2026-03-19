'use client'

import { useState } from 'react'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#"
          className="font-display text-xl italic text-text-primary"
        >
          MF
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:mati@kerplunk.studio"
            className="border border-text-primary px-4 py-1.5 text-sm text-text-primary transition-colors duration-200 hover:bg-text-primary hover:text-background"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <div className="flex h-6 w-6 flex-col justify-center gap-1.5">
            <span
              className={`h-px w-full bg-text-primary transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-[3.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px w-full bg-text-primary transition-transform duration-300 ${
                isMenuOpen ? '-translate-y-[3.5px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-border bg-background md:hidden">
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:mati@kerplunk.studio"
                className="text-lg text-text-secondary transition-colors hover:text-text-primary"
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
