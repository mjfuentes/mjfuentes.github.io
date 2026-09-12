import { Skill } from '@/types'

export const skills: Skill[] = [
  // Languages
  { name: 'Java', category: 'languages' },
  { name: 'Kotlin', category: 'languages' },
  { name: 'Go', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'TypeScript', category: 'languages' },
  { name: 'Ruby', category: 'languages' },
  { name: 'Groovy', category: 'languages' },
  // Frameworks
  { name: 'Spring Boot', category: 'frameworks' },
  { name: 'Spring Batch', category: 'frameworks' },
  { name: 'Hibernate', category: 'frameworks' },
  { name: 'Ruby on Rails', category: 'frameworks' },
  { name: 'Node.js', category: 'frameworks' },
  { name: 'React', category: 'frameworks' },
  { name: 'Next.js', category: 'frameworks' },
  // Tools
  { name: 'Elasticsearch', category: 'tools' },
  { name: 'PostgreSQL', category: 'tools' },
  { name: 'MongoDB', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Terraform', category: 'tools' },
  { name: 'Grafana', category: 'tools' },
  { name: 'Prometheus', category: 'tools' },
  { name: 'Git', category: 'tools' },
  // Platforms
  { name: 'AWS', category: 'platforms' },
  { name: 'Azure', category: 'platforms' },
  { name: 'Kubernetes', category: 'platforms' },
  { name: 'AWS CDK', category: 'platforms' },
  { name: 'GitHub Actions', category: 'platforms' },
] as const
