import { Experience } from '@/types'

interface TimelineItemProps {
  experience: Experience
  isLast?: boolean
}

export function TimelineItem({ experience, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative flex gap-8 pb-12">
      {/* Timeline Line and Dot */}
      <div className="relative flex flex-col items-center">
        <div className="h-4 w-4 rounded-full border-4 border-accent-primary bg-background" />
        {!isLast && <div className="mt-2 h-full w-0.5 bg-border" />}
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        {/* Period and Location */}
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className="font-mono text-sm text-accent-primary">
            {experience.period}
          </span>
          <span className="text-text-secondary">•</span>
          <span className="font-mono text-sm text-text-secondary">
            {experience.location}
          </span>
        </div>

        {/* Role and Company */}
        <h3 className="mb-1 font-display text-2xl font-bold text-text-primary">
          {experience.role}
        </h3>
        <p className="mb-4 font-body text-lg text-accent-secondary">
          {experience.company}
        </p>

        {/* Description */}
        <p className="mb-6 font-body text-base leading-relaxed text-text-secondary">
          {experience.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="border border-border bg-surface px-3 py-1 font-mono text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
