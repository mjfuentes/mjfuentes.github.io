interface SectionProps {
  id: string
  title?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && (
          <h2 className="mb-16 font-display text-4xl font-bold tracking-tight text-text-primary md:text-5xl lg:text-6xl">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
