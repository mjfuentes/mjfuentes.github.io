import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'amiga',
    title: 'AMIGA',
    description: 'Autonomous Modular Interactive Graphical Agent — an AI agent system for autonomous task execution with visual interface.',
    techStack: ['Python', 'AI Agents', 'Computer Vision', 'LLM'],
    githubUrl: 'https://github.com/mjfuentes/amiga',
    category: 'ai',
  },
  {
    id: 'ccplus',
    title: 'ccplus',
    description: 'Desktop application for Claude Code featuring multi-tab sessions, agent observability, and integrated browser functionality.',
    techStack: ['TypeScript', 'React', 'Electron'],
    category: 'tools',
  },
  {
    id: 'groove-therapy',
    title: 'Groove Therapy',
    description: 'Full-stack music label platform with admin dashboard for managing releases, artists, and distribution.',
    techStack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Node.js'],
    category: 'web',
  },
  {
    id: 'medusa-estudio',
    title: 'Medusa Estudio',
    description: 'Offline-first photo management system for professional photographers, built for performance and reliability.',
    techStack: ['TypeScript', 'React', 'SQLite', 'Electron'],
    highlight: 'Built in 6 days',
    category: 'tools',
  },
  {
    id: 'foto-escurra',
    title: 'Foto Escurra',
    description: 'AI-powered event photography platform with real-time face recognition for automatic photo delivery to attendees.',
    techStack: ['Python', 'Computer Vision', 'Face Recognition', 'React'],
    category: 'ai',
  },
  {
    id: 'comfyui-ltxvideo-worker',
    title: 'LTX Video Worker',
    description: 'Scalable ComfyUI worker for LTX video generation — distributed video synthesis at scale.',
    techStack: ['Python', 'ComfyUI', 'Docker', 'Shell'],
    githubUrl: 'https://github.com/mjfuentes/comfyui-ltxvideo-worker',
    category: 'ai',
  },
] as const
