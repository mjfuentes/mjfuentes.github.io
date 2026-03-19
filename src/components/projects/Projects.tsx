import { projects } from '@/data/projects'
import { Section } from '@/components/layout/Section'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <Section id="projects" title="Selected Projects">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  )
}
