import { Experience } from '@/types'

export const experience: Experience[] = [
  {
    id: 'kerplunk-2026',
    company: 'Kerplunk',
    role: 'Founder',
    period: '2026 — Present',
    location: 'Villa La Angostura, Patagonia, Argentina',
    description: 'Building cc+, a desktop application for Claude Code with multi-tab sessions and agent observability. Exploring agentic AI architectures and building tools at the intersection of software engineering and AI.',
    techStack: ['TypeScript', 'React', 'Electron', 'AI Agents'],
  },
  {
    id: 'software-engineer',
    company: 'Various Companies',
    role: 'Software Engineer',
    period: '2012 — 2025',
    location: 'Buenos Aires, Argentina & Berlin, Germany',
    description: 'Over 13 years building software across startups and established companies in Argentina and Berlin. Worked on scalable distributed systems, microservices, cloud-native platforms, and full-stack web applications serving millions of users. Progressed from junior developer in Buenos Aires to senior engineer in Berlin\'s tech scene, spanning fintech, e-commerce, and creative technology.',
    techStack: ['TypeScript', 'Java', 'Kotlin', 'Python', 'Kubernetes', 'AWS', 'React', 'Node.js'],
  },
] as const
