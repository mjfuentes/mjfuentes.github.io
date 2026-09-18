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
    id: 'fotoescurra',
    title: 'FotoEscurra & FotoBayo',
    description: 'Multi-tenant photography sales platform built solo, running two commercial businesses on one codebase. Both in production, processing thousands of pictures a day. Face search on AWS Rekognition so buyers find their own photos from an event, four payment providers across two currencies, and electronic invoicing integrated with the Argentine tax authority.',
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'AWS Rekognition', 'ECS Fargate', 'AWS CDK'],
    category: 'web',
  },
  {
    id: 'amiga',
    title: 'AMIGA',
    description: 'The Python predecessor of cc+. 16 agents, model routing by cost, worktree isolation, an agent that rewrites its own prompts from its error log. Archived March 2026.',
    techStack: ['Python', 'Claude Agent SDK', 'Flask', 'React'],
    githubUrl: 'https://github.com/mjfuentes/amiga',
    category: 'ai',
  },
] as const
