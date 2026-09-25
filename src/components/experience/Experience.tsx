import { experience } from '@/data/experience'
import { Section } from '@/components/layout/Section'
import { TimelineItem } from './TimelineItem'

export function Experience() {
  return (
    <Section id="experience" title="Experience" meta="2012 — now">
      <div>
        {experience.map((exp, index) => (
          <TimelineItem key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </Section>
  )
}
