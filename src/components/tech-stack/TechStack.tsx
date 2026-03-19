import { skills } from '@/data/skills'
import { Section } from '@/components/layout/Section'
import { SkillTag } from './SkillTag'

export function TechStack() {
  const categories = {
    languages: skills.filter((s) => s.category === 'languages'),
    frameworks: skills.filter((s) => s.category === 'frameworks'),
    tools: skills.filter((s) => s.category === 'tools'),
    platforms: skills.filter((s) => s.category === 'platforms'),
  }

  const categoryLabels = {
    languages: 'Languages',
    frameworks: 'Frameworks',
    tools: 'Tools',
    platforms: 'Platforms',
  }

  return (
    <Section id="tech" title="Tech Stack">
      <div className="space-y-12">
        {Object.entries(categories).map(([category, categorySkills]) => (
          <div key={category}>
            <h3 className="mb-6 font-display text-xl font-bold text-accent-primary">
              {categoryLabels[category as keyof typeof categoryLabels]}
            </h3>
            <div className="flex flex-wrap gap-3">
              {categorySkills.map((skill) => (
                <SkillTag key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
