import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col border border-border bg-surface p-6 transition-all duration-300 hover:border-accent-primary/50">
      {/* Highlight Badge */}
      {project.highlight && (
        <div className="absolute -right-3 -top-3 rotate-3">
          <span className="inline-flex items-center border border-accent-secondary bg-accent-secondary px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-white">
            {project.highlight}
          </span>
        </div>
      )}

      {/* Category Badge */}
      <div className="mb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-accent-primary">
          {project.category}
        </span>
      </div>

      {/* Title and Description */}
      <h3 className="mb-3 font-display text-2xl font-bold text-text-primary transition-colors group-hover:text-accent-primary">
        {project.title}
      </h3>

      <p className="mb-6 flex-grow font-body text-base leading-relaxed text-text-secondary">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="border border-accent-secondary/30 bg-accent-secondary/10 px-3 py-1 font-mono text-xs text-accent-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm font-medium text-text-secondary transition-colors hover:text-accent-primary"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          View on GitHub
        </a>
      )}
    </article>
  )
}
