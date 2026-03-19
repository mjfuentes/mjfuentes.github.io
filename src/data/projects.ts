import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ccplus',
    title: 'cc+',
    description: 'Desktop application for Claude Code featuring multi-tab sessions, agent observability, and integrated browser functionality.',
    techStack: ['TypeScript', 'React', 'Electron'],
    githubUrl: 'https://github.com/mjfuentes/ccplus',
    category: 'tools',
  },
  {
    id: 'amiga',
    title: 'AMIGA',
    description: 'Autonomous Modular Interactive Graphical Agent — an AI agent system for autonomous task execution with visual interface.',
    techStack: ['Python', 'AI Agents', 'Computer Vision', 'LLM'],
    githubUrl: 'https://github.com/mjfuentes/amiga',
    category: 'ai',
  },
] as const
