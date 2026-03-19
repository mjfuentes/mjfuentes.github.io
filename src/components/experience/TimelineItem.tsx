import { Experience } from '@/types'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface TimelineItemProps {
  experience: Experience
  index: number
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <ScrollReveal delay={index * 100}>
      <div className="border-t border-border py-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-sm text-text-muted">{experience.period}</p>
            <p className="mt-1 text-sm text-text-muted">
              {experience.location}
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h3 className="font-display text-2xl italic text-text-primary">
              {experience.role}
            </h3>
            <p className="mt-1 text-base text-accent">
              {experience.company}
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-secondary">
              {experience.description}
            </p>
            <p className="mt-4 text-sm text-text-muted">
              {experience.techStack.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}
