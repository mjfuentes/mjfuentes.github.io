import { skills } from '@/data/skills'
import { Section } from '@/components/layout/Section'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const categories = [
  { key: 'languages', label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks' },
  { key: 'tools', label: 'Tools' },
  { key: 'platforms', label: 'Platforms' },
] as const

export function TechStack() {
  return (
    <Section id="stack" title="Stack">
      <div className="space-y-0">
        {categories.map(({ key, label }, index) => {
          const categorySkills = skills.filter((s) => s.category === key)
          return (
            <ScrollReveal key={key} delay={index * 80}>
              <div className="grid grid-cols-1 gap-2 border-t border-border py-6 lg:grid-cols-12">
                <p className="text-sm text-text-muted lg:col-span-3">
                  {label}
                </p>
                <p className="text-base text-text-primary lg:col-span-8 lg:col-start-5">
                  {categorySkills.map((s) => s.name).join(', ')}
                </p>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </Section>
  )
}
