export interface Experience {
  id: string
  company: string
  role: string
  type: string
  startDate: string
  endDate: string
  location: string
  description: string
  responsibilities: string[]
  technologies?: string[]
  badges?: string[]
  theme: 'accenture' | 'hacktoberfest' | 'girlscript' | 'geeksforgeeks'
  logo?: string
}

export const experiences: Experience[] = [
  {
    id: 'accenture',
    company: 'Accenture',
    role: 'Software Engineer',
    type: 'Full-time',
    startDate: 'May 2026',
    endDate: 'Present',
    location: 'India',
    description: 'Cloud Engineering, DevOps, Infrastructure as Code, CI/CD Migration, and Automation',
    theme: 'accenture',
    responsibilities: [
      'Migrating CI/CD workflows from AWS CodeBuild to Azure DevOps',
      'Building and maintaining Azure DevOps YAML pipelines and reusable templates',
      'Managing Terraform workflows including initialization, validation, planning, plan-destroy, apply, and destroy while preserving Terraform state',
      'Working with AWS IAM, OIDC, S3 remote state, DynamoDB state locking, and service connections',
      'Troubleshooting Terraform, backend, IAM, provider, and pipeline issues',
      'Automating workflows across Bitbucket repositories using Bash',
      'Integrating KICS infrastructure-as-code security scanning and dashboards',
      'Standardizing configuration and improving pipeline maintainability in collaboration with the team',
    ],
    technologies: ['Azure DevOps', 'Terraform', 'AWS', 'IAM', 'OIDC', 'S3', 'DynamoDB', 'Bash', 'KICS', 'Bitbucket', 'YAML'],
  },
  {
    id: 'hacktoberfest',
    company: 'Hacktoberfest',
    role: 'Open Source Contributor',
    type: 'Part-time',
    startDate: 'October 2024',
    endDate: 'October 2024',
    location: 'Remote',
    description: 'Open-source contributions with focus on Docker containerization',
    theme: 'hacktoberfest',
    badges: ['Level 1', 'Level 2', 'Level 3', 'Level 4'],
    responsibilities: [
      'Contributed to open-source projects during Hacktoberfest 2024',
      'Earned all four Hacktoberfest badges',
      'Contributed to projects focused on Docker containerization',
    ],
    technologies: ['Docker', 'Open Source'],
  },
  {
    id: 'girlscript',
    company: 'GirlScript Summer of Code',
    role: 'Open Source Contributor',
    type: 'Part-time',
    startDate: 'May 2024',
    endDate: 'July 2024',
    location: 'Remote',
    description: 'Docker containerization and MongoDB optimization contributions',
    theme: 'girlscript',
    responsibilities: [
      'Created separate Docker containers for frontend and backend components',
      'Implemented docker-compose.yml for container communication',
      'Refactored MongoDB connection for lazy initialization',
      'Added error handling for database connection lifecycle',
    ],
    technologies: ['Docker', 'Docker Compose', 'MongoDB'],
  },
  {
    id: 'geeksforgeeks',
    company: 'GeeksforGeeks',
    role: 'Technical Content Writer',
    type: 'Internship',
    startDate: 'December 2022',
    endDate: 'December 2023',
    location: 'Noida, Uttar Pradesh, India · Remote',
    description: 'Technical content writing for developer education and knowledge sharing',
    theme: 'geeksforgeeks',
    responsibilities: [
      'Technical content writing for developer education',
      'Created documentation and tutorials on Docker, YAML, and technical concepts',
    ],
    technologies: ['Docker', 'YAML', 'Technical Documentation'],
  },
]
