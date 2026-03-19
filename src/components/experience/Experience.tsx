import { experience } from '@/data/experience'
import { Section } from '@/components/layout/Section'
import { TimelineItem } from './TimelineItem'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="max-w-4xl">
        {experience.map((exp, index) => (
          <TimelineItem
            key={exp.id}
            experience={exp}
            isLast={index === experience.length - 1}
          />
        ))}
      </div>
    </Section>
  )
}
