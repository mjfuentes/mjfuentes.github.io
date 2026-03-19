import { Skill } from '@/types'

interface SkillTagProps {
  skill: Skill
}

const categoryColors = {
  languages: 'border-accent-primary/30 bg-accent-primary/10 text-accent-primary',
  frameworks: 'border-accent-secondary/30 bg-accent-secondary/10 text-accent-secondary',
  tools: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
  platforms: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
}

export function SkillTag({ skill }: SkillTagProps) {
  return (
    <span
      className={`inline-flex items-center border px-4 py-2 font-mono text-sm transition-all hover:scale-105 ${
        categoryColors[skill.category]
      }`}
    >
      {skill.name}
    </span>
  )
}
