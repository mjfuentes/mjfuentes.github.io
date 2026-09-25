import { Project } from '@/types'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <ScrollReveal delay={(index % 3) * 100} className="h-full">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group grid h-full content-start gap-3 border-t border-rule py-6"
      >
        <p className="text-label text-text-secondary">
          {project.techStack.slice(0, 2).join(' · ')}
        </p>
        <h3 className="text-heading text-3xl leading-none transition-colors duration-200 group-hover:text-accent">
          {project.title}{' '}
          <span className="text-xl text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            ↗
          </span>
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary">{project.description}</p>
      </a>
    </ScrollReveal>
  )
}
