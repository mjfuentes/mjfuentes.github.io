import { Experience } from '@/types'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

interface TimelineItemProps {
  experience: Experience
  index: number
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  const isBreak = experience.id === 'career-break'

  return (
    <ScrollReveal delay={Math.min(index, 4) * 60}>
      <div className="group grid grid-cols-1 gap-2 border-b border-border py-6 md:grid-cols-12 md:gap-6">
        <p className="text-[0.9375rem] tabular-nums text-text-secondary md:col-span-2">
          {experience.period}
        </p>

        <div className="md:col-span-4">
          <h3
            className={`text-heading text-2xl leading-none transition-colors duration-200 group-hover:text-accent ${
              isBreak ? 'text-text-secondary' : ''
            }`}
          >
            {experience.company}
          </h3>
          {!isBreak && (
            <p className="mt-1 text-[0.9375rem]">
              {experience.role}
              <span className="text-text-secondary"> · {experience.location}</span>
            </p>
          )}
        </div>

        {(experience.description || experience.techStack.length > 0) && (
          <div className="grid gap-3 md:col-span-6">
            {experience.description && (
              <p className="text-[0.9375rem] leading-relaxed text-text-secondary">
                {experience.description}
              </p>
            )}
            {experience.techStack.length > 0 && (
              <p className="text-label text-text-secondary">
                {experience.techStack.join(' · ')}
              </p>
            )}
          </div>
        )}
      </div>
    </ScrollReveal>
  )
}
