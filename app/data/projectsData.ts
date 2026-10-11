export interface Project {
  id: number
  title: string
  description: string
  dates: string
  tech: string[]
  features?: string[]
  problem?: string
  infrastructure?: string
  automation?: string
  outcome?: string
  github?: string | null
  demo?: string | null
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'LinkSpace',
    description: 'A LinkedIn-inspired platform using a NoSQL database and Supabase backend.',
    dates: 'November 2025',
    tech: ['TypeScript', 'Supabase', 'NoSQL', 'Authentication'],
    github: null,
    demo: null,
  },
  {
    id: 2,
    title: 'Jesse Course World',
    description: 'A platform for selling trading and investment courses with administrative analytics and course management.',
    dates: 'August 2025 – September 2025',
    tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'React Router DOM', 'Vite'],
    features: [
      'CRUD operations for courses',
      'Secure admin dashboard with authentication',
      'Gallery for uploading and managing course screenshots',
      'Responsive, mobile-first UI',
      'Framer Motion animations',
      'Telegram integration for direct purchases',
    ],
    github: null,
    demo: null,
  },
  {
    id: 3,
    title: 'Real-Time Cloud-Native Monitoring App',
    description: 'Cloud-native monitoring solution for infrastructure observability.',
    dates: '2024',
    tech: ['AWS', 'Docker', 'Kubernetes', 'Python'],
    github: null,
    demo: null,
  },
]
