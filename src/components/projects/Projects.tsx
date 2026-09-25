import { projects } from '@/data/projects'
import { Section } from '@/components/layout/Section'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const [featured, ...rest] = projects

  return (
    <Section id="work" title="Selected work" meta={`${projects.length} projects`}>
      <ScrollReveal>
        <a
          href={featured.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid grid-cols-1 gap-8 bg-accent p-6 text-on-accent transition-colors duration-300 hover:bg-accent-hover md:p-9 lg:grid-cols-12"
        >
          <h3 className="text-feature lg:col-span-5">{featured.title}</h3>
          <div className="grid content-end gap-4 lg:col-span-6 lg:col-start-7">
            <p className="text-label">Open source · {featured.techStack.join(' · ')}</p>
            <p className="text-[1.0625rem] leading-relaxed">{featured.description}</p>
            <p className="text-label">
              View on GitHub{' '}
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </p>
          </div>
        </a>
      </ScrollReveal>

      <div className="mt-6 grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
