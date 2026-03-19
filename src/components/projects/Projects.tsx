import { projects } from '@/data/projects'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="mb-16 font-display text-4xl italic tracking-tight text-text-primary md:text-5xl">
            Selected Work
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <article className="border-t-2 border-accent pt-10 pb-16">
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              {featured.category}
            </span>
            <h3 className="mt-4 font-display italic tracking-tight text-text-primary" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', lineHeight: '0.95' }}>
              {featured.title}
            </h3>
            <div className="mt-8 max-w-2xl">
              <p className="text-xl leading-relaxed text-text-secondary">
                {featured.description}
              </p>
            </div>
            <p className="mt-8 text-sm text-text-muted">
              {featured.techStack.join(' · ')}
            </p>
          </article>
        </ScrollReveal>

        {rest.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
