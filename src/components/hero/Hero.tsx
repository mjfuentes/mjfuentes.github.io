export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-16">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        {/* Location Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-primary/20 bg-accent-primary/5 px-4 py-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent-primary" />
          <span className="font-mono text-xs uppercase tracking-wider text-accent-primary">
            Patagonia, Argentina
          </span>
        </div>

        {/* Main Content - Asymmetric Layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Name and Title */}
          <div className="lg:col-span-7">
            <h1 className="font-display text-6xl font-bold leading-none tracking-tighter text-text-primary sm:text-7xl md:text-8xl lg:text-9xl">
              Matias
              <br />
              <span className="text-accent-primary">Fuentes</span>
            </h1>

            <p className="mt-8 font-display text-2xl font-medium leading-tight text-accent-primary md:text-3xl lg:text-4xl">
              Software Engineer &<br />
              Creative Technologist
            </p>

            <p className="mt-8 max-w-2xl font-body text-lg leading-relaxed text-text-secondary md:text-xl">
              13+ years building software at the intersection of technology and creativity.
              Founder of <span className="text-text-primary">Kerplunk Studio</span>.
              Currently exploring agentic AI architectures and the new possibilities they create.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="mailto:mati@kerplunk.studio"
                className="inline-flex items-center gap-2 border border-accent-primary bg-accent-primary px-6 py-3 font-body text-sm font-medium text-background transition-all hover:bg-accent-primary/90"
              >
                Get in touch
              </a>
              <a
                href="https://github.com/mjfuentes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border bg-transparent px-6 py-3 font-body text-sm font-medium text-text-primary transition-all hover:border-text-primary"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* Right Column - Avatar */}
          <div className="flex items-center justify-center lg:col-span-5">
            <div className="relative">
              {/* Avatar Circle */}
              <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-accent-primary bg-surface lg:h-64 lg:w-64">
                <span className="font-display text-6xl font-bold text-accent-primary lg:text-7xl">
                  MF
                </span>
              </div>

              {/* Decorative Element */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent-secondary/20 blur-3xl" />
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent-primary/20 blur-3xl" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-wider text-text-secondary">
            Scroll
          </span>
          <svg
            className="h-6 w-6 animate-bounce text-accent-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
