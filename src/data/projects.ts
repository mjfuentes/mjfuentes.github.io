import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ccplus',
    title: 'cc+',
    description: 'Open source orchestration and observability platform for AI coding agents. Runs parallel Claude Code sessions in isolated git worktrees under a supervisor that assigns work, watches it and retries. Per-session token and cost tracking, Electron desktop app for macOS and Linux.',
    techStack: ['TypeScript', 'React', 'Electron'],
    githubUrl: 'https://github.com/kerplunkstudio/ccplus',
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
