import { Experience } from '@/types'

export const experience: Experience[] = [
  {
    id: 'kerplunk',
    company: 'Kerplunk Studio',
    role: 'Founder & Software Engineer',
    period: '2022 — Present',
    location: 'Villa La Angostura, Patagonia, Argentina',
    description: 'Founded a creative technology studio merging software engineering with creative production. Built custom platforms, AI integrations, and automated systems for artists and small businesses worldwide. Clients include music labels, photographers, and creative professionals.',
    techStack: ['TypeScript', 'Python', 'Next.js', 'AI', 'ComfyUI', 'Node.js'],
  },
  {
    id: 'berlin',
    company: 'Software Engineer (Berlin)',
    role: 'Senior Software Engineer',
    period: '2017 — 2022',
    location: 'Berlin, Germany',
    description: 'Led development of scalable distributed systems and microservices architecture. Built cloud-native applications serving millions of users across Europe.',
    techStack: ['Java', 'Kotlin', 'Kubernetes', 'AWS', 'Docker'],
  },
] as const
