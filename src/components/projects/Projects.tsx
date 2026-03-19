import { projects } from '@/data/projects'
import { Section } from '@/components/layout/Section'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <Section id="work" title="Selected Work">
      <div className="space-y-0">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  )
}
