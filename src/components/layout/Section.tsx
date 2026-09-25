interface SectionProps {
  id: string
  title?: string
  meta?: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, meta, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-12">
        {title && (
          <h2 className="text-label mb-6 flex justify-between gap-4 border-b-2 border-rule pb-3 text-sm tracking-[0.08em]">
            <span>{title}</span>
            {meta && <span className="text-text-secondary">{meta}</span>}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}
