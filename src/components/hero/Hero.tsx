import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center pt-16">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 lg:px-8">
        <ScrollReveal>
          <p className="mb-12 text-sm tracking-wide text-text-muted">
            Patagonia, Argentina
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="text-hero font-display italic tracking-tight text-text-primary">
            Matias
            <br />
            Fuentes
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-12 flex items-center gap-4">
            <div className="h-px w-12 bg-accent" />
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <ScrollReveal delay={200} className="lg:col-span-5">
            <p className="text-xl leading-relaxed text-text-secondary lg:text-2xl">
              Software engineer & founder building at the intersection of AI
              and craft.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300} className="lg:col-span-4 lg:col-start-8">
            <p className="text-base leading-relaxed text-text-muted">
              13+ years shipping software across startups and established
              companies in Buenos Aires, Berlin, and Patagonia. Currently
              making tools at{' '}
              <a
                href="https://kerplunk.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary underline decoration-border underline-offset-4 transition-colors duration-200 hover:decoration-accent"
              >
                Kerplunk
              </a>
              .
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-sm text-text-primary underline decoration-accent underline-offset-4"
            >
              See my work
              <svg className="h-3.5 w-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <a
              href="mailto:mati@kerplunk.studio"
              className="text-sm text-text-muted underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-text-primary hover:decoration-accent"
            >
              mati@kerplunk.studio
            </a>
            <a
              href="https://github.com/mjfuentes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-text-primary hover:decoration-accent"
            >
              GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
