export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  techStack: string[]
  url?: string
  githubUrl?: string
  highlight?: string
  category: 'ai' | 'web' | 'mobile' | 'tools'
}

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  techStack: string[]
}

export interface Skill {
  name: string
  category: 'languages' | 'frameworks' | 'tools' | 'platforms'
}
