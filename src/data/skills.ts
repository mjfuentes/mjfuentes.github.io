import { Skill } from '@/types'

export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'languages' },
  { name: 'Python', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'Kotlin', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'Ruby', category: 'languages' },
  // Frameworks
  { name: 'React', category: 'frameworks' },
  { name: 'Next.js', category: 'frameworks' },
  { name: 'Node.js', category: 'frameworks' },
  { name: 'Flutter', category: 'frameworks' },
  { name: 'Android', category: 'frameworks' },
  // Tools
  { name: 'Docker', category: 'tools' },
  { name: 'PostgreSQL', category: 'tools' },
  { name: 'ComfyUI', category: 'tools' },
  { name: 'Git', category: 'tools' },
  // Platforms
  { name: 'AWS', category: 'platforms' },
  { name: 'Kubernetes', category: 'platforms' },
  { name: 'Vercel', category: 'platforms' },
  { name: 'GitHub Actions', category: 'platforms' },
] as const
