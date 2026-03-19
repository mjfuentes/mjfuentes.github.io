import { Project } from '@/types'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <ScrollReveal delay={index * 100}>
      <article className="border-t border-border py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-text-muted">
              {project.category}
            </span>
            <h3 className="mt-2 font-display text-3xl italic text-text-primary lg:text-4xl">
              {project.title}
            </h3>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-text-secondary">
              {project.description}
            </p>

            <p className="mt-6 text-sm text-text-muted">
              {project.techStack.join(' · ')}
            </p>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm text-text-primary underline decoration-border underline-offset-4 transition-colors duration-200 hover:decoration-accent"
              >
                View on GitHub
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}
