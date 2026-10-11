export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Cloud and Infrastructure',
    skills: [
      'Amazon Web Services (AWS)',
      'Microsoft Azure',
      'Google Cloud Platform (GCP)',
      'Cloud Computing',
      'Cloud Migration',
      'AWS Cloud Migration',
      'Azure DevOps Migration',
      'Infrastructure as a Service (IaaS)',
      'Cloud Security',
      'Amazon EC2',
      'Amazon EKS',
      'AWS Lambda',
    ],
  },
  {
    category: 'DevOps and Infrastructure as Code',
    skills: [
      'DevOps',
      'Infrastructure as Code (IaC)',
      'Terraform',
      'Azure DevOps Services',
      'Azure DevOps Pipelines',
      'Jenkins',
      'Git',
      'GitHub',
      'YAML',
      'Containerization',
      'Docker',
      'Kubernetes',
      'Trivy',
      'SonarQube',
      'KICS',
    ],
  },
  {
    category: 'Systems and Automation',
    skills: [
      'Linux',
      'Red Hat Enterprise Linux (RHEL)',
      'Linux System Administration',
      'Bash',
      'Networking',
      'Automation',
    ],
  },
  {
    category: 'Programming and Development',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'C',
      'C++',
      'Go',
      'React.js',
      'REST APIs',
      'React Router',
      'Tailwind CSS',
      'Cascading Style Sheets (CSS)',
      'JSON',
      'Object-Oriented Programming',
      'Data Structures and Algorithms',
    ],
  },
  {
    category: 'Databases and Security',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Database Fundamentals',
      'Authentication Systems',
      'JSON Web Token (JWT)',
      'Password Hashing',
      'Cryptography',
    ],
  },
  {
    category: 'Other',
    skills: [
      'Statistical Data Analysis',
      'Deep Learning',
      'Technical Writing',
    ],
  },
]
